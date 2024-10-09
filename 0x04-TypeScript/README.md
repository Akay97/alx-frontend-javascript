# TypeScript Education Project

This project is designed to demonstrate the use of TypeScript interfaces, classes, and advanced types in an educational context. The project is divided into multiple tasks, each focusing on different aspects of TypeScript, such as creating interfaces, classes, and implementing functions.

## Directory Structure

The project contains the following directories, each with its respective tasks:

- `task_0/`: 
  - **Description**: Creating an interface for a student.
  - **Files**:
    - `js/main.ts`: Contains the implementation of the Student interface and rendering logic.

- `task_1/`:
  - **Description**: Building a Teacher interface.
  - **Files**:
    - `js/main.ts`: Contains the implementation of the Teacher interface and related logic.

- `task_2/`:
  - **Description**: Extending the Teacher class and creating functionalities related to employees.
  - **Files**:
    - `js/main.ts`: Contains the implementation of the Employee interfaces and functions.

- `task_3/`:
  - **Description**: Creating interfaces and types for database operations.
  - **Files**:
    - `js/interface.ts`: Defines RowID and RowElement interfaces.
    - `js/crud.d.ts`: Ambient file containing type declarations for crud functions.
    - `js/main.ts`: Implements the functionality using the defined interfaces.

- `task_4/`:
  - **Description**: Implementing namespaces and declaration merging for subjects and teachers.
  - **Files**:
    - `package.json`: Defines project dependencies.
    - `tsconfig.json`: TypeScript configuration file.
    - `js/subjects/Teacher.ts`: Teacher interface implementation.
    - `js/subjects/Subject.ts`: Subject class implementation.
    - `js/subjects/Cpp.ts`: Cpp class extending Subject with relevant methods.
    - `js/subjects/Java.ts`: Java class extending Subject with relevant methods.
    - `js/subjects/React.ts`: React class extending Subject with relevant methods.
    - `js/main.ts`: Implementation of logging for each subject.

- `task_5/`:
  - **Description**: Utilizing interfaces to define major and minor credits and their operations.
  - **Files**:
    - `js/main.ts`: Contains the implementation of MajorCredits and MinorCredits interfaces and functions for summing credits.
    - `package.json`: Defines project dependencies.
    - `webpack.config.js`: Webpack configuration for building the project.
    - `tsconfig.json`: TypeScript configuration for the project.

