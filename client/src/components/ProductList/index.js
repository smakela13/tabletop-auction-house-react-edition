import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

const ProductList = ({ products, title }) => {
  if (!products.length) {
    return <h3>No Products Yet</h3>;
  }
  return (
    <Container>
      <h3>{title}</h3>
      {products && products.map((product) => (
      <ListGroup key={product._id} horizontal >
        <ListGroup.Item className='p-3 col-2' id={product.productId}>{product.productName}</ListGroup.Item>
        <ListGroup.Item className='p-3 col-8' id={product.productId}>{product.description}</ListGroup.Item>
        <ListGroup.Item className='p-3 col-1' id={product.productId}>Price:<br />{product.price}</ListGroup.Item>
        <ListGroup.Item className='p-3 col-1' id={product.productId}>Stock:<br />{product.stock}</ListGroup.Item>
      </ListGroup>
      ))}
    </Container>
  );
};

export default ProductList;
