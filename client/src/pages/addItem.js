import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddItem = () => {
  const [formState, setFormState] = useState({ itemName: '', description: '', price: '', quantity: '' });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // clear form values
    setFormState({
      itemName: '',
      description: '',
      price: '',
      quantity: '',
    });
  };
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label htmlFor='itemName'>Item Name</Form.Label>
          <Form.Control
            type='text'
            name='itemName'
            onChange={handleChange}
            value={formState.itemName}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Description</Form.Label>
          <Form.Control
            type='textarea'
            name='description'
            onChange={handleChange}
            value={formState.descritpion}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='price'>Price</Form.Label>
          <Form.Control
            type='number'
            name='price'
            onChange={handleChange}
            value={formState.price}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='quantity'>Quantity</Form.Label>
          <Form.Control
            type='number'
            name='quantity'
            onChange={handleChange}
            value={formState.quantity}
            required
          />
        </Form.Group>
        <Button
          disabled={!(formState.itemName && formState.description && formState.price && formState.quantity)}
          type='submit'
          variant='success'
          onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddItem;