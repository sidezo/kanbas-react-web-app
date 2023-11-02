import React, { useState } from "react";
function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");
  return (
    <div>
      <h2>String State Variables</h2>
      <p>{firstName}</p>
      <input
        className="form-control"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)} // text input field with the state variable
        // update the state variable at each key stroke
      />
    </div>
  );
}
export default StringStateVariables;
