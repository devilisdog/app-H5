import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '@/components/Header';
import img from '@/assets/index/img.png';
import code from '@/assets/index/code.svg';

import './index.scss';

const Share = (props) => {
  const history = useHistory();

  const onBack = () => {
    history.push('/index');
  };
  return (
    <div className="Share">
      <div className="share-bg">
        <div className="hrader">
          <Header title="" onBack={onBack} />
        </div>
        <div className="content">
          <img src={img} alt="" className="content_img" />
          <div className="nft_title">HITCHHKER OF STAR #2478</div>
        </div>

        <div className="promote">
          <div className="promote-top">
            <div className="promote-top-notice">
              NFT empowers a new digital field, limited seats come quickly!
            </div>
            <img src={code} alt="" className="promote-top-img" />
          </div>

          <div className="promote-bottom">
            Scan to register and log in. After successfully adding NFT, fill in the above
            NFT TokenID on the "Bind NFT Superior" page to activate
          </div>

          <div className="promote-button">
            <div className="promote-save-button">Save poster</div>
            <div className="promote-copy-button">Copy Link</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
