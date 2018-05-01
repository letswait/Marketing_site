import React from 'react';
// import { View, Animated, Text, TouchableWithoutFeedback, Button, Easing, Image } from 'react-native';
import Animated from 'animated';
import spinner from '../assets/images/lwprices.png'

import { Animation } from 'react-web-animation';






export default class WheelComponent extends React.Component {

    constructor() {
        super();
        const randSpinValue = 30;

        this.state = {
            animation: new Animated.Value(0),
        };
    }


    getKeyFrames() {
        return [
            { transform: 'scale(1)', opacity: 1, offset: 0 },
            { transform: 'scale(.5)', opacity: 0.5, offset: 0.3 },
            { transform: 'scale(.667)', opacity: 0.667, offset: 0.7875 },
            { transform: 'scale(.6)', opacity: 0.6, offset: 1 }
        ];
    }
    
    getTiming(duration) {
        return {
            duration,
            easing: 'ease-in-out',
            delay: 0,
            iterations: 2,
            direction: 'alternate',
            fill: 'forwards'
        };
    }
    
  

    pieFunc(slices) {
        var n = 360 / slices
        var i = 0;
        var pie = {}
        while (i < n + 1) {
            var ns = n.toString()
            var on = n
            pie.ns = (on += n)
        }
    }

    // startAnimation = () => {
    //     const rand = Math.random() * 360 + 200
    //     this.setState({ randomNum: rand })
    //     Animated.timing(this.state.animation, {
    //         toValue: rand,
    //         duration: 7000,
    //         easing: 'bezier(0, .99, .44, .99)'
    //         // easing: Easing.bounce
    //     }).start((n) => {
    //         // this.state.animation.setValue(0);
    //         if (n.finished) {
    //         }
    //     });
    // }
    render() {

        // const rotateInt = this.state.animation.interpolate({
        //     inputRange: [0, 360],
        //     outputRange: ["0deg", "5400deg"]
        // });
        // // const rotateInt = "360deg";
        // this.randSpinValue = 7;
        // const animatedStyles = {
        //     transform: [
        //         { rotate: rotateInt }
        //     ]
        // };
        return(

        <div style={{marginTop: '20px', marginBottom: '20px', marginLeft: '8vw'}}>
            <div id="ticker" style={styles.ticker}></div>
            <div >
                {/* <Animation keyframes={this.getKeyFrames()}
                    timing={this.getTiming(2500)}> */}
                    <img src={spinner} />     
                {/* </Animation> */}
            </div>
            {/* <button onPress={this.startAnimation} >
                <div style={styles.innerBall}>
                    <p style={styles.innerBallText}>SPIN</p>
                </div>
            </button> */}
        </div>
        );

    }
    
}

const styles = {
    wheel: {
        height: 360,
        width: 360,
        borderRadius: 720 / 2,
        top: 100,
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    },

    innerBall: {
        height: 360 / 4,
        width: 360 / 4,
        left: 135,
        top: -123,
        backgroundColor: '#F1F1F1',
        borderRadius: 720 / 4,
        justifyContent: 'center'
    },

    innerBallText: {
        fontSize: 29,
        fontWeight: 'bold',
        marginLeft: 19,
        marginRight: 0
    },

    ticker: {
        width: 0,
        height: 0,
        top: 120,
        left: 160,
        zIndex: 3,
        borderLeftWidth: 10,
        borderLeftColor: 'transparent',
        borderTopWidth: 30,
        borderTopColor: 'black',
        borderRightWidth: 10,
        borderRightColor: 'transparent',
    }
};