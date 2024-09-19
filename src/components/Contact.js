import React from 'react'
import '../css/Contact.css'


let logo_name = "MySite";

export default function Contact() {
  return (
    <div>

         {/* _____________________________ Find start */}
        <section className='contact_section'>
            <div className="centered_contact">

            <form action="">
                <h2>Contact Us</h2>
                <p>We Would Love to Hear From You</p>

                <div className="column">
                    <label htmlFor="the-name">Name</label>
                    <input type="text" />

                    <label htmlFor="phone">Phone</label>
                    <input type="text" />
                    
                    <label htmlFor="the-reason"></label>
                </div>  

                <div className="column">
                    <label htmlFor="Email">Email</label>
                    <input type="text" />

                    <label htmlFor="subject">Subject</label>
                    <input type="text" />
                </div>

                <div className="full_msg">
                    <label htmlFor="">Message</label>
                    <textarea type="text"/>
                </div>

                <div className="form_btn">
                    <input type="reset" value="Clear" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            </div>

        </section>


  

        
        {/* _____________________________ Find end */}

    </div>
  )
}

