import React from 'react'

function Big_header() {
    return (
        <header style={{ height: "100vh" }}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 p-3'>
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <a className="navbar-brand fs-3 text-white" href="#">Append.</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 font-size-20px">
                                        <li className="nav-item padding-right">
                                            <a className="nav-link active colour" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item padding-right">
                                            <a className="nav-link colour" href="#">About</a>
                                        </li>
                                        <li className="nav-item padding-right">
                                            <a className="nav-link colour" aria-disabled="true">Service</a>
                                        </li>
                                        <li className="nav-item padding-right">
                                            <a className="nav-link colour" aria-disabled="true">Portfoliu</a>
                                        </li>
                                        <li className="nav-item padding-right">
                                            <a className="nav-link colour" aria-disabled="true">Team</a>
                                        </li>
                                        <li className="nav-item padding-right">
                                            <a className="nav-link colour" aria-disabled="true">Blog</a>
                                        </li>
                                        <li className="nav-item dropdown padding-right">
                                            <a className="nav-link dropdown-toggle colour" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Dropdown</a></li>
                                                <li><a className="dropdown-item" href="#">dropdown-1</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item padding-right">
                                            <a className="nav-link colour" aria-disabled="true">Contact</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex" role="search">
                                        <button className="btn btn-primary" type="submit">Get started</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className='col-lg-12'>
                        <div className='col-lg-5 text-white ps-5 header-text'>
                            <h1 className='pt-2'>Welcome to Our Website</h1>
                            <h5 className='pt-2 pb-2 fw-lighter'>We are team of talented designers making websites with Bootstrap-React</h5>
                            <input type='email' placeholder='Enter email address' className='w-75 ps-2 pt-3 pb-3  rounded rounded-3 border'></input>
                        </div>
                    </div>
                </div>
            </div>

        
        </header>
    )
}

export default Big_header
