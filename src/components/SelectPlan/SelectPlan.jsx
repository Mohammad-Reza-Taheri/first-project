import React from 'react'
import './SelectPlan.css'
import Plan from '../Plan/Plan'

const SelectPlan = () => {
  return (
    <div className='select-plan'>


      <div className="option-container">
    <Plan logo={'../assets/images/icon-arcade'} name={"Arcade"} price={9} time={false}/>
    <Plan logo={''} name={"Advanced"} price={9} time={false}/>
    <Plan logo={''} name={"Pro"} price={9} time={false}/>

      </div>

      <div className="time-switch">
time switch
      </div>

    </div>

  )
}

export default SelectPlan