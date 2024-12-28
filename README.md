City & State Information App

This is a City & State Information App that provides detailed information about cities and states, including weather updates, geographical data, and time zones. The app is built using HTML, Bootstrap, and JavaScript, and integrates data from RapidAPI.

Features

Fetches detailed information about cities and states.

Displays weather details, including latitude, longitude, timezone, and local time.

Responsive design using Bootstrap for seamless viewing on different devices.

Dynamic API integration via RapidAPI for real-time data updates.

Error handling to manage API errors and invalid inputs gracefully.

Technologies Used

HTML - Structure of the application.

Bootstrap - For responsive design and styling.

JavaScript (ES6) - Logic for API calls and DOM manipulation.

RapidAPI - Data provider for location and weather information.

Setup Instructions

1. Clone the Repository

 git clone https://github.com/abhishekwaghmare01/Weather-App.git

2. Navigate to Project Directory

 cd Weather-App

3. Open the Project in Browser

Simply open the index.html file in your browser.

4. Add Your API Key (if required)

Replace the placeholder API key in the JavaScript file:

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY_HERE',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};

Usage

Enter the name of a city or state in the input field.

Click the Get Information button to fetch data.

View details including name, region, country, latitude, longitude, timezone, and local time.

File Structure

Weather-App/
├── index.html      # Main HTML structure
├── style.css       # Optional custom styling
├── script.js       # JavaScript for API calls and DOM manipulation
└── README.md       # Project documentation

API Integration

This app uses WeatherAPI via RapidAPI to fetch data. Ensure that you have registered and obtained an API key from RapidAPI.

API Endpoint Example:

https://weatherapi-com.p.rapidapi.com/alerts.json?q=city_name

License

This project is licensed under the MIT License.

Contact

Developed by Abhishek Waghmare 
GitHub: abhishekwaghmare01 
Email: abhishek.waghmare3210@gmail.com
