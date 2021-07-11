import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(event) {
        event.preventDefault();
    
        emailjs.sendForm(, , event.target, )
        .then((result) => {
        console.log(result.text);
        }, (error) => {
        console.log(error.text);
        });
    }

    return (
        <>
            Email form here...
        </>
    );
}

export default Contact;