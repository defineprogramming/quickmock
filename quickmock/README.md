# QuickMock - An API Mocking Command Line Tool for Developers

QuickMock is a command line tool that allows developers to easily create and manage mock API endpoints for their applications. This tool can be particularly useful during the development and testing phases of a project when the actual API is not yet available or when developers need to isolate their application from external services.

## Features

1. **Create mock API endpoints**: Quickly create mock API endpoints by specifying the desired endpoint, HTTP method, and response data.
2. **Customize response data**: Define custom response data for each mock endpoint, including status codes, headers, and body content.
3. **JSON and YAML configuration**: Support for JSON and YAML configuration files, allowing developers to easily share and version control their mock API setups.
4. **Dynamic response generation**: Use built-in or custom JavaScript functions to generate dynamic responses based on request parameters, simulating real API behavior.
5. **Request logging**: Log all incoming requests and their corresponding responses for debugging and analysis purposes.
6. **Delay simulation**: Introduce artificial delays to simulate network latency and API processing times, which can help in testing the application's performance and resilience.
7. **Concurrency support**: Handle multiple simultaneous connections, allowing for realistic testing of concurrent API requests.

## Usage Example

To create a mock API endpoint that returns a list of users, you would run the following command:

```
quickmock create --endpoint "/api/users" --method "GET" --response-file "users.json"
```

This command would create a mock API endpoint at `/api/users` that accepts `GET` requests and returns the contents of the `users.json` file as a response.

## Installation

You can install QuickMock using npm:

```
npm install -g quickmock
```

Or with Yarn:

```
yarn global add quickmock
```

Once installed, you can start using QuickMock to create and manage your mock API endpoints.