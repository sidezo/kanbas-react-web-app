import React, { useState, useEffect } from "react";
import axios from "axios";
//const API = "http://localhost:4000/a5";     //for local server
const API = "https://kanbas-node-server-app-t76m.onrender.com/a5";   //for render server

function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);
  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get(`${API}/welcome`);
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);
  const [result, setResult] = useState(0);
  const fetchSum = async (a, b) => {
    const response = await axios.get(`${API}/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a, b) => {
    const response = await axios.get(`${API}/subtract/${a}/${b}`);
    setResult(response.data);
  };

  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>
      <h4>Calculator</h4>
      <input
        onChange={(e) => setA(e.target.value)}
        className="form-control"
        type="number"
        value={a}
      />
      <input
        onChange={(e) => setB(e.target.value)}
        className="form-control"
        type="number"
        value={b}
      />

      <input
        value={result}
        className="form-control mb-2"
        type="number"
        readOnly
      />
      <h3>Fetch Result</h3>
      <button
        onClick={() => fetchSum(a, b)}
        className="btn btn-primary mb-2  w-100"
      >
        Fetch Sum of {a} + {b}
      </button>
      <button
        onClick={() => fetchSubtraction(a, b)}
        className="btn btn-danger me-2 w-100"
      >
        Fetch Substraction of {a} - {b}
      </button>

      <h3>Query Parameters</h3>
      <a //using the question mark to add the query parameters
        href={`${API}/calculator?a=${a}&b=${b}&operation=add`}
        className="btn btn-primary"
      >
        Add {a} + {b}
      </a>
      <a
        href={`${API}/calculator?a=${a}&b=${b}&operation=subtract`}
        className="btn btn-danger"
      >
        Subtract {a} - {b}
      </a>

      <h3>Path Parameters</h3>
      <a // this is the link to the server
        href={`${API}/add/${a}/${b}`}
        className="btn btn-primary"
      >
        Add {a} + {b}
      </a>
      <a href={`${API}/subtract/${a}/${b}`} className="btn btn-danger">
        Substract {a} - {b}
      </a>
    </div>
  );
}
export default EncodingParametersInURLs;
