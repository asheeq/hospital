import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="/" className="navbar-brand">Spring Hospital</a>
                    </div>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {<li><Link className="nav-link" to="/department">Departments</Link></li>}
                        {<li><Link className="nav-link" to="/">Services</Link></li>}
                        {<li><Link className="nav-link" to="/">Login</Link></li>}
                        {/* {<li><Link className="nav-link" to="/logout">Logout</Link></li>} */}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent