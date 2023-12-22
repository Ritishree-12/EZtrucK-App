import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from "../screens/home/HomeScreen";
import Login from "../authentication/Login";
import Registration from "../authentication/Registration";
import OtpScreen from "../authentication/OtpScreen";
import Splash from "../screens/splash/Splash";
import Onboard from "../screens/onboardingscreens/Onboard";
import Onboarding from "../screens/onboardingscreens/Onboarding";
import Welcome from "../screens/welcome/Welcome";

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
      <Stack.Screen name={"Login"} component={Login} />
      <Stack.Screen name={"Registration"} component={Registration} />
      <Stack.Screen name={"OtpScreen"} component={OtpScreen} />
      <Stack.Screen name={"Splash"} component={Splash} />
      <Stack.Screen name={"Onboard"} component={Onboard} />
      <Stack.Screen name={"Onboarding"} component={Onboarding} />
      <Stack.Screen name={"Welcome"} component={Welcome} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
