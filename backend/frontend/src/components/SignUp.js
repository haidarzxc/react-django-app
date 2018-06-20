import React, { Component } from 'react';
import { Modal,Button,Glyphicon,FormGroup,ControlLabel,FormControl,HelpBlock,form } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}//end of FieldGroup

class SignUp extends Component{
  constructor(props){
    super(props)
    
  this.CloseHandler = this.CloseHandler.bind(this);
  }//end of constructor
  
  CloseHandler(){
    this.props.onSignUpModalClose(this.props.show)
  }
  
  render(){
    return (
      <div>
        <Modal show={this.props.show} onHide={this.CloseHandler}>
          <Modal.Header closeButton>
            <Modal.Title><Glyphicon glyph="glyphicon glyphicon-chevron-right" /> Signup</Modal.Title>
          </Modal.Header>
          
          
           <form>
           <Modal.Body>
             <FieldGroup
              id="SignupFirstName"
              type="text"
              label="first"
              placeholder="Enter First..."
            />
            
            <FieldGroup
             id="SignUpLastName"
             type="text"
             label="Last"
             placeholder="Enter Last..."
           />
           
           <FieldGroup id="SignUpEmail" 
             label="Email." 
             type="email" 
             placeholder="Enter Email..."
           />
            
            <FieldGroup id="SignUpPassword" 
              label="Password." 
              type="password" 
              placeholder="Enter password..."
            />
            </Modal.Body>
            
            <Modal.Footer>
               <Button onClick={this.CloseHandler}><Glyphicon glyph="glyphicon glyphicon-remove" /> Close</Button>
               <Button bsStyle="danger"><Glyphicon glyph="glyphicon glyphicon-ok" /> Sign up</Button>
               
            </Modal.Footer>
           </form>
           
         
         
        </Modal>
      </div>
    )//end of return
  }//end of render
  
  
}//end of SignUp


export default SignUp