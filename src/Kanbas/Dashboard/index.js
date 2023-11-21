//import db from "../Database";
import db from "../Database";
import { Link } from "react-router-dom";
import besttaImage from "./besttta.png";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import "./index.css";
import { PiNotePencil } from "react-icons/pi";
import { useState, useEffect } from "react";
import * as client from "../Courses/client";




function Dashboard({}) {
  const [courses, setCourses] = useState([]); //defined in here and in Kanbas/index.js (beware)
  const [course, setCourse] = useState({});

  const fetchCourses = async () => {
    // const promise = axios.get("http://localhost:4000/api/courses"); //promise is a callback
    // //console.log(promis);  //promise does not block single thread, will be executed once have a response
    // promise.then((response) => {
    //   console.log(response.data); //data is the array of todos
    //   setCourses(response.data); //setTodos is a function that will update the todos
    // });
    //const response = await axios.get("http://localhost:4000/api/courses"); //newer syntax, compiles to above syntax
    const courses = await client.fetchCourses();
    setCourses(courses);
  };

  const addCourse = async () => {
    const newCourse = await client.addCourse(course);
    setCourses([newCourse, ...courses]);
  };

  const deleteCourse = async (courseId) => {
    try {
    await client.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId)); //
    } catch (error) {
      console.log(error);
    }
  };

  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(courses.map((c) => (c._id === course._id ? course : c)));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

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
              placeholder="Course Name"
              className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
          </div>
          <div className="  col-lg-2">
            <input
              value={course.number}
              placeholder="Course Number"
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
              onClick={addCourse}
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
                  to={`/Kanbas/Courses/${course._id}`}    //clicking on course name will fetchCourse by id
                  className="btn btn-primary"             // will be in client.js (fetchCourse)
                >
                  {course.name}
                  {/* deleting button of A4 */}
                </Link>
                <div>
                  <button
                    className="btn btn-warning float-end btn-sm"
                    onClick={() => {
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
                </div>
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
