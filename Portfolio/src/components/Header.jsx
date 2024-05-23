import { Link } from "react-router-dom";

const navLinks = [
  { id: 1, path: "/", label: "About Me" },
  { id: 2, path: "/portfolio", label: "Portfolio" },
  { id: 3, path: "/resume", label: "Resume" },
  { id: 4, path: "/contact", label: "Contact Me" },
];

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand fs-1" to="/">Haleigh Elkins</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map(({ id, path, label }) => (
              <li key={id} className="nav-item">
                <Link className="nav-link" to={path}>
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
