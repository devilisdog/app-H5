import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '@/components/Header';
import img from '@/assets/index/img.png';
import './index.scss';

const Order = (props) => {
  const history = useHistory();

  const onBack = () => {
    history.push('/index');
  };
  return (
    <div className="Order">
      <div className="Order-bg">
        <div className="hrader">
          <Header title="" onBack={onBack} />
        </div>
        <div className="content">
          <div className="content_activeated">ETH</div>
          <img src={img} alt="" className="content_img" />
          <div className="content-prompt">
            Your NFT status and domain rights have been transferred to the other party's
            account
          </div>
        </div>
        <div className="check-order">check order</div>
        <div className="back">Back to IPC Mining</div>
      </div>
    </div>
  );
};

export default Order;
