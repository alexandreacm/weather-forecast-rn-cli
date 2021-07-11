import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

export const FooterTemperature = ({ tempMin, tempMax, pressure, humidity }) => {
  return (
    <View style={styles.containerFooter}>
      <View style={styles.footerLeft}>
        <View style={styles.leftTemperature}>
          <Text style={styles.text}>Minimum</Text>
          <Text style={styles.text}>{`${tempMin}°C`}</Text>
        </View>

        <View style={styles.leftTemperature}>
          <Text style={styles.text}>Humidity</Text>
          <Text style={styles.text}>{`${humidity}%`}</Text>
        </View>
      </View>

      <View style={styles.footerRight}>
        <View style={styles.rightTemperature}>
          <Text style={styles.text}>Maximum</Text>
          <Text style={styles.text}>{`${tempMax}°C`}</Text>
        </View>
        <View style={styles.rightTemperature}>
          <Text style={styles.text}>Pressure</Text>
          <Text style={styles.text}>{`${pressure}mbar`}</Text>
        </View>
      </View>
    </View>
  );
};

FooterTemperature.defaultProps = {
  tempMin: 0,
  tempMax: 0,
  pressure: 0,
  humidity: 0,
};

FooterTemperature.propTypes = {
  tempMin: PropTypes.number,
  tempMax: PropTypes.number,
  pressure: PropTypes.number,
  humidity: PropTypes.number,
};
