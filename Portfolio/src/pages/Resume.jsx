import MyResume from "../assets/pdf/HaleighElkinsResume.pdf";
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
        <div className={prettyLayout ? "col" : ""}>
          <h3>Unique Value</h3>
          <p className="paragraph">
          With a Full Stack Development certificate from the University of Denver, I embody the essence of a dynamic and forward-thinking IT professional. My passion for continuous learning is rivaled only by my dedication to collaborative problem-solving. 
    <br/><br/>
    Thriving in cross-functional teams, I bring a wealth of experience in delivering innovative solutions that push boundaries and exceed expectations. My expertise in full stack coding serves as a solid foundation, empowering me to drive impactful contributions to diverse IT projects.
    <br/><br/>
    As an advocate for staying ahead of the curve, I am actively pursuing further education in cybersecurity. This proactive approach underscores my commitment to fortifying organizational security postures and navigating evolving digital landscapes with confidence and resilience.
  </p>
          <h4 className="py-2">Professional Skills</h4>
          <ul>
            <li>Reliable and Dependable</li>
            <li>Organized</li>
            <li>Strong Communication</li>
            <li>Problem-Solving</li>
            <li>Leadership Development</li>
            <li>Dedicated Team Player</li>
            <li>Personnel Training and Development</li>
            <li>Project Management Tools</li>
          </ul>
          <h4 className="pb-2">Front-end Skills</h4>
          <ul>
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
          <h4 className="pb-2">Back-end Skills</h4>
          <ul>
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
      </div>
    </div>
  );
}
