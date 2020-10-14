import React from 'react'
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
                    <button className="btn btn-success login">Submit</button>
                </div>
            </div>
        </>
    )
}

export default SignupComponent