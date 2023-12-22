import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

// const GOOGLE_MAPS_APIKEY = 'AIzaSyCqM7uF9c0ZMQjdssHqSMJJ3mBcmz5RNS0';

const RouteMap = ({ originic, destinationic }) => {

  const origin = { latitude: 37.3318456, longitude: -122.0296002 };
  const destination = { latitude: 37.771707, longitude: -122.4053769 };
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCqM7uF9c0ZMQjdssHqSMJJ3mBcmz5RNS0';

  // const originLoc = {latitude: 37.3318456, longitude: -122.0296002}
  // {
  //   latitude: origin.details.geometry.location.lat,
  //   longitude: origin.details.geometry.location.lng,
  // };

  // const destinationLoc = {latitude: 37.771707, longitude: -122.4053769}
  //  {
  //   latitude: destination.details.geometry.location.lat,
  //   longitude: destination.details.geometry.location.lng,
  // };

  return (
    <>
      <MapView
        style={{ width: '100%', height: '100%' }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}>
        <MapViewDirections
          origin={originic}
          destination={destinationic}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />
        <Marker
          coordinate={origin}
          title={'Origin'}
        />
        <Marker
          coordinate={destination}
          title={"Destination"}
        />
      </MapView>
    </>
  );
};

export default RouteMap;
