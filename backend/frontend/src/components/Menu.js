import React, { Component } from 'react';
import { Navbar,NavItem,Nav,NavDropdown,MenuItem,Glyphicon  } from 'react-bootstrap';
import Login from "./Login.js"



class Menu extends Component{
  constructor(props){
    super(props)
    this.state = {
      loginModal: false
    };
    
    this.LoginModalOpenHandler = this.LoginModalOpenHandler.bind(this);
    this.LoginModalCloseHandler = this.LoginModalCloseHandler.bind(this);
  }//end of constructor
  
  // modal open handler
  LoginModalOpenHandler(){
    this.setState({loginModal:true})
  }//end of handleLoginModalClick
  
  // model close handler
  LoginModalCloseHandler(){
    this.setState({loginModal:false})
  }//end of handleLoginModalClick
  
  
  render(){
    return (
      <div>
      
        <Login show={this.state.loginModal} onLoginModalClose={this.LoginModalCloseHandler}/>
        
        <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React</a>
          </Navbar.Brand>
          
        </Navbar.Header>
        <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={this.LoginModalOpenHandler}>
              <Glyphicon glyph="glyphicon glyphicon-log-in" />
            </NavItem>
          
        </Nav>
      </Navbar>
      </div>
    )//end of return
  }//end of render
  
}//end of Menu

export default Menu