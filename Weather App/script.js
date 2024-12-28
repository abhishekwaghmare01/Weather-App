const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '129d1e3157msh9083d37de0b9690p108bedjsn2700e8b43b71',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

// Fetch weather alerts data
const getWeather = (q) =>{

	qName.innerHTML = q

fetch('https://weatherapi-com.p.rapidapi.com/alerts.json?q=' + q, options)
	.then(response => {
		// Check if the response is OK
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		return response.json();
	})
	.then((data) => {
		// Log entire response for debugging
		console.log(data);

		// Check if data exists and contains 'location' details
		const location = data.location;
		if (!location) {
			throw new Error("Location data not found in the response.");
		}

		// Update the DOM with data
		document.getElementById('name').innerHTML = location.name || 'N/A';
		document.getElementById('region').innerHTML = location.region || 'N/A';
		document.getElementById('country').innerHTML = location.country || 'N/A';
		document.getElementById('lat').innerHTML = location.lat || 'N/A';
		document.getElementById('lon').innerHTML = location.lon || 'N/A';
		document.getElementById('tz_id').innerHTML = location.tz_id || 'N/A';
		document.getElementById('localtime_epoch').innerHTML = location.localtime_epoch || 'N/A';
		document.getElementById('localtime').innerHTML = location.localtime || 'N/A';
	})
	.catch(err => {
		// Handle errors
		console.error('Error:', err.message);
		alert('Failed to fetch weather data. Please try again later.');
	});

}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather('Delhi');
