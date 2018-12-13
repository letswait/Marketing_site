import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Wheel from './components/Wheel';
import Footer from './components/Footer'
import Partners from './components/Partners'
import Text from './components/Text'

import {
  Container,
  Row,
  Col
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Container style={{ margin: "0", padding: "0" }}>
          <Row>
            <Col>
              <Banner />
            </Col>
          </Row>
          <Row>
            <Col>
              <Wheel />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Partners />
            </Col>
          </Row>
          <Row>
            <Col>
              <Text />
            </Col>
          </Row>
          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default App;
