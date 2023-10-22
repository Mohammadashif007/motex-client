import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import AddProducts from "../pages/AddProducts/AddProducts";
import MyCart from "../pages/MyCart/MyCart";
import Cars from "../components/Cars/Cars";

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
                loader: ({params}) => fetch(`http://localhost:5001/cars/${params.brandName}`)
            },
            {
                path: '/addProduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            }
        ]
    }
])


export default router;