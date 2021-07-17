import React from 'react';
import { useQuery } from '@apollo/client';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import { Container } from "react-bootstrap";
import { QUERY_PRODUCTS } from '../utils/queries';
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const AddItem = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];

  return (
    <Container>
      {Auth.loggedIn() ? (
        <>
          <ProductForm />
          <ProductList products={products} title="Added Products" />
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
