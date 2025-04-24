import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import {StyleSheet} from 'react-native';

// Stack Navigator Setup
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Weather App'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 50},
  error: {color: 'red', textAlign: 'center', marginTop: 20},
  forecastTitle: {fontSize: 24, textAlign: 'center', marginBottom: 20},
});

export default App;
