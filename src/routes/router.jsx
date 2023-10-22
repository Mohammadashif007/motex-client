import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import AddProducts from "../pages/AddProducts/AddProducts";
import MyCart from "../pages/MyCart/MyCart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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