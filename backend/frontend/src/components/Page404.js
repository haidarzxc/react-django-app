import React, { Component } from 'react';
import '../css/Page404.css';
import { Col,Row, Alert } from 'react-bootstrap';
import { connect  } from 'react-redux';
class Page404 extends Component{

  constructor(props){
    super(props)
  }//end of constructor

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

function mapStateToProps(state) {
  return {
    Page404: state.Page404,
  };
}//end of mapStateToProps

export default connect(mapStateToProps)(Page404)
