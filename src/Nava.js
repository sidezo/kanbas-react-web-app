import { Link } from "react-router-dom";
function Nava() {
  return (
    <div>
      <nav className="nav nav-tabs mt-2">
        <Link className="nav-link" to="/Labs/a3">
          A3
        </Link>
        <Link className="nav-link" to="/hello">
          Hello
        </Link>
        <Link className="nav-link" to="/Kanbas">
          Kanbas
        </Link>
      </nav>
    </div>
  );
}

export default Nava;
