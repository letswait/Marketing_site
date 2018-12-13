import React, { Component } from 'react'
import phone from '../assets/images/LetsWait-phone.png'
import {
  Form,
  Input
} from 'reactstrap';
import axios from 'axios'

export default class Banner extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
  }

  handleSubmit = (e) => {
    axios.post('/api/v1/emailmarketing', this.state)
      .then(() => { })
      .catch(e => { })
    this.setState({ email: '' })
    e.preventDefault()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div id="banner">
        <div className="row">
          <div id="textCol" className="col-sm-12 col-md-9">
            <h1>GREAT THINGS COME <br /> TO THOSE WHO WAIT. <br /></h1>
            <h3>LetsWait removes the pressures of dating.</h3>
            <p>We make dating easier by facilitating meaningful connections, holding
our members to a higher standard and offsetting financial burdens.</p>
            <h3 style={{ color: '#fff', marginTop: '3vw', marginBottom: '1vw' }}>Register your email below: </h3>

            {/* <Button className="storeButton"><i className="fab fa-google-play"></i>&nbsp;Google Play</Button>
            <Button className="storeButton"><i className="fab fa-app-store-ios"></i>&nbsp;App Store</Button> */}
            <Form onSubmit={this.handleSubmit}>
              <Input bsSize="lg" type="email" name="email" className="emailMarketingInput" placeholder="sign up for updates..." value={this.state.email} onChange={this.handleChange} />
            </Form>
          </div>
          <div className="col-sm-12 col-md-2">
            <img id="phoneImg" alt="phone sample" src={phone} />
          </div>
        </div>
      </div>
    )
  }
}