import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../components/ShopComponent/ProductDetails";
import Singup from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      },
      {
        path: "/product/details/:id",
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/signup",
        element: <Singup></Singup>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
