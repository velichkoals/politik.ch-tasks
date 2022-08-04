import React, { useEffect } from 'react';
import axios from 'axios';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { Header } from '../../components/Header/Header';
import { sortByType } from '../../helpers/sortByType';
import { Loader } from '../../components/Loader/Loader';

import './HomePage.scss';

export const HomePage = (props) => {
	const { data, validatedData, setValidatedData, setData } = props;
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

	return (
		<>
			<Header />
			{data.length > 0 ? (
				<section className='main-section'>
					<SectionHeader {...props} page='Councillors' />
					<table className='table'>
						<thead>
							<tr>
								<th
									onClick={() => setValidatedData([...sortByType('id', data)])}
								>
									Id
								</th>
								<th
									onClick={() =>
										setValidatedData([...sortByType('firstName', data)])
									}
								>
									First Name
								</th>
								<th
									onClick={() =>
										setValidatedData([...sortByType('lastName', data)])
									}
								>
									Last Name
								</th>
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
			) : (
				<Loader />
			)}
		</>
	);
};