import React from 'react';

import { Routes } from '@/routes';
import { Background } from '@/components/Background';

import { theme } from '@/global/styles/colors';

import { StatusBarColor } from './components/StatusBarColor';

if (__DEV__) {
  import('@/config/reactotron');
}

export const App = () => {
  return (
    <>
      <StatusBarColor backgroundColor={theme.colors.primary} />
      <Background>
        <Routes />
      </Background>
    </>
  );
};
