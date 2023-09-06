import React from 'react'
import './Plan.css'
import myLogo from '../../images/icon-arcade.svg'
const Plan = ({logo, name, price, time }) => {


  return (
    <div className='plan-container'>
      <div className="plan-logo">

        <img src={myLogo} alt="logo" />
      </div>
      <div className='plan-info'>
        <div className="plan-name">{name}</div>

        {time ? (<div className="plan-price">${price}/yr</div>) : (<div className="plan-price">${price}/mo</div>)}
      </div>


    </div>
  )
}

export default Plan