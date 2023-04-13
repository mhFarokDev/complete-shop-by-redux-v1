import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import SingleView from '../Shop/SingleView'
import { deleteProduct, getSingleProduct, updateProductData } from '../../redux/product/action'
import Skeleton from 'react-loading-skeleton'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import swal from 'sweetalert'
const Product = () => {

const {products, skeleton, singleProduct} = useSelector(state => state.product)
const [modalShow, setModalShow] = useState(false);
const [modalShowUpdate, setShowModalUpdate] = useState(false)


// update state when change single product state
useEffect(()=>{
    setInps({
        name : singleProduct.name,
        regular_price : singleProduct.regular_price,
        sell_price : singleProduct.sell_price,
        stock : singleProduct.stock
    })
},[singleProduct])

const [inps, setInps] = useState({
    name : '',
    regular_price : '',
    sell_price : '',
    stock : ''
})
const dispatch = useDispatch()
const handleSingleVIew = (id) =>{
    dispatch(getSingleProduct(id))
    setModalShow(true)
}

// update unputes state
const updateInps = (e) =>{
    setInps((prevValue) => ({
        ...prevValue,
        [e.target.name] : e.target.value
    }))
}
// update data
const handleDataEdit =  (id) =>{

    dispatch(getSingleProduct(id))
    setShowModalUpdate(true)
    
    setInps({
        name : singleProduct.name,
        regular_price : singleProduct.regular_price,
        sell_price : singleProduct.sell_price,
        stock : singleProduct.stock
    })
}

// form data submit
const handleProductEditSubmit = (e) =>{
    e.preventDefault()

    dispatch(updateProductData(singleProduct._id, inps, setShowModalUpdate))
}
const handleDeleteProduct = (id) =>{
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {

          dispatch(deleteProduct(id))
        }
      });
}
  return (
    <div className='container'>
        <div className="row justify-content-center">
            <div className="col-md-10 mt-4">
                <div className='card shadow-sm'>
                <div className="allBtns">
                <Link to="/admin/product/categorys" className='btn btn-success w-25 text-white'>Category</Link>
                <Link to="/admin/product/tags" className='btn btn-warning w-25 text-white mx-3'>Tag</Link>
                <Link to="/admin/product/create" className='btn btn-primary w-25 text-white'>Add New Product</Link>
                </div>
                    <div className="card-body">
                    <div className="card-header d-flex justify-content-between align-items-center">
                    <h2 className='display-3'>All products</h2>
                    
                    
                    </div>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Regular Price</th>
                                <th>Sell Price</th>
                                <th>Stock</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                skeleton && <tr>
                                <td><Skeleton count={10} height={20} width={40}/></td>
                                <td><Skeleton count={10} height={20} width={100}/></td>
                                <td><Skeleton count={10} height={20} width={50}/></td>
                                <td><Skeleton count={10} height={20} width={50}/></td>
                                <td><Skeleton count={10} height={20} width={50}/></td>
                                <td> <Skeleton count={10} height={20} width={100}/></td>
                                <td>
                                <Skeleton count={10} height={20} width={100}/>
                                </td>
                            </tr>
                            }
                        
                            {
                                products.map((data, index) => 
                                    <tr>
                                        <td>{index+1}</td>
                                        <td className='proNameShort'>{data.name}</td>
                                        <td>{data.regular_price}</td>
                                        <td>{data.sell_price}</td>
                                        <td>{data.stock}</td>
                                        <td><img src={`http://localhost:5050/images/products/featured/${data.photo}`} style={{width : "100px", height : "50px", objectFit : "cover"}} alt="" /></td>
                                        <td>
                                            <i class="fa-thin fa-eye btn btn-success" onClick={ ()=> handleSingleVIew(data._id)}></i>
                                            <i class="fa-thin fa-pen-to-square btn btn-warning mx-2" onClick={ ()=>handleDataEdit(data._id) }></i>
                                            <i class="fa-thin fa-trash btn btn-danger" onClick={()=> handleDeleteProduct(data._id)}></i>
                                        </td>
                                    </tr>
                                )
                                
                            }
                            
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        <SingleView action={modalShow} setModalShow={setModalShow}/>


        <Modal show={modalShowUpdate} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header>
        
        <Modal.Title id="contained-modal-title-vcenter" className='d-flex justify-content-between w-100'>
          Add New Category
          <CloseButton  onClick={() => setShowModalUpdate(false)}/>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action="" onSubmit={ handleProductEditSubmit }>
            <div className='my-3'>
                <label>Product Name </label>
                <input type="text" name='name' className='form-control' value={inps.name} onChange={updateInps}/>
            </div>
            <div className='my-3'>
                <label>Regular Price </label>
                <input type="text" name='regular_price' className='form-control' value={inps.regular_price} onChange={updateInps}/>
            </div>
            <div className='my-3'>
                <label>Sell Price </label>
                <input type="text" name='sell_price' className='form-control' value={inps.sell_price} onChange={updateInps}/>
            </div>
            <div className='my-3'>
                <label>Stoct </label>
                <input type="text" name='stock' className='form-control' value={inps.stock} onChange={updateInps}/>
            </div>
            
            <button className='btn btn-primary' type='submit'>Update</button>
        </form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShowModalUpdate(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default Product