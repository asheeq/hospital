import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="main-title">
                    <h1>Welcome to Spring Hospital.</h1>
                    <p>Spring Hospital is one of the leading hospitals in Bangladesh.</p>
                    <h3>Want an appointment? Click <Link to="/department">here</Link>.</h3>
                    </div>
                </div>
            </>
        )
    }
}
export default WelcomeComponent
