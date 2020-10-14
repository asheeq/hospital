import React from 'react'
import { Link } from 'react-router-dom'

function ErrorComponent() {
    return (
        <div className="container">
            <h3>An Error Occurred.  Return to <Link to="/">home</Link> page.</h3>
        </div>
    ) 
}

export default ErrorComponent
