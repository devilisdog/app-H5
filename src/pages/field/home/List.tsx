import { DotLoading, InfiniteScroll, Space } from 'antd-mobile';
import React, { useState } from 'react';

import SvgIcon from '@/components/SvgIcon';
import { toFixed } from '@/utils';

import styles from './index.module.scss';
const List = () => {
  const getTag = (type) => {
    if (type === 1) {
      return <div className={`${styles.limit} flex flex-a-c flex-j-c`}>Time Limit</div>;
    }
    if (type === 2) {
      return (
        <div className={`${styles.icons} flex flex-a-c`}>
          <Space align="center">
            <SvgIcon fontSize="0.24rem" iconClass="gift" />
            <SvgIcon fontSize="0.24rem" iconClass="hot" />
          </Space>
        </div>
      );
    }
    if (type === 3) {
      return (
        <div className={`${styles.icons} flex flex-a-c flex-j-c`}>
          <SvgIcon fontSize="0.26rem" iconClass="lightning" />
        </div>
      );
    }
  };
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
    <div>
      <div className={`${styles.list} flex flex-d`}>
        {[1, 2, 3, 4, 8].map((x) => {
          return (
            <div data-aos="fade-up" className={`${styles.item}`} key={x}>
              <div className={`${styles.itemContent}`}>
                <div className="flex flex-a-c flex-j-b">
                  <div className="flex flex-a-c">
                    <SvgIcon
                      iconClass="head-demo"
                      fontSize="0.48rem"
                      style={{ borderRadius: '50%' }}
                    />
                    <p className={`${styles.name} pl-10 font-sm text-color-base`}>
                      NFT-A Level Mining Package
                    </p>
                  </div>
                  {getTag(x)}
                </div>
                <div className="flex flex-a-c flex-j-b pt-12">
                  <span className={`${styles.hu} font-sm`}>
                    {toFixed(400.8727, 2)} HU
                  </span>
                  <span className="font-sm text-color-base font-700">300.00 %</span>
                </div>
                <div className="flex flex-a-c flex-j-b pt-6">
                  <span className="font-sm tetx-color-secondary">Unit Price</span>
                  <span className="font-sm tetx-color-secondary">Releasable</span>
                </div>
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

export default List;
