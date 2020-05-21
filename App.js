import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Home';
import GeniusScanScreen from './src/genius-scan/GeniusScanScreen';
import AnylineScan from './src/anyline-scan/AnylineScan';
import DocumentScanner from './src/document-scan/DocumentScanner';
import ReactHook from './src/ReactHook';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GeniusScan" component={GeniusScanScreen} />
        <Stack.Screen name="AnylineScan" component={AnylineScan} />
        <Stack.Screen
          name="DocumentScan"
          component={DocumentScanner}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="ReactHook" component={ReactHook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
