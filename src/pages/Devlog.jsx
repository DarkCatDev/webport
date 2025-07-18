import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Home.css';
import '../assets/Template.css';
import '../assets/Devlog.css';

function Devlog(){
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

      <div className="devlog">
        <div className='vlog'>
          <div className='caption-title'> <h4>Devlog #3: Delayed Progress</h4></div>
          <div className='caption-content'><p>July 7, 2025. </p><p>Days had passed, yet I still had trouble starting and plans are changed more often that I had anticipated. I'm planning on creating GNA for mobile but for now, i'll focus it for desktop. But aside from this project, many ideas came into mind so  posibilities of project change could occur.</p></div>
        </div>
        <div className='vlog'>
          <div className='caption-title'> <h4>Devlog #2: Current WIP</h4></div>
          <div className='caption-content'><p>June 26, 2025.</p><p> I updated the web portfolio, adding more data. I also began developing an android application called GNA or Game na ako.</p></div>
        </div>
        <div className='vlog'>
          <div className='caption-title'> <h4>Devlog #1: My First Web Porfolio</h4></div>
          <div className='caption-content'><p>June 17, 2025.</p><p> I had successfully created a web portfolio</p></div>
        </div>
      </div>
    </div>
  )
}

export default Devlog;