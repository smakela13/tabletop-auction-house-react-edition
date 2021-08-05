import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Container, Form, Button } from 'react-bootstrap';
import { ADD_PRODUCT } from '../../utils/mutations';
import { QUERY_PRODUCTS_AND_CATEGORIES } from '../../utils/queries';


const ProductForm = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS_AND_CATEGORIES);
  const categories = [
    {
      label: 'Melee Weapon',
      value: 'Melee Weapon',
    },
    {
      label: 'Ranged Weapon',
      value: 'Ranged Weapon',
    },
    {
      label: 'Food & Lodging',
      value: 'Food & Lodging',
    },
    {
      label: 'Armor',
      value: 'Armor',
    },
    {
      label: 'Clothing',
      value: 'Clothing',
    },
    {
      label: 'Adventure Gear/Tools',
      value: 'Adventure Gear/Tools',
    },
    {
      label: 'Mounts/Riding Gear',
      value: 'Mounts/Riding Gear',
    },
    {
      label: 'For Your Animals',
      value: 'For Your Animals',
    },
    {
      label: 'Barding',
      value: 'Barding',
    },
    {
      label: 'Special Items',
      value: 'Special Items',
    },
    {
      label: 'Miscellaneous',
      value: 'Miscellaneous',
    },
  ];

  const [formState, setFormState] = useState({
    productName: '',
    price: '',
    stock: '',
    description: '',
    category: '',
  });

  console.log(formState);



  // Set up our mutation with an option to handle errors
  // eslint-disable-next-line
  const [addProduct, { error }] = useMutation(ADD_PRODUCT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // super();
    // this.myRef = React.createRef();
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


  // const { loading, data } = useQuery(QUERY_PRODUCTS_AND_CATEGORIES);
  // const products = data?.products || [];
  // const categories = data?.categories || [];
  // console.log(categories);
  // console.log(products)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
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
        </Form.Group>
        <Form.Group controlId="formBasicSelect">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            name='category'
            value={formState.category}
            onChange={handleChange}
          >
            {categories.map((option) => (
              <option value={option.value} key={option.value}>{option.label}</option>
            ))}
          </Form.Control>
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


