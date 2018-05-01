import React, { Component } from 'react'
import topgolf from '../assets/images/TopGolf.png'
import ale from '../assets/images/AleEmporium.png'
import brixx from '../assets/images/Brixx.png'
import dave from '../assets/images/DaveBusters.png'
import della from '../assets/images/Della.png'
import mortys from '../assets/images/Mortys.png'
import pinheads from '../assets/images/Pinheads.png'

export default class Partners extends Component {
    constructor(){
        super()
        this.state = {
            images: [topgolf, ale, brixx, dave, della, mortys, pinheads]
        }
    }
    render(){
        return(
            <div id="partners">
                <div className="row">
                    <div id="partnertext" className="col-sm">
                        <h1 style={{color: '#714F91'}}>FEATURED PARTNERS</h1>
                        <h3 style={{color: '#B76CA4'}}>And this is just the start.</h3>
                        {
                            this.state.images.map((image, index) => <img key={index} className="partnerimg" src={image} height="150px"/>)
                        }
                         </div>
                </div>
            </div>
        )
    }
}