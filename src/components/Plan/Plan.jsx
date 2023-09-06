import React from 'react'

const Plan = ({logo,name,price,time}) => {
  return (
    <div className='plan-container'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="name">{name}</div>
        
        {time? (<div className="price">${price}/yr</div>):(<div className="price">${price}/mo</div>)}


    </div>
  )
}

export default Plan