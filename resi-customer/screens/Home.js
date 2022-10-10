import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator, Image } from 'react-native';
import profilePicture from '../assets/profile-pict.png'
import bike from '../assets/bike.png'
import OnGoingBook from '../components/onGoingBook';
import HistoryBook from '../components/historyBook';
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

  import {Icon} from '@rneui/themed'

  import repay from '../assets/repay.png'

export default function Home({navigation}){
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
            <Text style={styles.greetText}>Welcome back, Asep !</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image style={styles.profilePict} source={profilePicture} />
            </TouchableOpacity>
        </View>

        <View style={styles.information}>
            <View>
                <Image style={styles.repayIllustration} source={repay} />
            </View>
            <View style={styles.repayBalanceContainer}>
                <Text style={styles.repayTitle}>Repay</Text>
                <Text style={styles.repayBalance}>Rp. 150.000</Text>
            </View>
            <View style={styles.addBtnContainer}>
                <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('TopUp')}>
                    <Icon name='add' style={styles.addIcon}></Icon>
                </TouchableOpacity>
                <Text style={styles.topUpText}>Top Up</Text>
            </View>
        </View>

        <View style={styles.cardSection}>
            <View>
                <Text style={styles.cardTitle}>Ready to clean your bike ?</Text>
                <TouchableOpacity style={styles.cleanBtn} onPress={() => navigation.navigate('CreateBook')}>
                    <Text style={styles.cleanBtnText}>Click Here</Text>
                </TouchableOpacity>
            </View>
            <Image source={bike}  style={styles.bikeIllustration} />
        </View>

        <View style={styles.onGoingBookSection}>
            <Text style={styles.listText}>On Going Book</Text>
            <OnGoingBook navigation={navigation}></OnGoingBook>
        </View>

        <View style={styles.onGoingBookSection}>
            <Text style={styles.listText}>History</Text>
            <HistoryBook></HistoryBook>
            <HistoryBook></HistoryBook>
        </View>


      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    startBtn : {
        backgroundColor: '#5377F9',
        padding: 10,
        marginBottom: 10
    },
    btnText : {
        color: 'white'
    },
    header : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    profilePict :{
        width: 50,
        height: 50
    },
    greetText : {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        lineHeight: 50
    },
    information : {
        width: '90%',
        backgroundColor : '#5377F9',
        margin: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 8,
        borderRadius: 10,
        paddingLeft: 0
    },
    repayIllustration : {
        width: 150,
        height: 100
    },
    repayBalanceContainer : {
        backgroundColor: 'white',
        padding: 10,
        height: 70,
        marginVertical: 20,
        borderRadius: 10,
        marginLeft: 0
    },
    repayTitle : {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
        marginTop: 0
    },
    repayBalance : {
        fontFamily: 'Poppins_400Regular'
    },
    addBtnContainer : {
        marginLeft: 10
    },
    addBtn : {
        backgroundColor: 'white',
        padding: 8,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    addIcon : {
        fontFamily: 'Poppins_600SemiBold'
    },
    topUpText : {
        color: 'white',
        fontFamily: 'Poppins_500Medium',
        marginTop: 5
    },
    bikeIllustration : {
        width: 150,
        height: 150,
    },
    cardSection : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '90%',
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10
    },
    cardTitle : {
        width: 150,
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
        marginTop: 15
    },
    cleanBtn : {
        backgroundColor : '#5377F9',
        padding: 10,
        width: 95,
        marginTop: 30,
        borderRadius: 5
    },
    cleanBtnText : {
        color: 'white',
        fontFamily: 'Poppins_600SemiBold'
    },
    onGoingBookSection : {
        width: '90%',
        marginHorizontal: 20,
        marginTop: 20
    },
    listText : {
        fontFamily: 'Poppins_600SemiBold',
        marginBottom: 5
    }
});