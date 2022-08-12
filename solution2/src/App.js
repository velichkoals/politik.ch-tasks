import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { CouncilsPage } from './pages/CouncilsPage/CouncilsPage';
import { AffairsPage } from './pages/AffairsPage/AffairsPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/councils' element={<CouncilsPage />} />
			<Route path='/affairs' element={<AffairsPage />} />
		</Routes>
	);
}

export default App;
