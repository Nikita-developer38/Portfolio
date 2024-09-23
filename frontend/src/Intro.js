import React from 'react'
import git from './images/logo-github.png'
import linkedin from './images/logo-linkedin.png'
import arrow_right from './images/arrow-right.png'
import './Intro.css'


function Intro() {
    return (
        <>
            <div className='d-flex flex-row justify-content-between'>
                <div className='justify-content-start'>
                    <div className='fw-bold fs-2'>
                        Nikita Murmure
                    </div>
                    <div className='line' ></div>
                    <div>
                        <div>
                            Social Account
                        </div>
                        <div className='d-flex flex-row justify-content-evenly'>
                            <img src={git} />
                            <img src={linkedin} />

                        </div>
                    </div>

                </div>
                <div >
                    <img className='w-75 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_eploAf7-IvaLD0oaNxXMO2Nwn1IXf08mw&s" />
                </div>

            </div>
            <div>
                <div >
                    <div className='fw-bold fs-1'>   I'm a Professional MERN Stack Developer</div>
                    <p className='intro'>
                        As a Professional MERN Stack Developer, I specialize in building dynamic and responsive web applications using MongoDB, Express, React, and Node.js. With a strong foundation in full-stack development, I create efficient, scalable, and user-friendly solutions tailored to meet the needs of modern businesses.
                        My passion lies in transforming complex problems into seamless digital experiences.
                    </p>
                </div>
                <div className='rounded-pill'>
                    <button className='btn fw-bold rounded-pill' style={{ "backgroundColor": " rgb(247, 143, 66)" }}>Let's Talk
                        <img src={arrow_right} className='ms-2' alt='..' />
                    </button>
                </div>
            </div >
        </>
    )
}

export default Intro