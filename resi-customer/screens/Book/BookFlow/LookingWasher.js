import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import lookingDriver from '../../../assets/looking-driver.png'
import {Icon} from '@rneui/themed'
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@apollo/client';
import { GET_DETAIL_BOOK } from '../../../queries';
import React, { useState } from 'react';


export default function LookingWasher({navigation}){
    const [accessToken, setAccessToken] = useState('')
    const [bookId, setBookId] = useState('')

    // console.log(bookId)

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
          accessToken : accessToken,
          id: bookId
        })
      }, 10000)

      console.log(data?.getBooksByBooksId)

      if(data?.getBooksByBooksId?.WasherId){
        navigation.navigate('BookTaken')
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
        <Image source={lookingDriver} style={styles.lookingIllustration} />

        <Text style={styles.title}>We got ur booking !</Text>

        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>This may take a while.</Text>
          <Text style={styles.subTitle}>Sit tight while we looking for nearby washers</Text>
        </View>

        <TouchableOpacity style={styles.cardContainer}>
          <View>
            <Icon style={styles.icon} name='bicycle' type='font-awesome' reverse color='#5377F9'></Icon>
          </View>
          <View style={styles.schedule}>
            <Text style={styles.cardTitle}>Bike Washing</Text>
            <Text style={styles.cardTime}>10:00 - 11:00</Text>
          </View>
          <View style={styles.rightItem}>
            <Text style={styles.cardPrice}>Rp. 60.0000</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('BookTaken')}>
            <Text style={styles.btnText}>Next Flow - Book Taken</Text>
        </TouchableOpacity> */}
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      // justifyContent: 'center',
    },
    startBtn : {
        backgroundColor: '#5377F9',
        padding: 10
    },
    btnText : {
        color: 'white'
    },
    lookingIllustration : {
      width: 400,
      height: 400,
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
      marginVertical: 50,
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
  }
});