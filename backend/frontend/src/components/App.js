import React, { Component } from 'react';
import '../css/App.css';
import {Grid, Row, Col} from 'react-bootstrap'
import Login from "./Login";
import Home from "./Home";
import { connect  } from 'react-redux';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import {auth} from "../actions";

class App extends Component {
  // constructor(props){
  //   super(props)
  // }//end of constructor

  componentDidMount(){
    this.props.loadUser();
  }

  PrivateRoute = ({component: ChildComponent, ...rest}) => {
       return <Route {...rest} render={props => {
           if (this.props.LoginModal.isLoading) {
               return <em>Loading...</em>;
           }
           if (!this.props.LoginModal.isAuthenticated) {
               return <Redirect to="/login" />;
           }
           else {
               return <ChildComponent {...props} />
           }
       }} />
   }//end of PrivateRoute

  render() {
    let {PrivateRoute} = this;
    return (
      <Grid>
      <BrowserRouter>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>

      </BrowserRouter>
      </Grid>
    );//end of return
  }//end of render
}//end of App class


function mapStateToProps(state) {
  return {
    LoginModal: state.LoginModal,
  };
}//end of mapStateToProps

function mapDispatchToProps(dispatch){
  return{
      dispatch,
      loadUser: () => {
          return dispatch(auth.loadUser());
        }
  }//end of return
}//end of mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(App)
