import React from 'react';

const CtaArea = () => {
    return (
        <div className="home-one-cta-two cta-area-1">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="home-one-cta edu-cta-box bg-image">
                            <div className="inner">
                                <div className="content text-md-end">
                                    <span className="subtitle">Get In Touch:</span>
                                    <h3 className="title">
                                        <a href="mailto:info@Chhayaa">info@Chhayaa</a>
                                    </h3>
                                </div>
                                <div className="sparator">
                                    <span>or</span>
                                </div>
                                <div className="content">
                                    <span className="subtitle">Call Us Via:</span>
                                    <h3 className="title">
                                        <a href="tel:+011235641231">+01 123 5641 231</a>
                                    </h3>
                                </div>
                            </div>
                            <ul className="shape-group">
                                <li className="shape-01 scene">
                                    <img data-depth="2" src="/assets/images/cta/shape-06.png" alt="shape" />
                                </li>
                                <li className="shape-02 scene">
                                    <img data-depth="-2" src="/assets/images/cta/shape-12.png" alt="shape" />
                                </li>
                                <li className="shape-03 scene">
                                    <img data-depth="-3" src="/assets/images/cta/shape-04.png" alt="shape" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaArea;