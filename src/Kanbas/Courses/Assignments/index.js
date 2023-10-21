import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { BiSolidDownArrow } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import { PiNotePencilLight } from "react-icons/pi";
import { AiFillCheckCircle } from "react-icons/ai";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div className="container-fluid">
      <div className="row assignment-top-bar">
        <div className="btn-toolbar">
          <input
            type="text"
            className="form-control form-flex-grow input-section"
            placeholder="Search for Assignment"
          />
          <button className="btn btn-light ml-2 groupbutton">+Group</button>
          <button className="btn btn-danger ml-2 plusassignment">
            +Assignment
          </button>
          <button className="btn btn-secondary ml-2 ellipsis-icon">
            {" "}
            <i className="fa fa-ellipsis-v " aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <hr />

      <div className="row assignment-bot-list">
        <div className="row">
          <div className="col-12">
            <div className="list-group">
              <div className="list-group-item assignment-header d-flex justify-content-between">
                {/* Left Content */}
                <div className="d-flex align-items-center">
                  <i
                    className="fa fa-ellipsis-v ellipsis-icon"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa fa-ellipsis-v ellipsis-icon"
                    aria-hidden="true"
                  ></i>
                  <BiSolidDownArrow className="arrow-icon" />
                  <h2 className="ASStag">ASSIGNMENTS</h2>
                </div>

                {/* Right Content */}
                <div className="d-flex align-items-center">
                  <span className="pill">40% of Total</span>
                  <GoPlus className="plus-icon" />
                  <i
                    className="fa fa-ellipsis-v ellipsis-icon right-one"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>

              {courseAssignments.map((assignment) => (
                <Link
                  key={assignment._id}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="list-group-item assignment-item"
                  style={{ borderLeft: "6px solid green" }}
                >
                  <div className="assignment-details">
                    <i
                      className="fa fa-ellipsis-v ellipsis-icon"
                      aria-hidden="true"
                    ></i>

                    <span className="assignment-icon">
                      <PiNotePencilLight />
                    </span>
                    <div>
                      <div className="assignment-title">{assignment.title}</div>
                      <div>
                        <span style={{ color: "red" }}>Multiple Modules</span> |
                        Due {assignment.dueDate}
                      </div>
                    </div>
                  </div>
                  <div className="assignment-points">
                    <AiFillCheckCircle className="AiFillCheckCircle" />
                    <i
                      className="fa fa-ellipsis-v ellipsis-icon"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignments;
