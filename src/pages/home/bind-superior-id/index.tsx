import { Button, Form, Input } from 'antd-mobile';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

// import { useHistory } from 'react-router-dom';
import Header from '@/components/Header';
import PopupSelectNFT, { SelectTypes } from '@/components/PopupSelectNFT';
import PopupVerify, { VerifyTypes } from '@/components/PopupVerify';
import SvgIcon from '@/components/SvgIcon';

import styles from './index.module.scss';

const BindSuperiorID = () => {
  // const history = useHistory();

  const verifyRef = useRef<VerifyTypes | null>();
  const selectNFTRef = useRef<SelectTypes | null>();

  const [name, setName] = useState('Hitchhker of star');

  const onFinish = (values: any) => {
    if (values) {
      verifyRef.current?.setVisible(true);
    }
    console.log('onFinish', values);
  };
  const checkMobile = (_: any, value) => {
    if (value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('密码不能为空!'));
  };

  useEffect(() => {
    console.log(name);
  }, [name]);
  return (
    <div className={classNames('hn-container', styles.container)}>
      <Header title="" />
      <h1>Bind the superior ID</h1>
      <div className={classNames('content', styles.content)}>
        <p className={styles.desc}>
          The realm can be activated by successfully binding the NFT Token ID of the
          superior
        </p>
        <Form
          name="form"
          onFinish={onFinish}
          // requiredMarkStyle="text-optional"
          className="Form"
          footer={
            <Button
              className={classNames('submit', styles.submit)}
              block
              type="submit"
              color="primary"
              size="large"
            >
              Submit
            </Button>
          }
        >
          <Form.Item className="FormItem" label="NFT Project Name">
            <div
              className={classNames('input', styles.select)}
              onClick={() => selectNFTRef.current?.setVisible(true)}
            >
              <span>{name}</span>
              <SvgIcon iconClass="rightOutLine" fontSize="0.2rem" />
            </div>
          </Form.Item>
          <Form.Item
            className="FormItem"
            name="password"
            label="Superior Token ID"
            rules={[{ required: true, validator: checkMobile }]}
          >
            <Input
              // value={}
              className="input"
              placeholder="请输入您的上级 NFT Token ID"
              type="text"
              clearable
            />
          </Form.Item>
        </Form>
      </div>
      <PopupVerify ref={verifyRef} />
      <PopupSelectNFT ref={selectNFTRef} setName={setName} />
    </div>
  );
};

export default BindSuperiorID;
