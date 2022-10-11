import { StyleSheet, Text, View, TouchableOpacity, Dimensions, SafeAreaView, Image } from 'react-native';
import MapView from 'react-native-maps'
import profilePict from '../../../assets/profile-pict.png'
import {Icon} from '@rneui/themed'


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function WasherTracker({navigation}){
    return (
      <SafeAreaView style={styles.container}>
        <MapView style={styles.map} />
        <View>
          <Text style={styles.title}>Your washer is on their way !</Text>
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

            <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('Scan')}>
                <Text style={styles.btnText}>Scan QR</Text>
            </TouchableOpacity>
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
        padding: 15,
        width: '90%',
        borderRadius: 10,
        marginVertical: 10
    },
    btnText : {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        textAlign: 'center'
    },
    map : {
      width: width * 90 / 100,
      height: height * 60 / 100,
      marginBottom: 10,
      borderRadius: 10
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
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
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
    },
    profilePict : {
      width: 55,
      height: 55
    },
    title: {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 18,
      marginBottom: 20,
      marginTop: 10
    }
});