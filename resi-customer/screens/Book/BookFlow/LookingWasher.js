import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import lookingDriver from '../../../assets/looking-driver.png'
import {Icon} from '@rneui/themed'
import { useFocusEffect } from '@react-navigation/native';

export default function LookingWasher({navigation}){
    useFocusEffect(() => {
      const timer = setTimeout(() => {
        // logic re-fetch disini
        // kalo selama 5 menit gadapet washer, balik ke home
        navigation.navigate('BookTaken')
      }, 5000)
      return () => timer
    })
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