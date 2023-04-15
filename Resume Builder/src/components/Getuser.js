import React from 'react'
import { Link } from 'react-router-dom'
const getUser = () => {
    const logout=()=>{
        localStorage.removeItem('token')
    }

    return (
        <React.Fragment>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-user"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item" to="/user/profile">Profile</Link></li>
                    <li><Link className="dropdown-item" to="#">About </Link></li>
                    <li><Link className="dropdown-item" to="/" onClick={logout}>Logout</Link></li>
               
                </ul>
            </div>
        </React.Fragment>
    )
}

export default getUser
