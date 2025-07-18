"use client";
import React from "react";
import { Footer, Header } from "../../../layout";
import BreadcrumbThree from "../../breadcrumb/breadcrumb-3";
import CourseArea from "./course-area";
import TeamArea from "./team-area";
import useParallax from "@/hooks/use-parallax";

const TeamDetailsMain = ({ team }) => {
  useParallax();
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header no_top_bar={true} />
        <BreadcrumbThree
          title="Instructor Details"
          subtitle="Instructor Details"
        />
        <TeamArea team={team} />
        <CourseArea instructorId={team.id} />
        <Footer style_2={"footer-dark bg-image footer-style-2"} />
      </div>
    </div>
  );
};

export default TeamDetailsMain;
