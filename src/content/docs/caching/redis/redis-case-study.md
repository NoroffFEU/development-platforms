---
title: Redis Case Study
author: [Eirik Berget Haukeland (eirik-haukeland on GitHub)](https://github.com/Eirik-Haukeland)
tags: redis, case study, platform, cashing
---

## Introduction

Redis is an in-memory database with pupsub functionality. Typically, Redis used as a caching layer for data that would 
otherwise be slow to get from disk/database therefore slow down api requests.

### Well known companies that uses Redis

- GitHub[^7]
- Stack Overflow[^8]
- Trello[^6]

[Here is a more complete list from techstecks.io](https://techstacks.io/tech/redis)

## Brief History

- May 2009: initial realise
- May 2013: Redis was sponsored by pivotal Software[^4]
- June 2015: Redis became funded by Redis Labs[^4]
- October 2018: Release of Redis 5.0, and introduction of Redis Stream
- June 2020: Salvatore Sanfilippo[^1] hands of the role of maintainer to Yossi Gottlieb[^2], and Oran Agra[^3] who now 
manage it with a light governance model[^5]

## Main Features

- redis is an in-memory database an as a resault it is weary fast.
- it has two different ways to back up the data that is stored in case of a failure where you can either backup each write
as it occurs, backup the entire database at an interval, if there has been a change, or do both[^12]
- as well as two ways to handle synchronizing multiple redis databases and high availability called sentinel[^10] and
the other is using clusters[^11] with cluster
- Redis has the pubsub functionality[^13]

## Market Comparison

| subject           | redis | memcached | mongodb |
|:------------------|-------|-----------|---------|
| speed             |       |           |         |
| reliability       |       |           |         |
| scalability       |       |           |         |
| High Availability |       |           |         |

## Getting Started

### setting up the redis server

to use redis you can either install it on your server or use a service like [redis Cloud](https://redis.com/try-free/). 
Here we will be using docker to install the 
[redis server (link to the official redis image on docker hub)](https://hub.docker.com/_/redis), but if you want to do a
more manual installation feel free to look at redis own documentation for instructions:

- [install redis on Linux](https://redis.io/docs/install/install-redis/install-redis-on-linux/)
- [install redis on Mac](https://redis.io/docs/install/install-redis/install-redis-on-mac-os/)
- [install redis on Windows](https://redis.io/docs/install/install-redis/install-redis-on-windows/)

if you want to follow along this example and not have a docker running on your system please look here for installation 
instructions:

- [install docker on Linux](https://docs.docker.com/desktop/install/linux-install/)
- [install docker on Mac](https://docs.docker.com/desktop/install/mac-install/)
- [install docker on Windows](https://docs.docker.com/desktop/install/windows-install/)

in open your terminal and run the following command:

```shell
$ docker run --name redis-test-server -p 6379:6379 -d --rm redis:latest
```

#### the installation command in step by step:

- $  
do not copy or write this symbol in to the terminal.  
This is meanly a convention telling the reader what level of authorization is needed `$` indicate that a regular user 
can use this command if you see a `#` then that command needs sudo/administrator privileges.  
but nowadays, it is more common to always use `$` and prefix the command with `sudo` instead if it needs those privileges
- docker  
the name of program to run
- run  
tells docker to install this container if you already have a container you can use different subcommands like: 
start (starts container specified by name or id that is inactive), ps (lists the containers docker knows about), 
rm (removes container specified by name or id that is inactive), and many more 
[here is a complete list of docker subcommands](https://docs.docker.com/engine/reference/commandline/cli/#subcommands)
- --name  
set the name we will use when accessing this docker container
- -p  
set the ports the pattern here is port-outside-container:port-inside-container so if port 6397 is already in use you can
change the number before the colon to a number to any port from 1025 that are not already in use 
(f.exs 1234:6397)
- -d  
this tells docker to start the container in the background so that we can use the terminal for other tings. if omitted we 
will see all the read and write logs appear in this terminal
- --rm  
this tells docker to remove the container after you stop it
- redis:latest  
This is the container we want to run, redis in this case, and :latest specify the version to use 
[For a list of available redis versions see here.](https://hub.docker.com/_/redis/tags)

### accessing the redis with redis-cli

As we are using docker to run redis. we will be using the redis-cli bundled with the docker container. 
Then run the following in the terminal:

```shell
$ docker exec -it redis-test-server redis-cli
```

#### the new instructions in command step by step:

- exec  
this subcommand tells docker we want to execute a command inside the docker container
- -it  
this stands for interactive terminal and means we want the to see and interact with the terminal inside the container
- redis-test-server  
the name of the container we want to execute commands on
- redis-cli  
The command we want to execute in the container. Note that this command must be available inside the image. The redis 
image comes with redis-cli bundled


#### interacting with the redis-cli

Redis has multiple types. In this study I will look at the following:

- strings
- lists
- hashes

[see here for a full list of types](https://redis.io/docs/data-types/)

and go over some commands you can use on those types

##### strings

###### to set a string value in the database use:

```redis
> set key value
```
*Note*: 
the value will always be set to a string if you want to use a space in the value then you need to wrap the value in quotes
 
if the value was accepted it will return `OK`

###### to retrieve a string value use:

```redis
> get key
```
if the key defined then it will return the value in this case like this `"value"`   
other vice if the key undefined then it will return `(nil)`

###### if you want to set a string if the key is not already in use then use

```redis
> set key value2 nx
```
in this case as "key" is already set above it will return `(integer) 0` witch in this case is the same as `False` in 
javaScript.  

if we used a different key like so:

```redis
> set foo value2 nx
```

assuming that foo has not been sett elsewhere it will return `(interger) 1` witch in this case is equal to `True` in 
javascript

*Note:*  
`set [your Key] "[your value]" nx` has a shorthand version like this: `setnx [your Key] "[your value]"`

###### if you want to only set a variable if the key already is in use

```redis
> set foo "bar" xx
```

when this is successful it will return `OK` if not then it will return `(nil)`

###### To set multiple values at once you can do that like this
```redis
> mset key1 "foo" key2 "bar" key3 "baz"
```

on an acceptable commands redis will return `OK`  
if you have more keys than values or one of your variables used a space without being wrapped in quotes then redis will 
return an error like this `(error) ERR wrong number of arguments for 'mset' command`.  

*Note:*  
`mset` will make multiple individual key/value sets these are in no way connected  

###### if you want to retrieve multiple keys at once
```redis
> mget key1 key foo notSet
```
`mget` will return a list like this:  

```
1) "foo"
2) "value"
3) "bar"
4) (nil)
```

[for more string command see here](https://redis.io/commands/?group=string)

##### lists

###### making a list

to make a list you can use noe of two commands:

```redis
> lpush listName value value2 value3 value4
```
or 
```redis
> rpush listName value value2 value3 value4
```

the difference is when you then go to add new items to the list:
- `lpush` will add them to the left/head of the list
- `rpush` will add them to the rigth/tail of the list

in both cases it will return `(integer) x` were "x" is the number of items in the list

###### removing an item for a list

like with adding to a list removing also comes in two variants:

```redis
> lpop listName
```
that removes from the left/head of the list
or
```redis
> rpop listName
```
that removes from the right/tail
if successful it will return the value that has been removed if the list is empty it will return `(nil)`

###### removing multiple items

both `lpop` and `rpop` can have an optional number after the listName indicating how many to pop f.exs

```redis
> lpop listName 2
```
this will remove two items form the left/head of the list

###### moving items form one list to another

if you want to move an item between lists then you can use this command: `lmove` four arguments

- the source list to take item form
- the destination list to move item to
- left or right. meaning take the first (leftmost) item or the last (rightmost) item form the source list
- left or right. meaning place the item on the beginning (leftmost) or end (rightmost) side of the destination list

```redis
> lmove listName otherList left right
```
the above will move the first (leftmost) item in listName to the end (rightmost) of otherList

###### viewing the list

to view the list you use `lrange`

```redis
> lrange listName 0 -1
```

this will return from the first item in the list to the last.
if you only want to see the tree first it would look like this (keeping in mind that this is zero indexed)

```redis
> lrange listName 0 2
```

if you do not want to see the first item, but from som later part of the list then you can do something like this

```redis
> lrange listName 2 -1
```

this will return form the third item in the list until the end

*Note:*  
if you are trying to look at a list that is empty or are starting to look beyond where the list ends it will return 
`(empty array)` but if part of what you are looking for exists it will give you the list matching your search.

[for more commands for lists see here](https://redis.io/commands/?group=list)

##### hashes

###### creating or updating hashes

to create or change a hash we use `hset` followed by the hash to add or change and the key, values to add/change 

```redis
> hset hashName key1 foo key2 bar key three baz
```

*Note:*  
if a value includes a space you need to wrap that in quotes or the `hset` thinks you are each space represents the end 
of one value or key if the resulting number of keys and values are not the same you will get an error like this: 
`(error) ERR wrong number of arguments for 'hset' command` other vice you will receive something like this `(integer) x`
where "x" is the number of key/value pairs

###### getting one key from a hash

to get only one value form a hash you use `hget` like this

```redis
> hget hash key1
```

the expected resault in this case is `"foo"`, if the hashName is not defined or the keyName is not in use you get `(nil)`
if you have used a name that is of a different type you get an error like this 
`(error) WRONGTYPE Operation against a key holding the wrong kind of value` and if you have added more than noe key you 
get this type of error: `(error) ERR wrong number of arguments for 'hget' command`

###### getting more than noe filed form a hash

to get more that noe field you do this: 
``` redis
> hmget hash key1 key3 key5
```

if there is at leased one key you get a list with the responses with either the value if the key exists or `(nil)`.  
if the hash do not exist then you will get all `(nil)`  
and if you have not added less than two arguments you get this type of error: 
`(error) ERR wrong number of arguments for 'hget' command`
in this case we will receive:
```
1) "foo"
2) "baz"
3) (nil)
```

[for a complete list of hash commands see here](https://redis.io/commands/?group=hash)

##### managing data

###### listing keys

to show a list of keys you use the `keys` keyword followed by a search pattern

to get all keys you can use this:
```redis
> keys *
```

if you want something that get both every thing that ends in "name" then someting like this will do:
```redis
> keys *name
```

the data will be returned in a list like so:
```
1) firstname
2) middlename
3) lastname
4) funnyname
```

if there is no match then the resault will be like this `(empty array)`

[for more information on key searches see here](https://redis.io/commands/keys/)

###### delete data

to delete a key/value pair you use `del` like this

```redis
> del keyName
```

if the key existed you will get `(integer) 1` to indicate that the deletion where completed  
if the key did not exist then you will get `(integer) 0` to indicate that something was wrong

[for more information on del see here](https://redis.io/commands/del/)

###### delete after a set time

to set a ttl you use the `expire` key word followed by the key and then the time in seconds like this:

```redis
> expire keyName 60
```

this will remove the key "keyName" after one minute

[for more information on expire see here](https://redis.io/commands/expire/)

#### accessing the redis with nodeJs

we will be using [the npm package ioredis](https://www.npmjs.com/package/ioredis?activeTab=readme) for manipulating the 
redis db

[for more options in manipulating redis from code see here](https://redis.io/docs/connect/clients/)

##### adding ioRedis to your project

we will be using npm to install ioredis like so:

```shell
$ npm i ioredis
```

##### contacting the redis database

```javascript
import Redis from 'ioredis'

// by default whis will look at localhost:6379
const redis = new Redis()

// if you have startd redis on addiferent port like 1234
// then simpliy write the port number as the first argument like so
const redisCustomPort = new Redis(1234)

// if you have sett redis up on a differnt computer then you need to 
// provide the portnumber and ip address or write it as a url
const redisRemoteServerIpAddr = new Redis(6379, "198.51.100.0")
const redisRemoteServerUrl = new Redis("example.com:6379")
```

##### using ioRedis in your project

###### ioRedis basic use

ioRedis follow a weary simple pattern with is this

`redis.[commad in lowercase](arugumnts)`

so if you want to add a string if the key is not already set you would do one of these:

```javascript
redis.set("mykey", "some value", "NX")

redis.setnx("myKey", "the value")
```

or if you want to delete the key you could do this

```javascript
redis.del("myKey")
```

all the functions return promises witch you can handle in various ways if you like:
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

###### ioRedis pipeline

now if you are going to send multiple commands to redis it will save you some time and bandwidth by queueing them up
in what's called a pipeline they will den be stored in memory until you call the exec function on the pipeline

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

###### for more info about ioredis:
- [npm page for ioRedis](https://www.npmjs.com/package/ioredis#quick-start)
- [ioRedis examples on GitHub](https://github.com/redis/ioredis/tree/ec42c82ceab1957db00c5175dfe37348f1856a93/examples)

## Conclusion



## Definitions

RAM
: RAM, or Random Access Memory, is used by computers for storing temporary data or for quicker
access to data than on A hard drive.

database
: a program used for easy retrieval of data without the need to know where on the hard disk
that data is located.

API
: API, or Application Programming Interface, is a standardized way for programs to share data
usually over the internet

npm 
: npm or node package manager, is a method for getting and managing the dependencies for helper packages you use in 
your code

ttl
: ttl or time to live, indicates how long until something is to be deleted

pupsub
: pubsub or publish–subscribe is a messaging pattern where publishers categorize messages into classes that are received
by subscribers[^9] 

## References

- [wikipedia article on redis](https://en.wikipedia.org/wiki/Redis#History)
- https://redis.io/docs
- https://techstacks.io
- https://www.npmjs.com/package/ioredis
- https://hub.docker.com/_/redis
- https://docs.docker.com

## Additional Resources

- [Redis video tutorial series by Net Ninja](https://www.youtube.com/watch?v=8sHCdz_tOjk&list=PL4cUxeGkcC9h3V2eqhi8rRdIDJshP-b4P)

[^1]: Salvatore Sanfilippo (Antirez on Github). [link to Salvatore Sanfilippo's GitHub Profile](https://github.com/antirez)
[^2]: Yossi Gottlieb (yossigo on GitHub). [link to Yossi Gottlieb's GitHub Profile](https://github.com/yossigo)
[^3]: Oran Agra (oranagra on GitHub). [link to Oran Agra's GitHub Profile](https://github.com/oranagra)
[^4]: [list of Redis Sponsors](https://redis.io/docs/about/sponsors/)
[^5]: [post about the management of Redis](https://redis.io/docs/about/governance/)
[^6]: [link to the tech stack trello uses](https://techstacks.io/stacks/trello/)
[^7]: [link to GitHub tech stack](https://techstacks.io/stacks/github/)
[^8]: [link to the tech stack used by StackOverflow](https://techstacks.io/stacks/stackoverflow/)
[^9]: Definition for pubsub is from the wikipedia article on the subject [link to arkticle on pupsub](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
[^10]: [link to sentinel client spec on redis.io](https://redis.io/docs/reference/sentinel-clients/ )
[^11]: [link to cluster spec on redis.io](https://redis.io/docs/reference/cluster-spec/)
[^12]: [link to persistence configuration on redis.io](https://redis.io/docs/management/persistence/)
[^13]: [link to pubsub configuration on redis.io](https://redis.io/docs/interact/pubsub/)