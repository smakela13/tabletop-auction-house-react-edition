import React from 'react';
import { CardGroup, Card, ListGroup, Container, ListGroupItem } from 'react-bootstrap';

const ProductList = ({ products, title }) => {
  if (!products) {
    return null
  }
  return (
    <Container className='row'>
      <h3>{title}</h3>
      {products && products.map((product) => (
      //   <CardGroup  style={{width: '18em', marginBottom: '.25em'}} onClick={() => document.location.replace(`/${product._id}`)} key={product._id} >
      //   <Card style={{backgroundColor: '#758084', padding:'5px'}}>
      //     {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
      //       <Card.Body style={{
      //         textAlign: 'center',
      //         padding: '1em 1em',
      //         marginBottom: '1em',
      //         color: '#000'}}>
      //       <Card.Link
			// 				id={product.productId}
			// 				style={{ fontWeight: 'bold' }}>
			// 				{product.productName}
			// 			</Card.Link>
      //       <ListGroup>
      //         <ListGroupItem style={{backgroundColor: '#9DA5A8'}} id={product.productId}>Description<br />{product.description}</ListGroupItem>
      //         <ListGroupItem style={{backgroundColor: '#9DA5A8'}} id={product.productId}>Price<br />{product.price}</ListGroupItem>
      //         <ListGroupItem style={{backgroundColor: '#9DA5A8'}} id={product.productId}>Stock<br />{product.stock}</ListGroupItem>
      //       </ListGroup>
      //       </Card.Body>
      //   </Card>
      // </CardGroup>
      <ListGroup onClick={() => document.location.replace(`/${product._id}`)} key={product._id} horizontal >
        <ListGroup.Item className='p-3 col-2'>{product.productName}</ListGroup.Item>
        <ListGroup.Item className='p-3 col-7'>{product.description}</ListGroup.Item>
        <ListGroup.Item className='p-3 col-1'>Price:<br />{product.price}</ListGroup.Item>
        <ListGroup.Item className='p-3 col-1'>Stock:<br />{product.stock}</ListGroup.Item>
        <ListGroup.Item className='p-3 col-1'>Category:<br />{product.category}</ListGroup.Item>
      </ListGroup>
      ))}
    </Container>
  );
};

export default ProductList;
