import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { BsBoxArrowRight } from "react-icons/bs";
import { AiOutlineInbox } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import { TbMapNorth } from "react-icons/tb";
import "./index.css";

function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon wd-account" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <AiOutlineInbox className="wd-icon" />,
    History: <AiOutlineClockCircle className="wd-icon" />,
    Studio: <PiProjectorScreenChartBold className="wd-icon" />,
    Commons: <BsBoxArrowRight className="wd-icon" />,
    Help: <BiHelpCircle className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" >
      <div className="list-group-item wd-northeasternicon">
        <TbMapNorth className="wd-NEU" />
      </div>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
