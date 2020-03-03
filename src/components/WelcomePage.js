import React from 'react'
import SecondLandingArea from './SecondLandingArea'
 
function WelcomePage() {
    return (
        <div>
                <div className="videoDiv">
                    
                    <video  autoplay="true" loop="true" muted="true" preload="auto" className="myVideo"
                    source src="./lawyerbackground1.mp4" type="video/mp4"
                    />
                    <div className="secondLandingArea">
                        <div className="ss">
                            <h1>Social Security</h1>
                        </div>
                        <div className="pi">
                        <h1>Personal Injury</h1>
                        </div>
                        <div className="mm">
                        <h1>Medical Malpractice</h1>
                        </div>
                    </div> 
                </div>

             
            
        </div>
    )
}

export default WelcomePage
