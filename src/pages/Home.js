import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import '../css/Home.css';
import { SelectData } from '../api/axios';

import { Button } from '@mui/material';
function Home() {
	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const getDate = (d) => {
		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();
		return `${day} ${date} ${month} ${year}`;
	};
	const [query, setQuery] = useState('');
	const [weatherQuery, setWeatherQuery] = useState({
		sys: { country: '' },
		main: { temp: '' },
	});
	return (
		<div className="top">
			<div style={{ marginBottom: '15px' }}></div>
			<div className="search">
				<input
					type="text"
					placeholder="search"
					onChange={(ev) => setQuery(ev.target.value)}
					value={query}
				/>
				<SearchIcon
					onClick={() => {
						SelectData(query, setWeatherQuery, setQuery);
					}}
					style={{ cursor: 'pointer' }}
				/>
			</div>

			<div className="middle">
				<div className="date">
					<p>{getDate(new Date())}</p>
					<Button variant="outlined">Today</Button>
					<Button variant="outlined">Tommorow</Button>
					<Button variant="outlined">Yesterday</Button>
				</div>
				<div
					style={{ border: '.2px solid gray', margin: '15px' }}
				></div>

				<h2>
					{weatherQuery.name},{weatherQuery.sys.country}
				</h2>

				<div className="weather_box">
					<h2>{Math.round(weatherQuery.main.temp)}°c</h2>{' '}
					{typeof weatherQuery.weather !== 'undefined' && (
						<Condition>{weatherQuery.weather[0].main}</Condition>
					)}
				</div>
			</div>
		</div>
	);
}

export default Home;

const Condition = styled.h3`
	position: absolute;
	margin: 10rem 85px !important;
	font-size: 78px;

	color: rgb(119, 23, 23) !important;
`;

// import React, { useState, useEffect } from 'react';
// import SearchIcon from '@mui/icons-material/Search';
// import styled from 'styled-components';
// import '../css/Home.css';
// import { Button } from '@mui/material';
// import { SelectData } from '../api/axios';
// function Home() {
// 	const api = {
// 		key: 'd2476d991ec7b32823e88ddfabc6db90',
// 		base: 'https://api.openweathermap.org/data/2.5/',
// 	};
// 	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// 	const months = [
// 		'Jan',
// 		'Feb',
// 		'Mar',
// 		'Apr',
// 		'May',
// 		'Jun',
// 		'Jul',
// 		'Aug',
// 		'Sep',
// 		'Oct',
// 		'Nov',
// 		'Dec',
// 	];

// 	const getDate = (d) => {
// 		let day = days[d.getDay()];
// 		let date = d.getDate();
// 		let month = months[d.getMonth()];
// 		let year = d.getFullYear();
// 		return `${day} ${date} ${month} ${year}`;
// 	};

// 	useEffect(() => {
// 		SelectData();
// 	}, []);
// 	const [query, setQuery] = useState('');
// 	const [weatherQuery, setWeatherQuery] = useState({});
// 	console.log(weatherQuery);
// 	return (
// 		<div className="top">
// 			<div style={{ marginBottom: '15px' }}></div>
// 			<div className="search">
// 				<input
// 					type="text"
// 					placeholder="search"
// 					onChange={(ev) => setQuery(ev.target.value)}
// 					value={query}
// 				/>
// 				<SearchIcon
// 					onClick={() => {
// 						SelectData(query, setWeatherQuery);
// 					}}
// 					style={{ cursor: 'pointer' }}
// 				/>
// 			</div>
// 			<div className="middle">
// 				<div className="date">
// 					<p>{getDate(new Date())}</p>
// 					<Button variant="outlined">Today</Button>
// 					<Button variant="outlined">Tommorow</Button>
// 					<Button variant="outlined">Yesterday</Button>
// 				</div>
// 				<div
// 					style={{ border: '.2px solid gray', margin: '15px' }}
// 				></div>
// 				<h2>London,GB</h2>
// 				<div className="weather_box">
// 					<h2>35°c</h2> <Condition>Sunny</Condition>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Home;

// const Condition = styled.h3`
// 	position: absolute;
// 	margin: 10rem 85px !important;
// 	font-size: 78px;

// 	color: rgb(119, 23, 23) !important;
// `;
