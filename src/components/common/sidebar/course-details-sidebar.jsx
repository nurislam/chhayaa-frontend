import React from "react";
import useModal from "../../../hooks/use-modal";
import { Books } from "../../../svg";
import VideoModal from "../popup-modal/video-modal";
import "react-modal-video/css/modal-video.css";

const CourseDetailsSidebar = ({ course, details_2 = false }) => {
  const {
    certificate,
    price,
    instructor = {},
    duration,
    TotalStudents,
    language,
    lessons = [],
  } = course || {};
  const { isVideoOpen, setIsVideoOpen } = useModal();
  const videoId = "pTB0EiLXUC8";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  return (
    <>
      <div
        className={`course-sidebar-3 ${
          details_2 ? "" : "sidebar-top-position"
        }`}
      >
        <div className="edu-course-widget widget-course-summery">
          <div className="inner">
            <div className="thumbnail">
              <img src={thumbnailUrl} alt="Course Thumb" />
              <a
                onClick={() => setIsVideoOpen(true)}
                style={{ cursor: "pointer" }}
                className="play-btn video-popup-activation"
              >
                <i className="icon-18"></i>
              </a>
            </div>
            <div className="content">
              <h4 className="widget-title">Course Includes:</h4>
              <ul className="course-item">
                <li>
                  <span className="label">
                    <i className="icon-60"></i>Price:
                  </span>
                  <span className="value price">${price}</span>
                </li>

                <li>
                  <span className="label">
                    <i className="icon-62"></i>Instrutor:
                  </span>
                  <span className="value">{instructor?.name}</span>
                </li>

                <li>
                  <span className="label">
                    <i className="icon-61"></i>Duration:
                  </span>
                  <span className="value">{duration}</span>
                </li>

                <li>
                  <span className="label">
                    <Books />
                    Lessons:
                  </span>
                  <span className="value">{lessons?.length}</span>
                </li>

                <li>
                  <span className="label">
                    <i className="icon-63"></i>Enrolled:
                  </span>
                  <span className="value">{TotalStudents} students</span>
                </li>

                <li>
                  <span className="label">
                    <i className="icon-59"></i>Language:
                  </span>
                  <span className="value">{language}</span>
                </li>

                <li>
                  <span className="label">
                    <i className="icon-64"></i>Certificate:
                  </span>
                  <span className="value">{certificate}</span>
                </li>
              </ul>

              <div className="read-more-btn">
                <a href="#" className="edu-btn">
                  Start Now <i className="icon-4"></i>
                </a>
              </div>

              <div className="share-area">
                <h4 className="title">Share On:</h4>
                <ul className="social-share">
                  <li>
                    <a href="#">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-linkedin2"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={videoId}
      />
      {/* video modal end */}
    </>
  );
};

export default CourseDetailsSidebar;
