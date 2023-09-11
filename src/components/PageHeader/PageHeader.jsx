import React from 'react'
import './PageHeader.css'
const PageHeader = ({step}) => {
    return (
        <div className='page-header'>
            <div className='text-container'>
            {step ===0 &&  <><h2>Personal info</h2><p>Please provide your name, email address, and phone number.</p></>}
            {step ===1 &&  <><h2>Select your plan</h2><p>You have the option of monthly or yearly billing.</p></>}
            {step ===2 &&  <><h2>Pick add-ons</h2><p>Add-ons help enhance your gaming experience.</p></>}
            </div>
        </div>
    )
}

export default PageHeader