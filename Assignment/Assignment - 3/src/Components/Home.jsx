import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { GrSubtract } from "react-icons/gr";
import { MdModeNight } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { TbMessages } from "react-icons/tb";

function Home() {

    // const[] = useState()

    return (
        <div className='home position-relative'>
            <div className="container-fluid Poppins-font text-white p-0 m-0 ">
                <div class="color-block d-none d-lg-block clippath"></div>
                <div className="row p-5 m-0" id='home-row'>
                    <div className="col-lg-4">
                        <div className='picture'></div>
                    </div>
                    <div className="col-lg-7 d-flex flex-column align-items-center justify-content-center p-5">
                        <h1 className='fw-bold' style={{color:"rgb(249, 125, 1)"}}> <GrSubtract /> I'M RIDDHI JETHAVA.</h1>
                        <h2>WEB DESIGNER</h2>
                        <p className='pb-3 pt-2 ps-5'>I'm a ..... based web designer & front‑end developer focused on
                            crafting clean & user‑friendly experiences, I am passionate about
                            building excellent software that improves the lives of those
                            around me.
                        </p>
                        <button className='btn border border-warning text-white ps-4 pe-4 pt-1 pb-1 rounded rounded-5'>
                            <span>MORE ABOUT ME</span>
                            <span class="button-icon ms-3 fs-2">
                                <FaArrowRight className='rounded rounded-5 p-2  bg-warning'/>
                            </span>
                        </button>
                    </div>
                    <div className="col-lg-1 d-flex flex-column align-items-center">
                        <div className='mb-5 fs-1'>
                            <MdModeNight className='ps-2 rounded rounded-5' id='icon'/>
                        </div>
                        <div className='d-flex flex-column align-items-center justify-content-evenly h-50 mt-5'>
                            <FaHome className='rounded rounded-5 p-2' id='icon'/>
                            <FaUser className='rounded rounded-5 p-2' id='icon'/>
                            <IoBag className='rounded rounded-5 p-2' id='icon'/>
                            <IoIosMail className='rounded rounded-5 p-2' id='icon'/>
                            <TbMessages className='rounded rounded-5 p-2' id='icon'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
