import React, { Component } from 'react';
import { Col,Row } from 'react-bootstrap';
import Menu from "./Menu";
import LoginModal from "./LoginModal";

class Login extends Component{


  render(){
    return(
      <Row>
        <Col xd={12} md={12}>
        <LoginModal/>
          <Menu/>
        </Col>
      </Row>
    )//end of return
  }//end of render

}//end of class

export default Login
