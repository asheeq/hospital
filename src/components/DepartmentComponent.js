import React, {Component} from 'react'
import { Link } from 'react-router-dom'

function DepartmentComponent() {
    return (
        <>
            <div className="container">
                <h1>Departments</h1>
                <div className="container">
                    <Link to="/department/dermatology"><button class="button button5"><span>Dermatology</span></button></Link>
                    <Link to="/department/cardiology"><button class="button button5"><span>Cardiology</span></button></Link>
                    <Link to="/department/medicine"><button class="button button5"><span>Medicine</span></button></Link>
                    <Link to="/department/dental"><button class="button button5"><span>Dental</span></button></Link>
                </div>
            </div>
        </>
    )  
}

export default DepartmentComponent