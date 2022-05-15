import './index.scss';

import React from 'react';
import { FileOutline } from 'antd-mobile-icons';
import { useHistory } from 'react-router-dom';
import Header from '@/components/Header';
import code from '@/assets/index/code.svg';
import download from '@/assets/index/download.svg';

const AddNft = () => {
  const history = useHistory();

  const onBack = () => {
    history.push('/index');
  };

  return (
    <div className="AddNft">
      <div className="pb-36 pt-40">
        <Header
          title="Add NFT"
          color="#fff"
          right={<FileOutline style={{ fontSize: '16px' }} />}
          onBack={onBack}
        />
      </div>
      <div className="AddNft-title">Chain name</div>
      <div className="AddNft-coin">ETH</div>
      <div className="AddNft-title">Receiving Address</div>
      <div className="AddNft-qrCode">
        <div className="AddNft-qrCode-box">
          <img src={code} alt="" className="AddNft-qrCode-box-code" />
          <div className="AddNft-qrCode-box-icon">
            <img src={download} alt="" />
          </div>
        </div>
        <div className="AddNft-qrCode-address">Recharge Address</div>
        <div className="AddNft-qrCode-hash">
          0d3c1c55223c70f3ca0f953962d83a89 3c70f3ca0f95396
        </div>
        <div className="AddNft-qrCode-button flex flex-a-c flex-j-c">Copy Link</div>
      </div>
      <div className="AddNft-prompt">
        Please do not transfer any non-Hypernation contract assets to the above address,
        otherwise the assets will not be retrieved.
      </div>
    </div>
  );
};

export default AddNft;
