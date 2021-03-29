import React from 'react';
import { Card,  CardImg, CardGroup,Container, Row } from 'reactstrap';
import DAITOOLFEATURES from '../shared/Features'

const RenderFeature = ({feature}) => {
  return (
            <CardGroup >
                <Card >
                    <CardImg className="img-blog" src={feature.src} alt={feature.alt} />
                </Card>
            </CardGroup>
  );
};

function Features() {
    const features = DAITOOLFEATURES.map(feature => {
        return (
            <div key={feature.ident} >
                <RenderFeature feature={feature} />
            </div>
        );
    });
    return (
        <Container>
            <Row className="d-flex justify-content-center"  >
                {features}
            </Row>
        </Container>
    );
}

export default Features;