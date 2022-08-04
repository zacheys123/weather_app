import React, { useContext, useReducer } from 'react';
import Appcontext from '../contexts_/weather_context';
import { mainreducer } from '../reducers';
function MainContext({ children }) {
	const initialState = {
		weatherQuery: {
			sys: { country: '' },
			main: { temp: '' },
			name: '',
		},
		loading: false,
		ismodal: false,
		modalcontent: '',
		found: false,
	};

	const [main, setMainContext] = useReducer(
		mainreducer,
		initialState,
	);

	return (
		<Appcontext.Provider value={{ main, setMainContext }}>
			{children}
		</Appcontext.Provider>
	);
}

export default MainContext;

export const useMainContext = () => {
	return useContext(Appcontext);
};
