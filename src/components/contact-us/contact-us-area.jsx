import React from 'react';
import ContactUsForm from '../forms/contact-us-form';
import { SocialShare } from '../social-share';

const ContactUsArea = () => {
    return (
        <section className="contact-us-area">
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-4 col-lg-6">
                        <div className="contact-us-info">
                            <h3 className="heading-title">{"We're"} Always Eager to Hear From You!</h3>
                            <ul className="address-list">
                                <li>
                                    <h5 className="title">Address</h5>
                                    <p>Studio 76d, Riley Ford, North Michael chester, CF99 6QQ</p>
                                </li>
                                <li>
                                    <h5 className="title">Email</h5>
                                    <p><a href="mailto:Chhayaa@example.com">Chhayaa@example.com</a></p>
                                </li>
                                <li>
                                    <h5 className="title">Phone</h5>
                                    <p><a href="tel:+0914135548598">(+091) 413 554 8598</a></p>
                                </li>
                            </ul>
                            <ul className="social-share">
                                <li><a href="#"><i className="icon-share-alt"></i></a></li>
                                <SocialShare/>
                            </ul>
                        </div>
                    </div>

                    <div className="offset-xl-2 col-lg-6">
                        <div className="contact-form form-style-2">
                            <div className="section-title">
                                <h4 className="title">Get In Touch</h4>
                                <p>Fill out this form for booking a consultant advising session.</p>
                            </div>
                            {/* form start */}
                            <ContactUsForm />
                            {/* form end */}
                            <ul className="shape-group">
                                <li className="shape-1 scene">
                                    <img data-depth="1" src="/assets/images/about/shape-13.png" alt="Shape" />
                                </li>
                                <li className="shape-2 scene">
                                    <img data-depth="-1" src="/assets/images/counterup/shape-02.png" alt="Shape" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsArea;