import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ScrollView } from 'react-native';
//import * as Location from 'expo-location';

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

  useEffect(() => {
    (async () => {
      /*let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }*/

      //const location: Location.LocationObject = await Location.getCurrentPositionAsync({});

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
        Alert.alert(error);
      }
    })();
  }, []);

  return (
    <Background>
      <ScrollView>
        <Header title={locationName || 'No Address'} />
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
