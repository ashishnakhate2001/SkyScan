# SkyScan

SkyScan is a simple weather application built using Node.js and Express. It fetches weather data from the OpenWeatherMap API and displays it to the user based on the city name input.

## Features

- Fetches current weather data for a specified city.
- Displays temperature, weather description, and an icon representing the weather condition.
- Simple and responsive UI.

## Prerequisites

- Node.js and npm installed on your machine.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ashishnakhate2001/SkyScan.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weatherproject
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node app.js
   ```

2. Open your browser and go to `http://localhost:3000` to view the app.

## Code Overview

- **app.js**: The main server file that sets up the Express server and handles routes for fetching weather data.
  - References: 
    ```javascript:app.js
    startLine: 1
    endLine: 37
    ```

- **index.html**: The front-end HTML file that contains the UI for the weather app.
  - References:
    ```html:index.html
    startLine: 1
    endLine: 117
    ```

- **package.json**: Contains metadata about the project and lists the dependencies.
  - References:
    ```json:package.json
    startLine: 1
    endLine: 15
    ```

## API Key

The application uses the OpenWeatherMap API to fetch weather data. You need to replace the placeholder API key in `app.js` with your own API key from OpenWeatherMap.

## License

This project is licensed under the ISC License.

## Author

Ashish Nakhate
