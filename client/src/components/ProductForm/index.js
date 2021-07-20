import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Container, Form, Button } from 'react-bootstrap';
import { ADD_PRODUCT } from '../../utils/mutations';

const ProductForm = () => {
  const [formState, setFormState] = useState({
    productName: '',
    price: '',
    stock: '',
    description: '',
    category: '',
  });

  // Set up our mutation with an option to handle errors
  // eslint-disable-next-line
  const [addProduct, { error }] = useMutation(ADD_PRODUCT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_PRODUCT` mutation
    try {
      // eslint-disable-next-line
      const { data } = addProduct({
        variables: { ...formState },
      });

      document.location.replace('/');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

        setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label htmlFor='productName'>Product Name:</Form.Label>
          <Form.Control
            type='text'
            name='productName'
            onChange={handleChange}
            value={formState.productName}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='description'>Description:</Form.Label>
          <Form.Control
            type='textarea'
            name='description'
            onChange={handleChange}
            value={formState.description}
            maxLength='65'
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='price'>Price:</Form.Label>
          <Form.Control
            type='number'
            name='price'
            onChange={handleChange}
            value={formState.price}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='stock'>Stock:</Form.Label>
          <Form.Control
            type='number'
            name='stock'
            onChange={handleChange}
            value={formState.stock}
            required
          />
        <Form.Group>
          <Form.Label htmlFor='category'>Category:</Form.Label>
          <Form.Control
            type='textarea'
            name='category'
            onChange={handleChange}
            value={formState.category}
            required
          />
          </Form.Group>
        </Form.Group>
        <Button
          as='input'
          className='my-3'
          type='submit'
          value='Add Item' />
      </Form>
    </Container>
  );
};

export default ProductForm;


