import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MediaHome from './MediaHome';
import MenuAll from './MenuAll';
import Brands from './BrandsCarousel';
import MediaHomeHiglighted from './MediaHomeHighlighted';
import Features from './FeaturesCard';
import Products from './ProductsCarousel';
import Blogs from './BlogCard';
import Banner from './Banner';
import Newsletter from './Newsletter';



class Home extends Component {

    render() {
        return (
            <React.Fragment>
                    <Container  fluid={true}>
                        <Row>
                            <Col>
                                <MediaHome />
                            </Col>  
                        </Row>
                        <br /> 
                        <br />   
                        <Row>
                            <Col>
                                <MediaHomeHiglighted />
                            </Col>  
                        </Row>
                        <br />    
                        <br />  
                        <Row>
                            <Col>
                                <MenuAll />
                            </Col>  
                        </Row>   
                        <br />   
                        <br />     
                        <Row>
                            <Col>
                                <Brands />
                            </Col>  
                        </Row>   
                        <br />    
                        <br />    
                        <Row>
                            <Col>
                                <Features />
                            </Col>  
                        </Row>  
                        <br />  
                        <br />  
                        <Row>
                            <Col>
                                <Products />
                            </Col>  
                        </Row>    
                        <br />   
                        <br />                          
                        <Row>
                            <Col>
                                <Blogs />
                            </Col>  
                        </Row>  
                        <br />   
                        <br />  
                        <Row>
                            <Col>
                                <Banner />
                            </Col>  
                        </Row>  
                        <br />   
                        <br />  
                        <Row style={{backgroundColor: 'orange'}}>
                            <Col>
                                <Newsletter />
                            </Col>  
                        </Row>     
                    </Container>   
            </React.Fragment>    
        );
    }
}

export default Home;