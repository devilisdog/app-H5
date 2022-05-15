import { Button, Form, Input, Toast } from 'antd-mobile';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import UserApi from '@/api/index/user';
import Header from '@/components/Header';
import SvgIcon from '@/components/SvgIcon';

import styles from './index.module.scss';
interface PasswordValue {
  preValue: string;
  realValue: string;
}
const Register = (props) => {
  const history = useHistory();
  const [isHide, setIsHide] = useState(true);
  const [checked, setChecked] = useState(true);

  const onFinish = async (values: any) => {
    console.log('onFinish', values);
    const res = await UserApi.register(values);
    if (res.code === 0) {
      Toast.show({
        content: '提交中...',
        afterClose: () => {
          history.push({
            pathname: '/verification/code',
            state: { email: values.email, register: true },
          });
        },
      });
    } else {
      Toast.show(res.msg);
    }
  };
  const checkMobile = (_: any, value) => {
    if (value) {
      // eslint-disable-next-line no-undef
      return Promise.resolve();
    }
    // eslint-disable-next-line no-undef
    return Promise.reject(new Error('密码不能为空!'));
  };
  return (
    <div className={styles.container}>
      <Header title="" />
      <h1 className="pb-40">Register</h1>
      <div className={styles.content}>
        <div>
          <Form
            name="form"
            onFinish={onFinish}
            requiredMarkStyle="text-optional"
            className={styles.Form}
            footer={
              <Button
                className={styles.submit}
                block
                type="submit"
                color="primary"
                size="large"
                disabled={!checked}
              >
                Submit
              </Button>
            }
          >
            <Form.Item
              className={styles.FormItem}
              name="email"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input placeholder="请输入用户名" className={styles.input} />
            </Form.Item>
            <Form.Item
              className={styles.FormItem}
              name="login_password"
              label="Password"
              rules={[
                {
                  required: true,
                  // validator: checkMobile,
                  message: '密码至少8位并包含大写字母和数字',
                  pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
                },
              ]}
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
                className={styles.input}
                placeholder="Please enter login password"
                type={isHide ? 'password' : 'text'}
                clearable
              />
            </Form.Item>
            <p className={styles.desc}>密码至少8位并包含大写字母和数字</p>
          </Form>

          <div className="pt-12">
            {checked ? (
              <SvgIcon
                onClick={() => setChecked(!checked)}
                iconClass={'checked'}
                fontSize=".32rem"
              />
            ) : (
              <SvgIcon
                onClick={() => setChecked(!checked)}
                iconClass="checkbox"
                fontSize=".32rem"
              />
            )}
            <span className="pl-6"> Agreed to</span>
            <span
              className="text-color-27B8C5 "
              onClick={() => history.push('/about/service')}
            >
              User Agreement
            </span>
            <span>&nbsp;and&nbsp;</span>
            <span
              className="text-color-27B8C5 "
              onClick={() => history.push('/about/privacy')}
            >
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
