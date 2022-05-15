import { Button, Form, Input, Toast } from 'antd-mobile';
import classNames from 'classnames';
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
  const history = useHistory<any>();
  const [form] = Form.useForm();
  const { params } = history.location.state || { params: false };
  const { state } = props.location;

  const [isHide, setIsHide] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const onFinish = async (values: any) => {
    if (values.new_password === values.confirm_password) {
      if (params) {
        const res = await UserApi.setLoginPassword({
          old_password: values?.password,
          password: values.new_password,
        });
        if (res.code === 0) {
          Toast.show({
            content: '修改成功',
            afterClose: () => {
              history.push('/login');
            },
          });
        } else {
          Toast.show(res.msg);
        }
      } else {
        const res = await UserApi.resetPassword({
          code: state?.code,
          code_type: 1,
          email: state?.email,
          new_login_password: values.new_password,
        });
        if (res.code === 0) {
          Toast.show({
            content: '重制成功',
            afterClose: () => {
              history.push('/login');
            },
          });
        } else {
          Toast.show(res.msg);
        }
      }
    } else {
      Toast.show('两次密码不一致');
      return;
    }
  };
  const checkMobile = (_: any, value) => {
    if (value && value === form.getFieldValue('new_password')) {
      setDisabled(false);
      // eslint-disable-next-line no-undef
      return Promise.resolve();
    }
    setDisabled(true);
    // eslint-disable-next-line no-undef
    return Promise.reject(new Error('2次密码不一致!'));
  };
  return (
    <div className={styles.container}>
      <Header title="" />
      <h1 className="pb-40">
        {params ? 'Change' : 'Reset'}
        <br /> login password
      </h1>
      <div className={styles.content}>
        {/* 如果登录了，有提示，且需要输入原密码 */}
        {params && <p className={styles.title}>修改交易密码后，24小时内将被限制交易</p>}
        <div>
          <Form
            name="form"
            form={form}
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
                disabled={disabled}
              >
                Submit
              </Button>
            }
          >
            {params && (
              <Form.Item
                className={styles.FormItem}
                name="password"
                label="原密码"
                rules={[
                  {
                    required: true,
                    message: '请输入数字大小写字母组合密码',
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
                  className={classNames(styles.input, styles.password)}
                  placeholder="新密码"
                  type={isHide ? 'password' : 'text'}
                  clearable
                />
              </Form.Item>
            )}
            <Form.Item
              className={styles.FormItem}
              name="new_password"
              label="新密码"
              rules={[
                {
                  required: true,
                  message: '请输入数字加字母组合密码',
                  pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
                  // validator: checkMobile,
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
                className={classNames(styles.input, styles.password)}
                placeholder="请输入新的登录密码"
                type={isHide ? 'password' : 'text'}
                clearable
              />
            </Form.Item>
            <Form.Item
              className={styles.FormItem}
              name="confirm_password"
              label="确认新密码"
              rules={[
                {
                  required: true,
                  message: '2次密码不一致',
                  validator: checkMobile,
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
                className={classNames(styles.input, styles.password)}
                placeholder="请再次输入新的登录密码"
                type={isHide ? 'password' : 'text'}
                clearable
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
