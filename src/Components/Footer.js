import React, { Component }  from 'react';
import { Nav, NavItem, Jumbotron, Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Footer extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <>
                <Jumbotron fluid>
                    <Container fluid="sm">
                        <Row>
                            <Col sm="3">
                                <img src="/images/DAITOOL-LOGO-2.png" height="40" width="90" alt="Daitool Logo" />
                                <hr />
                                <p> Daitool is the global reference site for high-quality, Japanese brand, industrial
                                    tools and supplies. We empower clients to build better, anywhere in the world. </p>
                                    <i className="fa fa-youtube fa-lg mr-3" />
                                    <i className="fa fa-linkedin fa-lg mr-3" />
                                    <i className="fa fa-twitter fa-lg mr-3" />
                                    <i className="fa fa-facebook-f fa-lg mr-3" />
                                    <i className="fa fa-instagram fa-lg mr-3" />
                            </Col>
                            <Col sm="3">
                                <FooterQuickLinks />
                            </Col>
                            <Col sm="3">
                                <FooterCustomerArea />
                            </Col>                          
                            <Col sm="3">
                                <h6> CONTACT </h6>
                                <p>Lorem Ipsum dolor sit, conectusur adispicing edit, set, do eisusus</p>
                                <p>Lorem Ipsum dolor sit, conectusur adispicing edit, set, do eisusus</p>
                                <hr />
                                <p> Have any questions? </p>
                                <h7 style={{color: 'orange', textDecoration: 'none'}}> +123 456 789 </h7>
                            </Col>
                        </Row>                  
                    </Container>
                </Jumbotron>
            </>
        );
    }
}

function FooterQuickLinks() {
    return(
        <React.Fragment>
            <Nav navbar>
                <h6> QUICK LINKS </h6>
                <NavItem>
                    <NavLink className="nav-link" to="/home" 
                    style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}>About Us
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/home"
                        style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}>Blog
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/home"
                        style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}> Shop
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/home"
                        style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}> Brands
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/home"
                        style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}> Wholesale
                    </NavLink>
                </NavItem>               
            </Nav>
        </React.Fragment>
    );
}
function FooterCustomerArea() {
    return(
        <React.Fragment>
            <Nav navbar>
                <h6> CUSTOMER AREA </h6>
                <NavItem>
                    <NavLink className="nav-link" to="/home" 
                    style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}> My Account
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/home"
                        style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}> Deliveries
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/home"
                        style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}> Help Center (FAQs)
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/home"
                        style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}> Terms
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/home"
                        style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}> Privacy Policy
                    </NavLink>
                </NavItem>               
            </Nav>
        </React.Fragment>
    );
}


export default Footer;