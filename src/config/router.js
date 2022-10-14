import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../screens/Home";
import Jeans from "../screens/Jeans";
import T_shirt from "../screens/T_shirt";
import Zipper from "../screens/Zipper";
import NotFound from "../screens/NotFound";
import Dashboard from "../screens/Dashboard";
import "../App.css";


function AppRouter(props) {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home details={props.details} />} />
          <Route path="jeans" element={<Jeans details={props.details} />} />
          <Route path="t-shirt" element={<T_shirt details={props.details} />} />
          <Route path="zipper" element={<Zipper details={props.details} />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
