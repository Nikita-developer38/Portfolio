import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/Logo.png'
import frame from './images/Frame.png'
import './Navbar.css'
import button from './images/Button.png'



export default function Navbar() {
    return (
        <>
            <nav className="navbar ">
                <div id='nav' className="container-fluid d-flex flex-row justify-content-between rounded-pill bg-light">
                    <div>  <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top" />

                    </a></div>
                    <div className='d-flex flex-row justify-content-between '>
                        <img src={button} />
                        <img src={frame} />
                    </div>
                </div>
            </nav>


        </>
    )
}
