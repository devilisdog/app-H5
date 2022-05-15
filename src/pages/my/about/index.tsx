import { List, Modal, NavBar, Space, Toast } from 'antd-mobile';
import { LeftOutline, PayCircleOutline, UnorderedListOutline } from 'antd-mobile-icons';
import React from 'react';
import { useHistory } from 'react-router-dom';

import SvgIcon from '@/components/SvgIcon';

import styles from './index.module.scss';
const About = () => {
  const history = useHistory();

  return (
    <div className={`${styles.container}`}>
      <NavBar
        backArrow={<LeftOutline style={{ fontSize: 16, color: '#fff' }} />}
        onBack={() => {
          history.goBack();
        }}
      />
      <p className={`${styles.settingTitle}`}>About Us</p>
      <div className={`${styles.content}`}>
        <div className={`${styles.aboutLogo} flex flex-d flex-a-c pt-20 pb-20`}>
          <SvgIcon iconClass="logo" style={{ width: 104, height: 94 }} />
          <span className="pt-20 tetx-color-secondary font-base">专业版 v1.2.0</span>
        </div>
        <List
          style={{
            '--border-top': 'none',
            '--border-bottom': 'none',
          }}
        >
          <List.Item
            onClick={() => {
              history.push('/about/service');
            }}
            arrow={<SvgIcon iconClass="item-right" fontSize="0.20rem" />}
          >
            <span className="font-base text-color-base">服务条款</span>
          </List.Item>
          <List.Item
            arrow={<SvgIcon iconClass="item-right" fontSize="0.20rem" />}
            onClick={() => {
              history.push('/about/privacy');
            }}
          >
            <span className="font-base text-color-base">隐私协议</span>
          </List.Item>
        </List>
      </div>
    </div>
  );
};

export default About;
