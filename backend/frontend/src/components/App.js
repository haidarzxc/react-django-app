import React, { Component } from 'react';
import '../css/App.css';
import {Grid, Row, Col} from 'react-bootstrap'
import Login from "./Login";
import Home from "./Home";
import Page404 from "./Page404";
import { connect  } from 'react-redux';
import SideMenu from "./SideMenu";
import Menu from "./Menu";
import Charts from "./Charts";
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
    let SideBar;
    if(this.props.LoginModal.isAuthenticated){
      SideBar=
      <Col  xd={2} md={2} className={this.props.SideMenu.showSideMenu? "SideBarOFF":"SideBar"}>
        <SideMenu/>
      </Col>
    }
    return (
      <Grid>
      <BrowserRouter>

      <div>
        <Row>
          {SideBar}

          <Col xd={10} md={10} className={this.props.SideMenu.showSideMenu? "BodyOff":"Body"}>
            <Menu/>
            <Switch>
              <Route exact path="/Login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/charts" component={Charts} />
              <Route component={Page404} />
            </Switch>
          </Col>
        </Row>


      </div>


      </BrowserRouter>
      </Grid>
    );//end of return
  }//end of render
}//end of App class


function mapStateToProps(state) {
  return {
    LoginModal: state.LoginModal,
    SideMenu: state.SideMenu,
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
