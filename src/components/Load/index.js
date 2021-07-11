import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { theme } from '@/global/styles/colors';
import { styles } from './styles';

export const Load = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={theme.colors.primary} />
    </View>
  );
};
