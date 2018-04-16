import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div id="footer" clasName="row">
                <div className="text-center">
                        <a className="asocial" href="https://www.instagram.com/letswaitdatingapp/"><div className="social"><i className="fab fa-instagram"></i></div></a>
                        <a className="asocial" href="https://www.facebook.com/LetsWait-276298222909777/"><div className="social"><i className="fab fa-facebook-f"></i></div></a>
                        <a className="asocial" href="https://twitter.com/letswaitdating"><div className="social"><i className="fab fa-twitter"></i></div></a>
                </div>
                <div>
                    <p style={{width: '450px', paddingTop: '12px', marginLeft: '-70px', color: '#fff'}}><a style={{color: '#fff'}} href="#">Contact</a> / <a style={{color: '#fff'}} href="#">Privacy</a> / <a style={{color: '#fff'}} href="#">Press</a> <br /></p>
                    <p style={{color: '#fff', width: '450px', marginLeft: '-50px', marginBottom: '0'}}>&copy; LetsWait 2018, All Rights Reserved.</p>
                </div>
            </div>
        )
    }
}