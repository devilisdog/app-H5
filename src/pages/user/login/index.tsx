import { Button, Form, Input, Toast } from 'antd-mobile';
import { DownOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import UserApi from '@/api/index/user';
import SvgIcon from '@/components/SvgIcon';

import styles from './index.module.scss';

const Login = () => {
  const history = useHistory();
  const [isHide, setIsHide] = useState(true);
  const onFinish = async (values) => {
    const res = await UserApi.loginCheck(values);
    if (res.code === 0) {
      const { certificate } = res.data;
      const result = await UserApi.login({
        certificate,
        code: 0,
      });
      if (result) {
        localStorage.setItem('access_token', result.data.access_token);
        Toast.show({
          content: '登录成功',
          duration: 1000,
          afterClose: () => {
            history.push('/index');
          },
        });
      }
    } else {
      Toast.show({
        content: res.msg,
        duration: 2000,
      });
    }
  };
  const validateMessages = {
    required: "Please enter login '${name}'",
  };
  return (
    <div className={styles.container}>
      <h1>Hello</h1>
      <h2>Please Login</h2>
      <div className={styles.content}>
        <div>
          <Form
            name="form"
            onFinish={onFinish}
            requiredMarkStyle="text-optional"
            className={styles.Form}
            validateMessages={validateMessages}
          >
            <Form.Item
              className={styles.FormItem}
              name="email"
              label="Username"
              initialValue={'364875435@qq.com'}
              rules={[{ required: true }]}
            >
              <Input placeholder="请输入用户名" className={styles.input} />
            </Form.Item>
            <Form.Item
              className={styles.FormItem}
              name="login_password"
              label="Password "
              rules={[{ required: true }]}
              initialValue={'123456'}
              extra={
                <div className={styles.eye} onClick={() => setIsHide(!isHide)}>
                  <SvgIcon
                    fontSize="0.32rem"
                    iconClass={isHide ? 'eye' : 'eyeInvisible'}
                  />
                </div>
              }
            >
              <Input
                className={classNames(styles.input, styles.password)}
                placeholder="Please enter login password"
                type={isHide ? 'password' : 'text'}
                clearable
              />
            </Form.Item>
            <p
              className={styles.forgot}
              onClick={() => history.push('/verification/email')}
            >
              Forgot your password?
            </p>
            <Button
              className={styles.submit}
              block
              type="submit"
              color="primary"
              size="large"
            >
              Login
            </Button>
          </Form>

          <p className={styles.register}>
            还没有账号？
            <button onClick={() => history.push('/register')}>立即注册</button>
          </p>
        </div>
        <div className={styles.LoginFooter}>
          <p>
            English <DownOutline />
          </p>
          <p>Support</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
