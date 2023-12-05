import { Link, useLocation } from "react-router-dom";

function UserNavigation() {
  const links = ["Home", "Search", "signin", "signup", "AccountInfo"];
  const { pathname } = useLocation();
  return (
    <div className="list-group">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          <div className="link-content">{link}</div>
        </Link>
      ))}
    </div>
  );
}

export default UserNavigation;
