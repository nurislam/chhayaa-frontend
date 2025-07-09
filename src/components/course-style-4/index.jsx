'use client'
import React from 'react';
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import CourseFourArea from './course-4-area';
import useParallax from '@/hooks/use-parallax';

const CourseStyleFourMain = () => {
    useParallax();
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title="Course Style 4" subtitle="Course Style 4" />
                <CourseFourArea/>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default CourseStyleFourMain;