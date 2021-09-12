import http from './http'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = "/user-service"
let resquests = "http://27.0.0.1:8088/infoDemo/api"
 
// 账号密码登陆
export function postPasLogin(name, pass) {
    return http.post(`${resquest}/account/login_c?email=${name}&type=2&typeCode=${pass}`)
}
//验证码登陆
export function postCodeLogin(email, code) {
    return http.post(`${resquest}/account/login_c?email=${email}&type=1&typeCode=${code}`)
}
//登陆获取邮箱验证码
export function postEmailCode(email) {
    return http.post(`${resquest}/auth/send?target=${email}&type=EMAIL_LOGIN`)
}
//注册获取验证码
export function postRegisterCode(email) {
    return http.post(`${resquest}/auth/send?target=${email}&type=EMAIL_SIGNUP`)
}
 
//注册账号
export function postRegisterAccount(email, code) {
    return http.post(`${resquest}/auth/check?type=EMAIL_SIGNUP&target=${email}&authCode=${code}`)
}
//注册账号--基本信息
export function postRegisterAccountInfo(params) {
    return http.post(`${resquest}/account/signup_c`, JSON.stringify(params))
}
//获取当前用户基本信息
export function getAccountInfo() {
    return http.get(`${resquest}/account/info`)
}
//修改账户基本信息
export function saveChangeInfo(params) {
    return http.post(`${resquest}/account/update_info`, JSON.stringify(params))
}
//修改基本信息 ----邮箱 获取验证吗
export function postChangeEmailCode(email) {
    return http.post(`${resquest}/auth/send?target=${email}&type=EMAIL_VALID`)
}
 
//修改基本信息 ----手机 获取验证吗
export function postChangePhoneCode(phone) {
    return http.post(`${resquest}/auth/send?target=${phone}&type=PHONE_VALID`)
}
//修改基本信息 ----验证邮箱 
export function postChangeEmail(code, email) {
    return http.post(`${resquest}/account/update_email?authCode=${code}&email=${email}`)
}
//修改基本信息 ----验证手机
export function postChangePhone(code, phone) {
    return http.post(`${resquest}/account/update_phone?authCode=${code}&email=${phone}`)
}

//测试路由
export function getTokenStr() {
    return http.post(`${resquests}/getToken`)
}