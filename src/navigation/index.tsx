import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ForgetPassword from "../screens/ForgetPassword";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="home" component={Welcome} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="forgetPassword" component={ForgetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
