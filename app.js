require('dotenv').config(); // Add this line at the top

const express = require('express'); 
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
   
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {

    const query = req.body.cityName;
    const apiKey = process.env.API_KEY; // Use the API key from environment variables
    const units = 'metric';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&appid=${apiKey}`;

    https.get(url, response => {
        let data = '';

        response.on('data', chunk => {
            data += chunk;
        });

        response.on('end', () => {
            const weatherData = JSON.parse(data);
            if (weatherData.cod !== 200) {
                // If the city is not found or another error occurs
                res.json({ error: "City not found. Please enter a valid city name." });
            } else {
                const humidity = weatherData.main.humidity; // Extract humidity
                res.json({ ...weatherData, humidity }); // Include humidity in the response
            }
        });
    }).on('error', (e) => {
        res.json({ error: "An error occurred while fetching the weather data." });
    });
});

// Handle 404 - Page Not Found
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/404.html');
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});