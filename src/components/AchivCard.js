import React from 'react'
import { NavLink } from 'react-router-dom'
import './AchivCardStyle.css'
const AchivCard = (props) => {
    return (
        <div className="Achiv-card">
        <img src={props.imgsrc} alt='Achiv' />
        <div className='achiv-details'>
            <p>{props.text}</p>
            <div className='achiv-btns'>
                <NavLink to={props.view} className='btn'>View</NavLink>
            </div>
        </div>
    </div>
    )
}

export default AchivCard