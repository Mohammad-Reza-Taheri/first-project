import React from 'react'
import './MainPage.css'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import SelectPlan from '../SelectPlan/SelectPlan'
import PageHeader from '../PageHeader/PageHeader'
import AddOns from '../AddOns/AddOns'
import FinishingUp from '../FinishingUp/FinishingUp'
const MainPage = () => {
  return (
    <div className='main-container'>
       
        <div className='left-side'>
            
        </div>

        <div className='right-side'>
          <PageHeader/>
          {/* <PersonalInfo/> */}
          {/* <SelectPlan/> */}
          {/* <AddOns/> */}
          <FinishingUp/>

          <input className='next' type="submit" value={"Next"} />
        </div>
    </div>
  )
}

export default MainPage