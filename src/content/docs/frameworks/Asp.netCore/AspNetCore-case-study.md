---
title: ASP.NET Core Case Study
author: Jarle Tollaksen <Jarle302>
tags: backend, case study, .NET
---

## Introduction

This is a case study for looking into how one creates a web application using ASP.NET Core specifically using the MVC pattern. 


## ASP.NET Core: Key Milestones

- **2014**: Microsoft embraces open-source development, announcing the .NET Compiler Platform ("Roslyn") and launching the .NET Foundation.
- **2016**: Release of ASP.NET Core 1.0, a major overhaul introducing a cross-platform, unified framework for web development.
- **2017**: ASP.NET Core 2.0 debuts, enhancing compatibility with .NET Framework and .NET Standard, simplifying the transition for existing .NET developers.
- **2018**: ASP.NET Core 2.1 introduces SignalR, Razor Class Libraries, and Identity UI; followed by 2.2, which adds endpoint routing and health checks.
- **2019**: ASP.NET Core 3.0 brings support for C# 8, Windows desktop apps, and performance improvements, marking a significant update.
- **2020**: Launch of .NET 5.0, transitioning to a unified .NET platform, streamlining the naming and further integrating ASP.NET.
- **2021**: .NET 6.0, an LTS release, introduces minimal APIs and other enhancements, focusing on performance and productivity.
- **2022**: .NET 7 continues to build on .NET 6’s foundations, emphasizing refinements and expanding features.
- **2023**: .NET 8 released

## Main Features

ASP.NET Core provides an opinionated framework for creating web applications. It has built-in security and helps developers follow best practices by making it easier to separate concerns, which may help keep code decoupled, easier to test, and change. It also comes with some built-in functionality that improves the developer experience and code quality. 

- **Model binding:** automates the process of converting HTTP requests into .NET objects. It maps data from HTTP requests (including query strings, form values, route data, and JSON bodies) to action method parameters. Making it so you can use the properties you expect as parameters in your controllers, instead of manually having to extract them from the request. 
  
- It also provides model validation, making it simple to validate the request, and provide quick error messages if needed.     
- **Supports dependency injection:** Provides an IOC container that you can register services with, and use to inject your dependency at runtime. Abstractions make it so you only need to register the service and its life time. Then you can add the service either by class constructor or method injection.  
- **Natively supports the MVC pattern:** Asp.net Core provides an opinionated way of using the mvc pattern, having predefined interfaces and classes to implement or inherit from to streamline the process. 
- **Attribute routing:** You can create your routes directly on your action methods inside your  controllers making development process faster, and gives you an better overview of what action methods are coupled with what endpoints.


## Market Comparison

Instead of providing an extensive comparison of how ASP.NET Core compares to many popular frameworks like Laravel, Spring, Django, and Express.js, the decision has been made to solely compare it to Express.js. This choice is based on the expectation that Express.js is the backend framework most likely to be familiar to frontend developers.

| Feature                | ASP.NET Core                                     | Express.js                                     |
|------------------------|--------------------------------------------------|------------------------------------------------|
| **Language**           | C#                                               | JavaScript/TypeScript                          |
| **Runtime**            | .NET                                             | Node.js                                        |
| **Ecosystem**          | .NET ecosystem, Visual Studio, Entity Framework | npm, vast JavaScript ecosystem                 |
| **Cross-Platform**     | Yes (Windows, Linux, macOS)                      | Yes (any Node.js-supported platform)           |
| **Ease of Use**        | Structured, more features out-of-the-box        | Simple, minimalistic, flexible                 |
| **Learning Curve**     | Steeper (especially without .NET background)    | Gentler (especially for those familiar with JS)|
| **Use Cases**          | Wide range (from small websites to enterprise applications) | RESTful APIs, SPAs, real-time applications |
| **Development Model**  | More structured, feature-rich                   | Minimalistic, highly flexible                  |
| **Community Support**  | Strong (backed by Microsoft)                     | Extremely large and active                     |
| **Typing**             | Statically typed                                | Dynamically typed (TypeScript for static typing)|




## Example of how you can build with ASP.NET Core 

-  First install Visual Studio (not to be confused with Visual Studio Code) which is an IDE with good support for .net. 
- Create a new project chose ASP.NET Core EMPTY(makes it so we can create folder on a need to do basis instead of getting lost in the confusion of having to many unknown files and folders).
- Add the following boilerplate code to your Program.cs file   
```c#
using yourInterfaceFolderName;
using yourServiceName;
namespace yourProjectName
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddControllers();
            
            //We will return to this line later
            builder.Services.Add(new ServiceDescriptor(typeof  
            (IUserService), typeof(UserService),
            ServiceLifetime.Transient));
           
            var app = builder.Build();
            app.MapControllers();

            app.Run();
        }
    }
}

```
### Create a new folder called Models
Inside the folder create a new class. In this example  User.cs is used. 

### This is the code for User.cs
```c#
    public class User
    {

        [Required] //This is a modelValidator, making the field/property directly below it required
        public string UserName { get; set; }

        [EmailAddress] // Validates that Email property is in a valid email format
        public string Email { get; set; }

        public string Password { get; set; }

        [Compare("Password")] // makes sure that the password and repeatPassword matches. 
        public string RepeatPassword { get; set; }

        // this is a class constructor, used to instantiate an instance of the class
        public User(){}}
```

### Controller
- create a new folder called Controllers.
- right click on the folder, press add and choose controller. 
- You can name it what you want but make sure to keep the Controller suffix if not u need to add [controller] as an attribute to the class

### Controller code 
```c#
using Microsoft.AspNetCore.Mvc;
using eksempel.Models;
using ServiceContracts;


namespace eksempel.Controllers
{
    [Route("/User")]
    public class UserController : Controller
    {

        private readonly IUserService _userService;


        [HttpGet("all")]
        public IActionResult GetUserByName()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("bad request");
            }

            return Json(_userService.GetUsers());
        }

        [HttpPost]
        public IActionResult UserRegistration(User user)
            // 'user' is populated by model binding from the incoming request.

        {
            if (!ModelState.IsValid) { return BadRequest("bad request"); }
            return Ok(user);
        }

       public UserController(IUserService userService)
        {
            _userService = userService;
        }


    }
}


```
### What is happening in this code? 
```c# 
[Route("/User/")]
```
creates a route prefix for all the different action methods inside this controller. making the start of each of these endpoints start with /User

We can specify more specific routes for each action endpoint by
 Adding the line like below just above the action Method 
```c# 
        [HttpGet("all")]
```
### ModelState
 The controllerClass inherits a ModelState dictionary from its base class. It holds both the value submitted to the server, as well as any validation errors associated with those values. If ModelState.isValid is true  there are no validation errors, giving us a simple check that is good enough for this example. 
 ```c#
  if (!ModelState.IsValid)
            {
                return BadRequest("bad request");
            }
 ```

 ### Services and dependency injection

Services are responsible for handling the business logic, and the controllers amongst other things for calling the services. 


This field is intended to hold a reference to an implementation of the IUserService interface.
 ```c#
        private readonly IUserService _userService;
 ```

In a separate project, i've made a class library called ServiceContracts which contains all my interfaces, but for simplicity sake one could just make a separate folder.
This contains the interface IUserService
 ```c#
namespace ServiceContracts
{
    public interface IUserService
    {
        public List<string> GetUsers();

    }
}

// All this does is to say for a class to implement this interface it needs to implement a  method with the identical method signature as GetUsers
 ```

In yet Another file i make  class that implements the interface and providing the needed business logic i want. 
 ```c#
 
using ServiceContracts;
namespace simpleServices
{
    public class UserService:IUserService
    {
        private readonly List<string> _users;


        public UserService()
        {
            _users = new List<string>()
        {
            "Pikachu","Charmander","Squirtle","Bulbasaur"
        };

        }

        public List<string> GetUsers()
        {
            return _users;
        }

    }
}

 ```

 

Now we have an interface and a Service implementing this, now we can register it in the IOC(inversion of control) container, making it so everytime a controller or other class calls the ioc container asking for an object implementing the interface, it will know what object to inject into the class needing it. 

 ```c#
            builder.Services.Add(new ServiceDescriptor(typeof  
            (IUserService), typeof(UserService),
            ServiceLifetime.Transient)); //Transient lifetime means that it will create a new instance of the object each time this service is injected, instead of having the same one being shared in one scope(scoped), or being a singleton that shares lifetime with the application itself 
 ```

The benefit here, is that just by changing the object implementing the interface you can enable, testing, or changing the implementation as long as the method signature is the same as the interface. Making the code highly modular.  


### To use the service we only need to request it from the ioc container
 Typically through constructor injection. This approach is the most common and recommended way to achieve dependency injection. When a class is instantiated, the ASP.NET Core framework's IoC container automatically provides instances of the required services, as defined in the class's constructor. Below is an example of how we can inject the IUserService into our UserController, the ioc container will supply the service at runtime.   
 ```c#
    public UserController(IUserService userService)
        {
            _userService = userService;
        }
 ```

### Modelbinding

```c#
[HttpPost]
        public IActionResult UserRegistration(User user)
            // 'user' is populated by model binding from the incoming request.

        {
            if (!ModelState.IsValid) { return BadRequest("bad request"); }
            return Ok(user);
        }

```

Notice that nowhere in the controller have i needed to access the request body/headers, querystring or parameters manually. I just added the type and parameter to the action method and the model binding will get the data from the request automatically. You do not need to use a complex type like a model for this, you could use a simple type like
```c# 
MethodName(int id){
    // do something with id
    }
```
If there are duplicate values like an id route parameter, and an id field in a formdata the modelbinding will prioritize in the following order.
 - Formdata
 - Request body
 - Route parameters
 - QueryString  



### Response

In an MVC project, the response to a web request is often a view consisting of an HTML document generated on the server. However, when the frontend is a Single Page Application (SPA) like a React app, responses are typically JSON sent back to the frontend. This approach is demonstrated in this example, where either a list of users or a single user model is returned in JSON format to the client making a POST request.

#### The response for the get request:

```c#
            return Ok(_userService.GetUsers());
```
Which will return a list of usernames(or pokemons in this example)

#### The response for the post request: 
```c#
             return Json(user);
```
Will send the statuscode 200  and the fields provided in the request.

## Conclusion

I hope this has given you as a reader a glimpse into how the workflow for creating something with ASP.NET Core would be. Due to being opinionated it takes more time to write than for example express, but at the same time it provides structure and modularity which one could argue is a strength of frameworks like ASP.NET Core. 

## References

Chat GPT

Udemy: 
- https://www.udemy.com/course/ultimate-csharp-masterclass/
- https://www.udemy.com/course/asp-net-Core-true-ultimate-guide-real-project/

https://www.ryadel.com/en/asp-net-Core-revolution-history-summary-through-years-2016-2019/