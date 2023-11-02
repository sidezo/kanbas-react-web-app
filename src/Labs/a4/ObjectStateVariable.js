import React, { useState } from "react";
function ObjectStateVariable() {
  const [person, setPerson] = useState({ name: "Peter", age: 24 });
  return (
    <div>
      {/* // display raw JSON 
      // initialize input field with an object's // field
      value //
       update field as user types. copy old // object, 
       override specific
      field with new // value // update field as user types. 
      copy old // object,
      // override specific field with new value */}
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <input
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <input
        value={person.age}
        onChange={(e) =>
          setPerson({ ...person, age: parseInt(e.target.value) })
        }
      />
    </div>
  );
}
export default ObjectStateVariable;
