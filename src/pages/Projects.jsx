import React from "react";
import { Link } from "react-router-dom";
import '../assets/Template.css';
import '../assets/Projects.css';

function Projects(){
  return(
    <div className="header">
      <div className="my-title">
        <h1>&lt;Dark-Cat-Dev&gt;</h1>
      </div>
      <div className="sub-title">
        <h1>ARPIE</h1>
      </div>
      <div className="home-bar">
        <Link to="/projects"><button id="home-buttons">
          PROJECTS
        </button></Link>
        <Link to="/career"><button id="home-buttons">
          CAREER
        </button></Link>
        <Link to="/skills"><button id="home-buttons">
          SKILLS
        </button></Link>
       <Link to="/identity"> <button id="home-buttons">
          IDENTITY
        </button></Link>
        <Link to="/devlog"><button id="home-buttons">
          DEVLOG
        </button></Link>
      </div>

      <div className="quote">
        <i>
          <p>"Aut inveniam viam aut faciam"</p>
          <p>"I shall either find a way or make one"</p>
        </i>
      </div>
    </div>
  )
}

export default Projects;