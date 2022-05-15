import React from 'react';
import Header from '@/components/Header';
import { Button, Steps } from 'antd-mobile';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

import SvgIcon from '@/components/SvgIcon';
import styles from './index.module.scss';

const PurchaseSuccess = () => {
  const history = useHistory();
  return (
    <div className={classNames('hn-container', styles.Container)}>
      <Header
        title="Order Confirmation"
        right={<SvgIcon iconClass="point" fontSize="0.72rem" />}
        color="#fff"
      />
      <div className={styles.Content}>
        <div>
          <SvgIcon iconClass="success_2" fontSize=".7rem" />
          <p className="font-base text-color-white pt-20 pb-14">successful purchase</p>
          <p className="text-color-article">NFT-A Level Mining Package</p>
          <div className={styles.Card}>
            <Steps current={0} direction="vertical" className={styles.Steps}>
              <Steps.Step
                title="Submit for purchase"
                description="Payment Account: Investment Account"
              />
              <Steps.Step title="take effect" description="Estimated time: 2021-08-16" />
              <Steps.Step
                title="start earning"
                description="Estimated time: 2021-08-16"
              />
            </Steps>
          </div>
        </div>
        <div className={styles.Btn}>
          <Button block className="btn-color-linear-base">
            Check order
          </Button>
          <Button
            block
            className="btn-color-linear-dark mt-20"
            onClick={() => history.replace('/home')}
          >
            Back to IPC Mining
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSuccess;
