import React, { useEffect, useState } from 'react';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { Header } from '../../components/Header/Header';
import { sortByType } from '../../helpers/sortByType';
import { Loader } from '../../components/Loader/Loader';
import { getUsers } from '../../store/users/thunk';
import { getAllUsers } from '../../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from '../../store/users/actionCreators';

import './HomePage.scss';

export const HomePage = (props) => {
	const dispatch = useDispatch();
	const users = useSelector(getAllUsers);
	const [data, setData] = useState(users);

	useEffect(() => {
		setTimeout(() => {
			dispatch(getUsers('councillors'));
		}, 100);

		return () => {
			dispatch(getUsersAction([]));
		};
	}, []);

	useEffect(() => {
		setData([...users]);
	}, [users]);

	return (
		<>
			<Header />
			<section className='main-section'>
				<SectionHeader {...props} page='Councillors' />
				{data.length > 0 ? (
					<table className='table'>
						<thead>
							<tr>
								<th onClick={() => setData([...sortByType('id', data)])}>Id</th>
								<th onClick={() => setData([...sortByType('firstName', data)])}>
									First Name
								</th>
								<th onClick={() => setData([...sortByType('lastName', data)])}>
									Last Name
								</th>
							</tr>
						</thead>
						<tbody>
							{data.map((item) => (
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.firstName}</td>
									<td>{item.lastName}</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<Loader />
				)}
			</section>
		</>
	);
};
