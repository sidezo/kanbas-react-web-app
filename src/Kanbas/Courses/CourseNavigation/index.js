import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import { FaEyeSlash } from "react-icons/fa";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Assignments",
    "Grades",
    "Piazza",
    "Zoom Meetings",
    "Quizzes",
    "People",
    "Panopto Video",
    "Discussion",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Settings",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="wd-course-navigation list-group">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          <div className="link-content">
            {link}
            {/* here if the index is larger than 7, then we add hide icon */}
            {index > 11 && <FaEyeSlash className="hide-icon" />}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
