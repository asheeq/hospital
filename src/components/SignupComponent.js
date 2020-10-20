import React from 'react'
import { Link } from 'react-router-dom'

function SignupComponent(){
    return (
        <>
            <div className="container">
                <h1>Sign Up</h1>
                <div className="parent">
                    <label>Request For A New Account.</label><br></br>
                    <input className="input-box" type="text" placeholder="Name" required /><br></br>
                    <input className="input-box" type="email" placeholder="E-mail" required /><br></br>
                    <input className="input-box" type="password" placeholder="Password" required /><br></br>
                    <input className="input-box" type="text" placeholder="Phone No." required /><br></br>
                    <input className="input-box" type="text" placeholder="Gender" required /><br></br>
                    <input className="input-box" type="number" placeholder="Age" required /><br></br>
                    <a className="btn btn-success" href="/success">Submit</a>
                    <h1>Register as a doctor?</h1>
                    <h2>Register <Link to="/signup/doctor">here</Link>.</h2>
                </div>
            </div>
        </>
    )
}

export default SignupComponent