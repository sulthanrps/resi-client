import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, ActivityIndicator } from 'react-native';
import {useEffect, useState} from 'react'
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import { useMutation, useQuery } from '@apollo/client';
import { EDIT_PROFILE, LOGGED_USER } from '../../queries';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditProfile({navigation}){
  const [dataCustomer, setDataCustomer] = useState({
    name : '',
    email : '',
    profilePictUrl : '',
    phoneNumber : ''
  })

  console.log(dataCustomer)

  let [accessToken, setAccessToken] = useState('')

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
    // console.log(accessToken, "<< dari local state profile")
  }

  const {data, loading, error} = useQuery(LOGGED_USER, {
    variables : {
      getUserAccessToken2 : accessToken
    }
  })


  // console.log(data, loading, error)

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

  // useEffect(() => {
  //   setDataCustomer({
  //     name : data?.getUser?.name,
  //     email : data?.getUser?.email,
  //     profilePictUrl : data?.getUser?.profileImg,
  //     phoneNumber : data?.getUser?.phoneNumber,
  //   })
  // }, [data])

  // const [Edit, {data: dataEdit, loading : loadingEdit, error : errorEdit}] = useMutation(EDIT_PROFILE, {
  //   onCompleted: async (data) => {
  //     console.log(data, "<< dari edit profile")
  //   }
  // })

  // function successEdit(){
  //   console.log(dataCustomer)
  //   Edit({
  //     variables : {
  //       name : dataCustomer.name,
  //       email : dataCustomer.email,
  //       profileImg : dataCustomer.profilePictUrl,
  //       phoneNumber : dataCustomer.phoneNumber,
  //       accessToken : accessToken,
  //     }
  //   })
  //   navigation.navigate('Profile')
  // }

  // console.log(data)

    return (
      <KeyboardAvoidingWrapper>
        <SafeAreaView style={styles.container}>
          <View style={styles.identitySection}>
            <View style={styles.inputFormContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput style={styles.inputForm} defaultValue={data?.getUser?.name} onChangeText={(value) => {
                setDataCustomer({
                  ...dataCustomer,
                  name : value
                })
              }}></TextInput>
            </View>

            <View style={styles.inputFormContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.inputForm} defaultValue={data?.getUser?.email} onChangeText={(value) => {
                setDataCustomer({
                  ...dataCustomer,
                  email : value
                })
              }}></TextInput>
            </View>

            <View style={styles.inputFormContainer}>
              <Text style={styles.label}>Profile Picture URL</Text>
              <TextInput style={styles.inputForm} defaultValue={data?.getUser?.profileImg} onChangeText={(value) => {
                setDataCustomer({
                  ...dataCustomer,
                  profilePictUrl : value
                })
              }}></TextInput>
            </View>

            <View style={styles.inputFormContainer}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput style={styles.inputForm} defaultValue={data?.getUser?.phoneNumber} keyboardType='number-pad' onChangeText={(value) => {
                setDataCustomer({
                  ...dataCustomer,
                  phoneNumber : value
                })
              }}></TextInput>
            </View>
          </View>
          <TouchableOpacity style={styles.startBtn} onPress={() => {
            // successEdit()
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