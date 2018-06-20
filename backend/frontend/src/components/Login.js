import React, { Component } from 'react';
import { Modal,Button,Glyphicon,FormGroup,ControlLabel,FormControl,HelpBlock,form } from 'react-bootstrap';
import SignUp from './SignUp.js'


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}//end of FieldGroup

class Login extends Component{
  constructor(props){
    super(props)
    
    this.CloseHandler = this.CloseHandler.bind(this);
    this.OpenSignUpHandler = this.OpenSignUpHandler.bind(this);
    this.CloseSignUpHandler = this.CloseSignUpHandler.bind(this);
    
    this.state={SignUpModal:false}
  
  }//end of constructor
  
  // modal close handler
  CloseHandler() {
    this.props.onLoginModalClose(this.props.show)
  }
  
  // signup modal open handler
  OpenSignUpHandler() {
    this.props.onLoginModalClose(this.props.show)
    this.setState({SignUpModal:true})
    
  }
  
  CloseSignUpHandler(){
    this.setState({SignUpModal:false})
  }
  
  render(){
    return (
      <div>
        <SignUp show={this.state.SignUpModal} onSignUpModalClose={this.CloseSignUpHandler}/>
        <Modal show={this.props.show} onHide={this.CloseHandler}>
          <Modal.Header closeButton>
            <Modal.Title><Glyphicon glyph="glyphicon glyphicon-chevron-right" /> Login</Modal.Title>
          </Modal.Header>
          
          
           <form>
           <Modal.Body>
             <FieldGroup
              id="LoginUserName"
              type="text"
              label="User Name."
              placeholder="Enter username..."
            />
            
            <FieldGroup id="LoginPassword" 
              label="Password." 
              type="password" 
              placeholder="Enter password..."
            />
            </Modal.Body>
            
            <Modal.Footer>
               <Button onClick={this.OpenSignUpHandler} bsStyle="primary"><Glyphicon glyph="glyphicon glyphicon-new-window" /> Sign up</Button>
               <Button onClick={this.CloseHandler}><Glyphicon glyph="glyphicon glyphicon-remove" /> Close</Button>
               <Button bsStyle="danger"><Glyphicon glyph="glyphicon glyphicon-ok" /> Login</Button>
               
            </Modal.Footer>
           </form>
           
         
         
        </Modal>
      </div>
    )//end of return
  }//end of render
  
}//end of class

export default Login