import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {websiteDescription} from '../assets/home';
import {MultiLineText} from '../components/text';
import {Link} from 'gatsby';

function HomeContent(){
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h2> About this website </h2>
                </div>
                <div className="col-12">
                    <MultiLineText multiLineText={websiteDescription} />
                </div>
                <div className="col-12">
                    <span> If you want to get to know me, check out </span> 
                    <Link to="/about">my bio</Link> or
                    <Link to="/resume"> my resume</Link>.
                </div>
            </div>
        </div>
    );
}

export default function Home(){
    return(
        <div>
            <Header page={"Home"} />
            <HomeContent />
            <Footer />
        </div>
    );
}