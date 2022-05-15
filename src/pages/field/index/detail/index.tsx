import React, { useState } from 'react';
import Header from '@/components/Header';
import SvgIcon from '@/components/SvgIcon';
import classNames from 'classnames';
import TimeSqueeze from './components/TimeSqueeze';

import styles from './index.module.scss';
import Rule from './components/Rule';
import SubmitOrder from './components/SubmitOrder';

const Detail = () => {
  const [value, setValue] = useState();
  return (
    <div className={classNames('hn-container', styles.container)}>
      <Header title="" right={<SvgIcon iconClass="point" fontSize="0.72rem" />} />
      <div className={classNames('content', styles.content)}>
        <div className={styles.Package}>
          <div className="flex flex-a-c flex-j-b">
            <p className="flex flex-a-c flex-j-b">
              <img src="" alt="" />
              <span>NFT-A Level Mining Package</span>
              <SvgIcon iconClass="triangle" fontSize="0.32rem" />
            </p>
            <p>
              <SvgIcon iconClass="gift" fontSize="0.28rem" className={styles.gift} />
              <SvgIcon iconClass="hot" fontSize="0.28rem" />
            </p>
          </div>
          <div className="flex flex-d flex-j-b">
            <p className="flex flex-a-c flex-j-b">
              <span className="text-color-linear-base">400.00 HU</span>
              <span className="text-color-base">300.00 %</span>
            </p>
            <p className="flex flex-a-c flex-j-b">
              <span>Unit Price</span>
              <span>Releasable</span>
            </p>
          </div>
        </div>
        <p className={'text-color-base font-base  pt-24 pb-14 font-500'}>
          Packages On Sale
        </p>
        <div className={styles.PackageCard}>
          <div className={styles.PackageCardItem}>
            <img src="" alt="" />
            <div>
              <p className="text-color-linear-base font-500">Earnings can be expected</p>
              <p>1 stake, 3 times release</p>
            </div>
          </div>
          <div className={styles.PackageCardItem}>
            <img src="" alt="" />
            <div>
              <p className="text-color-linear-base font-500">Earnings can be expected</p>
              <p>1 stake, 3 times release</p>
            </div>
          </div>
        </div>
        <p className={'text-color-base font-base  pt-24 pb-14 font-500'}>
          Packages On Sale
        </p>
        <TimeSqueeze />
        <Rule />
        <SubmitOrder />
      </div>
    </div>
  );
};

export default Detail;
