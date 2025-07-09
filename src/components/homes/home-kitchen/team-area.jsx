import React from 'react';
import { instructors_data } from '../../../data';
import TeamThree from "../../team-member/team-three";

const TeamArea = ({ about_p_2, about_p_3 }) => {
    return (
        <div className={`edu-team-area team-area-${about_p_2 ? '6' : '3'} edu-section-gap ${about_p_3 ? 'z-10' : ''}`}>
            <div className="container">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title">Instructors</span>
                    <h2 className="title">Course Instructors</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>

                <div className="row g-5">
                    {instructors_data.slice(0,3).map((instructor) => (
                        <div key={instructor.id} className="col-lg-4 col-md-6" data-sal-delay={instructor.delay} data-sal="slide-up" data-sal-duration="800">
                            <TeamThree instructor={instructor} />
                        </div>
                    ))}
                </div>
            </div>

            <ul className="shape-group">
                <li className="shape-1 scene" data-sal-delay="200" data-sal="fade" data-sal-duration="800">
                    <img data-depth="-2" src="/assets/images/others/shape-26.png" alt="shape" />
                </li>
            </ul>
        </div>
    )
}

export default TeamArea;