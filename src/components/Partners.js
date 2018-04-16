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
                        <h1>FEATURED PARTNERS</h1>
                        {
                            this.state.images.map((image, index) => <img key={index} className="partnerimg" src={image} height="150px"/>)
                        }
                        <p> Cat ipsum dolor sit amet, cats secretly make all the worlds muffins i can haz.Asdflkjaertvlkjasntvkjn (sits on keyboard) hunt by meowing loudly at 5am next to human slave food dispenser it's 3am, time to create some chaos yet lick arm hair leave fur on owners clothes fooled again thinking the dog likes me.</p>
                    </div>
                </div>
            </div>
        )
    }
}