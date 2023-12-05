import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import UserNavigation from "./userNavigation";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/AccountInfo");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" col-3">
          <UserNavigation />
        </div>
        <div className=" col-9">
          <h1>Signup</h1>
          {error && <div>{error}</div>}
          <input
            value={credentials.username}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                username: e.target.value,
              })
            }
            placeholder="username"
            style={{ marginBottom: "5px", borderRadius: "5px" }} // Inline CSS for input
          />
          <br />

          <input
            value={credentials.password}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                password: e.target.value,
              })
            }
            placeholder="password"
            style={{ marginBottom: "5px", borderRadius: "5px" }} // Inline CSS for input
          />
          <br />
          <button className="btn btn-primary" onClick={signup}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
export default Signup;
