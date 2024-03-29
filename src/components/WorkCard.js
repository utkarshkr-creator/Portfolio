import React from 'react'
import { NavLink } from 'react-router-dom'
import "./WorkCardStyle.css"
function WorkCard(props) {
    return (
        <div className="project-card">
        <img src={props.imgsrc} alt='project' />
        <h2 className='project-title'>{props.title}</h2>
        <div className='pro-details'>
            <div className='ptext'>
             <p>{props.text}</p>
            </div>
            <div className='pro-btns'>
                { props.view &&  <a href={props.view} className='btn'>View</a>}
                <a href={props.source} className='btn'>Source</a>
            </div>
        </div>
    </div>
    )
}

export default WorkCard
