import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home/Home";
import Login from "../Home/Log-register/Login";
import Register from "../Home/Log-register/Register";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import Courses from "../components/Courses/Courses";
import CourseDetails from "../components/courseDetails/CourseDetails";
import AddCourses from "../Dashboard/addCourses/AddCourses";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import PrivateRoute from "./PrivateRoute";
import MyCourses from "../Dashboard/MyCourses/MyCourses";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/courses",
                element: <Courses></Courses>
            },
            {
                path: "/courseDetails/:id",
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:3000/courses/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                index: true,
                element: <DashboardHome></DashboardHome>
            },
            {
                path: "addcourse",
                element: <AddCourses></AddCourses>
            },
            {
                path: "mycourses",
                element: <MyCourses></MyCourses>
            }
        ]

    }
]);