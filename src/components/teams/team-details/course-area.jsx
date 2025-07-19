"use client";
import React from "react";
import { course_data } from "../../../data";
import CourseTypeOne from "../../course/course-type-one";
import { useCoursesQuery } from "@/data/courses/use-courses.query";

const CourseArea = ({ instructorId }) => {
  // fetching only specific courses where instructor name get matched
  //   const courses = course_data.filter((course) => course.instructor === name);

  const {
    data: course_data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useCoursesQuery({
    where: { instructorId: instructorId },
    order: ["createdAt DESC"],
  });

  if (isLoading || isFetching) return <p>Loading courses...</p>;
  if (error) return <p>Error loading courses!</p>;

  const courses = course_data.filter(
    (course) => course.instructorId === instructorId
  );

  if (!courses.length) return <p>No courses found.</p>;

  return (
    <div className="edu-course-area course-area-1 edu-section-gap bg-lighten01">
      <div className="container">
        <div className="section-title section-center">
          <h2 className="title">My Popular Courses</h2>
        </div>

        <div className="row g-5">
          {courses.map((course) => (
            <div className="col-md-6 col-xl-3" key={course.id}>
              <CourseTypeOne data={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseArea;
