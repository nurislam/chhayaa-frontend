import Link from 'next/link';
import React from 'react';

const TeamThree = ({ instructor }) => {
    return (
        <div className="edu-team-grid team-style-3">
            <div className="inner">
                <div className="thumbnail-wrap">
                    <div className="thumbnail">
                        <Link href={`/team-details/${instructor.id}`}>
                                <img src={`/assets/images/team/team-02/${instructor.img}`} alt="team images" />
                        </Link>
                    </div>
                    <ul className="team-share-info">
                        {instructor.social_links.map((social, i) => (
                            <li key={i}>
                                <a href={social.link} target={social.target ? social.target : ''}>
                                    <i className={social.icon}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content">
                    <h5 className="title">
                        <Link href={`/team-details/${instructor.id}`}>
                            {instructor.name}
                        </Link>
                    </h5>
                    <span className="designation">{instructor.title}</span>
                </div>
            </div>
        </div>
    )
}

export default TeamThree;