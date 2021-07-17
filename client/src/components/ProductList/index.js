import React from 'react';
import { CardGroup, Card, ListGroup, Container, ListGroupItem } from 'react-bootstrap';

const ProductList = ({ products, title }) => {
  if (!products.length) {
    return <h3>No Products Yet</h3>;
  }
  return (
    <Container className='row'>
      <h3>{title}</h3>
      {products && products.map((product) => (
      <CardGroup  style={{width: '18em', marginBottom: '.25em'}} onClick={() => document.location.replace(`/${product._id}`)} key={product._id} >
        <Card style={{backgroundColor: '#758084', padding:'5px'}}>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body style={{
              textAlign: 'center',
              padding: '1em 1em',
              marginBottom: '1em',
              color: '#000'}}>
            <Card.Link
							id={product.productId}
							style={{ fontWeight: 'bold' }}>
							{product.productName}
						</Card.Link>
            <ListGroup>
              <ListGroupItem style={{backgroundColor: '#9DA5A8'}} id={product.productId}>Description<br />{product.description}</ListGroupItem>
              <ListGroupItem style={{backgroundColor: '#9DA5A8'}} id={product.productId}>Price<br />{product.price}</ListGroupItem>
              <ListGroupItem style={{backgroundColor: '#9DA5A8'}} id={product.productId}>Stock<br />{product.stock}</ListGroupItem>
            </ListGroup>
            </Card.Body>
        </Card>
      </CardGroup>
      ))}
    </Container>
  );
};

export default ProductList;
