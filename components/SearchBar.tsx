import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

type Props = {
  city: string;
  onChangeCity: (text: string) => void;
  onSearch: () => void;
};

export const SearchBar = ({city, onChangeCity, onSearch}: Props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Enter city"
      value={city}
      onChangeText={onChangeCity}
    />
    <Button title="Search" onPress={onSearch} />
  </View>
);

const styles = StyleSheet.create({
  container: {flexDirection: 'row', margin: 16},
  input: {flex: 1, borderBottomWidth: 1, marginRight: 8},
});
