import React from 'react';
import {Link} from 'gatsby'
export default function Error404(){

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2> Error 404</h2>
                    <p> Let me take you back chief... </p>
                    <Link to="/home"> Go back to main page</Link>
                </div>
            </div>
        </div>
    );
}