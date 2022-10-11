import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, ActivityIndicator, Image } from 'react-native';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import { Icon } from "@rneui/themed";
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

import login from '../assets/login.png'
import { useState } from 'react';

export default function Login({navigation}){

    let [hidePassword, setHidePassword] = useState(true)
    let [passIcon, setPassIcon] = useState('eye')
    let [dataLogin, setDataLogin] = useState({
      email : '',
      password : ''
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
    return (

      <KeyboardAvoidingWrapper>
        <SafeAreaView style={styles.container}>

        <View>
          <Text style={styles.loginText}>Login</Text>
        </View>

        <View style={styles.greeting}>
          <Image style={styles.loginIllustration} source={login} />
        </View>

        <View style={styles.inputSection}>

          <View style={styles.inputFormContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.inputForm} placeholder='Input Your Email' onChangeText={(value) => {
                setDataLogin({
                  ...dataLogin,
                  email : value
                })
              }}></TextInput>
          </View>

          <View style={styles.inputFormContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordInput}>
              <TextInput style={styles.inputForm} placeholder='Input Your Password' secureTextEntry={hidePassword} onChangeText={(value) => {
                setDataLogin({
                  ...dataLogin,
                  password : value
                })
              }}></TextInput>
              <TouchableOpacity style={styles.seePasswordBtn} onPress={() => seePassword()}>
                <Icon name={passIcon} type='entypo'></Icon>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.btnSection}>
          <TouchableOpacity style={styles.startBtn} onPress={() => {
            console.log(dataLogin)
            navigation.navigate('Home')
          }}>
              <Text style={styles.btnText}>Login</Text>
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
    loginIllustration : {
      width: '90%',
      height: 400,
      marginHorizontal: 20
    },
    loginText : {
      textAlign : 'center',
      fontFamily: 'Poppins_700Bold',
      fontSize: 32
    },
    passwordInput : {
      flexDirection: 'row'
    },
    seePasswordBtn : {
      marginTop: 23,
      transform: [{translateX: -35}]
    }
});