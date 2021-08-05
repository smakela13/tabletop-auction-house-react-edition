import React from 'react';
import ProductList from '../components/ProductList';
import { Container } from "react-bootstrap";
import {  useQuery } from '@apollo/client';
import { QUERY_PRODUCTS_AND_CATEGORIES } from '../utils/queries';

const Product = () => {
  // eslint-disable-next-line
    const { loading, data } = useQuery(QUERY_PRODUCTS_AND_CATEGORIES);
    const products = data?.products || [];
    const categories = data?.categories || [];

  
    return (
      <Container>
        <ProductList id='main' products={products} categories={categories}/>
      </Container>
    );
  };

export default Product;