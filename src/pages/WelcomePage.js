import React from 'react'
import SecondLandingArea from '../components/SecondLandingArea'
 
function WelcomePage() {
    return (
        <div>
                <div className="videoDiv">
                    
                    <video  autoplay="true" loop="true" muted="true" preload="auto" className="myVideo"
                    source src="./lawyerbackground1.mp4" type="video/mp4"
                    />
           
                </div>

             
            
        </div>
    )
}

export default WelcomePage
