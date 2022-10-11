import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Image, SafeAreaView, TextInput } from 'react-native';
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
import profilePict from '../../assets/profile-pict.png'

export default function Profile({navigation}){
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
        <View style={styles.imgSection}>
          <Image style={styles.profilePict} source={profilePict} />
        </View>

        <View style={styles.identitySection}>
          <View style={styles.inputFormContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.inputForm} value='Asep Kopi' editable={false}></TextInput>
          </View>

          <View style={styles.inputFormContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.inputForm} value='asepkopi@mail.com' editable={false}></TextInput>
          </View>

          <View style={styles.inputFormContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput style={styles.inputForm} value='08123456789' editable={false}></TextInput>
          </View>
        </View>
        
        <View style={styles.btnSection}>
          <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('EditProfile')}>
              <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.btnText}>Logout</Text>
          </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    balanceSection : {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly',
      marginTop: 10
    },
    startBtn : {
        backgroundColor: '#5377F9',
        padding: 16,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,
        width: '50%'
    },
    btnText : {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold',
        textAlign: 'center',
        fontSize: 16
    },
    profilePict : {
      width: 200,
      height: 200,
      marginTop: 30,
    },
    name : {
      fontFamily: 'Poppins_800ExtraBold',
      fontSize: 40,
      textAlign: 'center'
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
      paddingHorizontal: 20
    },
    inputFormContainer : {
      marginBottom: 20
    },
    imgSection : {
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    btnSection : {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginHorizontal: 25
    }
});