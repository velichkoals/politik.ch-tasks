import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export const Header = () => {
	return (
		<header className='nav'>
			<Link to='/' className='nav-item'>
				Councillors
			</Link>
		</header>
	);
};
