import React from 'react'
import './AboutStyle.css'

function AboutSec() {
  return (
    <div className='about-cont'>
      <h1 className='name'>Meet Utkarsh Kumar</h1>
      <div className='detail-container'>
        <div className='about-sec'>
          <img src='https://i.imgur.com/jGIcpN2.jpg' alt='profile-pic'></img>
        </div>
        <div className='intro-sec'>
          <p>"Hello! My name is [Your Name] and I am a competitive programmer with a passion for coding. I have experience in a range of programming languages and technologies, including data structures and algorithms, C/C++, Python, HTML/CSS, React, and JavaScript.</p>

          <p>I am a self-motivated and detail-oriented individual, with a strong ability to problem-solve and think critically. I enjoy tackling complex challenges and finding creative solutions to problems.</p>

          <p>In my free time, I enjoy reading novels, watching web series and movies, and playing video games. I also love staying up-to-date with the latest trends and developments in the world of programming and technology.</p>

          <p>I am always looking for new opportunities to learn and grow as a programmer, and I am excited to share my skills and experiences with others through my portfolio website."</p>
        </div>
      </div>

    </div>
  )
}

export default AboutSec