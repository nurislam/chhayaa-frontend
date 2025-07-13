

const features_list = [
    'Expert Trainers',
    'Online Remote Learning',
    'Lifetime Access'
];

const AboutArea = () => {
    return (
        <div className="gap-bottom-equal edu-about-area about-style-2">
            <div className="container Chhayaa-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-7">
                        <div className="about-image-gallery">
                            <img className="main-img-1" src="/assets/images/about/about-03.webp" alt="About Image" />
                            <div className="author-box">
                                <div className="inner">
                                    <div className="thumb">
                                        <img src="/assets/images/about/shape-03.png" alt="Shape Image" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Ray Sanchez</h4>
                                        <p>Minim veniam nostrud exer citation.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="award-status bounce-slide">
                                <div className="inner">
                                    <div className="icon">
                                        <i className="icon-30"></i>
                                    </div>
                                    <div className="content">
                                        <h6 className="title">20k</h6>
                                        <span className="subtitle">Enrolled Learners</span>
                                    </div>
                                </div>
                            </div>
                            <ul className="shape-group">
                                <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img data-depth="2" src="/assets/images/about/shape-38.png" alt="Shape" />
                                </li>

                                <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img data-depth="-2" src="/assets/images/about/shape-37.png" alt="Shape" />
                                </li>

                                <li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img data-depth="1.8" src="/assets/images/about/shape-04.png" alt="Shape" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">About Us</span>
                                <h2 className="title">Over 10 Years in <span className="color-secondary">Distant learning</span> for Skill Development</h2>
                                <span className="shape-line">
                                    <i className="icon-19"></i>
                                </span>
                                <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim.</p>
                            </div>
                            <ul className="features-list" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800"> {features_list.map((l,i) => <li key={i}>{l}</li>)} </ul>
                        </div>
                    </div>
                </div>
                <ul className="shape-group">
                    <li className="shape-1 circle scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                        <span data-depth="-2.3"></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutArea;