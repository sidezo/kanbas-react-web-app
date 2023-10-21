import db from "../Database";
import { Link } from "react-router-dom";
import besttaImage from './besttta.png';
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import "./index.css";
import { PiNotePencil } from "react-icons/pi";

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1 style={{ fontWeight: "300" }}>Dashboard</h1>

      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course, index) => (
          <div key={course._id} className="col Dashboard">
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
