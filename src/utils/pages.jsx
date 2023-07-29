import { lazy } from "react";
const HomePage = lazy(()=> import("../pages/Home"))
const Shop = lazy(()=> import("../pages/Shop"))
const SingleProduct = lazy(()=> import("../pages/SingleProduct"))
export default [
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/shop",
        element: <Shop/>,
    },
    {
        path: "/products/:id",
        element: <SingleProduct/>,
    },

]