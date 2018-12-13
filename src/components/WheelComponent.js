import React from 'react';
// import Animated from 'animated';
import spinner from '../assets/images/wheel.png'

export default class WheelComponent extends React.Component {

    render() {
        return (
            <div style={{ width: "100%" }}>
                <img src={spinner} id="wheelIMG" alt="spinner" width="100%"/>
            </div>
        );
    }
}