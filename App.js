import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AllCarsScreen from './screens/AllCarsScreen';
import Details from './screens/details';

const Stack = createNativeStackNavigator();

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cars" component={AllCarsScreen} />
        <Stack.Screen name="Details" component={Details} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
