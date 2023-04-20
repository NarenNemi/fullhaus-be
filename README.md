# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You will need to already have a code editor,npm and an api platform like postman on your computer before getting started.
 
 This project is designed with mongodb Atlas to provide you a simple api using my atlas database however, I included a json file which holds all the data that
 my database was holding when this repository was made so feel free to either use my database or copy the data from my json file into another mongodb.
 
 If you choose to use your own database make sure change the connection on server.js (line 69) to your db connection.

## First Step: Clone

firstly you will want to clone this repository so that you have a copy of my project. 

## Second Step: npm install

Sencondly you will want to open then project in your code editor( Vs code recommended ).

Once the project is opened in your editor, you will open a terminal and run an npm install to install all your node modules and dependencies.
(you should have npm already downloaded).

## Third Step: Npm run dev

Finally after installing after running your npm install you can now use my project, so you now write an npm run dev command in your terminal and my project 
will be launched in development mode.

You can now open postman and make get,post,delete and put requests while viewing the data responses through the postman interface.
The get request can have parameters attached to it such as page and limit (ex: http://localhost:3000/acronym?page=1&limit=10&search=:search) or you can get all the acronyms by simply entering (ex: http://localhost:3000/acronym)
All other requests should follow (ex: http://localhost:3000/acronym/id) except for the post request which is (http://localhost:3000/acronym).
The request body should follow the schema found in the acronyms.json file.

