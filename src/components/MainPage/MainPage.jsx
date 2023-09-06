import React from 'react'
import './MainPage.css'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import SelectPlan from '../SelectPlan/SelectPlan'
import PageHeader from '../PageHeader/PageHeader'
const MainPage = () => {
  return (
    <div className='main-container'>
       
        <div className='left-side'>
            
        </div>

        <div className='right-side'>
          <PageHeader/>
          {/* <PersonalInfo/> */}
          <SelectPlan/>

          <input className='next' type="submit" value={"Next"} />
        </div>
    </div>
  )
}

export default MainPage