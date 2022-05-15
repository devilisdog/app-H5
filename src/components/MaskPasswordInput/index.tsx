import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Mask, NumberKeyboard, PasscodeInput } from 'antd-mobile';
import classNames from 'classnames';

import styles from './index.module.scss';

export interface PassWordTypes {
  setVisible(status: boolean): void;
  setPwd(pwd: string): void;
}
const MaskPasswordInput = (_, ref) => {
  const [visible, setVisible] = useState(true);
  const [showKeyborad, setShowKeyborad] = useState(true);
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState(false);
  useImperativeHandle(ref, () => ({
    setVisible: (visible: boolean) => {
      setVisible(visible);
    },
  }));

  // const onChange = (value: string) => {
  //   setPwd((v) => v + value);
  //   setError(pwd.length >= 6);
  // };

  const actions = {
    onClose: () => {
      setShowKeyborad(false);
    },
    onInput: (key: string) => {
      setPwd((v) => v + key);
      setError(pwd.length >= 6);
    },
    onDelete: () => {
      setPwd((v) => v.slice(0, v.length - 1));
      setError(false);
    },
  };

  return (
    <Mask
      visible={visible}
      getContainer={document.body}
      onMaskClick={() => {
        setPwd('');
        setVisible(false);
      }}
    >
      <div className={styles.Container}>
        <div className={styles.Content}>
          <p>Please enter transaction password</p>
          <p className={classNames('text-color-linear-base font-700', styles.Amount)}>
            2400 HU
          </p>
          <p className="text-color-article">Payment amount</p>
          <PasscodeInput
            className={classNames('codeInput', styles.Input)}
            seperated
            // onChange={onChange}
            value={pwd}
            error={error}
            // keyboard={<NumberKeyboard />}
          />
          <NumberKeyboard
            visible={showKeyborad}
            onInput={actions.onInput}
            onClose={actions.onClose}
            onDelete={actions.onDelete}
          />
        </div>
      </div>
    </Mask>
  );
};

export default forwardRef(MaskPasswordInput);
