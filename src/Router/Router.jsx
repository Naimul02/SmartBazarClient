import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import SingUp from "../Pages/SingUp/SingUp";
import SingIn from "../Pages/SingIn/SingIn";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../components/ShopComponent/ProductDetails";

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
        path: "/singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/singin",
        element: <SingIn></SingIn>,
      },
    ],
  },
]);

export default router;
