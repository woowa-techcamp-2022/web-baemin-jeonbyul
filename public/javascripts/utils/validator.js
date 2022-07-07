export const isEmaill = (email) => {

    const reg_email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    return reg_email.test(email)

}

export const isUserId = (userId) => {
    
    const reg_userId = /^[a-z]+[a-z0-9]{5,19}$/g;
    
    return reg_userId.test(userId)
    
}

export const isPassword = (password) => {
    
    const reg_password = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    
    return reg_password.test(password)
}