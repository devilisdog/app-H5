import React from 'react';
import classNames from 'classnames';

import styles from '../index.module.scss';

const TimeSqueeze = () => {
  return (
    <div className={styles.TimeSqueeze}>
      <div className={styles.Steps}>
        <div className={classNames(styles.Step, styles.current)}>
          <span>2021-09-26</span>
          <span></span>
          <span>Subscribe</span>
        </div>
        <div className={styles.Step}>
          <span>2021-09-26</span>
          <span></span>
          <span>Take effect</span>
        </div>
        <div className={styles.Step}>
          <span>2021-09-26</span>
          <span></span>
          <span>First funding</span>
        </div>
      </div>
      <p>
        The purchase is locked, it will take effect the next day, and the first funds will
        arrive on the T+2 day
      </p>
      <h4 className="pt-10 pb-10">Purchase rules</h4>
      <p>
        The purchase is locked, it will take effect the next day, and the first funds will
        arrive on the T+2 day
      </p>
      <h4 className="pt-10 pb-10">Purchase rules</h4>
      <p>
        The purchase is locked, it will take effect the next day, and the first funds will
        arrive on the T+2 day
      </p>
      <h4 className="pt-10 pb-10">Purchase rules</h4>
      <p>
        The purchase is locked, it will take effect the next day, and the first funds will
        arrive on the T+2 day
      </p>
    </div>
  );
};

export default TimeSqueeze;
