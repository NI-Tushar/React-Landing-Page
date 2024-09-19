import React from 'react'
import '../css/Find.css'


let logo_name = "MySite";

export default function Find() {
  return (
    <div>
         {/* _____________________________ Find start */}
         <section className='find_section'>
            <h2>Find the caring your family deserves</h2>
            <div className="find_card">
                <div className="blank-1"></div>
                <div className="cards">

                    <div className="card">
                        <div className="find_body">
                            <i class="fa-solid fa-location-crosshairs"></i>
                            <p>Find your ideal caregiver</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="find_body">
                            <i class="fa-solid fa-comments"></i>
                            <p>Communicate with your potential caregiver</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="find_body">
                            <i class="fa-solid fa-hand-holding-heart"></i>
                            <p>Hire safely</p>
                        </div>
                    </div>

                </div>
                <div className="blank-2"></div>
            </div>
                <div className="find_btn">
                    <a href=""><button>Find a Caregiver</button></a>
                </div>
            </section>
      
        {/* _____________________________ Find end */}

    </div>
  )
}

