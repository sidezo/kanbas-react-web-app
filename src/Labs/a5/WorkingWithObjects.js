import { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  //const URL = "http://localhost:4000/a5/assignment";

  const URL = "https://kanbas-node-server-app-t76m.onrender.com/a5/assignment";


  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <hr />
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a
        href={URL}
        className="btn btn-primary me-2"
      >
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        href={`${URL}/title`}
        className="btn btn-primary me-2"
      >
        Get Assignment Title
      </a>
      <h4>Modifying Properties</h4>
      <a
        href={`${URL}/title/${assignment.title}`} //update title button, encodes the title with temperarily created assignment title
        className="btn btn-primary me-2 float-end" // and sends it to the server, which then updates the title
      >
        Update Title
      </a>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text"
      />
      <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>
      <h4 style={{ color: "red" }}>ExtraCredit 3.2.4</h4>

      <a
        href={`${URL}/score/${assignment.score}`} //update title button, encodes the title with temperarily created assignment title
        className="btn btn-primary me-2 float-end" // and sends it to the server, which then updates the title
      >
        Update score
      </a>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.value })
        }
        className="form-control mb-2 w-75"
        type="text"
        placeholder="Enter a number"
      />

      <a
        href={`${URL}/completed/${assignment.completed}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Assignment Status
      </a>
      <input
        type="checkbox"
        checked={assignment.completed} //initially set to false
        onChange={
          (e) => setAssignment({ ...assignment, completed: e.target.checked }) //when checked, it sets the assignment to true
        }
        className="form-check-input"
      />
      <label className="form-check-label" htmlFor="completedCheckbox">
        Assignment Completed
      </label>
      <hr />
    </div>
  );
}

export default WorkingWithObjects;
