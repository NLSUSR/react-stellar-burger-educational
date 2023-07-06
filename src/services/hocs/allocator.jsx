import { Authorized, Unauthorized } from "./protected-route";
import HomePage from "../../pages/home-page/home-page";
import NotFound from "../../pages/not-found/not-found";
import Login from "../../pages/login/login";
import Logout from "../../pages/logout/logout";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import IngredientPage from "../../pages/ingredient-page/ingredient-page";
import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import Profile from "../../pages/profile/profile";
import EmptyPage from "../../pages/empty-page/empty-page";
// import Orders from "../../orders/orders";
// import Feed from "../../feed/feed";
// import DynamicRoute from "../dynamic-route/dynamic-route";
// import { mock } from "../../../utils-for-application/data";

import React from "react";
import { useSelector } from "react-redux";
import * as RRD from "react-router-dom";

const Allocator = () => {
  const navigate = RRD.useNavigate();
  const location = RRD.useLocation();

  const background = location.state && location.state.background;
  const ingredients = useSelector((s) => s.data.response?.data);

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <RRD.Routes>
      <RRD.Route path="*" element={<NotFound />} />
      <RRD.Route path="/" element={<HomePage />} />
      <RRD.Route path="/login" element={<Unauthorized element={<Login />} />} />
      <RRD.Route path="/logout" element={<Authorized element={<Logout />} />} />
      <RRD.Route path="/feed" element={<Authorized element={<NotFound />} />} />
      <RRD.Route
        path="/profile"
        element={<Authorized element={<Profile />} />}
      />
      <RRD.Route
        path="/register"
        element={<Unauthorized element={<Register />} />}
      />
      <RRD.Route
        path="/forgot-password"
        element={<Unauthorized element={<ForgotPassword />} />}
      />
      <RRD.Route
        path="/reset-password"
        element={<Unauthorized element={<ResetPassword />} />}
      />
      <RRD.Route
        path="/profile/orders"
        element={<Authorized element={<EmptyPage />} />}
      />
      {!!ingredients && !!background ? (
        <RRD.Route
          path="/ingredients/:id"
          element={
            <React.Fragment>
              <HomePage />
              <Modal close={handleClose} children={<IngredientDetails />} />
            </React.Fragment>
          }
        />
      ) : (
        <RRD.Route path="/ingredients/:id" element={<IngredientPage />} />
      )}
      {/* <RRD.Route
          path="/feed/:id"
          element={<Authorized element={<DynamicRoute data={mock} />} />}
        />
        <RRD.Route
          path="/profile/orders/:id"
          element={<Authorized element={<DynamicRoute data={mock} />} />}
        /> */}
    </RRD.Routes>
  );
};

export default Allocator;
