import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../store/selectors';
import { getUsersAction } from '../../store/users/actionCreators';

import './SectionHeader.scss';

export const SectionHeader = ({ page }) => {
	const dispatch = useDispatch();
	const users = useSelector(getAllUsers);
	const [searchBar, setSearchBar] = useState('');
	const [data, setData] = useState(users);

	useEffect(() => {
		if (data.length === 0) {
			setData(users);
		}
	}, [users]);

	useEffect(() => {
		return () => {
			setData([]);
		};
	}, []);

	const handleSearch = (event) => {
		const lowerCaseEvent = event.target.value.trim().toLowerCase();
		setSearchBar(event.target.value);
		dispatch(
			getUsersAction(
				data.filter(
					(item) =>
						item?.id.toString().includes(lowerCaseEvent) ||
						item?.firstName?.toLowerCase().includes(lowerCaseEvent) ||
						item?.lastName?.toLowerCase().includes(lowerCaseEvent) ||
						item?.abbreviation?.toLowerCase().includes(lowerCaseEvent) ||
						item?.type?.toLowerCase().includes(lowerCaseEvent)
				)
			)
		);
	};

	return (
		<div className='section__header'>
			<div className='header__title'>{page}</div>
			<input
				value={searchBar}
				onChange={(e) => handleSearch(e)}
				type='text'
				className='header__searchbar'
				placeholder='Search..'
			/>
		</div>
	);
};
