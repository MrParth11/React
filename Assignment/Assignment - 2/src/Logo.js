import React from 'react'
import img01 from '../src/liabrary/client-1.png'
import img02 from '../src/liabrary/client-2.png'
import img03 from '../src/liabrary/client-3.png'
import img04 from '../src/liabrary/client-4.png'
import img05 from '../src/liabrary/client-5.png'
import img06 from '../src/liabrary/client-6.png'


function Logo() {
  return (
    <div className='container-fluid' id='company_logo'>
        <div className='row'>
            <div className='col-lg-12'>
                <div className='row'>
                    <div className='col-lg-2 col-md-4 col-sm-6 col-6 p-5'>
                        <img src={img01} className='d-block w-75 m-auto'></img>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 col-6 p-5'>
                        <img src={img02} className='d-block w-75 m-auto'></img>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 col-6 p-5'>
                        <img src={img03} className='d-block w-75 m-auto'></img>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 col-6 p-5'>
                        <img src={img04} className='d-block w-75 m-auto'></img>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 col-6 p-5'>
                        <img src={img05} className='d-block w-75 m-auto'></img>
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-6 col-6 p-5'>
                        <img src={img06} className='d-block w-75 m-auto'></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Logo
