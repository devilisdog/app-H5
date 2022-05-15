import { Button, Space } from 'antd-mobile';
import React from 'react';

import Welcome from '@/assets/welcome.png';
import Header from '@/components/Header';
import SvgIcon from '@/components/SvgIcon';
import { toFixed } from '@/utils';

import styles from './index.module.scss';
import List from './List';
const Field = () => {
  return (
    <div className={styles.container}>
      <div className="pt-20 pb-20">
        <Header
          className={styles.header}
          title=""
          // leftShow={false}
          right={<SvgIcon iconClass="point" fontSize="0.72rem" />}
        />
      </div>
      <div data-aos="fade-up" className={`${styles.user} mb-14`}>
        <SvgIcon
          iconClass="head-demo"
          fontSize="1.44rem"
          style={{ borderRadius: '50%' }}
        />
        <Space className="pt-14" align="center">
          <span className="pt-14 text-color-white font-base font-700">Details</span>
          <span className="op-50 text-color-white">{`>>>`}</span>
        </Space>
      </div>
      <div data-aos="fade-up" className={styles.card}>
        <img src={Welcome} alt="" />
      </div>
      <div className={styles.content}>
        <div data-aos="fade-up" className="flex flex-a-c flex-j-b pt-40">
          <Button size="large" className={styles.friends}>
            Invite Friends
          </Button>
          <Button size="large" className={styles.Package}>
            My Package
          </Button>
        </div>
        <div data-aos="fade-up" className={`${styles.contentCard} mt-24`}>
          <div className="ptb-24 plr-14 flex flex-a-c flex-j-b">
            <div className={`${styles.item} flex flex-d`}>
              <span className="font-sm text-color-base">BTC/USDT</span>
              <span className="pt-6 font-sm text-color-success">
                {toFixed(62877.4222, 2)}
              </span>
            </div>
            <div className={`${styles.item} flex flex-d`}>
              <span className="font-sm text-color-base">ETH/USDT</span>
              <span className="pt-6 font-sm text-color-success">
                {toFixed(62877.422, 2)}
              </span>
            </div>
            <div className={`flex flex-d`}>
              <span className="font-sm text-color-base">ABC/USDT</span>
              <span className="pt-6 font-sm text-color-error">
                {toFixed(62877.4222, 2)}
              </span>
            </div>
          </div>
        </div>
        <div className={`${styles.list} mt-24`}>
          <p data-aos="fade-up" className="font-base pb-14">
            Packages On Sale
          </p>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Field;
