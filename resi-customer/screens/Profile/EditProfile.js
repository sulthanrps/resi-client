import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, ActivityIndicator } from 'react-native';
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
import {useState} from 'react'

import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

export default function EditProfile({navigation}){
  const [dataCustomer, setDataCustomer] = useState({
    name : 'Asep Kopi',
    email : 'asepkopi@mail.com',
    profilePictUrl : 'https://image-url.com',
    phoneNumber : '08123456789'
  })

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
          <View style={styles.identitySection}>
            <View style={styles.inputFormContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput style={styles.inputForm} defaultValue={dataCustomer.name} onChangeText={(value) => {
                setDataCustomer({
                  ...dataCustomer,
                  name : value
                })
              }}></TextInput>
            </View>

            <View style={styles.inputFormContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.inputForm} defaultValue={dataCustomer.email} onChangeText={(value) => {
                setDataCustomer({
                  ...dataCustomer,
                  email : value
                })
              }}></TextInput>
            </View>

            <View style={styles.inputFormContainer}>
              <Text style={styles.label}>Profile Picture URL</Text>
              <TextInput style={styles.inputForm} defaultValue={dataCustomer.profilePictUrl} onChangeText={(value) => {
                setDataCustomer({
                  ...dataCustomer,
                  profilePictUrl : value
                })
              }}></TextInput>
            </View>

            <View style={styles.inputFormContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput style={styles.inputForm} defaultValue={dataCustomer.phoneNumber} keyboardType='number-pad' onChangeText={(value) => {
                setDataCustomer({
                  ...dataCustomer,
                  phoneNumber : value
                })
              }}></TextInput>
            </View>
          </View>
          <TouchableOpacity style={styles.startBtn} onPress={() => {
            console.log(dataCustomer)
            navigation.navigate('Profile')
          }}>
              <Text style={styles.btnText}>Save Profile</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAvoidingWrapper>
      
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
    },
    startBtn : {
        backgroundColor: '#5377F9',
        padding: 16,
        marginBottom: 10,
        marginHorizontal: 20,
        borderRadius: 10
    },
    btnText : {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        textAlign: 'center'
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
    identitySection: {
      width: '100%',
      paddingHorizontal: 20,
      marginVertical: 20
    },
    inputFormContainer : {
      marginBottom: 20
    },
});