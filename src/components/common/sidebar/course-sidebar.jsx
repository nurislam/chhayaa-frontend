import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_category, add_force_page, add_instructor, add_item_offset, add_language, add_level, add_price, reset_filter }
    from '../../../redux/features/filter-slice';
import InputRange from "../input-range";

const CourseSidebar = ({ course_data, course_items }) => {

    const courses = course_data.filter(
        (arr, index, self) => index === self.findIndex((i) => i.img === arr.img && i.State === arr.State)
    );

    const { categories, instructors, levels, languages, price } = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    // Safely calculate max and min prices based on valid course prices
    const max_prices = courses
        .map((item) => Number(item.course_price)) // Convert prices to numbers
        .filter((price) => !isNaN(price)); // Filter out invalid numbers

    // If no valid prices exist, default to a sensible range
    const maxPrice = max_prices.length > 0 ? Math.max(...max_prices) : 1000;  // Default to 1000 if no valid prices
    const minPrice = max_prices.length > 0 ? Math.min(...max_prices) : 0;    // Default to 0 if no valid prices


    console.log('courses:', courses);

    const all_categories = [...new Set(courses.map((course) => course.category))];
    const all_instructors = [...new Set(courses.map((course) => course.instructor))];
    const all_levels = [...new Set(courses.map((course) => course.level))];
    const all_languages = [...new Set(courses.map((course) => course.language))];

    // Handle category filter
    const handleCategory = (cate) => {
        const index = categories.findIndex((item) => item === cate);
        if (index >= 0) {
            dispatch(add_category({ changeType: "remove", item: cate, maxPrice }));
        } else {
            dispatch(add_category({ changeType: "added", item: cate, maxPrice }));
        }
        dispatch(add_item_offset(0));
        dispatch(add_force_page(0));
    };

    // Handle instructor filter
    const handleInstructor = (instructor) => {
        dispatch(add_instructor({ instructor, maxPrice }));
        dispatch(add_item_offset(0));
        dispatch(add_force_page(0));
    };

    // Handle level filter
    const handleLevel = (level) => {
        dispatch(add_level({ level, maxPrice }));
        dispatch(add_item_offset(0));
        dispatch(add_force_page(0));
    };

    // Handle language filter
    const handleLanguage = (language) => {
        dispatch(add_language({ language, maxPrice }));
        dispatch(add_item_offset(0));
        dispatch(add_force_page(0));
    };

    // Handle price filter change
    useEffect(() => {
        dispatch(add_price(price));
    }, [dispatch, price]);

    const handlePriceChange = (value) => {
        dispatch(add_price(value));
        dispatch(add_item_offset(0));
        dispatch(add_force_page(0));
    };

    // Filter courses based on the current filters applied
    const filtered_courses = courses
        .filter((item1) => categories.length ? categories.includes(item1.category) : true)
        .filter((item1) => instructors.length ? instructors.includes(item1.instructor) : true)
        .filter((item1) => levels.length ? levels.includes(item1.level) : true)
        .filter((item1) => languages.length ? languages.includes(item1.language) : true)
        .filter((item) => {
            if (!price || price.length !== 2) {
                return true; // Show all courses if no price filter is applied
            }
            return Number(item.course_price) >= price[0] && Number(item.course_price) <= price[1];
        });
    console.log('all_categories', all_categories);

    return (
        <div className="edu-course-sidebar">
            {/* Category Filter */}
            <div className="edu-course-widget widget-category">
                <div className="inner">
                    <h5 className="widget-title">Filter by Categories</h5>
                    <div className="content">
                        {all_categories.map((c, i) => (
                            <div key={i} className="edu-form-check">
                                <input
                                    onClick={() => handleCategory(c.identifier)}  // Pass the category identifier for filtering
                                    checked={categories?.includes(c?.identifier)}  // Check against category identifier
                                    type="checkbox"
                                    id={`cat-check${i + 1}`}
                                    readOnly
                                />
                                <label htmlFor={`cat-check${i + 1}`}>
                                    {c.categoryName}  {/* Render categoryName */}
                                    <span>
                                        (
                                        {course_items.filter((item) => item.category.identifier === c.identifier)?.length}
                                        )
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Instructor Filter */}
            <div className="edu-course-widget widget-instructor">
                <div className="inner">
                    <h5 className="widget-title">Instructor</h5>
                    <div className="content">
                        {all_instructors.map((instructor, i) => (
                            <div key={i} className="edu-form-check">
                                <input
                                    onClick={() => handleInstructor(instructor.identifier)}  // Pass the instructor identifier for filtering
                                    checked={instructors.includes(instructor.identifier)}  // Check against instructor identifier
                                    type="checkbox"
                                    id={`cat-check-2${i + 1}`}
                                    readOnly
                                />
                                <label htmlFor={`cat-check-2${i + 1}`}>
                                    {instructor.name}  {/* Render instructor name */}
                                    <span>
                                        (
                                        {course_items.filter((item) => item.instructor.identifier === instructor.identifier)?.length}
                                        )
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Level Filter */}
            <div className="edu-course-widget widget-level">
                <div className="inner">
                    <h5 className="widget-title">Level</h5>
                    <div className="content">
                        {all_levels.map((level, i) => (
                            <div key={i} className="edu-form-check">
                                <input
                                    onClick={() => handleLevel(level)}
                                    checked={levels.includes(level)}
                                    type="checkbox"
                                    id={`cat-check-3${i + 1}`}
                                    readOnly
                                />
                                <label htmlFor={`cat-check-3${i + 1}`}>
                                    {level}
                                    <span>
                                        ({course_items.filter((item) => item.level === level)?.length})
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Language Filter */}
            <div className="edu-course-widget widget-language">
                <div className="inner">
                    <h5 className="widget-title">Language</h5>
                    <div className="content">
                        {all_languages.map((language, i) => (
                            <div key={i} className="edu-form-check">
                                <input
                                    onClick={() => handleLanguage(language)}
                                    checked={languages.includes(language)}
                                    type="checkbox"
                                    id={`cat-check-4${i + 1}`}
                                    readOnly
                                />
                                <label htmlFor={`cat-check-4${i + 1}`}>
                                    {language}
                                    <span>
                                        ({course_items.filter((item) => item.language === language)?.length})
                                    </span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Price Filter */}
            <div className="edu-course-widget widget-rating">
                <h5 className="widget-title">Price Filter</h5>
                <div className="mt--20 mb--20">
                    <InputRange
                        MIN={minPrice}
                        MAX={maxPrice}
                        STEP={1}
                        values={price}
                        handleChanges={handlePriceChange}
                    />
                </div>
                <div className="filter-price">Price: <span>${price[0]}</span> <span>-</span> <span>${price[1]}</span></div>
            </div>

            {/* Reset Filters */}
            <div className="edu-course-widget widget-rating">
                <h5 className="widget-title mb-4">Reset Filter</h5>
                <button
                    onClick={() => dispatch(reset_filter([minPrice, maxPrice]))}
                    className="edu-btn btn-small mb--30"
                >
                    Reset Filter
                </button>
            </div>
        </div>
    );
};



export default CourseSidebar;
