export const isEmaill = (email) => {

    const reg_email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if(!reg_email.test(email)){
        return false;
    }

    return true ;
    
}

export const isUserId = (str) => {

}

export const isPassword = (password) => {
    
    const req_password = /^[a-zA-Z0-9]{8,16}$/;
    
    if(!req_password.test(password)){
        return false 
    }

    return true
}