import './index.scss';
import './utils/rem';
import './icons';

import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import App from './App';
import en_US from './locales/en_US'; // 英文(US)
import es_ES from './locales/es_ES'; // 西班牙语
import hi_IN from './locales/hi_IN'; // 印度语
import ko_KR from './locales/ko_KR'; // 韩语
import np_NP from './locales/np_NP'; // 尼泊尔语
import pt_PT from './locales/pt_PT'; // 葡萄牙语
import * as serviceWorker from './serviceWorker';
import store from './store';

let messages = {
  en: en_US,
  np: np_NP,
  hi: hi_IN,
  ko: ko_KR,
  es: es_ES,
  pt: pt_PT,
};
let lang = localStorage.getItem('lang');

// 兼容以前是中文的时候
if (!lang || lang === 'zh') {
  localStorage.setItem('lang', 'en');
  lang = 'en';
}

const message = messages[lang] ? messages[lang] : messages['en'];
ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={lang} messages={message}>
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
