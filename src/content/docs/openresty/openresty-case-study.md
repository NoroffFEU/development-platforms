---
title: OpenResty Case Study
author: Erik Torkildsen <kiretwo>  
tags: openresty, web-server, lua, nginx, docker, case-study  
---

## Introduction  
OpenResty is a high-performance web platform that embeds the Lua scripting language into **Nginx**, enabling developers to build dynamic web applications, APIs, and gateways. By combining Nginx’s speed with Lua’s flexibility, OpenResty solves problems like real-time request processing, edge computing, and scalable API management. Its unique integration of Lua scripting directly into Nginx makes it a standout tool for low-latency, high-concurrency use cases.

---

## Brief History  
- **2007**: Created by **Yichun Zhang** (agentzh) to address scalability issues at Taobao (Alibaba’s e-commerce platform).  
- **2011**: Open-sourced, gaining adoption for its lightweight scripting capabilities.  
- **2015**: Adopted by **Cloudflare** for edge security tools like Web Application Firewalls (WAF).  
- **2017**: Became the foundation for **Kong API Gateway**, a widely-used open-source API management tool.  

---

## Main Features  

| Feature               | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **Lua Scripting**     | Embed Lua code directly into Nginx for dynamic routing, authentication, and request/response manipulation. |
| **High Performance**  | Leverages Nginx’s event-driven architecture and LuaJIT for sub-millisecond latency. |
| **Extensibility**     | Integrates with Redis, MySQL, Kafka, and more via pre-built Lua modules (e.g., `lua-resty-redis`). |
| **Scalability**       | Handles 10,000+ concurrent connections with minimal CPU/memory usage.       |

---

## Strengths

- **Blazing Fast Performance**: Built on Nginx and LuaJIT, OpenResty handles 10,000+ concurrent connections with minimal latency, outperforming Node.js and Python for network-bound tasks.
- **Dynamic Scripting**: Lua integration allows logic injection at any stage of the request lifecycle (e.g., authentication, rate limiting).
- **Lightweight**: Consumes fewer resources than traditional app servers, making it ideal for edge devices and microservices.
- **Extensible Ecosystem**: Pre-built modules (e.g., lua-resty-redis, lua-resty-mysql) simplify integrations with databases and APIs.
- **Community Support**: Active open-source community with 500+ contributors and enterprise adoption (e.g., Cloudflare, Kong).

## Weaknesses

- **Steep Learning Curve**: Requires expertise in both Nginx and Lua, which are niche compared to JavaScript or Python.
- **Limited Ecosystem**: Fewer libraries and tools compared to Node.js or Go.
- **Niche Use Cases**: Optimized for gateways/proxies, not CPU-heavy tasks like machine learning or complex business logic.
- **Debugging Complexity**: Troubleshooting Lua scripts within Nginx configurations can be challenging.

---

## Market Comparison  

### **OpenResty vs. Nginx**  
|                      | OpenResty                          | Nginx                              |  
|----------------------|------------------------------------|------------------------------------|  
| **Scripting**        | Lua scripting for dynamic logic    | Static configuration only          |  
| **Use Case**         | APIs, gateways, edge computing     | Static content, reverse proxying   |  
| **Performance**      | Faster for custom logic            | Slightly faster for static tasks   |  

### **OpenResty vs. Node.js**  
|                      | OpenResty                          | Node.js                            |  
|----------------------|------------------------------------|------------------------------------|  
| **Concurrency**      | Non-blocking I/O with Lua+Nginx    | Event-driven JavaScript            |  
| **Ecosystem**        | Smaller, focused on web tasks      | Massive npm library for general use|  
| **Latency**          | Lower (microseconds)               | Higher (milliseconds)              |  

### **OpenResty vs. Envoy**  
|                      | OpenResty                          | Envoy                              |  
|----------------------|------------------------------------|------------------------------------|  
| **Configuration**    | Lua scripting for flexibility      | YAML/JSON for declarative setup    |  
| **Service Mesh**     | Manual implementation              | Built-in service mesh support      |  
| **Use Case**         | Custom gateways, edge logic        | Cloud-native microservices         |  

---

## Getting Started
Here is a step by step guide on how to set up OpenResty with Docker.

> You can alternatively download OpenResty from their [official OpenResty website](https://openresty.org/en/download.html) eliminating the need for Docker, but I found the set up to be harder, so I won't cover how to do that here.

### Step 1: Install Docker

If you don't already have Docker installed, download and install it from the [official Docker website](https://www.docker.com/).

- **Windows/Mac:** Install Docker Desktop.
- **Linux:** Follow your distribution's instructions (e.g., using `apt` or `yum`).

After installation, verify Docker is installed by running:
```bash
docker --version
```

### Step 2: Create a New Project Directory

Set up a directory for your OpenResty project. This will contain the necessary files like configurations and HTML files.
```bash
mkdir openresty-docker-setup
cd openresty-docker-setup
```

### Step 3: Create the OpenResty Configuration File

Create an OpenResty configuration file, `nginx.conf`, to define how OpenResty handles requests.
```bash
touch nginx.conf
```
Add the following to `nginx.conf`:
```nginx
worker_processes 1;

events {
    worker_connections 1024;
}

http {
    server {
        listen 80;

        location / {
            default_type text/html;
            content_by_lua_block {
                ngx.say("Hello, OpenResty running on Docker!")
            }
        }
    }
}
```
This basic configuration:
- Starts an OpenResty server on port 80.
- Uses Lua to generate dynamic content ("Hello, OpenResty running on Docker!").

### Step 4: Create a Dockerfile

Create a `Dockerfile` to define the Docker image for OpenResty.
```bash
touch Dockerfile
```
Add the following content:
```Dockerfile
FROM openresty/openresty:alpine

COPY nginx.conf /usr/local/openresty/nginx/conf/nginx.conf

EXPOSE 80

CMD ["openresty", "-g", "daemon off;"]
```
- **Base image:** Uses the official OpenResty image (`openresty/openresty:alphine`).
- **Copy configuration:** Copies your `nginx.conf` to the correct location in the container.
- **Expose port 80:** Makes OpenResty accessible on port 80.
- **Command:** Starts OpenResty when the container runs.

### Step 5: Build the Docker Image

In the same directory, build your Docker image using the following command:
```bash
docker build -t openresty-demo .
```
- `-t openresty-demo`: Tags the image as `openresty-demo`.

### Step 6: Run the OpenResty Container

Run the container based on your image:
```bash
docker run -d -p 8080:80 openresty-demo
```
- `-d`: Runs the container in detached mode (background).
- `-p 8080:80`: Maps port 80 in the container to port 8080 on your local machine.
- `openresty-demo`: Specifies the image to use.

### Step 7: Test Your Setup

Open a web browser and go to `http://localhost:8080`. You should see the text:

```
Hello, OpenResty running on Docker!
```
If you see this message, your OpenResty server is up and running!

---

## Conclusion

OpenResty is a **high-performance, Lua-driven extension of Nginx** that excels in scenarios demanding speed, customization, and low resource usage.

### Key Advantages:

- Ideal for building **API gateways, edge computing tools, and real-time request processors.**
- Outperforms traditional web servers (e.g., Apache) in high-concurrency environments.

### Limitations:

- Less suited for full-stack applications or CPU-intensive workloads.
- Requires significant effort to master Lua and Nginx’s internals.

### Future Outlook:

As edge computing and microservices grow, OpenResty’s role in modern infrastructure will expand. While it won’t replace general-purpose frameworks like Django or Express.js, it remains unmatched for **low-latency, high-throughput web tasks.**

