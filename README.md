<h1 align="center">
  <img alt="Meetapp" width="130px" title="Meetapp" src=".github/logo.svg" />
</h1>

<p align="center">
 <a href="#rocket-overview">Overview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#clapper-why">Why?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#tada-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#computer-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#memo-license">License</a>
</p>

<p align="center">

<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/frichardben/fullstack-meetapp">

<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/frichardben/fullstack-meetapp">

<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/frichardben/fullstack-meetapp">

<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/frichardben/fullstack-meetapp">
</p>

<p align="center">
<a href="https://insomnia.rest/run/?label=Meetapp&uri=https%3A%2F%2Fraw.githubusercontent.com%2Ffrichardben%2Ffullstack-meetapp%2Fmaster%2Fbackend%2Finsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## :rocket: Overview

A FullStack App that allows users to organize and subscribe to meetapps.

## :clapper: Why?

This project is part of my personal portfolio, so I would be happy to give me some feedback on the project, code, structure or anything you can report that could make me a better developer!

## :tada: Features

- Authentication using JWT
- User password encryption
- File management
- Meetup management
- Meetup registration
- Listing of Meetups
- Sending email


## :computer: Getting Started

### :construction: Prerequisites

To run this server you will need two containers running on your machine.

To do so, you will need to run the following commands:

- `docker run --name some-postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`;
- `docker run --name redis -p 6379:6379 -d -t redis:alpine`;


_Remember: If you restart your machine, you will need to start again the server with `docker start <container_id>`._

Set the environment variables in a `.env` file as exemplified in the `.env.example`

### :anchor: Installing

```
$ git clone https://github.com/frichardben/fullstack-meetapp.git

# Go into the repository
$ cd fullstack-meetapp

# Install dependencies for the backend
$ cd backend
$ yarn install

# Run migrations to your database
$ yarn sequelize db:migrate

# Run the backend server
$ yarn dev
$ yarn queue

# Install dependencies for the frontend 
$ cd frontend
$ yarn install

# Run the frontend server
$ yarn start
```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/frichardben/fullstack-meetapp/blob/master/LICENSE)

---

Made with :purple_heart: by [Richard Ben](https://www.linkedin.com/in/richard-ben-2b09a496/)