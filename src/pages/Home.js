import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../css/Home.css';
import Modal from './Modal';
import '../css/Modal.css';
import { SelectData, handleinput } from '../context/creators';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMainContext } from '../context/components/MainContext';
import { Button } from '@mui/material';
import MiddleData from '../components/MiddleData';
function Home() {
	useEffect(() => {
		SelectData();
	}, []);
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

	const { main, setMainContext } = useMainContext();

	const [query, setQuery] = useState('');
	const [inputquery, setInput] = useState('');

	return (
		<div className="top">
			<div style={{ marginBottom: '15px' }}></div>

			<div className="search">
				<input
					type="text"
					placeholder="search"
					onChange={(ev) => {
						setQuery(ev.target.value);
						setInput(() => ev.target.value);
					}}
					value={query}
				/>
				<SearchIcon
					onClick={() => {
						SelectData(query, setQuery, setMainContext);
					}}
					style={{ cursor: 'pointer' }}
				/>
			</div>
			{main.ismodal ? (
				<Modal modalcontent={main.modalcontent} found={main.found} />
			) : (
				<h6 className="text-info">{inputquery}</h6>
			)}

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
					{main.weatherQuery.name}
					{','}
					{main.weatherQuery.sys.country}
				</h2>
			</div>
			<MiddleData />
		</div>
	);
}

export default Home;
