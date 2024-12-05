# crs-unit-testing

## Project Description
This project is a simple command-line Todo application built with TypeScript. It allows users to add, list, mark as done, and delete todo tasks. The application uses SQLite for data storage.
The intention of this project is to demonstrate how to write unit tests for a TypeScript application using Jest.

## Prerequisites
- Node.js (v14 or higher)
- pnpm (v6 or higher)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/crs-unit-testing.git
    cd crs-unit-testing
    ```

2. Install the dependencies:
    ```sh
    pnpm install
    ```

## Running the Application
To start the application, run:
```sh
pnpm start
```

## Running Tests
To run the tests, use:
```sh
pnpm test
```
This will execute the unit tests defined in the src/__tests__/ folder.

## Project Structure
```sh
src/index.ts: Entry point of the application.
src/todo.ts: Contains functions to interact with the SQLite database.
src/db.ts: Contains the database connection logic.
src/__tests__/todo.test.ts: Contains unit tests for the application
```
## Usage
When prompted, choose an action:
```sh
[1] Add Todo
[2] List Todos
[3] Mark Done
```
Follow the prompts to add a task, list all tasks, or mark a task as done.