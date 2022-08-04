import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/Home.css';
import Home from './pages/Home';
import Moreinfo from './pages/Moreinfo';
import Search from './pages/Search';
import Header from './components/Header';
import Save from './pages/Save';
import Exit from './pages/Exit';
import Footer from './components/Footer';
import WelcomePage from './pages/WelcomePage';
function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path="/" exact element={<WelcomePage />} />
				<Route path="/search" exact element={<Search />} />
				<Route path="/moreinfo" exact element={<Moreinfo />} />
				<Route path="/save" exact element={<Save />} />
				<Route path="/" exact element={<Exit />} />
				<Route path="/home" exact element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
