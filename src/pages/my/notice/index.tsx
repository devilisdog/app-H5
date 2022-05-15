import { NavBar } from 'antd-mobile';
import { LeftOutline } from 'antd-mobile-icons';
import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './index.module.scss';
const Notice = () => {
  const history = useHistory();

  return (
    <div className={`${styles.container}`}>
      <NavBar
        backArrow={<LeftOutline style={{ fontSize: 16, color: '#fff' }} />}
        onBack={() => {
          history.goBack();
        }}
      />
      <p className={`font-base pl-30 pb-20 text-color-white ${styles.title}`}>公告</p>
      <div className={`${styles.content}`}>
        <p className="font-sm text-color-base">
          HYPERNATION 首发上线DePo（DEPO）及免费分发规则公告 (免费瓜分1,334，477个DEPO)
        </p>
        <span className="tetx-color-secondary pt-20">2022-03-01 12:30</span>
      </div>
    </div>
  );
};

export default Notice;
