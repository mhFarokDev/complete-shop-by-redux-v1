
import { DELETE_DATA_UPDATE, FILTER_DEL_CTG, FILTER_DEL_TAG, GET_ALL_CATEGORY, GET_ALL_TAG, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT, PRODUCT_REQUEST, PUT_CATEGORY, PUT_TAG } from "./actionType"
import axios from "axios"
import swal from 'sweetalert'




// product request action
export const productRequest  = () =>{
    return{
        type : PRODUCT_REQUEST,
    }
}

// product request action
export const productGetSuccess  = (payload) =>{
    return{
        type : GET_PRODUCT_SUCCESS,
        payload
    }
}

// product request action
export const productRequestFail  = (payload) =>{
    return{
        type : GET_PRODUCT_FAIL,
        payload
    }
}


// delete data remove from redux
export const sliceDeleteData = (payload) =>{
    return{
        type : DELETE_DATA_UPDATE,
        payload
    }
}




// get all product from database
export const getAllProduct = () => async (dispatch) =>{
    try {
        dispatch(productRequest())
        await axios.get('http://localhost:5050/api/v1/product')
        .then(res=>{
        dispatch(productGetSuccess(res.data))
        })
        .catch(err=>dispatch(productRequestFail(err.message)))
    } catch (error) {
        dispatch(productRequestFail(error.message))
    }
}


export const createNewProduct =  (data) => async (dispatch) =>{
    try {
        await axios.post('http://localhost:5050/api/v1/product', data)
        .then((res)=>{
            
            swal({
                title: "Success!",
                text: "New product added successful. you can check now.",
                icon: "success",
                dangerMode: false,
              })
              dispatch(getAllProduct())
        })
        .catch((err)=>{
            swal({
                title: "Faild!",
                text: "New product not added. Try again.",
                icon: "warning",
                dangerMode: true,
              })
            console.log(err.message);
        })
    } catch (error) {
        swal({
            title: "Faild!",
            text: "New product not added. check console.",
            icon: "warning",
            dangerMode: true,
          })
        console.log(error);
    }
}

// edit product (name. reg-sel-stock)
export const updateProductData =  (id, data, setShowModalUpdate) => async(dispatch) =>{
    
    try {
        await axios.put(`http://localhost:5050/api/v1/product/${id}`, data)
        .then(res=>{
            dispatch(getAllProduct())
            setShowModalUpdate(false)
        })
        .catch(err=>{
            console.log(err);
        })
    } catch (error) {
        
    }
}

// get single product
export const getSingleProduct = (id) => (dispatch) =>{
    // we can send new request
    // axios.get('.../id')
    dispatch({
        type : GET_SINGLE_PRODUCT,
        payload : id
    })
}


// delete product
export const deleteProduct = (id) => async (dispatch) =>{
    try {
        await axios.delete(`http://localhost:5050/api/v1/product/${id}`)
        .then(res=>{
            dispatch(sliceDeleteData(res.data))
        })
        .catch(err=>{
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}


// get all products like a function
// get payload and update dispatch
// export const getAllProduct = (payload) =>{
//     return{
//         type : GET_PRODUCT_SUCCESS,
//         payload : payload
//     }
// }



// Categorys

export const getCategoryRequest = (payload) =>{
    return{
        type : GET_ALL_CATEGORY,
        payload
    }
}

// push newCategory
export const pushCategory = (payload) =>{
    return{
        type : PUT_CATEGORY,
        payload
    }
}

// filter delete category
export const filterDeleteCtg = (payload) =>{
    return{
        type : FILTER_DEL_CTG,
        payload
    }
}

// get all category
export const getAllCategory = () => async (dispatch) => {
    try {
        await axios.get('http://localhost:5050/api/v1/product/addcategory').then(res=>{
            dispatch(getCategoryRequest(res.data))
        })
    } catch (error) {
        getCategoryRequest(error.message)
    }
    
}

// add new Category
export const addNewCategory =  (ctgData, setCtg, setModalShow) => async (dispatch) =>{
    try {
        await axios.post('http://localhost:5050/api/v1/product/addcategory', ctgData)
        .then(res=>{
            setCtg('')
            setModalShow(false)
            dispatch(pushCategory(res.data))
        })
    } catch (error) {
        swal({
            title: "Faild!",
            text: "Category not added something worng!",
            icon: "warning",
            dangerMode: true,
          }) 
    }
}

// delete category
export const deleteCatg = (id) => (dispatch) =>{
    try {
        axios.delete(`http://localhost:5050/api/v1/product/addcategory/${id}`)
        .then(res=>{
            swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
              dispatch(filterDeleteCtg(res.data))
        })
    } catch (error) {
        swal("Data not deleted!", {
            icon: "warning",
          });
    }
}


// Tags
// pass action(type, payload)
export const getTagRequest = (payload) =>{
    return {
        type : GET_ALL_TAG,
        payload
    }
}
// push newCategory
export const pushTag = (payload) =>{
    
    return{
        type : PUT_TAG,
        payload
    }
}

// filter delete category
export const filterdeleteTag = (payload) =>{
    return{
        type : FILTER_DEL_TAG,
        payload
    }
}
// get all tag
export const getAllTag = () => async (dispatch) =>{
    try {
        axios.get('http://localhost:5050/api/v1/product/addtag').then(res =>{
            dispatch(getTagRequest(res.data))
        }).catch(err => dispatch(getTagRequest(err.message)))
    } catch (error) {
        dispatch(getTagRequest(error.message))
    }
}


// add new tag
export const addNewTag =  (TagData, setTag, setModalShow) => async (dispatch) =>{
    try {
        await axios.post('http://localhost:5050/api/v1/product/addtag', TagData)
        .then(res=>{
            
            setTag('')
            setModalShow(false)
            dispatch(pushTag(res.data))
        })
    } catch (error) {
        swal({
            title: "Faild!",
            text: "Tag not added something worng!",
            icon: "warning",
            dangerMode: true,
          }) 
    }
}

// delete tag
export const deleteTag = (id) => (dispatch) =>{
    try {
        axios.delete(`http://localhost:5050/api/v1/product/addtag/${id}`)
        .then(res=>{
            swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
              dispatch(filterdeleteTag(res.data))
        })
    } catch (error) {
        swal("Data not deleted!", {
            icon: "warning",
          });
    }
}