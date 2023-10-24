import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import AddProducts from "../pages/AddProducts/AddProducts";
import MyCart from "../pages/MyCart/MyCart";
import Cars from "../components/Cars/Cars";
import CarDetails from "../components/CarDetails/CarDetails";
import UpdateInfo from "../components/UpdateInfo/UpdateInfo";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brandInfo')
            },
            {
                path: '/cars/:brandName',
                element: <Cars></Cars>,
                loader: ({params}) => fetch(`http://localhost:5000/cars/${params.brandName}`)
            },
            {
                path: '/car/:id',
                element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/car/${params.id}`)
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/cart')
            },
            {
                path: '/updateInfo/:id',
                element: <PrivateRoute><UpdateInfo></UpdateInfo></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/updateInfo/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '*', 
                element: <NotFound></NotFound>
            }
        ]
    }
])


export default router;