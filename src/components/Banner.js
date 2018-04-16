import React, { Component } from 'react'
import phone from '../assets/images/phone.png'
import {
    Button
  } from 'reactstrap';

export default class Banner extends Component {
    render() {
        return (
            <div id="banner">
                <div className="row">
                    <div id="textCol" className="col-sm">
                        <h1>GREAT THINGS COME <br /> TO THOSE WHO WAIT <br /></h1>
                        <p> Cat ipsum dolor sit amet, cats secretly make all the worlds muffins i can haz.Asdflkjaertvlkjasntvkjn (sits on keyboard) hunt by meowing loudly at 5am next to human slave food dispenser it's 3am, time to create some chaos yet lick arm hair leave fur on owners clothes fooled again thinking the dog likes me.</p>
                        <Button className="storeButton">Google Play</Button>
                        <Button className="storeButton">App Store</Button>
                    </div>
                    <div className="col-sm">
                        <img id="phoneImg" src={phone} />
                    </div>
                </div>
            </div>
        )
    }
}