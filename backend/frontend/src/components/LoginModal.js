import React, { Component } from 'react';
import { FormGroup,ControlLabel,FormControl,HelpBlock,Button,Modal } from 'react-bootstrap';
import { connect  } from 'react-redux';

import {auth} from "../actions";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}//end of FieldGroup

class LoginModal extends Component {
  constructor(props){
    super(props)

    this.state={
      userName:'',
      password:''
    }

  this.handleUserName=this.handleUserName.bind(this)
  this.handlePassword=this.handlePassword.bind(this)
  this.handleSubmit=this.handleSubmit.bind(this)
  }//end of constructor

  hideLoginModal = () => {
    this.props.dispatch({ type: 'HIDE_LOGIN_MODAL' });
  }//end of arrow hideQueryModal

  handleUserName(event){
    this.setState({userName:event.target.value})
  }//end of handleBdbid

  handlePassword(event){
    this.setState({password:event.target.value})
  }//end of handleStartDate

  handleSubmit(event){
    event.preventDefault();
    // console.log('submitted: username:' + this.state.userName+
    // ' - password: '+this.state.password);
    this.props.login(this.state.userName,this.state.password)
  }//end of handleSubmit



  render(){
    return(
      <Modal

          show={this.props.showLoginModal}
          onHide={this.hideLoginModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Query Form.
            </Modal.Title>
          </Modal.Header>
          <form onSubmit={this.handleSubmit}>
          <Modal.Body>
            <FieldGroup
               id="userName"
               type="text"
               label="User Name"
               placeholder="Enter Username..."
               onChange={this.handleUserName}
             />
             <FieldGroup
                id="password"
                type="password"
                label="Password"
                placeholder="Enter Password..."
                onChange={this.handlePassword}
              />

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideLoginModal}>Close</Button>
            <Button bsStyle="danger" type="submit">Sign in</Button>
          </Modal.Footer>
          </form>
        </Modal>


    )//end of return
  }//end of render
}//end of Menu

function mapStateToProps(state) {
  return {
    showLoginModal: state.LoginModal.showLoginModal,
  };
}//end of mapStateToProps

function mapDispatchToProps(dispatch){
  return{
      dispatch,
      login: (username, password) => {
            return dispatch(auth.login(username, password));
        }
  }//end of return
}//end of mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
