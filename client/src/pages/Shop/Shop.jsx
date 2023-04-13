import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Shop.css"
// import CloseButton from 'react-bootstrap/esm/CloseButton';
import {useDispatch, useSelector} from "react-redux"
import { getSingleProduct } from '../../redux/product/action';
import SingleView from './SingleView';
import Skeleton from 'react-loading-skeleton'
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'

const Shop = () => {

    const {products, singleProduct, skeleton} = useSelector(store => store.product)
    const dispatch = useDispatch()
    const [modalShow, setModalShow] = useState(false);

    // make 6 product
    const sispro = [6,1,1,1,1,1]

    const handleSingleView = (id) =>{
        
        dispatch(getSingleProduct(id))


        setModalShow(true)
    }
  return (
    <div className='container'>
        
        <div className="row my-5">
            <div className="col-md-3 card shadow-sm py-4">

                <div className="widget">
                    <h2>Search</h2>
                    <input type="text" className='form-control' placeholder='name*'/>
                </div>
                <hr />

                <div className="widget m2-2">
                    <h2>Categorys</h2>
                    <ul className='list-group'>
                        <li className='list-group-item'><a href="">Man</a></li>
                        <li className='list-group-item'><a href="">Women</a></li>
                        <li className='list-group-item'><a href="">Electronic</a></li>
                        <li className='list-group-item'><a href="">Kid</a></li>
                    </ul>
                </div>
                <hr />


                <div className="widget tags my-2">
                    <h2>Tag's</h2>
                    <a href="#">dangoo</a>
                    <a href="#">Fan</a>
                    <a href="#">Light</a>
                </div>
                <hr />

                <div className="widget tags my-2">
                    <h2>Min and Max price</h2>
                    <input type="range" min={10} max={500}/>
                    <input type="range" min={500} max={5000}/>
                </div>


            </div>
            <div className="col-md-9">
            
            <div className="row">
            {
                skeleton && sispro.map(data => 
                    <div className="col-md-4 mb-4">
                <div className="card">
                    <div className="card-header">
                    <Skeleton count={1} height={250} />
                    </div>
                    <div className="card-body">
                        <h4 className='cardProductTitle'><Skeleton count={1}  /></h4>
                    </div>
                    <div className="card-footer">
                        <p><Skeleton count={1}  width={100} /></p>
                        <Skeleton count={1}  width={70} height={30}/>
                    </div>
                </div>
                </div>
                    )
                
            
            }
            </div>
                <div className="row">
                {
                    products.map(data => 
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <img src={`http://localhost:5050/images/products/featured/${data.photo}`} className='card-img' style={{height : '250px'}} alt="" />
                                </div>
                                <div className="card-body">
                                    <h4 className='cardProductTitle'>{data.name}</h4>
                                </div>
                                <div className="card-footer">
                                    <p>Price : $ {data.sell_price}</p>
                                    <Button variant="dark" onClick={() => handleSingleView(data._id)}>
                                        Quick View
                                    </Button>
                                </div>
                            </div>
                        </div>
                        )
                }
                </div>

                <SingleView action={modalShow} setModalShow={setModalShow}/>
            </div>
        </div>


        

        
    </div>
  )
}

export default Shop