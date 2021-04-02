# Michelin Stars finder

## Description

The Michelin Finder is an application that displays Michelin star restaurants in Washington D.C. (more to come in stretch goals). Inside the details of each restaurant, you can find their reviews, menu, open hours, and other important information.

This repository is for the Back End API of this app.

### Screenshot of data

![Screen Shot 2021-04-01 at 7 05 36 PM](https://media.git.generalassemb.ly/user/34159/files/5be4fb80-931d-11eb-973a-92fad97278c4)

## Technologies Used

- Express
- Node
- Mongoose and MongoDB and Mongo Atlas
- Cors
- CRUD functionality
- Postman

## Front-End link

https://github.com/the-nerds-herd/michelin-frontend

## Models Used

- Restaurant
  List out the important data of each restaurant for the user to have.
- Review
  The type of data to be submitted as a review/comment.
- User
  Define what a user is and the data they hold.

## User Stories

### MVP Goals

- As a developer, I want to have Create, Read, Update, and Destroy (CRUD) functionality built throughout the app, so that the front-end can communicate with the back-end API RESTfully.
- As a developer, I want my data stored in cloud so everyone can see.
- As a developer, I want the API has different endpoints so that it is easier for the user to use.

### Stretch Goals

- As a developer, I want to set up User Authorization so that visitor can signup or login.

## Getting Started/Installation Instructions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm i`

Install all the dependencies in this app.

### `node seed.js`

Seed the restaurants data into MongoDB.
