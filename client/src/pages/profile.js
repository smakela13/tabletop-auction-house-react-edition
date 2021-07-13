import React from 'react';
import '../App.css';
import Auth from '../utils/auth';


const Profile = () => {
    if (!Auth.loggedIn()) {
        document.location.replace("/login")
    }
    else {
        return (
            <>
            Hello. Hypothetically, here's a list of products you've purchased.
            </>
        );
    }
}

export default Profile;