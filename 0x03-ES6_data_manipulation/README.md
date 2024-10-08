# ES6 Data Manipulation Project

## Description

This project focuses on the use of ES6 features for manipulating data, including arrays, sets, maps, and typed arrays. The tasks include using higher-order functions such as `map`, `filter`, `reduce`, and the application of advanced data structures. It demonstrates the core features of JavaScript and introduces the usage of typed arrays and WeakMap, along with handling multiple complex operations.

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- The project includes a mandatory `README.md` file at the root of the folder
- All code should be written using the `.js` extension
- All code will be tested using `Jest`
- Code will be verified against linting using `ESLint`
- Functions must be exported correctly to meet the test requirements

## Setup

Follow the steps to set up the environment:

1. Install NodeJS 12.11.x:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

# Configuration Files

- **package.json**: Defines the project dependencies and scripts for testing and linting.
- **babel.config.js**: Configures Babel for ES6 transpiling.
- **.eslintrc.js**: Linting configuration using the Airbnb style guide and Jest plugin.

# Tasks Breakdown

## 0. Basic list of objects
- **File**: `0-get_list_students.js`
- **Description**: Returns an array of student objects with attributes like `id`, `firstName`, and `location`.

## 1. More mapping
- **File**: `1-get_list_student_ids.js`
- **Description**: Returns an array of student IDs using the `map` function.

## 2. Filter
- **File**: `2-get_students_by_loc.js`
- **Description**: Filters students based on their location using the `filter` function.

## 3. Reduce
- **File**: `3-get_ids_sum.js`
- **Description**: Calculates the sum of student IDs using the `reduce` function.

## 4. Combine
- **File**: `4-update_grade_by_city.js`
- **Description**: Returns an updated list of students for a specific city, including their grades.

## 5. Typed Arrays
- **File**: `5-typed_arrays.js`
- **Description**: Creates a new `ArrayBuffer` with an `Int8` value at a specific position.

## 6. Set data structure
- **File**: `6-set.js`
- **Description**: Returns a `Set` from an array of elements.

## 7. More set data structure
- **File**: `7-has_array_values.js`
- **Description**: Returns `true` if all elements in the array exist in a set.

## 8. Clean set
- **File**: `8-clean_set.js`
- **Description**: Returns a string with all set values that start with a specific string.

## 9. Map data structure
- **File**: `9-groceries_list.js`
- **Description**: Returns a map of groceries with the names and quantities.

## 10. More map data structure
- **File**: `10-update_uniq_items.js`
- **Description**: Updates the quantity of all items in the map where the initial quantity is `1`.

## 11. Weak link data structure
- **File**: `100-weak.js`
- **Description**: Uses `WeakMap` to track API queries and throws an error when a certain threshold is reached.

# Running Tests

Run the following command to execute the Jest test cases:

```bash
npm run test

