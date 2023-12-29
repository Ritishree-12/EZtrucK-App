import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const OtpScreen = ({ route }) => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  

  const authkey = '395607ATzxdWwee644b4b4bP1';

  const verifyOTP = async () => {
    console.log('Verifying OTP:', otp.join(''));

    if (isVerified) {
      Alert.alert('OTP Already Verified', 'You have already verified the OTP.');
      return;
    }

    const number = route?.params?.phoneNumber;
    const url = `https://control.msg91.com/api/v5/otp/verify?otp=${otp.join('')}&mobile=91${number}`;

    try {
      const response = await fetch(url, {
        headers: {
          accept: 'application/json',
          authkey: authkey,
        },
      });

      console.log('API Response:', response);

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response Data:', responseData);

        if (
          responseData.hasOwnProperty('message') &&
          responseData.message === 'OTP verified success'
        ) {
          Alert.alert('OTP Verification Successful');
          setIsVerified(true);
          console.log('Navigating to HomeScreen');
          navigation.navigate('HomeScreen');
        } else {
          console.log('Incorrect or incomplete OTP');
          Alert.alert('Error', 'Incorrect or incomplete OTP');
        }
      } else {
        console.error('Error:', response.status);
        if (response.status === 422) {
          Alert.alert('OTP Already Verified', 'You have already verified the OTP.');
          setIsVerified(true);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify your phone number</Text>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Text style={styles.changeNumberText}>Change phone number?</Text>
      </TouchableOpacity>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
          key={index}
          style={[
            styles.otpInput,
            {
              borderColor: digit !== '' ? 'red' : 'black',
              backgroundColor: digit !== '' ? 'mistyrose' : 'white',
            },
          ]}
          keyboardType="numeric"
          maxLength={1}
          value={digit}
          onChangeText={(text) => {
            const updatedOtp = [...otp];
            updatedOtp[index] = text;
            setOtp(updatedOtp);
        
            if (text.length === 0 && index > 0) {
              // If the current input is empty and not the first input, focus on the previous input
              this[`otpInput${index - 1}`].focus();
            } else if (text.length === 1 && index < 3) {
              // If a digit is entered and not the last input, focus on the next input
              this[`otpInput${index + 1}`].focus();
            }
          }}
          ref={(input) => {
            this[`otpInput${index}`] = input;
          }}
        />
        ))}
      </View>

      <Pressable mode="contained" style={styles.verifyButton} onPress={verifyOTP}>
        <Text style={styles.verifyText}>Verify</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  changeNumberText: {
    color: '#EE272E',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  otpInput: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 5,
  },
  verifyButton: {
    width: '90%',
    height: 50,
    borderRadius: 30,
    backgroundColor: '#EE272E',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  verifyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default OtpScreen;
