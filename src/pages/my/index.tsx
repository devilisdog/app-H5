import { List, Space } from 'antd-mobile';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SvgIcon from '@/components/SvgIcon';
import TabBar from '@/components/TabBar';

import styles from './index.module.scss';
const My = () => {
  const history = useHistory();
  const userInfo = useSelector((state: any) => state.user);
  const getMyHeader = () => {
    return (
      <div className={`${styles.myHeader} flex flex-a-c`}>
        <Space align="end" style={{ '--gap': '20px', fontSize: 24 }}>
          <SvgIcon onClick={() => history.push('/my/message')} iconClass="msg" />
          <SvgIcon onClick={() => history.push('/setting')} iconClass="setting" />
        </Space>
      </div>
    );
  };

  const getMyCard = () => {
    return (
      <div className={`${styles.myCard}`}>
        <div className={`${styles.myCardContent} flex flex-d flex-j-c flex-a-c`}>
          <SvgIcon
            iconClass="head-demo"
            fontSize="1.44rem"
            style={{ borderRadius: '50%' }}
          />

          <p className="pt-14">ID：{userInfo?.id}</p>
          <p className="pt-14">{userInfo?.email}</p>
          <Space className="pt-14" align="center">
            <span className="font-sm text-color-white">
              地址：0d3c1c55223c70f3ca0f95396
            </span>
            <SvgIcon iconClass="copy" fontSize="0.24rem" />
          </Space>
        </div>
      </div>
    );
  };

  const getAsset = () => {
    return (
      <div className={`${styles.myAsset}`}>
        <div className={`${styles.myAssetContent}`}>
          <div className={`${styles.header} flex flex-a-c flex-j-b`}>
            <span className="text-color-white font-sm">Investment Account Assets</span>
            <Space align="center">
              <span className="text-color-white font-sm">{`details `}</span>
              <span className="text-color-white font-sm op-50">{`>>>`}</span>
            </Space>
          </div>
          <div className={`${styles.Balance} flex fle-a-c flex-j-b`}>
            <Space align="center">
              <p>103223.23</p>
              <span className="text-color-white">HU</span>
            </Space>
            <SvgIcon iconClass="eye-white" />
          </div>
        </div>
      </div>
    );
  };

  const getNavList = () => {
    return (
      <div className={`${styles.myNavList}`}>
        <List
          style={{
            '--border-top': 'none',
            '--border-bottom': 'none',
            '--border-inner': '1px solid rgba(255,255,255,0.02)',
          }}
        >
          <List.Item
            onClick={() => {
              history.push('/trading/record');
            }}
            arrow={<SvgIcon iconClass="right" />}
          >
            <span className="text-color-white font-sm">NFT transaction history</span>
          </List.Item>
          <List.Item
            onClick={() => {
              history.push('/notice');
            }}
            arrow={<SvgIcon iconClass="right" />}
          >
            <span className="text-color-white font-sm">Announcement</span>
          </List.Item>
          <List.Item
            onClick={() => {
              history.push('/security');
            }}
            arrow={<SvgIcon iconClass="right" />}
          >
            <span className="text-color-white font-sm">Security center</span>
          </List.Item>
          <List.Item
            onClick={() => {
              history.push('/service');
            }}
            arrow={<SvgIcon iconClass="right" />}
          >
            <span className="text-color-white font-sm">Contact Customer Service</span>
          </List.Item>
          <List.Item
            onClick={() => {
              history.push('/about');
            }}
            arrow={<SvgIcon iconClass="right" />}
          >
            <span className="text-color-white font-sm">About us</span>
          </List.Item>
        </List>
      </div>
    );
  };
  return (
    <div className={`${styles.myContainer}`}>
      <div className={`${styles.myContent}`}>
        {getMyHeader()}
        {getMyCard()}
        {getAsset()}
        {getNavList()}
        <TabBar currentIndex={2} onClick={() => {}}></TabBar>
      </div>
    </div>
  );
};

export default My;
