import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import AddProducts from "../pages/AddProducts/AddProducts";
import MyCart from "../pages/MyCart/MyCart";
import Cars from "../components/Cars/Cars";
import CarDetails from "../components/CarDetails/CarDetails";
import UpdateInfo from "../components/UpdateInfo/UpdateInfo";

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
                element: <CarDetails></CarDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/car/${params.id}`)
            },
            {
                path: '/addProduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>,
                loader: () => fetch('http://localhost:5000/cart')
            },
            {
                path: '/updateInfo/:id',
                element: <UpdateInfo></UpdateInfo>,
                loader: ({params}) => fetch(`http://localhost:5000/updateInfo/${params.id}`)
            }
        ]
    }
])


export default router;