
import React from 'react';
import { Button, Form, FormGroup, Input, Col, Row } from 'reactstrap';

const Newsletter = () => {
  return (
    <React.Fragment>
        <Row>  
          <Col className="mb-5">  
              <i className="fa fa-envelope fa-lg mt-5" />
              <h1 className="d-flex justify-content-center">Sign Up for Newsletter</h1>
              <h7>Lorem Ipsum dolor sit, conectusur adispicing edit, set, do eisusus</h7>
              <h7>Lorem Ipsum dolor sit, conectusur adispicing edit, set, do eisusus</h7>
    
          </Col>
          <Col className="mt-5">
          <Form inline className="d-flex justify-content-center mt-5">
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0 " >
              <Input  type="email" name="email" id="Email" placeholder="Enter your email here" />
          </FormGroup>
          <Button style={{color:"#FFFFFF", backgroundColor: "#000000", width: "100px" }}> Subscribe</Button>
          </Form>
          </Col>
        </Row>
    </React.Fragment>  
  );
}

export default Newsletter;