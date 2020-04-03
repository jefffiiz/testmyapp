import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Home';
import GeniusScanScreen from './src/genius-scan/GeniusScanScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GeniusScan" component={GeniusScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
