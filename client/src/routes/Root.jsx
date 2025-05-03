import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import NotFound from "../Layout/NotFound";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Carriers from "../pages/Carriers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/carriers" element={<Carriers/>} />
      <Route path="/contactus" element={<ContactUs />} />
    </Route>
  )
);

const Root = () => {
  return <RouterProvider router={router} />;
};

export default Root;
