import React from 'react'
import logo from '../../images/logo.png'


const Footer = () => {
  return (
    <div className="container-fluid bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="logo my-2">
                        <img src={logo} alt="" />
                        <p className='text-white mt-3'>Yael amari offers a wide range of clothing, accessories, and beauty products tailored to women's needs and preferences. Shop online for the latest trends and styles.</p>
                    </div>
                </div>
                <div className="col-md-4 py-5">
                    <h3 className='text-white '>
                    Contact US :
                    </h3>
                    <ul className='list-item-group mt-3' style={{paddingLeft : '0px'}}>
                        <li className='text-white-50 list-group-item'><h5>Facebook</h5></li>
                        <li className='text-white-50 list-group-item'><h5>Twiter</h5></li>
                        <li className='text-white-50 list-group-item'><h5>Linkedin</h5></li>
                        
                    </ul>
                </div>
                <div className="col-md-4 py-5">
                <h3 className='text-white '>
                    Location :
                    </h3>
                <p className='text-white-50 mt-3'>Email : developerfaruk11@gmail.com</p>
                <p className='text-white-50'>Phone : 01735-682277</p>
                <p className='text-white-50'>WhatsApp : 01735-682277</p>
                <p className='text-white-50'>Skype : 01735-682277</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer