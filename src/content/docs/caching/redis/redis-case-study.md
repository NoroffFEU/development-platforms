---
title: Redis Case Study
author: [Eirik Berget Haukeland (eirik-haukeland on GitHub)](https://github.com/Eirik-Haukeland)
tags: redis, case study, platform, cashing
---

## Introduction

Redis is a database living that store its data in a computers RAM. it is intended to be used
for sort term storage of data to limit the amount of calls made to a database and to speed up
data retrieval for API calls.

### Well known Companies that uses Redis

- GitHub[^7]
- stackOverflow[^8]
- trello[^6]

[Here is a more complete list from techstecks.io](https://techstacks.io/tech/redis)

## Brief History

- May 2009: initial realise
- May 2013: Redis was sponsored by pivotal Software[^4]
- June 2015: Redis became funded by Redis Labs[^4]
- October 2018: Release of Redis 5.0, and introduction of Redis Stream
- June 2020: Salvatore Sanfilippo[^1] hands of the role of maintainer to Yossi Gottlieb[^2], and Oran Agra[^3] who now manage it with a light governance model[^5]

## Main Features



## Market Comparison



## Getting Started

### setting up the redis server

to use redis you can either install it on your server or use a service like [redis Cloud](https://redis.com/try-free/). 
Here we will be using docker to install the [redis server (link to the official redis image on docker hub)](https://hub.docker.com/_/redis), but if you want to do a more manual installation feel free to look at redis own documentation for instructions:

- [install redis on Linux](https://redis.io/docs/install/install-redis/install-redis-on-linux/)
- [install redis on Mac](https://redis.io/docs/install/install-redis/install-redis-on-mac-os/)
- [install redis on Windows](https://redis.io/docs/install/install-redis/install-redis-on-windows/)

if you want to follow along this example and not have a docker running on your system please look here for installation instructions:

- [install docker on Linux](https://docs.docker.com/desktop/install/linux-install/)
- [install docker on Mac](https://docs.docker.com/desktop/install/mac-install/)
- [install docker on Windows](https://docs.docker.com/desktop/install/windows-install/)

*Note*: 
you might need to have administration privileges if this is sett up simply prefix the 
command with `sudo` on linux, mac or when using WSL. You will then be prompted for your 
user password.  
if you are on window and not using WSL then you need to restart the terminal as an
administrator (I do not have experience developing on window so if there is a better 
solution I don't know)

in open your terminal and run the following command:

```shell
$ docker run --name redis-test-server -p 6397:6397 -d redis:latest
```

#### the installation command in step by step:

- $  
do not copy write this symbol in to the terminal.  
This is meanly a convention telling the reader what level of authorization is needed `$` indicate that a regular user can use this command if you see a `#` then that command needs sudo/administrator privileges.  
but nowadays, it is more common to always use `$` and prefix the command with `sudo` instead if it needs those privileges
- docker  
the name of program to run
- run  
tels docker to install this container if you already have a container you can use different subcommands like: start (starts container specified by name or id that is inactive), ps (lists the containers docker knows about), rm (removes container specified by name or id that is inactive), and many more [here is a complete list of docker subcommands](https://docs.docker.com/engine/reference/commandline/cli/#subcommands)
- --name  
set the name we will use when accessing this docker container
- -p  
set the ports the pattern here is port-outside-container:port-inside-container so if port 6397 is already in use you can change the number before the colon to a number to any port between 1025 and 65535 that are not already in use (f.exs 1234:6397)
- -d  
this tels docker to start the server in the background so that we can use the terminal for other tings. if omitted we will see all the read and write logs appear in this terminal
- redis:latest  
here we say that the container we want to make is the one named redis and the :latest specify the version to use [for a list of available redis versions see here](https://hub.docker.com/_/redis/tags)


### accessing the redis server

first we will look at accessing the redis database from the command line. You do this by using redis-cli. As we are using docker to run redis.

#### redis-cli

to use redis-cli on a docker container enter this in to the terminal:

```shell
docker exec -it redis-test-server redis-cli
```

##### the new instructions in command step by step:

- exec  
this subcommand tells docker we want to execute a command inside the docker container
- -it  
this stands for interactive terminal and means we want the to see and interact with the terminal inside the container
- redis-test-server  
the name of the server we want to execute commands on
- redis-cli  
the command we want to execute in the container. note that this command must be installed on the docker image, but need not be on the host machine. if you have not installed redis or redis-cli on your host machine all ready you are unlikely to find it there, but it is included on the docker image by default and so can be used in side the container

##### interacting with the redis-cli

redis have multiple types in this study I will look at three:

- strings
- lists
- hashes

[see here for a full list of types](https://redis.io/docs/data-types/)

and go over some commands you can use on those types

###### strings

**to set a string value in the database use:**

```redis
> set key value
```
*Note*: 
the value will always be set to a string if you want to use a space in the value then you need to wrap the value in quotes
 
if the value was accepted it will return `OK`

**to retrieve a string value use:**

```redis
> get key
```
if the key definded then it will return the value in this case like this `"value"`   
other vice if the key undefined then it will return `(nil)`

**if you want to set a string if the key is not already in use then use**

```redis
> set key value2 nx
```
in this case as "key" is allready set above it will return `(integer) 0` witch in this case is the same as `False` in javaScript.  

if we used a different key like so:

```redis
> set foo value2 nx
```

assuming that foo has not been sett elsewhere it will return `(interger) 1` witch in this case is equal to `True` in javascript

*Note:*  
`set [your Key] "[your value]" nx` has a shorthand version like this: `setnx [your Key] "[your value]"`

**if you want to only set a variable if the key already is in use**

```redis
> set foo "bar" xx
```

when this is successful it will return `OK` if not then it will return `(nil)`

**To set multiple values at once you can do that like this**
```redis
> mset key1 "foo" key2 "bar" key3 "baz"
```

on an acceptable commands redis will return `OK`  
if you have more keys than values or one of your variables used a space without being wrapped in quotes then redis will return an error like this `(error) ERR wrong number of arguments for 'mset' command`.  

*Note:*  
`mset` will make multiple individual key/value sets these are in no way connected  

**if you want to retreave multiple keys at once**
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

###### lists

**making a list**

to make a list you can use noe of two commands:

```redis
> lpush listeName value value2 value3 value4
```
or 
```redis
> rpush listeName value value2 value3 value4
```

the difference is when you then go to add new items to the list:
- `lpush` will add them to the left/head of the list
- `rpush` will add them to the rigth/tail of the list

in both cases it will return `(integer) x` were "x" is the number of items in the list

**removing items for a list**

like with adding to a list removing also comes in two variants:

```redis
> lpop listeName
```
that removes from the left/head of the list
or
```redis
> rpop listeName
```
that removes from the right/tail
if successful it will return the value that has been removed if the list is empty it will return `(nil)`

**removing multipe items**

both `lpop` and `rpop` can have an optional number after the listName indicating how many to pop f.exs

```redis
> lpop listeName 2
```
this will remove two items form the left/head of the list

**moving items form one list to another**

if you want to move an item between lists then you can use this command: `lmove` four arguments

- the source list to take item form
- the destination list to move item to
- left or right. meaning take the first (leftmost) item or the last (rightmost) item form the source list
- left or right. meaning place the item on the beginning (leftmost) or end (rightmost) side of the destination list

```redis
> lmove listeName otherList left right
```
the above will move the first (leftmost) item in listName to the end (rightmost) of otherList

**viewing the list**

to view the list you use `lrange`

```redis
> lrange listeName 0 -1
```

this will return from the first item in the list to the last.
if you only want to see the tree first it would look like this (keeping in mind that this is zero indexed)

```redis
> lrange listeName 0 2
```

if you do not want to see the first item, but from som later part of the list then you can do something like this

```redis
> lrange listeName 2 -1
```

this will return form the third item in the list until the end

*Note:*  
if you are trying to look at a list that is empty or are starting to look beyond where the list ends it will return `(empty array)`  
but if part of what you are looking for exists it will give you the list matching your search.

[for more commands for lists see here](https://redis.io/commands/?group=list)

###### hashes

**creating or updating hashes**

to create or change a hash we use `hset` followed by the hash to add or change and the key, values to add/change 

```redis
> hset hashName key1 foo key2 bar key three baz
```

*Note:*  
if a value includes a space you need to wrap that in quotes or the `hset` thinks you are each space represents the end of one value or key  
if the resulting number of keys and values are not the same you will get an error like this: `(error) ERR wrong number of arguments for 'hset' command` other vice you will receive something like this `(integer) x` where "x" is the number of key/value pairs

**getting one key from a hash**

to get only one value form a hash you use `hget` like this

```redis
> hget hash key1
```

the expected resault in this case is `"foo"`, if the hashName is not defined or the keyName is not in use you get `(nil)`
if you have used a name that is of a different type you get an error like this `(error) WRONGTYPE Operation against a key holding the wrong kind of value` and if you have added more than noe key you get this type of error: `(error) ERR wrong number of arguments for 'hget' command`

**getting more than noe filed form a hash**

to get more that noe field you do this: 
``` redis
> hmget hash key1 key3 key5
```

if there is at leased one key you get a list with the responses with either the value if the key exists or `(nil)`.  
if the hash do not exist then you will get all `(nil)`  
and if you have not added less than two arguments you get this type of error: `(error) ERR wrong number of arguments for 'hget' command`
in this case we will receive:
```
1) "foo"
2) "baz"
3) (nil)
```

[for a complete list of hash commands see here](https://redis.io/commands/?group=hash)

##### using redis in nodeJs

we will be using [the npm package ioredis](https://www.npmjs.com/package/ioredis?activeTab=readme) for manipulating the redis db

[for more options in manipulating redis from code see here](https://redis.io/docs/connect/clients/)

###### adding ioRedis to your project



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

WSL
: WSL or Windows subsystem for linux, is an optional terminal in the Windows operating system that allows for the use of tools developed to be used on linux.

## References

- [wikipedia article on redis](https://en.wikipedia.org/wiki/Redis#History)

## Additional Resources

- [Redis video tutorial series by Net Ninja](https://www.youtube.com/watch?v=8sHCdz_tOjk&list=PL4cUxeGkcC9h3V2eqhi8rRdIDJshP-b4P)

## footnotes
[^1]: Salvatore Sanfilippo (Antirez on Github). [link to Salvatore Sanfilippo's GitHub Profile](https://github.com/antirez)
[^2]: Yossi Gottlieb (yossigo on GitHub). [link to Yossi Gottlieb's GitHub Profile](https://github.com/yossigo)
[^3]: Oran Agra (oranagra on GitHub). [link to Oran Agra's GitHub Profile](https://github.com/oranagra)
[^4]: [list of Redis Sponsors](https://redis.io/docs/about/sponsors/)
[^5]: [post about the management of Redis](https://redis.io/docs/about/governance/)
[^6]: [link to the tech stack trello uses](https://techstacks.io/stacks/trello/)
[^7]: [link to GitHub tech stack](https://techstacks.io/stacks/github/)
[^8]: [link to the tech stack used by StackOverflow](https://techstacks.io/stacks/stackoverflow/)



## stikkord fra Emil
- sentinel
- redis cluster
- nodejs ioredis
- cli