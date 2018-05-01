import React, { Component } from 'react'

import {
  Button
} from 'reactstrap';

export default Text = () => {
    return (
      <div id="text">
        <div className="row">
          <div id="textCol" className="col-sm-12" style={{marginTop: '7vw'}}>
            <h1 style={{color: '#714F91'}}>YOU’RE WORTH THE WAIT.</h1>
            <h3 style={{color: '#B76CA4', marginTop: '-1vw', marginBottom: '3vw'}}>Download LetsWait and focus on love first. </h3>
            <Button className="storeButton"><i class="fab fa-google-play"></i>&nbsp;Google Play</Button>
            <Button className="storeButton"><i class="fab fa-app-store-ios"></i>&nbsp;App Store</Button>
          </div>
        </div>
      </div>
    )
}