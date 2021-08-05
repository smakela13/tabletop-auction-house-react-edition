import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { QUERY_SINGLE_CATEGORY } from '../../utils/queries';

const ProductList = ({ products, categories, title }) => {
  function goToSingleItem(_id) {
    if (Auth.loggedIn()) {
      document.location.replace(`/${_id}`);
    }
  }

  const { loading, data } = useQuery(QUERY_SINGLE_CATEGORY);
  const catData = data?._id || {};
  console.log(catData);
  
  // format category
  // category find by ID
  // categories is an array of id's iterate through categories
  // if product.category === categories.id return categories.label


  if (!products) {
    return <h3>No Products Yet</h3>;
  }
  return (
    <Container className='row'>
      <h3>{title}</h3>
      <ListGroup id="homeHeader" style={{marginBottom: '.2em', minHeight: '2.5em'}} horizontal>
        <ListGroup.Item className='col-2' style={{backgroundColor: '#B0B0B0', fontWeight: 'bold'}}>Name</ListGroup.Item>
        <ListGroup.Item className='col-6' style={{backgroundColor: '#B0B0B0', fontWeight: 'bold'}}>Description</ListGroup.Item>
        <ListGroup.Item className='col-1' style={{backgroundColor: '#B0B0B0', fontWeight: 'bold'}}>Price</ListGroup.Item>
        <ListGroup.Item className='col-1' style={{backgroundColor: '#B0B0B0', fontWeight: 'bold'}}>Stock</ListGroup.Item>
        <ListGroup.Item className='col-2' style={{backgroundColor: '#B0B0B0', fontWeight: 'bold'}}>Category</ListGroup.Item>
      </ListGroup>
      {products && products.map((product) => (
        <ListGroup id="homeItems" style={{minHeight: '3.5em', marginBottom: '.25em'}} onClick={() => goToSingleItem(product._id)} key={product._id} horizontal>
          <ListGroup.Item className='col-2' style={{backgroundColor: '#B0B0B0', textDecoration: 'underline', cursor: 'pointer'}} id={product._id}>{product.productName}</ListGroup.Item>
          <ListGroup.Item className='col-6' style={{backgroundColor: '#B0B0B0'}} id={product._id}>{product.description}</ListGroup.Item>
          <ListGroup.Item className='col-1' style={{backgroundColor: '#B0B0B0'}} id={product._id}>{product.price}</ListGroup.Item>
          <ListGroup.Item className='col-1' style={{backgroundColor: '#B0B0B0'}} id={product._id}>{product.stock}</ListGroup.Item>
          <ListGroup.Item className='col-2' style={{backgroundColor: '#B0B0B0'}} id={product._id}>{!product.category._id ? '' : product.category._id}</ListGroup.Item>
        </ListGroup>
      ))}
    </Container>
  );
};

export default ProductList;