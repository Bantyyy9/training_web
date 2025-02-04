# Foody App

Foody app created with Vite + React

## What is Api

Api stands for Application Programming Interface. It is a set of routines, protocols, and tools for building software applications.

APIs specify how software components should interact and are used when programming graphical user interface (GUI) components. APIs provide data or services to other applications, such as web services, that can be used to enhance the application. APIs are also used for accessing web services, such as entering and retrieving data from a remote database.

## Api Integration

Api integration is the process of connecting one or more APIs to your application. APIs provide access to a particular service or data which can be used to enhance your application.

## How to make Api Call with fetch/axios

The Fetch API provides a modern JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as `requests` and `responses`.

It is a Promise-based API, meaning it will return a Promise that resolves once the response is available. This makes it easier to work with asynchronous requests, as you can use `.then()` and `.catch()` to handle resolved and rejected Promises, respectively.

Here's a basic example of using the Fetch API to make a GET request:

```javascript
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with your fetch operation:", error);
  });
```

### Parts of Url

A URL is typically composed of the following components:

- **Protocol**: The protocol is the first part of the URL and it indicates the type of protocol being used. Common protocols include `http`, `https`, `ftp`, and `mailto`.
- **Subdomain**: The subdomain is the second level domain of the URL and is used to identify a particular domain or subdomain.
- **Domain**: The domain is the third level domain of the URL and is used to identify a particular website or organization.
- **Port**: The port is the fourth part of the URL and is used to specify the port number of the server.
- **Path**: The path is the fifth part of the URL and is used to specify the location of the resource on the server.
- **Query String**: The query string is the sixth part of the URL and is used to pass data to the server.
- **Fragment**: The fragment is the seventh and final part of the URL and is used to specify a particular section of the page.

### HTTP Methods

The most common HTTP methods are:

- **GET**: The GET method is used to retrieve data from a server. It is the most commonly used method and is the default method used by web browsers.
- **POST**: The POST method is used to send data to a server. It is commonly used to create new resources, such as creating a new user account.
- **PUT**: The PUT method is used to update existing resources on a server. It is commonly used to update existing user accounts.
- **DELETE**: The DELETE method is used to delete existing resources on a server. It is commonly used to delete user accounts.

### HTTP Status Codes

HTTP status codes are three-digit numbers that indicate the status of the request. The most common status codes are:
1XX, 2XXX, 3XX, 4XX, and 5XX

- **200**: The request was successful
- **201**: The resources was created successfully
- **400**: The request was invalid or could not be processed
- **401**: The request requires authentication
- **403**: The request was forbidden/no authorization
- **404**: The resource could not be found
- **500**: The server encountered an error

### Fetch Examples

To make an API call with `fetch`, you can use the following example:

```javascript
// Example of making a GET request
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // Handle the data received from the API
  })
  .catch((error) => {
    console.error("There was a problem with your fetch operation:", error);
  });

// Example of making a POST request
fetch("https://api.example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ key: "value" }), // Replace with your data
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // Handle the data received from the API
  })
  .catch((error) => {
    console.error("There was a problem with your fetch operation:", error);
  });
```
