import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert'
import { createNewProduct } from '../../redux/product/action';
import { useDispatch, useSelector } from 'react-redux';

const CreateProduct = () => {

    // get all category and tags
    const {categorys, tags} = useSelector(state => state.product)

    const dispatch = useDispatch()
    // products state
    const [product, setProduct] = useState({
        name : '',
        regular_price : '',
        sell_price : '',
        stock : '',
        photo : '',
        gallery_photo : '',
        categorys : [],
        tags : []
    })
    


    // form data update 
    const handleformInpUpdate = (e) =>{
        setProduct((preValue)=>({
            ...preValue,
            [e.target.name] : e.target.value
        }))
    }

    // category update
    const handleCategoryUpdate = (e) =>{
        if (e.target.checked) {
            
            let allCateg = product.categorys;
            allCateg.push(e.target.value)
            setProduct((preValue)=>({
                ...preValue,
                categorys : allCateg
            }))
            
        }else{
            let allCateg = product.categorys;
            let newCateg = allCateg.filter(data => data != e.target.value)
            setProduct((preValue)=>({
                ...preValue,
                categorys : newCateg
            }))
        }
    }
    // tags update
    const handleTagsUpdate = (e) =>{
        if (e.target.checked) {
            
            let allTags = product.tags;
            allTags.push(e.target.value)
            setProduct((preValue)=>({
                ...preValue,
                tags : allTags
            }))
            
        }else{
            let allTags = product.tags;
            let newTags = allTags.filter(data => data != e.target.value)
            setProduct((preValue)=>({
                ...preValue,
                tags : newTags
            }))
        }
    }

    // product photo
    const handleProductPgoto = (e) =>{
        setProduct((prevData) =>({
            ...prevData,
            photo : e.target.files[0]
        }))
    }

    // product gallery
    const handleProductGallery = (e) =>{
        setProduct((prevData)=>({
            ...prevData,
            gallery_photo : e.target.files
        }))
    }


    // add new product
    const handleProductForm = (e) =>{
        e.preventDefault()

        // from data use for make a form object and manage form with image audio video
        // if you use formData then don't need to add action and enctype
        const allData = new FormData()
        allData.append('name', product.name)
        allData.append('regular_price', product.regular_price)
        allData.append('sell_price', product.sell_price)
        allData.append('stock', product.stock)
        allData.append('categorys', product.categorys)
        allData.append('tags', product.tags)
        allData.append('photo', product.photo)
        // for multiple photo 
        for (let i = 0; i < product.gallery_photo.length; i++) {
            allData.append('gallery_photo', product.gallery_photo[i])
        }
        

    
        // we can do here but best is call all api in action.js
        // I don't get any response
        dispatch(createNewProduct(allData))
        

        // cleare state
        setProduct({
                name : '',
                regular_price : '',
                sell_price : '',
                stock : '',
                categorys : [],
                tags : []
            })
            e.target.reset()
    }
    
    
    
  return (
    <div className='container'>
        <div className="row justify-content-center">
            <div className="col-md-6 mt-4">
                <div className='card shadow-sm'>
                    <div className="card-body">
                    
                    <div className="card-header d-flex justify-content-between align-items-center">
                    <h2 className='display-5'>Add New Product</h2>
                    <Link to="/admin/product" className='btn btn-success w-25'>Back</Link>
                    
                    </div>
                        <form action="" onSubmit={ handleProductForm } method='POST' encType='multipart/form-data'>
                            <div className='my-3'>
                                <label>Product Name * </label>
                                <input type="text" name='name' required className='form-control' value={product.name} onChange={ handleformInpUpdate }/>
                            </div>
                            <div className='my-3'>
                                <label>Regular Price </label>
                                <input type="text" name='regular_price' className='form-control' value={product.regular_price} onChange={ handleformInpUpdate }/>
                            </div>
                            <div className='my-3'>
                                <label>Sell Price * </label>
                                <input type="text" name='sell_price' className='form-control' value={product.sell_price} onChange={ handleformInpUpdate }/>
                            </div>
                            
                            <div className='my-3'>
                                <label>Stock * </label>
                                <input type="number" name='stock' className='form-control' value={product.stock} onChange={ handleformInpUpdate } />
                            </div>
                            <div className='my-3'>
                                <label>Product photo * </label>
                                <input type="file" name='photo' className='form-control' onChange={ handleProductPgoto } required/>
                            </div>
                            <div className='my-3'>
                                <label>Gallery photo (3)* </label>
                                <input type="file" name='gallery_photo' className='form-control' multiple onChange={ handleProductGallery } required/>
                            </div>
                            <div className='my-3'>
                                <p>Select Category</p>
                                {
                                    categorys && categorys.map((data, index) =>
                                    
                                        <span className='mx-2'>
                                            
                                            <input type="checkbox" id={data.ctgName+index + data._id} name='categorys' value={data._id} className='mx-1' onChange={ handleCategoryUpdate }/>
                                            <label for={data.ctgName+index + data._id}>{data.ctgName}</label>
                                        </span>
                                        ) 
                                }
                                
                                
                            </div>
                            <div className='my-3'>
                                <p>Select Tag</p>
                                {
                                    
                                    tags && tags.map((data, index) =>
                                        <span className='mx-2'>
                                            
                                            <input type="checkbox" id={data.tagName+index + data._id} name='' value={data._id} className='mx-1' onChange={handleTagsUpdate}/>
                                            <label for={data.tagName+index + data._id}>{data.tagName}</label>
                                        </span>
                                        ) 
                                }
                                
                                
                            </div>
                            <button className='btn btn-primary' type='submit'>Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateProduct 