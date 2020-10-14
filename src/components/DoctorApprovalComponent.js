import React, {Component} from 'react'
class DoctorApprovalComponent extends Component{
    constructor(props){
        super (props)
        this.state = {
            unapprovedDoctors: [
                { name: "Prof. A Rahman", designation: "MBBS FCPS FRCS", visitngTime: "Everyday 7pm to 10pm"},
                { name: "Dr. B Rahman", designation: "MBBS FCPS", visitngTime: "Sunday to Thursday 4pm to 10pm"},
                { name: "Dr. C Rahman", designation: "MBBS", visitngTime: "Monday to Wednesday 10am to 4pm"}
            ]
        }
    }
    
    render(){
        return (
            <>
                <div className="container">
                    <h1>Unapproved Doctor's List</h1>
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Visiting Time</th>
                                    <th>Approve</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.unapprovedDoctors.map(
                                        doctor => 
                                        <tr>
                                            <td>{doctor.name}</td>
                                            <td>{doctor.designation}</td>
                                            <td>{doctor.visitngTime}</td>
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

export default DoctorApprovalComponent