## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [Endpoints](#endpoints)
    - [Get All Persons](#get-all-persons)
    - [Get Person by ID](#get-person-by-id)
    - [Create a Person](#create-a-person)
    - [Update a Person](#update-a-person)
    - [Delete a Person](#delete-a-person)


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- MongoDB or another database system set up and running.

## Getting Started

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/person-api.git
   ```

2. Change into the project directory

   ```bash
   cd person-api
   ```

3. Install the project dependencies

    ```bash
    npm install
    ``` 

## Configuration

1. Create a .env file in the root directory of the project and specify the following environment variables:

    ```bash
      PORT=3000           # The port where the API will run
      MONGODB_URL=your-mongodb-url # Your MongoDB connection URI
    ```
2. Start the server:
    ```bash
    npm start
    ```
  
## Usage

### Endpoints

#### Get All Persons

- URL: /api

- Method: GET

- Response: Returns a list of all persons.

#### Get Person by ID

- URL: /api/:id

- Method: GET

- Parameters: id (URL parameter) - The ID of the person to retrieve.

- Response: Returns the person with the specified ID.

#### Create a Person

- URL: /api/persons

- Method: POST

- Request Body: JSON data with person details (e.g., name, age, email).

- Response: Returns the created person.

#### Update a Person

- URL: /api/:id

- Method: PUT

- Parameters: id (URL parameter) - The ID of the person to update.

- Request Body: JSON data with updated person details.

- Response: Returns the updated person.

#### Delete a Person

- URL: /api/:id

- Method: DELETE

- Parameters: id (URL parameter) - The ID of the person to delete.

- Response: Returns no content on success.

