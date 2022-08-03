import React, { useState } from 'react';
import '../css/Footer.css';
import {
	Home,
	Search,
	Save,
	MoreVert,
	ThumbUp,
	ThumbDown,
	Share,
} from '@mui/icons-material';
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { margin } from '@mui/system';
function Footer() {
	const [likes, setLike] = useState(false);

	return (
		<div className="footer">
			{likes ? (
				<div className="routes">
					{' '}
					<Link to="/" title="Search" className="routes__links">
						{' '}
						<IconButton>
							<Home sx={{ color: 'white', fontSize: '1.5rem' }} />
						</IconButton>
					</Link>
					<Link to="/search" className="routes__links">
						<IconButton>
							{' '}
							<LocationOnIcon
								sx={{ color: 'violet', fontSize: '1.5rem' }}
							/>
						</IconButton>
					</Link>
					<Link to="/save" className="routes__links">
						<IconButton>
							{' '}
							<Save sx={{ color: 'magenta', fontSize: '1.5rem' }} />
						</IconButton>
					</Link>
				</div>
			) : (
				<p
					style={{
						marginRight: '1.1rem',
						color: 'white',
					}}
				>
					&copy; 2022 ,Welcome All rights reserved
				</p>
			)}
			<div className="more">
				<IconButton onClick={() => setLike(!likes)}>
					<MoreVert
						sx={{
							backgroundColor: 'rgb(140, 137, 237)',
							borderRadius: '100%',

							padding: '.3rem',
							marginRight: '-1.6rem',
							color: 'white',
						}}
					/>
				</IconButton>
			</div>
		</div>
	);
}

export default Footer;
