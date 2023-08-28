import React, { useContext } from 'react';

import ProductContex from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = () => {
	const { products } = useContext(ProductContex);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default Products;
