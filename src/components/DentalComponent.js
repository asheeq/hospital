import React, {Component} from 'react'
import axios from 'axios'

class DentalComponent extends Component{
    constructor(props){
        super (props)
        this.state = {
            doctors: [
                // { name: "Prof. A Rahman", designation: "MBBS FCPS FRCS", visitngTime: "Everyday 7pm to 10pm"},
                // { name: "Dr. B Rahman", designation: "MBBS FCPS", visitngTime: "Sunday to Thursday 4pm to 10pm"},
                // { name: "Dr. C Rahman", designation: "MBBS", visitngTime: "Monday to Wednesday 10am to 4pm"}
            ]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/department/dental')
            .then(
                response => {
                    this.setState({ doctors: response.data || [] })
                }
            )
    }
    
    render(){
        return (
            <>
                <div className="container">
                    <h1>Dental</h1>
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Visiting Time</th>
                                    <th>Make An Appointment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.doctors.map(
                                        doctor => 
                                        <tr>
                                            <td>{doctor.doctorName}</td>
                                            <td>{doctor.degree}</td>
                                            <td>{doctor.visitingTime}</td>
                                            <td><a className="btn btn-success" href="/success">Appointment</a></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default DentalComponent