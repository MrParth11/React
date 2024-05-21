import React from 'react'
import destination from './destination-1.jpg'
import destination_2 from './destination-2.jpg'
import destination_3 from './destination-3.jpg'
import destination_4 from './destination-4.jpg'

function Destination() {
    return (
        <div>
            <div className='text-align' style={{marginBottom:"50px"}}>
                <h3 style={{ paddingBottom: "5px", paddingTop: "20px",color:"lightcoral" }}>D E S T I N A T I O N</h3>
                <h1 style={{color: "darkslategray" , fontSize:"40px"}}>Popular Destination</h1>
            </div>
            <div className='destination display' style={{justifyContent:"space-evenly"}}>
                <div className='deatination-picture display'>
                    <div className='box-1' style={{width:"100%" ,height:"260px", marginBottom:"18px"}}>
                        <img src={destination} style={{width:"100%",height:"100%"}}></img>
                    </div>
                    <div className='box-2' style={{width:"48.7%", height: "240px"}}>
                        <img src={destination_2} style={{width:"100%",height:"100%"}}></img>
                    </div>
                    <div className='box-2' style={{width:"48.7%", height: "240px"}}>
                        <img src={destination_3} style={{width:"100%",height:"100%"}}></img>
                    </div>
                </div>
                <div className='deatination-one'>
                    <img src={destination_4} style={{width:"100%",height:"100%"}}></img>
                </div>
            </div>
        </div>
    )
}

export default Destination
