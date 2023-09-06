import React from 'react'
import './AddOn.css'
const AddOn = ({ title, text, price }) => {
    return (
        <div className='add-on-container'>
            <input type="checkbox" />
            <div>
                <div className='add-on-title'>{title}</div>
                <div className='add-on-text'>{text}</div>
            </div>
            <div className='add-on-price'>${price}</div>
        </div>
    )
}

export default AddOn