import React from 'react';
import emailjs from 'emailjs-com';
require('dotenv').config();

const userID = `${process.env.USER_ID}`;

const Contact = () => {
	function sendEmail(event) {
		event.preventDefault();

		const contactForm = document.querySelector('#contact-form');

		emailjs
			.sendForm(
				`${process.env.SERVICE_ID}`,
				`${process.env.TEMPLATE_ID}`,
				event.target,
				userID
			)
			.then(
				(result) => {
					contactForm.reset();
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	}

	return (
		<>
			<form
				className='contact-form'
				onSubmit={sendEmail}>
				<label>Name:</label>
				<input type='text' name='from_name' required />
				<label>Email Address:</label>
				<input
					type='email'
					name='reply_to'
					pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
					required
				/>
				<label>Message:</label>
				<textarea type='text' name='message' maxLength='2500' required />
				<input type='submit' value='Send' style={{color: '#fff'}} />
			</form>
		</>
	);
};

export default Contact;
