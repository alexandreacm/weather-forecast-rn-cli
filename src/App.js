import React from 'react';
import { View, Text } from 'react-native';

import { theme } from '@/global/styles/theme';

import { StatusBarColor } from './components/StatusBarColor';

if (__DEV__) {
  import('@/config/reactotron');
}

const App = () => {
  return (
    <>
      <StatusBarColor backgroundColor={theme.colors.primary} />
      <View>
        <Text>HOME</Text>
      </View>
    </>
  );
};

export default App;
