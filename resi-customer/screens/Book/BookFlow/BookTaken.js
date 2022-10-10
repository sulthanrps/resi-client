import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import otw from '../../../assets/otw.png'
import profilePict from '../../../assets/profile-pict.png'
import {Icon} from '@rneui/themed'
import { useFocusEffect } from '@react-navigation/native';
import * as React from 'react'

export default function LookingWasher({navigation}){
    // let isOnGoing = false
    let [isOnGoing, setIsOnGoing] = React.useState(false)

    // logic untuk auto fetching untuk pengecekan
    // apakah si washer sudah otw ke cust ato belum

    // useFocusEffect(
    //   React.useCallback(() => {
    //     console.log(isOnGoing)
    //     setTimeout(() => {
    //       setIsOnGoing(true)
    //       console.log(isOnGoing)
    //     }, 10000)
    //       if(isOnGoing){
    //         console.log("hai");
    //         navigation.navigate('WasherTracker')
    //       }
    //   }, [isOnGoing])
    // )

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
            <Text style={styles.cardPrice}>Rp. 60.0000</Text>
          </View>
        </View>

        <View style={styles.washerContainer}>
          <View>
            <Image source={profilePict} style={styles.profilePict} />
          </View>
          <View style={styles.washerIdentity}>
            <Text style={styles.name}>Asep Kopi</Text>
            <Text style={styles.role}>Washer</Text>
          </View>
          <TouchableOpacity style={styles.callBtn}>
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
      marginLeft: '35%'
    }
});