// see SignupForm.js for comments
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { loginUser } from '../utils/API';
import Auth from '../utils/auth';

const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

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
            const response = await loginUser(userFormData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
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
            <div class="font-sans min-h-screen antialiased bg-indigo-100 pt-10 space-y-14">

                <img class="mx-auto shadow-lg" src="./img/TabletopAuctionHouse.jpg" alt="Tabletop Auction House" />

                <div class="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">

                    <form id="login-form" class="border-2 border-blue-600 rounded-lg shadow-md">

                        <div class="flex flex-col bg-gray-100 p-10 rounded-lg shadow space-y-6">

                            <h1 class="font-bold text-xl text-center">Account Sign In</h1>

                            <div class="flex flex-col space-y-1">

                                <input type="text" class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Username" id="username-login" />


                                <div class="flex flex-col space-y-1">

                                    <input type="password" class="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" placeholder="Password" id="password-login" />
                                </div>
                                <button type="submit" value="Log In" class="border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200">Log In</button> <button type="button" id="signup-button" class="border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200">Sign Up</button>
                            </div> 
                        </div>  
                    </form>                       
                </div>
            </div>       
        </>
    );
};

export default LoginForm;