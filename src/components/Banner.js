import React, { Component } from 'react'
import phone from '../assets/images/LetsWait-phone.png'
import {
  Button,
  Container,
  Row,
  Col
} from 'reactstrap';

export default class Banner extends Component {
  render() {
    return (
      <Container style={{width:"100%"}}>
        <Row>
          <Col  xs="12" md="auto">
          <div id="banner">
            <div className="row">
              <div id="textCol" className="col-sm-12 col-md-9">
                <h1>GREAT THINGS COME <br /> TO THOSE WHO WAIT. <br /></h1>
                <h3>LetsWait removes the pressures of dating.</h3>
                <p>We make dating easier by facilitating meaningful connections, holding
our members to a higher standard and offsetting financial burdens.</p>
                <Button className="storeButton"><i class="fab fa-google-play"></i>&nbsp;Google Play</Button>
                <Button className="storeButton"><i class="fab fa-app-store-ios"></i>&nbsp;App Store</Button>
              </div>
              <div className="col-sm-12 col-md-2">
                <img id="phoneImg" alt="phone sample" src={phone} />
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    )
  }
}