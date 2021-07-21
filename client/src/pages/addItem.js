import React from 'react';
import { useQuery } from '@apollo/client';
import ProductForm from '../components/ProductForm';
import { Container } from "react-bootstrap";
import { QUERY_CATEGORIES, QUERY_PRODUCTS, QUERY_PRODUCTS_AND_CATEGORIES } from '../utils/queries';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const AddItem = () => {
  // eslint-disable-next-line
  const {loading, data} = useQuery(QUERY_PRODUCTS_AND_CATEGORIES);
  // eslint-disable-next-line
  const products = data?.products || [];
  const categories = data?.categories || [];

  return (
    <Container>
      {Auth.loggedIn() ? (
        <>
          <ProductForm products={products} categories={categories}/>
        </>
      ) : (
        <>
          <p>
            Hey now, you need to either login or signup for an account. No trying to sell your merchandise without it.
            <Link to="/login">LOGIN</Link> or <Link to="/signup">SIGNUP.</Link>
          </p>
        </>
      )}
    </Container>
  );
};

export default AddItem;
