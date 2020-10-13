import React from 'react'
import { Link } from 'react-router-dom'

function LoginComponent(){
    return (
        <>
            <div className="container">
                <h1>Login</h1>
                <div className="parent">
                    <label>Provide Information Here.</label><br></br>
                    <input className="input-box" type="input" placeholder="E-mail" required/><br></br>
                    <input className="input-box" type="password" placeholder="Password" required /><br></br>
                    <button className="btn btn-success login">Submit</button>
                </div>
                <h1>Don't have any account?</h1>
                <h2>Signup <Link to="/signup">here</Link>.</h2>
            </div>
        </>
    )
}

export default LoginComponent