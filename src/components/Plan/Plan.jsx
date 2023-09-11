import React from 'react'
import './Plan.css'



import { useSelector, useDispatch } from 'react-redux'
import { addArcade_moAction, addAdvanced_moAction, addProAction } from '../../Redux/totalAmountSlice'

const Plan = ({ logo, name,price, id }) => {
const time=useSelector(state=>state.total.yr)
  const dispatch = useDispatch()

  const clickHandler = () => {
    if (id === 1) {
      dispatch(addArcade_moAction())
    }
    if (id === 2) {
      dispatch(addAdvanced_moAction())
    }
    if(id===3){
      dispatch(addProAction())
    }
  }


  return (
    <div className='plan-container' onClick={clickHandler}>
      <div className="plan-logo">

        <img src={logo} alt="logo" />
        {/* <h3>this is total value: {totalValue}</h3> */}
      </div>
      <div className='plan-info'>
        <div className="plan-name">{name}</div>

        {time ? (<div className="plan-price">${price*10}/yr</div>) : (<div className="plan-price">${price}/mo</div>)}
        
      </div>


    </div>
  )
}

export default Plan