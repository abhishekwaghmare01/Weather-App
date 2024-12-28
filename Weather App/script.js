
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '129d1e3157msh9083d37de0b9690p108bedjsn2700e8b43b71',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

 fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f', options)
	.then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));