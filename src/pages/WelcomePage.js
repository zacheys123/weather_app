import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../css/Welcome.css';
function WelcomePage() {
	const navigate = useNavigate();
	return (
		<div className="welcome">
			<div className="banner">
				<h2>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to
					SimplifiedWeather
				</h2>
			</div>
			<Button variant="outlined" onClick={() => navigate('/home')}>
				launch Website
			</Button>
		</div>
	);
}

export default WelcomePage;
