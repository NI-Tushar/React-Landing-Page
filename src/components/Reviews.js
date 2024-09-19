import React from 'react'
import '../css/Reviews.css'


let logo_name = "MySite";

export default function Reviews() {
  return (
    <div>
         {/* _____________________________ Find start */}
         <section className='reviews_section'>
            <h2>Find the caring your family deserves</h2>
            <div className="reviews_card">
                <div className="blank-1"></div>
                <div className="cards">

                    <div className="card">
                        <div className="reviews_body">
                            <div className="user_img">
                                <img src="../resources/images/reviews/1.png" alt=""/>
                            </div>
                            <p>“We were so lucky to find Mary on this app! She has been an
                                 absolute godsend for our family. She is so reliable and always 
                                 goes above and beyond to help us out. My granny just loves her 
                                 and she always goes right.”
                            </p>
                            <p className="name">-Vanessa Brien</p>
                            <div className="review_star">
                                <ul>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="reviews_body">
                            <div className="user_img">
                                <img src="../resources/images/reviews/2.png" alt=""/>
                            </div>
                            <p>“We were so lucky to find Mary on this app! She has been an absolute 
                                godsend for our family. She is so reliable and always goes above and beyond
                                 to help us out. My granny just loves her and she always goes right.”
                            </p>
                            <p className="name">-Charlie Luis</p>
                            <div className="review_star">
                                <ul>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="reviews_body">
                            <div className="user_img">
                                <img src="../resources/images/reviews/3.png" alt=""/>
                            </div>
                            <p>“We were so lucky to find Mary on this app! She has been an absolute godsend
                                 for our family. She is so reliable and always goes above and beyond to help us out. 
                                 My granny just loves her and she always goes right.”
                                </p>
                                <p className="name">-Adam Smith</p>
                                <div className="review_star">
                                <ul>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="blank-2"></div>
            </div>
 
            </section>
      
        {/* _____________________________ Find end */}

    </div>
  )
}

