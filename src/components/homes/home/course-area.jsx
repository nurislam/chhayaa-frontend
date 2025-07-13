"use client";

import Link from "next/link";
import { course_data } from "../../../data";
import CourseTypeOne from "../../course/course-type-one";
import { useCoursesQuery } from "@/data/courses/use-courses.query";

const CourseArea = () => {
  const {
    data: courseData = [],
    isPending,
    refetch: refetchCourseData,
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

  console.log("Courses:", courseData);

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
          {courseData.slice(0, 4).map((course) => {
            const transformedCourse = {
              ...course,
              img: course.imageUrl, // Maps to data.img
              course_price: course.price, // Maps to data.course_price
              rating_count: course.TotalStudents || 0, // Assuming this as review count
              student: course.TotalStudents,
              lesson: course.totalLesson,
              level: course.featured,
              short_desc: course.content?.slice(0, 100) + "...", // truncate content
            };
            return (
              <div
                className="col-md-6 col-xl-3"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
                key={course.id}
              >
                <CourseTypeOne data={course} />
              </div>
            );
          })}
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
