import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export const Header = () => {
	return (
		<header className='nav'>
			<Link to='/' className='nav-item'>
				Councillors
			</Link>
			<Link to='/councils' className='nav-item'>
				Councils
			</Link>
			<Link to='/affairs' className='nav-item'>
				Affairs
			</Link>
		</header>
	);
};
