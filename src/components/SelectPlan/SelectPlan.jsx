import React from 'react'
import './SelectPlan.css'
import Plan from '../Plan/Plan'

import logo_1 from '../../images/icon-arcade.svg'
import logo_2 from '../../images/icon-advanced.svg'
import logo_3 from '../../images/icon-pro.svg'

import { useDispatch } from 'react-redux'
import { yearToggleAction } from '../../Redux/totalAmountSlice'

const SelectPlan = () => {

  const dispatch = useDispatch();

  return (
    <div className='select-plan'>


      <div className="option-container">
        <Plan logo={logo_1} name={"Arcade"} price={9} id={1} />
        <Plan logo={logo_2} name={"Advanced"} price={12} id={2} />
        <Plan logo={logo_3} name={"Pro"} price={15} id={3} />

      </div>

      <div className="time-switch">
        <button onClick={() => dispatch(yearToggleAction())}>toggle time</button>
      </div>

    </div>

  )
}

export default SelectPlan