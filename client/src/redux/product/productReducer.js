import { DELETE_DATA_UPDATE, FILTER_DEL_CTG, FILTER_DEL_TAG, GET_ALL_CATEGORY, GET_ALL_TAG, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT, PRODUCT_REQUEST, PUT_CATEGORY, PUT_TAG } from "./actionType";
import initialState from "./initialState";

const productReducer = (state = initialState,{type, payload} ) =>{
    switch (type) {
        case PRODUCT_REQUEST:
            return{
                ...state,
                skeleton : true
            };
        case GET_PRODUCT_SUCCESS:
            return{
                ...state,
                products : payload,
                skeleton : false
            };
        case GET_PRODUCT_FAIL:
            return{
                ...state,
                error : payload,
                skeleton : false
            };
        case DELETE_DATA_UPDATE:
            return{
                ...state,
                products : state.products.filter(data => data._id != payload._id)
            };
        case GET_ALL_CATEGORY:
            return{
                ...state,
                categorys : payload
            };
        case GET_ALL_TAG:
            return{
                ...state,
                tags : payload
            };
        case GET_SINGLE_PRODUCT:
            return{
                ...state,
                singleProduct : state.products.find(data => data._id == payload)
            };
        case PUT_CATEGORY:
            return{
                ...state,
                categorys : [...state.categorys, payload]
            };
        case FILTER_DEL_CTG:
            return{
                ...state,
                categorys : state.categorys.filter(data => data._id != payload._id)
                
            };
        case PUT_TAG:
            console.log('done');
        return{
            ...state,
            tags : [...state.tags, payload]
        };
        case FILTER_DEL_TAG:
            return{
                ...state,
                tags : state.tags.filter(data => data._id != payload._id)
                
            };
    
        default: 
        return state;
    }
}


export default productReducer;