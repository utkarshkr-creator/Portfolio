import React from 'react'
import './AboutStyle.css'

function AboutSec() {
  return (
    <div className='about-cont'>
      <h1 className='name' style={{fontSize:" 6rem"}}>Meet Utkarsh Kumar</h1>
      <div className='detail-container'>
        {/* <div className='about-sec'> */}
          <img className='about-img' src='https://i.imgur.com/jGIcpN2.jpg' alt='profile-pic'></img>
        {/* </div> */}
        <div className='intro-sec'>
        I caught fire coding. <br/>
        <br/>

I always thought my dream was to be a proofreader for an indie publishing company, sipping my café con leche and reading the opening lines to the next best-selling vampire novel. I gravitated toward proofreading and quality control positions. But I kind of just felt meh. I yearned to learn more, yearned to learn something different.
<br/>
<br/>
And that's when it happened; the spark I was missing ignited the instant I gave my first contest on Code forces. Since then, I can't get enough. Competitive programming calls to all my passions; it incorporates creativity and problem-solving and I'm allowed to break it to improve the code.
<br/>
<br/>
My specialties include quickly learning new skills and programming languages, problem-solving, domain-driven design, responsive design principles, website optimization, and Model View Controller (MVC) methods of organizing code. So far I have C++, Datastructures and algorithms,  JavaScript, ReactJS, NodeJS, ExpressJS, HTML, CSS, SQL, and Git/GitHub under my belt. I'm still enthusiastically grabbing onto any other programming languages, frameworks, or principles I can integrate into the coding web in my head.  
        </div>
      </div>

    </div>
  )
}

export default AboutSec