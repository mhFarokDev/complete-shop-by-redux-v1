import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import { useSelector } from 'react-redux';

const SingleView = ({action, setModalShow}) => {

    const {singleProduct} = useSelector(state => state.product)
  return (
    
    <Modal show={action} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
        {/* Bootstrap modal */}
    <Modal.Header>
      
      <Modal.Title id="contained-modal-title-vcenter" className='d-flex justify-content-between w-100'>
        Singl View
        <CloseButton  onClick={() => setModalShow(false)}/>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className='single-product-body d-flex justify-content-between gap-3'>
          <div className="single-image w-50">
          <div className="row">
            <div className="col-md-12">
            <img src={`http://localhost:5050/images/products/featured/${singleProduct.photo}`} className='card-img' alt="" />
            </div>
            {
              singleProduct.gallery_photo && singleProduct.gallery_photo.map(data=>
                <div className="col-md-4"><img src={`http://localhost:5050/images/products/gallery/${data}`} className='card-img' alt="" /></div>
                )
            }
            
          </div>
          </div>
          <div className="single-details w-50">
              <h4>{singleProduct.name}</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minus quo amet sapiente eum id architecto et possimus inventore, hic pariatur magnam ratione error optio voluptatibus praesentium? Et, ea incidunt.</p>
              <p>Price : ${singleProduct.sell_price}</p>
              <button className='btn btn-dark'>Add to cart</button>
          </div>
      </div>

    </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => setModalShow(false)}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default SingleView