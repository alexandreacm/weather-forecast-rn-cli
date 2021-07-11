import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

import Sun from '../../assets/sun.png';
import rain from '../../assets/rain.png';
import rainDay from '../../assets/rainy-day.png';

export const SpecificTemperature = ({ data }) => {
  return (
    <View style={styles.containerSecondary}>
      <View style={styles.containerMorning}>
        <Text style={styles.text}>Morning</Text>
        <View style={styles.morning}>
          <Image source={Sun} style={styles.image} resizeMode='contain' />
          <Text style={styles.specificTemperature}>0°</Text>
        </View>
      </View>

      <View style={styles.containerAfternoon}>
        <Text style={styles.text}>Afternoon</Text>
        <View style={styles.morning}>
          <Image source={rain} style={styles.image} resizeMode='contain' />
          <Text style={styles.specificTemperature}>0°</Text>
        </View>
      </View>

      <View style={styles.containerEvening}>
        <Text style={styles.text}>Evening</Text>
        <View style={styles.morning}>
          <Image source={rainDay} style={styles.image} resizeMode='contain' />
          <Text style={styles.specificTemperature}>0°</Text>
        </View>
      </View>
    </View>
  );
};

SpecificTemperature.defaultProps = {
  data: [],
};

SpecificTemperature.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      temp: PropTypes.number,
      feels_like: PropTypes.number,
      temp_min: PropTypes.number,
      temp_max: PropTypes.number,
      pressure: PropTypes.number,
      humidity: PropTypes.number,
    }),
  ),
};
