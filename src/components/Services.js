import React from 'react'
import '../css/Services.css'


let logo_name = "MySite";

export default function Services() {
  return (
    <div>
         {/* _____________________________ Services start */}
         <section className='service_section'>
            <h2>Our Services</h2>
            <div className="service_card">
                <div className="blank-1"></div>
                <div className="cards">

                    <div className="card">
                        <div className="service_body">
                            <div className="service_part service_img">
                                <img src="../resources/images/services/1.png" alt="" />
                            </div>
                            <div className="service_part service_text">
                                <h3>Child Care</h3>
                                <p>We provide safe, nurturing environments for children of all ages. Each child 
                                    receives personalized attention to foster their growth and development through play, 
                                    education, and care.</p>
                            </div>
                        </div>
                    </div>
                
                

                    <div className="card">
                        <div className="service_body">
                            <div className="service_part service_img">
                                <img src="../resources/images/services/2.png" alt="" />
                            </div>
                            <div className="service_part service_text">
                                <h3>Patient Care</h3>
                                <p>Our compassionate caregivers support patients with daily activities, medication 
                                    management, and recovery, ensuring their comfort and well-being throughout the 
                                    process.</p>
                            </div>
                        </div>
                    </div>
                


                    <div className="card">
                        <div className="service_body">
                            <div className="service_part service_img">
                                <img src="../resources/images/services/3.png" alt="" />
                            </div>
                            <div className="service_part service_text">
                                <h3>House Care</h3>
                                <p>Our house care services help maintain clean and organized homes, including housekeeping, 
                                    laundry, and meal preparation, ensuring your home remains comfortable and welcoming.</p>
                            </div>
                        </div>
                    </div>   


                    <div className="card">
                        <div className="service_body">
                            <div className="service_part service_img">
                                <img src="../resources/images/services/4.png" alt="" />
                            </div>
                            <div className="service_part service_text">
                                <h3>Special Needs Care</h3>
                                <p>We offer tailored care for individuals with special needs, addressing their physical, mental, 
                                    and emotional challenges while promoting independence and well-being.</p>
                            </div>
                        </div>  
                    </div>  


                    <div className="card">
                        <div className="service_body">
                            <div className="service_part service_img">
                                <img src="../resources/images/services/5.png" alt="" />
                            </div>
                            <div className="service_part service_text">
                                <h3>Autism Care</h3>
                                <p>Our autism care services create structured and supportive environments designed to meet the unique 
                                    needs of individuals with autism, encouraging social skills, learning, and emotional development.</p>
                            </div>
                        </div> 
                    </div> 

                    <div className="card">
                        <div className="service_body">
                            <div className="service_part service_img">
                                <img src="../resources/images/services/6.png" alt="" />
                            </div>
                            <div className="service_part service_text">
                                <h3>Senior Care</h3>
                                <p>Our compassionate senior care includes assistance with daily living, companionship, and health management,
                                    focusing on improving quality of life while ensuring safety, dignity, and independence.</p>
                            </div>
                        </div>                              
                    </div>                              

                
                </div>
                <div className="blank-2"></div>
            </div>
            </section>
      
        {/* _____________________________ Giver end */}

    </div>
  )
}

