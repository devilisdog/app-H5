import React, { useRef } from 'react';
import SvgIcon from '@/components/SvgIcon';
import classNames from 'classnames';

import Header from '@/components/Header';
import PopupFilter, { FilterTypes } from '@/components/PopupFilter';

import styles from './index.module.scss';

const OrdersDetail = () => {
  const filterRef = useRef<FilterTypes | null>();

  const renderItem = (item, index) => {
    return (
      <div className={styles.Item} key={index}>
        <div className={styles.ItemHeader}>
          <p>922474244329874932</p>
          {/* styles.NotStarted styles.Completed styles.Release */}
          <div className={classNames(styles.Status, styles.Release)}>In Release</div>
        </div>
        <div className={styles.ItemContent}>
          <div>
            <p>
              <span>Package Name</span>
              <span className="text-color-linear-base">NFT-A Level Mining Package</span>
            </p>
            <p>
              <span>Payment Amount</span>
              <span>1000 HU</span>
            </p>
            <p>
              <span>Releasable</span>
              <span>78.4982 HU</span>
            </p>
            <p>
              <span>Order Time</span>
              <span>2020-04-01 23:23</span>
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={classNames('hn-container', styles.Container)}>
      <Header
        title="My Package Details"
        right={<SvgIcon iconClass="point" fontSize="0.72rem" />}
        color="#fff"
      />
      <div className={classNames('content', styles.Content)}>
        <div className={styles.ReleaseCard}>
          <p className="flex flex-a-c font-base text-color-article">
            Currently pending release &nbsp;&nbsp;
            <SvgIcon iconClass="eye" fontSize="0.32rem" />
          </p>
          <p className={styles.ReleaseAmount}>
            <span className="text-color-linear-base">103223.23</span> HU
          </p>
          <div className="flex flex-a-c flex-j-b">
            <p className="flex flex-d flex-j-c">
              <span className="font-base text-color-black font-500 pb-10">20.304 HU</span>
              <span className="text-color-article">Release Today</span>
            </p>
            <p className="flex flex-d flex-j-c">
              <span className="font-base text-color-black font-500 pb-10">20.304 HU</span>
              <span className="text-color-article">Cumulative Release</span>
            </p>
          </div>
        </div>
        <p className="flex flex-a-c flex-j-b mt-24 mb-20">
          <span className="font-base text-color-base font-500 flex-1">Order Record</span>
          <span className="text-color-article text-right flex-1">
            Total Of 1234 Records
          </span>
        </p>
        <div className={classNames('flex flex-a-c flex-j-b', styles.PackagePrice)}>
          <p className="text-color-black">
            Package unit price &nbsp;&nbsp;
            <span className="text-color-linear-base font-500">400.00 HU</span>
          </p>
          <p className="text-color-primary font-500">Daily Release</p>
        </div>
        <div className={classNames('list-tab', styles.Tab)}>
          <div className="list-tab-item hiddenScroll">
            <div className="active">All</div>
            <div>All</div>
            <div>In Release</div>
            <div>Has Not Started</div>
          </div>
          <div className="filter" onClick={() => filterRef.current?.setVisible(true)}>
            <SvgIcon iconClass="filter" fontSize="0.4rem" />
          </div>
        </div>
        {[1, 2, 3, 4].map((item, index) => {
          return renderItem(item, index);
        })}
      </div>
      <PopupFilter ref={filterRef} />
    </div>
  );
};

export default OrdersDetail;
