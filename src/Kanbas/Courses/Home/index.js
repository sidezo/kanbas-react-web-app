import Modules from "../Modules";
import StatusBar from "./StatusBar";
function Home() {
  return (
    <div className="row">
      <div className="col-lg-9 col-12">
        <Modules />
      </div>
      <div className="d-none d-lg-block col-lg-3">
        <StatusBar />
      </div>
    </div>
  );
}
export default Home;
