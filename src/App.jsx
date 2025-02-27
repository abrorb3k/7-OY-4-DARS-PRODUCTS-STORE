import React, { useEffect } from 'react';
import { Filter, Home, Navbar } from './components';
import { Route, Routes } from 'react-router-dom';
import {
	setError,
	setIsLoading,
	setProducts,
} from './lib/slices/productsSlice';
import productsService from './service/products';
import { useDispatch } from 'react-redux';
const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getProducts = async () => {
			dispatch(setIsLoading(true));
			try {
				const { data } = await productsService.getAll();
				dispatch(setProducts(data));
				dispatch(setError(null));
			} catch (error) {
				dispatch(setError(error));
			} finally {
				dispatch(setIsLoading(false));
			}
		};
		getProducts();
	}, []);
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/filter/:q' element={<Filter />} />
			</Routes>
		</div>
	);
};

export default App;
