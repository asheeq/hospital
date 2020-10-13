import React from 'react'
function DermatologyComponent(){
    return (
        <>
            <div className="container">
                <h1>Dermatology</h1>
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
                            <tr>
                                <td>{"Prof. A Rahman"}</td>
                                <td>{"MBBS FCPS FRCS"}</td>
                                <td>{"Everyday 7 to 10 pm"}</td>
                                <td><a className="btn btn-success" href="/">Appointment</a></td>
                            </tr>
                            <tr>
                                <td>{"Dr. B Rahman"}</td>
                                <td>{"MBBS FCPS"}</td>
                                <td>{"Weekday 7 to 10 pm"}</td>
                                <td><a className="btn btn-success" href="/">Appointment</a></td>
                            </tr>
                            <tr>
                                <td>{"Dr. C Rahman"}</td>
                                <td>{"MBBS"}</td>
                                <td>{"Everyday 12 to 7 pm"}</td>
                                <td><a className="btn btn-success" href="/">Appointment</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default DermatologyComponent