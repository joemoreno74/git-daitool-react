import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, Button, CardBody, CardTitle } from 'reactstrap';


class Banner extends Component {
    render() {
        return (
            <Card  >
                <CardBody>
                    <CardImg  src='/images/daitool-banner.png' alt='' />
                        <CardImgOverlay className="card-img-overlay d-flex flex-column justify-content-end" style={{textAlign: "left"}}>
                            <CardTitle>70% off</CardTitle>
                            <Button style={{color:"#FFFFFF", backgroundColor: "#FF8C00", width: "100px" }}>Subscribe</Button>
                        </CardImgOverlay>
                </CardBody>
                
            </Card>
        );
    }
}

export default Banner;