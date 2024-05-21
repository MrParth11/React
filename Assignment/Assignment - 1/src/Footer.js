import React from 'react'
import img from './tourist.webp';
import package_1 from './package-1.jpg'
import package_2 from './package-2.jpg'
import package_3 from './package-3.jpg'

function Footer() {
    return (
        <div className='footer display' style={{ justifyContent: "space-evenly", alignItems: "center" }}>
            <div className='padding'>
                <img src={img} style={{width: "200px"}}></img>
                <h5><a style={{paddingLeft:"28px"}}>About us</a></h5>
                <h5><a style={{paddingLeft:"28px"}}>Contact us</a></h5>
                <h5><a style={{paddingLeft:"28px"}}>Privecy policy</a></h5>
                <h5><a style={{paddingLeft:"28px"}}>Terms & Condition</a></h5>
                <h5 style={{paddingLeft:"28px"}}>FAQs & Help</h5>
            </div>
            <div className='padding'>
                <h1>Contact</h1>
                <h5>123 Street, New York, USA</h5>
                <h5>+0123456789</h5>
                <h5>mail@domain.com</h5>
            </div>
            <div className='padding gallery'>
                <h1>Gallery</h1>
                <div>
                    <img src={package_1} style={{width:"100px"}}></img>
                    <img src={package_2} style={{width:"100px" , marginLeft:"5px"}}></img>
                    <img src={package_3} style={{width:"100px", marginRight:"5px"}}></img>
                    <img src={package_1} style={{width:"100px"}}></img>
                </div>
            </div>
            <div className='padding'>
                <h1>Newsletter</h1>
                <p>Dolor amet sit justo amet elitr
                    clita ipsum elitr est.
                </p>
                <input type='email' placeholder='Your email' style={{width:"95%", padding:"5px", background:"transparent"}}></input>
            </div>
        </div>
    )
}

export default Footer
