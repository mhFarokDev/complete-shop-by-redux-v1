import React from 'react'
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'
import box1 from '../../images/box1.jpg'
import box2 from '../../images/box2.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container-fluid" style={{backgroundColor: "#E9E0DB"}}>
        <div className='container'>
            <img src={banner1} alt="" className='w-100'/>


            <div className="row mt-5">
            <div className="col-md-6 ">
                <h1>Girl's Haven: A One-Stop Shop for All Your Fashion and Beauty Needs!</h1>
                <p className='text-reset mt-3'>At Girl's Haven, we believe that every girl deserves to feel confident and beautiful in her own skin. Our shop is a haven for fashion-forward girls who want to express their unique style and personality through their clothing, accessories, and beauty products. We offer a wide range of trendy and affordable options, from chic dresses and stylish tops to cute handbags and statement jewelry. Our team of fashion experts is always on the lookout for the latest trends, so you can be sure that you're getting the best of the best. So come on in, explore our collections, and let us help you find your new favorite pieces!</p>

                <Link to='/shop' type="button" class="btn btn-outline-danger mt-5 ">SHOP NOW</Link>
            </div>

            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6">
                        <img src={box1} alt="" className='w-100'/>
                    </div>
                    <div className="col-md-6">
                    <img src={box2} alt="" className='w-100' />
                    </div>

                    <div className="col-md-12 mt-4">
                        <img src={banner3} alt="" className='w-100' />
                    </div>
                </div>
            </div>

            <img src={banner2} alt="" className='w-100 mt-5 pb-5'/>
        </div>
        </div>

        
    </div>
    
  )
}

export default Home