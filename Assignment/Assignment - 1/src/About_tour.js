import React from 'react'
import picture from './about.jpg'

function About_tour() {
    return (
        <div className='about'>
            <div>
                <img src={picture} style={{width:"590px",height:"480px"}}></img>
            </div>
            <div style={{paddingLeft:"15px"}}>
                <h4>ABOUT US</h4>
                <h2>Welcome to Tourist</h2>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
                    amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
                <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                </p>

                <div className='display' style={{width:"500px"}}>
                    <div>
                        <h5><i class="ri-arrow-right-line"/>First Class Flights</h5>
                        <h5><i class="ri-arrow-right-line"/>150 Premium City Tours</h5>
                        <h5><i class="ri-arrow-right-line"/>Latest Model Vehicles</h5>
                    </div>
                    <div>
                        <h5><i class="ri-arrow-right-line"/>5 Star Accommodations</h5>
                        <h5><i class="ri-arrow-right-line"/>Handpicked Hotels</h5>
                        <h5><i class="ri-arrow-right-line"/>24/7 Service</h5>
                    </div>
                </div>
                <button className='padding margine-top' style={{marginLeft:"10px"}}>Read more</button>
            </div>
        </div>
    )
}

export default About_tour
