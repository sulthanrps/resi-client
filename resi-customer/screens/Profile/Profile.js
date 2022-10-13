import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image, SafeAreaView, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@apollo/client';
import { LOGGED_USER } from '../../queries';
import { useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

export default function Profile({navigation}){
  let [accessToken, setAccessToken] = useState('')

  const logout = async () => {
    try {
        await AsyncStorage.removeItem('access_token')
    } catch (error) {
        console.log(error)
    }
  }

  const getAccessToken = async () => {
    try {
        const access_token = await AsyncStorage.getItem('access_token')

        if(access_token !== null){
            setAccessToken(access_token)
        }

        else {
          console.log('access token not found')
        }
    } catch (error) {
        console.log(error)
    }
  }

  const isFocused = useIsFocused()

  if(isFocused){
    getAccessToken()
    console.log(accessToken, "<< dari local state profile")
  }

  const {data, loading, error} = useQuery(LOGGED_USER, {
    variables : {
      getUserAccessToken2 : accessToken
    }
  })

  console.log(data, loading, error)

  if(loading){
    return (
      <SafeAreaView style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
      }}>  
          <ActivityIndicator size='small' />
      </SafeAreaView>
    )
  }

  if(error){
      return <Text>Error</Text>
  }

  function toLoginPage(){
    logout()
    getAccessToken()
    navigation.navigate('Login')
  }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imgSection}>
          <Image style={styles.profilePict} source={{uri : data?.getUser?.profileImg}} />
        </View>

        <View style={styles.identitySection}>
          <View style={styles.inputFormContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.inputForm} value={data?.getUser?.name} editable={false}></TextInput>
          </View>

          <View style={styles.inputFormContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.inputForm} value={data?.getUser?.email} editable={false}></TextInput>
          </View>

          <View style={styles.inputFormContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput style={styles.inputForm} value={data?.getUser?.phoneNumber} editable={false}></TextInput>
          </View>
        </View>
        
        <View style={styles.btnSection}>
          <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('EditProfile')}>
              <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.startBtn} onPress={() => toLoginPage()}>
              <Text style={styles.btnText}>Logout</Text>
          </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    balanceSection : {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly',
      marginTop: 10
    },
    startBtn : {
        backgroundColor: '#5377F9',
        padding: 16,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,
        width: '50%'
    },
    btnText : {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        textAlign: 'center',
        fontSize: 16
    },
    profilePict : {
      width: 200,
      height: 200,
      marginTop: 30,
    },
    name : {
      fontFamily: 'Poppins_800ExtraBold',
      fontSize: 40,
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
      paddingHorizontal: 20
    },
    inputFormContainer : {
      marginBottom: 20
    },
    imgSection : {
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    btnSection : {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginHorizontal: 25
    }
});