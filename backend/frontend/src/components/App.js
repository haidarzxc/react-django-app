import React, { Component } from 'react';
import '../css/App.css';
import { Grid,Row,Col,ProgressBar } from 'react-bootstrap';
import Menu from "./Menu";

class App extends Component {
  render() {
    return (
    <Grid>
      <Row>
        {/* Navbar */}
        <Menu/>
        
        
      </Row>
    </Grid>
    );
  }
}

export default App;
