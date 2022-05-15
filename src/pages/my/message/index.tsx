import { Button, DotLoading, InfiniteScroll, NavBar, Space } from 'antd-mobile';
import { LeftOutline } from 'antd-mobile-icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import SvgIcon from '@/components/SvgIcon';

import styles from './index.module.scss';
const Message = () => {
  const history = useHistory();
  const [type, setType] = useState(2);
  const InfiniteScrollContent = ({ hasMore }: { hasMore?: boolean }) => {
    return (
      <>
        {hasMore ? (
          <>
            <span>Loading</span>
            <DotLoading />
          </>
        ) : (
          <span>--- 我是有底线的 ---</span>
        )}
      </>
    );
  };
  const [hasMore] = useState(true);
  async function loadMore() {}

  return (
    <div className={`${styles.container}`}>
      <NavBar
        backArrow={<LeftOutline style={{ fontSize: 16, color: '#fff' }} />}
        onBack={() => {
          history.goBack();
        }}
        right={
          <Button
            style={{ '--text-color': '#FF7A4D', fontSize: 12 }}
            color="primary"
            fill="none"
          >
            全部已读
          </Button>
        }
      >
        <span className="font-base text-color-white">消息中心</span>
      </NavBar>
      <div className={styles.header}>
        <p
          onClick={() => {
            setType(1);
          }}
          className={`${type === 1 ? styles.active : ''}`}
        >
          系统
        </p>
        <p
          onClick={() => {
            setType(2);
          }}
          className={`${type === 2 ? styles.active : ''}`}
        >
          交易
        </p>
      </div>
      <div className={`${styles.content}`}>
        <div className={`${styles.mslist} flex flex-d`}>
          {[1, 2, 3].map((x) => {
            return (
              <Space
                direction="vertical"
                onClick={() => {
                  history.push('/my/message/detail');
                }}
                className="pb-40"
                key={x}
              >
                <div>
                  <Space align="center">
                    {type === 1 && <SvgIcon iconClass="message" />}
                    {type === 2 && <SvgIcon iconClass="service" />}
                    <span className="font-base color-text-base">登录 IP 变更</span>
                  </Space>
                </div>
                <div className="pl-20">
                  <p className="font-sm text-color-base pt-12">
                    检测到您的账号在从未使用过的IP地址登录！
                  </p>
                  <p className="font-sm tetx-color-secondary pt-16">2022-03-01 12:30</p>
                </div>
              </Space>
            );
          })}

          <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
            <InfiniteScrollContent hasMore={hasMore} />
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default Message;
