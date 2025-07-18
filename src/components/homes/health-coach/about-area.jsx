import React from 'react';

const AboutArea = () => {
  return (
    <>
     <div className="gap-bottom-equal edu-about-area about-style-9">
        <div className="container Chhayaa-animated-shape">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                    <div className="about-image-gallery">
                        <img className="main-img-1" src="/assets/images/about/about-17.webp" alt="About Image"/>
                        <div className="author-box">
                            <img src="/assets/images/about/about-18.webp" alt="About Images"/>
                        </div>
                        <ul className="shape-group">
                            <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                <img data-depth="1.5" src="/assets/images/about/shape-36.png" alt="Shape"/>
                            </li>
                            <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                <img data-depth="-1.2" src="/assets/images/others/shape-34.png" alt="Shape"/>
                            </li>
                            <li className="shape-3 circle" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                <span></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-content">
                        <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <span className="pre-title">About Us</span>
                            <h2 className="title">Individual <span className="color-secondary">Nutrition</span> Counseling & Coaching</h2>
                            <span className="shape-line"><i className="icon-19"></i></span>
                            <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim.</p>
                        </div>
                        <ul className="features-list" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <li>Expert Trainers</li>
                            <li>Online Remote Learning</li>
                            <li>Lifetime Access</li>
                        </ul>
                        <a href="#" className="edu-btn">Get Start Today <i className="icon-4"></i></a>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <img data-depth="-2" src="/assets/images/others/shape-33.png" alt=""/>
                </li>
            </ul>
        </div>
    </div> 
    </>
  );
};

export default AboutArea;