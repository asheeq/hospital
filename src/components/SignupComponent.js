import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class SignupComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            patientName: "",
            email: "",
            password: null,
            patientAge: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field, value) {
        const ps = {};  
        ps[field] = value;
        this.setState(ps);
      }

    signupClicked() {
        axios.post('http://localhost:8080/signup/patient', this.state);
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>Sign Up</h1>
                    <div className="parent">
                        <label>Request For A New Account.</label><br></br>
                        <input className="input-box" type="text" placeholder="Name" required onChange={event => this.handleChange('patientName', event.target.value)} /><br></br>
                        <input className="input-box" type="email" placeholder="E-mail" name="email" onChange={event => this.handleChange('email', event.target.value)} required /><br></br>
                        <input className="input-box" type="password" placeholder="Password" name="password" required onChange={event => this.handleChange('password', event.target.value)} /><br></br>
                        <input className="input-box" type="number" placeholder="Age" name="patientAge" required onChange={event => this.handleChange('patientAge', event.target.value)} /><br></br>
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