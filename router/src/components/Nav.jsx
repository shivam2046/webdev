import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='Nav'>
        <NavLink to='/' style={({isActive})=>({
            color:isActive? 'active':'non-active'
        })}
        >Home</NavLink>
        <NavLink to='/About'
        style={({isActive})=>({
            color:isActive? 'active':'non-active'
        })}
        >About</NavLink>
        <NavLink to='/courses'style={({isActive})=>({
            color:isActive? 'active':'non-active'
        })}
        >Courses</NavLink>
        
      
    </div>
  )
}

export default Nav
