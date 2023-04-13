import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const getUser = () => {
    // const element = <FontAwesomeIcon icon={faEnvelope} />
    return (
        <React.Fragment>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fa-solid fa-user"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item" to="#">Profile</Link></li>
                    <li><Link className="dropdown-item" to="#">About </Link></li>
                    <li><Link className="dropdown-item" to="#">Logout</Link></li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default getUser
