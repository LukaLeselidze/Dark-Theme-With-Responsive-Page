import React from 'react'
import './Cards.css'

function Cards({ color, icon, className, username, img, h1, today, p }) {
    return (
        <>

            <div className={className}>
                <div className='card'>
                    <div className='card-container'>
                        <img src={img} alt='facebooklogo'></img>
                        <p>{username}</p>
                    </div>
                    <h1>{h1}</h1>
                    <p className='card-followers'>{p}</p>
                    <div className='today-container'>
                        <img src={icon}></img>
                        <p className={color}>{today}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards