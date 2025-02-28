
import OfferedCourse from "../pages/Student/OfferedCourse";
import StudentDashboard from "../pages/Student/studentDashboard";

export const studentPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <StudentDashboard></StudentDashboard>
    },
    {
        name: "Offered-course",
        path: "offered-course",
        element: <OfferedCourse></OfferedCourse>
    }
]