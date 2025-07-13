import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart_course } from "../../redux/features/cart-slice";
import {
  add_to_wishlist,
  wishlistItems,
} from "../../redux/features/wishlist-slice";

const CourseTypeOne = ({ data, classes }) => {
  const { cartCourses } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const wishlists = useSelector(wishlistItems);
  const isWishlistSelected = wishlists.find(
    (w) => Number(w.id) === Number(data.id)
  );

  const handleWishlist = (course_item) => {
    if (wishlists.find((i) => i.id === course_item.id)) {
      dispatch(
        add_to_wishlist({
          change_type: "remove_wishlist",
          item: {
            id: course_item.id,
            img: `${course_item.imageUrl}`,
            title: course_item.title,
            price: course_item.price,
          },
        })
      );
    } else {
      dispatch(
        add_to_wishlist({
          change_type: "add_wishlist",
          item: {
            id: course_item.id,
            img: `${course_item.imageUrl}`,
            title: course_item.title,
            price: course_item.price,
          },
        })
      );
    }
  };

  // handle add to cart
  const handleAddToCart = (course) => {
    dispatch(
      cart_course({
        id: course.id,
        img: `${course_item.imageUrl}`,
        price: course.price,
        title: course.title,
      })
    );
  };

  return (
    <div
      className={`edu-course course-style-1 ${
        classes ? classes : ""
      } hover-button-bg-white`}
    >
      <div className="inner">
        <div className="thumbnail">
          <Link href={`/course-details/${data.id}`}>
            <img
              src={data.imageUrl}
              alt={data.title}
              width={270}
              height={200}
              style={{ objectFit: "cover" }}
            />
          </Link>
          <div className="time-top">
            <span className="duration">
              <i className="icon-61"></i>
              {data.duration}
            </span>
          </div>
        </div>
        <div className="content">
          <span className="course-level">{"Advanced"}</span>
          <h6 className="title">
            <a href="#">{data.title}</a>
          </h6>
          <div className="course-rating">
            <div className="rating">
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
            </div>
            <span className="rating-count">({data.rating} Rating)</span>
          </div>
          <div className="course-price">${data.price}</div>
          <ul className="course-meta">
            <li>
              <i className="icon-24"></i>
              {data.totalLesson} Lessons
            </li>
            <li>
              <i className="icon-25"></i>
              {data.TotalStudents} Students
            </li>
          </ul>
        </div>
      </div>

      <div className="course-hover-content-wrapper">
        <button
          onClick={() => handleWishlist(data)}
          className={`wishlist-btn ${isWishlistSelected ? "active" : ""}`}
        >
          <i className="icon-22"></i>
        </button>
      </div>

      <div className="course-hover-content">
        <div className="content">
          <button
            onClick={() => handleWishlist(data)}
            className={`wishlist-btn ${isWishlistSelected ? "active" : ""}`}
          >
            <i className="icon-22"></i>
          </button>
          <span className="course-level">{"Advanced"}</span>
          <h6 className="title">
            <Link href={`/course-details/${data.id}`}>{data.identifier}</Link>
          </h6>
          <div className="course-rating">
            <div className="rating">
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
            </div>
            <span className="rating-count">({data.rating} Rating)</span>
          </div>
          <div className="course-price">${data.price}</div>
          <p>{data.title}</p>
          <ul className="course-meta">
            <li>
              <i className="icon-24"></i>
              {data.totalLesson} Lessons
            </li>
            <li>
              <i className="icon-25"></i>
              {data.TotalStudents} Students
            </li>
          </ul>
          <a
            onClick={() => handleAddToCart(data)}
            className="edu-btn btn-secondary btn-small"
            style={{ cursor: "pointer" }}
          >
            {cartCourses.some((item) => item.id === data.id)
              ? "Added to cart"
              : "Add to cart"}
            <i className="icon-4"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseTypeOne;
