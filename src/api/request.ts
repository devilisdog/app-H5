import { Toast } from 'antd-mobile';
// eslint-disable-next-line no-unused-vars
import axios, { AxiosRequestConfig, Method } from 'axios';

import envConfig from '@/config';

import { getHttpStatusText } from './status';
// import { LoadingElement } from '@/components/loading'
/**
 * 接口返回类型 (根据后端返回的格式定义)
 * @interface ResponseType
 */
export interface ResponseType<T> {
  data: T;
  msg: string;
  code: number;
}

const TIMEOUT = 20000;
const LOADING = {
  en: 'Loading...',
  np: 'लोड हुँदैछ...',
  hi: 'लोड हो रहा ...',
  ko: '로딩 중...',
  es: 'Cargando...',
  pt: 'Carregando...',
};
const language = {
  en: 'en_US',
  // it: "it_IT",
  np: 'ne_NP',
  hi: 'hi_IN',
  ko: ' ko_KR',
  es: 'es_ES',
  pt: 'pt_PT',
};
let timerId: any = null;

console.log(envConfig.BASE_URL_MARKET, '当前市场模块接口地址');
const initAxios = (loading?: boolean) => {
  const AxiosInstance = axios.create({
    baseURL: envConfig.BASE_URL_MARKET,
    timeout: TIMEOUT,
    withCredentials: false,
  });

  // request interceptor
  AxiosInstance.interceptors.request.use((config) => {
    if (loading) {
      if (!timerId) {
        timerId = setTimeout(() => {
          Toast.show({
            icon: 'loading',
            maskClickable: false,
            content: LOADING[localStorage.getItem('lang') || 'en'],
            duration: 0,
          });
        }, 2000);
      }
    }
    config.headers = {
      // "content-type": "application/x-www-form-urlencoded",
      // @ts-ignore
      Authorization: localStorage.getItem('access_token'),
      lang: language[localStorage.getItem('lang') || 'en'],
    };

    return config;
  });

  // response interceptor
  AxiosInstance.interceptors.response.use(
    (response) => {
      Toast.clear();
      if (response && response.status && response.status !== 200) {
        Toast.show(getHttpStatusText(response.status));
        // eslint-disable-next-line no-undef
        return Promise.reject(response || 'error');
      } else {
        // eslint-disable-next-line no-undef
        return Promise.resolve(response);
      }
    },
    (error) => {
      Toast.clear();
      Toast.show(getHttpStatusText(null, error));
      // eslint-disable-next-line no-undef
      return Promise.reject(error);
    },
  );

  return AxiosInstance;
};

/**
 * 封装request
 *
 * @param {string} url
 * @param {Method} method
 * @param {*} [data]
 * @param {boolean} [loading]
 * @returns {Promise<ResponseType>}
 */
export default function request(
  url: string,
  method: Method,
  data?: {},
  loading?: boolean,
): Promise<any> {
  data = Object.assign({}, data);
  const options: AxiosRequestConfig = {
    url,
    method,
    params:
      method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE' ? data : null,
    data: method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT' ? data : null,
  };

  const AxiosInstance = initAxios(loading);
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    AxiosInstance(options)
      .then((res) => {
        if (timerId) {
          clearTimeout(timerId);
          timerId = null;
          Toast.clear();
        }
        const data = res.data as ResponseType<any>;
        if (data && [1025, 1028].includes(data.code)) {
          Toast.show(res.data.msg);
          localStorage.removeItem('access_token');
          setTimeout(() => {
            window.location.href = '/landing';
          }, 2000);
        }
        resolve(data);
      })
      .catch((err) => {
        const msg = JSON.parse(JSON.stringify(err));
        if (timerId) {
          clearTimeout(timerId);
          timerId = null;
        }
        Toast.clear();

        Toast.show({
          icon: 'fail',
          content:
            msg && msg.status
              ? getHttpStatusText(msg.status)
              : getHttpStatusText(null, msg),
        });
        reject(err);
      });
  });
}
