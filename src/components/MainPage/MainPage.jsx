import React from 'react'
import './MainPage.css'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
const MainPage = () => {
  return (
    <div className='main-container'>
       
        <div className='left-side'>
            
        </div>

        <div className='right-side'>
          <PersonalInfo/>
        </div>
    </div>
  )
}

export default MainPage