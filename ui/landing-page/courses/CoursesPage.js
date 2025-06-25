"use client";
import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Courses from "./Courses";
import ChooseCourse from "../chooseCourse/ChooseCourse";

const CoursesPage = () => {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    fetch("/dummy/coursesData.json")
      .then((res) => res.json())
      .then((data) => setCourseList(data));
  }, []);

  return (
    <div>
      <TopBar />
      <Courses
        courseList={courseList}
        cardsPerView={4}
        sectionTitle="Our Latest Courses"
      />
      <ChooseCourse />
    </div>
  );
};

export default CoursesPage; 