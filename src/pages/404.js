import React from 'react';
import {Link} from 'gatsby'
export default function Error404(){

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2> Bad endpoint. Check your url! </h2>
                    <Link to="/home"> Go back to main page</Link>
                </div>
                <div className="col-12 text-center" style={{maxHeight:"100px",maxWidth:"100px"}}>
                    <img src="https://http.cat/404"></img>
                </div>
            </div>
        </div>
    );
}