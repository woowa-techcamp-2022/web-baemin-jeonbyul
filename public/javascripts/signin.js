import { isEmaill, isUserId , isPassword } from "./utils/validator.js";  

const $loginForm =  document.querySelector('.login-form')
const $userId = $loginForm.userId
const $password = $loginForm.password
const $userIdErr = document.querySelector('.userId-err')
const $passwordErr = document.querySelector('.password-err')


$loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [ userId , password ] = [ e.target.userId.value, e.target.password.value ]
    if(!userId){
        handleValidationError($userIdErr , "아이디를 입력해 주세요")
    }else if ( !isEmaill(userId) || !isUserId(userId) ){
        handleValidationError($userIdErr , "잘못된 이메일 입니다.")
    }

    if(!password){
        handleValidationError($passwordErr, "패스워드를 입력해 주세요.")
    }else if(!isPassword(password) ){
        handleValidationError($passwordErr, "잘못된 패스워드 입니다.")
    } 
})

const handleValidationError = ($el, errMsg) => {
    $el.innerHTML = errMsg
}

$userId.addEventListener("focus", () => { $userIdErr.innerHTML = ""})

$password.addEventListener("focus", () => { $passwordErr.innerHTML = ""})