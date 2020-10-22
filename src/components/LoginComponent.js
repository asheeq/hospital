import React from 'react'
import { Link } from 'react-router-dom'

function LoginComponent(){
    return (
        <>
            <div className="container">
                <h1>Login</h1>
                <div className="parent">
                    <label>Provide Information Here.</label><br></br>
                    <input className="input-box" type="email" placeholder="E-mail" required/><br></br>
                    <input className="input-box" type="password" placeholder="Password" required /><br></br>
                    <a className="btn btn-success" href="/">Submit</a>
                </div>
                <h1>Don't have any account?</h1>
                <h2>Signup <Link to="/signup/patient">here</Link>.</h2>
            </div>
        </>
    )
}

export default LoginComponent