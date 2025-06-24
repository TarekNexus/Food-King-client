import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AuthLayOut from "../Root/AuthLayOut";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../components/Error";
import AvailableFoods from "../Pages/AvailableFoods";
import AddFood from "../Pages/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest";
import PrivetRoute from "../Provider/PrivetRoute";
import FoodDetails from "../Pages/FoodDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/AvailableFoods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/AddFood",
        element: (
          <PrivetRoute>
            <AddFood></AddFood>
          </PrivetRoute>
        ),
      },
      {
        path: "ManageMyFoods",
        element: (
          <PrivetRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivetRoute>
        ),
      },
      {
        path: "MyFoodRequest",
        element: (
          <PrivetRoute>
            {" "}
            <MyFoodRequest></MyFoodRequest>
          </PrivetRoute>
        ),
      },
      {
        path: "/foods/:id",
        element: (
          <PrivetRoute>
            {" "}
            <FoodDetails></FoodDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/auth",
        element: <AuthLayOut></AuthLayOut>,
        children: [
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
        ],
      },
    ],
  },
]);
