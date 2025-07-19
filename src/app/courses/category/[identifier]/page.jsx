import { Wrapper } from "@/layout"; 
import CourseCategory from "@/components/courses/categoryListing";

export const metadata = {
  title: 'Course '
}

const CourseOnePage = () => {
    return (
        <Wrapper>
            <CourseCategory />
        </Wrapper>
    )
}

export default CourseOnePage;