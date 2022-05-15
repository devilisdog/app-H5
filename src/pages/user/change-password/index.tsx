import { Button, Form, Input, Toast } from 'antd-mobile';
import React from 'react';
import { useHistory } from 'react-router-dom';

import UserApi from '@/api/index/user';
import Header from '@/components/Header';

import styles from './index.module.scss';

const ChangePassword = () => {
  const history = useHistory();
  const onFinish = async (values: any) => {
    console.log('onFinish', values);
    history.push({
      pathname: '/verification/code',
      state: { email: values.email },
    });
  };

  return (
    <div className={styles.container}>
      <Header title="" />
      <h1 className="pb-40">
        Change
        <br /> login password
      </h1>
      <div className={styles.content}>
        <p className={styles.title}>Please enter the correct Password</p>
        <Form
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
            >
              Get verification code
            </Button>
          }
        >
          <Form.Item
            className={styles.FormItem}
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please enter a valid email address',
              },
            ]}
          >
            <Input placeholder="请输入用户名" className={styles.input} />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;
