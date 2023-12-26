import React, { useState } from 'react';
import { View, Dimensions, Alert } from 'react-native';
// import { API, graphqlOperation, Auth } from 'aws-amplify';
import RouteMap from "../../map/Routemap";
// import { createOrder } from '../../graphql/mutations';

import { useRoute} from '@react-navigation/native';
import TruckTypes from '../trucktypes/TruckTypes';
// import ChooseVehicle from '../home/ChooseVehicle';

const SearchResult = (props) => {
  const typeState = useState(null);

  const route = useRoute();
  
  console.log(route.params,'details')
  const { originPlace, destinationPlace } = route.params

  const onSubmit = async () => {
    const [type] = typeState;
    if (!type) {
      return;
    }

    // // submit to server
    // try {
    //   const userInfo = await Auth.currentAuthenticatedUser();

    //   const date = new Date();
    //   const input = {
    //     createdAt: date.toISOString(),
    //     type,
    //     originLatitude: originPlace.details.geometry.location.lat,
    //     oreiginLongitude: originPlace.details.geometry.location.lng,

    //     destLatitude: destinationPlace.details.geometry.location.lat,
    //     destLongitude: destinationPlace.details.geometry.location.lng,

    //     userId: userInfo.attributes.sub,
    //     carId: "1",
    //     status: "NEW",
    //   }

    //   const response = await API.graphql(
    //     graphqlOperation(
    //       createOrder, {
    //         input: input
    //       },
    //     )
    //   )

    //   console.log(response);

    //   navigation.navigate('OrderPage', { id: response.data.createOrder.id });
    // } catch (e) {
    //   console.error(e);
    // }
  }

  return (
    // <View style={{ flex: 1 }}>
    //   <ChooseVehicle
    //     origin={originPlace}
    //     destination={destinationPlace}
    //   />
    // </View>
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap 
        origin={originPlace}
         destination={destinationPlace} 
         />
      </View>

      <View style={{height: 400}}>
        <TruckTypes typeState={typeState} onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default SearchResult;
