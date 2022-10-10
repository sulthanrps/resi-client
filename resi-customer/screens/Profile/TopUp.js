import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, SafeAreaView, ActivityIndicator } from 'react-native';
import TopUpIllustration from '../../assets/top-up.png'
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

import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

export default function TopUp({navigation}){
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
      <KeyboardAvoidingWrapper>
        <SafeAreaView style={styles.container}>
          <Image source={TopUpIllustration} style={styles.TopUpIllustration} />

          <View style={styles.identitySection}>
            <View style={styles.inputFormContainer}>
                <Text style={styles.label}>Input Amount Of Top Up (IDR)</Text>
                <TextInput style={styles.inputForm} placeholder='Input your desirable amount to top up' keyboardType='number-pad'></TextInput>
            </View>
          </View>


          <TouchableOpacity style={styles.startBtn}>
              <Text style={styles.btnText}>Top Up</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAvoidingWrapper>
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
        marginBottom: 10,
        width: '90%',
        borderRadius: 10
    },
    btnText : {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        textAlign: 'center'
    },
    TopUpIllustration : {
      width: 400,
      height: 400
    },
    label : {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 16
    },
    inputForm : {
      height: 50,
      padding: 10,
      width: '100%',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      backgroundColor: 'white',
      borderRadius: 7,
      marginTop: 10
    },
    identitySection: {
      width: '100%',
      paddingHorizontal: 20,
      marginVertical: 20
    },
});