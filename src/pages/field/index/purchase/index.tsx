import React, { useRef, useState } from 'react';
import { Button, Checkbox, Input } from 'antd-mobile';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

import Header from '@/components/Header';
import SvgIcon from '@/components/SvgIcon';
import MaskPasswordInput, { PassWordTypes } from '@/components/MaskPasswordInput';

import styles from './index.module.scss';

const Detail = () => {
  const history = useHistory();
  const passwordInputRef = useRef<PassWordTypes | null>();
  const [value, setValue] = useState('1');
  const [agreement, setAgreement] = useState(false);

  const onChange = (value: string) => {
    setValue(value);
  };
  /**
   * @description
   * 购买
   */
  const submit = () => {
    passwordInputRef.current?.setVisible(true);
  };
  return (
    <div className={classNames('hn-container', styles.container)}>
      <Header
        title="Order Confirmation"
        right={<SvgIcon iconClass="point" fontSize="0.72rem" />}
        color="#fff"
      />
      <div className={classNames('content', styles.content)}>
        <div className={styles.Title}>
          <p className={'text-color-base font-500'}>Buy</p>
          <p className={'text-color-base font-500'}>NFT A-level mining package</p>
        </div>
        <p className={'text-color-base font-base pt-14 pb-14 font-500'}>
          Payment account
        </p>
        <div className={styles.Account}>
          <p className="text-color-base">
            <img src="" alt="" />
            investment account
          </p>
          <p className="flex flex-a-c flex-d">
            <span>Available: 32.8102 HU</span>
            <span>Available: 32.8102 HU</span>
          </p>
        </div>
        <p className={'text-color-base font-base pt-24 pb-14 font-500'}>
          Purchase details
        </p>
        <div className={styles.PurchaseDetail}>
          <p className="flex flex-j-b flex-a-c p-16 text-color-base">
            <span>Unit price</span>
            <span className="text-color-article">400 HU</span>
          </p>
          <div className={styles.PurchaseCalculate}>
            <p className="text-color-base">Number of purchases</p>
            <div>
              <Button>-</Button>
              <Input className={styles.Input} value={value} onChange={onChange} />
              <Button className={styles.Add}>+</Button>
            </div>
          </div>
        </div>
        <p className="pt-14 pb-24 font-base text-color-article">
          Total payment <span className="font-500 text-color-base">800 HU</span>
        </p>
        <p className={'text-color-base font-base pt-24 pb-14 font-500'}>
          Release details
        </p>
        <div className={styles.PurchaseDetail}>
          <p className="flex flex-j-b flex-a-c p-16 text-color-base">
            <span>Total releasable</span>
            <span className="text-color-article">400 HU</span>
          </p>
          <div className="p-16 text-color-base">
            <p className="flex flex-a-c flex-j-b">
              <span>Release account</span>
              <span className="text-color-article">NFT field account</span>
            </p>
            <p className={styles.NFTName}>Hitchhker of star #24788</p>
          </div>
        </div>
        <Checkbox
          className={styles.checkbox}
          icon={() => (
            <SvgIcon iconClass={agreement ? 'checked' : 'checkbox'} fontSize=".32rem" />
          )}
          onChange={(v) => {
            console.log(v, agreement);
            setAgreement(v);
          }}
        >
          Agree to the{' '}
          <span onClick={() => history.push('/about/privacy')}>sales agreement</span>
        </Checkbox>
        <Button
          block
          className="btn-color-linear-base mt-24"
          disabled={!agreement}
          onClick={submit}
        >
          Go to recharge
        </Button>
        <p className="mt-20 text-color-article text-center">
          Insufficient balance, go to recharge or flash exchange
        </p>
      </div>
      <MaskPasswordInput ref={passwordInputRef} />
    </div>
  );
};

export default Detail;
