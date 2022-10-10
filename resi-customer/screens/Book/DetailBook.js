import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import profilePict from '../../assets/profile-pict.png'

export default function DetailBook({navigation}){
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.detailBookTitle}>Your On Going Book</Text>
        <View style={styles.detailBookContainer}>
          <Text style={styles.bookDate}>Booking Date : 09 - 10 - 2022</Text>
          <Text style={styles.bookHour}>Booking Time : 10:00 - 11:00</Text>
          <Text style={styles.bookPrice}>Subtotal : Rp. 60.000</Text>
        </View>


        <Text style={styles.detailBookTitle}>Bike Type</Text>
        <View style={styles.bikeDetailContainer}>
          <Image style={styles.bikeImg} source={{uri: 'https://o.remove.bg/downloads/264d6f95-c7d8-4e50-9fed-8d93155e1c0f/AIHP26TRDR13G1-removebg-preview.png'}} />
          <Text style={styles.bikeName}>Sepeda Gunung</Text>
        </View>

        <Text style={styles.detailBookTitle}>Washer Detail</Text>
        <View style={styles.washerDetailContainer}>
          <Image source={profilePict} style={styles.profilePict} />
          <View style={styles.washerIdentity}>
            <Text style={styles.washerName}>Asep Kopi</Text>
            <Text style={styles.washerPhoneNumber}>0812345679</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 20
    },
    startBtn : {
        backgroundColor: '#DF4040',
        padding: 15,
        width: '100%',
        borderRadius: 8
    },
    btnText : {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16
    },
    detailBookTitle : {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 18
    },
    detailBookContainer: {
      backgroundColor: 'white',
      padding: 20,
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 8,
        marginVertical: 10,
        marginBottom: 20
    },
    bookDate: {
      fontFamily: 'Poppins_400Regular',
      marginBottom: 6
    },
    bookHour: {
      fontFamily: 'Poppins_400Regular',
      marginBottom: 6
    },
    bookPrice: {
      fontFamily: 'Poppins_400Regular',
    },
    bikeDetailContainer: {
      backgroundColor: 'white',
      padding: 10,
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 8,
        marginVertical: 10,
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20
    },
    bikeImg : {
      width: 200,
      height: 200
    },
    bikeName: {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 16
    },
    washerDetailContainer: {
      backgroundColor: 'white',
      padding: 10,
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 8,
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20
    },
    profilePict : {
      width: 50,
      height: 50
    },
    washerIdentity :{
      marginTop: 6,
      marginLeft: 6
    },
    washerName: {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 14
    },
    washerPhoneNumber: {
      fontFamily: 'Poppins_400Regular',
      fontSize: 14,
      color: 'gray'
    }
});