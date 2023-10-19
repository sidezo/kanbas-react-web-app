import Modules from "../Modules";

function Home() {
  return (
    <div className="row">
      <div className="col-lg-10 col-12">
        <Modules />
      </div>
      <div className="d-none d-lg-block col-lg-2">
        <h2>Status</h2>
      </div>
    </div>
  );
}
export default Home;
