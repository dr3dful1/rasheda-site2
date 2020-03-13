import React from 'react'
import {Nav, NavItem,Navbar,Badge} from 'react-bootstrap'

function MainNavbar() {
    return (
        <div className="mainNav">
            <div className="logoDiv">
                <img src="lawfirmlogo.jpg" alt="Italian Trulli" className="navLogo " />
            </div>
            <div className="navLinkDiv">
                <div className="aoeWrapper"> 
                        <div className="navLink1">
                                <p className="navLinkFont">
                                    AREAS OF<br/>
                                    PRACTICE
                                </p>
                            <div className="dropdownContent">
                                <a href="#" >
                                <div className="aop1">
                                        <img src="medmal.png" alt="Italian Trulli" className="medmalPic" href="#" />
                                        Link 1
                                    </div>
                            </a><br/>
                                <a href="#" >Link 2
                                    <div className="aop2">
                                        <img src="ssc.jpg" alt="Italian Trulli" className="sscPic" href="#" />
                                    </div>
                                </a><br/>
                                <a href="#" >
                                    <div className="aop3">
                                        <img src="healthsym.jpg" alt="Italian Trulli" className="persInjPic" href="#"  />
                                        Link 3
                                    </div>
                                </a><br/>
                            </div>
                        
                    </div> 
                </div>        
                 <div className="navLink2">
                    <p className="navLinkFont">
                         
                        CONTACT US
                    </p>
                </div>
                 <div className="navLink3">
                    <p className="navLinkFont">
                        ABOUT US
                    </p>
                </div>
                 <div className="navLink4">
                    <p className="navLinkFont">
                        ATTORNEYS
                    </p>
                </div>
                 <div className="navLink5">
                     <p className="navLinkFont">
                        TESTIMONIALS
                    </p>

                </div>


            </div>
        </div>
      
    )
}

export default MainNavbar
