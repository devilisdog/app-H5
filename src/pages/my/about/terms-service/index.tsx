import { NavBar } from 'antd-mobile';
import { LeftOutline } from 'antd-mobile-icons';
import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './index.module.scss';
const TermsService = () => {
  const history = useHistory();

  return (
    <div className={`${styles.settingContainer}`}>
      <NavBar
        backArrow={<LeftOutline style={{ fontSize: 16 }} />}
        onBack={() => {
          history.goBack();
        }}
      >
        <span>服务协议</span>
      </NavBar>
      <div className={`${styles.settingContent}`}></div>
    </div>
  );
};

export default TermsService;
