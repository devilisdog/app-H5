import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Button, DatePicker, Popup } from 'antd-mobile';

import { dateFormat } from '@/utils';
import Header from '../Header';

import styles from './index.module.scss';
import classNames from 'classnames';
import SvgIcon from '../SvgIcon';

export interface FilterTypes {
  setVisible(visible: boolean): void;
}

const PopupFilter = (props, ref) => {
  const [visible, setVisible] = useState(true);
  // 筛选参数
  const [startTime, setStartTime] = useState(dateFormat(new Date(), 'yyyy-MM-dd'));
  const [endByTime, setEndByTime] = useState(dateFormat(new Date(), 'yyyy-MM-dd'));

  useImperativeHandle(ref, () => ({
    setVisible: (visible: boolean) => {
      setVisible(visible);
    },
  }));

  return (
    <Popup
      visible={visible}
      onMaskClick={() => {
        setVisible(false);
      }}
      position="bottom"
      bodyStyle={{
        minHeight: '80vh',
        maxHeight: '90vh',
        borderTopLeftRadius: '0.32rem',
        borderTopRightRadius: '0.32rem',
      }}
    >
      <div className={styles.Container}>
        <Header title="安全验证" onBack={() => setVisible(false)} />
        <div className={styles.Content}>
          <div>
            <p className={styles.FilterTypeTitle}>Time</p>
            <div className={styles.DatePicker}>
              <div
                className={classNames('flex', 'flex-c', styles.date)}
                onClick={async () => {
                  const value = await DatePicker.prompt({
                    defaultValue: new Date(endByTime),
                    // cancelText: intl.formatMessage({ id: 'text_cancel' }),
                    // confirmText: intl.formatMessage({ id: 'text_confirm' }),
                  });
                  // 日期选择范围30天 结束时间 - 开始时间 <= 30
                  // if (value) {
                  //   if (dayjs(startTime).isAfter(dayjs(value).format('YYYY-MM-DD'))) {
                  //     return Toast.show({
                  //       content: (
                  //         <p className="toast">
                  //           {intl.formatMessage({ id: 'toast_select_date_2' })}
                  //         </p>
                  //       ),
                  //     });
                  //   } else if (
                  //     dayjs(value).diff(dayjs(startTime), 'days') < 0 ||
                  //     dayjs(value).diff(dayjs(startTime), 'days') > 30
                  //   ) {
                  //     return Toast.show({
                  //       content: (
                  //         <p className="toast">
                  //           {intl.formatMessage({ id: 'toast_select_date_1' })}
                  //         </p>
                  //       ),
                  //     });
                  //   }
                  //   setEndByTime(dateFormat(value, 'yyyy-MM-dd'));
                  // }
                }}
              >
                <p>{endByTime}</p>
                <SvgIcon iconClass="down-fill" fontSize=".28rem" />
              </div>
              <p>To</p>
              <div
                className={classNames('flex', 'flex-c', styles.date)}
                onClick={async () => {
                  // const value = await DatePicker.prompt({
                  //   defaultValue: new Date(endByTime),
                  //   cancelText: intl.formatMessage({ id: "text_cancel" }),
                  //   confirmText: intl.formatMessage({ id: "text_confirm" }),
                  // });
                  // // 日期选择范围30天 结束时间 - 开始时间 <= 30
                  // if (value) {
                  //   if (
                  //     dayjs(startTime).isAfter(
                  //       dayjs(value).format("YYYY-MM-DD")
                  //     )
                  //   ) {
                  //     return Toast.show({
                  //       content: (
                  //         <p className="toast">
                  //           {intl.formatMessage({ id: "toast_select_date_2" })}
                  //         </p>
                  //       ),
                  //     });
                  //   } else if (
                  //     dayjs(value).diff(dayjs(startTime), "days") < 0 ||
                  //     dayjs(value).diff(dayjs(startTime), "days") > 30
                  //   ) {
                  //     return Toast.show({
                  //       content: (
                  //         <p className="toast">
                  //           {intl.formatMessage({ id: "toast_select_date_1" })}
                  //         </p>
                  //       ),
                  //     });
                  //   }
                  //   setEndByTime(dateFormat(value, "yyyy-MM-dd"));
                  // }
                }}
              >
                <p>{endByTime}</p>
                <SvgIcon iconClass="down-fill" fontSize=".28rem" />
              </div>
            </div>
            <p className={styles.FilterTypeTitle}>套餐类型</p>
            <div className={styles.FilterTypeItem}>
              <Button className={classNames(styles.btn, styles.active)}>All</Button>
              <Button className={styles.btn}>All</Button>
              <Button className={styles.btn}>套餐类型套餐类型套餐类型套餐类型</Button>
            </div>
            <p className={styles.FilterTypeTitle}>订单状态</p>
            <div className={styles.FilterTypeItem}>
              <Button className={classNames(styles.btn, styles.active)}>All</Button>
              <Button className={styles.btn}>In Release</Button>
              <Button className={styles.btn}>Has Not Started</Button>
              <Button className={styles.btn}>Completed</Button>
              <Button className={styles.btn}>Completed</Button>
              <Button className={styles.btn}>Completed</Button>
              <Button className={styles.btn}>Completed</Button>
            </div>
          </div>
        </div>
        <div className={styles.Footer}>
          <Button className={styles.FooterBtn}> Reset</Button>
          <Button className={classNames('btn-color-linear-base', styles.FooterBtn)}>
            Finish
          </Button>
        </div>
      </div>
    </Popup>
  );
};

export default forwardRef(PopupFilter);
