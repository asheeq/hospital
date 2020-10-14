import React from 'react'
import { Link } from 'react-router-dom'

function AdminComponent() {
    return (
        <>
            <div className="container">
                <h1>Admin Panel</h1>
                <div className="container">
                    <Link to="/admin/appointments"><button class="button button6"><span>Appointments</span></button></Link>
                    <Link to="/admin/patients"><button class="button button6"><span>Patients</span></button></Link>
                    <Link to="/admin/doctors"><button class="button button6"><span>Doctors</span></button></Link>
                </div>
            </div>
        </>
    )  
}

export default AdminComponent