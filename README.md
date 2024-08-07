# Weather App

This Weather App is built using React and utilizes the WeatherAPI to fetch the latest weather information. The app provides current weather details for any specified location.

> # Hosted over Firebase: https://react-weather-d1d32.web.app/

## Features

- Fetch and display current weather information based on user input.
- Displays temperature, weather conditions, humidity, and wind speed.
- Responsive design for both desktop and mobile devices.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your WeatherAPI key:

    ```plaintext
    REACT_APP_WEATHER_API_KEY=your_weather_api_key
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Usage

1. Enter a city name in the search bar.
2. Click the "Search" button or press the "Enter" key.
3. The app will fetch and display the latest weather information for the specified city.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- WeatherAPI: A powerful API for retrieving weather data.
- Axios: A promise-based HTTP client for the browser and Node.js.

## Project Structure

```plaintext
weather-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── WeatherCard.js
│   │   ├── SearchBar.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   ├── api.js
│   └── ...
├── .env
├── package.json
└── README.md
