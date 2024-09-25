import React from 'react'
import cake from "../src/images/cake.png"
import bookMyShow from "./images/BookMyShow.png"
import tindog from "./images/tinDog.png"
import './Project.css'


function Project() {

    const monginies = () => {
        window.open("https://monginis-cake-shop-clone.netlify.app/")
    }
    const BookMyShow = () => {
        window.open("https://bootstrap-bookmyshow-clone.netlify.app/")
    }
    const tinDog = () => {
        window.open("https://tin-dog-website-clone.netlify.app/")
    }
    return (
        <>
            <div>
                <h1>Latest Project</h1>

                <div className=''>
                    <img src={bookMyShow} className='rounded' id='projectPic' onClick={BookMyShow} style={{ 'width': '308px', 'height': '250px' }} />
                    <img src={tindog} className='rounded' id='projectPic' onClick={tinDog} style={{ 'width': '308px', 'height': '250px' }} />


                    <img src={cake} className='rounded' id='projectPic' onClick={monginies} style={{ 'width': '308px', 'height': '250px' }} />

                </div>
            </div>


        </>
    )
}

export default Project