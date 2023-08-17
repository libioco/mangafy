import React from 'react';
import {Link} from 'react-router-dom';

function Register() {
    return (
        <div className="auth">
            <h1>Create an Account</h1>
            <form>
                <input required type="text" placeholder="First Name" />
                <input required type="text" placeholder="Last Name" />
                <input required type="email" placeholder="Email Address" />
                <input required type="password" placeholder="Password" />
                <button>Register</button>
                <p>ERROR ERROR RAHHHH</p>

                <span>Already have a Mangafy account? <Link to="/login">Login</Link></span>
            </form>
        </div>

    );
}

export default Register;