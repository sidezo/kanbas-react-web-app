import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import db from "./Database";
import axios from "axios";
import { useState } from "react";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import Signin from "./users/signin";
import AccountInfo from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([
      ...courses,
      { ...course, _id: new Date().getTime().toString() },
    ]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row">
          <div className="d-none d-md-block col-sm-1 col-md-2 col-lg-auto p-0">
            <KanbasNavigation />
          </div>
          <div className="col-sm-12 col-md-10">
            <Routes>
              <Route path="/" element={<Navigate to="signin" />} />
              {/* Start for a6 */}
              <Route path="signin" element={<Signin />} />
              <Route path="signup" element={<Signup />} />
              <Route path="AccountInfo" element={<AccountInfo />} />
              <Route path="AccountInfo/:id" element={<AccountInfo />} />
              <Route path="Home" element={<Signin />} />
              <Route path="Search" element={<Signin />} />
              <Route path="AllUsers" element={<UserTable />} />
              {/* END of a6 */}

              <Route path="Account" element={<Account />} />
              <Route
                path="Dashboard"
                element={
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                }
              />
              <Route
                path="Courses/:courseId/*"
                element={<Courses courses={courses} />}
              />

              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
              <Route path="History" element={<h1>History</h1>} />
              <Route path="Studio" element={<h1>Studio</h1>} />
              <Route path="Commons" element={<h1>Commons</h1>} />
              <Route path="Help" element={<h1>Help</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
