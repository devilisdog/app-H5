import request from '../request';

class UserApi {
  // 登陆检测
  static loginCheck = (params: {}): Promise<any> =>
    request('/user/loginCheck', 'POST', params, true);
  // 用户登陆
  static login = (params: {}): Promise<any> =>
    request('/user/login', 'POST', params, true);
  // 获取用户信息
  static getUserInfo = (params: {}): Promise<any> =>
    request('/user/info', 'GET', params, true);
  // 注册
  static register = (params: {}): Promise<any> =>
    request('/user/register', 'POST', params, true);
  // 获取邮箱验证码
  static getEmailCode = (params: {}): Promise<any> =>
    request('/email/send', 'POST', params, true);
  // 重制密码
  static resetPassword = (params: {}): Promise<any> =>
    request('/user/resetLoginPassword', 'POST', params, true);
  // 验证邮箱Code
  static verifyEmailCode = (params: {}): Promise<any> =>
    request('/email/verifyEmailCode', 'POST', params, true);
  // 设置支付密码
  static setPayPassword = (params: {}): Promise<any> =>
    request('/user/setPayPassword', 'POST', params, true);
  // 修改登录密码
  static setLoginPassword = (params: {}): Promise<any> =>
    request('/user/changeLoginPassword', 'POST', params, true);
  // 修改支付密码
  static changePayPassword = (params: {}): Promise<any> =>
    request('/user/changePayPassword', 'POST', params, true);
  // 支付安全验证
  static securityCheck = (params: {}): Promise<any> =>
    request('/user/securityCheck', 'POST', params, true);
}

export default UserApi;
