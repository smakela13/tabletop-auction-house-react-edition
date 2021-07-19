import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: ''});
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({ variables: userFormData });

      if (error) {
        console.log(error.message);
      }
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
		<>
			<Container>
				{/* This is needed for the validation functionality above */}
				<Form noValidate validated={validated} onSubmit={handleFormSubmit}>
					{/* show alert if server response is bad */}
					<Alert
						dismissible
						onClose={() => setShowAlert(false)}
						show={showAlert}
						variant='danger'>
						Something went wrong with your signup!
					</Alert>

					<Form.Group>
						<Form.Label htmlFor='username'>Username:</Form.Label>
						<Form.Control
							type='text'
							name='username'
							onChange={handleInputChange}
							value={userFormData.username}
							required
						/>
						<Form.Control.Feedback type='invalid'>
							Username is required!
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group>
						<Form.Label htmlFor='email'>Email:</Form.Label>
						<Form.Control
							type='email'
							name='email'
							onChange={handleInputChange}
							value={userFormData.email}
							required
						/>
						<Form.Control.Feedback type='invalid'>
							Email is required!
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group>
						<Form.Label htmlFor='password'>Password:</Form.Label>
						<Form.Control
							type='password'
							name='password'
							onChange={handleInputChange}
							value={userFormData.password}
							required
						/>
						<Form.Control.Feedback type='invalid'>
							Password is required!
						</Form.Control.Feedback>
					</Form.Group>
					<Button
						disabled={
							!(
								userFormData.username &&
								userFormData.email &&
								userFormData.password
							)
						}
						type='submit'
						as='input'
						value='Sign Up'
						style={{ background: '#9DA5A8' }}
					/>
				</Form>
			</Container>
		</>
  );
};

export default Signup;