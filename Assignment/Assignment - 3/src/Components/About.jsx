import React from 'react'
import { GrSubtract } from "react-icons/gr";
import { FaDownload } from "react-icons/fa";

function About() {
    return (
        <div className='border'>
            <div className="container text-white">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-12 text-center p-5 position-relative">
                                <h1 id='large-text'>RESUME</h1>
                                <h1 id='heading'>ABOUT <span className='text-warning'>ME</span></h1>
                            </div>
                            <div className="col-lg-12 p-5">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h3 className='pt-3 pb-3'>PERSONAL INFOS</h3>
                                        <div className="row">
                                            <div className="col-lg-6" id='details'>
                                                <h6><span className='text-secondary'>First Name:</span> Riddhi</h6>
                                                <h6><span className='text-secondary'>Age:</span>  22 years</h6>
                                                <h6 className='text-secondary'>Freelance: <span className='text-success'>Available</span></h6>
                                                <h6><span className='text-secondary'>Phone:</span> +91 8320888980</h6>
                                                <h6></h6>
                                                <a href="C:\Users\admin\Desktop\FULL STACK\GitHub Files\React_5\webpage03\src\Components\Riddhi's CV .pdf" className='btn border p-2 text-white mt-5 ps-3 pe-3 rounded rounded-5'>DOWNLOAD CV <FaDownload className='rounded rounded-5 p-2 fs-1 bg-warning' /> </a>
                                            </div>
                                            <div className="col-lg-6" id='details'>
                                                <h6> <span className='text-secondary'>Last Name:</span> Jethava</h6>
                                                <h6> <span className='text-secondary'>Nationality:</span> Hindu</h6>
                                                <h6> <span className='text-secondary'>Address:</span> Rajkot, Gujarat</h6>
                                                <h6> <span className='text-secondary'>Email:</span> riddhijethava08@gmail.com</h6>
                                                <h6> <span className='text-secondary'>Languages:</span> Gujarati, English, Hindi</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="row justify-content-evenly">
                                            <div className="col-lg-6 border rounded rounded-3 ps-5 pe-5 pt-3 pb-3">
                                                <h1 className='text-warning'>30+</h1>
                                                <h6><GrSubtract /> COMPLETED</h6>
                                                <h6 className='ps-3'>Projects</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-12 text-center p-5">
                                <h3>MY SKILLS</h3>
                            </div>
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-3 border p-5"></div>
                                    <div className="col-lg-3 border p-5"></div>
                                    <div className="col-lg-3 border p-5"></div>
                                    <div className="col-lg-3 border p-5"></div>
                                    <div className="col-lg-3 border p-5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 border">
                                
                            </div>
                            <div className="col-lg-6 border">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
