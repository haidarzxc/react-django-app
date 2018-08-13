import React, { Component } from 'react';
import { Navbar,NavItem,Nav,Glyphicon } from 'react-bootstrap';
import '../css/Menu.css';
import { connect  } from 'react-redux';
import {auth} from "../actions";


class Menu extends Component{

  showLoginModal = () => {
    this.props.dispatch({ type: 'SHOW_LOGIN_MODAL' });
  }//end of arrow showLoginModal

  logoutUser = () =>{
    this.props.logout();
  }//end of arrow logoutUser

  render(){
    let menu
    if(!this.props.LoginModal.isAuthenticated){
    menu=
        <div>

          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={this.showLoginModal}>
            <Glyphicon glyph="glyphicon glyphicon-log-in"/></NavItem>
          </Nav>
        </div>

    }//end of user NOT Authenticated
    else{
    menu=
        <div>

          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={this.logoutUser}>
             Welcome {this.props.LoginModal.user}! <Glyphicon glyph="glyphicon glyphicon-log-out"/></NavItem>
          </Nav>
        </div>
    }//end of user Authenticated

    let NavClass;
    if(this.props.showSideMenu){
      NavClass="NavbarOff"
    }
    if(this.props.LoginModal.isAuthenticated){
      NavClass+=" "+"NavbarOn"
    }

    return (

      <Navbar className={NavClass} fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">BPLSevices</a>
        </Navbar.Brand>

      </Navbar.Header>

      {menu}
    </Navbar>

    )//end of return
  }

}//end of Menu

function mapStateToProps(state) {
  return {
    showSideMenu: state.SideMenu.showSideMenu,
    LoginModal:state.LoginModal
  };
}//end of mapStateToProps

function mapDispatchToProps(dispatch){
  return{
      dispatch,
      logout: () => {
            return dispatch(auth.logout());
        }
  }//end of return
}//end of mapDispatchToProps

export default connect(mapStateToProps,mapDispatchToProps)(Menu)
