// export const SelectData = (query, setWeather) => {
// 	const options = {
// 		method: 'GET',
// 		url: 'https://openweather43.p.rapidapi.com/weather',
// 		params: {
// 			q: query,
// 			appid: [
// 				'da0f9c8d90bde7e619c3ec47766a42f4',
// 				'da0f9c8d90bde7e619c3ec47766a42f4',
// 			],
// 			units: 'metric',
// 		},
// 		headers: {
// 			'X-RapidAPI-Key':
// 				'2693e53987mshf5d36a9367506a8p184b4ajsnd4b99aebd86e',
// 			'X-RapidAPI-Host': 'openweather43.p.rapidapi.com',
// 		},
// 	};
// 	try {
// 		axios.request(options).then(function (response) {
// 			setWeather(response.data);
// 		});
// 	} catch (err) {
// 		if (err.response) {
// 			console.log(err.response.data);
// 			console.log(err.response.status);
// 			console.log(err.response.headers);
// 		} else if (err.request) {
// 			console.log('Error while requesting');
// 		} else {
// 			console.log('server error');
// 		}
// 	}

// };
