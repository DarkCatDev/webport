import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Home.css';
import '../assets/Template.css';
import '../assets/Skill.css';


function Skills(){
  return(
    <div>
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

      </div>

      <div className="skill-content">
        <p>Note: The following skillset are my personal evaluation.</p>
        <h4>Skills</h4>
        <div className="skill-list">
          <div className="skills">
            <h5>Programming Language</h5>
            <p>Java: Familiar</p>
            <p>Python: Familiar</p>
            <p>C++: Familiar</p>
            <p>PHP: Learning</p>
          </div>
          <div className="skills">
            <h5>Web Development</h5>
            <p>HTML: Itermediate</p>
            <p>CSS: Familiar</p>
            <p>Javascript: Beginner</p>
          </div>
          <div className="skills">
            <h5>Frameworks</h5>
            <p>Django: Familiar</p>
            <p>Laravel: Beginner</p>
            <p>React Js: Beginner</p>
            
          </div>
          <div className="skills">
            <h5>Databases</h5>
            <p>MySql: Familiar</p>
            <p>Xampp: Familiar</p>
            <p>phpMyAdmin: Familiar</p>
          </div>
          <div className="skills">
            <h5>Fundamentals</h5>
            <p>Object Oriented Programming: Familiar</p>
            <p>Data Structure and Algorithm: Beginner</p>
          </div>
          <div className="skills">
            <h5>Tools and Software</h5>
            <p>Document Formating: Proficient</p>
            <p>Python: Intermediate</p>
            <p>Presentation Design: Familiar</p>
            <p>Project Management: Beginner</p>    
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;