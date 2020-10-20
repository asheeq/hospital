import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// function DepartmentComponent() {
//     return (
//         <>
//             <div className="container">
//                 <h1>Departments</h1>
//                 <div className="container">
//                     <Link to="/department/dermatology"><button class="button button5"><span>Dermatology</span></button></Link>
//                     <Link to="/department/cardiology"><button class="button button5"><span>Cardiology</span></button></Link>
//                     <Link to="/department/medicine"><button class="button button5"><span>Medicine</span></button></Link>
//                     <Link to="/department/dental"><button class="button button5"><span>Dental</span></button></Link>
//                 </div>
//             </div>
//         </>
//     )  
// }

class DepartmentComponent extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            departments:[]
        }
    } 

    componentDidMount(){
        axios.get('http://localhost:8080/department')
            .then(
                response => {
                    this.setState({ departments: response.data || [] })
                }
            )
    }

    render(){
        return (
            <>
                <div className="container">
                    <h1>Departments</h1>
                    <div className="container">
                        {
                            this.state.departments.map(
                                        department => 
                                        <Link to={`/department/${department.departmentName}`}><button class="button button5"><span>{department.departmentName.charAt(0).toUpperCase() + department.departmentName.slice(1)}</span></button></Link>
                                    )
                        }
                   </div>
                </div>
            </>
        )
    }
}
export default DepartmentComponent