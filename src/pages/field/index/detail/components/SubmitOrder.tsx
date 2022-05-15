import React, { useState } from 'react';
import { Button, Input } from 'antd-mobile';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

import styles from '../index.module.scss';

const SubmitOrder = () => {
  const history = useHistory();

  const [value, setValue] = useState('1');
  const onChange = (value: string) => {
    setValue(value);
  };
  return (
    <div className={styles.SubmitOrder}>
      <div className={styles.Order}>
        <Button>-</Button>
        <Input className={styles.Input} type="number" value={value} onChange={onChange} />
        <Button className={styles.Add}>+</Button>
      </div>
      <Button
        className={classNames('btn-color-linear-base', styles.Submit)}
        onClick={() => history.push('/field/purchase')}
      >
        Purchase now
      </Button>
    </div>
  );
};

export default SubmitOrder;
