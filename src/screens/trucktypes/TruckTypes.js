import React from "react";
import { View, Text, Pressable,StyleSheet } from "react-native";
import TruckRow from './TruckRow';

import typesData from '../../data/type';

const TruckTypes = ({ typeState, onSubmit }) => {
  const [selectedType, setSelectedType] = typeState;

  return (
    <View>
      {typesData.map((type) => (
        <TruckRow
          type={type}
          key={type.id}
          isSelected={type.type === selectedType}
          onPress={() => setSelectedType(type.type)}
        />
      ))}

      <Pressable onPress={onSubmit} style={{
        backgroundColor: 'red',
        borderRadius:20,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderWidth:1,
      }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Book Now
        </Text>
      </Pressable>
    </View>
  );
};

export default TruckTypes;
