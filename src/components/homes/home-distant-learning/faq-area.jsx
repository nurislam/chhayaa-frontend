import React from 'react';

const accordion_items = [
    {
        id:'collapseOne',
        show:true,
        title:'How can I contact a school directly?',
        desc:'Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.'
    },
    {
        id:'collapseTwo',
        show:false,
        title:'How do I find a school where I want to study?',
        desc:'Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.'
    },
    {
        id:'collapseThree',
        show:false,
        title:'Where should I study abroad?',
        desc:'Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.'
    }
];

const FaqArea = () => {
    return (
        <div className="edu-faq-area faq-style-1">
            <div className="container">
                <div className="row g-5 row--45">
                    <div className="col-lg-6">
                        <div className="edu-faq-gallery">
                            <div className="row g-5"> 
                                <div className="col-6" data-sal-delay="50" data-sal="slide-right" data-sal-duration="800">
                                    <div className="faq-thumbnail thumbnail-1">
                                        <img src="/assets/images/faq/faq-01.jpg" alt="Faq Images" />
                                    </div>
                                </div>
                                <div className="col-6" data-sal-delay="100" data-sal="slide-left" data-sal-duration="800">
                                    <div className="faq-thumbnail thumbnail-2">
                                        <img src="/assets/images/faq/faq-02.jpg" alt="Faq Images" />
                                    </div>
                                </div>
                                <div className="col-6" data-sal-delay="50" data-sal="slide-right" data-sal-duration="800">
                                    <div className="faq-thumbnail thumbnail-3">
                                        <img src="/assets/images/faq/faq-03.jpg" alt="Faq Images" />
                                    </div>
                                </div>
                                <div className="col-6" data-sal-delay="100" data-sal="slide-left" data-sal-duration="800">
                                    <div className="faq-thumbnail thumbnail-4">
                                        <img src="/assets/images/faq/faq-04.webp" alt="Faq Images" />
                                    </div>
                                </div>
                            </div>

                            <ul className="shape-group">
                                <li className="shape-1 scene shape-light" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img data-depth="2" src="/assets/images/faq/shape-02.png" alt="Shape Images" />
                                </li>
                                <li className="shape-1 scene shape-dark" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img data-depth="1.5" src="/assets/images/faq/dark-shape-02.png" alt="Shape Images" />
                                </li>
                                <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img data-depth="-2" src="/assets/images/faq/shape-03.png" alt="Shape Images" />
                                </li>
                                <li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img data-depth="2" src="/assets/images/faq/shape-04.png" alt="Shape Images" />
                                </li>
                                <li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img data-depth="-2" src="/assets/images/faq/shape-05.png" alt="Shape Images" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                        <div className="edu-faq-content">
                            <div className="section-title section-left">
                                <span className="pre-title">FAQ’s</span>
                                <h2 className="title">Over 10 Years in <span className="color-secondary">Distant <br /> Skill</span> Development</h2>
                                <span className="shape-line">
                                    <i className="icon-19"></i>
                                </span>
                            </div>
                            <div className="faq-accordion" id="faq-accordion">
                                <div className="accordion"> 
                                    {accordion_items.map((item,i) => { const {desc,id,show,title} = item; 
                                        return (
                                            <div key={i} className="accordion-item">
                                                <h5 className="accordion-header">
                                                    <button className={`accordion-button ${show?'':'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded={show ? 'true' : 'false' }> {title} </button>
                                                </h5>
                                                <div id={id} className={`accordion-collapse collapse ${show ? 'show' : '' }`} data-bs-parent="#faq-accordion">
                                                    <div className="accordion-body">
                                                        <p>{desc}</p>
                                                    </div>
                                                </div>
                                            </div> 
                                        )
                                    })} 
                                </div>
                            </div>
                            <ul className="shape-group">
                                <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img data-depth="1.5" src="/assets/images/about/shape-02.png" alt="Shape Images" />
                                </li>
                                <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <span data-depth="-2.2"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqArea;