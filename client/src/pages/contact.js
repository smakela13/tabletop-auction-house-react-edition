import React from 'react';
import emailjs from 'emailjs-com';
require('dotenv').config();

const Contact = () => {
    function sendEmail(event) {
        event.preventDefault();

        const contactForm = document.querySelector('#contact-form');
    
        emailjs
				.sendForm(
					process.env.SERVICE_ID,
					process.env.TEMPLATE_ID,
                    event.target,
                    process.env.USER_ID
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
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </>
    );
}

export default Contact;