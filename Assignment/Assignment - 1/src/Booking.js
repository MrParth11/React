import React from 'react'

function Booking() {
    return (
        <div className='booking-sec display' style={{justifyContent : "space-evenly" , marginTop:"50px"}}>
            <div>
                <h2 className='text-align'>BOOKING</h2>
                <h1 className='text-align font-size-45px'>Online Booking</h1>
                <p className='margine-top-25px'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                    diam et eos. Clita erat ipsum et lorem et sit.
                </p>
                <h4 className='margine-top-25px'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</h4>
                <button className='padding margine-top-25px transparent' style={{fontSize:"16px" , color:"white" ,marginTopTop:"20px"}}>Read More</button>
            </div>
            <div className='text-align' style={{paddingBottom:"25px"}}>
                <h1>Book A Tour</h1>
                <input type='text' placeholder='Your Name' className='input1 transparent'></input>
                <input type='email' placeholder='Your Email' className='input1 transparent'></input> <br></br>
                <input type='text' placeholder='Date & Time' className='input1 transparent'></input>
                <input type='text' placeholder='Destination' className='input1 transparent'></input> <br></br>
                <input type='text' placeholder='Special request' style={{width:"512px",marginBottom: "20px", height:"45px" , border:"1px solid lightgray" , paddingLeft:"5px"}} className='transparent'></input>
                <input type='text' placeholder='Book now' style={{width:"512px",marginBottom: "20px", height:"45px" , border:"1px solid lightgray" , paddingLeft:"5px"}} className='transparent'></input>
                {/* <button className='padding' style={{fontSize:"16px" ,margin:"auto"}}>Submit</button> */}
            </div>
        </div>
    )
}

export default Booking
