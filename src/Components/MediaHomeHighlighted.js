import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';


class MediaHomeHiglighted extends Component {
    render() {
        return (
            <Card  >

                    <CardImg width="100%" src='/images/daitool-atom.png' alt='' />
                        <CardImgOverlay className="card-img-overlay  d-flex flex-column" style={{textAlign: "left"}}>
                            <CardText >Viewed Category</CardText>
                            <CardTitle><h1>Highlighted<br/>Product Category</h1></CardTitle>
                            <CardText >Lorem Ipsum dolor sit amet</CardText>
                        </CardImgOverlay>

            </Card>
        );
    }
}

export default MediaHomeHiglighted;