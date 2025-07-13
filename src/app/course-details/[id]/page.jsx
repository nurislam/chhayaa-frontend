"use client";
import { Wrapper } from "@/layout";
import CourseDetailsOneMain from "@/components/course-details";
import { useDetailsCoursesInfo } from "@/data/courses/use-courses.query";
import { useParams } from "next/navigation";
import { course_data } from "@/data";

const CourseDetailsPage = () => {
  const params = useParams();
  const courseId = params?.id;

  const {
    data: course = {},
    isLoading,
    isFetching,
    error,
    refetch,
  } = useDetailsCoursesInfo(courseId);

  return (
    <Wrapper>
      {course && Object.keys(course).length > 0 ? (
        <CourseDetailsOneMain course={course} />
      ) : isLoading || isFetching ? (
        <p>Loading course details...</p>
      ) : (
        <p>Course not found.</p>
      )}
    </Wrapper>
  );
};

export default CourseDetailsPage;
