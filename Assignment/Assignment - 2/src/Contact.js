import React from 'react'

function Contact() {
    return (
        <div className='container-fluid p-5'>
            <div className='row p-5'>
                <div className='col-lg-12 text-center pb-5'>
                    <h1 className='darkgray'><i class="bi bi-dash-lg" style={{color:"rgb(224, 59, 59)"}}></i> Contact <i class="bi bi-dash-lg" style={{color:"rgb(224, 59, 59)"}}></i></h1>
                    <h6>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</h6>
                </div>
                <div className='col-lg-12' id='contact-icon'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-wrap justify-content-center'>
                            <div className='col-lg-5 col-md-5 col-sm-12 col-12 p-5 mb-4 bg me-4'>
                                <i class="bi bi-geo-alt"></i>
                                <h4 className='pt-2 pb-2'>Address</h4>
                                <p>A108 Adam Street <br></br>New York, NY 535022</p>
                            </div>
                            <div className='col-lg-5 col-md-5 col-sm-12 col-12 p-5 mb-4 bg'>
                            <i class="bi bi-telephone"></i>
                                <h4 className='pt-2 pb-2'>Call Us</h4>
                                <p>
                                    +1 5589 55488 55<br></br>+1 6678 254445 41
                                </p>
                            </div>
                            <div className='col-lg-5 col-md-5 col-sm-12 col-12 p-5 me-4 bg'>
                            <i class="bi bi-clock"></i>
                                <h4 className='pt-2 pb-2'>Email Us</h4>
                                <p>info@example.com
                                <br></br>contact@example.com</p>
                            </div>
                            <div className='col-lg-5 col-md-5 col-sm-12 col-12 p-5 bg'><i class="bi bi-envelope"></i>
                                <h4 className='pt-2 pb-2'>Open Hours</h4>
                                <p>Monday - Friday <br></br>9:00AM - 05:00PM</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-wrap align-items-center justify-content-center bg p-5'>
                            <input placeholder='Your Name' className='me-3 border rounded rounded-2 p-4'  style={{width:"265px"}}></input>
                            <input placeholder='Your Email' className='ms-4 border rounded rounded-2 p-4' style={{width:"265px"}}></input>
                            <input placeholder='Subject' className='w-100 form-control p-4'></input>
                            <textarea placeholder='Message' className='w-100 form-control p-4 h-25'></textarea>
                            <button className='btn read ps-5 pe-5 pt-3 pb-3 border'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
