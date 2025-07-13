"use client";
import { Wrapper } from "@/layout";
import CourseDetailsOneMain from "@/components/course-details"; 

 

const CourseDetailsPage = () => {
  // const course = course_data[0];
  const {
    data: course = {},
    isLoading,
    isFetching,
    error,
    refetch,
  } = useDetailsCoursesInfo(0);

  return (
    <Wrapper>
      <CourseDetailsOneMain course={course} />
    </Wrapper>
  );
};

export default CourseDetailsPage;
