// External imports
import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';

// Internal imports
import RootContext from './contexts/RootContext';
import HomePage from './pages/HomePage';
import ContactPage from "./pages/ContactPage";

import './styles/app.scss';
import './styles/app.css';
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";
import ErrorBoundary from "./contexts/ErrorBoundary";

function App() {
	const location = useLocation();

	return (
		<RootContext>
			<ErrorBoundary>
				<Routes location={location} key={location.pathname}>
					<Route index path="/" element={<HomePage/>}/>
					<Route path="/contact" element={<ContactPage/>}/>
					{/* Not found & error boundary*/}
					<Route path="*" element={<NotFoundPage/>}/>
					<Route path="error" element={<ErrorPage/>}/>
				</Routes>
			</ErrorBoundary>
		</RootContext>
	);
}

export default App;
