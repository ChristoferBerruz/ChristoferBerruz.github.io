import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import resumePdf from '../files/Christofer_Berruz_Resume.pdf';
import SEO from '../components/seo';

function ResumeContent(){
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h2> Resume </h2>
                    <p> Feel free to grab a copy of my resume! Hope to be in contact soon :D</p>
                    <a className="btn btn-primary" href={resumePdf} download="Christofer_Berruz_Resume"> Download </a>
                </div>
            </div>
        </div>
    );
}
export default function Resume(){
    return(
        <div>
            <SEO title={"Resume"} description={"Learn more about Christofer Berruz's skills and qualitifications"}/>
            <Header page={"Resume"}/>
            <ResumeContent />
            <Footer/>
        </div>
    );
}