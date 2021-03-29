import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import CardLink from 'reactstrap/lib/CardLink';

class MediaHome extends Component {
    render() {
        return (
            <Card  >
                <CardBody>
                    <CardImg width="100%" src='/images/daitool-home-page.png' alt='' />
                        <CardImgOverlay className="card-img-overlay d-flex flex-column justify-content-end" style={{textAlign: "right"}}>
                            <CardTitle>New Products</CardTitle>
                            <CardText >Japan</CardText>
                            <CardLink >Discover Now</CardLink>
                        </CardImgOverlay>
                </CardBody>
            </Card>
        );
    }
}

export default MediaHome;