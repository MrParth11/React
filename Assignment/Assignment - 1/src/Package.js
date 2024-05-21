import React from 'react'
import pack01 from '../src/package-1.jpg'
import pack02 from '../src/package-2.jpg'
import pack03 from '../src/package-3.jpg'

function Package() {
    return (
        <div className='package'>
            <div className='text-align'>
                <h3 style={{ color: "lightcoral" }}>P A C K A G E S</h3>
                <h1 style={{ color: "darkslategray", fontSize: "40px" }}>Awesome Packages</h1>
            </div>
            <div className='display list'>
                <div className='pack text-align'>
                    <div className='picture_pack'>
                        <img src={pack01} style={{ width: "100%", height: "100%" }}></img>
                    </div>
                    <div className='display pack_detail'>
                        <div>
                            <h5><i class="ri-map-pin-fill" />Thailand</h5>
                        </div>
                        <div>
                            <h5><i class="ri-calendar-event-fill" />3 Days</h5>
                        </div>
                        <div>
                            <h5><i class="ri-user-3-fill"></i>2 Person</h5>
                        </div>
                    </div>
                    <div>
                        <h1 style={{ color: "darkslategray", fontSize: "38px" }}>$149.00</h1>
                        <h3 style={{ color: "lightcoral" }}><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i></h3>
                        <p>Tempor erat elitr rebum at clita.<br></br>
                            Diam dolor diam ipsum sit diam amet diam eos
                        </p>
                        <button>Book now</button>
                    </div>
                </div>
                <div className='pack text-align'>
                    <div className='picture_pack'>
                        <img src={pack02} style={{ width: "100%", height: "100%" }}></img>
                    </div>
                    <div className='display pack_detail'>
                        <div>
                            <h5><i class="ri-map-pin-fill" />Thailand</h5>
                        </div>
                        <div>
                            <h5><i class="ri-calendar-event-fill" />3 Days</h5>
                        </div>
                        <div>
                            <h5><i class="ri-user-3-fill"></i>2 Person</h5>
                        </div>
                    </div>
                    <div>
                        <h1 style={{ color: "darkslategray", fontSize: "38px" }}>$139.00</h1>
                        <h3 style={{ color: "lightcoral" }}><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i></h3>
                        <p>Tempor erat elitr rebum at clita. <br></br>
                            Diam dolor diam ipsum sit diam amet diam eos
                        </p>
                        <button>Book now</button>
                    </div>
                </div>
                <div className='pack text-align'>
                    <div className='picture_pack'>
                        <img src={pack03} style={{ width: "100%", height: "100%" }}></img>
                    </div>
                    <div className='display pack_detail'>
                        <div>
                            <h5><i class="ri-map-pin-fill" />Thailand</h5>
                        </div>
                        <div>
                            <h5><i class="ri-calendar-event-fill" />3 Days</h5>
                        </div>
                        <div>
                            <h5><i class="ri-user-3-fill"></i>2 Person</h5>
                        </div>
                    </div>
                    <div>
                        <h1 style={{ color: "darkslategray", fontSize: "38px" }}>$189.00</h1>
                        <h3 style={{ color: "lightcoral" }}><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i></h3>
                        <p>Tempor erat elitr rebum at clita.<br></br>
                            Diam dolor diam ipsum sit diam amet diam eos
                        </p>
                        <button>Book now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Package
