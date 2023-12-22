import React  from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '../utils/Constants'

const AddressPickup =({
    placeholderText
})=>{
    return (
        <View style= {styles.container}>
        
            {/* <TouchableOpacity onPress={() => navigation.navigate('ChooseDestination')}>  */}
                <GooglePlacesAutocomplete
                    placeholder={placeholderText}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}
                    styles={{
                        textInputContainer: styles.ContainerStyle,
                        textInput: styles.textInputStyle
                    }}
                />
            {/* </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        // justifyContent: 'center',
        // alignItems:'center',
        // backgroundColor: '#2c3e50',
    },
    ContainerStyle:{
        backgroundColor: 'white',
        

    },
    textInputStyle:{
        height: 40,
        color: 'black',
        fontSize: 16,
        backgroundColor: '#F3F3F3'
    }
})

export default AddressPickup;