import React from 'react';
import {quote, socialNetworks} from '../assets/footer';
import {Link} from 'gatsby';

function FooterContent(){

    const socialNets = [];
    var i;
    for(i = 0; i < socialNetworks.length; i++){
        socialNets.push(
            <span key={i} style={{fontSize:"50px", marginRight:"10px"}}>
                <a className={socialNetworks[i].icon + " text-decoration-none"} 
                    href={socialNetworks[i].link}
                    target="_blank" rel="noopener noreferrer"
                    style={{color:"black"}}
                />
            </span>
        );
    }

    const sections = ["Home", "About", "Resume"];
    const navLinks = sections.map((section) => {
        return(
            <li key={section}>
            <Link className="text-decoration-none" to={"/" + section.toLowerCase()}
                style={ { color:"black" }}
            >
                {section}
            </Link>
        </li>
        );
    });

    return(
        <div className="row align-items-center">
            <div className="col-4 col-sm-2">
                <ul className="list-unstyled">
                    {navLinks}
                </ul>
            </div>

            <div className="col-8 col-sm-7">
                {quote}
            </div> 

            <div className="col-12 col-sm-3 align-self-center text-center">
                {socialNets}
            </div>
        </div>
    );
}
function CopyRight(){
    return(
        <div className="row justify-content-center">
            <div className="col-auto">
                <span> &#169; Christofer Berruz Chungata. </span>
            </div>
        </div>
    );
}
export default function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <FooterContent />
                <CopyRight />
            </div>
        </div>
    );
}