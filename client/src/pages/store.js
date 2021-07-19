import React from 'react';
import ProductList from '../components/ProductList';
import { Container } from "react-bootstrap";
import {  useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';

const Product = () => {
  // eslint-disable-next-line
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const products = data?.products || [];
  
    return (
      <Container>
        <ProductList id='main' products={products}/>
      </Container>
    );
  };

export default Product;