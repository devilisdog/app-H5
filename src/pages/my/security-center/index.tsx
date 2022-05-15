import classnames from 'classnames';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Header from '@/components/Header';
// eslint-disable-next-line no-unused-vars
import PopupVerify, { VerifyTypes } from '@/components/PopupVerify';
import SvgIcon from '@/components/SvgIcon';

import styles from './index.module.scss';

const SecurityCenter = () => {
  const history = useHistory();
  const userInfo = useSelector((state: any) => state.user);

  // const verifyRef = useRef<VerifyTypes | null>();
  const verifyRef = useRef<VerifyTypes | null>();

  /**
   * @description
   * 点击设置/修改交易密码
   */
  const updateTradePwd = () => {
    if (userInfo?.pay_password_bing_status) {
      verifyRef.current?.setVisible(true);
    } else {
      history.push('/setting/transaction/password');
    }
  };
  return (
    <div className={classnames('hn-container', styles.container)}>
      <Header title="" />
      <p className={styles.title}>Security Center</p>
      <div className="content">
        <div className={styles.SecurityItem} onClick={updateTradePwd}>
          <span>交易密码</span>
          <div>
            <span className={styles.noPassword}>
              {userInfo?.pay_password_bing_status ? (
                <span className="font-base">修改</span>
              ) : (
                '未来设置'
              )}
            </span>
            <SvgIcon iconClass="rightOutLine" fontSize="0.2rem" />
          </div>
        </div>
        <div
          className={styles.SecurityItem}
          onClick={() => history.push({ pathname: '/reset', state: { params: true } })}
        >
          <span>登录密码</span>
          <div>
            <span>修改</span>
            <SvgIcon iconClass="rightOutLine" fontSize="0.2rem" />
          </div>
        </div>
      </div>
      <PopupVerify userInfo={userInfo} ref={verifyRef} />
    </div>
  );
};

export default SecurityCenter;
