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
1. Click on the body tab and select the ```x-www-form-urlencoded```.
2. Input the following keys: ```name```, ```email```, ```phone``` and ```gender``` and fill in values with it.
3. Enter ```http://localhost:8080/api/contacts``` for the URL.
4. Once it is filled, press send and it will display ```New contact created!```.

For ```GET```:
1. Click on the body tab and select the ```x-www-form-urlencoded```
2. Enter ```http://localhost:8080/api/contacts``` for the URL.
3. Press send and it will display the list of contacts.

For ```UPDATE```:
1. Ensure that there is at least a contact in the database.
2. Click on the body tab and select the ```x-www-form-urlencoded```.
3. Enter ```http://localhost:8080/api/contacts/{contactid}```, where ```{contactid}``` is the id of the contact we want to update.
4. Select ```Patch``` or ```Put``` and input the key and the value of the information you want to change.
5. Press send and it will update the contacts.

For ```DELETE```:
1. Ensure that there is at least a contact in the database.
2. Click on the body tab and select the ```x-www-form-urlencoded```.
3. Enter ```http://localhost:8080/api/contacts/{contactid}```, where ```{contactid}``` is the id of the contact we want to delete.
4. Press send and it will delete the contact.

### References
[Building a RESTFUL API](https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d)


### Required Application

* Required application for B1
* Mocha
* Chai

## Task B2: Running test locally and via Travis

1. Do step 1-3 for B1.
2. Input ```npm run test``` in the terminal to run the test cases, it should all pass.
3. Head to [Travis](https://travis-ci.org/) and select the cloned repository.
4. Push something to the repo or click on restart build to start travis testing. Travis should pass.

### References

[Testing node express using Chai and Mocha](https://medium.com/@asciidev/testing-a-node-express-application-with-mocha-chai-9592d41c0083)

[Documentation on how to write .travis.yml file](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)

## Task B3: Deploying Serverless

### Steps to run serverless

1. Use the following [link](https://10vh6khb11.execute-api.ap-southeast-1.amazonaws.com/dev/api/contacts) to access the contacts.
2. To perform the REST API, replace ```http://localhost:8080/api/contacts/``` with ```https://10vh6khb11.execute-api.ap-southeast-1.amazonaws.com/dev/api/contacts```

### References

[References to set up AWS lambda with Access Key and Secret Access Key](https://mattwelke.com/2019/02/18/free-tier-serverless-mongodb-with-aws-lambda-and-mongodb-atlas.html)

[Steps to deploy serverless using current app](https://www.serverless.com/blog/serverless-express-rest-api)


[Linking MongoDB Atlas with AWS](https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas)

[Learning to set up secrets and permissions for Travis](https://docs.travis-ci.com/user/deployment/lambda/)

## Task B4: Using the frontend SPA using Vue and Bootstrap

### Setting up

#### Setting up backend:
1. In the root folder, run ```npm run dev``` to start the backend application locally
2. Terminal should display ```Db connected successfully``` and running at port 8080.

Open another terminal to set up frontend.
#### Setting up frontend:
1. Enter in terminal ```cd contacts-app``` and run ```npm run serve -- --port 4040``` to run the frontend at port 4040

### Steps to execute API at frontend:
Home page will display all the contacts that is in the database.

For ```POST```:
1. Navigate to the contact form by clicking on the ```ContactForm``` tab on the navigation bar.
2. Input ```Email Address```, ```Name```, ```Phone Number``` and choose ```Gender```.
3. Click submit and the information will be posted to the database.

For ```DELETE```:
1. Navigate to ```Update/Delete``` tab of the navigation bar.
2. Copy the ```contact id``` which is found at the bottom of the contact at the home page.
3. Input the ```contact id``` and click delete.
4. The selected contact should be deleted from the database.

For ```UPDATE```:
1. Navigate to ```Update/Delete``` tab of the navigation bar.
2. Copy the ```contact id``` which is found at the bottom of the contact at the home page.
3. Input the ```contact id``` and click update.
4. Input the fields that you want to update and leave blank to leave the data untouched.
5. Click update once done and the selectd contact should be updated.


### References

[Initialising Vue and Bootstrap-Vue](https://www.youtube.com/watch?v=-DyKeMa5tYY&t=1939s)

[Bootstrap-Vue Documentation](https://bootstrap-vue.org/)

[Using axios to consume API](https://codesource.io/how-to-consume-restful-apis-with-axios/)



