import { SafeArea, Space, Swiper } from 'antd-mobile';
import { MoreOutline } from 'antd-mobile-icons';
import classNames from 'classnames';
import React from 'react';
import { useHistory } from 'react-router-dom';

import welcome from '@/assets/field/welcome.png';
import img from '@/assets/index/img.png';
import Header from '@/components/Header';
import SvgIcon from '@/components/SvgIcon';
import TabBar from '@/components/TabBar';

import styles from './index.module.scss';

function Home() {
  const history = useHistory();

  //激活tabBar回调
  const hanleClick = (activeIndex: number): void => {
    console.log(activeIndex);
    if (activeIndex === 2) {
      history.push('/my');
    }
  };

  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];

  const items = colors.map((color, index) => (
    <Swiper.Item
      key={index}
      onClick={() => {
        history.push('/field/account/selection');
      }}
    >
      <div className={styles.content}>
        <div className={styles.content_activeated}>not activeated</div>
        <img src={img} alt="" className={styles.content_img} />
        <div className={styles.nft_title}>
          <span className={styles.nft_title_name}>HITCHHKER OF STAR</span>
          <span className={styles.nft_title_num}> #2478</span>
        </div>
        <div className={styles.capsule_box}>
          <div className={styles.capsule}>SUPERAPE001</div>
        </div>
      </div>
    </Swiper.Item>
  ));

  return (
    <div className={styles.indexContainer}>
      <div className="pt-20 pb-20">
        <Header
          className={styles.header}
          title=""
          backArrow={false}
          right={<SvgIcon iconClass="point" fontSize="0.72rem" />}
        />
        <div className={`${styles.card} pt-20`}>
          <img src={welcome} alt="" />
        </div>
      </div>

      <div className="flex flex-a-c flex-j-c  pt-20">
        <Space align="center">
          <span className="text-color-white font-base">
            Please select nft login account
          </span>
          <span className="text-color-white op-50"> {'>>>'}</span>
        </Space>
      </div>

      <div className={styles.popUp}>
        <div className={styles.title_box}>
          <div className={styles.title_linne} />
        </div>

        <div className={styles.swiper_box}>
          <Swiper
            stuckAtBoundary={false}
            slideSize={73}
            defaultIndex={0}
            className={styles.swiper}
            indicator={() => <></>}
          >
            {items}
          </Swiper>
        </div>
      </div>

      <TabBar currentIndex={1} onClick={hanleClick}></TabBar>
    </div>
  );
}

export default Home;
