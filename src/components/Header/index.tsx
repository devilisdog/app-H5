import './index.scss';

import classNames from 'classnames';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import SvgIcon from '../SvgIcon';
/**
 * @prop {string | ReactElement} title  - 标题
 * @prop {string} className             - 类名
 * @prop {string} [background]          - 背景颜色
 * @prop {string} [color]               - 标题字体颜色
 * @prop {boolean} [right]              - 右侧类容
 * @prop {boolean} [left]               - 左侧内容
 * @prop {boolean} [transparentTitle]   - 导航栏整体透明设置，true为滑动自适应
 * @prop {() => void} [onBack]          - 点击返回区域后的回调
 * @prop {boolean | ReactNode} [backArrow]          - 是否显示返回区域的箭头，也可以传入 ReactNode 进行自定义
 */
export interface HeaderProps {
  title: string | ReactElement;
  className?: string;
  background?: string;
  color?: string;
  left?: ReactNode;
  right?: any;
  onBack?: Function;
  backArrow?: boolean | ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  background = 'transparent',
  color = '#000',
  left,
  right = '',
  onBack,
  className,
  backArrow = true,
}) => {
  const history = useHistory();
  const [textColor, setTextColor] = useState(color);

  const back = () => {
    if (onBack) return onBack();
    history.goBack();
  };

  const handleScroll = () => {
    const navEle = document.getElementsByClassName('nav')[0];
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      navEle?.setAttribute(
        'style',
        `background: rgba(248,249,253,${
          scrollTop / navEle.clientHeight > 1 ? 1 : scrollTop / navEle.clientHeight
        })`,
      );
      setTextColor('#000');
    } else {
      navEle?.setAttribute('style', `background: ${background}`);
      setTextColor(color);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div
      className={classNames('nav', className)}
      style={{ color: textColor, background }}
    >
      <div className="left">
        {backArrow && (
          <SvgIcon
            iconClass="back"
            fontSize="0.32rem"
            onClick={back}
            style={{ color: textColor }}
          />
        )}
        {left}
      </div>

      <div className="title" style={{ color: textColor }}>
        <p>{title}</p>
      </div>
      <div className="right">{right}</div>
    </div>
  );
};

export default Header;
