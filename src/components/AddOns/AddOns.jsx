import React from 'react'
import './AddOns.css'
import AddOn from '../AddOn/AddOn'
const AddOns = () => {
  return (
    <div className='add-ons'>
<div className='add-ons-container'>
<AddOn title={"Online service"} text={"Access to multiplayer games"} price={1}/>
<AddOn title={"Online service"} text={"Access to multiplayer games"} price={1}/>
<AddOn title={"Online service"} text={"Access to multiplayer games"} price={1}/>
</div>
    </div>
  )
}

export default AddOns