import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { sortByType } from '../../helpers/sortByType';
import { Loader } from '../../components/Loader/Loader';
import axios from 'axios';

export const AffairsPage = (props) => {
	const url = 'http://ws-old.parlament.ch/affairs?format=json';
	const { data, validatedData, setValidatedData, setData } = props;

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
					<SectionHeader {...props} page='Affairs' />
					<table className='table'>
						<thead>
							<tr>
								<th
									onClick={() => setValidatedData([...sortByType('id', data)])}
								>
									Id
								</th>
							</tr>
						</thead>
						<tbody>
							{validatedData.map((item) => (
								<tr key={item.id}>
									<td>{item.id}</td>
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
