import React from 'react'
import { useNavigate } from 'react-router-dom'
const Footer = () => {

    const navigate = useNavigate()
  return (
    <div className='footer'>
      <p>To Know More Click On Explore Button</p>
      <button onClick={()=>{
        navigate('./Courses')
      }}>Explore more</button>
    </div>
  )
}

export default Footer
