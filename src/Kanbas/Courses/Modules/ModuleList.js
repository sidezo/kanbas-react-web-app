import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./ModuleList.css";
import { AiFillCheckCircle } from "react-icons/ai";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div className="row wd-modules-lists-dropdown">
      <div className="col-12">
        <br />
        <br />
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div
              key={index}
              className="module-item  p-2 d-flex justify-content-between align-items-center"
            >
              {/* Left Side - Icon and Title */}
              <div className="d-flex align-items-center">
                <i
                  className="fa fa-ellipsis-v ellipsis-icon"
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-ellipsis-v ellipsis-icon"
                  aria-hidden="true"
                ></i>
                <span className="left dropdown-toggle module-title ms-2 custom-dropdown-toggle">
                  {module.name}
                </span>
              </div>

              {/* Right Side - Action Buttons */}
              <div className="module-actions">
                <span className="dropdown-toggle">
                  <button className="btn btn-light me-2">
                    <AiFillCheckCircle
                      className="AiFillCheckCircle"
                      aria-hidden="true"
                    />
                  </button>
                </span>
                <button className="btn btn-light me-2">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
                <button className="btn btn-light">
                  <i
                    className="fa fa-ellipsis-v ellipsis-icon"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ModuleList;
