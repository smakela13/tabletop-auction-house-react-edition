import React from 'react';
import emailjs, {init} from 'emailjs-com';

init(`${process.env.REACT_APP_USER_ID}`);

const Contact = () => {
    function sendEmail(event) {
        event.preventDefault();

        const contactForm = document.querySelector('#contact-form');
    
        emailjs
            .sendForm(
                `${process.env.REACT_APP_SERVICE_ID}`,
                `${process.env.REACT_APP_TEMPLATE_ID}`,
                event.target
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