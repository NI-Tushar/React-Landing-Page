import React from 'react';
import '../css/Banner.css';

let logo_name = "SiteName";



export default function Banner() {
  return (
      <div>
        {/* _____________________________ navbar start */}
                 
        <section className='whole_banner'>
            <div className="banner_center">
                <div className="banner_part">
                    <div className="banner_text">
                        <a href=""><button className='find'>Find Care Now</button></a>
                        <h1>Caring Hands, Anytime Your Need</h1>
                        <p>Compassionate Care For Every Need, Right 
                            At Your Doorstep.
                        </p>
                        <a href=""><button className='get_start'>Get Started</button></a>
                    </div>
                </div>
                <div className="banner_part">
                    <div className="banner_img">
                        <img className='img1' src="./resources/images/banner/1.png" alt="" />
                        <img className='img2' src="./resources/images/banner/2.png" alt="" />
                        <img className='img3' src="./resources/images/banner/3.png" alt="" />
                    </div>
                </div>
            </div>
        </section>

        {/* _____________________________ navbar end */}
    </div>
  )
}











