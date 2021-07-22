/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TextInput, View } from 'react-native';
import { Feather } from 'react-native-vector-icons';

import { theme } from '@/global/styles/theme';

import { styles } from './styles';

export const SmallInput = ({ ...rest }) => {
  return (
    <View style={styles.viewInput}>
      <Feather name='search' size={20} color={theme.colors.primary} />

      <TextInput style={styles.container} {...rest} />
    </View>
  );
};
