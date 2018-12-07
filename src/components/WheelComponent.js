import React from 'react';
// import Animated from 'animated';
import spinner from '../assets/images/lwprices.png'

export default class WheelComponent extends React.Component {

    render() {
        return (
            <div style={{ marginTop: '20px', marginBottom: '20px', marginLeft: '8vw' }}>
                <div id="ticker" style={styles.ticker}></div>
                <div >
                    <img src={spinner} alt="spinner" />
                </div>
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