import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import otw from '../../../assets/otw.png'
import profilePict from '../../../assets/profile-pict.png'
import {Icon} from '@rneui/themed'
import * as Linking from 'expo-linking'
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@apollo/client';
import { GET_DETAIL_BOOK } from '../../../queries';
import React, { useState } from 'react';

export default function LookingWasher({navigation}){
  const [accessToken, setAccessToken] = useState('')
  const [bookId, setBookId] = useState('')

  const getAccessToken = async () => {
      try {
          const access_token = await AsyncStorage.getItem('access_token')

          if(access_token !== null){
              setAccessToken(access_token)
          }

          const bookId = await AsyncStorage.getItem('bookId')

          if(bookId){
              setBookId(bookId)
          }
      } catch (error) {
          console.log(error)
      }
  }

  const isFocused = useIsFocused()

  if(isFocused){
      getAccessToken()
  }

  let {data, loading, error, refetch} = useQuery(GET_DETAIL_BOOK, {
    variables : {
      accessToken : accessToken,
      id : bookId
    }
  })

  useFocusEffect(React.useCallback(() => {
    setInterval(() => {
      refetch({
        accessToken : accessToken
      })
    }, 10000)

    console.log(data?.getBooksByBooksId)

    if(data?.getBooksByBooksId?.status == "ongoing"){
      navigation.navigate('WasherTracker')
    }
  }))

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

    return (
      <SafeAreaView style={styles.container}>
        <Image source={otw} style={styles.lookingIllustration} />

        <Text style={styles.title}>We got you a washer !</Text>

        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Hang On !</Text>
          <Text style={styles.subTitle}>our washer will soon be there to clean your bike</Text>
        </View>

        <View style={styles.cardContainer}>
          <View>
            <Icon style={styles.icon} name='bicycle' type='font-awesome' reverse color='#5377F9'></Icon>
          </View>
          <View style={styles.schedule}>
            <Text style={styles.cardTitle}>Bike Washing</Text>
            <Text style={styles.cardTime}>10:00 - 11:00</Text>
          </View>
          <View style={styles.rightItem}>
            <Text style={styles.cardPrice}>Rp. {data?.getBooksByBooksId?.GrandTotal.toLocaleString('id', 'ID', {type : 'currency', currency :'IDR'})}</Text>
          </View>
        </View>

        <View style={styles.washerContainer}>
          <View>
            <Image source={{uri : data?.getBooksByBooksId?.Washer?.profileImg}} style={styles.profilePict} />
          </View>
          <View style={styles.washerIdentity}>
            <Text style={styles.name}>{data?.getBooksByBooksId?.Washer?.name}</Text>
            <Text style={styles.role}>Washer</Text>
          </View>
          <TouchableOpacity style={styles.callBtn} onPress={() => Linking.openURL(`tel:${data?.getBooksByBooksId?.Washer?.phoneNumber}`)}>
            <Icon name='call' reverse color='green'></Icon>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    startBtn : {
        backgroundColor: '#5377F9',
        padding: 10
    },
    btnText : {
        color: 'white'
    },
    lookingIllustration : {
      width: 330,
      height: 330,
      marginTop: 30
    },
    title : {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 20
    },
    subTitle: {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: '16',
      width: '70%',
      textAlign: 'center'
    },
    subTitleContainer : {
      marginVertical: 30,
      display: 'flex',
      alignItems: 'center',
      width: '80%'
    },
    icon : {
      padding: 0,
      color: '#5377F9'
    },
    cardContainer : {
        display: 'flex',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        marginBottom: 20,
        width: '90%'
    },
    rightItem : {
        marginLeft: '20%',
        marginTop: 15
    },
    schedule : {
        marginLeft: 0,
        marginTop: 12
    },
    cardTitle: {
      fontFamily: 'Poppins_500Medium',
      fontSize: 16
    },
    cardTime : {
      color: 'gray'
    },
    cardPrice : {
      fontFamily: 'Poppins_500Medium'
    },
    profilePict : {
      width: 55,
      height: 55
    },
    washerContainer : {
      display: 'flex',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        width: '90%',
        alignItems: 'center',
    },
    washerIdentity : {
      marginLeft: 10
    },
    name : {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 16
    },
    role : {
      fontFamily: 'Poppins_400Regular',
      color : 'gray'
    },
    callBtn: {
      marginLeft: '5%'
    }
});