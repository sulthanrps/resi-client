import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator, Image } from 'react-native';
import bike from '../assets/bike.png'
import OnGoingBook from '../components/onGoingBook';
import HistoryBook from '../components/historyBook';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused, useFocusEffect} from '@react-navigation/native'

import { useQuery } from '@apollo/client';
import { LOGGED_USER } from '../queries';

import {Icon} from '@rneui/themed'

import repay from '../assets/repay.png'
import React, { useState } from 'react';

export default function Home({navigation}){

    const [accessToken, setAccessToken] = useState('')

    const getAccessToken = async () => {
        try {
            const access_token = await AsyncStorage.getItem('access_token')

            if(access_token !== null){
                setAccessToken(access_token)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const isFocused = useIsFocused()

    if(isFocused){
        getAccessToken()
        console.log(accessToken, "<< dari local state")
    }

    let {data, loading, error, refetch} = useQuery(LOGGED_USER, {
        variables: {
            getUserAccessToken2 : accessToken
        }
    })

    useFocusEffect(React.useCallback(() => {
        if(accessToken) {
            console.log(accessToken, "refetch query")
            refetch({
                getUserAccessToken2 : accessToken
            })
        }
    }, []
    ))

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
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.greetText}>Welcome back, {data?.getUser?.name} !</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image style={styles.profilePict} source={{uri: data?.getUser?.profileImg}} />
            </TouchableOpacity>
        </View>

        <View style={styles.information}>
            <View>
                <Image style={styles.repayIllustration} source={repay} />
            </View>
            <View style={styles.repayBalanceContainer}>
                <Text style={styles.repayTitle}>Repay</Text>
                <Text style={styles.repayBalance}>Rp. {data?.getUser?.balance.toLocaleString('id', 'ID' , {type : 'currency', currency: 'IDR'})}</Text>
            </View>
            <View style={styles.addBtnContainer}>
                <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('TopUp')}>
                    <Icon name='add' style={styles.addIcon}></Icon>
                </TouchableOpacity>
                <Text style={styles.topUpText}>Top Up</Text>
            </View>
        </View>

        <View style={styles.cardSection}>
            <View>
                <Text style={styles.cardTitle}>Ready to clean your bike ?</Text>
                <TouchableOpacity style={styles.cleanBtn} onPress={() => navigation.navigate('CreateBook')}>
                    <Text style={styles.cleanBtnText}>Click Here</Text>
                </TouchableOpacity>
            </View>
            <Image source={bike}  style={styles.bikeIllustration} />
        </View>

        <View style={styles.onGoingBookSection}>
            <Text style={styles.listText}>On Going Book</Text>
            <OnGoingBook navigation={navigation}></OnGoingBook>
        </View>

        <View style={styles.onGoingBookSection}>
            <Text style={styles.listText}>History</Text>
            <HistoryBook></HistoryBook>
            <HistoryBook></HistoryBook>
        </View>


      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    startBtn : {
        backgroundColor: '#5377F9',
        padding: 10,
        marginBottom: 10
    },
    btnText : {
        color: 'white'
    },
    header : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    profilePict :{
        width: 50,
        height: 50
    },
    greetText : {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        lineHeight: 50
    },
    information : {
        width: '90%',
        backgroundColor : '#5377F9',
        margin: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 8,
        borderRadius: 10,
        paddingLeft: 0
    },
    repayIllustration : {
        width: 150,
        height: 100
    },
    repayBalanceContainer : {
        backgroundColor: 'white',
        padding: 10,
        height: 70,
        marginVertical: 20,
        borderRadius: 10,
        marginLeft: 0
    },
    repayTitle : {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
        marginTop: 0
    },
    repayBalance : {
        fontFamily: 'Poppins_400Regular'
    },
    addBtnContainer : {
        marginLeft: 10
    },
    addBtn : {
        backgroundColor: 'white',
        padding: 8,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    addIcon : {
        fontFamily: 'Poppins_600SemiBold'
    },
    topUpText : {
        color: 'white',
        fontFamily: 'Poppins_500Medium',
        marginTop: 5
    },
    bikeIllustration : {
        width: 150,
        height: 150,
    },
    cardSection : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '90%',
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10
    },
    cardTitle : {
        width: 150,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
        marginTop: 15
    },
    cleanBtn : {
        backgroundColor : '#5377F9',
        padding: 10,
        width: 95,
        marginTop: 30,
        borderRadius: 5
    },
    cleanBtnText : {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold'
    },
    onGoingBookSection : {
        width: '90%',
        marginHorizontal: 20,
        marginTop: 20
    },
    listText : {
        fontFamily: 'Poppins_600SemiBold',
        marginBottom: 5
    }
});