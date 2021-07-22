import React from 'react';
import { Image, Text } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

import { theme } from '@/global/styles/theme';
import { styles } from './styles';

import Sun from '../../assets/sun.png';

export const CentralTemperature = ({
  dataTemperature,
  RealFeel,
  mainWeather,
}) => {
  const { primaryBarColor, secondaryBarColor, secondary30 } = theme.colors;

  return (
    <LinearGradient
      style={styles.primaryCircle}
      colors={[primaryBarColor, secondaryBarColor]}>
      <LinearGradient
        style={styles.internalCircle}
        colors={[primaryBarColor, secondary30]}>
        <Image
          source={mainWeather !== 'Clouds' ? Sun : ''}
          style={styles.image}
          resizeMode='contain'
        />

        <Text style={styles.textTemperature}>{`${dataTemperature}°C`}</Text>
        <Text style={styles.textRealFeel}>{`Feels Like ${RealFeel}°C`}</Text>
      </LinearGradient>
    </LinearGradient>
  );
};

CentralTemperature.defaultProps = {
  dataTemperature: 0,
  RealFeel: 0,
  mainWeather: '',
};

CentralTemperature.propTypes = {
  dataTemperature: PropTypes.number,
  RealFeel: PropTypes.number,
  mainWeather: PropTypes.string,
};
