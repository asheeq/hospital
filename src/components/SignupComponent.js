import React from 'react'
function SignupComponent(){
    return (
        <>
            <div className="container">
                <h1>Sign Up</h1>
                <div className="parent">
                    <label>Request For A New Account.</label><br></br>
                    <input className="input-box" type="input" placeholder="Name" required /><br></br>
                    <input className="input-box" type="input" placeholder="E-mail" required /><br></br>
                    <input className="input-box" type="password" placeholder="Password" required /><br></br>
                    <input className="input-box" type="input" placeholder="Phone No." required /><br></br>
                    <input className="input-box" type="input" placeholder="Gender" required /><br></br>
                    <input className="input-box" type="input" placeholder="Age" required /><br></br>
                    <button className="btn btn-success login">Submit</button>
                </div>
            </div>
        </>
    )
}

export default SignupComponent