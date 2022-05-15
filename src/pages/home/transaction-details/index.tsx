import {
  Button,
  DotLoading,
  Ellipsis,
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
const Details = () => {
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
        backArrow={<LeftOutline style={{ fontSize: 16 }} />}
        onBack={() => {
          history.goBack();
        }}
      >
        <span className={`font-base text-color-base`}>Transaction Details</span>
      </NavBar>
      <div className={`${styles.content} flex flex-d`}>
        <SvgIcon iconClass="success" fontSize="0.72rem" className="mt-24" />
        <p className="font-xl font-700 pt-14 pb-20">Completed</p>
        <Button className={`${styles.transferBtn}`} shape="rounded">
          Transfer Out NFT Token ID
        </Button>
        <div className={`${styles.card} flex flex-d`}>
          <p className="text-color-black font-base pb-18">Hitchhker of star #2474</p>
          <div className="flex flex-a-c flex-j-b pb-18">
            <span className="tetx-color-secondary">Order ID</span>
            <Space align="center">
              <span className="text-color-base">ajfahf92247424</span>
              <SvgIcon iconClass="copy-detail" />
            </Space>
          </div>
          <div className="flex flex-a-c flex-j-b pb-18">
            <span className="tetx-color-secondary">transaction hour</span>
            <span className="text-color-base">2022-04-05 23:00:00</span>
          </div>
          <div className="flex flex-a-c flex-j-b pb-18">
            <span className="tetx-color-secondary">Means of transaction</span>
            <span className="text-color-base">Platform transaction</span>
          </div>
          <div className="flex flex-a-c flex-j-b pb-18">
            <span className="tetx-color-secondary">Counterparty account</span>
            <span className="text-color-base">
              <Ellipsis
                direction="middle"
                content={`0xfaufhfjiahgeuefhefhahfaufhi FEWUEhsaonqW`}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
