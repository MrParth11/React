import React from 'react'
import img from './tourist.webp'

function Navbar() {
    return (
        <div className='navbar' style={{padding: "10px" }}>
            <img src={img} className='logo'></img>

            <nav style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <ul>
                    <li style={{ listStyle: 'none' }}>
                        <a className='nav'>Home</a>
                        <a className='nav'>About</a>
                        <a className='nav'>Services</a>
                        <a className='nav'>Packages</a>
                        <a className='nav'>Pages</a>
                        <a className='nav'>Contact</a>
                    </li>
                </ul>
                <div className='contact'>
                    <button style={{ padding: '5px', borderRadius: '15px', border: 'none' }}>Register</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
