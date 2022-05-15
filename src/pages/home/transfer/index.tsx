import './index.scss';

import { Input } from 'antd-mobile';
import { ScanningOutline, FileOutline } from 'antd-mobile-icons';
import { useHistory } from 'react-router-dom';
import Header from '@/components/Header';
import React, { useState } from 'react';

import img from '@/assets/index/img.png';

interface Transferprops {}

const Transfer = () => {
  const history = useHistory();

  const [disable, setDisable] = useState(true);

  const onBack = () => {
    history.push('/index');
  };

  return (
    <div className="Transfer">
      <div className="pb-14">
        <Header
          title="Extract NFT"
          color="#fff"
          right={<FileOutline style={{ fontSize: '16px' }} />}
          onBack={onBack}
        />
      </div>
      <div className="content">
        <div className="content_activeated">ETH</div>
        <img src={img} alt="" className="content_img" />
        <div className="nft_title">
          <span className="nft_title_name">HITCHHKER OF STAR</span>
          <span className="nft_title_num"> #2478</span>
        </div>
        <div className="content-hash">Address：0xfajhfh0xfajhfhwi0xfajhfhafsd0xfajhf</div>
      </div>

      <div className="Transfer-inputLabel">ETH Receiving Address</div>
      <div className="Transfer-inputForm">
        <div>
          <Input
            placeholder="Please enter other  ETH withdrawal address"
            className="Transfer-inputForm-inputArea"
          />
        </div>
        <div className="Transfer-inputForm-suffix">
          <ScanningOutline />
        </div>
      </div>

      <div className="Transfer-prompt">
        Only supports Ethereum network addresses, please check! The withdrawal process is
        an irreversible act, and a wrong network address will result in the asset being
        irrecoverable and possibly permanently lost.
      </div>

      <div className={`taransfer-submit-button ${disable && 'disable'}`}>确认转移</div>
    </div>
  );
};

export default Transfer;
