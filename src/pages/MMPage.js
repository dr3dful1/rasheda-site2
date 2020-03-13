import React from 'react'
import {Link} from 'react-router-dom'
import LandingImage from '../components/LandingImage'
import SecondLandingArea from '../components/SecondLandingArea'
import Footer from "../components/Footer"
import  Navbar from  '../components/Navbar'
import MedMalBody from '../components/MedMalBody'

function MMPage() {
    return (
        <div>
                <div>
                    < Navbar />

                </div>

         
                <div  className="container landingContainer ">
                    <MedMalBody />

                    
                </div> 
                    <Footer/>
            </div>
         
    
    )
}

export default MMPage