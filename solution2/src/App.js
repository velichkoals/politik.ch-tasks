import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { CouncilsPage } from './pages/CouncilsPage/CouncilsPage';
import { AffairsPage } from './pages/AffairsPage/AffairsPage';

function App() {
	const [data, setData] = useState([]);
	const [validatedData, setValidatedData] = useState([]);

	return (
		<Routes>
			<Route
				path='/'
				element={
					<HomePage
						data={data}
						setData={setData}
						validatedData={validatedData}
						setValidatedData={setValidatedData}
					/>
				}
			/>
			<Route
				path='/councils'
				element={
					<CouncilsPage
						data={data}
						setData={setData}
						validatedData={validatedData}
						setValidatedData={setValidatedData}
					/>
				}
			/>
			<Route
				path='/affairs'
				element={
					<AffairsPage
						data={data}
						setData={setData}
						validatedData={validatedData}
						setValidatedData={setValidatedData}
					/>
				}
			/>
		</Routes>
	);
}

export default App;
