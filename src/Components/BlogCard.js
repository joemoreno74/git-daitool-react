import React from 'react';
import { Card,  CardImg, CardGroup,Container, Row } from 'reactstrap';
import DAITOOLBLOG from '../shared/Blog'


const style = { width: "20rem" };

const RenderBlog = ({blog}) => {
  return (
            <CardGroup >
                <Card  style={style} className="mr-3">
                    <CardImg  src={blog.src} alt={blog.alt} />
                </Card>
            </CardGroup>
  );
};

function Blogs() {
    const blogs = DAITOOLBLOG.map(blog => {
        return (
            <div key={blog.ident} >
                <RenderBlog blog={blog} />
            </div>
        );
    });
    return (
        <Container>
            <Row className="d-flex justify-content-center" >
       
                {blogs}

            </Row>
        </Container>
    );
}

export default Blogs;