import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import barIconDown from '@/assets/index/barIconDown.svg';
import barIconTop from '@/assets/index/barIconTop.svg';

import styles from './index.module.scss';

export interface TabBarProps {
  currentIndex: number; //激活tab
  onClick: Function;
}

const barArr = [
  { barText: 'NFT', path: '/index' },
  { barText: 'FIELD', path: '/field' },
  { barText: 'MY', path: '/my' },
];

const activeLineStyle = {
  background: '#FFF9E0',
  borderColor: '#fba945',
};

const defaultLineStyle = {
  background: '#00FFF0',
  borderColor: '#00FFF0',
};

const activeBarText = {
  background: 'linear-gradient(108.08deg, #FFFFFF 0%, #FFA133 100%)',
  textShadow: '0px 0px 4px #ff8033',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
};

const defaultBarText = {
  color: '#00FFF0',
};

const TabBar = (props) => {
  const { currentIndex = 0, onClick } = props;
  const history = useHistory();
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  const lineStyleFun = (index: number) => {
    if (index == activeIndex) {
      return activeLineStyle;
    }

    if (index == activeIndex + 1) {
      return defaultLineStyle;
    }

    if (activeIndex == barArr.length - 1 && index == activeIndex - 1) {
      return defaultLineStyle;
    }

    return {
      borderColor: '#00FFF0',
    };
  };

  const clickTabBar = (item, index: number) => {
    setActiveIndex(index);
    onClick(index);
    history.push(item.path);
  };

  const barItem = barArr.map((item, index) => {
    return (
      <div
        key={index}
        className={styles.barItem}
        onClick={() => clickTabBar(item, index)}
      >
        <div className={styles.barIcon}>
          <img
            src={activeIndex == index ? barIconTop : barIconDown}
            alt=""
            className={styles.barImg}
          />
        </div>
        <div className={styles.barLine} style={lineStyleFun(index)}></div>
        <div
          className={styles.barText}
          style={activeIndex == index ? activeBarText : defaultBarText}
        >
          {item.barText}
        </div>
      </div>
    );
  });

  return (
    <div className={styles.tabBarArea}>
      <div className={styles.tabBar}>
        <div className={styles.content}>{barItem}</div>
      </div>
    </div>
  );
};

export default TabBar;
