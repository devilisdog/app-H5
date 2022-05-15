import React, { Children } from 'react';

import line from '@/assets/index/line.png';

import styles from './index.module.scss';

export default function ButtonUI(props) {
  const { children } = props;

  return (
    <div className={styles.buttonUI}>
      <img src={line} alt="" className={styles.line} />
      <div>{children}</div>
      <img src={line} alt="" className={styles.line} />
    </div>
  );
}
