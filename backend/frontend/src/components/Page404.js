import React, { Component } from 'react';
import '../css/Page404.css';
import { Col,Row, Alert } from 'react-bootstrap';

class Page404 extends Component{


  render(){
    return (
      <Row>
        <Col  xd={12} md={12}>
          <div className="Page404">
          <p>OOPS! - Page Could <b>NOT</b> Be Found</p>
          <p className="P404">404</p>
          </div>

        </Col>

      </Row>
    )//end of return
  }//end of render

}//end of class Page404

export default Page404
