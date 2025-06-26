import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Home.css';
import '../assets/Template.css';
import '../assets/Identity.css';


function Identity(){
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

      <div class='identity'>
        <div class='identity-content'>
            <p>Name: Arjay Pielago</p>
            <p>Titles: </p>
            <p>&nbsp;&nbsp;Entry-Level Mobile Developer</p>
            <p>&nbsp;&nbsp;Entry-Level Web App Developer</p>
            <p>&nbsp;&nbsp;Aspiring Game Developer</p>
            <p>&nbsp;&nbsp;BS Computer Science Fresh Graduate</p>
            <p>Socials:</p>
            <div className='socials'>
              <a href="https://www.linkedin.com/in/arpie-darkcatdev/" target='_blank' rel="noopener noreferrer"><button>LinkedIn</button></a>
              <a href="https://www.instagram.com/darkcatdev/" target='_blank' rel="noopener noreferrer"><button>Instagram</button></a>
              <a href="https://web.facebook.com/DarkCatDev01" target='_blank' rel="noopener noreferrer"><button>Facebook</button></a>
              <a href="https://ganknow.com/darkcatdev" target='_blank' rel="noopener noreferrer"><button>Gank</button></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Identity;