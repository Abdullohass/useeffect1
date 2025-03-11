import React from 'react'
import './head.css'
// import kolokol from '../../img/kolokol.png'
// import message from '../../img/message.png'
// import ochkarik from '../../img/ochkarik.png'
function Header() {
    return (
        <div className='header container'>
            <div className='headerleft'>
                <a href="" className='a1'><h1>Logo</h1></a>
                <input className='input1' type="text" />
                <a className='a2' href="">Home</a>
                <a className='a2' href="">Explore</a>
            </div>
            <div className='headerright'>
                <i class="fa-solid fa-bell"></i>
                <i class="fa-regular fa-image"></i>
                <button className='button1'>Wallet</button>
                <i class="fa-solid fa-user"></i>

            </div>
        </div>
    )
}

export default Header