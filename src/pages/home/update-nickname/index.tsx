import Header from '@/components/Header';
import SvgIcon from '@/components/SvgIcon';
import { Button, Form, Input } from 'antd-mobile';
import classNames from 'classnames';
import React, { useState } from 'react';

import styles from './index.module.scss';

const UpdateNickname = () => {
  const [isHide, setIsHide] = useState(true);
  const onFinish = (values: any) => {
    console.log('onFinish', values);
  };
  return (
    <div className={classNames('container', styles.container)}>
      <Header title="Set Nickname" />
      <div className={classNames(styles.content)}>
        <Form
          name="form"
          onFinish={onFinish}
          requiredMarkStyle="text-optional"
          className="Form"
          footer={
            <Button className="submit" block type="submit" color="primary" size="large">
              Confirm Submission
            </Button>
          }
        >
          <Form.Item
            className="FormItem"
            name="name"
            label="Name"
            rules={[{ required: true }]}
            extra={
              <div className="eye" onClick={() => setIsHide(!isHide)}>
                <SvgIcon fontSize="0.32rem" iconClass={isHide ? 'eye' : 'eyeInvisible'} />
              </div>
            }
          >
            <Input placeholder="Please enter your nickname" className="input password" />
          </Form.Item>
          <p className={styles.desc}>
            Nicknames are only displayed for personalization and will not be retained when
            transferred
          </p>
        </Form>
      </div>
    </div>
  );
};

export default UpdateNickname;
