import React from 'react'

function Footer() {
    return (
        <div className='container-fluid footer bg p-5'>
            <div className='row justify-content-evenly align-items-center'>
                <div className='col-lg-12'>
                    <div className='row justify-content-evenly align-items-center'>
                        <div className='col-lg-4 p-3'>
                            <h2><a>Append.</a></h2>
                            <p className='pt-2 pb-2'>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                            <h4 className='text-secondary'>
                                <a><i class="bi bi-twitter border rounded rounded-5 p-2 ms-2"></i></a>
                                <a><i class="bi bi-facebook border rounded rounded-5 p-2 ms-2"></i></a>
                                <a><i class="bi bi-instagram border rounded rounded-5 p-2 ms-2"></i></a>
                                <a><i class="bi bi-linkedin border rounded rounded-5 p-2 ms-2"></i></a>
                            </h4>
                        </div>
                        <div className='col-lg-2 p-3'>
                            <h5 className='pb-3 fw-bold'>Useful Links</h5>
                            <h6>Home</h6>
                            <h6>About us</h6>
                            <h6>Services</h6>
                            <h6>Terms of service</h6>
                            <h6>Privacy policy</h6>
                        </div>
                        <div className='col-lg-2 p-3'>
                            <h5 className='pb-3 fw-bold'>Our services</h5>
                            <h6>Web Design</h6>
                            <h6>Web Development</h6>
                            <h6>Product Management</h6>
                            <h6>Marketing</h6>
                            <h6>Graphic Design</h6>
                        </div>
                        <div className='col-lg-2 p-3'>
                            <h5 className='pb-3 fw-bold contct'>Contact us</h5>
                            <h6 className='contct'>A108 Adam Street
                                <br></br>
                                New York, NY 535022
                                <br></br>
                                United States
                            </h6>
                            <h6 className='contct'><b>Phone:</b> +1 5589 55488 55</h6>
                            <h6 className='contct'><b>Email:</b> info@example.com</h6>
                        </div>
                    </div>
                </div>
                <div className='col-lg-10 text-center mt-5 p-2' style={{background:"lightgray"}}>
                    <p className='pt-3'>© Copyright <b>Append </b>All Rights Reserved
                        <br></br>
                        Designed by <span className='text-danger'>Riddhi Jethava</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
