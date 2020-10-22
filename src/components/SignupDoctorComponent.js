import React, {Component} from 'react'
import axios from 'axios'

class SignupDoctorComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            doctorName: "",
            degree: "",
            email: "",
            password: null,
            doctorAge: null,
            visitingTime: "",
            departmentId: 1,
            departments: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:8080/department')
            .then(
                response => {
                    this.setState({ departments: response.data || [] })
                }
            )
    }

    handleChange(field, value) {
        this.setState({[field]: value});
      }

    signupClicked() {
        axios.post('http://localhost:8080/signup/doctor', this.state);
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>Register As A Doctor</h1>
                    <div className="parent">
                        <label>Request For A New Account.</label><br></br>
                        <div className="container">
                        <label>Choose a department:</label>
                        <select onChange={event => this.handleChange('departmentId', event.target.value)} value={this.state.departmentId}>
                        {
                            this.state.departments.map(
                                        department => 
                                        <option key={department.departmentId} value = {department.departmentId}>
                                            {department.departmentName.charAt(0).toUpperCase() + department.departmentName.slice(1)}
                                        </option>
                                    )
                        }
                        </select>
                    </div>
                        <input className="input-box" type="text" placeholder="Name" onChange={event => this.handleChange('doctorName', event.target.value)} required /><br></br>
                        <input className="input-box" type="text" placeholder="Degree" onChange={event => this.handleChange('degree', event.target.value)} required /><br></br>
                        <input className="input-box" type="email" placeholder="E-mail" onChange={event => this.handleChange('email', event.target.value)} required /><br></br>
                        <input className="input-box" type="password" placeholder="Password" onChange={event => this.handleChange('password', event.target.value)} required /><br></br>
                        <input className="input-box" type="number" placeholder="Age" onChange={event => this.handleChange('doctorAge', event.target.value)} required /><br></br>
                        <input className="input-box" type="text" placeholder="Visiting Time" onChange={event => this.handleChange('visitingTime', event.target.value)} required /><br></br>
                        <button className="btn btn-success" onClick={() => this.signupClicked()}>Submit</button>
                    </div>
                </div>
        </>
        )
    }
    
}

export default SignupDoctorComponent