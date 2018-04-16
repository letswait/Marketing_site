import React, { Component } from 'react'
import WheelComponent from './WheelComponent'

export default class Wheel extends Component {
    render() {
        return (
            <div id="wheel">
                <div className="row">
                    <div className="col-sm">
                        <WheelComponent />
                    </div>
                    <div id="textCol" className="col-sm">
                        <h1> THE WHEEL </h1>
                        <p> Cat ipsum dolor sit amet, cats secretly make all the worlds muffins i can haz.Asdflkjaertvlkjasntvkjn (sits on keyboard) hunt by meowing loudly at 5am next to human slave food dispenser it's 3am, time to create some chaos yet lick arm hair leave fur on owners clothes fooled again thinking the dog likes me.</p>
                    </div>
                </div>
            </div>
        )
    }
}