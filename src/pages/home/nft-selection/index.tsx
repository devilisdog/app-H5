import { DotLoading, InfiniteScroll, NavBar, Space } from 'antd-mobile';
import { LeftOutline } from 'antd-mobile-icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import SvgIcon from '@/components/SvgIcon';

import styles from './index.module.scss';
const NftSelection = () => {
  const history = useHistory();
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
      >
        <span className={`font-base text-color-white`}>NFT Selection</span>
      </NavBar>
      <div className={`${styles.mslist} flex flex-d`}>
        {[1, 2, 3].map((x) => {
          return (
            <div key={x} className={styles.item}>
              <Space
                onClick={() => {
                  // history.push('/my/message/detail');
                }}
                align="center"
                className="p-10"
              >
                <SvgIcon
                  iconClass="head-demo"
                  fontSize="1.04rem"
                  style={{ borderRadius: '50%' }}
                />
                <span className="font-base text-color-black">
                  Hitchhker of star #24788
                </span>
              </Space>
              <div className={styles.tag}>
                <div className={styles.tagCurrent}>Current</div>
              </div>
            </div>
          );
        })}

        <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
          <InfiniteScrollContent hasMore={hasMore} />
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default NftSelection;
