# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

- If you haven't already, [install Docker](https://docs.docker.com/get-docker/). To verify Docker has been successfully installed, run both `docker -v` and `docker-compose -v`. You should see version numbers as output after running either command.
- Next, open a terminal window and run `docker-compose up` from the project root directory.
- To verify the back-end image has been built and is running, open a new browser tab and navigate to `http://localhost:3000/api/ping`. You should see a successful response message on the page. To verify the front-end is running, navigate to `http://localhost:3001/register` and confirm you see a create new user page. Create a new account and confirm you see output in your terminal window from the Mongoose ORM signifying the creation of a new `User` in the database.
