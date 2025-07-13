import Link from "next/link";
import React from "react";

const TeamOne = ({ instructor, image_location_path = "01" }) => {
  return (
    <div className="edu-team-grid team-style-1">
      <div className="inner">
        <div className="thumbnail-wrap">
          <div className="thumbnail">
            <Link href={`/team-details/${instructor?.id}`}>
              <img
                src={instructor?.imageUrl}
                alt="team images"
                width={220}
                height={370}
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
          <ul className="team-share-info">
            <li>
              <a href="#">
                <i className="icon-share-alt"></i>
              </a>
            </li>
            {instructor?.social_links?.map((social, i) => (
              <li key={i}>
                <a href={social.link} target="_blank">
                  <i className={social.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="content">
          <h5 className="title">
            <Link href={`/team-details/${instructor?.id}`}>
              {instructor?.name}
            </Link>
          </h5>
          <span className="designation">{instructor?.designation}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamOne;
