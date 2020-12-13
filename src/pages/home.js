import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import {websiteDescription} from '../assets/home';
import {MultiLineText} from '../components/text';
import {Link} from 'gatsby';
import SEO from '../components/seo';


function HomeContent(){
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h2> About this website </h2>
                    <MultiLineText multiLineText={websiteDescription} />
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
            <SEO />
            <Header page={"Home"} />
            <HomeContent />
            <Footer />
        </div>
    );
}