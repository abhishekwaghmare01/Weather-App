const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '129d1e3157msh9083d37de0b9690p108bedjsn2700e8b43b71',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

 fetch('https://weatherapi-com.p.rapidapi.com/alerts.json?q=london', options)
	.then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    