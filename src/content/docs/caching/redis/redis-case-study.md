---
title: Redis Case Study
author: Eirik Berget Haukeland <eirik-haukeland>
tags: Redis, case study, platform, cashing
---

## Introduction

Redis is an in-memory database with pupsub functionality. Typically, Redis is used as a caching layer for data that would 
otherwise be slow to get from a disk or database, therefore slowing down api requests.

### Well known companies that uses Redis

- GitHub[^7]
- Stack Overflow[^8]
- Trello[^6]

[Here is a more complete list from techstecks.io.](https://techstacks.io/tech/redis)

## Brief History

- May 2009: initial realise.
- May 2013: Redis was sponsored by Pivotal Software[^4].
- June 2015: Redis became funded by Redis Labs[^4].
- October 2018: Release of Redis 5.0, and introduction of Redis Stream.
- June 2020: Salvatore Sanfilippo[^1] hands off the role of maintainer to Yossi Gottlieb[^2] and Oran Agra[^3] who now 
manage it with a light governance model[^5].

## Main Features

- Redis is an in-memory database and as a result it is very fast.
- It has two ways to persist the data that is stored in case of a failure[^12]:
  - Continuously on each write, as it occurs (AFO in the docs)
  - database snapshots at an interval (RDB in the docs)
  - or do both.
- Redis supports pubsub messaging pattern[^13].
- In Redis there are two ways to handle synchronizing multiple Redis databases and high availability called sentinel[^10] and
the other is using Redis cluster[^11].

## Market Comparison

| Subject           |                                             Redis                                              |                                         Memcached                                          |
|:------------------|:----------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------:|
| Database Model    |                    Key-value store, document store[^14], vector store[^15]                     |                                      Key-value store                                       |
| Speed             |                                In-memory store gives good speed                                |                              In-memory store gives good speed                              |
| Scalability       |       You can scale Redis by connecting multiple Redis databases se sentinel or cluster        |                   All memcached instates are unaware of each other[^16]                    |
| High Availability |                       You can configure HA[^18] with sentinel or cluster                       |                                         No option                                          |
| Persistence       | Redis has a two options for persistence, though sometimes the data is not stored in time |                        There are some settings for persistence[^17]                        |
| When RAM full     |      Redis will give error messages on write commands. You can setup eviction rules[^19].      | When out of room Memcached will purge the older data in order of least recently used[^20]. |

## Getting Started

In this section, I will go over installing Redis and some basic use with Redis-cli and using a nodejs library call 
ioredis.

### Setting up Redis

To use Redis you can either install it on your server or use a service like [Redis Cloud](https://redis.com/try-free/). 
Here we will be using docker to install the 
[Redis server (link to the official Redis image on docker hub)](https://hub.docker.com/_/redis).  
If you want to do a more manual installation, feel free to look at Redis' own documentation for instructions:

- [Install Redis on Linux](https://redis.io/docs/install/install-redis/install-redis-on-linux/)
- [Install Redis on Mac](https://redis.io/docs/install/install-redis/install-redis-on-mac-os/)
- [Install Redis on Windows](https://redis.io/docs/install/install-redis/install-redis-on-windows/)

If you want to follow along this example and not have Docker running on your system, please look here for installation 
instructions:

- [Install Docker on Linux](https://docs.docker.com/desktop/install/linux-install/)
- [Install Docker on Mac](https://docs.docker.com/desktop/install/mac-install/)
- [Install Docker on Windows](https://docs.docker.com/desktop/install/windows-install/)

Open your terminal and run the following command:

```shell
docker run --name redis-test-server -p 6379:6379 -d --rm redis:latest
```

#### The installation command in step by step

- docker  
The name of the program to run.
- run  
Tells docker to install this container. [here is a complete list of docker subcommands.](https://docs.docker.com/engine/reference/commandline/cli/#subcommands)
- --name  
Sets the name we will use when accessing this docker container.
- -p  
Set the ports. The pattern here is port-outside-container:port-inside-container, so if port 6397 is already in use you can
change the number before the colon to a number to any port from 1024 that are not already in use (e.g. 1234:6397).
- -d  
This tells docker to start the container in the background, so we can use the terminal for other tings. If omitted we 
will see all the read and write logs appear in this terminal.
- --rm  
This tells docker to remove the container after you stop it.
- redis:latest  
This is the container we want to run, Redis in this case, and :latest specifies the version to use.

[For a list of available Redis versions see here.](https://hub.docker.com/_/redis/tags)

### Accessing Redis using redis-cli

As we are using docker to run Redis, we will be using the redis-cli bundled with the docker container. 
Run the following in the terminal:

```shell
docker exec -it redis-test-server redis-cli
```

#### The new instructions in command step by step

- exec  
This subcommand tells docker we want to execute a command inside the container.
- -it  
This stands for interactive terminal and means we want the to see and interact with the terminal inside the container.
- redis-test-server  
The name of the container we want to execute commands on.
- redis-cli  
The command we want to execute in the container. Note that this command must be available inside the image. The Redis 
image comes with redis-cli bundled.

#### Interacting with the Redis-cli

Redis has multiple types. In this study I will look at the following:

- Strings
- Lists
- Hashes

[See here for a full list of types.](https://redis.io/docs/data-types/)

And go over some commands you can use on those types.

##### Strings

###### To set a string value in the database use

```redis
set key value
```
*Note*: 
The value will always be set to a string if you want to use a space in the value then you need to wrap the value in quotes.
 
If the value was accepted it will return `OK`.

###### To retrieve a string value use

```redis
get key
```
If the key defined then it will return the value in this case like this `"value"`   
other vice if the key undefined then it will return `(nil)`

###### If you want to set a string if the key is not already in use then use

```redis
set key value2 nx
```
In this case as "key" is already set above it will return `(integer) 0` witch in this case is the same as `False` in 
javascript.  

If we used a different key like so:

```redis
set foo value2 nx
```

Assuming that foo has not been sett elsewhere it will return `(interger) 1` witch in this case is equal to `True` in 
javascript.

*Note:*  
`set [your Key] "[your value]" nx` has a shorthand version like this: `setnx [your Key] "[your value]"`

###### If you want to only set a variable if the key already is in use

```redis
set foo "bar" xx
```

When this is successful it will return `OK` if not then it will return `(nil)`.

###### How to set multiple values at once
```redis
mset key1 "foo" key2 "bar" key3 "baz"
```

If the command is accepted Redis will return `OK`.  
If you have more keys than values or one of your variables used a space without being wrapped in quotes, then Redis will 
return an error like this `(error) ERR wrong number of arguments for 'mset' command`.  

*Note:*  
`mset` will make multiple individual key/value sets these are in no way connected.

###### If you want to retrieve multiple keys at once
```redis
mget key1 key foo notSet
```
`mget` will return a list like this:  

```
1) "foo"
2) "value"
3) "bar"
4) (nil)
```

[For more string command see here.](https://redis.io/commands/?group=string)

##### Lists

###### Making a list

To make a list you can use noe of two commands:

```redis
lpush listName value value2 value3 value4
```
or 
```redis
rpush listName value value2 value3 value4
```

The difference is in which end it adds new items to the list:
- `lpush` will add them to the left/head of the list.
- `rpush` will add them to the right/tail of the list.

In both cases it will return `(integer) x` were "x" is the number of items in the list.

###### Removing an item for a list

Like with adding to a list removing also comes in two variants:

```redis
lpop listName
```
That removes from the left/head of the list.
or
```redis
rpop listName
```
That removes from the right/tail.
If successful it will return the value that has been removed if the list is empty it will return `(nil)`.

###### Removing multiple items

Both `lpop` and `rpop` can have an optional number after the listName indicating how many to pop e.g.

```redis
lpop listName 2
```
This will remove two items form the left/head of the list.

###### Moving items form one list to another

If you want to move an item between lists then you can use this command: `lmove` four arguments.

- The source list to take item form.
- The destination list to move item to.
- Left or right. Meaning take the first (leftmost) item or the last (rightmost) item form the source list.
- Left or right. Meaning place the item on the beginning (leftmost) or end (rightmost) side of the destination list.

```redis
lmove listName otherList left right
```
The above will move the first (leftmost) item in listName to the end (rightmost) of otherList.

###### Viewing the list

To view the list you use `lrange`.

```redis
lrange listName 0 -1
```

This will return from the first item in the list to the last.
If you only want to see the tree first it would look like this (keeping in mind that this is zero indexed):

```redis
lrange listName 0 2
```

If you do not want to see the first item, but from som later part of the list then you can do something like this:

```redis
lrange listName 2 -1
```

This will return form the third item in the list until the end.

*Note:*  
If you are trying to look at a list that is empty or are starting to look beyond where the list ends, it will return 
`(empty array)` but if part of what you are looking for exists it will give you the list matching your search.

[For more commands for lists see here.](https://redis.io/commands/?group=list)

##### Hashes

###### Creating or updating hashes

To create or change a hash we use `hset` followed by the hash name, and the key/values-pairs to add/change. 

```redis
hset hashName key1 foo key2 bar key three baz
```

*Note:*  
If a value includes a space you need to wrap that in quotes, because `hset` thinks you are each space represents the end 
of one value or key. If the resulting number of keys and values are not the same, you will get an error like this: 
`(error) ERR wrong number of arguments for 'hset' command` otherwise you will receive something like this `(integer) x`
where "x" is the number of key/value pairs.

###### Getting one key from a hash

To get only one value form a hash you use `hget` like this:

```redis
hget hashName key1
```

The expected result in this case is `"foo"`, if the hashName is not defined or the keyName is not in use you get `(nil)`
if you have used a name that is of a different type you get an error like this: 
`(error) WRONGTYPE Operation against a key holding the wrong kind of value`  
And if you have added more than noe key you get this type of error:  
`(error) ERR wrong number of arguments for 'hget' command`

###### Getting more than noe filed form a hash

To get more that noe field you do this: 
```redis
hmget hashName key1 key3 key5
```

If there is at least one key you get a list with the responses with either the value if the key exists or `(nil)`.  
If the hash does not exist then you will get all `(nil)`, and if you have not added less than two arguments you get this 
type of error: `(error) ERR wrong number of arguments for 'hmget' command`.

In this case we will receive:
```
1) "foo"
2) "baz"
3) (nil)
```

[For a complete list of hash commands see here.](https://redis.io/commands/?group=hash)

##### Managing data

###### Listing keys

To show a list of keys you use the `keys` keyword followed by a search pattern.

To get all keys you can use this:
```redis
keys *
```

If you want something that get both every thing that ends in "name" then someting like this will do:
```redis
keys *name
```

The data will be returned in a list like so:
```
1) firstname
2) middlename
3) lastname
4) funnyname
```

If there is no match then the result will be like this `(empty array)`.

[For more information on key searches see here.](https://redis.io/commands/keys/)

###### Delete data

To delete a key/value pair you use `del` like this:

```redis
del keyName
```

In return, you will get `(integer) x` where x is the number of keys deleted.

[For more information on del see here.](https://redis.io/commands/del/)

###### Delete after a set time

To set a TTL you use the `expire` key word followed by the key and then the time in seconds like this:

```redis
expire keyName 60
```

This will remove the key "keyName" after one minute.

[For more information on expire see here.](https://redis.io/commands/expire/)

#### Accessing the Redis with nodeJs

We will be using [the npm package ioredis](https://www.npmjs.com/package/ioredis?activeTab=readme) for manipulating the 
Redis DB.

[For more options in manipulating Redis from code see here.](https://redis.io/docs/connect/clients/)

##### Adding ioRedis to your project

We will be using npm to install ioredis like so:

```shell
npm i ioredis
```

##### Connecting to Redis

```javascript
import Redis from 'ioredis'

// By default whis will look at localhost:6379
const redis = new Redis()

// If you have started Redis on a different port like 1234
// then simpliy write the port number as the first argument like so
const redisCustomPort = new Redis(1234)

// If you have set Redis up on a different computer, then you need to 
// provide the port number and ip address or write it as a URL
const redisRemoteServerIpAddr = new Redis(6379, "198.51.100.0")
const redisRemoteServerUrl = new Redis("redis://example.com:6379")
```

##### Using ioRedis in your project

###### IoRedis basic use

ioRedis follow a very simple pattern with is this

`redis.[commad in lowercase](arugumnts)`

So if you want to add a string if the key is not already set you would do one of these:

```javascript
redis.set("mykey", "some value", "NX")

redis.setnx("myKey", "the value")
```

Or if you want to delete the key you could do this

```javascript
redis.del("myKey")
```

All the functions return promises which you can handle in various ways if you like:
```javascript
// await
const res = await redis.keys('*')
console.log(res)

// callback
redis.set('myKey', 'the value', (err, res) => {
  err
    ? console.error(err)
    : console.log(res)
})

// .then
redis.get('myKey')
  .then(res => console.log(res))

// or simply ignore it
redis.del('myKey')
```

###### IoRedis pipeline

Now if you are going to send multiple commands to Redis it will save you some time and bandwidth by queueing them up
in what's called a pipeline they will den be stored in memory until you call the exec function on the pipeline.

```javascript
const pipeline = reids.pipeline();
pipeline.set("myKey", "a value")

const doingSomeTing = 2 * math.random() * 10

pipeline.hset('hashName', 'foo', 'bar', 'baz', doingSomeTing)
pipeline.hget('hashNmae', 'baz')
pipeline.exec((outsideErr, outsideRes) => {
  // outsideErr is always null and outsideRes is an array with the responses from the commands
  
  outsideRes.forEach((err, res) => {
    if (err) {
      console.error(err)
    } else {
      console.log(res)
    }
  })
})

// you can now continue to add to the que but remeber to end with a piplene.exec()
```

###### For more info about ioredis:
- [npm page for ioRedis](https://www.npmjs.com/package/ioredis#quick-start)
- [ioRedis examples on GitHub](https://github.com/redis/ioredis/tree/ec42c82ceab1957db00c5175dfe37348f1856a93/examples)

## Conclusion

In comparison to other popular caching tools Redis offers a lot of flexibility in comparison with other in-memory databases.

While Redis offers a measure of persistence, it should not be used as the primary source of truth. As there are times 
when the database is not yet stored to file, and a failure at that time will result in data loss.

I would also advise you to look at eviction rules[^19] in case Redis runs out of memory.

## Definitions

RAM
: RAM, or Random Access Memory, is used by computers for storing temporary data or for quicker
access to data than on A hard drive.

database
: A program used for easy retrieval of data without the need to know where on the hard disk
that data is located.

API
: API, or Application Programming Interface, is a standardized way for programs to share data
usually over the internet.

npm 
: Npm or node package manager, is a method for getting and managing the dependencies for helper packages you use in 
your code.

TTL
: TTl or time to live, indicates how long until something is to be deleted.

pupsub
: Pubsub or publish–subscribe is a messaging pattern where publishers categorize messages into classes that are received
by subscribers.[^9] 

HA
: High availability is a characteristic of a system that aims to ensure an agreed level of operational performance, 
usually uptime, for a higher than normal period.[^18]

## References

- [Wikipedia article on Redis](https://en.wikipedia.org/wiki/Redis#History)
- https://redis.io/docs
- https://techstacks.io
- https://www.npmjs.com/package/ioredis
- https://hub.docker.com/_/redis
- https://docs.docker.com

## Additional Resources

- [Redis video tutorial series by Net Ninja](https://www.youtube.com/watch?v=8sHCdz_tOjk&list=PL4cUxeGkcC9h3V2eqhi8rRdIDJshP-b4P)

[^1]: Salvatore Sanfilippo (Antirez on Github). [Link to Salvatore Sanfilippo's GitHub Profile.](https://github.com/antirez)
[^2]: Yossi Gottlieb (yossigo on GitHub). [Link to Yossi Gottlieb's GitHub Profile.](https://github.com/yossigo)
[^3]: Oran Agra (oranagra on GitHub). [Link to Oran Agra's GitHub Profile.](https://github.com/oranagra)
[^4]: [List of Redis Sponsors.](https://redis.io/docs/about/sponsors/)
[^5]: [Post about the management of Redis.](https://redis.io/docs/about/governance/)
[^6]: [Link to the tech stack trello uses.](https://techstacks.io/stacks/trello/)
[^7]: [Link to GitHub tech stack.](https://techstacks.io/stacks/github/)
[^8]: [Link to the tech stack used by StackOverflow.](https://techstacks.io/stacks/stackoverflow/)
[^9]: Definition for pubsub is from the wikipedia article on the subject [link to arkticle on pupsub.](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
[^10]: [Link to sentinel client spec on redis.io.](https://redis.io/docs/reference/sentinel-clients/ )
[^11]: [Link to cluster spec on redis.io.](https://redis.io/docs/reference/cluster-spec/)
[^12]: [Link to persistence configuration on redis.io.](https://redis.io/docs/management/persistence/)
[^13]: [Link to pubsub configuration on redis.io.](https://redis.io/docs/interact/pubsub/)
[^14]: [Link to redis.io guide to use Redis as a document database.](https://redis.io/docs/get-started/document-database/)
[^15]: [Link to redis.io guide to use Redis as a vector database.](https://redis.io/docs/get-started/vector-database/)
[^16]: [Link to Memcached documentation concerning server connectivity.](https://github.com/memcached/memcached/wiki/Overview#servers-are-disconnected-from-each-other)
[^17]: [Link to Memcached documentation concerning persistence.](https://github.com/memcached/memcached/wiki/WarmRestart)
[^18]: Definition for high availability is from the wikipedia article on the subject. [Link to arkticle on high Availability.](https://en.wikipedia.org/wiki/High_availability)
[^19]: [Link to redis.io guide on eviction rules.](https://redis.io/docs/reference/eviction/)
[^20]: [Link to Memcached documentation on how items are stored.](https://github.com/memcached/memcached/wiki/Extstore#how-an-item-flows-to-storage)
