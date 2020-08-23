import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import Header from '../components/header';
import Footer from '../components/footer';
import {bio, workPlaces, competitions, profilePicture} from '../assets/about';
import {MultiLineText} from '../components/text';
function BioDescription(){
    return(
        <div className="col-12 col-md-8">
            <div className="text-center">
                <h2> About me</h2>
            </div>
            <MultiLineText multiLineText={bio}/>
        </div>
    );
}

function BioPicture(){
    return(
        <div className="col-12 col-md-4 text-center">
            <img src={profilePicture}
                className="rounded-circle"
                style={{maxWidth:"90%"}}
                alt="Christofer Berruz"
            />
        </div>
    );
}
function Bio(){
    return(
        <div className="row row-content">
            <BioPicture />
            <BioDescription />
        </div>
    );
}

function ActivityCard({activity, maxHeight, maxWidth}){
    return(
        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <Card style={{marginBottom:"10px"}}>
                <div className="d-flex align-items-center justify-content-center">
                    <CardImg src={activity.logo} 
                        style={{maxHeight:maxHeight, maxWidth:maxWidth}}
                        className="img-fluid"
                    />
                </div>
                <CardBody>
                    <CardTitle style={{fontWeight:"bold", fontSize:"1.2em"}}>
                        {activity.name}  
                    </CardTitle>
                    {activity.position? <CardSubtitle 
                        style={{fontStyle:"italic", fontSize:"0.9em", marginBottom:"5px"}} 
                        >
                            {activity.position}
                        </CardSubtitle> : null}
                    <CardText>
                        {activity.description}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );

}
function AboutSection({title, activityList, maxHeight="100%", maxWidth="100%"}){
    const sectionCards = activityList.map((activity) => {
        return(
            <ActivityCard key={activity.name}
                activity={activity}
                maxHeight={maxHeight}
                maxWidth={maxWidth}
            />
        );
    });
    return(
        <div className="row row-content justify-content-center">
            <div className="col-12 text-center">
                <h2> {title} </h2>
            </div>
            {sectionCards}
        </div>
    );
}
export default function About(){
    return(
        <div>
            <Header page={"About"}/>
            <div className="container">
                <Bio />
                <AboutSection title="Work Experience"
                    activityList={workPlaces}
                    maxWidth="200px"
                    maxHeight="200px" 
                />
                <AboutSection title="Competitions"
                    activityList={competitions}
                />
            </div>
            <Footer />
        </div>
    );
}