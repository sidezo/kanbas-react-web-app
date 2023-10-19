import ModuleList from "./ModuleList";
import "./index.css";

function Modules() {
  return (
    <div className="container-fluid wd-modules-buttons">
      <div className="row">
        <div className="col-12">
          <div className="float-end">
            <button type="button" className="btn btn-secondary">
              Collapse All
            </button>
            <button type="button" className="btn btn-secondary">
              View Progress
            </button>
            <div className="dropdown d-inline-block">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-check-circle-o fa-lg" aria-hidden="true"></i>
                Publish All
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a sclassName="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-danger">
              <i className="fa fa-plus" aria-hidden="true"></i>
              Module
            </button>
            <button type="button" className="btn btn-secondary">
              &ensp;
              <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
              &ensp;
            </button>
          </div>
        </div>
      </div>

      <hr />
      <ModuleList />
    </div>
  );
}

export default Modules;
