import React from 'react';
import { LinearGradient } from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import { theme } from '@/global/styles/colors';
import { styles } from './styles';

export const Background = ({ children }) => {
  const { primary, secondary } = theme.colors;

  return (
    <LinearGradient style={styles.container} colors={[primary, secondary]}>
      {children}
    </LinearGradient>
  );
};

Background.propTypes = {
  children: PropTypes.node.isRequired,
};
