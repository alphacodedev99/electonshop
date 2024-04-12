import React, { useEffect } from 'react';
import ProductsService from '../services/productsService';

import {useDispatch, useSelector} from 'react-redux'
import { saveAllProductsAction } from '../store/productsSlice';
import CardProductComponent from '../components/CardProductComponent';

function HomePage() {
	// 1 step - ???? useSelector
	const {allProducts} = useSelector(state => state.productStore)
	const dispatch = useDispatch();

	useEffect(() => {
		ProductsService.getAllProducts()
			.then(res => dispatch(saveAllProductsAction(res.data.products)))
			.catch(err => console.log(err))
	}, [])

	return <main className='container mx-auto'>
		{/* grid/list view */}

		{/* Our products */}
		{/* wrapper div */}
		<div className='flex flex-wrap items-center justify-center mt-[50px] gap-8 '>
			{allProducts.map((product) => {
				return <CardProductComponent key={product.id} product={product}/> 
			})}
		</div>
	</main>;
}

export default HomePage;
