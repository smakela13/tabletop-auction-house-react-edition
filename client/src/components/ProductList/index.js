import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

const ProductList = ({ products, title }) => {
	if (!products.length) {
		return <h3>No Products Yet</h3>;
	}
	return (
		<Container>
			<h3>{title}</h3>
			{products &&
				products.map((product) => (
					<ListGroup
						onClick={() => document.location.replace(`/${product._id}`)}
						key={product._id}
						horizontal>
						<ListGroup.Item className='p-3 col-2'>
							{product.productName}
						</ListGroup.Item>
						<ListGroup.Item className='p-3 col-8'>
							{product.description}
						</ListGroup.Item>
						<ListGroup.Item className='p-3 col-1'>
							Price:
							<br />
							{product.price}
						</ListGroup.Item>
						<ListGroup.Item className='p-3 col-1'>
							Stock:
							<br />
							{product.stock}
						</ListGroup.Item>
					</ListGroup>
				))}
		</Container>
	);
};

export default ProductList;
