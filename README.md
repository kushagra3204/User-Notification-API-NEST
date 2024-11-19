
# User Notification Preferences API

This project is a serverless API for managing user notification preferences and sending notifications. It handles user preferences for different notification types (marketing, newsletter, updates) and manages notification delivery settings.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Environment Variables](#environment-variables)
4. [API Endpoints](#api-endpoints)
5. [Testing](#testing)
6. [Deployment](#deployment)
7. [Folder Structure](#folder-structure)

## Prerequisites

Ensure you have the following installed:

- **Node.js**: v14.x or above
- **MongoDB**: You can either run a local instance or use a cloud solution like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **NestJS CLI** (optional, for development): 
    ```bash
    npm i -g @nestjs/cli
    ```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/notification-preferences-api.git
   cd notification-preferences-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add the following environment variables:
   ```bash
   MONGO_URI=your_mongo_connection_string
   PORT=3000
   ```

4. Run the application in development mode:
   ```bash
   npm run start:dev
   ```

   The server will be available at `http://localhost:3000`.

## Environment Variables

| Variable        | Description                                |
|-----------------|--------------------------------------------|
| `MONGO_URI`     | MongoDB connection string (e.g., from MongoDB Atlas) |
| `PORT`          | The port the application will run on (default: 3000) |

## API Endpoints

### 1. User Preferences

- **Create User Preferences**
  
  **POST** `/api/preferences`

  **Request Body**:
  ```json
  {
    "userId": "user123",
    "email": "user@example.com",
    "preferences": {
      "marketing": true,
      "newsletter": false,
      "updates": true,
      "frequency": "weekly",
      "channels": {
        "email": true,
        "sms": false,
        "push": true
      }
    },
    "timezone": "America/New_York"
  }
  ```

  **Response**:
  ```json
  {
    "message": "User preference created successfully.",
    "data": {
      "userId": "user123",
      "email": "user@example.com",
      "preferences": {
        "marketing": true,
        "newsletter": false,
        "updates": true,
        "frequency": "weekly",
        "channels": {
          "email": true,
          "sms": false,
          "push": true
        }
      },
      "timezone": "America/New_York"
    }
  }
  ```

- **Get User Preferences**
  
  **GET** `/api/preferences/:userId`

  **Response**:
  ```json
  {
    "userId": "user123",
    "email": "user@example.com",
    "preferences": {
      "marketing": true,
      "newsletter": false,
      "updates": true,
      "frequency": "weekly",
      "channels": {
        "email": true,
        "sms": false,
        "push": true
      }
    },
    "timezone": "America/New_York"
  }
  ```

- **Update User Preferences**
  
  **PATCH** `/api/preferences/:userId`

  **Request Body**:
  ```json
  {
    "preferences": {
      "marketing": false,
      "newsletter": true,
      "updates": true,
      "frequency": "daily",
      "channels": {
        "email": false,
        "sms": true,
        "push": true
      }
    },
    "timezone": "America/Los_Angeles"
  }
  ```

  **Response**:
  ```json
  {
    "message": "User preference updated successfully.",
    "data": {
      "userId": "user123",
      "email": "user@example.com",
      "preferences": {
        "marketing": false,
        "newsletter": true,
        "updates": true,
        "frequency": "daily",
        "channels": {
          "email": false,
          "sms": true,
          "push": true
        }
      },
      "timezone": "America/Los_Angeles"
    }
  }
  ```

- **Delete User Preferences**
  
  **DELETE** `/api/preferences/:userId`

  **Response**:
  ```json
  {
    "message": "User preference deleted successfully."
  }
  ```

## Testing

You can run unit and integration tests with the following command:

```bash
npm run test
```

## Deployment

For serverless deployment, you can deploy this API on [Vercel](https://vercel.com) or [AWS Lambda](https://aws.amazon.com/lambda/). 

Please follow the relevant deployment documentation to set up the serverless functions and integrate the MongoDB connection string using environment variables.

## Folder Structure

```
src/
├── modules/
│   ├── user-preferences/
│   │   ├── dtos/
│   │   ├── user-preferences.controller.ts
│   │   ├── user-preferences.service.ts
│   │   └── user-preferences.module.ts
│   └── notification-management/
│       ├── dtos/
│       ├── notification-management.controller.ts
│       ├── notification-management.service.ts
│       └── notification-management.module.ts
├── app.module.ts
├── main.ts
└── .env
```
