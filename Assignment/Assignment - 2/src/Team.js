import React from 'react'
import team01 from '../src/liabrary/team-1.jpg'
import team02 from '../src/liabrary/team-2.jpg'
import team03 from './liabrary/team-3.jpg'
import team04 from './liabrary/team-4.jpg'
import team05 from './liabrary/team-5.jpg'
import team06 from './liabrary/team-6.jpg'

function Team() {
    return (
        <div className='container-fliud bg pt-5'>
            <div className='row m-0 pt-5'>
                <div className='col-lg-12 text-center'>
                    <h1 className='darkgray'><i class="bi bi-dash-lg"></i> Team <i class="bi bi-dash-lg"></i></h1>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <div className='col-lg-12'>
                    <div className='row' id='team'>
                        <div className='col-lg-4 text-center p-5'>
                            <img src={team01} className='border border-5 border-light'></img>
                            <div className='overlay'>
                                <a><i class ="bi bi-twitter"></i></a>
                                <a><i class ="bi bi-facebook"></i></a>
                                <a><i class ="bi bi-instagram"></i></a>
                                <a><i class ="bi bi-linkedin"></i></a>
                            </div>
                            <h5 className='pt-3 darkgray'>Walter White</h5>
                            <h6 className='p-1 text-secondary fw-lighter cursive'>Chief Executive Officer</h6>
                            <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
                        </div>
                        <div className='col-lg-4 text-center p-5'>
                            <img src={team02} className='border border-5 border-light'></img>
                            <h5 className='pt-3 darkgray'>Sarah Jhonson</h5>
                            <h6 className='p-1 text-secondary fw-lighter cursive'>Product Manager</h6>
                            <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p>
                        </div>
                        <div className='col-lg-4 text-center p-5'>
                            <img src={team03} className='border border-5 border-light'></img>
                            <h5 className='pt-3 darkgray'>William Anderson</h5>
                            <h6 className='p-1 text-secondary fw-lighter cursive'>CTO</h6>
                            <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p>
                        </div>
                        <div className='col-lg-4 text-center p-5'>
                            <img src={team04} className='border border-5 border-light'></img>
                            <h5 className='pt-3 darkgray'>Amanda Jepson</h5>
                            <h6 className='p-1 text-secondary fw-lighter cursive'>Accountant</h6>
                            <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
                        </div>
                        <div className='col-lg-4 text-center p-5'>
                            <img src={team05} lassName='border border-5 border-light'></img>
                            <h5 className='pt-3 darkgray'>Brian Doe</h5>
                            <h6 className='p-1 text-secondary fw-lighter cursive'>Marketing</h6>
                            <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
                        </div>
                        <div className='col-lg-4 text-center p-5'>
                            <img src={team06} className='border border-5 border-light'></img>
                            <h5 className='pt-3 darkgray'>Josepha Palas</h5>
                            <h6 className='p-1 text-secondary fw-lighter cursive'>Operation</h6>
                            <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
