#OAuth

[youtube tutorials play list](https://www.youtube.com/watch?v=kDhYUPcDS28&list=PL4cUxeGkcC9jdm7QX143aMLAqyM-jTZ2x&index=5)
[github repository](https://github.com/iamshaunjp/oauth-playlist/tree/lesson-4)

## project outline

 How intract with google
 ![project flow](img/sc1.PNG)
 How work with client
 ![Project flow two](img/sc2.PNG)

## Passport

```npm install passport```
because we will oauth using google [official docs](http://www.passportjs.org/packages/passport-google-oauth20/)
```npm install passport-google-oauth20```

## Google developer console

[official docs](https://console.cloud.google.com/) [api overview](https://console.cloud.google.com/apis/dashboard?project=oauth-nodejs-234321&folder=)
Create a new project from there and enable api and services 
![Create project](/img/project.PNG)
 - select google+ api and enable 
 - To use this API, Click 'Create credentials' to get started.
 - Which API are you using? select google+ from drop down
 - Where will you be calling the API from? webserver node js
 - What data will you be accessing? select user data -> 
 - Create an OAuth 2.0 client ID - name anything 
 - Authorised JavaScript origins -> ```http://localhost:3000``` give localhost here
 - Authorised redirect URIs -> ```http://localhost:3000/something``` 
 - setup conset screen -> set application name and logo and save
 - credentials page refresh
 - create OAuth client ID

 ![do letter](/img/credentials.PNG)

 ![click in project name](/img/client.PNG)

 - copy client ID, secret and use it to setup google strategy
 - We need to secure our client ID and client secret otherwise people can use that in there won project
 - Authorised redirect URIs -> ```http://localhost:3000/auth/google/redirect``` -> save