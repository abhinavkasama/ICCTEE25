import React from 'react'
import './Header.css'
import Title from '../assets/Title2.jpeg'


function Header() {
  return (
    <div>
        <div className='header'>
            <div className='title_image'>
                <img src={Title} alt=''></img>
            </div>
        </div>
        <div className='line'></div>
    </div>
    
  )
}

export default Header