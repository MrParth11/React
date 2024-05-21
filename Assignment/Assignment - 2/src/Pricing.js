import React from 'react'

function Pricing() {
    return (
        <div className='container-fluid pb-5'>
            <div className='row p-5'>
                <div className='col-lg-12 text-center p-5'>
                    <h1><i class="bi bi-dash-lg" style={{color:"rgb(224, 59, 59)"}}></i> Pricing <i class="bi bi-dash-lg" style={{color:"rgb(224, 59, 59)"}}></i></h1>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
            </div>
            <div className='col-lg-12'>
                <div className='row justify-content-center'>
                    <div className='col-lg-3 border border-light shadow-sm rounded rounded-2 p-5 mt-4'>
                        <h5 className='text-center'>Free Plan</h5>
                        <i class=""></i>
                        <h1 className='pb-5 pt-4 text-center'><sup className='fs-4'>$</sup>0/<sub className='fs-5'>month</sub></h1>
                        <h6 className='pb-4 text-secondary'><i class="ri-check-line text-success fw-bold"></i> Quam adipiscing vitae proin</h6>
                        <h6 className='pb-4 text-secondary'><i class="ri-check-line text-success fw-bold"></i> Nec feugiat nisl pretium</h6>
                        <h6 className='pb-4 text-secondary'><i class="ri-check-line text-success fw-bold"></i> Nulla at volutpat diam uteera</h6>
                        <h6 className='text-secondary pb-4'><del><i class="bi bi-x fw-bold fs-5"></i>Pharetra massa massa ultricies</del></h6>
                        <h6 className='text-secondary pb-4'><del><i class="bi bi-x fw-bold fs-5"></i>Massa ultricies mi quis hendrerit</del></h6>
                        <center>
                            <button className='btn ps-5 pe-5 pt-2 pb-2 fs-5 mt-4 border'>Buy Now</button>
                        </center>
                    </div>
                    <div className='col-lg-3 border border-3 border-danger rounded rounded-3 p-5'>
                        <h4 className='text-center'>Business Plan</h4>
                        <i class=""></i>
                        <h1 className='pb-5 pt-4 text-center'><sup className='fs-4'>$</sup>29/<sub className='fs-5'>month</sub></h1>
                        <h5 className='pb-4 text-secondary'><i class="ri-check-line text-success fw-bold"></i> Quam adipiscing vitae proin</h5>
                        <h5 className='pb-4 text-secondary'><i class="ri-check-line text-success fw-bold"></i> Nec feugiat nisl pretium</h5>
                        <h5 className='pb-4 text-secondary'><i class="ri-check-line text-success fw-bold"></i> Nulla at volutpat diam uteera</h5>
                        <h5 className='pb-4 text-secondary'><i class="ri-check-line text-success fw-bold"></i> Pharetra massa massa ultricies</h5>
                        <h5 className='pb-4 text-secondary'><i class="ri-check-line text-success fw-bold"></i> Massa ultricies mi quis hendrerit</h5>
                        <center>
                            <button className='btn ps-5 pe-5 pt-2 pb-2 fs-4 mt-4 border read'>Buy Now</button>
                        </center>
                    </div>
                    <div className='col-lg-3 border border-light shadow-sm rounded rounded-2 p-5 mt-4'>
                        <h5 className='text-center'>Developer Plan</h5>
                        <i class=""></i>
                        <h1 className='pb-5 pt-4 text-center'><sup className='fs-4'>$</sup>49/<sub className='fs-5'>month</sub></h1>
                        <h6 className='pb-4 text-secondary'><i class="ri-check-line text-success fw-bold"></i> Quam adipiscing vitae proin</h6>
                        <h6 className='pb-4 text-secondary'><i class="ri-check-line text-success fw-bold"></i> Nec feugiat nisl pretium</h6>
                        <h6 className='pb-4 text-secondary'><i class="ri-check-line text-success fw-bold"></i> Nulla at volutpat diam uteera</h6>
                        <h6 className='pb-4 text-secondary'><i class="ri-check-line text-success fw-bold"></i> Pharetra massa massa ultricies</h6>
                        <h6 className='pb-4 text-secondary'><i class="ri-check-line text-success fw-bold"></i> Massa ultricies mi quis hendrerit</h6>
                        <center>
                            <button className='btn ps-5 pe-5 pt-2 pb-2 fs-5 mt-4 border'>Buy Now</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
