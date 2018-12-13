import React, { Component } from 'react'
import logo from '../assets/images/horizlogo.png'
import twitter from '../assets/images/twit.svg'
import facebook from '../assets/images/facebookk.svg'
import instagram from '../assets/images/insta.svg'
import snapchat from '../assets/images/snap.svg'


export default class Footer extends Component {
    render() {
        return (
            <div id="footer" >
                <div className="row">
                    <div className="col-sm-12 col-md-6 text-right">
                        <img alt="main logo" src={logo} height="50px" style={{ paddingLeft: '7vw', marginTop: '1vw', float: 'left' }} />
                    </div>
                    <div className=" col-sm-12 col-md-6" style={{ paddingRight: '7vw' }}>
                        <a className="asocial" href="https://www.instagram.com/letswaitdatingapp/"><div className="social"><img alt="social media icon" src={instagram} /></div></a>
                        <a className="asocial" href="https://www.facebook.com/LetsWait-276298222909777/"><div className="social"><img alt="social media icon" src={facebook} /></div></a>
                        <a className="asocial" href="https://twitter.com/letswaitdating"><div className="social"><img alt="social media icon" src={twitter} /></div></a>
                        <a className="asocial" href="https://twitter.com/letswaitdating"><div className="social"><img alt="social media icon" src={snapchat} /></div></a>
                    </div>
                </div>
                <div className="row">
                    <div style={{ textAlign: 'center', width: '100%' }}>
                        <p style={{ color: '#B76CA4', marginBottom: '-15px', fontSize: '10px' }}> &copy; LetsWait 2018, All Rights Reserved.&nbsp;<a style={{ color: '#B76CA4' }} href="">Contact</a> / <a style={{ color: '#B76CA4' }} href="">Privacy</a> / <a style={{ color: '#B76CA4' }} href="">Press</a></p>
                    </div>
                </div>
            </div>
        )
    }
}