# CS3219 OTOTTaskB

Implement REST API for backend and frontend using JavaScript

Name: Kwan Chen Sheng

Matric No.: A0185264Y

[OTOTTaskB Repo](https://github.com/mrchensheng21/CS3219OTOTTaskB)

## Task B1: Running and Accessing API Locally

### Required Application

* NodeJS
* MongoDB
* Express
* NPM
* Postman

To install Express, use this command in the terminal

```npm install express --save```

Here are the steps to follow:

1. Clone or Download the repo.
2. Use the command line ```npm install``` to install the necessary components.
3. In a new terminal, run ```mongod``` to ensure that the terminal is connected to mongoDB.
4. Upon ensuring terminal is connected to mongoDB, run ```nodemon index``` to start the app running in local server.
5. Access http://localhost:8080. If ```Connected!``` is shown, localhost is successfully deployed.
6. Go to http://localhost:8080/api/contacts to retrieve the contacts, if any.
7. For ```GET```, ```POST```, ```UPDATE```, ```DELETE```, we are using POSTMAN to call these APIs:

For ```POST```:

... 1. Click on the body tab and select the ```x-www-form-urlencoded```.
... 2. Input the following keys: ```name```, ```email```, ```phone``` and ```gender```..
... and fill in values with it.
... 3. Once it is filled, press send and it will display ```New contact created!```.


