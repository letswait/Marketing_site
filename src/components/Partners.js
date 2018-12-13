import React, { Component } from 'react'
import topgolf from '../assets/images/TopGolf.png'
import ale from '../assets/images/AleEmporium.png'
import brixx from '../assets/images/Brixx.png'
import dave from '../assets/images/DaveBusters.png'
import della from '../assets/images/Della.png'
import mortys from '../assets/images/Mortys.png'
import pinheads from '../assets/images/Pinheads.png'
import den from '../assets/images/Den.jpg'
import blindOwl from '../assets/images/BlindOwl.jpg'
import blackAcre from '../assets/images/BlackAcre.jpg'
import foxGardin from '../assets/images/FoxGardin.jpg'
import paxVerum from '../assets/images/PaxVerum.png'

import {
    Col
} from 'reactstrap';

export default class Partners extends Component {
    constructor() {
        super()
        this.state = {
            images: [topgolf, ale, brixx, dave, della, mortys, pinheads, den, blindOwl, blackAcre, foxGardin, paxVerum]
        }
    }
    render() {
        return (
            <Col id="partners" xs="12">
                <Col id="partnertext" xs="12">
                    <h1 style={{ color: '#714F91' }}>FEATURED PARTNERS</h1>
                    <h3 style={{ color: '#B76CA4' }}>And this is just the start.</h3>
                    
                </Col>
                {
                    this.state.images.map((image, index) => <img key={index} className="partnerimg" alt="partners" src={image} height="150px" />)
                }
            </Col>
        )
    }
}