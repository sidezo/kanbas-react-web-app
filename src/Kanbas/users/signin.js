import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserNavigation from "./userNavigation";

function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(""); // Add an error state to your component
  const signin = async () => {
    try {
      const response = await client.signin(credentials);
      if (response) {
        // Check if the response is as expected
        navigate("/Kanbas/AccountInfo");
      } else {
        // Handle case where response may not have needed data
        setError("No data received from the server.");
      }
    } catch (error) {
      // Handle error (e.g., show an error message to the user)
      setError(
        error.response?.data?.message || "An error occurred during sign in."
      );
    }
  };

  //   const navigate = useNavigate();   //useNavigate hook
  //   const signin = async () => {
  //     await client.signin(credentials);
  //     navigate("/Kanbas/AccountInfo");

  //     //this useNaviate hook is meant to
  //     //redirect to the account page
  //   };      //after the server returns his/her credentials

  return (
    <div className="container-fluid">
      <div>
        {/* ... other component code ... */}
        {error && <div className="error-message">{error}</div>}
        {/* ... other component code ... */}
      </div>
      <div className="row">
        <div className=" col-3">
          <UserNavigation />
        </div>

        <div className=" col-9">
          {" "}
          <div>
            <h1>Signin</h1>
            <input
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              placeholder="username"
              style={{ marginBottom: "5px", borderRadius: "5px" }} // Inline CSS for input
            />
            <br />
            <input
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              placeholder="password"
              style={{ marginBottom: "5px", borderRadius: "5px" }} // Inline CSS for input
            />
            <br />
            <button onClick={signin} className="btn btn-primary">
              {" "}
              Signin{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signin;
