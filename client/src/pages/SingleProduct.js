/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
// Import the `useParams()` hook from React Router
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container, Button, Form } from "react-bootstrap";
import { QUERY_SINGLE_PRODUCT } from '../utils/queries';
import { UPDATE_PRODUCT } from '../utils/mutations';
import { REMOVE_PRODUCT } from '../utils/mutations';

const SingleProduct = () => {

  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const [removeProduct] = useMutation(REMOVE_PRODUCT);
  const { productId } = useParams();
  // eslint-disable-next-line
  const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT, {
    // Pass the `productId` URL parameter into query to retrieve this product's data
    variables: { productId: productId },
  });
  const product = data?.product || {};

  const handleDelete = async () => {
    await removeProduct({
      variables: {
        _id: product._id
      }
    })
    document.location.replace('/');
  };

  // Set up our mutation with an option to handle errors
  // eslint-disable-next-line
  const [updateProduct, {error}] = useMutation(UPDATE_PRODUCT);
  
  const [formState, setFormState] = useState({
    productName: product.productName,
    price: product.price,
    stock: product.stock,
    description: product.description,
    category: product.category,
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formState.productName == undefined) {
      formState.productName = product.productName;
    }
    if (formState.price == undefined) {
      formState.price = product.price;
    }
    if (formState.stock == undefined) {
      formState.stock = product.stock;
    }
    if (formState.description == undefined) {
      formState.description = product.description;
    }
    if (formState.category == undefined) {
      formState.category = product.category;
    }

    const {
      productName,
      price,
      stock,
      description,
      category
    } = formState;

    // if we want to set typeDefs to INT for stock and price we use parseInt() here
    const buildInput = {
      productName: productName,
      price: price,
      stock: stock,
      description: description,
      category: category
    };
    // On form submit, perform mutation and pass in form data object as arguments
    try {
			// eslint-disable-next-line
			const { data } = updateProduct({
				variables: { ...buildInput, _id: product._id },
			});

      function goToHome() {
        document.location.replace('/');
      }
      setTimeout(goToHome, 150);
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

  const url = `${document.location}`;

  if (url.endsWith(product._id)) {
    return (
      <Container>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label htmlFor='productName'>Product Name:</Form.Label>
            <Form.Control
              type='text'
              name='productName'
              placeholder={product.productName}
              onChange={handleChange}
              value={formState.productName}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='description'>Description:</Form.Label>
            <Form.Control
              type='textarea'
              name='description'
              maxLength='65'
              placeholder={product.description}
              onChange={handleChange}
              value={formState.description}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='price'>Price:</Form.Label>
            <Form.Control
              type='number'
              name='price'
              placeholder={product.price}
              onChange={handleChange}
              value={formState.price}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='stock'>Stock:</Form.Label>
            <Form.Control
              type='number'
              name='stock'
              placeholder={product.stock}
              onChange={handleChange}
              value={formState.stock}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='stock'>Category:</Form.Label>
            <Form.Control
              type='textarea'
              name='category'
              placeholder={product.category}
              onChange={handleChange}
              value={formState.category}
            />
          </Form.Group>
          <Button
            as='input'
            className='my-3'
            style={{ background: '#9DA5A8' }}
            type='submit'
            value='Update Item' />
          <Button
            as='input'
            className='my-3'
            style={{ background: '#9DA5A8' }}
            type='submit'
            value='Delete Item'
            onClick={() => handleDelete()} />
        </Form>
      </Container>
    );
  }
  else {return (<></>)}
};

export default SingleProduct;