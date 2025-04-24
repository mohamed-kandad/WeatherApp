import React, {useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {SearchBar} from '../components/SearchBar';
import {WeatherCard} from '../components/WeatherCard';
import {fetchWeatherByCity} from '../utils/fetchWeather';
import {WeatherData, ForecastData} from '../types';
import {ForecastList} from '../components/ForecastList';

// Screens
const HomeScreen = ({navigation}: {navigation: any}) => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    console.log('first');
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeatherByCity(city);
      setWeather(data.current);
      setForecast(data.forecast);

      // Navigate to forecast screen after searching
    } catch {
      setError('City not found or API error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar city={city} onChangeCity={setCity} onSearch={handleSearch} />
      {loading && <ActivityIndicator size="large" />}
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      {weather && <WeatherCard data={weather} />}

      {weather && (
        <>
          <Text style={styles.forecastTitle}>Next 5 days Forecast</Text>
          <ForecastList data={forecast} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 50},
  error: {color: 'red', textAlign: 'center', marginTop: 20},
  weatherTitle: {fontSize: 24, textAlign: 'center', marginBottom: 20},
  forecastTitle: {fontSize: 20, textAlign: 'center', marginTop: 20},
});

export default HomeScreen;
