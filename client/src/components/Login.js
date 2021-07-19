// see SignupForm.js for comments
import React, { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [loginUser, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await loginUser({ variables: { ...userFormData }});

      Auth.login(data.login.token);

      if (error) {
        console.log(error.message);
      }
    } catch (err) {
      console.error(err);
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
				<Form noValidate validated={validated} onSubmit={handleFormSubmit}>
					<Alert
						dismissible
						onClose={() => setShowAlert(false)}
						show={showAlert}
						variant='danger'>
						Something went wrong with your login credentials!
					</Alert>
					<Form.Group>
						<Form.Label htmlFor='email'>Email:</Form.Label>
						<Form.Control
							type='text'
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
						disabled={!(userFormData.email && userFormData.password)}
						type='submit'
						as='input'
						value='Log In'
						style={{ background: '#9DA5A8' }}
					/>
				</Form>
			</Container>
		</>
  );
};

export default Login;