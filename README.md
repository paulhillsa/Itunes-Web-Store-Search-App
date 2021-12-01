# Itunes Web Store Search

In this project, I was tasked to create a full-stack web application using React and Express. 

To be able to successfully do this, I needed to consolidate all the concepts I had learnt about Express, Restful APIs, the Fetch API, React, and JavaScript.


Create a full-stack web application that interfaces with the iTunes Search API: 
```bash 
https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web- service-search-api/​
``` 
The application should allow a user to search for content within the iTunes Store and Apple Books Store.
 
The user should then be able to create a list of ‘favourites’.

Finally I had to deploy my app to Heroku or another similar platform. 

## Installation

Download the project file onto your local machine.

Open the project folder in your favourite code editor, if you are using VS Code, simply navigate to/cd to the project folder in your command interface/terminal and type:
```code
code .
```

This will open the project folder in VS Code for you.

Next navigate/cd to the backend folder, here type:
```code
npm install
```
Followed by:
```code
npm start
```
You should see a console message similar to the below:
```code
[nodemon] starting `node server.js`
Server is listening on port 3001, enjoy!
```

Next you want to navigate to the frontend folder, here follow the same steps as above (npm install, npm start).

You should see the following console message
```code
Compiled successfully!

You can now view frontend in the browser.

Local:            http://localhost:3000
```
Navigate to the the local url and the app should be available to you!

Alternatively, you can view the deployed project on Heroku.

## Usage
This app will allow you to search for your favorite Itunes Store content.

To use, simply enter a search term and select a catagory.

Finally click 'Search' to view the results!

To add an item to your favourites, click the 'star icon' on an item's card.

And lastly... Enjoy!

## Testing

To test the app simply navigate to/cd the test folder located in ./frontend on your command interface/terminal.

Type
```code
npm test
```
to test the app!


## Application security:
To increase the security of the application, Helmet.js has been utilized. Helmet is a middleware for Express applications. It sets many different HTTP headers and aims to make applications more secure.

Adding these headers can help avoiding attacks such as Cross-Site-Scripting (XSS), clickjacking, etc.

### API Keys:
No API keys were necessary to access the API. 

Should you ever encounter an API that does require a key, this should be secured such as by usage of .env and .gitignore files. 


## Author details:

Paul Hill

LinkedIn: https://www.linkedin.com/in/paulhillsa

Github: https://github.com/paulhillsa
