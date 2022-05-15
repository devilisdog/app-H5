import React, { forwardRef } from 'react';
import classNames from 'classnames';
import img from '@/assets/index/img.png';

import './index.scss';

interface PopupContentProps {}

const nftList = [
  {
    active: true,
    text1: 'NOT ACTIVATED',
    text2: 'HITCHHKER OF STAR',
    text3: '#2478',
    text4: 'SUPERAPE001',
  },
  {
    active: false,
    text1: 'NOT ACTIVATED',
    text2: 'HITCHHKER OF STAR',
    text3: '#2478',
    text4: 'SUPERAPE001',
  },
  {
    active: false,
    text1: 'NOT ACTIVATED',
    text2: 'HITCHHKER OF STAR',
    text3: '#2478',
    text4: 'SUPERAPE001',
  },
  {
    active: false,
    text1: 'NOT ACTIVATED',
    text2: 'HITCHHKER OF STAR',
    text3: '#2478',
    text4: 'SUPERAPE001',
  },
  {
    active: false,
    text1: 'NOT ACTIVATED',
    text2: 'HITCHHKER OF STAR',
    text3: '#2478',
    text4: 'SUPERAPE001',
  },
];

const PopupContent: React.FC<PopupContentProps> = forwardRef((props, ref) => {
  return (
    <div className="popupContent">
      <div className="title_line"></div>

      <div className="nftList">
        {nftList.map((item, index) => {
          const { text1, text2, text3, text4 } = item;
          return (
            <div className="content" key={index}>
              <div
                className={classNames('content_not_activeated', {
                  ['content_activeated']: item.active,
                })}
              >
                {text1}
              </div>
              <img src={img} alt="" className="content_img" />
              <div className="nft_title">
                <span className="nft_title_name">{text2}</span>
                <span className="nft_title_num"> {text3}</span>
              </div>
              <div className="capsule_box">
                <div
                  className={classNames('capsule_not_activeated', {
                    ['capsule_activeated']: item.active,
                  })}
                >
                  {text4}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default PopupContent;
