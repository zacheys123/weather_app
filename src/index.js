import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import MainContext from './context/components/MainContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<MainContext>
				<App />
			</MainContext>
		</Router>
	</React.StrictMode>,
);
