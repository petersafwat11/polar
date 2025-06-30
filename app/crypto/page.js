"use client";
import { useEffect, useState } from "react";
import Courses from "@/ui/landing-page/courses/Courses";

export default function CryptoPage() {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    fetch("/dummy/coursesData.json")
      .then((res) => res.json())
      .then((data) => setCourseList(data));
  }, []);

  return (
    <Courses
      courseList={courseList}
      cardsPerView={4}
      sectionTitle="Crypto Courses"
    />
  );
} 