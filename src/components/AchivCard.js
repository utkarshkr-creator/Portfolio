import React from 'react'
import './AchivCardStyle.css'
const AchivCard = (props) => {
    return (
        <div className="Achivement-card">
        
        <img className='img-cont' src={props.imgsrc} alt='Achivement' />
        
        <div className='pro-details'>
            <p>{props.text}</p>
        </div>
    </div>
    
    )
}

export default AchivCard
