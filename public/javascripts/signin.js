import { isEmaill, isUserId , isPassword } from "./utils/validator.js";  
import { signIn  } from "./requests/user.js";

const $loginForm =  document.querySelector('.login-form')
const $userId = $loginForm.userId
const $password = $loginForm.password
const $userIdErr = document.querySelector('.userId-err')
const $passwordErr = document.querySelector('.password-err')
const $loginErr = document.querySelector('.login-err')

$loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const [ userId , password ] = [ e.target.userId.value, e.target.password.value ]
    const isValid = handleErrorCheck(userId, password)
    if(isValid){
        const res = await signIn({userId,password})
        if(res.result == 1){
            location.href = '/';
        }else{
            handleValidationError($loginErr , "유효하지 않은 로그인 정보입니다");
            e.target.password.value = ""
        } 
    }
})

/* 함수명 수정하기*/
const handleErrorCheck = (userId, password) => {
    let isValid = true
    if(!userId){
        handleValidationError($userIdErr , "아이디를 입력해 주세요");
        isValid = false
    }else if ( !isEmaill(userId) && !isUserId(userId) ){
        handleValidationError($userIdErr , "잘못된 이메일 입니다.");
        isValid = false
    }

    if(!password){
        handleValidationError($passwordErr, "패스워드를 입력해 주세요.")
        isValid = false
    }else if(!isPassword(password) ){
        handleValidationError($passwordErr, "8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합해주세요")
        isValid = false
    } 
    return isValid;
}

const handleValidationError = ($el, errMsg) => {
    $el.innerHTML = errMsg
}

$userId.addEventListener("focus", () => { $userIdErr.innerHTML = "" , loginErr.innerHTML = ""})

$password.addEventListener("focus", () => { $passwordErr.innerHTML = "", loginErr.innerHTML = ""})