import React, { Component } from 'react';
import '../css/App.css';
import { Grid,Row,Col,ProgressBar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
    <Grid>
      <Row>
        {/* sideBar */}
        <Col xd={2} md={2}>
          
        </Col>
        
        {/* body */}
        <Col xd={10} md={10}>
        
        </Col>
      </Row>
    </Grid>
    );
  }
}

export default App;
