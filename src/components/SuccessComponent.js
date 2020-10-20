import React from 'react'
import { Link } from 'react-router-dom'

function SuccessComponent() {
    return (
        <div className="container">
            <h3>Successfully Requested. Return to <Link to="/">home</Link> page.</h3>
        </div>
    ) 
}

export default SuccessComponent