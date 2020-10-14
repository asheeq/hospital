import React, {Component} from 'react'
class AppointmentApprovalComponent extends Component{
    constructor(props){
        super (props)
        this.state = {
            unapprovedAppointments: [
                { 
                    patientName: "Ashiqur Rahman",
                    doctorName: "Prof. A Rahman", 
                    visitingTime: "Sunday", 
                    remarks: "Do some tests."
                },
                { 
                    patientName: "B Rahman",
                    doctorName: "Dr. B Rahman", 
                    visitingTime: "Tuesday", 
                }
            ]
        }
    }
    
    render(){
        return (
            <>
                <div className="container">
                    <h1>Unapproved Appointments List</h1>
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Patient's Name</th>
                                    <th>Doctor's Name</th>
                                    <th>Appointment</th>
                                    <th>Approve</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.unapprovedAppointments.map(
                                        appointment => 
                                        <tr>
                                            <td>{appointment.patientName}</td>
                                            <td>{appointment.doctorName}</td>
                                            <td>{appointment.visitingTime}</td>
                                            <td><a className="btn btn-success" href="/">Approve</a></td>
                                            <td><a className="btn btn-danger" href="/">Delete</a></td>
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

export default AppointmentApprovalComponent