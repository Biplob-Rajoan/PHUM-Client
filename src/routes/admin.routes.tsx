import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";


type TRoute = {
  path: string;
  element: ReactNode;
}

type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
}



const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard> </AdminDashboard>,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },
];


export const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    });
  }


  return acc;
}, []);





//* PROGRAMMATIC WAY

export const adminRoutes = adminPaths.reduce((acc: TRoute, item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return acc;
}, []);


//!HARD CODED WAY


// export const adminPaths = [

//     // Relative path
//   {
//     path: "dashboard",               // index: true means this is the default route
//     element: <AdminDashboard></AdminDashboard>,
//   },
//   {
//     path: "create-Student",
//     element: <CreateStudent></CreateStudent>,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty></CreateFaculty>,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin></CreateAdmin>,
//   },
// ];
