import React, {useState} from 'react';
import emailjs from 'emailjs-com';
require('dotenv').config();

const userID = `${window.env.USER_ID}`;

const Contact = () => {
	const [statusMessage, setStatusMessage] = useState();

	function sendEmail(event) {
		event.preventDefault();

		const contactForm = document.querySelector('.contact-form');
		const statusMsg = document.querySelector('.status-message');

		emailjs
			.sendForm(
				`${window.env.SERVICE_ID}`,
				`${window.env.TEMPLATE_ID}`,
				event.target,
				userID
			)
			.then(
				(result) => {
					contactForm.reset();
					console.log(result.text);
					setStatusMessage('Message sent!');
					statusMsg.className = 'status-message';
					setTimeout(() => {
						statusMsg.className = 'status-message';
					}, 5000);
				},
				(error) => {
					console.log(error.text);
					setStatusMessage('Failed to send message! Try again later.');
					statusMsg.className = 'status-message';
					setTimeout(() => {
						statusMsg.className = 'status-message';
					}, 5000);
				}
			);
	}

	return (
		<>
			<form className='contact-form' onSubmit={sendEmail}>
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

				<p className='status-message'>{statusMessage}</p>
				<input type='submit' value='Send' style={{ color: '#fff' }} />
			</form>
		</>
	);
};

export default Contact;
