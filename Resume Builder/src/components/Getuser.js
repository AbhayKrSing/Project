import React from 'react'
import { Link } from 'react-router-dom'
const getUser = () => {
    const logout=()=>{
        localStorage.removeItem('token')
    }
    const handleclick=async()=>{
        const res = await fetch('http://localhost:/user/getuser', {
            method: 'POST',
            headers: { 'auth-token': localStorage.getItem('token') },
        })
      const  data =await res.json()
        console.log(data)
    }
    return (
        <React.Fragment>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-user"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item" to="/profile" onClick={handleclick}>Profile</Link></li>
                    <li><Link className="dropdown-item" to="#">About </Link></li>
                    <li><Link className="dropdown-item" to="/" onClick={logout}>Logout</Link></li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default getUser
