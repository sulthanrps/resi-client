import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import {Icon} from '@rneui/themed'

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


export default function OnGoingBook(){
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
        <View style={styles.cardContainer}>
          <View style={styles.icon}></View>
          <View style={styles.schedule}>
            <Text>Bike Washing</Text>
            <Text>09 - 10 - 2022</Text>
          </View>
          <View style={styles.rightItem}>
            <Text>Rp. 60.0000</Text>
            <Text style={{
                marginLeft: 43
            }}>10:00</Text>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icon : {
        width: 50,
        height: 50,
        backgroundColor: 'gray',
        borderRadius: 10
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
        padding: 10,
        marginBottom: 20
    },
    rightItem : {
        marginLeft: '25%',
        marginTop: 7
    },
    schedule : {
        marginLeft: 10,
        marginTop: 7
    }
});