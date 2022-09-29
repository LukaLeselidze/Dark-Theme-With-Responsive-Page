import React from 'react'
import './Overviews.css'
import iconup from './images/icon-up.svg'

function Overviews({ color, icon, className, title, amount, p, img }) {
    return (

        <div className={className}>
            <div className='top'>
                <p>{title}</p>
                <img src={img}></img>
            </div>
            <div className='bottom'>
                <h1>{amount}</h1>
                <div className='icondiv'>
                    <img src={icon}></img>
                    <p className={color}> {p}</p>
                </div>
            </div>

        </div>

    )
}

export default Overviews