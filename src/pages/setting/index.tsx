import { Button, Modal, Space, Toast } from 'antd-mobile';
import { RightOutline } from 'antd-mobile-icons';
import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '@/components/Header';

import styles from './index.module.scss';
interface PasswordValue {
  preValue: string;
  realValue: string;
}
const Setting = () => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <Header color="#fff" title="" />
      <h1 className="mb-30 text-color-white">设置</h1>
      <div className={`${styles.content} flex flex-j-b flex-d`}>
        <div>
          <div
            onClick={() => {
              history.push('/my/account');
            }}
            className="flex flex-a-c flex-j-b"
          >
            <span className="font-base">账户信息</span>
            <RightOutline />
          </div>
          <div
            onClick={() => {
              Toast.show({
                icon: 'success',
                content: '清除成功',
              });
            }}
            className="flex flex-a-c flex-j-b pt-40"
          >
            <span className="font-base">清除缓存</span>
            <RightOutline />
          </div>
        </div>
        <Button
          onClick={() => {
            Modal.show({
              title: '退出账号',
              content: (
                <div className="flex flex-d pl-12 pr-12">
                  <div className="flex flex-j-c pt-24 pb-36">
                    确认退出当前中心化账号吗？
                  </div>
                  <div className="flex flex-j-c paddingT20">
                    <Space>
                      <Button
                        onClick={() => {
                          Modal.clear();
                        }}
                        className={styles.cancel}
                      >
                        取消
                      </Button>
                      <Button
                        onClick={() => {
                          Modal.clear();
                        }}
                        className={styles.confirm}
                      >
                        确认
                      </Button>
                    </Space>
                  </div>
                </div>
              ),
            });
          }}
          className={styles.logout}
          block
        >
          退出登陆
        </Button>
      </div>
    </div>
  );
};

export default Setting;
