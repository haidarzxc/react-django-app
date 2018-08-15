import React, { Component } from 'react';
import { Col,Row } from 'react-bootstrap';
import { connect  } from 'react-redux';
import '../css/Home.css';

class Home extends Component{


  render(){
    return (
      <Row>
        <Col className="AddPadding">
          <h1>Home</h1>
        </Col>
      </Row>
    )//end of return
  }//end of render

}//end of class Home

function mapStateToProps(state) {
  return {
    SideMenu: state.SideMenu,
  };
}//end of mapStateToProps

export default connect(mapStateToProps)(Home)
