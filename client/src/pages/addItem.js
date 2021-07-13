import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';
import Auth from '../utils/auth';
import { getAddedProductIds, addProductIds } from '../utils/localStorage'

const AddItem = () => {
  const [formState, setFormState] = useState({ itemName: '', description: '', price: '', quantity: '' });
  const [addInput, setAddInput] = useState('');
  const [addedProductIds, setAddedProductIds] = useState(getAddedProductIds());
  const [addProduct] = useMutation(ADD_ITEM);

  useEffect(() => {
    return () => addProductIds(addProductIds);
  });

  // update state based on form input changes
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!addInput) {
      return false;
    }

    try {
      const response = await addProduct(addInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { products } = await response.json();
      // clear form values
      const productData = products.map(([product]) => ({
        productName: '',
        description: '',
        price: '',
        quantity: '',
      })
      );
      addProduct(productData);
      setAddInput([]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddItem = async (productId) => {
    // find the book in `searchedBooks` state by the matching id
    const productToSave = addProduct.find((product) => product.productId === productId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await addProduct({ variables: productToSave });

      setAddedProductIds([...addedProductIds, productToSave.productId]);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label htmlFor='productName'>Product Name</Form.Label>
          <Form.Control
            type='text'
            name='productName'
            onChange={(e) => setAddInput(e.target.value)}
            value={addInput}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Description</Form.Label>
          <Form.Control
            type='textarea'
            name='description'
            onChange={(e) => setAddInput(e.target.value)}
            value={addInput}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='price'>Price</Form.Label>
          <Form.Control
            type='number'
            name='price'
            onChange={(e) => setAddInput(e.target.value)}
            value={addInput}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='quantity'>Quantity</Form.Label>
          <Form.Control
            type='number'
            name='quantity'
            onChange={(e) => setAddInput(e.target.value)}
            value={addInput}
            required
          />
        </Form.Group>
        <Button
          disabled={!(formState.productName && formState.description && formState.price && formState.quantity)}
          type='submit'
          variant='success'
          onClick={handleFormSubmit && handleAddItem}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddItem;
