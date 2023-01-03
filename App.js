import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllCarsScreen from "./screens/AllCarsScreen";
import Details from "./screens/details";
import ReviewScreen from "./screens/ReviewScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cars" component={AllCarsScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Reviews" component={ReviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
