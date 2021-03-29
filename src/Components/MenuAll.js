import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle, Container, Row } from 'reactstrap';
import DAITOOLMENU from '../shared/Menu'

function RenderMenuAll({menu}) {
    return (
        <Card>
                <CardImg width="100%" src={menu.src} alt={menu.alt} />
                <CardImgOverlay>
                    <CardTitle className="MenuAll">{menu.title}</CardTitle>
                    <CardSubtitle className="MenuAll">{menu.subtitle}</CardSubtitle>
                </CardImgOverlay>
        </Card>
    );
}

function MenuAll() {
    const menuAll = DAITOOLMENU.map(menu => {
        return (
            <div key={menu.ident} className="col-md-5 m-1">
                <RenderMenuAll menu={menu} />
            </div>
        );
    });
    return (
        <Container>
            <Row>
                {menuAll}
            </Row>
        </Container>
    );
}

export default MenuAll;