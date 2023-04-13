
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import swal from 'sweetalert'
import {useDispatch, useSelector} from 'react-redux'
import { addNewTag, deleteTag } from '../../redux/product/action';

const Tag = () => {

  const {tags} = useSelector(state => state.product)
  const [modalShow, setModalShow] = useState(false);
  const [tag, setTag] = useState('')
  const dispatch = useDispatch()


  // add Tag
  const HandleTagForm = (e) =>{
    e.preventDefault()
    const TagData = {tagName : tag}
    dispatch(addNewTag(TagData, setTag, setModalShow))
  }

  const handleDeleteTag = (id) =>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        console.log(id);
        dispatch(deleteTag(id))
      }
    });
  }
  return (
    <div className='container'>
        <div className="row justify-content-center">
            <div className="col-md-6 mt-4">
                <div className='card shadow-sm'>
                <div className="allBtns">
                <Link to="/admin/product" className='btn btn-primary w-25 text-white'>Back</Link>
                </div>
                    <div className="card-body">
                    <div className="card-header d-flex justify-content-between align-items-center">
                    <h2 className='display-3'>All Tag's</h2>
                    
                    <button  className='btn btn-warning w-25 text-white' onClick={() => setModalShow(true)}>Add Tag</button>
                    </div>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Items</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                            tags && tags.map((data, index)=>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{data.tagName}</td>
                                <td>5000</td>
                                <td>
                                    <i class="fa-thin fa-trash btn btn-danger" onClick={()=>handleDeleteTag(data._id)}></i>
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




        {/* Bootstrap modal */}
        <Modal show={modalShow} size="sm" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header>
        
        <Modal.Title id="contained-modal-title-vcenter" className='d-flex justify-content-between w-100'>
          Add New Category
          <CloseButton  onClick={() => setModalShow(false)}/>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action=""  onSubmit={ HandleTagForm }>
            <div className='my-3'>
                <label>Category Name </label>
                <input type="text" name='ctg_name' className='form-control' value={tag} onChange={(e)=>setTag(e.target.value)}/>
            </div>
            
            <button className='btn btn-primary' type='submit'>Add Category</button>
        </form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>


  )
}

export default Tag