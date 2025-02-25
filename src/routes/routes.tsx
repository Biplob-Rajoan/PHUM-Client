import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contract from "../pages/Contract";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [

        // Relative path
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contract",
        element: <Contract></Contract>,
      },
    ],
  },

  {
    path: "/admin",
    element: <App></App>,
    children: [

        // Relative path
      {
        index: true,               // index: true means this is the default route
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "create-Student",
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },


  // Absoulte path
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
