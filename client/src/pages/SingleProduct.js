import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
// Import the `useParams()` hook from React Router
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container, Button, ListGroup, ListGroupItem, CardGroup, Card, Form } from "react-bootstrap";
import { QUERY_SINGLE_PRODUCT } from '../utils/queries';
import { UPDATE_PRODUCT } from '../utils/mutations';
import { REMOVE_PRODUCT } from '../utils/mutations';
import Auth from '../utils/auth';

const SingleProduct = () => {

  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const [removeProduct] = useMutation(REMOVE_PRODUCT);
  const { productId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT, {
    // Pass the `productId` URL parameter into query to retrieve this product's data
    variables: { productId: productId },
  });
  const product = data?.product || {};

  const handleDelete = async () => {
    // const token = Auth.loggedIn() ? Auth.getToken() : null;
    await removeProduct({
      variables: {
        _id: product._id
      }
    })
    // if (!token) {
    //   return false;
    // }
    document.location.replace('/');
  };

  // Set up our mutation with an option to handle errors
  const [updateProduct, { error }] = useMutation(UPDATE_PRODUCT);
//  Not sure why setting initial values isn't working
  const [formState, setFormState] = useState({
    productName: product.productName,
    price: product.description,
    stock: product.price,
    description: product.stock,
    category: product.category,
  });
  // const [characterCount, setCharacterCount] = useState(0);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // destructure state
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
      const { data } = updateProduct({
        variables: { ...buildInput, _id: product._id },
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

  const url = `${document.location}`;

  if (url.endsWith(product._id)) {
    return (
      <Container>
        <ListGroup horizontal >
          <Button
            name='Delete'
            onClick={() => handleDelete()}
          >Delete</Button>
          <ListGroup.Item className='p-3 col-2'>{product.productName}</ListGroup.Item>
          <ListGroup.Item className='p-3 col-7'>{product.description}</ListGroup.Item>
          <ListGroup.Item className='p-3 col-1'>Price:<br />{product.price}</ListGroup.Item>
          <ListGroup.Item className='p-3 col-1'>Stock:<br />{product.stock}</ListGroup.Item>
          <ListGroup.Item className='p-3 col-1'>Category:<br />{product.category}</ListGroup.Item>
        </ListGroup>
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
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor='stock'>Category:</Form.Label>
            <Form.Control
              type='textarea'
              name='category'
              onChange={handleChange}
              value={formState.category}
              required
            />
          </Form.Group>
          <Button
            as='input'
            className='my-3'
            type='submit'
            value='Update Item' />
        </Form>
      </Container>
    );
  }
  else {return (<></>)}
};

export default SingleProduct;