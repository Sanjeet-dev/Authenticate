# NodeJS Authentication

This project provides a simple implementation of user authentication using Node.js for the backend and 
React.js for the frontend. It allows users to sign up, log in, and log out, while ensuring that 
only authenticated users can access protected routes.

## Features

User registration: Users can create new accounts by providing their name, email, and password.
User login: Registered users can log in using their email and password.
Protected routes: Certain routes require authentication, and unauthorized users are redirected to the login page.
User session management: User sessions are maintained using JSON Web Tokens (JWTs) for authentication.
Password hashing: User passwords are securely hashed using bcrypt to ensure confidentiality.

## Prerequisites
Before running this application, make sure you have the following dependencies installed:

Node.js: version 12 or higher
NPM (Node Package Manager): version 6 or higher

## Technologies Used
Node.js: A JavaScript runtime for building the server-side application.
Express: A fast and minimalist web framework for Node.js.
MongoDB: A NoSQL database for storing user data.
React.js: A JavaScript library for building user interfaces.
React Router: A routing library for React applications.
JSON Web Tokens (JWT): A standard for creating access tokens.
bcrypt: A library for hashing and comparing passwords.
