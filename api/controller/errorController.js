const errorController = (status, message) =>{
    const error = new Error()
    error.message = message
    error.status = status
    
    return error;
}


export default errorController