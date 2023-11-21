import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

const API = "https://kanbas-node-server-app-t76m.onrender.com";
function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={`${API}/a5/welcome`} className="list-group-item">
          Welcome
        </a>
      </div>
      <WorkingWithArrays />
      <WorkingWithObjects />
      <EncodingParametersInURLs />
    </div>
  );
}
export default Assignment5;
