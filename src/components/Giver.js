import React from 'react'
import '../css/Giver.css'


let logo_name = "MySite";

export default function Giver() {
  return (
    <div>
         {/* _____________________________ Giver start */}
         <section className='giver_section'>
            <h2>Pro Care Giverr</h2>
            <div className="giver_card">
                <div className="blank-1"></div>
                <div className="cards">

                    <div className="card">
                        <div className="giver_img">
                        <img src="../resources/images/giver/1.png" alt=""/>
                        </div>
                        <p>Rechard</p>
                        <p className='status online'>Online</p>
                    </div>
                
                

                    <div className="card">
                        <div className="giver_img">
                        <img src="../resources/images/giver/2.png" alt=""/>
                        </div>
                        <p>David</p>
                        <p className='status online'>Online</p>
                    </div>
                
                

                    <div className="card">
                        <div className="giver_img">
                            <img src="../resources/images/giver/3.png" alt=""/>
                        </div>
                        <p>Tamanna</p>
                        <p className='status'>Offline</p>
                    </div>

                    
                    <div className="card">
                        <div className="giver_img">
                            <img src="../resources/images/giver/4.png" alt=""/>
                        </div>
                        <p>Steave</p>
                        <p className='status online'>Online</p>
                    </div>


                    <div className="card">
                        <div className="giver_img">
                            <img src="../resources/images/giver/5.png" alt=""/>
                        </div>
                        <p>Cassie</p>
                        <p className='status'>Offline</p>
                    </div>


                    <div className="card">
                        <div className="giver_img">
                            <img src="../resources/images/giver/6.png" alt=""/>
                        </div>
                        <p>Leofold</p>
                        <p className='status online'>Online</p>
                    </div>


                    <div className="card">
                        <div className="giver_img">
                            <img src="../resources/images/giver/7.png" alt=""/>
                        </div>
                        <p>Natasha</p>
                        <p className='status online'>Online</p>
                    </div>
                
                
                

                
                </div>
                <div className="blank-2"></div>
            </div>
            </section>
      
        {/* _____________________________ Giver end */}

    </div>
  )
}

