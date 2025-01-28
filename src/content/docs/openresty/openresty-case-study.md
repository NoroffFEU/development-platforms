---
title: OpenResty Case Study
author: Erik Torkildsen <kiretwo>  
tags: openresty, web-server, lua, nginx, docker, case-study  
---

## Introduction   
In today’s world of real-time web applications and APIs, performance and scalability are critical. OpenResty, a high-performance web platform, combines the speed of **Nginx** with the flexibility of **Lua scripting**. This powerful combination allows developers to create dynamic web applications, APIs, and gateways while maintaining low latency and high concurrency. Whether it’s real-time request processing, edge computing, or scalable API management, OpenResty excels at tasks where speed and efficiency are paramount.


---

## Brief History
  
### **Early Development (2007-2011)**  
- Created by **Yichun Zhang** (agentzh) to tackle scalability issues at Taobao, Alibaba’s e-commerce platform.  
- Enhanced Nginx with embedded Lua scripting for dynamic content handling.

### **Open Source Expansion (2011-2017)**  
- OpenResty gained adoption for its lightweight design and high performance.  
- **2015**: Adopted by Cloudflare for edge computing tools like Web Application Firewalls (WAF).  
- **2017**: Became the foundation for the **Kong API Gateway**, now a leading API management tool.

### **Modern Usage**  
- Today, OpenResty powers microservices, dynamic APIs, and edge applications in enterprises worldwide. 

---

## Main Features  

| Feature               | Description                                                                 | Use Case                            |
|-----------------------|-----------------------------------------------------------------------------|-------------------------------------|
| **Lua Scripting**     | Embed Lua code directly into Nginx for dynamic routing, authentication, and request/response manipulation. | Custom APIs, request validation     |
| **High Performance**  | Leverages Nginx’s event-driven architecture and LuaJIT for sub-millisecond latency. | Real-time applications, proxies     |
| **Extensibility**     | Integrates with Redis, MySQL, Kafka, and more via pre-built Lua modules (e.g., `lua-resty-redis`). | Database-backed APIs, caching       |
| **Scalability**       | Handles 10,000+ concurrent connections with minimal CPU/memory usage.       | High-traffic websites, microservices|


---

## Strengths  

- **Blazing Fast Performance**:  
  Powered by LuaJIT and Nginx, OpenResty handles over 10,000 concurrent connections with low latency.  
  *Example*: Ideal for serving large-scale APIs or real-time web applications.

- **Dynamic Scripting**:  
  Lua allows logic injection at any stage of the request lifecycle, enabling custom behavior for requests.  
  *Example*: Implementing advanced rate-limiting algorithms.

- **Extensible Ecosystem**:  
  Pre-built modules like `lua-resty-redis` make it easy to connect with databases, caches, or messaging queues.

---

## Weaknesses  

- **Steep Learning Curve**:  
  Requires familiarity with both Lua and Nginx, which are less commonly used than Python or JavaScript.  
  *Tip*: Start with small examples to bridge the gap.

- **Debugging Complexity**:  
  Debugging Lua scripts embedded in Nginx configurations can be challenging.  
  *Example*: Issues often require logging or specialized tools for troubleshooting.

---

## Market Comparison  

### **OpenResty vs. Nginx**  
| Feature              | OpenResty                            | Nginx                              |  
|----------------------|--------------------------------------|------------------------------------|  
| **Dynamic Logic**    | Lua scripting for flexibility        | Static configuration only          |  
| **Best Use Case**    | APIs, gateways, edge computing       | Static sites, simple reverse proxy |

### **OpenResty vs. Node.js**  
| Feature              | OpenResty                             | Node.js                              |  
|----------------------|---------------------------------------|--------------------------------------|  
| **Concurrency**      | Optimized for sub-millisecond latency | Event-driven, higher latency         |  
| **Best Use Case**    | APIs and edge logic                   | Full-stack apps, heavy business logic|

### **OpenResty vs. Envoy**  
| Feature              | OpenResty                          | Envoy                              |  
|----------------------|------------------------------------|------------------------------------|  
| **Configuration**    | Lua scripting for custom behavior  | YAML/JSON for declarative setup    |  
| **Best Use Case**    | Custom API gateways                | Cloud-native service meshes        |  

---

## Getting Started
Here is a step by step guide on how to set up OpenResty with Docker.

> You can alternatively download OpenResty from their [official OpenResty website](https://openresty.org/en/download.html) eliminating the need for Docker, but I found the set up to be harder, so I won't cover how to do that here.

---

### Step 1: Install Docker

If you don't already have Docker installed, download and install it from the [official Docker website](https://www.docker.com/).

- **Windows/Mac:** Install Docker Desktop.
- **Linux:** Follow your distribution's instructions (e.g., using `apt` or `yum`).

After installation, verify Docker is installed by running (in Terminal):
```bash
docker --version
```

---

### Step 2: Create a New Project Directory

Set up a directory for your OpenResty project. This will contain the necessary files like configurations and HTML files.
```bash
mkdir openresty-docker-setup
cd openresty-docker-setup
```

---

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

---

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

---

### Step 5: Build the Docker Image

In the same directory, build your Docker image using the following command:
```bash
docker build -t openresty-demo .
```
- `-t openresty-demo`: Tags the image as `openresty-demo`.

---

### Step 6: Run the OpenResty Container

Run the container based on your image:
```bash
docker run -d -p 8080:80 openresty-demo
```
- `-d`: Runs the container in detached mode (background).
- `-p 8080:80`: Maps port 80 in the container to port 8080 on your local machine.
- `openresty-demo`: Specifies the image to use.

---

### Step 7: Test Your Setup

Open a web browser and go to `http://localhost:8080`. You should see the text:
```
Hello, OpenResty running on Docker!
```
If you see this message, your OpenResty server is up and running!

---

### Optional: Expand the Project with Dynamic Content

Now that you have OpenResty running with Docker and serving content, let's expand on the project to include dynamic HTML. This involves:

- Creating Lua modules for reusable logic.
- Using HTML templates for dynamic content.
- Configuring OpenResty to handle both static and dynamic routes.

We'll work step-by-step through the necessary files and configurations.

---

### Step 8: Update `nginx.conf`

```nginx
worker_processes 1;

events {
    worker_connections 1024;
}

http {
    include       mime.types;
    default_type  text/html;

    # Add Lua module search path
    lua_package_path "/usr/local/openresty/nginx/lua/?.lua;;";

    server {
        listen 80;

        # Dynamic HTML
        location / {
            content_by_lua_block {
                local template = require "resty.template"
                local my_module = require "my_module"

                # Fetch dynamic data from Lua module
                local data = my_module.get_data()

                # Render HTML template with data
                template.render("my_template.html", data)
            }
        }
    }
}
```
- `lua_package_path`: Defines where Lua modules are stored. We use `/usr/local/openresty/nginx/lua/` to match the Docker setup.
- **Route `/`:**
  - Loads `lua-resty-template` for HTML rendering.
  - Fetches dynamic data from a Lua module (`my_module`).
  - Passes the data to `my_template.html` for rendering.

---

### Step 9: Create an HTML Template

Add a file named `my_template.html` to define the structure of the dynamic page. This file is located at `/usr/local/openresty/nginx/html/` inside the container.
```bash
touch my_template.html
```
Add the following content:
```html
<!DOCTYPE html>
<html>
<head>
  <title>{{ title }}</title>
</head>
<body>
  <h1>{{ heading }}</h1>
  <p>Message: {{ message }}</p>
</body>
</html>
```
- `{{ title }}`, `{{ heading }}`, and `{{ message }}` are placeholders.
- The template engine replaces these placeholders with data from the Lua module.

---

### Step 10: Add Lua Module

Create a Lua file named `my_module.lua` in the `lua/` directory:
```bash
mkdir lua
cd lua
touch my_module.lua
```
Add the following content:
```lua
local _M = {}

function _M.get_data()
    return {
        title   = "My Dynamic Page",
        heading = "Hello, OpenResty!",
        message = "Data loaded from a separate Lua module."
    }
end

return _M
```
- `my_module.lua`: Provides dynamic data (as a Lua table) to be rendered in the template.

---

### Step 11: Update the Dockerfile

Your Dockerfile needs to include the new Lua modules and HTML template. Here's the updated version:
```Dockerfile
FROM openresty/openresty:alpine-fat

# Install lua-resty-template (for dynamic HTML rendering)
RUN opm get bungle/lua-resty-template

# Copy Lua modules
COPY lua /usr/local/openresty/nginx/lua/

# Copy HTML templates
COPY my_template.html /usr/local/openresty/nginx/html/

# Copy custom Nginx configuration
COPY nginx.conf /usr/local/openresty/nginx/conf/nginx.conf

# Expose port 80
EXPOSE 80

# Start OpenResty
CMD ["openresty", "-g", "daemon off;"]
```
- `lua-resty-template` is installed for rendering templates.
- Lua modules and templates are copied into the appropriate directories.
- The `nginx.conf` file is copied to configure the web server.

---

### Step 12: Build and Run the Project

First check if you have any running containers and then stop and remove them.
```bash
docker ps
docker stop <container-id>
docker rm <container-id>
```

**Build the Docker Image**
Run this command in the terminal:
```bash
docker build -t openresty-dynamic .
```

**Run the Container**
Start the container and expose port 80 to access it locally:
```bash
docker run -d -p 8080:80 openresty-dynamic
```

**Test Your Dynamic Page**
- Visit `http://localhost:8080` to see the dynamic page:
  **Output:** A rendered HTML page with the data provided by `my_module`.

---

### Step 13: Next Steps

- **Customize the Data:** Modify my_module.lua to fetch data from a database or API.
- **Add More Routes:** Define additional routes in nginx.conf for new features.
- **Deploy the Project:** Use a cloud provider (like AWS, GCP, or Azure) to make the project accessible to others.

---

### Summary

In this step-by-step guide, we created a basic OpenResty setup and expaned it to serve dynamic content:
- **Dynamic Page:** Data-driven HTML rendered with Lua.
By combining OpenResty, Lua modules, and Docker, you have a powerful yet lightweight framework for creating dynamic web applications.

---

## Conclusion

OpenResty is a `high-performance, Lua-driven extension of Nginx` that shines in scenarios requiring speed, scalability, and customization. Throughout this case study, we explored its setup, features, and practical applications for building dynamic web experiences.

### Key Takeaways:

- `Performance:` Built on Nginx, OpenResty efficiently handles high-concurrency workloads with low latency.
- `Flexibility:` Lua scripting enables powerful customizations, making OpenResty ideal for edge computing and microservices.
- `Integration:` It combines seamlessly with Nginx’s ecosystem, offering a lightweight yet capable alternative to full-stack frameworks.

### Limitations:

Despite its strengths, OpenResty has a few challenges:

- A `steep learning curve` for those new to Lua or Nginx.
- A `smaller ecosystem` compared to tools like Node.js or Python frameworks.
- Limited suitability for heavy business logic or end-to-end application development.

### Final Thoughts:

As industries increasingly adopt `edge computing and microservices`, OpenResty is well-positioned to meet modern demands for low-latency, high-throughput solutions. While it may not replace general-purpose frameworks, its strengths make it invaluable for `specialized server-side tasks`. For developers prioritizing performance and control, OpenResty is an outstanding choice.

