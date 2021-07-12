import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';
import Auth from '../utils/auth';

const AddItem = () => {
  const [formState, setFormState] = useState({ itemName: '', description: '', price: '', quantity: '' });
  const [addInput, setAddInput] = useState('');
  const [addedProductIds, setAddedProductIds ] = useState(getAddedProductIds());
  const [addItem] = useMutation(ADD_ITEM);

  useEffect(() => {
    return () => addItemIds(addItemIds);
  });

  // update state based on form input changes
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!addInput) {
      return false;
    }

    try {
      const response = await addItem(addInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();
    // clear form values
    const procductData = items.map(([product]) => ({
      itemName: '',
      description: '',
      price: '',
      quantity: '',
    });
    setaddedItem(productData);
    setAddInput('');
  } catch (err) {
    console.error(err);
  }
};

  const handleAddItem = async (productId) => {
    // find the book in `searchedBooks` state by the matching id
    const productToSave = addedProducts.find((product) => product.productId === productId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await addItem({variables: ProductToSave});

      setAddItemIds([...addedProductIds, productToSave.productId]);

    } catch (err) {
      console.error(err);
    }
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
