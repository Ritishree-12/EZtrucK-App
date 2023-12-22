// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { StatusBar } from 'react-native';
// import Sidebar from './src/sidebar/Sidebar'

// // import ChooseVehicle from './src/screens/home/ChooseVehicle';


// const Stack = createStackNavigator();

// function App() {
//   return (
//     <>
//       <StatusBar />
//       <Sidebar />
//     </>
//   );
// }

// export default App;


import React ,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StatusBar, PermissionsAndroid, Platform} from 'react-native';

import Registration from './src/authentication/Registration';
import Login from './src/authentication/Login';
import OtpScreen from './src/authentication/OtpScreen';
import Onboarding from './src/screens/onboardingscreens/Onboarding';
import Onboard from './src/screens/onboardingscreens/Onboard';
import Welcome from './src/screens/welcome/Welcome';
import Splash from './src/screens/splash/Splash';
import HomeScreen from './src/screens/home/HomeScreen';
import DestinationSearch from './src/screens/destinationsearch/DestinationSearch';
import Geolocation from '@react-native-community/geolocation';
import ChooseVehicle from './src/screens/home/ChooseVehicle';


navigator.geolocation = require('@react-native-community/geolocation');
// navigator.geolocation = require('react-native-geolocation-service');
const Stack = createStackNavigator();

function App() {

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber App Camera Permission",
          message:
            "Uber App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, [])

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
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DestinationSearch"
          component={DestinationSearch}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChooseVehicle"
          component={ChooseVehicle}
          options={{ headerShown: false }}
        />
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
