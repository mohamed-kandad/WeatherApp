import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {ForecastData} from '../types';

export const ForecastList = ({data}: {data: ForecastData[]}) => (
  <FlatList
    data={data.list}
    keyExtractor={(_, index) => index.toString()}
    horizontal
    renderItem={({item}) => (
      <View style={styles.item}>
        <Text>{item.dt_txt.split(' ')[1].slice(0, 5)}</Text>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
          }}
          style={styles.icon}
        />
        <Text>{item.main.temp}°C</Text>
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  item: {padding: 10, alignItems: 'center'},
  icon: {width: 50, height: 50},
});
