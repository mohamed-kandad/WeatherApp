import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {WeatherData} from '../types';

export const WeatherCard = ({data}: {data: WeatherData}) => (
  <View style={styles.card}>
    <Text style={styles.city}>{data.name}</Text>
    <Text>{data.weather[0].description}</Text>
    <Image
      source={{
        uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      }}
      style={styles.icon}
    />
    <Text style={styles.temp}>{data.main.temp}°C</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {alignItems: 'center', marginTop: 20},
  city: {fontSize: 24, fontWeight: 'bold'},
  icon: {width: 100, height: 100},
  temp: {fontSize: 32},
});
