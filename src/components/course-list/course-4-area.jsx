import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { course_data } from '../../data';
import CourseSidebar from '../common/sidebar/course-sidebar';
import SortingArea from '../course-filter/sorting-area';
import CourseItems from './course-items';
import { useCoursesQuery } from "@/data/courses/use-courses.query";

// course_items
const course_items = course_data.filter((arr, index, self) =>
    index === self.findIndex( ( i ) => ( i.img === arr.img && i.State === arr.State ) ) );

const CourseFourArea = () => {

    
    
    
    const [courses, setCourses] = useState([]);
    const [showing,setShowing] = useState(0);
    
    const { categories, instructors, levels, languages, price } = useSelector( (state) => state.filter );
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


     
let items = courses?.filter((item1) =>
    categories?.length !== 0
        ? categories?.some((item2) => item1.category?.id === item2)
        : item1
).filter((item1) =>
    instructors?.length !== 0
        ? instructors?.some((item2) => item1.instructor?.id === item2)
        : item1
).filter((item1) =>
    languages?.length !== 0
        ? languages?.some((item2) => item1.language === item2)
        : item1
).filter((item) =>
    Number(item.price) >= price[0] && Number(item.price) <= price[1]
);

 console.log('course items:',items);
 console.log('courses:',courses);
    return (
        <div className="edu-course-area course-area-1 section-gap-equal">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-3">
                        {/* course sidebar start */}
                        <CourseSidebar course_items={course_items} />
                        {/* course sidebar end */}
                    </div>

                    <div className="col-lg-9 col-pl--35">
                        {/* sorting area start */}
                        <SortingArea course_items={course_items} course_list={true} num={showing} setCourses={setCourses} courses={courses} items={items}  />
                        {/* sorting area end */}

                        <CourseItems itemsPerPage={6} items={courses} course_style="8" setShowing={setShowing} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseFourArea;