import { useEffect, useState } from 'react';

// debounce
export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    let timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};

export const dateFormat = (date, fmt) => {
  const d = new Date(date);
  var o = {
    'M+': d.getMonth() + 1, // 月份
    'd+': d.getDate(), // 日
    'h+': d.getHours(), // 小时
    'm+': d.getMinutes(), // 分
    's+': d.getSeconds(), // 秒
    'q+': Math.floor((d.getMonth() + 3) / 3), // 季度
    S: d.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length),
      );
  }
  return fmt;
};

export const dateFormatStr = (dates) => {
  const year = new Date(dates).getFullYear();
  const month = new Date(dates).getMonth() + 1 + '月';
  const date = new Date(dates).getDate() + '日';
  return [year, month, date].join('-');
};

export const addDays = (date: Date, days: number): number => {
  const dateTime = new Date(date);
  return dateFormat(dateTime.setDate(dateTime.getDate() + days), 'yyyy-MM-dd');
};

export function daysDistance(date1, date2) {
  //parse() 是 Date 的一个静态方法 , 所以应该使用 Date.parse() 来调用，而不是作为 Date 的实例方法。返回该日期距离 1970/1/1 午夜时间的毫秒数
  date1 = Date.parse(date1);
  date2 = Date.parse(date2);
  //计算两个日期之间相差的毫秒数的绝对值
  const distance = (date2 - date1) / (24 * 3600 * 1000);
  if (distance < -1) {
    return -1;
  }
  if (distance < 0 && distance > -1) {
    return 0;
  }
  //毫秒数除以一天的毫秒数,就得到了天数
  const days = Math.floor(distance);
  return days;
}

// 截取小数点后几位
export function toFixed(num: string | number = '', fixed: number | string = 4): string {
  const re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
  let str = num.toString().match(re);
  if (!str) {
    return '';
  }
  return str[0];
}

// h5copy
export function h5Copy(content: any): boolean {
  let input = document.createElement('input');
  input.value = content;
  input.readOnly = true;
  document.body.appendChild(input);
  input.select(); // 选择对象

  input.setSelectionRange(0, content.length); //核心
  let result = document.execCommand('Copy'); // 执行浏览器复制命令
  input.remove();
  return result;
}

// 资金流水类型: xx_xx => Xx Xx
export function businessType_letterProcess(type: string): string {
  if (!type) return type;
  return type
    .split('_')
    .map((str) => capitalizeFirstLetter(str))
    .join(' ');
}

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export let newComer = false;
export let newVersion = false;
export const setNewComer = (status: boolean) => {
  newComer = status;
};

export const downloadImg = (qr: HTMLCanvasElement): void => {
  let image = new Image();
  image.src = qr.toDataURL('image/png');
  var a_link = document.getElementById('aId') as any;
  a_link.href = image.src;
};

export const downloadImage = (url: string, name?: string): void => {
  let link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', name || 'download.png');
  link.click();
};

// 语言
export const languages = {
  en: 'English',
  np: 'निबल', // 尼迫尔语
  hi: 'हिंदी', // 印度语
  ko: '한국어', // 韩语
  es: 'Español', // 西班牙语
  pt: 'português', // 葡萄牙语
};
