import React from 'react'
import {Nav, NavItem,Navbar,Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'

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
                                        <Link   className="navLinkColor" to={{pathname:'/medical_malpractice'}}>
                                            <img src="medmal.png" alt="Italian Trulli" className="medmalPic" href="#" />
                                               Medical   Malpractice  </Link>
                                    </div>
                            </a><br/>
                                <a href="#" > 
                                    <div className="aop2">
                                        <Link href="#" to={{pathname:'/Social_Security'}}>
                                            <img src="ssc.jpg" alt="Italian Trulli" className="sscPic" href="#" />
                                              Social Security</Link>
                                    </div>
                                </a><br/>
                                <a href="#" >
                                    <div className="aop3">
                                        <Link href="#" to={{pathname:'/personal_injury'}}>
                                            <img src="healthsym.jpg" alt="Italian Trulli" className="persInjPic" href="#"  />
                                               Personal Injury  </Link>
                                    </div>
                                </a><br/>
                            </div>
                        
                    </div> 
                </div>        
                 <div className="navLink2">
                    <p className="navLinkFont">
                         
                      <Link href="#" to={{pathname:'/Contact'}}> Contact Us</Link>
                    </p>
                </div>
                 <div className="navLink3">
                    <p className="navLinkFont">
                        <Link href="#" to={{pathname:'/Landing'}}> About Us</Link>
                    </p>
                </div>
                 <div className="navLink4" >
                    <p className="navLinkFont">
                        <Link href="#" to={{pathname:'/Lawyers'}}> Lawyers</Link>
                    </p>
                </div>
                 <div className="navLink5">
                     <p className="navLinkFont">
                        <Link href="#" to={{pathname:'/Testimonials'}}> Testimonials</Link>
                    </p>

                </div>


            </div>
        </div>
      
    )
}

export default MainNavbar

// Change link color https://stackoverflow.com/questions/46102586/change-default-color-of-link-from-blue-to-white