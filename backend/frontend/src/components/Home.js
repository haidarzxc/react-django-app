import React, { Component } from 'react';
import { Col,Row } from 'react-bootstrap';
import SideMenu from "./SideMenu";
import Menu from "./Menu";
import { connect  } from 'react-redux';

class Home extends Component{


  render(){
    return (
      <Row>

        <Col  xd={2} md={2} className={this.props.showSideMenu? "SideBarOFF":"SideBar"}>
          <SideMenu/>
        </Col>

        <Col xd={10} md={10} className={this.props.showSideMenu? "BodyOff":"Body"}>
          <Menu/>
        </Col>
      </Row>
    )//end of return
  }//end of render

}//end of class Home

function mapStateToProps(state) {
  return {
    showSideMenu: state.SideMenu.showSideMenu,
  };
}//end of mapStateToProps

export default connect(mapStateToProps)(Home)
