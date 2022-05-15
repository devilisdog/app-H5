import { Button, NavBar, NumberKeyboard, PasscodeInput, Toast } from 'antd-mobile';
import { LeftOutline } from 'antd-mobile-icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './index.module.scss';
const SettingPwd = (props) => {
  console.log(props);
  const { noFirst } = props.location.state;
  const history = useHistory();

  const [pwdValue, setPwdValue] = useState('');
  const [againPwdValue, setAgainPwdValue] = useState('');
  const [againPwdStatus, setAgainPwdStatus] = useState(false);

  // 首次设置密码
  const getFirst = () => {
    const onChange = (value: string) => {
      console.log(value);
      if (againPwdStatus) {
        setAgainPwdValue(value);
      } else {
        setPwdValue(value);
      }
    };
    const next = () => {
      if (againPwdStatus) {
        if (pwdValue === againPwdValue) {
          Toast.show('密码设置成功');
          history.push('/my');
        } else {
          Toast.show('两次密码不一致');
        }
      }
      if (pwdValue.length === 6) {
        setAgainPwdStatus(true);
      }
    };

    return (
      <div className="flex flex-d">
        <p className="text-color-black font-xxl font-700">
          {againPwdStatus && !noFirst ? '请再次输入密码' : !noFirst ? '请设置' : ''}
          {noFirst && !againPwdStatus ? '请输入' : '请再次输入'}
        </p>
        <p className="text-color-b lack font-xxl font-700 pt-10">
          {noFirst ? '新的交易密码' : '交易密码'}
        </p>
        {noFirst && (
          <p className="pt-20" style={{ color: 'red' }}>
            修改交易密码后，24小时内将被限制交易
          </p>
        )}
        <div className="flex flex-j-c pt-60 pb-60">
          <PasscodeInput
            style={{ '--cell-gap': '20px' }}
            seperated
            value={againPwdStatus ? againPwdValue : pwdValue}
            keyboard={<NumberKeyboard />}
            onChange={onChange}
            error={false}
          />
        </div>
        <Button
          onClick={next}
          disabled={
            pwdValue.length !== 6 || (againPwdValue.length !== 6 && againPwdStatus)
          }
          color={'primary'}
          block
        >
          Next
        </Button>
      </div>
    );
  };
  return (
    <div className={`${styles.tradingRecord}`}>
      <NavBar
        backArrow={<LeftOutline style={{ fontSize: 16 }} />}
        onBack={() => {
          history.goBack();
        }}
      ></NavBar>
      <div className={`${styles.content}`}>{getFirst()}</div>
    </div>
  );
};

export default SettingPwd;
