import classNames from 'classnames';
import React from 'react';

import Header from '@/components/Header';
import SvgIcon from '@/components/SvgIcon';

import List from '../home/List';
import styles from './index.module.scss';

const Orders = () => {
  return (
    <div className={classNames('hn-container', styles.Container)}>
      <Header
        backArrow={false}
        title="Package Order"
        right={<SvgIcon iconClass="point" fontSize="0.72rem" />}
        color="#fff"
      />
      <p className="mt-20 text-color-white text-center font-base">
        Asset Balance <SvgIcon iconClass="eye" fontSize="0.32rem" />
      </p>
      <p className={classNames('font-base text-center text-color-white', styles.balance)}>
        <span className="text-color-linear-gold font-700">103223.23</span> HU
      </p>
      <div className={classNames('content', styles.Content)}>
        <div className={classNames('flex flex-a-c flex-j-a', styles.AssetsCard)}>
          <div>
            <p>
              <span className={styles.Amount}>20.304</span> HU
            </p>
            <p>Release Today</p>
          </div>
          <div>
            <p>
              <p>
                <span className={styles.Amount}>100.4954</span> HU
              </p>
              <p>Cumulative Release</p>
            </p>
          </div>
        </div>
        <p className="font-base text-color-base pt-24">Packages On Sale</p>
        <List />
      </div>
    </div>
  );
};

export default Orders;
