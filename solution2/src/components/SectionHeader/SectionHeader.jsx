import React, { useState } from 'react';

import './SectionHeader.scss';

export const SectionHeader = ({ data, setValidatedData, page }) => {
	const [searchBar, setSearchBar] = useState('');

	const handleSearch = (event) => {
		setSearchBar(event.target.value);
		setValidatedData(
			data.filter(
				(item) =>
					item?.id.toString().includes(event.target.value) ||
					item?.firstName?.toLowerCase().includes(event.target.value) ||
					item?.lastName?.toLowerCase().includes(event.target.value) ||
					item?.abbreviation?.toLowerCase().includes(event.target.value) ||
					item?.type?.toLowerCase().includes(event.target.value)
			)
		);
	};
	console.log(data);
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
