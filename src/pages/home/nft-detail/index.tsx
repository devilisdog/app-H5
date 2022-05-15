import React, { useState } from 'react';
import Header from '@/components/Header';
import { useHistory } from 'react-router-dom';
import Rectangle8 from '@/assets/index/Rectangle8.svg';
import Rectangle9 from '@/assets/index/Rectangle9.svg';
import download from '@/assets/index/download.svg';
import SvgIcon from '@/components/SvgIcon';

import './index.scss';
import { Divider } from 'antd-mobile';

interface NftDetailprops {}

const NftDetail: React.FC<NftDetailprops> = (props) => {
  const history = useHistory();

  const [active, setActive] = useState(false);

  const onBack = () => {
    history.push('/index');
  };

  const goShare = () => {
    history.push('/index/share');
  };

  const arr = [
    { label: 'Nick Name', value: 'HITCHHKER', icon: '' },
    { label: 'Chain Name', value: 'ETH', icon: '' },
    { label: 'Token ID', value: '123', icon: '' },
    { label: 'CONTRACT', value: '0xfajhf234i0x343fhwif30xffhaf34', icon: '' },
  ];

  const arrowIcon = '>';

  const leftIcon = (
    <div className="back_bg" onClick={onBack}>
      <SvgIcon fontSize="0.32rem" iconClass="back" />
    </div>
  );

  const rightIcon = (
    <div className="share_bg" onClick={goShare}>
      Share
    </div>
  );

  return (
    <div className="NftDetail">
      <Header
        title=""
        onBack={onBack}
        left={leftIcon}
        right={rightIcon}
        backArrow={false}
      />
      <div className="NftDetail-content">
        <div
          className="NftDetail-content-status"
          style={{ background: `url(${!active ? Rectangle8 : Rectangle9}) no-repeat` }}
        >
          To be activated
        </div>
        <div className="NftDetail-content-popup">
          <div className="NftDetail-content-popup-title">
            <div>HITCHHKER-#2478</div>
            <div className="NftDetail-content-popup-title-icon">
              <img src={download} alt="" />
            </div>
          </div>

          {arr.map((item, index) => {
            return (
              <div key={index} className="NftDetail-content-popup-describe">
                <div className="NftDetail-content-popup-describe-label">{item.label}</div>
                <div className="NftDetail-content-popup-describe-value">{item.value}</div>
              </div>
            );
          })}

          <div className="NftDetail-content-popup-line"></div>

          <div className="NftDetail-content-popup-tokenId">
            <div className="NftDetail-content-popup-tokenId-left">
              Superior NFT Token ID
            </div>
            <div className="NftDetail-content-popup-tokenId-right">
              <span>Unbound</span>&nbsp;&nbsp;
              <span>{arrowIcon}</span>
            </div>
          </div>

          <div className="NftDetail-button">
            {!active ? (
              <>
                <div className="NftDetail-transfer-button">Transfer</div>
                <div className="NftDetail-invite-button">邀请</div>
              </>
            ) : (
              <div className="NftDetail-singleTransfer-button">Transfer</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetail;
