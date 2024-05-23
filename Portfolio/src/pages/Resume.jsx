// import MyResume from "../assets/pdf/HaleighElkinsResume.pdf";
import { useState, useEffect } from "react";

export default function Resume() {
  const [prettyLayout, setPrettyLayout] = useState(window.innerWidth > 767);
  useEffect(() => {
    const handleResize = () => {
      setPrettyLayout(window.innerWidth > 767);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-12">
          <h2>Resume</h2>
          <ul>
            <li className="pt-3 fs-5 fw-bold text-decoration-underline pb-5">
              <a id="resume" href={MyResume} download>
                Download my resume
              </a>
            </li>
          </ul>
        </div>
        <div className="col-auto">
          <h3>Skills</h3>
          <h4 className="py-2">Professional</h4>
          <ul className="pb-3">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h4 className="pb-2">Front-end</h4>
          <ul className="pb-3">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>Git</li>
            <li>Browser Developer Tools</li>
            <li>Web APIs</li>
            <li>Third-Party APIs</li>
            <li>Server-Side APIs</li>
          </ul>
          <h4 className="pb-2">Back-end</h4>
          <ul className="pb-3">
            <li>Node.js</li>
            <li>Express</li>
            <li>Progressive Web Applications (PWA)</li>
            <li>Model-View-Controller (MVC)</li>
            <li>Object-Oriented Programming (OOP)</li>
            <li>Object-Relational Mapping (ORM)</li>
            <li>MERN</li>
            <li>State</li>
            <li>NoSQL (MongoDB)</li>
            <li>SQL (PostgreSQL)</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className={prettyLayout ? "col" : ""}>
          <h3 className="pb-2">Unique Value</h3>
          <p className="paragraph">
          </p>
          <p className="paragraph">
          </p>
          <p className="paragraph">
          </p>
        </div>
      </div>
    </div>
  );
}