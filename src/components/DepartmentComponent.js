import React from 'react'
import { Link } from 'react-router-dom'

function DepartmentComponent(){
    return (
        <>
            <div className="container">
                <h1>Departments</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Visit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{"Dermatology"}</td>
                                <td>{"Skin problems and others"}</td>
                                <td><Link to="/department/dermatology"><button className="btn btn-success">Visit</button></Link></td>
                            </tr>
                            <tr>
                                <td>{"Cardiology"}</td>
                                <td>{"Heart problems and others"}</td>
                                <td><Link to="/department/cardiology"><button className="btn btn-success">Visit</button></Link></td>
                            </tr>
                            <tr>
                                <td>{"Medicine"}</td>
                                <td>{"Treatment on all sort of problems"}</td>
                                <td><Link to="/department/medicine"><button className="btn btn-success">Visit</button></Link></td>
                            </tr>
                            <tr>
                                <td>{"Dental"}</td>
                                <td>{"Teeth and mouth"}</td>
                                <td><Link to="/department/dental"><button className="btn btn-success">Visit</button></Link></td>
                            </tr>
                            <tr>
                                <td>{"Dermatology"}</td>
                                <td>{"Skin problems and others"}</td>
                                <td><Link to="/department/dermatology"><button className="btn btn-success">Visit</button></Link></td>
                            </tr>
                            <tr>
                                <td>{"Cardiology"}</td>
                                <td>{"Heart problems and others"}</td>
                                <td><Link to="/department/cardiology"><button className="btn btn-success">Visit</button></Link></td>
                            </tr>
                            <tr>
                                <td>{"Medicine"}</td>
                                <td>{"Treatment on all sort of problems"}</td>
                                <td><Link to="/department/medicine"><button className="btn btn-success">Visit</button></Link></td>
                            </tr>
                            <tr>
                                <td>{"Dental"}</td>
                                <td>{"Teeth and mouth"}</td>
                                <td><Link to="/department/dental"><button className="btn btn-success">Visit</button></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default DepartmentComponent