import {
  DotLoading,
  InfiniteScroll,
  List,
  Modal,
  NavBar,
  Space,
  Toast,
} from 'antd-mobile';
import { LeftOutline, PayCircleOutline, UnorderedListOutline } from 'antd-mobile-icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import SvgIcon from '@/components/SvgIcon';

import styles from './index.module.scss';
const NftAccountSelection = () => {
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
        <span className={`font-base text-color-white`}>NFT account selection</span>
      </NavBar>
      <div className={styles.content}>
        <div className={`${styles.mslist} flex flex-d`}>
          {[1, 2, 3].map((x) => {
            return (
              <div
                onClick={() => {
                  history.push('/field/home');
                }}
                key={x}
                className={`${styles.item} flex flex-j-b flex-a-c`}
              >
                <div className="flex flex-a-c p-10">
                  <SvgIcon
                    iconClass="head-demo"
                    fontSize="1.04rem"
                    style={{ borderRadius: '50%' }}
                  />
                  <div className="flex flex-d pl-10">
                    <span className="font-base text-color-black flex flex-a-c">
                      Hitchhker of star #24788
                      <span className={styles.level}>V7</span>
                    </span>
                    <span className="font-base tetx-color-secondary pt-6">
                      NFT transaction history
                    </span>
                  </div>
                </div>
                <div className={styles.right}></div>
              </div>
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

export default NftAccountSelection;
