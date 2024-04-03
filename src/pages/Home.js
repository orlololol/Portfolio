import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Orlando's Portfolio";
  }, []);
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Orlando</h2>
        <div className="prompt">
          <p>
            An undergraduate student at McGill University with a passion for
            learning and creating.
          </p>
          <a href="mailto: orlandoqiu@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://www.linkedin.com/in/orlando-qiu/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/orlololol">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, NPM, MaterialUI, Yarn,
              TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, GraphQL, MySQL, MongoDB, PostgreSQL, GCP, Firebase, REST
              API, Twilio, Sendgrid, Stripe
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
