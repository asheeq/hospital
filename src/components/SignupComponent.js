import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class SignupComponent extends Component{

    constructor(props) {
        super(props);
        this.signupClicked = this.signupClicked.bind(this)
    }

    signupClicked() {
        axios.post('http://localhost:8080/signup/patient')
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>Sign Up</h1>
                    <div className="parent">
                        <label>Request For A New Account.</label><br></br>
                        <input className="input-box" type="text" placeholder="Name" ref="patientName" required /><br></br>
                        <input className="input-box" type="email" placeholder="E-mail" ref="email" required /><br></br>
                        <input className="input-box" type="password" placeholder="Password" ref="password" required /><br></br>
                        <input className="input-box" type="number" placeholder="Age" ref="patientAge" required /><br></br>
                        {/* <a className="btn btn-success" onClick={() => this.signupClicked()}>Submit</a> */}
                        <button className="btn btn-success" onClick={() => this.signupClicked()}>Submit</button>
                        <h1>Register as a doctor?</h1>
                        <h2>Register <Link to="/signup/doctor">here</Link>.</h2>
                    </div>
                </div>
            </>
        )
    }
    
}

export default SignupComponent