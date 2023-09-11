import React from 'react'
import './RoadMap.css'
const RoadMap = ({step}) => {
    return (
        <div className='roadmap-container'>
            <div className='step-container'>
                <div className={step===0?'step-number-active':'step-number' }>1</div>
                <div className='text-container'>
                    <p>step 1</p>
                    <h4>your info</h4>
                </div>
            </div>

            <div className='step-container'>
                <div className={step===1?'step-number-active':'step-number' }>2</div>
                <div className='text-container'>
                    <p>step 2</p>
                    <h4>select your plan</h4>
                </div>
            </div>

            <div className='step-container'>
                <div className={step===2?'step-number-active':'step-number' }>3</div>
                <div className='text-container'>
                    <p>step 3</p>
                    <h4>add-ons</h4>
                </div>
            </div>

            <div className='step-container'> 
                <div className={step===3?'step-number-active':'step-number' }>4</div>
                <div className='text-container'>
                    <p>step 4</p>
                    <h4>summary</h4>
                </div>
            </div>
        </div>
    )
}

export default RoadMap