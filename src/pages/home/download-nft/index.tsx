import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '@/components/Header';
import img from '@/assets/index/img.png';
import './index.scss';

const Download = (props) => {
  const history = useHistory();

  const onBack = () => {
    history.push('/index');
  };
  return (
    <div className="Download">
      <div className="Download-bg">
        <div className="hrader">
          <Header title="" onBack={onBack} />
        </div>
        <div className="content">
          <div className="content_activeated">ETH</div>
          <img src={img} alt="" className="content_img" />
          <div className="nft_title">
            <span className="nft_title_name">HITCHHKER OF STAR</span>
            <span className="nft_title_num"> #2478</span>
          </div>
          <div className="content-hash">
            Address：0xfajhfh0xfajhfhwi0xfajhfhafsd0xfajhf
          </div>

          <div className="button">
            <div className="save-button">Download image</div>
            <div className="copy-button">Download the poster</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
