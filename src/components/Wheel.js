import React, { Component } from 'react'
import WheelComponent from './WheelComponent'

export default class Wheel extends Component {
    render() {
        return (
            <div id="wheel">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <WheelComponent />
                    </div>
                    <div id="textCol"  className="col-sm-12 col-md-8">
                        <h1 style={{ color: '#714F91' }}> THE WHEEL </h1>
                        <h3 style={{ color: '#B76CA4' }}>Dating is expensive. LetsWait can help. </h3>
                        <p style={{ color: '#6f6e6d', fontSize: '18px' }}>Unlike other high-moral dating apps, LetsWait is free.<br /><br />
                            The wheel is a tool to help remove the pressure of deciding where to go
                            and how to pay. We have developed exclusive relationships with local
restaurants and entertainment venues to help jumpstart your date. <br /><br />
                            When a match occurs, you are allowed to spin the wheel once. Each
                            person receives half of a coupon code for a date experience with one
                            of our featured partners. The codes must be presented together within
a week to redeem. </p>
                    </div>
                </div>
            </div>
        )
    }
}