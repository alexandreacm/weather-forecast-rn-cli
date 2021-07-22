import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Alert,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { CentralTemperature } from '../../components/CentralTemperature';
import { SpecificTemperature } from '../../components/SpecificTemperature';
import { FooterTemperature } from '../../components/FooterTemperature';

import { styles } from './styles';
import { api } from '../../services/api';

const { APP_ID } = process.env;

export const Home = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [locationName, setLocationName] = useState('');
  const [dataMain, setDataMain] = useState();
  const [dataWeather, setDataWeather] = useState();
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [userPosition, setUserPosition] = useState(false);

  const verifyLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('permission granted');
        setHasLocationPermission(true);
      } else {
        Alert.alert('permission denied');
        setHasLocationPermission(false);
      }
    } catch (err) {
      Alert.alert(err);
    }
  };

  const loadingLocation = async () => {
    try {
      const {
        data: {
          main,
          sys: { country },
          weather,
          name,
        },
      } = await api.get(
        `?lat=-29.9178&lon=-51.1836&units=metric&appid=fc769c0cf9cfa067109b56dc0e14eee3`,
      );

      setDataWeather(weather);
      setDataMain(main);
      setLocationName(`${name}, ${country}`);
    } catch (error) {
      setErrorMsg(error);
    }
  };

  useEffect(() => {
    verifyLocationPermission();

    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        position => {
          setUserPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          Alert.alert(error.code, error.message);
        },
      );
    }
  }, [hasLocationPermission]);

  useEffect(() => {
    (async () => {
      await loadingLocation();
    })();
  }, [hasLocationPermission]);

  return (
    <Background>
      <ScrollView>
        <Header title={locationName || 'No Address'} />

        <View style={{ backgroundColor: '#FFCCCC' }}>
          <Text>Latitude: {userPosition.latitude}</Text>
          <Text>Longitude: {userPosition.longitude}</Text>
          <Text>{APP_ID}</Text>
        </View>

        {errorMsg !== '' && (
          <View style={styles.errorMsg}>
            <Text style={styles.errorMsgText}>{errorMsg}</Text>
          </View>
        )}

        <View style={styles.container}>
          <CentralTemperature
            dataTemperature={dataMain?.temp || 0}
            RealFeel={dataMain?.feels_like || 0}
            mainWeather={dataWeather?.main || ''}
          />

          <SpecificTemperature data={dataMain} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Text style={styles.text}>Weather Details</Text>
        </View>

        <View>
          <FooterTemperature
            tempMin={dataMain?.temp_min}
            tempMax={dataMain?.temp_max}
            pressure={dataMain?.pressure}
            humidity={dataMain?.humidity}
          />
        </View>
      </ScrollView>
    </Background>
  );
};
