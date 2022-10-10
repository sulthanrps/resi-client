import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, ActivityIndicator, Image } from 'react-native';
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

import finish from '../../../assets/finish.png'

export default function SuccessPay({navigation}){
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

        <Image source={finish} style={styles.finishIllustration} />

        <Text style={styles.successMsg}>Payment Successful !</Text>

        <Text style={styles.follUpMsg}>Tap the button below to going back to home</Text>

        <View style={styles.btnSection}>
          <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.btnText}>Finish</Text>
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
        padding: 15,
        width: '90%',
        borderRadius: 8
    },
    btnText : {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins_600SemiBold'
    },
    btnSection : {
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    finishIllustration : {
        width: 450,
        height: 450,
        marginTop: 30
    },
    successMsg : {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20
    },
    follUpMsg: {
        fontFamily: 'Poppins_500Medium',
        width: '60%',
        textAlign: 'center',
        marginVertical: 20
    }
});