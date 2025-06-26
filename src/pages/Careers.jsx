import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Home.css';
import '../assets/Template.css';
import '../assets/Careers.css';


function Careers() {
    return (
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
            <div className="career-content">
                <div className="title">
                    PROFESSIONAL BACKGROUND
                </div>
                <div className="content">
                    <div>
                        <p><strong>PARTIDO STATE UNIVERSTY - GUIDANCE, ADMISSION, AND PLACEMENT</strong></p>
                        <strong>INTERN</strong> June - July 2025
                    </div>
                    <div>
                        <p>Assisted the guidance staff in organizing, filing, and digitizing student documents</p>
                        <p>Helped maintain records and ensured data accuracy in student files</p>
                        <p>Co-initiated a prototype for a digital portal intended to streamline student access to guidance
                        services using Laravel framework</p>
                    </div>
                </div>
                <div className="separator">

                </div>
                <div className="title">
                    EDUCATIONAL BACKGROUND
                </div>
                <div className="content">
                    <div>
                        <p><strong>BS Computer Science 2021-2025</strong></p>
                        <strong>Partido State University</strong>
                        <p>San Juan Evangelista Street, Goa, Camarines Sur</p>
                        <p>GWA: 1.7993</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Careers;
