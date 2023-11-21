import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./ModuleList.css";
import { AiFillCheckCircle } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import { findModulesForCourse, createModule } from "./client";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
    const handleUpdateModule = async () => {
      const status = await client.updateModule(module);
      dispatch(updateModule(module));
    };


  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });

  // const addModule = (module) => {
  //   // added for moduels a4
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //     ...modules,
  //   ]);
  // };

  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter((module) => module._id !== moduleId));
  // };

  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // };

  return (
    // added for moduels a4
    <div className="row ">
      <div className="col-12">
        <div className="row ">
          <div className="col-7"></div>
          <div className="col-4 add-description-container">
            <li className="list-group-item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-8">
                    {" "}
                    <input
                      className="form-control mb-2"
                      value={module.name}
                      onChange={(e) =>
                        dispatch(setModule({ ...module, name: e.target.value }))
                      }
                    />
                    <textarea
                      className="form-control"
                      value={module.description}
                      onChange={(e) =>
                        dispatch(
                          setModule({ ...module, description: e.target.value })
                        )
                      }
                    />
                  </div>
                  <div className="col-4">
                    {" "}
                    <button
                      className="btn btn-success form-control mb-2"
                      onClick={handleAddModule}
                    >
                      Add
                    </button>
                    <button
                      className="btn btn-primary form-control"
                      onClick={handleUpdateModule}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </div>
          <div className="col-1"></div>
        </div>

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
                <div className="description-container">
                  {module.description}
                </div>
              </div>

              {/* Right Side - Action Buttons */}
              <div className="module-actions">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteModule(module._id)}
                >
                  Delete
                </button>

                <button
                  className="btn btn-success btn-sm"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>

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
