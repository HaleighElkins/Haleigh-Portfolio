import { Link } from "react-router-dom";

const navLinks = [
  { id: 1, path: "/", label: "About Me" },
  { id: 2, path: "/portfolio", label: "Portfolio" },
  { id: 3, path: "/resume", label: "Resume" },
  { id: 4, path: "/contact", label: "Contact Me" },
];

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <h1 className="flex-grow-1" id="nameTitle">
          Haleigh Elkins
        </h1>
        <div id="navbarSupportedContent">
          <ul className="navbar-nav me-2 mb-2 mb-lg-0">
            {navLinks.map(({ id, path, label }) => (
              <li key={id} className="nav-item">
                <Link className="nav-link page page--active" to={path}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
