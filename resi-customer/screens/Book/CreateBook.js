import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ActivityIndicator, ScrollView } from 'react-native';
import TimeDropDown from '../../components/TimeDropdown';
import DateDropdown from '../../components/DateDropdown';
import {Icon} from '@rneui/themed'
import bikeSample from '../../assets/bike-sample.png'
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
import { useEffect, useState } from 'react';
import * as Location from 'expo-location'

export default function CreateBook({navigation}){
  
  const [location, setLocation] = useState(null)
  const [washPrice, setWashPrice] = useState('0')
  const [errorMsg, setErrorMsg] = useState(null)
  const [currentAddress, setCurrentAddress] = useState(null)

  const [dataBook, setDataBook] = useState({
    currentLocation : '',
    time : '',
    date : '',
    bikeId: ''
  })

  console.log(dataBook)

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location)
      setDataBook({
        ...dataBook,
        currentLocation : location
      })
      let address = await Location.reverseGeocodeAsync(location.coords)
      setCurrentAddress(address[0].street)
    })();
  }, [])

  let text = 'Get your current location ...';
  if (errorMsg) {
    text = errorMsg;
  } else if (currentAddress) {
    text = currentAddress;
    
    // ERROR -> INFINITE LOOP, MEET REACT RE-RENDERING LIMITATION, SOLVED DENGAN CARA SET CURRENT LOCATION DI USEEFFECT
    // setDataBook({
    //   ...dataBook,
    //   currentLocation: location
    // })
  }

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
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}>
            <Icon name='chevron-left' type='entypo'></Icon>
          </TouchableOpacity>
          <Text style={styles.title}>Create Book</Text>
        </View>
        

        <View style={styles.locationContainer}>
          <Text style={styles.locationDesc}>Your Location</Text>
          <View style={styles.locationItems}>
            <Icon name='location-pin' type='entypo'></Icon>
            <Text style={styles.location}>{text}</Text>
          </View>
          
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.label}>Pick Time</Text>
          <TimeDropDown />
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.labelDate}>Pick Date</Text>
          <DateDropdown />
          {/* <TimeDropDown /> */}
        </View>

        <View style={styles.bikeSection}>
          <Text style={styles.label}>Choose Bike</Text>
          <Text style={styles.notes}>* Note that the price here is not include with the tax </Text>
          <ScrollView horizontal={true} style={styles.bikeDetailContainer}>
            <TouchableOpacity style={styles.bikeItem} onPress={() => {
              let price = 50000
              price = price + price * 20 / 100
              setWashPrice(price)
              setDataBook({
                ...dataBook,
                bikeId: 1
              })
            }}>
              <Image style={styles.bikeImg} source={bikeSample} />
              <Text style={styles.bikeName}>Sepeda Gunung</Text>
              <Text style={styles.washPrice}>Rp. 50.000</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bikeItem} onPress={() => {
              let price = 60000
              price = price + price * 20 / 100
              setWashPrice(price)
              setDataBook({
                ...dataBook,
                bikeId: 2
              })
            }}>
              <Image style={styles.bikeImg} source={bikeSample} />
              <Text style={styles.bikeName}>Sepeda Gunung</Text>
              <Text style={styles.washPrice}>Rp. 60.000</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bikeItem} onPress={() => {
              let price = 40000
              price = price + price * 20 / 100
              setWashPrice(price)
              setDataBook({
                ...dataBook,
                bikeId: 3
              })
            }}>
              <Image style={styles.bikeImg} source={bikeSample} />
              <Text style={styles.bikeName}>Sepeda Gunung</Text>
              <Text style={styles.washPrice}>Rp. 40.000</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>


        <View style={styles.priceSection}>
          <View>
            <Text style={styles.totalPriceText}>Total Price</Text>
            <Text style={styles.grandTotal}>Rp. {washPrice.toLocaleString('id', 'ID', {type : 'currency', currency: 'IDR'})}</Text>
          </View>
          <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('LookingWasher')}>
              <Text style={styles.btnText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff'
      // justifyContent: 'center',
    },
    startBtn : {
        backgroundColor: '#5377F9',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10
    },
    btnText : {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        marginTop: 2
    },
    title : {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 30
    },
    inputSection : {
      marginTop: 20
    },
    label: {
      fontFamily: 'Poppins_500Medium',
      marginBottom: 6,
      fontSize: 16
    },
    locationContainer : {
      backgroundColor: '#f0f0f0',
      width: '90%',
      padding: 10,
      marginTop: 20,
      borderRadius: 10
    },
    locationItems: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 10
    },
    location : {
      marginTop: 5,
      fontFamily: 'Poppins_400Regular'
    },
    locationDesc: {
      fontFamily: 'Poppins_500Medium'
    },
    bikeImg : {
      width: 200,
      height: 130,
      alignItems: 'center',
    },
    bikeName: {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 16
    },
    bikeSection: {
      height: 270,
      width: '90%',
      justifyContent: 'center',
      marginTop: 20
    },
    bikeItem : {
      backgroundColor: '#f0f0f0',
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
        // alignItems: 'center',
        marginBottom: 20,
        marginRight: 25,
        marginLeft: 5,
    },
    washPrice :{
      fontFamily: 'Poppins_500Medium',
      color: 'red'
    },
    priceSection: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      marginTop: 50
    },
    totalPriceText: {
      fontFamily: 'Poppins_500Medium',
      fontSize: 16
    },
    grandTotal :{
      fontFamily: 'Poppins_500Medium',
      fontSize: 18,
      color : '#5377F9'
    },
    notes : {
      fontFamily: 'Poppins_400Regular',
      fontSize: 13,
      color: 'red'
    },
    header: {
      display: 'flex',
      flexDirection: 'row'
    },
    back : {
      marginTop: 10,
      transform: [{translateX: -60}]
    },
    labelDate: {
      fontFamily: 'Poppins_500Medium',
      marginBottom: 0,
      fontSize: 16,
      marginLeft: -165
    },
});