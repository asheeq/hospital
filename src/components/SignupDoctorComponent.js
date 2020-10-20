import React from 'react'
function SignupDoctorComponent(){
    return (
        <>
            <div className="container">
                <h1>Register As A Doctor</h1>
                <div className="parent">
                    <label>Request For A New Account.</label><br></br>
                    <input className="input-box" type="text" placeholder="Name" required /><br></br>
                    <input className="input-box" type="text" placeholder="Designation" required /><br></br>
                    <input className="input-box" type="email" placeholder="E-mail" required /><br></br>
                    <input className="input-box" type="password" placeholder="Password" required /><br></br>
                    <input className="input-box" type="text" placeholder="Phone No." required /><br></br>
                    <input className="input-box" type="text" placeholder="Gender" required /><br></br>
                    <input className="input-box" type="number" placeholder="Age" required /><br></br>
                    <a className="btn btn-success" href="/success">Submit</a>
                </div>
            </div>
        </>
    )
}

export default SignupDoctorComponent