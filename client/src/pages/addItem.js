import React from 'react';
import { Form, Button } from 'react-bootstrap';

const addItem = () => {
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
    const handleChange = async (event) => {
      event.preventDefault();
      console.log(formState);
  
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
            placeholder='Item Name'
            name='item name'
            onChange={handleChange}
            value={formState.itemName}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Description</Form.Label>
          <Form.Control
            type='textarea'
            placeholder='Description'
            name='description'
            onChange={handleChange}
            value={formState.descritpion}
            required
          />
\        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='price'>Price</Form.Label>
          <Form.Control
            type='number'
            placeholder='Price'
            name='price'
            onChange={handleChange}
            value={formState.price}
            required
          />
\        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='quantity'>Quantity</Form.Label>
          <Form.Control
            type='number'
            placeholder='Quantity'
            name='quantity'
            onChange={handleChange}
            value={formState.quantity}
            required
          />
\        </Form.Group>
        <Button
          disabled={!(formState.email && formState.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default addItem;