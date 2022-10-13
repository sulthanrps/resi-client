import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, ActivityIndicator, Button } from 'react-native';

import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

import { Icon } from "@rneui/themed";

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER } from '../queries';

export default function Register({navigation}){
    let [Register, {data, loading, error}] = useMutation(REGISTER, {
      onCompleted: async (data) => {
        console.log(data, "<< dari register")
        if(data){
          let access_token = data.register.access_token
          await AsyncStorage.setItem('access_token', access_token)
          navigation.navigate('Home')
        }
      }
    })
    let [hidePassword, setHidePassword] = useState(true)
    let [passIcon, setPassIcon] = useState('eye')
    let [dataCustomer, setDataCustomer] = useState({
      name : '',
      email : '',
      password : '',
      profilePictUrl : '',
      phoneNumber : '',
    })

    let seePassword = () => {
      if(hidePassword){
        setHidePassword(false)
        setPassIcon('eye-with-line')
      }

      else {
        setHidePassword(true)
        setPassIcon('eye')
      } 
    }
    let [fontsLoaded] = useFonts({
      Poppins_100Thin,
      Poppins_100Thin_Italic,
      Poppins_200ExtraLight,
      Poppins_200ExtraLight_Italic,
      Poppins_300Light,
      Poppins_300Light_Italic,
      Poppins_400Regular,
      Poppins_400Regular_Italic,
      Poppins_500Medium,
      Poppins_500Medium_Italic,
      Poppins_600SemiBold,
      Poppins_600SemiBold_Italic,
      Poppins_700Bold,
      Poppins_700Bold_Italic,
      Poppins_800ExtraBold,
      Poppins_800ExtraBold_Italic,
      Poppins_900Black,
      Poppins_900Black_Italic
    });

    if(!fontsLoaded){
      return <ActivityIndicator />
    }

    if(loading){
      return (
        <SafeAreaView>
          <ActivityIndicator size='small' color='black' />
        </SafeAreaView>
      )
    }

    if(error){
      return (
        <View>
          <Text>{error}</Text>
        </View>
      )
    }

    function registerSuccess(){
      console.log(dataCustomer)
      Register({
        variables: {
          name : dataCustomer.name,
          email: dataCustomer.email,
          password: dataCustomer.password,
          profileImg : dataCustomer.profilePictUrl,
          phoneNumber: dataCustomer.phoneNumber,
          role : 'Customer'
        }
      })
    }

    return (
      <KeyboardAvoidingWrapper>
        <SafeAreaView style={styles.container}>

          <View style={styles.greeting}>
            <Text style={styles.greetText}>Create a new account</Text>
          </View>

          <View style={styles.inputSection}>
            <View style={styles.inputFormContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput style={styles.inputForm} placeholder='Input Your Name' onChangeText={(value) => {
                setDataCustomer({
                  ...dataCustomer,
                  name : value
                })
              }}></TextInput>
            </View>

            <View style={styles.inputFormContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.inputForm} placeholder='Input Your Email' onChangeText={(value) => {
                setDataCustomer({
                  ...dataCustomer,
                  email : value
                })
              }}></TextInput>
            </View>

            <View style={styles.inputFormContainer}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordInput}>
                <TextInput style={styles.inputForm} placeholder='Input Your Password' secureTextEntry={hidePassword} onChangeText={(value) => {
                setDataCustomer({
                  ...dataCustomer,
                  password : value
                })
              }}></TextInput>
                <TouchableOpacity style={styles.seePasswordBtn} onPress={() => seePassword()}>
                  <Icon name={passIcon} type='entypo'></Icon>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputFormContainer}>
              <Text style={styles.label}>Profile Picture URL</Text>
              <TextInput style={styles.inputForm} placeholder='Input an URL for your profile picture' onChangeText={(value) => {
                setDataCustomer({
                  ...dataCustomer,
                  profilePictUrl : value
                })
              }}></TextInput>
            </View>

            <View style={styles.inputFormContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput style={styles.inputForm} placeholder='Input Your Phone Number' keyboardType='number-pad' onChangeText={(value) => {
                setDataCustomer({
                  ...dataCustomer,
                  phoneNumber : value
                })
              }}></TextInput>
            </View>
          </View>

         <View style={styles.toLogin}>
            <Text style={styles.initial}>Have an account already ?, click</Text>
            <TouchableOpacity style={styles.toLoginText} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.toLoginTextBtn}>here</Text>
            </TouchableOpacity>
         </View>

          <View style={styles.btnSection}>
            <TouchableOpacity style={styles.startBtn} onPress={() => {
              registerSuccess()
            }}>
                <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </KeyboardAvoidingWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    startBtn : {
        backgroundColor: '#5377F9',
        padding: 15,
        width: '90%',
        borderRadius: 8
    },
    btnText : {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold'
    },
    greetText : {
      fontSize: 32,
      fontFamily: 'Poppins_600SemiBold',
      padding: 10,
      textAlign: 'center'
    },

    inputSection : {
      width: '100%',
      paddingHorizontal: 20
    },
    label : {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 16
    },
    inputForm : {
      height: 50,
      padding: 10,
      width: '100%',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      backgroundColor: 'white',
      borderRadius: 7,
      marginTop: 10
    },
    btnSection : {
      width: '100%',
      alignContent: 'center',
      alignItems: 'center',
      marginTop: 10
    },
    inputFormContainer : {
      marginBottom: 20
    },
    passwordInput : {
      flexDirection: 'row'
    },
    seePasswordBtn : {
      marginTop: 23,
      transform: [{translateX: -35}]
    },
    toLogin : {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: 25,
      marginTop: -5,
      marginBottom: 5
    },
    toLoginText : {
      marginLeft: 3,
    },
    toLoginTextBtn: {
      color: 'blue',
      fontFamily: 'Poppins_400Regular'
    },
    initial : {
      fontFamily: 'Poppins_400Regular'
    }
});