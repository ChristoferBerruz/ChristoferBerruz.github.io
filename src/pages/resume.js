import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import resume from '../files/Christofer_Berruz_Resume.pdf';
function ResumeContent(){
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h2> Resume </h2>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <p> Feel free to grab a copy of my resume! Hope to be in contact soon :D</p>
                    <a className="btn" href={resume} download="Christofer_Berruz_Resume"> Download</a>
                </div>
            </div>
        </div>
    );
}
export default function Resume(){
    return(
        <div>
            <Header page={"Resume"}/>
            <ResumeContent />
            <Footer/>
        </div>
    );
}