import "./StatusBar.css";

import { FaStream, FaBell, FaChartLine, FaHome } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";
import { FaFileImport } from "react-icons/fa";
import { BsBoxArrowRight } from "react-icons/bs";
import { PiNumberCircleFiveFill } from "react-icons/pi";
function StatusBar() {
  return (
    <div className="container">
      {/* First Section */}
      <div className="row mb-4">
        <div className="col-12">
          <ul className="list-group StatusBar-top">
            <li className="list-group-item  ">
              <button className="btn btn-light">
                <a href="#"></a>
                <FaFileImport className="icons" /> Import Existing Content
              </button>
            </li>
            <li className="list-group-item ">
              <button className="btn btn-light">
                <a href="#"></a>
                <BsBoxArrowRight className="icons" />
                Import from Commons
              </button>
            </li>
            <li className="list-group-item  ">
              <button className="btn btn-light">
                <a href="#"></a>
                <FaHome className="icons" /> Choose Home Page
              </button>
            </li>
            <li className="list-group-item  ">
              <button className="btn btn-light">
                <a href="#"></a>
                <FaStream className="icons" /> View Course Stream
              </button>
            </li>
            <li className="list-group-item  ">
              <button className="btn btn-light">
                <a href="#"></a>
                <AiFillAlert className="icons" /> New Announcement
              </button>
            </li>
            <li className="list-group-item ">
              <button className="btn btn-light">
                <a href="#"></a>
                <FaChartLine className="icons" /> New Analytics
              </button>
            </li>
            <li className="list-group-item ">
              <button className="btn btn-light">
                <a href="#"></a>
                <FaBell className="icons" /> View Course Notifications
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* To Do Section */}
      <div className="row mb-4">
        <div className="col-12 StatusBar-bottom">
          <h4>To Do</h4>
          <hr />
          <div className="card mb-2">
            <div className="card-body body-content-title">
              <PiNumberCircleFiveFill className="icons" />
              Grade A1 - ENV + HTML <br />
              <div className="body-content-details">
                100 points • Sep 18 at 11:59pm
              </div>
            </div>
          </div>
          <div className="card mb-2">
            <div className="card-body body-content-title">
              <PiNumberCircleFiveFill className="icons" />
              Grade A2 - CSS + BOOTSTRAP <br />
              <div className="body-content-details">
                100 points • Oct 2 at 11:59pm
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
