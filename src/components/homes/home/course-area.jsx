"use client";

import Link from "next/link";
import CourseTypeOne from "../../course/course-type-one";
import { useCoursesQuery } from "@/data/courses/use-courses.query";

const CourseArea = () => {
  const {
    data: course_data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useCoursesQuery({
    include: [
      {
        relation: "category",
        scope: {
          fields: { id: true, categoryName: true },
        },
      },
      {
        relation: "lessons",
        scope: {
          fields: { id: true, name: true },
        },
      },
      {
        relation: "instructor",
        scope: {
          fields: { id: true, name: true },
        },
      },
    ],
    order: ["createdAt DESC"],
  });

  return (
    <div className="edu-course-area course-area-1 edu-section-gap bg-lighten01">
      <div className="container">
        <div
          className="section-title section-center"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <span className="pre-title">Popular Courses</span>
          <h2 className="title">Pick A Course To Get Started</h2>
          <span className="shape-line">
            <i className="icon-19"></i>
          </span>
        </div>
        <div className="row g-5">
          {isLoading ? (
            <p>Loading...</p>
          ) : course_data.length > 0 ? (
            <div className="row g-5">
              {course_data.slice(0, 4).map((course) => (
                <div className="col-md-6 col-xl-3" key={course.id}>
                  <CourseTypeOne data={course} />
                </div>
              ))}
            </div>
          ) : (
            <p>No courses found.</p>
          )}
        </div>
        <div
          className="course-view-all"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="1200"
        >
          <Link href="/course-style-1" className="edu-btn">
            Browse more courses <i className="icon-4"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseArea;
