import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '../../components/Header/Header';
import { sortByType } from '../../helpers/sortByType';

import './HomePage.scss';

export const HomePage = () => {
	const [data, setData] = useState([]);
	const [validatedData, setValidatedData] = useState([]);
	const [searchBar, setSearchBar] = useState('');
	const url = 'http://ws-old.parlament.ch/councillors?format=json';

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				setData(response.data);
				setValidatedData(response.data);
			})
			.catch((err) => console.log(err));
	}, []);

	const handleSearch = (event) => {
		setSearchBar(event.target.value);
		setValidatedData(
			data.filter(
				(item) =>
					item.id.toString().includes(event.target.value) ||
					item.firstName.toLowerCase().includes(event.target.value) ||
					item.lastName.toLowerCase().includes(event.target.value)
			)
		);
	};

	const sortColumn = (param) => {
		const res = sortByType(param, data);
		setValidatedData([...res]);
	};

	return (
		<>
			<Header />
			<section className='main-section'>
				<div className='section__header'>
					<div className='header__title'>Councillors</div>
					<input
						value={searchBar}
						onChange={(e) => handleSearch(e)}
						type='text'
						className='header__searchbar'
						placeholder='Search..'
					/>
				</div>
				<table className='table'>
					<thead>
						<tr>
							<th onClick={() => sortColumn('id')}>Id</th>
							<th onClick={() => sortColumn('firstName')}>First Name</th>
							<th onClick={() => sortColumn('lastName')}>Last Name</th>
						</tr>
					</thead>
					<tbody>
						{validatedData.map((item) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.firstName}</td>
								<td>{item.lastName}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</>
	);
};
