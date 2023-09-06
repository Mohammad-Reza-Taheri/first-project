import React from 'react'
import './PersonalInfo.css'

const PersonalInfo = () => {
    return (
        <div className='personal-info'>
            <div>
                <h1>Personal info</h1>
                <p>please provide your name, email address, and phone number</p>
            </div>

            <form >


                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='e.g stephen king' name='name' />
                </div>

                <div>

                    <label htmlFor="email">Email Address</label>
                    <input type="email" placeholder='e.g stephenking@gmail.com' name='email' />
                </div>



                <div>
                    <label htmlFor="phone_number">Phone Number</label>
                    <input type="text" placeholder='e.g +1 234 567 890' name='phone_number' />
                </div>



                <input type="submit" value={"Next"} />
            </form>




        </div>
    )
}

export default PersonalInfo