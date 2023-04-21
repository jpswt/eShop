import '../scss/styles/Products.css';
import { popProducts } from '../assets/data/data';
import ProductItems from './ProductItems';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Products = ({ category, filters, sort }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await axios.get(
					category
						? `${import.meta.env.VITE_DB_URI}/products?category=${category}`
						: `${import.meta.env.VITE_DB_URI}/products`
				);
				setProducts(response.data);
			} catch (err) {}
		};
		getProducts();
	}, [category]);

	useEffect(() => {
		category &&
			setFilteredProducts(
				products.filter((item) =>
					Object.entries(filters).every(([key, value]) =>
						item[key].includes(value)
					)
				)
			);
	}, [products, category, filters]);

	console.log(products);
	return (
		<>
			<div className="products-container">
				{filteredProducts.map((product) => (
					<ProductItems product={product} key={product.id} />
				))}
			</div>
		</>
	);
};

export default Products;
