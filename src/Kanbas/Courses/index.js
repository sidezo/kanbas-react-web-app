//import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useLocation } from "react-router";
import NavigBar from "./NavigBar";
import { Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import * as client from "./client";

function Courses({ courses }) {
  const { courseId } = useParams();
  //const course = courses.find((course) => course._id === courseId);
  const [course, setCourse] = useState({});    //this is an empty object
  const { pathname } = useLocation();
  const [fisrt, kanbas, cs, id, screen] = pathname.split("/");

  const fetchCourse = async () => {
    const course = await client.fetchCourse(courseId);
    setCourse(course);
  }
 useEffect(() => {
    fetchCourse();
  } , []);

  return (
    <div className="container-fluid">
      <div className="row">
        <NavigBar courseName={course.name} screen={screen} />
        <br />
        <hr />
      </div>
      <div className="row">
        <div className="d-none d-md-block col-md-2 col-lg-2">
          <CourseNavigation />
        </div>
        <div className="col">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
