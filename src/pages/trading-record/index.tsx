import { Button, InfiniteScroll, List, NavBar, Space, Tag, Toast } from 'antd-mobile';
import { LeftOutline, PayCircleOutline, UnorderedListOutline } from 'antd-mobile-icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './index.module.scss';
const TradingRecord = () => {
  const history = useHistory();

  const [hasMore, setHasMore] = useState(true);
  const [type, setType] = useState(1);

  const listItem = (item, index) => {
    return (
      <div key={index} className={`${styles.item} flex flex-d`}>
        <div className={`${styles.itemContent} flex flex-d`}>
          <div className="flex flex-j-b">
            <span className="text-color-base font-base font-500">Transfer In</span>
            <span className="font-base">Hitchhker of star #824723</span>
          </div>
          <div className="flex flex-j-b pt-16 pb-12">
            <span className="tetx-color-secondary">Order ID</span>
            <span className="tetx-color-base">ajfahf92247424</span>
          </div>
          <div className="flex flex-j-b">
            <span className="tetx-color-secondary">transaction hour</span>
            <span className="tetx-color-base">2021-10-06 21:41:06</span>
          </div>
        </div>
      </div>
    );
  };

  const loadMore = async () => {};

  return (
    <div className={`${styles.container}`}>
      <NavBar
        backArrow={<LeftOutline style={{ fontSize: 16, color: '#fff' }} />}
        onBack={() => {
          history.goBack();
        }}
      >
        <span className="font-base text-color-white">NFT Transaction Record</span>
      </NavBar>
      <div className={styles.header}>
        <button
          onClick={() => {
            setType(1);
          }}
          className={`${type === 1 ? styles.active : ''}`}
        >
          All
        </button>
        <button
          onClick={() => {
            setType(2);
          }}
          className={`${type === 2 ? styles.active : ''}`}
        >
          Transfer In
        </button>
        <button
          onClick={() => {
            setType(3);
          }}
          className={`${type === 3 ? styles.active : ''}`}
        >
          Transfer Out
        </button>
      </div>
      <div className={`${styles.content}`}>
        <div>
          <div className="list">
            {[1, 2, 3].map((item, index) => {
              return listItem(item, index);
            })}
          </div>
          <InfiniteScroll loadMore={loadMore} hasMore={hasMore}></InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default TradingRecord;
