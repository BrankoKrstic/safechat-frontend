# SafeChat Project

This project was bootstrapped with Create React App.

It uses React to render a Chat application, featuring a global chat room, the possiblity to create separate rooms, and private chat. The app is fully private, stores no messages or user data (apart from the user IDs stored by Socket.io) and encrypts messages so they are invisible to the server. E2E encryption is ensured through the use of Netlify serverless functions.

A [full demo of the app can be found here](https://awesome-bell-f75efd.netlify.app/main).

CoffeeHub relies on a Socket.io backend powered by npm. The code for it can be found in a [separate repository](https://github.com/BrankoKrstic/safechat-backend).

## To install

Clone the github repo to your machine.

Execute `cd coffeehub-frontend` into the terminal to go into the repo folder

Execute `npm install` to download all dependencies

Install Netlify CLI globally by running `npm i -g netlify-cli` or install it for the development of this project only by running `npm i --save-dev netlify-cli`. This part is essential to have proper E2E encryption.

`npm start` to open the project on a development server

Make sure to pick an secure encryption key for your app and enter it with the server endpoint as environment variables.

## Using the app

Once in the app, you can send messages to global chat. Entering a room or opening private chat is as simple as clicking on the right name.
