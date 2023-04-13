import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <nav className=' bg-white py-2'>
        <div className='container'>
            <div className="row justify-content-between align-items-center">
                <div className="col-md-5">
                <div className="logo">
                    <img src={logo} style={{width:"300px"}} alt="" />
                </div>
                </div>
                <div className="col-md-7">
                    <ul className='float-end'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><a href="" onClick={(e)=>e.preventDefault()}>Contact</a></li>
                        <li><a href="" onClick={(e)=>e.preventDefault()}>Support</a></li>
                        <li><Link to="/admin/product" className='adminBTN'>Admin</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header