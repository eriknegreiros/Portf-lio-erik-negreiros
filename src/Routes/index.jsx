import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from '../Pages/Home/index'

const RoutesMain = () => {
  <>
    <Routes>
      <Route index element={<HomePage/>}   />
    </Routes>
  </>;
};

export default RoutesMain;
