import { Button } from 'antd-mobile';
import React from 'react';

import styles from './index.module.scss';

const Landing = () => {
  return (
    <div className={styles.container}>
      <img src="" alt="" />
      <h1>Hypernation</h1>
      <p>NFT可以赋能挖矿的全新数字生态领域</p>

      <Button className={styles.btn}>立即体验</Button>
    </div>
  );
};

export default Landing;
