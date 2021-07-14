import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { serializeFetchParameter, useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';
import { QUERY_PRODUCTS } from '../utils/queries';
import {  Link } from 'react-router-dom';
import Auth from '../utils/auth';


export default function AddItem() {
  const [formState, setFormState] = useState({
    productName: '',
    price: '',
    stock: '',
    description: '',
  });
 

  const [addProduct, { error }] = useMutation(ADD_ITEM, {
    update(cache, { data: { addProduct } }) {
      try {
        const { product } = cache.readQuery({ query: QUERY_PRODUCTS });

        cache.writeQuery({
          query: QUERY_PRODUCTS,
          data: { product: [addProduct, ...product] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addProduct({
        variables: { ...formState }
      });

      setFormState({
        productName: '',
        price: '',
        stock: '',
        description: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if( name === 'productName' && 'price' && 'stock' && 'description') {
      setFormState({ ...formState, [name]: value});
    } else if (name !== 'productName' && 'price' && 'stock' && 'description') {
      setFormState({ ...formState, [name]: value });
    }
  };
          
     
  return (
    <>
      {Auth.loggedIn() ? (
        <Form>
          <Form.Group>
            <Form.Label htmlFor='productName'>Product Name</Form.Label>
            <Form.Control
              type='text'
              name='productName'
              onChange={handleChange}
              value={formState.productName}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='description'>Description</Form.Label>
            <Form.Control
              type='textarea'
              name='description'
              onChange={handleChange}
              value={formState.description}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='price'>Price</Form.Label>
            <Form.Control
              type='textarea'
              name='price'
              onChange={handleChange}
              value={formState.price}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='stock'>Stock</Form.Label>
            <Form.Control
              type='textarea'
              name='stock'
              onChange={handleChange}
              value={formState.stock}
              required
            />
          </Form.Group>
          <Button
            type='submit'
            variant='success'
            onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form>
      ) : (
        <p>
        Hey now, you need to either login or signup for an account. No trying to sell your merchandise without it{' '}
        <Link to="/login">LOGIN</Link> or <Link to="/signup">SIGNUP.</Link>
        </p>
      )}
   </>
 );
};