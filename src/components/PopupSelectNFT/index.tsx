import React, { forwardRef, useImperativeHandle, useState } from 'react';

import { Popup } from 'antd-mobile';

import styles from './index.module.scss';
import Header from '@/components/Header';

export interface SelectTypes {
  setVisible(visible: boolean): void;
}

const PopupSelectNFT = (props, ref) => {
  const { setName } = props;
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    setVisible: (visible: boolean) => {
      setVisible(visible);
    },
  }));

  const renderItem = (item, index) => {
    return (
      <div
        className={styles.ListItem}
        key={index}
        onClick={() => {
          setName(item);
          setVisible(false);
        }}
      >
        Hitchhker of star
      </div>
    );
  };

  return (
    <Popup
      visible={visible}
      onMaskClick={() => {
        setVisible(false);
      }}
      position="bottom"
      bodyStyle={{
        minHeight: '60vh',
        maxHeight: '80vh',
        borderTopLeftRadius: '0.32rem',
        borderTopRightRadius: '0.32rem',
      }}
    >
      <div className={styles.popupContainer}>
        <Header title="Please select NFT item" onBack={() => setVisible(false)} />
        <div className={styles.content}>
          <div className={styles.List}>
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => renderItem(item, index))}
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default forwardRef(PopupSelectNFT);
