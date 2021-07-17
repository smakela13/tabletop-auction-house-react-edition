import React from 'react';
import ProductList from '../components/ProductList';
import { Container } from "react-bootstrap";
import {  useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';

const Product = () => {
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const products = data?.products || [];
  
    return (
      <Container>
        <ProductList products={products} title="Added Products" />
      </Container>
    );
  };

export default Product;