import { Button, PasscodeInput, Toast } from 'antd-mobile';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import UserApi from '@/api/index/user';
import Header from '@/components/Header';

import styles from './index.module.scss';
interface PasswordValue {
  preValue: string;
  realValue: string;
}
const VerificationCode = (props) => {
  console.log(props);
  const { state } = props.location;
  const [error, setError] = useState(false);
  const [timing, setTiming] = useState(true);

  const [code, setCode] = useState('');
  const [second, setSecond] = useState(60);
  const history = useHistory();
  const onChange = async (value: string) => {
    setCode(value);
  };

  const verifyEmailCode = async () => {
    const res = await UserApi.verifyEmailCode({
      validate_code: code,
      email: state?.email,
    });
    if (res.code === 0) {
      Toast.show({
        content: '验证成功',
        duration: 1000,
        afterClose: () => {
          if (state?.register) {
            history.push({
              pathname: '/login',
            });
          } else {
            history.push({
              pathname: '/reset',
              state: { email: state.email, code },
            });
          }
        },
      });
    } else {
      Toast.show(res.msg);
      setError(true);
    }
  };

  const sendCode = async () => {
    if (second < 60) return;
    const res = await UserApi.getEmailCode({
      email: state?.email,
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
    if (code.length === 6) {
      verifyEmailCode();
    }
  }, [code]);

  React.useEffect(() => {
    sendCode();
  }, []);

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
    <div className={styles.container}>
      <Header title="" />
      <h1 className="pb-40">
        Please enter <br />
        Email verification code
      </h1>
      <div className={styles.content}>
        <p className={styles.title}>Email verification code has been sent to :</p>
        <p className={styles.email}>
          {state?.email.replace(/(.{2}).+(.{2}@.+)/g, '$1****$2')}
        </p>
        <PasscodeInput
          className={styles.codeInput}
          seperated
          plain
          onChange={onChange}
          onFocus={() => console.log('focus')}
          value={code}
          error={error}
        />
        <div className="flex flex-j-e">
          <Button
            fill="none"
            onClick={sendCode}
            className={classNames(styles.send, second < 60 ? styles.disabled : '')}
          >
            Rensend {second < 60 ? `(${second}s)` : ''}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
