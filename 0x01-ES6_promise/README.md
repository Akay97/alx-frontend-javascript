6 Promises Project

## Overview

This repository contains a series of tasks focusing on the use of Promises in ES6 (ECMAScript 2015). The project demonstrates various Promise functionalities including handling multiple promises, promise chaining, async/await patterns, and error handling, all tested using **Jest** and linted with **ESLint**.

The purpose of the project is to strengthen understanding of asynchronous JavaScript by implementing real-world use cases of promises and ensuring proper error handling.

---

## Requirements

- NodeJS 12.11.x
- Ubuntu 18.04 LTS
- Jest for testing
- ESLint for linting

---

## Installation

To get started with the project, follow these steps:

1. **Install NodeJS 12.11.x**

    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    nodejs -v
    ```

    The expected output for `nodejs -v` should be:
    ```
    v12.11.1
    ```

2. **Install Dependencies**

    Make sure you are in the project directory. Then, install the project dependencies:

    ```bash
    npm install
    ```

3. **Run Linter**

    The project uses ESLint for code linting. Run the following command to check for code style errors:

    ```bash
    npm run lint
    ```

4. **Run Tests**

    The project uses Jest for unit testing. To run the test suite:

    ```bash
    npm run test
    ```

---

## Project Structure

```text
0x01-ES6_promise/
│
├── 0-promise.js          # Return a Promise
├── 1-promise.js          # Handle promise resolution and rejection
├── 2-then.js             # Append handlers to promises
├── 3-all.js              # Resolve multiple promises
├── 4-user-promise.js     # Return a resolved promise with user details
├── 5-photo-reject.js     # Return a rejected promise with an error
├── 6-final-user.js       # Handle profile signup with promises
├── 7-load_balancer.js    # Return the fastest resolved promise
├── 8-try.js              # Throw errors with division
├── 9-try.js              # Error handling with guardrails
├── 100-await.js          # Use async/await to handle promises
├── babel.config.js       # Babel configuration file
├── .eslintrc.js          # ESLint configuration file
└── package.json          # Project metadata and dependencies

