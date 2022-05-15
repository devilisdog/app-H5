import './App.scss';
import 'aos/dist/aos.css';

import AOS from 'aos';
import React from 'react';
import { useDispatch } from 'react-redux';

import config from '@/config';
import { setAppUserInfo } from '@/store/actions/user';

import UserApi from './api/index/user';
import RouterView from './router';
console.info(config, 'config');

function App() {
  const dispath = useDispatch();

  const getUserInfo = async () => {
    const res = await UserApi.getUserInfo({});
    if (res.code === 0) {
      dispath(setAppUserInfo(res.data));
    }
  };
  React.useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out-quart',
      once: true,
    });
  }, []);

  React.useEffect(() => {
    // getUserInfo();
  }, []);
  return <RouterView></RouterView>;
}

export default App;
