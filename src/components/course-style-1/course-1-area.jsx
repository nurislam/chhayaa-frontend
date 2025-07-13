import React, { useEffect } from "react";
import { useState } from "react";
import SortingArea from "../course-filter/sorting-area";
import CourseTypeOne from "../course/course-type-one";
import { useCoursesQuery } from "@/data/courses/use-courses.query";

const CourseArea = () => {
  const coursePerView = 8;
  const [next, setNext] = useState(coursePerView);
  const [courses, setCourses] = useState([]);

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

  useEffect(() => {
    if (course_data.length > 0) {
      setCourses(course_data);
    }
  }, [course_data]);

  // handleLoadData
  const handleLoadData = () => {
    setNext((value) => value + 4);
  };
  return (
    <div className="edu-course-area course-area-1 gap-tb-text">
      <div className="container">
        <SortingArea
          course_items={course_data}
          num={courses?.slice(0, next)?.length}
          setCourses={setCourses}
          courses={courses}
        />

        {isLoading ? (
          <p>Loading...</p>
        ) : courses.length > 0 ? (
          <div className="row g-5">
            {courses.slice(0, next).map((course) => (
              <div className="col-md-6 col-xl-3" key={course.id}>
                <CourseTypeOne data={course} classes="course-box-shadow" />
              </div>
            ))}
          </div>
        ) : (
          <p>No courses found.</p>
        )}

        {next < courses.length && (
          <div
            onClick={handleLoadData}
            className="load-more-btn"
            data-sal-delay="100"
            data-sal="slide-up"
            data-sal-duration="1200"
          >
            <a className="edu-btn" style={{ cursor: "pointer" }}>
              Load More <i className="icon-56"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseArea;
