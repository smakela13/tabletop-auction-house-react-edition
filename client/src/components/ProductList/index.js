import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

const ProductList = ({ products, title }) => {
  if (!products) {
    return <h3>No Products Yet</h3>;
  }
  return (
    <Container className='row'>
      <h3>{title}</h3>
      {products && products.map((product) => (
        <ListGroup style={{width: '40em', marginBottom: '.25em'}} onClick={() => document.location.replace(`/${product._id}`)} key={product._id} horizontal>
          <ListGroup.Item style={{backgroundColor: '#B0B0B0', fontWeight: 'bold'}} id={product.productId}>{product.productName}</ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#B0B0B0'}} id={product.productId}>{product.description}</ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#B0B0B0'}} id={product.productId}>Price<br />{product.price}</ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#B0B0B0'}} id={product.productId}>Stock<br />{product.stock}</ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#B0B0B0'}} id={product.productId}>Category:<br />{product.category}</ListGroup.Item>
        </ListGroup>
      ))}
    </Container>
  );
};

export default ProductList;
