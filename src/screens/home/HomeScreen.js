import React, { useState, useMemo } from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions, Pressable } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import HomeMap from "../../map/HomeMap";

const HomeScreen = ({ navigation }) => {
  const snapPoints = useMemo(() => ["50%", "60%"], []);
  const goToSearch = () => {
    navigation.navigate('DestinationSearch')
  }
  // const handleChooseVehicle=()=>{
  //   navigation.navigate('ChooseVehicle')
  // }

  return (
    <View style={styles.container}>
      <View style={{ height: Dimensions.get('window').height - 400 }}>
        <HomeMap />
      </View>
      <BottomSheet index={1} snapPoints={snapPoints}>
        <ScrollView contentContainerStyle={styles.bottomSheetContainer}>
          <Text style={styles.text1}>Where are you going today?</Text>
          <Pressable onPress={goToSearch} >
            <Text>From</Text>
          </Pressable>
          <Pressable onPress={goToSearch} >
            <Text>To</Text>
          </Pressable>

          <Text style={styles.recentPlacesText}>Recent Places</Text>
          <View>
            <Text style={styles.recentPlacesText}>01 Places</Text>
            <Text style={styles.recentPlacesText}>02 Places</Text>
          </View>

          <Pressable
            style={styles.chooseVehicleButton}
            onPress={() => {
              console.log("Choose Vehicle button pressed");
              navigation.navigate("ChooseVehicle");
            }}
          >  
            <Text style={styles.chooseVehicleButtonText}>
              Choose a Vehicle
            </Text>
          </Pressable>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomSheetContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  text1: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  recentPlacesText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  autocompleteContainer: {
    marginBottom: 20,
  },
  chooseVehicleButton: {
    backgroundColor: "#EE272E",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
 
  },
  chooseVehicleButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    borderRadius: 40,
    marginTop: 5,
    width: "100%",
  },
  autocompleteIcon: {
    marginRight: 10,
  },
  autocompleteDescription: {
    fontSize: 14,
    color: "#555",
  },
});

export default HomeScreen;
