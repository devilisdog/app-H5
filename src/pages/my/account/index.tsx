import { List, NavBar } from 'antd-mobile';
import { LeftOutline } from 'antd-mobile-icons';
import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '@/components/Header';

import styles from './index.module.scss';
const Account = () => {
  const history = useHistory();
  const getNavList = () => {
    return (
      <div className={`${styles.myNavList}`}>
        <NavBar
          backArrow={<LeftOutline style={{ fontSize: 16 }} />}
          onBack={() => {
            history.goBack();
          }}
        >
          <span className="font-base">账户信息</span>
        </NavBar>

        <List style={{ '--border-top': 'none', '--font-size': '14px' }}>
          <List.Item
            arrow={
              <div className="text-color-secondary" style={{ fontSize: 14 }}>
                123***@gmail.com
              </div>
            }
            onClick={() => {}}
          >
            <span className="text-color-base">注册邮箱</span>
          </List.Item>
          <List.Item
            arrow={
              <div className="text-color-secondary" style={{ fontSize: 14 }}>
                398492
              </div>
            }
            onClick={() => {}}
          >
            <span className="text-color-base">UID</span>
          </List.Item>
          <List.Item
            arrow={
              <div className="text-color-secondary" style={{ fontSize: 14 }}>
                2018-02-23 18:32
              </div>
            }
            onClick={() => {}}
          >
            <span className="text-color-base">注册时间</span>
          </List.Item>
          <List.Item
            arrow={
              <div className="text-color-secondary" style={{ fontSize: 14 }}>
                Afjffjaifjiwajiaijaifiwefhiwefjiwe
              </div>
            }
            onClick={() => {}}
          >
            <span className="text-color-base">账户地址</span>
          </List.Item>
          <List.Item
            arrow={
              <div className="text-color-secondary" style={{ fontSize: 14 }}>
                7个
              </div>
            }
            onClick={() => {}}
          >
            <span className="text-color-base">已关联NFT账号</span>
          </List.Item>
        </List>
      </div>
    );
  };
  return (
    <div className={`${styles.myContainer}`}>
      <div className={`${styles.myContent}`}>{getNavList()}</div>
    </div>
  );
};

export default Account;
