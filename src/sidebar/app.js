import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registration from './src/authentication/Registration';
import Login from './src/authentication/Login';
import OtpScreen from './src/authentication/OtpScreen';
import Onboarding from './src/screens/onboardingscreens/Onboarding';
import Onboard from './src/screens/onboardingscreens/Onboard';
import Welcome from './src/screens/welcome/Welcome';
import Splash from './src/screens/splash/Splash';
import HomeScreen from './src/screens/home/HomeScreen';
// import ChooseVehicle from './src/screens/home/ChooseVehicle';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ title: "Back" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Back" }}
        />
         <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{ title: "Back" }}
        />
          <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Onboard"
          component={Onboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="ChooseVehicle"
          component={ChooseVehicle}
          options={{ headerShown: false }}
        /> */}
         {/* <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ headerShown: false }}
        /> */}
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
