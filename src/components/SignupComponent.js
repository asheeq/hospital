import React from 'react'
function SignupComponent(){
    return (
        <>
            <div className="container">
                <h1>Sign Up</h1>
                <div className="container">
                <label>Provide Information Here.</label><br></br>
                <input className="input-box" type="input" placeholder="Name" required /><br></br>
                <input className="input-box" type="input" placeholder="E-mail" required /><br></br>
                <input className="input-box" type="input" placeholder="Password" required /><br></br>
                <input className="input-box" type="input" placeholder="Phone No." required /><br></br>
                <input className="input-box" type="input" placeholder="Gender" required /><br></br>
                <input className="input-box" type="input" placeholder="Age" required /><br></br>
                <button className="btn btn-success">Submit</button>
                </div>
            </div>
        </>
    )
}

export default SignupComponent