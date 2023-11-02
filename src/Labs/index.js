import { Navigate, Route, Routes, useLocation } from "react-router";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import { Link } from "react-router-dom";
import Nava from "../Nava";
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
  const { pathname } = useLocation();
  return (
    <Provider store={store}>
      <div className="container">
        <h1>React Labs</h1>
        {/* {JSON.stringify(location)} this prints out the path*/}
        {/* <div className="nav nav-pills">
        <Link
          to="/Labs/a3"
          className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}
        >
          Assignment 3
        </Link>
        <Link
          to="/Labs/a4"
          className={`nav-link ${pathname.includes("a4") ? "active" : ""}`}
        >
          Assignment 4
        </Link>
        <Link
          to="/Labs/a5"
          className={`nav-link ${pathname.includes("a5") ? "active" : ""}`}
        >
          Assignment 5
        </Link>
      </div> */}
        <Nava />
        <Routes>
          <Route path="/" element={<Navigate to="a4" />} />
          <Route path="/a3/*" element={<Assignment3 />} />
          <Route path="/a4/*" element={<Assignment4 />} />
          <Route path="/a5" element={<Assignment5 />} />
        </Routes>
        {/* <Assignment3 />
      <Assignment4 />
      <Assignment5 /> */}
      </div>
    </Provider>
  );
}
export default Labs;
