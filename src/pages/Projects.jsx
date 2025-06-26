import React from "react";
import { Link } from "react-router-dom";
import '../assets/Template.css';
import '../assets/Projects.css';
import gna from '../img/gna.png'
import olm from '../img/olm.png'
import aet from '../img/AET.png'

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

      <div className="project">
        <div className="prj">
          <img src={gna} alt="404" />
          <p>G.N.A.!</p>
          <p>Android Development</p>
          <p>Status: In Development</p>
        </div>
        <div className="prj">
          <img src={olm} alt="404" />
          <p>Orphan's Life: Medieval</p>
          <p>Twine Game Development</p>
          <p>Status: In Progress</p>
        </div>
        <div className="prj">
          <img src={aet} alt="404" />
          <p>Arithmetic Expression Tokenizer</p>
          <p>C++ Terminal Project</p>
          <p>Status: Finished</p>
        </div>

      </div>
    </div>
  )
}

export default Projects;