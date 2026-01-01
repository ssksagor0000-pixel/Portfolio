import React from 'react'

const About = () => {
  return (
    <div>
    <section id="about">
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src="Sagor.png" alt="Profile picture" className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src="experience-icon-linear-logo-mark-in-black-and-white-vector.jpg" alt="Experience icon" className="icon"
              />
              <h3>Experience</h3>
              <p>1+ years <br />Full Stack Developer</p>
            </div>
            <div className="details-container">
              <img src="204-2045301_education-icon-education-logo-png-blue.png" alt="Education icon" className="icon"
              />
              <h3>Education</h3>
              <p>Diploma In Engineering (Computer Science And Technology)</p>
            </div>
          </div>

          <div className="text-container">
            <p>I am a passionate Full Stack Developer skilled in both frontend and backend development. I specialize in building responsive, user-friendly web applications using modern technologies like React, Node.js, Express, and MongoDB.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About
