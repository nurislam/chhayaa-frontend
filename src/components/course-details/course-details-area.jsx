import React from "react";
import CourseDetailsSidebar from "../common/sidebar/course-details-sidebar";
import CommentFormCourse from "../forms/comment-form-course";
import SingleComment from "./single-comment";
import SingleProgressbar from "./single-progressbar";

const CourseDetailsArea = ({ course }) => {
  const {
    id,
    identifier,
    title,
    content,
    imageUrl,
    duration,
    price,
    rating,
    language,
    totalLesson,
    TotalStudents,
    certificate,
    featured,
    status,
    createdAt,
    updatedAt,
    createdBy,
    deleted,
    categoryId,
    instructorId,
    instructor = {},
    lessons = [],
    category = {},
  } = course || {};
  return (
    <section className="edu-section-gap course-details-area">
      <div className="container">
        <div className="row row--30">
          <div className="col-lg-8">
            <div className="course-details-content">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="overview-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#overview"
                    type="button"
                    role="tab"
                    aria-controls="overview"
                    aria-selected="true"
                    tabIndex={-1}
                  >
                    Overview
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="carriculam-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#carriculam"
                    type="button"
                    role="tab"
                    aria-controls="carriculam"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Carriculam
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="instructor-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#instructor"
                    type="button"
                    role="tab"
                    aria-controls="instructor"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Instructor
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="review-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#review"
                    type="button"
                    role="tab"
                    aria-controls="review"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Reviews
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="overview"
                  role="tabpanel"
                  aria-labelledby="overview-tab"
                >
                  <div className="course-tab-content">
                    {/* <div className="course-overview">
                      <h3 className="heading-title">Course Description</h3>
                      <p>{course_desc}</p>
                      <p className="mb--60">{course_desc_2}</p>
                      <h5 className="title">What You’ll Learn?</h5>
                      <ul className="mb--60">
                        {learn_list?.map((l, i) => (
                          <li key={i}>{l}</li>
                        ))}
                      </ul>
                      <p>{course_desc_3}</p>
                    </div> */}
                    <div
                      className="course-description"
                      dangerouslySetInnerHTML={{ __html: content || "" }}
                    />
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="carriculam"
                  role="tabpanel"
                  aria-labelledby="carriculam-tab"
                >
                  <div className="course-tab-content">
                    <div className="course-curriculam">
                      <h3 className="heading-title">Course Curriculum</h3>
                      {/* <p>{curriculum_desc}</p> */}
                      {lessons?.map((lesson, i) => (
                        <div key={i} className="course-lesson">
                          <h5 className="title">{lesson?.name}</h5>
                          <p>{lesson?.details}</p>
                          {/* <ul>
                            {lesson?.map((list, i) => (
                              <li key={i}>
                                {list.title && (
                                  <div className="text">
                                    <i className="icon-65"></i>
                                    {list.title}
                                  </div>
                                )}

                                {!list?.badge_list && (
                                  <div className="icon">
                                    <i className={list?.icon}></i>
                                  </div>
                                )}

                                {list?.badge_list && (
                                  <div className="badge-list">
                                    <span className="badge badge-primary">
                                      {list?.question} Question
                                    </span>
                                    <span className="badge badge-secondary">
                                      {list?.minutes} Minutes
                                    </span>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul> */}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="instructor"
                  role="tabpanel"
                  aria-labelledby="instructor-tab"
                >
                  <div className="course-tab-content">
                    <div className="course-instructor">
                      <div className="thumbnail">
                        <img
                          src={`${instructor?.imageUrl}`}
                          alt="team images"
                          width={270}
                          height={200}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="author-content">
                        <h6 className="title">{instructor?.name}</h6>
                        <span className="subtitle">
                          {instructor?.designation}
                        </span>
                        <p>{instructor?.content}</p>
                        <ul className="social-share">
                          {/* {social_links?.map((social, i) => (
                            <li key={i}>
                              <a
                                href={social.link}
                                target={social.target ? social.target : ""}
                              >
                                <i className={social.icon}></i>
                              </a>
                            </li>
                          ))} */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="review"
                  role="tabpanel"
                  aria-labelledby="review-tab"
                >
                  <div className="course-tab-content">
                    <div className="course-review">
                      <h3 className="heading-title">Course Rating</h3>
                      <p>{rating} average rating</p>
                      <div className="row g-0 align-items-center">
                        <div className="col-sm-4">
                          <div className="rating-box">
                            <div className="rating-number">{rating}</div>
                            <div className="rating">
                              <i className="icon-23"></i>
                              <i className="icon-23"></i>
                              <i className="icon-23"></i>
                              <i className="icon-23"></i>
                              <i className="icon-23"></i>
                            </div>
                            <span>({TotalStudents} Review)</span>
                          </div>
                        </div>
                        <div className="col-sm-8">
                          <div className="review-wrapper">
                            <SingleProgressbar
                              value={"100"}
                              rating_value={TotalStudents}
                            />
                            <SingleProgressbar value={"0"} rating_value={"0"} />
                            <SingleProgressbar value={"0"} rating_value={"0"} />
                            <SingleProgressbar value={"0"} rating_value={"0"} />
                            <SingleProgressbar value={"0"} rating_value={"0"} />
                          </div>
                        </div>
                      </div>

                      {/* <div className="comment-area">
                        <h3 className="heading-title">Reviews</h3>
                        <div className="comment-list-wrapper">
                          {reviews?.map((review, i) => (
                            <SingleComment key={i} review={review} />
                          ))}
                        </div>
                      </div>

                      <div className="comment-form-area">
                        <h3 className="heading-title">Write a Review</h3>
                        <div className="rating-icon">
                          <h6 className="title">Rating Here</h6>
                          <div className="rating">
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                          </div>
                        </div>
                        <CommentFormCourse />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <CourseDetailsSidebar course={course} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsArea;
