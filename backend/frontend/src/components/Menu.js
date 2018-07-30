import React, { Component } from 'react';
import { Navbar,NavItem,Nav,Glyphicon } from 'react-bootstrap';
import '../css/Menu.css';
import { connect  } from 'react-redux';


class Menu extends Component{

  showLoginModal = () => {
    this.props.dispatch({ type: 'SHOW_LOGIN_MODAL' });
  }//end of arrow showLoginModal

  render(){
    return (

      <Navbar className={this.props.showSideMenu? "NavbarOff":""} fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">React</a>
        </Navbar.Brand>

      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1} href="#" onClick={this.showLoginModal}>
        <Glyphicon glyph="glyphicon glyphicon-log-in"/></NavItem>{/*  */}
      </Nav>
    </Navbar>

    )//end of return
  }

}//end of Menu

function mapStateToProps(state) {
  return {
    showSideMenu: state.SideMenu.showSideMenu,
    showLoginModal:state.LoginModal.showLoginModal
  };
}//end of mapStateToProps

export default connect(mapStateToProps)(Menu)
