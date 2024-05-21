import React from 'react'

function About() {
    return (
        <div className='container-fluid pt-5 pb-5' style={{background:"#f4f4f4"}}>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-5 m-auto ps-5'>
                            <h5 style={{color:"rgb(224, 59, 59)"}}><i class="bi bi-dash-lg"></i>About Us</h5>
                            <h1>Ducimus rerum libero <br></br> reprehenderit cumque</h1>
                            <p className='pt-2 pb-2'>Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.</p>
                            <button className='btn ps-4 pt-2 pb-2 pe-4 fs-4 border read'>Read more <i class="ri-arrow-right-line"/></button>
                        </div>
                        <div className='col-lg-6 me-4' id='foricon'>
                            <div className='row'>
                                <div className='col-lg-6 mt-5'>
                                    <div className='row flex-direction-column justify-content-center'>
                                        <div className='col-lg-11 d-flex border flex-direction p-5 mb-4 rounded rounded-4 bg-white shadow-lg'>
                                            <h1><i class="ri-building-2-fill p-3"></i></h1>
                                            <h2 className='mt-4 mb-4'>Eius provident</h2>
                                            <h6>Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</h6>
                                        </div>
                                        <div className='col-lg-11 border d-flex border flex-direction p-5    rounded rounded-4 bg-white shadow-lg'>
                                            <h1><i class="ri-command-fill p-3"></i></h1>
                                            <h2 className='mt-4 mb-4'>Veniam omnis</h2>
                                            <h6>Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='row flex-direction-column'>
                                        <div className='col-lg-11 border d-flex border flex-direction p-5 mb-4 rounded rounded-4 bg-white shadow-lg'>
                                            <h1><i class="bi bi-clipboard-pulse fs-2 p-3"></i></h1>
                                            <h2 className='mt-4 mb-4'>Rerum aperiam</h2>
                                            <h6>Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia</h6>
                                        </div>
                                        <div className='col-lg-11 border d-flex border flex-direction p-5 rounded rounded-4 bg-white shadow-lg'>
                                            <h1><i class="bi bi-graph-up-arrow fs-2 p-3"></i></h1>
                                            <h2 className='mt-4 mb-4'>Delares sapiente</h2>
                                            <h6>Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
