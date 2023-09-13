# CRUD Person API

Perform CRUD operations on a person resource

## Base URL

## Endpoints

### Get All Users

Get a list of all users.

- **URL:** `/api`
- **Method:** `GET`
- **Parameters:** None

#### Response

- **Status Code:** 200 (OK)
- **Response Body:**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
] 
```


### Get User by ID

Get a user by their unique ID.

- **URL:** `/api/:id`
- **Method:** `GET`
- **Parameters:** id (URL parameter) - The ID of the user to retrieve.

#### Response

- **Status Code:** 200 (OK)
- **Response Body:**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
]
```


### Create User

Get a user by their unique ID.

- **URL:** `/api/:id`
- **Method:** `POST`
- **Parameters:** None

#### Request Body

- **Content-Type:** `application/json`
- **Example Request Body:**

```json
[
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
]
```

#### Response

- **Status Code:** 201 (Created)
- **Response Body:**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
]
```

### Update User by ID

Update an existing user by their ID.

- **URL:** `/api/:id`
- **Method:** `PUT`
- **Parameters:** id (URL parameter) - The ID of the user to update.

#### Request Body

- **Content-Type:** `application/json`
- **Example Request Body:**

```json
[
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
]
```

#### Response

- **Status Code:** 200 (OK)
- **Response Body:**

```json
[
  {
    "id": 3,
    "name": "John Doe",
    "email": "john@example.com"
  }
]
```

### Delete User by ID

Delete a user by their ID.

- **URL:** `/api/:id`
- **Method:** `DELETE`
- **Parameters:** id (URL parameter) - The ID of the user to update.

#### Response

- **Status Code:** 204 (No Content)
- **Response Body:** None



