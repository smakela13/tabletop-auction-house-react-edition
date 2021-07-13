import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';


const AddItem = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [addProduct] = useMutation(ADD_ITEM);



  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = addProduct({
        variables: { productName, description, price, stock },
      });
      setProductName('');
      setDescription('');
      setPrice('');
      setStock('');
    } catch (err) {
      console.error(err);
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
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='description'>Description</Form.Label>
          <Form.Control
            type='textarea'
            name='description'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='price'>Price</Form.Label>
          <Form.Control
            type='textarea'
            name='price'
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='stock'>Stock</Form.Label>
          <Form.Control
            type='textarea'
            name='stock'
            onChange={(e) => setStock(e.target.value)}
            value={stock}
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
      You need to be logged in to share your thoughts. Please{' '}
      <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
    </p>
  )}
    </>
  );
};

export default AddItem;
