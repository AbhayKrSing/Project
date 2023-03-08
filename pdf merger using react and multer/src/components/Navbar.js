import React from 'react'
import Form from './Form'

const Navbar = (props) => {
    return (
        <>
            <div>
                <nav className="navbar">
                    <div className="container-fluid  justify-content-center">
                        <h1 className="navbar-brand">Pdf Merger</h1>
                    </div>
                </nav>
            </div>
            <Form  condition={props.condition} setcondition={props.setcondition}/>
        </>
    )
}

export default Navbar
