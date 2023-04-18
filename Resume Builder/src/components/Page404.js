import React from 'react'
import { Link} from "react-router-dom";

const Page404 = () => {
    return (
        <React.Fragment>
            <div className="container text-center">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="error-message">
                    <h1>Oops!</h1>
                    <h2>That page couldn't be found.</h2>
                    <p>Sorry, but the page you are looking for doesn't exist.</p>
                    <p>Please check the URL or go back to the <Link to="/">homepage</Link>.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Page404
