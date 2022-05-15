import { Button, PasscodeInput, Toast } from 'antd-mobile';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import UserApi from '@/api/index/user';
import Header from '@/components/Header';

import styles from './index.module.scss';

const ChangeTransactionPassword = (props) => {
  const { state } = props.location;
  const [error, setError] = useState(false);
  const [pwd, setPwd] = useState('');
  const history = useHistory();
  const onChange = (value: string) => {
    setPwd(value);
  };

  const setPayPassword = async () => {
    const res = state?.isFirst
      ? await UserApi.setPayPassword({ pay_password: pwd })
      : await UserApi.changePayPassword({ pay_password: pwd });
    if (res.code === 0) {
      Toast.show({
        content: '设置成功',
        duration: 1000,
        afterClose: () => {
          history.push('/my');
        },
      });
    }
  };
  return (
    <div className={styles.container}>
      <Header title="" />
      <h1 className="pb-40">
        Please enter <br />
        Transaction password
      </h1>
      <div className={styles.content}>
        <PasscodeInput
          className={styles.codeInput}
          seperated
          plain
          onChange={onChange}
          onFocus={() => console.log('focus')}
          value={pwd}
          error={error}
        />
        <Button
          onClick={setPayPassword}
          className={styles.submit}
          block
          type="submit"
          color="primary"
          size="large"
          disabled={pwd.length !== 6}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ChangeTransactionPassword;
