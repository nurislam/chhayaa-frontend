import Link from 'next/link';
import React from 'react';

const TeamTwo = ({ instructor, image_location_path = '02' }) => {
    console.log('instructor', instructor);

    return (
        <div className="edu-team-grid team-style-2">
            <div className="inner">
                <div className="thumbnail-wrap">
                    <div className="thumbnail">
                        <Link href={`/instructors/details/${instructor.identifier}`}>
                            <img src={instructor.imageUrl} alt="team images" />
                        </Link>
                    </div>
                    <ul className="team-share-info">
                        {/* {instructor?.social_links?.map((social, i) => (
                            <li key={i}>
                                <a href={social.link} target="_blank">
                                    <i className={social.icon}></i>
                                </a>
                            </li>
                        ))} */}
                        {instructor?.social_links?.map((social, i) => (
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
                        <Link href={`/instructors/details/${instructor.identifier}`}>
                            {instructor.name}
                        </Link>
                    </h5>
                    <span className="designation">{instructor.designation}</span>
                    <p>{instructor.content}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamTwo;