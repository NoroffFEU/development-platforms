# memcached-case-study-utviklern

## Author and date
**[Utviklern](https://github.com/utviklern)**, January 2025   

## 1. Introduction

### What is Memcached?

Memcached is like a superfast helper that stores data temporarily so your computer doesnt have to do extra work. Its often used to make websites load faster by keeping important stuff ready in memory instead of digging through a database every time. think about asking a librarian for the same book over and over, and then they just hand it to you immediately instead of going to fetch it every time.

### Why i chose Memcached?

Its easy to understnd, fast, and is used a lot to speed up websites. If youre looking for a easy way to make your page work better, Memcached is your friend.

---

## 2. History and background

- **The beginning**: Memcached was created by Brad Fitzpatrick on May 22, 2003, to make LiveJournal faster.
- **Open to everyone**: Its free and open source, which (of course) is why big companies started using it.
- **Who uses it?** Sites like Facebook, Twitter, and YouTube are just a few of the companies that depend on it to keep things smooth.
- **Fun fact**: In 2018, some misconfigured Memcached servers were used for massive cyberattacks. Hackers used it to flood sites like GitHub with huge amounts of traffic ([DDoS](https://en.wikipedia.org/wiki/Denial-of-service_attack)) up to 1.35 terabits per second!

---

## 3. What is Memcached used for?

### common uses

1. **Boosting the speed on webpages**  
   it saves results from databases so users dont have to wait for them to load every time.
   
2. **Saving user sessions**  
   It keeps user data ready so sites can load faster when people log back in.

3. **Storing content**  
   Things like images and videos can be cached to load quicker, which is super nice for websites and apps.

### more practical examples

- **Online shopping**: Stores product details so customers can browse faster.
- **Social media**: Users are able see posts and profiles almost instantly.
- **Video games**: Keeps track of game states for superfast updates.

---

## 4. Features

### What makes it awesome?

- **Fast memory storage**: It works entirely in RAM, so everything loads super quickly.
- **Distributed design**: You can add more servers to handle more data if needed.
- **Simple**: Its easy to use with commands like `set`, `get`, and `delete`.


### What are the downsides?

- **No saving**: If the server restarts, all cached data is gone.
- **No integrated security, or [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)**: Youll need to handle encryption yourself.

---

## 5. How does Memcached compare to competitors?

| **Feature**             | **Memcached** | **Redis**                          | **Hazelcast**                          |
|--------------------------|---------------|------------------------------------|----------------------------------------|
| **Saves data**           | No            | Yes                                | Yes                                    |
| **Backup copies**        | No            | Yes                                | Yes                                    |
| **Ease of use**          | Easy          | Medium                             | Hard                                   |
| **What its best at**    | Simple caching| Caching + advanced features        | Enterprise level systems               |
| **Scales easily**        | Yes           | Yes                                | Yes                                    |
| **Supports many languages** | Yes        | Yes                                | Yes                                    |
| **Special features**     | Few           | Lots                               | Advanced computations                  |
| **Speed**                | Super fast    | Super fast                         | Fast, but less so                      |

### How they’re different

- **Redis**: Redis is alot like Memcached but with more features (like saving data permanently). Its a bit more complicated but very powerful.
- **Hazelcast**: really great for big companies. It handles complex stuff like dividing tasks and recovering from problems.
- **Memcached**: Its all about speed and simplicity. Perfect for you if you just want a basic caching solution.

---

## 6. Demo time

Here’s a simple example of how to use Memcached with Node.js. It works on **Mac**, **Linux**, and **Windows**!  
[Check out the finished code on GitHub!](https://github.com/utviklern/case-study-memcached)

### Why use Node.js?

1. **Fast and asynchronous**: Node.js is great for handling lots of fast requests, just like Memcached.
2. **Popular**: Many web sites use Node.js, so its a practical example.
3. **Simple**: Its easy for demonstrating the main Memcached commands: `set`, `get`, and `delete`.
4. **Works everywhere**: Whether you’re on Windows, Mac, or Linux, Node.js is a good fit.

---

----------
# How to set up and use Memcached


## Step 1: Install Memcached

### On Mac

1. Install Memcached using [Homebrew](https://brew.sh/):
   ```bash
   brew install memcached
   ```
2. Start Memcached:
   ```bash
   memcached -d -m 64 -p 11211
   ```

### On Linux (Ubuntu/Debian)

1. Update your system and install Memcached:
   ```bash
   sudo apt update
   sudo apt install memcached
   ```
2. Start the Memcached service:
   ```bash
   sudo systemctl start memcached
   ```
3. Enable Memcached to run automatically at startup:
   ```bash
   sudo systemctl enable memcached
   ```

### On Windows

1. Install Memcached using [Chocolatey](https://chocolatey.org/):
   ```powershell
   choco install memcached
   ```
2. Start Memcached:
   ```powershell
   memcached.exe -d -m 64 -p 11211
   ```

---

## Step 2: Run a demo script with Node.js

### Prerequisites

1. Install [node.js](https://nodejs.org/en) (and npm if needed):
   ```bash
   # For Linux
   sudo apt install nodejs npm

   # For Mac
   brew install node
   ```

2. Navigate to your project folder and install required dependencies (remember node_modules to .gitignore):
   ```bash
   mkdir memcached-demo && cd memcached-demo
   touch .gitignore && echo "node_modules/" >> .gitignore
   npm init -y
   npm install memcached
   ```

### Write the demo script

Create a file called `memcached-demo.js` and copy the following code:

```javascript
const Memcached = require('memcached');

// Connect to Memcached server
const memcached = new Memcached('localhost:11211');

function demonstrateMemcached() {
  const key = 'exampleKey';
  const value = 'Hello from Memcached!';

  // step 1: set a value
  memcached.set(key, value, 10, (err) => {
    if (err) {
      console.error('Error setting value:', err);
      return;
    }
    console.log(`Step 1: Set Key "${key}" with Value "${value}"`);

    // step 2: get the value
    memcached.get(key, (err, data) => {
      if (err) {
        console.error('Error getting value:', err);
        return;
      }
      console.log(`Step 2: Got Key "${key}" with Value "${data}"`);

      // step 3: delete the value
      memcached.del(key, (err) => {
        if (err) {
          console.error('Error deleting value:', err);
          return;
        }
        console.log(`Step 3: Deleted Key "${key}"`);

        // step 4: confirm deletion
        memcached.get(key, (err, data) => {
          if (err) {
            console.error('Error fetching value:', err);
            return;
          }
          console.log(`Step 4: Key "${key}" after deletion:`, data || 'Not found (as expected)');
          memcached.end();
        });
      });
    });
  });
}

demonstrateMemcached();
```

---

## Step 3: Run the demo script

Run the script using Node.js:

```bash
node memcached-demo.js
```

### What you should see
```plaintext

Step 1: Set Key "exampleKey" with Value "Hello from Memcached!"

Step 2: Got Key "exampleKey" with Value "Hello from Memcached!"

Step 3: Deleted Key "exampleKey"

Step 4: Key "exampleKey" after deletion: Not found (as expected)
```

---

## Best practices for using Memcached

1. **Manage memory usage**: Since it stores data in RAM, allocate enough memory without overloading your server.
2. **Secure your setup**: It doesnt have built in encryption. Use firewalls or private networks to restrict access (consider using [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)).
3. **Cache what matters**: Cache frequently accessed or time consuming data and use appropriate expiration times ([TTL](https://en.wikipedia.org/wiki/Time_to_live)).
4. **Handle failures gracefully**: It doesnt save data after a server restart, so make sure your app can handle missing data.
5. **Scale out**: Use multiple Memcached servers to handle more traffic and balance the load.

---

## Conclusion

Memcached is a simple and powerful tool for caching data to make your apps faster. Whether youre building a small project or a massive system, it can help reduce database load and improve performance. Give it a try!

----------

## 9. References

- **Official memcached docs**: [https://memcached.org/](https://memcached.org/)
- **Brad Fitzpatrick on memcached**: “Scaling web applications with memcached”
- **Install guides**: [Homebrew](https://brew.sh/), [Ubuntu](https://ubuntu.com/), [Chocolatey](https://chocolatey.org/), [node.js](https://nodejs.org/en)
- **Memcached wikipedia**: [wikipedia.org/wiki/Memcached](https://en.wikipedia.org/wiki/Memcached)
- **Time To Live (TTL)** [https://en.wikipedia.org/wiki/Time_to_live](https://en.wikipedia.org/wiki/Time_to_live)
- **Transport Layer Security (TLS)** [https://en.wikipedia.org/wiki/Transport_Layer_Security](https://en.wikipedia.org/wiki/Transport_Layer_Security)
- **distributed denial-of-service attack**[DDoS](https://en.wikipedia.org/wiki/Denial-of-service_attack)


----------


## 10. Other resources

- **Memcached github repo**: [ https://github.com/memcached/memcached]( https://github.com/memcached/memcached)
- **Dilinger markdown editor**: [ https://dillinger.io/]( https://dillinger.io/)
___

