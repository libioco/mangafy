import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="email" placeholder="Email Address" />
                <input required type="password" placeholder="Password" />
                <button>Login</button>
                <p>ERROR ERROR RAHHHH</p>
                <span>New to Mangafy? <Link to="/register">Create an Account</Link></span>
            </form>
        </div>

    );
}
    


export default Login;