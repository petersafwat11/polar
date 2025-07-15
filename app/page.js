import Home from "@/ui/Home/Home";
import CoursesAPI from "@/utils/courses";

const page = async ({}) => {
  // Fetch courses with all parameters
  let coursesData = null;
  try {
    coursesData = await CoursesAPI.getAllCourses();
  } catch (error) {
    console.error("Error fetching courses:", error);
    coursesData = { data: { data: [] } };
  }
  return <Home courses={coursesData?.data?.data || []} />;
};

export default page;
