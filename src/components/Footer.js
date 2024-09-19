import React from 'react'
import '../css/Footer.css'


let logo_name = "MySite";

export default function Footer() {
  return (
    <div>
         {/* _____________________________ Services start */}
         <section className='footer_section'>

            <div className="footer_card">
                <div className="blank-1"></div>
                <div className="cards">

                    <div className="card">
                        <div className="footer_body">
                            <div className="footer_logo">
                            <a href="">
                                <div className="logo">
                                    <img src="resources\images\logo2.png" alt=""/>
                                    <div className="logo_text">
                                        <h1>Well<span>Care</span></h1>
                                        <p>Care at Your Doorstep</p>
                                    </div>
                                </div>
                            </a>
                            </div>
                        </div>
                    </div>
                


                    <div className="card">
                        <div className="footer_body">
                           <h3>About Us</h3>
                           <ul>
                            <a href=""><li>About Us</li></a>
                            <a href=""><li>What We Do</li></a>
                            <a href=""><li>Team</li></a>
                            <a href=""><li>Contact</li></a>
                           </ul>
                        </div>                              
                    </div>                              

                

                    <div className="card">
                        <div className="footer_body">
                           <h3>More</h3>
                           <ul>
                            <a href=""><li>Projects</li></a>
                            <a href=""><li>Events</li></a>
                            <a href=""><li>Donate</li></a>
                            <a href=""><li>Blog</li></a>
                           </ul>
                        </div>                              
                    </div> 
                

                    <div className="card">
                        <div className="footer_body">
                           <h3>Connect With Us:</h3>
                           <ul className='social'>
                            <a href=""><li><i class="fa-brands fa-facebook"></i></li></a>
                            <a href=""><li><i class="fa-brands fa-instagram"></i></li></a>
                            <a href=""><li><i class="fa-brands fa-twitter"></i></li></a>
                            <a href=""><li><i class="fa-brands fa-linkedin"></i></li></a>
                           </ul>
                        </div>                              
                    </div> 
                                            

                
                </div>
                <div className="blank-2"></div>
            </div>
            </section>
            <div className="bottom_footer">
                <p>All Right Reserve to Online Travel Agency </p>
            </div>
      
        {/* _____________________________ Giver end */}

    </div>
  )
}

