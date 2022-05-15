import { Button, Form, Input, Popup, Toast } from 'antd-mobile';
import classNames from 'classnames';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useHistory } from 'react-router-dom';

import UserApi from '@/api/index/user';

import Header from '../Header';
import styles from './index.module.scss';

export interface VerifyTypes {
  setVisible(visible: boolean): void;
}

const PopupVerify = (_, ref) => {
  const { userInfo } = _;

  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [second, setSecond] = useState(60);
  const [timing, setTiming] = useState(false);

  const onFinish = async (value: any) => {
    const res = await UserApi.securityCheck(value);
    if (res.code === 0) {
      history.push({
        pathname: '/setting/transaction/password',
        state: {
          isFirst: false,
        },
      });
    } else {
      Toast.show({
        content: res.msg,
        duration: 1000,
      });
    }
  };

  const validateMessages = {
    required: "Please enter login '${name}'",
  };

  useImperativeHandle(ref, () => ({
    setVisible: (visible: boolean) => {
      setVisible(visible);
    },
  }));

  const sendVerify = () => {
    sendCode();
  };

  const sendCode = async () => {
    if (second < 60) return;
    const res = await UserApi.getEmailCode({
      email: userInfo?.email,
      template_code: 'SECURITY_CODE',
    });
    if (res.code === 0) {
      Toast.show({
        content: '发送成功',
        duration: 1000,
      });
      setTiming(true);
    }
  };

  React.useEffect(() => {
    let interval = 0;
    if (timing) {
      interval = window.setInterval(() => {
        setSecond((preSecond) => {
          if (preSecond <= 1) {
            setTiming(false);
            clearInterval(interval); // 重置秒数

            return second || 60;
          }

          return preSecond - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timing]);

  return (
    <Popup
      visible={visible}
      onMaskClick={() => {
        setVisible(false);
      }}
      position="bottom"
      bodyStyle={{
        minHeight: '60vh',
        borderTopLeftRadius: '0.32rem',
        borderTopRightRadius: '0.32rem',
      }}
    >
      <div className={styles.popupContainer}>
        <Header title="安全验证" onBack={() => setVisible(false)} />
        <Form
          name="form"
          onFinish={onFinish}
          requiredMarkStyle="text-optional"
          className={styles.Form}
          validateMessages={validateMessages}
          footer={
            <Button
              className={styles.submit}
              block
              type="submit"
              color="primary"
              size="large"
            >
              Submit
            </Button>
          }
        >
          <Form.Item
            className={styles.FormItem}
            name="code"
            label={userInfo?.email}
            rules={[{ required: true }]}
            extra={
              <div className={styles.send} onClick={sendVerify}>
                {second < 60 ? (
                  <span className="tetx-color-secondary">{`Rensend(${second}s)`}</span>
                ) : (
                  '发送'
                )}
              </div>
            }
          >
            <Input placeholder="邮箱验证码" className={styles.input} />
          </Form.Item>
          <Form.Item
            className={styles.FormItem}
            name="pay_password"
            label="交易密码 "
            rules={[{ required: true }]}
          >
            <Input
              className={classNames(styles.input, styles.password)}
              placeholder="交易密码"
              type="password"
              clearable
            />
          </Form.Item>
        </Form>
      </div>
    </Popup>
  );
};

export default forwardRef(PopupVerify);
