import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { sortByType } from '../../helpers/sortByType';
import { Loader } from '../../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../store/selectors';
import { getUsers } from '../../store/users/thunk';
import { getUsersAction } from '../../store/users/actionCreators';

export const AffairsPage = (props) => {
	const dispatch = useDispatch();
	const users = useSelector(getAllUsers);
	const [data, setData] = useState(users);

	useEffect(() => {
		setTimeout(() => {
			dispatch(getUsers('affairs'));
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
				<SectionHeader {...props} page='Affairs' />
				{data.length > 0 ? (
					<table className='table'>
						<thead>
							<tr>
								<th onClick={() => setData([...sortByType('id', data)])}>Id</th>
							</tr>
						</thead>
						<tbody>
							{data.map((item) => (
								<tr key={item.id}>
									<td>{item.id}</td>
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
