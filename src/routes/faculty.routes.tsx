import FacultyDashboard from "../pages/faculty/facultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard></FacultyDashboard>,
  },
  {
    name: "Offered-course",
    path: "offered-course",
    element: <OfferedCourse></OfferedCourse>
  },
];
