import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="AssignmentEditor">
      <div className="header">
        <span className="published-container">
          <AiFillCheckCircle className="AiFillCheckCircle" aria-hidden="true" />
          <span className="published-text">Published</span>
          <button className="btn btn-light buttonTag">
            <BsThreeDotsVertical
              className="BsThreeDotsVertical"
              aria-hidden="true"
            />
          </button>
        </span>
      </div>
      <hr />
      <h2 className="AssignmentName">Assignment Name</h2>
      <input value={assignment.title} className="form-control mb-2" />
      <hr />
      <div className="header">
        <span className="published-container">
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger me-2"
          >
            Cancel
          </Link>
          <button onClick={handleSave} className="btn btn-success">
            Save
          </button>
        </span>
      </div>
    </div>
  );
}

export default AssignmentEditor;
