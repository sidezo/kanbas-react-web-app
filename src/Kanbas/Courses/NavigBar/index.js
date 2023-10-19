import { FiMenu } from "react-icons/fi";
import "./index.css";
import { IoIosArrowForward } from "react-icons/io";
import { BiGlasses } from "react-icons/bi";
function NavigBar({ courseName, screen }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand" href="#">
        <FiMenu className="navigbar-icon" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link courseLink" href="#">
              {courseName}
            </a>
          </li>
          <li className="nav-item">
            <IoIosArrowForward className="arrow-icon" />
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {screen}
            </a>
          </li>
        </ul>
      </div>

      {/* this button only shows up on large screens, otherwise
       will colide with bootstrap dropdown menu, future need to 
       implement it inside dropdown menu after large */}
      <button className="studentView btn btn-outline-secondary ml-auto d-none d-lg-block">
        <BiGlasses /> Student View
      </button>
    </nav>
  );
}

export default NavigBar;
