import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Container, 
        Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import MenuSafety from './MenuSafety';
import MenuTools from './MenuTools';



class Header extends Component {
   constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
          isSafetyOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleSafety() {
        this.setState({
            isSafetyOpen: !this.state.isSafetyOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                    <Container fluid> 
                        <Row style={{backgroundColor: 'orange'}}>
                            <Col sm="4">
                                <NavbarBrand className="mr-auto" href="/home">
                                    <img src="/images/DAITOOL-LOGO.png" height="30" width="60" alt="Daitool Logo" />
                                </NavbarBrand>    
                            </Col>
                            <Col sm="4">   
                                <input type="text" className="input mt-3" placeholder="Search..." />
                            </Col>  
                            <Col  sm="4" >  
                                 <i className="fa fa-user fa-sm mt-3" /> Sign In
                                 <i className="fa fa-shopping-cart fa-sm" /> Cart
                            </Col>     
                        </Row>      
                    </Container>
                <Navbar light sticky="top" expand="md">
                    <div className="container"> 
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/safety" 
                                    style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}>
                                        <MenuSafety />
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/janitorial"
                                     style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}>
                                         JANITORIAL
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/tools"
                                     style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}>
                                        <MenuTools />
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/woodworking"
                                     style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}>
                                         WOODWORKING
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/gardening"
                                     style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}>
                                         GARDENING
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/office-supplies"
                                     style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}>
                                        OFFICE SUPPLIES
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/blog"
                                     style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}>
                                        BLOG
                                    </NavLink>
                                </NavItem> 
                                <NavItem>
                                    <NavLink className="nav-link" to="/brands"
                                     style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}>
                                         BRANDS
                                    </NavLink>
                                </NavItem>       
                                <NavItem>
                                    <NavLink className="nav-link" to="/about-us"
                                     style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'orange', textDecoration: 'none'}}>
                                         ABOUT US
                                    </NavLink>
                                </NavItem>                                                                                         
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>    
        );
    }
}

export default Header;
