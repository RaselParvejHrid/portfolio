import React from "react";
import { Outlet } from "react-router-dom";
import AppNavBar from "../../components/AppNavBar";
import MyFooter from "../../components/MyFooter";

const AppLayout = () => {
  return (
    <>
      <AppNavBar />
      <Outlet />
      <MyFooter />
    </>
  );
};

export default AppLayout;
