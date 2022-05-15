import { List, Modal, NavBar, Space, Toast } from 'antd-mobile';
import { LeftOutline, PayCircleOutline, UnorderedListOutline } from 'antd-mobile-icons';
import React from 'react';
import { useHistory } from 'react-router-dom';

import SvgIcon from '@/components/SvgIcon';

import styles from './index.module.scss';
const Service = () => {
  const history = useHistory();

  return (
    <div className={`${styles.container}`}>
      <NavBar
        backArrow={<LeftOutline style={{ fontSize: 16, color: '#fff' }} />}
        onBack={() => {
          history.goBack();
        }}
      />
      <p className={`${styles.settingTitle}`}>Contact customer service </p>
      <div className={`${styles.content}`}>
        <List.Item
          arrow={<SvgIcon iconClass="item-right" fontSize="0.2rem" />}
          description={<span className="font-sm">Hypernotion@iprimecapital.com</span>}
        >
          <span className="font-base">Customer Service Email</span>
        </List.Item>
        <List.Item
          arrow={<SvgIcon iconClass="item-right" fontSize="0.2rem" />}
          description={<span className="font-sm">Hypernotion Service</span>}
        >
          <span className="font-base">Discord</span>
        </List.Item>
      </div>
    </div>
  );
};

export default Service;
