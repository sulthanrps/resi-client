import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ActivityIndicator, ScrollView } from 'react-native';
import TimeDropDown from '../../components/TimeDropdown';
import DateDropdown from '../../components/DateDropdown';
import {Icon} from '@rneui/themed'
import bikeSample from '../../assets/bike-sample.png'
import { useEffect, useState } from 'react';
import * as Location from 'expo-location'
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_BOOK, FETCH_BIKES } from '../../queries';
import {useIsFocused, useFocusEffect} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CreateBook({navigation}){
  const [accessToken, setAccessToken] = useState('')
  const [location, setLocation] = useState(null)
  const [washPrice, setWashPrice] = useState('0')
  const [errorMsg, setErrorMsg] = useState(null)
  const [currentAddress, setCurrentAddress] = useState(null)

  const [dataBook, setDataBook] = useState({
    time : '',
    date : '',
    bikeId: ''
  })

  console.log(dataBook)

  const [coordinate, setCoordinate] = useState({
    lon : "",
    lan : ""
  })


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
      // console.log(accessToken, "<< dari local state create book")
  }

  let {data, loading, error} = useQuery(FETCH_BIKES, {
    variables : {
      accessToken : accessToken
    }
  })

  let [CreateBook, {data : createBookData, loading : loadingCreateBook, error : errorCreateBook}] = useMutation(CREATE_BOOK, {
    onCompleted : async (data) => {
      console.log(data, "muncul kalo sukses create book")
      if(data){
        let bookId = data.createBook.id
        await AsyncStorage.setItem('bookId', bookId)
        navigation.navigate('LookingWasher')
      }
    },
    onError : (error) => {
      console.log(error, "gagal create book")
    }
  })

  // console.log(data, loading, error)

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location)
      setCoordinate({
        lon : location.coords.longitude,
        lan : location.coords.latitude
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

  // if(loadingCreateBook){
  //   return (
  //     <SafeAreaView style={{
  //         flex: 1,
  //         justifyContent: 'center',
  //         alignItems: 'center'
  //     }}>  
  //         <ActivityIndicator size='small' />
  //     </SafeAreaView>
  //     )
  // }

  // if(errorCreateBook){
  //   return <Text>Error Create Book</Text>
  // }

  function successCreateBook(){
    console.log(dataBook.date, typeof(JSON.stringify(dataBook.date)), "<< date")
    console.log(dataBook.bikeId, typeof(+dataBook.bikeId), "<< bike id")
    console.log(dataBook.time, typeof(dataBook.time), "<< time")
    console.log(coordinate.lon, typeof(coordinate.lon.toString()), "<< longitude")
    console.log(coordinate.lan, typeof(coordinate.lan.toString()), "<< latitude")
    console.log(accessToken, typeof(accessToken), "<< access token")
    console.log(washPrice, typeof(washPrice), "<< wash price")
    CreateBook({
      variables : {
        bookDate: dataBook.date, 
        bikeId: +dataBook.bikeId, 
        scheduleId: dataBook.time, 
        lon: coordinate.lon.toString(), 
        lat: coordinate.lan.toString(), 
        accessToken: accessToken, 
        grandTotal: washPrice
      }
    })
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
          <TimeDropDown dataBook = {dataBook} setDataBook = {setDataBook} />
          {/* 
            CARA PASS RETURN -> lifting the state up 
          */}
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.labelDate}>Pick Date</Text>
          <DateDropdown dataBook = {dataBook} setDataBook = {setDataBook} />
          {/* <TimeDropDown /> */}
        </View>

        <View style={styles.bikeSection}>
          <Text style={styles.label}>Choose Bike</Text>
          <Text style={styles.notes}>* Note that the price here is not include with the tax </Text>
          <ScrollView horizontal={true} style={styles.bikeDetailContainer}>
            {
              data.getBikes.map(bike => {
                return (
                  <TouchableOpacity style={styles.bikeItem} key={bike.id} onPress={() => {
                    let price = 50000
                    price = price + price * 20 / 100
                    setWashPrice(price)
                    setDataBook({
                      ...dataBook,
                      bikeId: bike.id
                    })
                  }}>
                    <Image style={styles.bikeImg} source={{ uri : bike.imgUrl}} />
                    <Text style={styles.bikeName}>{bike.name}</Text>
                    <Text style={styles.washPrice}>Rp. {bike.price.toLocaleString('id', 'ID', {type : 'currency', currency :'IDR'})}</Text>
                  </TouchableOpacity>
                  // {bike.price.toLocaleString('id', 'ID', {type : 'currency', currency : 'IDR'})}
                )
              })
            }
          </ScrollView>
        </View>


        <View style={styles.priceSection}>
          <View>
            <Text style={styles.totalPriceText}>Total Price</Text>
            <Text style={styles.grandTotal}>Rp. {washPrice.toLocaleString('id', 'ID', {type : 'currency', currency: 'IDR'})}</Text>
          </View>
          <TouchableOpacity style={styles.startBtn} onPress={() => {
            successCreateBook()
          }}>
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
      marginBottom: 10
    },
    bikeName: {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 16
    },
    bikeSection: {
      height: 280,
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