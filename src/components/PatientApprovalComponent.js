import React, {Component} from 'react'
class PatientApprovalComponent extends Component{
    constructor(props){
        super (props)
        this.state = {
            unapprovedPatients: [
                { 
                    name: "Ashiqur Rahman", 
                    email: "asheeq.bracu@gmail.com", 
                    phone: "01701041715",
                    gender: "male",
                    age: 25
                },
                { 
                    name: "B Rahman", 
                    email: "b.bracu@gmail.com", 
                    phone: "01701041715",
                    gender: "male",
                    age: 29
                },
                { 
                    name: "C Rahman", 
                    email: "c.rahman@gmail.com", 
                    phone: "01701044715",
                    gender: "male",
                    age: 40
                }
            ]
        }
    }
    
    render(){
        return (
            <>
                <div className="container">
                    <h1>Unapproved Patient's List</h1>
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>E-mail</th>
                                    <th>Phone No.</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th>Approve</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.unapprovedPatients.map(
                                        patient => 
                                        <tr>
                                            <td>{patient.name}</td>
                                            <td>{patient.email}</td>
                                            <td>{patient.phone}</td>
                                            <td>{patient.gender}</td>
                                            <td>{patient.age}</td>
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

export default PatientApprovalComponent