import React from 'react'
import './MainPage.css'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import SelectPlan from '../SelectPlan/SelectPlan'
import PageHeader from '../PageHeader/PageHeader'
import AddOns from '../AddOns/AddOns'
import FinishingUp from '../FinishingUp/FinishingUp'


//Redux
import { useSelector, useDispatch } from 'react-redux'
import { addStepAction, subtractStepAction } from '../../Redux/stepSlice'

import { addArcade_moAction,addAdvanced_moAction,totalAction, } from '../../Redux/totalAmountSlice'
import RoadMap from '../RoadMap/RoadMap'


// import { incrementAction,decrementAction } from '../../Redux/counterSlice'


const MainPage = () => {
  //Redux
  // const value=useSelector(state=>state.counter.value)
  // const dispatch=useDispatch()

  const step = useSelector(state => state.step.value)
  const totalValue = useSelector(state => state.total.value)
  const totalPlan = useSelector(state => state.total.plan)
  const yearToggle = useSelector(state => state.total.yr) 

  const dispatch = useDispatch()








  return (
    <div className='main-container'>

      <div className='left-side'>
        {/* <h1>step:{step}</h1> */}


<RoadMap step={step}/>




{/* 
        <h2>yearToggle :{yearToggle ?"true":"false"}</h2>

        <h1>total value:{totalValue}</h1>
        <h1>total plan:{totalPlan}</h1>
      <button onClick={()=>dispatch(addArcade_moAction())}>arcade</button>
      <button onClick={()=>dispatch(addAdvanced_moAction())}>advanced</button>
      <button onClick={()=>dispatch(totalAction())}>sum total</button> */}



      </div>

      <div className='right-side'>
        <PageHeader step={step}/>
        {step === 0 && <PersonalInfo />}
        {step === 1 && <SelectPlan />}
        {step === 2 && <AddOns />}
        {step === 3 && <FinishingUp />}
        {/* <PersonalInfo/> */}
        {/* <SelectPlan/> */}
        {/* <AddOns/> */}
        {/* <FinishingUp/> */}

        {/* <p>Redux Example</p>
          <h1>Value: {value}</h1>
<button onClick={()=>dispatch(incrementAction())}>+</button>
<button onClick={()=>dispatch(decrementAction())}>_</button> */}

        <input className='back' type="submit" value={"Go Back"} onClick={() => dispatch(subtractStepAction())} />
        <input className='next' type="button" value={"Next Step"} onClick={() => dispatch(addStepAction())} />
      </div>
    </div>
  )
}

export default MainPage