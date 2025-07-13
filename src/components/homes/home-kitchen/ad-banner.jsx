import Link from 'next/link';
import React from 'react';

const AdBanner = () => {
    return (
        <div className="edu-cta-banner-area cta-banner-2">
            <div className="container">
                <div className="edu-cta-banner">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h2 className="title">Register To Get Quality Kitchen <span className="color-primary">Courses</span> Through Chhayaa</h2>
                                <Link href="/contact-us" className="edu-btn">
                                    Get started now <i className="icon-4"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1 scene" data-sal-delay="100" data-sal="fade" data-sal-duration="1000">
                    <img data-depth="-2" src="/assets/images/others/shape-05.png" alt="shape" />
                </li>
                <li className="shape-2 scene" data-sal-delay="100" data-sal="fade" data-sal-duration="1000">
                    <img data-depth="2" src="/assets/images/others/shape-04.png" alt="shape" />
                </li>
                <li className="shape-3 scene" data-sal-delay="100" data-sal="fade" data-sal-duration="1000">
                    <img data-depth="-2" src="/assets/images/others/shape-02.png" alt="shape" />
                </li>
                <li className="shape-4 scene" data-sal-delay="100" data-sal="fade" data-sal-duration="1000">
                    <img data-depth="2" src="/assets/images/others/shape-01.png" alt="shape" />
                </li>
                <li className="shape-5 shape-light" data-sal-delay="100" data-sal="fade" data-sal-duration="1000">
                    <img src="/assets/images/others/map-shape-3.png" alt="shape" />
                </li>
                <li className="shape-5 shape-dark" data-sal-delay="100" data-sal="fade" data-sal-duration="1000">
                    <img src="/assets/images/others/dark-map-shape.png" alt="shape" />
                </li>
            </ul>
        </div>
    )
}

export default AdBanner;