import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import '../css/Header.css';
function Header() {
	return (
		<div className="header">
			<h2>
				simplified
				<span className="span1">Weather</span>{' '}
			</h2>

			<MenuIcon className="menu" />
		</div>
	);
}

export default Header;
