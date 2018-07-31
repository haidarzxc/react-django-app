import React, { Component } from 'react';
import { Navbar,NavItem,Nav,Glyphicon } from 'react-bootstrap';
import '../css/Menu.css';
import { connect  } from 'react-redux';



class Menu extends Component{

  showLoginModal = () => {
    this.props.dispatch({ type: 'SHOW_LOGIN_MODAL' });
  }//end of arrow showLoginModal

  render(){
    let menu
    if(!this.props.LoginModal.isAuthenticated){
    menu=
        <div>
          <Nav>
            <NavItem eventKey={4} href="#">zxc</NavItem>
          </Nav>

          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={this.showLoginModal}>
            <Glyphicon glyph="glyphicon glyphicon-log-in"/></NavItem>
          </Nav>
        </div>

    }
    else{
    menu=
        <div>
          <Nav>
            <NavItem eventKey={4} href="#">Home</NavItem>
          </Nav>

          <Nav pullRight>
            <NavItem eventKey={1} href="#">
             Welcome {this.props.LoginModal.user}! <Glyphicon glyph="glyphicon glyphicon-log-out"/></NavItem>
          </Nav>
        </div>
    }

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
          <a href="#home">React</a>
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

export default connect(mapStateToProps)(Menu)
