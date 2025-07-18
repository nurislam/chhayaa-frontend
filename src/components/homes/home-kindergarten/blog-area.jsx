import Link from 'next/link';
import React from 'react';
import { blog_data } from '../../../data';

const blog_items = blog_data.filter(blog => blog.kindergarten_blog);

const BlogArea = () => {
    return (
        <div className="edu-blog-area blog-area-4 edu-section-gap">
            <div className="container">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title pre-textsecondary">Our Articles</span>
                    <h2 className="title">Check Out Our Latest Blog</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>

                <div className="row g-5">
                    {blog_items.map((blog) => {
                        const { id, img, title, category, comment, date, sm_desc } = blog;
                        return (
                            <div key={id} className="col-lg-4 col-md-6 col-12" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <div className="edu-blog blog-style-3">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <Link href={`/blog-details/${id}`}>
                                                    <img src={img} alt="Blog Images" />
                                            </Link>
                                            <div className="read-more-btn">
                                                <Link href={`/blog-details/${id}`} className="btn-icon-round">
                                                    <i className="icon-4"></i>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="content">
                                            <div className="category-wrap">
                                                <Link href={`/blog-details/${id}`} className="blog-category">
                                                    {category}
                                                </Link>
                                            </div>
                                            <h5 className="title">
                                                <Link href={`/blog-details/${id}`}>
                                                   {title}
                                                </Link>
                                            </h5>
                                            <ul className="blog-meta">
                                                <li><i className="icon-27"></i>{date}</li>
                                                <li><i className="icon-28"></i>Com {comment}</li>
                                            </ul>
                                            <p>{sm_desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BlogArea;