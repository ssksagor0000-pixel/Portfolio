import React from 'react'

const Home = () => {
  return (
    <div>
      <section id="profile">
      <div className="section__pic-container">
        <img src="sagor profile.jpg" alt="Sagor Kar profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Sagor Kar</h1>
        <p className="section__text__p2">Full Stack Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" >Download CV </button>
          <button className="btn btn-color-1" onclick="location.href='./#contact'">
            Contact Info
          </button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home
