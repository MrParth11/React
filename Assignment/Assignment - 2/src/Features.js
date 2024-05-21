import React from 'react'
import features01 from '../src/liabrary/features-light-1.jpg'
import features02 from '../src/liabrary/features-light-2.jpg'
import features03 from '../src/liabrary/features-light-3.jpg'

function Features() {
    return (
        <div className='container-fluid bg pb-5'>
            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <h1 className='darkgray'><i class="bi bi-dash-lg" style={{color:"rgb(224, 59, 59)"}}></i> Features <i class="bi bi-dash-lg" style={{color:"rgb(224, 59, 59)"}}></i></h1>
                    <p className='paragraph'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className='col-lg-12 pt-5 pb-5'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-lg-4 ps-5'>
                            <h3>Corporis temporibus maiores <br></br> provident</h3>
                            <h6 className='pt-4 pb-4'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</h6>
                            <button className='btn read ps-4 pe-4 pb-2 pt-2 fs-5'>Get Started</button>
                        </div>
                        <div className='col-lg-8 d-flex' id='feat'>
                            <div>
                                <img src={features01} className='feature01 border border-5 border-light'></img>
                            </div>
                            <div>
                                <img src={features02} className='feature02 border border-5 border-light'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-12 pt-5'>
                    <div className='row justify-content-center  '>
                        <div className='col-lg-5'>
                            <img src={features03} className='w-100 border border-5 border-light'></img>
                        </div>
                        <div className='col-lg-5 d-flex justify-content-center align-items-center'>
                            <div className='ps-5 icon-right'>
                                <h2>Sunt consequatur ad ut est nulla</h2>
                                <h6 className='pt-3'>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</h6>
                                <h6 className='pt-3'><i class="ri-check-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
                                <h6 className='pt-3'><i class="ri-check-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</h6>
                                <h6 className='pt-3'><i class="ri-check-line"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</h6>
                                <button className='btn read ps-4 pe-4 pb-2 pt-2 fs-5 mt-4'>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
