import React from 'react';
import {Component} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, Jumbotron} from 'reactstrap'
import {Link} from 'gatsby';
import {jumbotronDescription, jumbotronTitle, techIcons} from '../assets/jumbotron';

function JumbotronTitle(){
    return(
        <div>
            <h2> {jumbotronTitle}</h2>
            {jumbotronDescription}
        </div>
    );
}


function JumbotronTechStack(){
    const techStack = []
    var i;
    for(i = 0; i < techIcons.length; i++){
        techStack.push(
            <span style={{fontSize:"40px", marginRight:"10px"}} key={i}>
                <i className={techIcons[i]}/>
            </span>
        );
    }
    return techStack;
}

function Banner(){
    return(
        <Jumbotron>
            <div className="container">
                <div className="row row-content">
                    <div className="col-12 col-md-8">
                        <JumbotronTitle />
                    </div>
                    <div className="col-12 col-md-4">
                        <JumbotronTechStack />
                    </div>
                </div>
            </div>
        </Jumbotron>
    );
    
}
class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            isNavOpen:false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
                isNavOpen:!this.state.isNavOpen
        });
    }

    render() {

        const sections = ["Home", "About", "Resume"];
        const navItems = [];
        var section;
        for(section of sections){
            var className;
            if(this.props.page === section){
                className = "nav-link active"
            }else{
                className = "nav-link"
            }
            navItems.push(
                <NavItem key={section}>
                    <Link className={className} to={"/" + section.toLowerCase()}>
                        {section}
                    </Link>
                </NavItem>
            );
        }

        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                {navItems}
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Banner />
            </div>
        );
    }
}

export default Header;
