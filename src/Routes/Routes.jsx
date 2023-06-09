import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Services from "../Pages/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/checkout/:id',
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      }
    ]
  },
]);
export default router;