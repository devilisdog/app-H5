import { Popup, Swiper } from 'antd-mobile';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '@/components/Header';
import avatar from '@/assets/index/avatar.png';
import img from '@/assets/index/img.png';
import right from '@/assets/index/right.png';
import showMoreIcon from '@/assets/index/showMoreIcon.svg';
import triangle from '@/assets/index/triangle.png';
import triangle2 from '@/assets/index/triangle2.png';
import voice from '@/assets/index/voice.png';
import SvgIcon from '@/components/SvgIcon';
import TabBar from '@/components/TabBar';

import ButtonUI from '../../components/ButtonUI/index.';
import PopupContent from '../../components/PopupContent';
import styles from './index.module.scss';

function Home() {
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  //激活tabBar回调
  const hanleClick = (activeIndex: number): void => {
    console.log(activeIndex);
  };

  const showMore = () => {
    setVisible((visible) => !visible);
  };

  const addNft = () => {
    history.push('/index/addNft');
  };

  const transfer = () => {
    history.push('/index/transfer');
  };

  const nftList = [
    {
      active: true,
      text: 'NOT ACTIVATED',
      name: 'HITCHHKER OF STAR',
      num: '#2478',
      capsule: 'SUPERAPE001',
    },
    {
      active: false,
      text: 'NOT ACTIVATED',
      name: 'HITCHHKER OF STAR',
      num: '#2478',
      capsule: 'SUPERAPE001',
    },
    {
      active: true,
      text: 'NOT ACTIVATED',
      name: 'HITCHHKER OF STAR',
      num: '#2478',
      capsule: 'SUPERAPE001',
    },
    {
      active: false,
      text: 'NOT ACTIVATED',
      name: 'HITCHHKER OF STAR',
      num: '#2478',
      capsule: 'SUPERAPE001',
    },
  ];

  const items = nftList.map((item, index) => (
    <Swiper.Item key={index}>
      <div
        onClick={() => {
          history.push('/index/nftDetail');
        }}
        className={styles.content}
      >
        <div
          className={classNames(styles.contentTitle, {
            [`${styles.contentTitleActive}`]: item.active,
          })}
        >
          {item.text}
        </div>
        <img src={img} alt="" className={styles.content_img} />
        <div className={styles.nft_title}>
          <span className={styles.nft_title_name}>HITCHHKER OF STAR</span>
          <span className={styles.nft_title_num}> #2478</span>
        </div>
        <div className={styles.capsule_box}>
          <div
            className={classNames(styles.capsule, {
              [`${styles.capsuleActive}`]: item.active,
            })}
          >
            {item.capsule}
          </div>
        </div>
      </div>
    </Swiper.Item>
  ));

  const hash = '0xfajhfh0xfajhfhwi0xfajhfhafsdaaaaaaaaaaaaaaaaaaa';

  return (
    <div className={classNames('hm-container', styles.indexContainer)}>
      <Header
        title=""
        color="#fff"
        right={<SvgIcon fontSize="0.3rem" iconClass="msg" onClick={() => {}} />}
        backArrow={false}
      />

      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" className={styles.avatarImg} />
      </div>

      <div className={styles.name}>HYPERNATION</div>

      <div className={styles.address}>
        <div className={styles.describe}>
          <div className={styles.label}>Address:</div>
          <div className={styles.hash}>{hash}</div>
        </div>
        <SvgIcon fontSize="0.24rem" iconClass="copy" onClick={() => {}} />
      </div>

      <div className={styles.button_box}>
        <div className={styles.extract_add}>
          <div className={styles.button_triangle}>
            <ButtonUI>
              <span onClick={transfer}> Extract NFT</span>
            </ButtonUI>
            <img src={triangle} alt="" className={styles.triangle} />
          </div>

          <div className={styles.button_triangle}>
            <img src={triangle2} alt="" className={styles.triangle} />
            <ButtonUI>
              <span onClick={addNft}> ADD NFT</span>
            </ButtonUI>
          </div>
        </div>
      </div>

      <div className={styles.notice}>
        <img src={voice} alt="" className={styles.notice_voice} />
        <div className={styles.notice_text}>
          When many musicians start laughing at simple simple simplesimplesimple simple
          simple simple simple
        </div>
        <img src={right} alt="" className={styles.notice_right} />
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

        <div className={styles.showMore_box} onClick={showMore}>
          <div className={styles.showMore}>
            <span style={{ marginBottom: '2px' }}>show more</span>
            <img src={showMoreIcon} alt="" className={styles.showMoreIcon} />
          </div>
        </div>

        <Popup
          visible={visible}
          onMaskClick={() => {
            setVisible(false);
          }}
          bodyStyle={{
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            height: '14.48rem',
            padding: '0.28rem 0.48rem',
            background: '#DFE3E9',
          }}
        >
          <PopupContent />
        </Popup>
      </div>

      <TabBar currentIndex={0} onClick={hanleClick}></TabBar>
    </div>
  );
}

export default Home;
