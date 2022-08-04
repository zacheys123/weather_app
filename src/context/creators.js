import { useEffect } from 'react';
import axios from 'axios';
export const SelectData = async (query, setQuery, dispatch) => {
	const api = {
		key: 'd2476d991ec7b32823e88ddfabc6db90',
		base: 'https://api.openweathermap.org/data/2.5/',
	};

	let response = await axios(
		`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`,
	);
	if (query) {
		if (response.status == 400) {
			dispatch({ type: 'ERROR' });
		}
		if (!response.data || !response.headers) {
			dispatch({ type: 'NO_DATA' });
		}
		dispatch({ type: 'GET_WEATHER', payload: response.data });
		setQuery('');
	} else {
		dispatch({ type: 'EMPTY' });
	}
};
