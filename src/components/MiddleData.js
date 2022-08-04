import React from 'react';
import { useMainContext } from '../context/components/MainContext';
import styled from 'styled-components';
function MiddleData() {
	const { main, setMainContext } = useMainContext();
	return (
		<div className="weather_box">
			<h6>{Math.round(main.weatherQuery.main.temp)}°c</h6>
			{typeof main.weatherQuery.weather !== 'undefined' && (
				<Condition>{main.weatherQuery.weather[0].main}</Condition>
			)}
			{main.loading && (
				<div className="d-flex justify-content-center align-items-center">
					{' '}
					<div className="spinner-border text-info">
						<span className="sr-only"></span>
					</div>
				</div>
			)}
		</div>
	);
}

export default MiddleData;
const Condition = styled.h3`
	position: absolute;
	margin: 10rem 85px !important;
	font-size: 78px;

	color: rgb(119, 23, 23) !important;
`;
