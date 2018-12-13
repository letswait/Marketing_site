import React from 'react'
import {
  Form,
  Input
} from 'reactstrap';
import axios from 'axios'

// eslint-disable-next-line
export default class Text extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
  }

  handleSubmit = (e) => {
    axios.post('/api/v1/emailmarketing', this.state)
      .then(() => {})
      .catch(e => {})
    this.setState({email: ''})
    e.preventDefault()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div id="text">
        <div className="row">
          <div id="textCol" className="col-sm-12" style={{marginTop: '7vw'}}>
            <h1 style={{color: '#714F91'}}>YOU’RE WORTH THE WAIT.</h1>
            <h3 style={{color: '#B76CA4', marginTop: '-1vw', marginBottom: '3vw'}}>Download LetsWait and focus on love first. </h3>
            <h3 style={{color: '#B76CA4', marginTop: '-1vw', marginBottom: '1vw'}}>Register your email below: </h3>
            {/* <Button className="storeButton"><i className="fab fa-google-play"></i>&nbsp;Google Play</Button>
            <Button className="storeButton"><i className="fab fa-app-store-ios"></i>&nbsp;App Store</Button> */}
            <Form onSubmit={this.handleSubmit}>
              <Input bsSize="lg" type="email" name="email" className="emailMarketingInput" placeholder="sign up for updates..." value={this.state.email} onChange={this.handleChange} />
            </Form>
            <br></br>
          </div>
        </div>
      </div>
    )
  }
}