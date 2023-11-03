import db from "../Database";
import { Link } from "react-router-dom";
import besttaImage from "./besttta.png";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import "./index.css";
import { PiNotePencil } from "react-icons/pi";
import { useState } from "react";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div>
      <h1 style={{ fontWeight: "300" }}>Dashboard</h1>

      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      {/* add new course, A4 */}
      <h5>Course</h5>

      <div className="container-fluid updateAdd">
        <div className="row">
          <div className="col-lg-1  "></div> {/* Empty space */}
          <div className="col-lg-2 ">
            <input
              value={course.name}
              className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
          </div>
          <div className="  col-lg-2">
            <input
              value={course.number}
              className="form-control"
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
            />
          </div>
          <div className="col-lg-2">
            <input
              value={course.startDate}
              className="form-control"
              type="date"
              onChange={(e) =>
                setCourse({ ...course, startDate: e.target.value })
              }
            />
          </div>
          <div className=" col-lg-2 ">
            <input
              value={course.endDate}
              className="form-control float-end"
              type="date"
              onChange={(e) =>
                setCourse({ ...course, endDate: e.target.value })
              }
            />
          </div>
          <div className="col-lg-3">
            <button
              className="btn btn-success float-end buttonAdd"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-primary float-end"
              onClick={updateCourse}
            >
              Update
            </button>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course, index) => (
          <div
            key={course._id}
            className="col-xl-4 col-lg-6 col-sm-6 col-md-6 col-xs-6 mb-4 Dashboard"
          >
            <div className="card h-100 position-relative">
              <IoEllipsisVerticalSharp className="EllipsisVertical" />
              <img
                src={besttaImage}
                className="card-img-top"
                alt={course.name}
              />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <Link
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course.name}
                  {/* deleting button of A4 */}
                  <button
                    className="btn btn-warning float-end btn-sm"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                  {/* editing button of A4, copies the course into the form above*/}
                  <button
                    className="btn btn-danger float-end buttonDanger btn-sm"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                </Link>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <PiNotePencil className="PiNotePencil" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
