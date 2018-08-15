import React, { Component } from 'react';
import { Col,Row } from 'react-bootstrap';
// import {auth} from "../actions";
import { connect  } from 'react-redux';
import {withRouter} from 'react-router-dom';
import SideMenu from "./SideMenu";
import Menu from "./Menu";


class Charts extends Component{

  render(){
    return (
      <Row>
        <Col className="AddPadding">
          <h1>Charts</h1>
        </Col>
      </Row>
    )//end of return
  }//end of render

}//end of class Charts

function mapStateToProps(state) {
  return {
    SideMenu: state.SideMenu,
  };
}//end of mapStateToProps

// function mapDispatchToProps(dispatch){
//   return{
//       dispatch,
//       loadUser: () => {
//           return dispatch(auth.loadUser());
//         }
//   }//end of return
// }//end of mapDispatchToProps
//
// export default connect(mapStateToProps, mapDispatchToProps)(CaseA)
export default connect(mapStateToProps)(Charts)
// export default Charts
