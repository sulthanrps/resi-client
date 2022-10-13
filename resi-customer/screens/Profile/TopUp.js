import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, SafeAreaView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native'
import TopUpIllustration from '../../assets/top-up.png'
import { useMutation } from '@apollo/client';
import { TOP_UP } from '../../queries';
import { WebView } from 'react-native-webview';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import { useState } from 'react';

export default function TopUp({navigation}){
  const [topUpAmount, setTopUpAmount] = useState(0)
  const [access_token, setAccessToken] = useState('')

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
      console.log(access_token, "<< dari local state")
  }

  let [TopUp, {data, loading, error}] = useMutation(TOP_UP, {
    onCompleted: async (data) => {
      if(data){
        console.log(data.topUpMidtrans.redirect_url, "dari balikan top up")
        navigation.navigate('Webview', {url : data.topUpMidtrans.redirect_url})
      }
      // if(data){
      //   return <WebView source={{uri : topUpMidtrans.redirect_url}} />
      // }
    }
  })

  if(loading){
    return <ActivityIndicator />
  }

  if(error){
    return <Text>Error</Text>
  }

  function topUpAction(){
    console.log(typeof(+topUpAmount), "ini amount to top up")
    console.log(access_token, "ini access_token");
    TopUp({
      variables : {
        nominal: +topUpAmount,
        accessToken : access_token
      }
    })

  }


    return (
      <KeyboardAvoidingWrapper>
        <SafeAreaView style={styles.container}>
          <Image source={TopUpIllustration} style={styles.TopUpIllustration} />

          <View style={styles.identitySection}>
            <View style={styles.inputFormContainer}>
                <Text style={styles.label}>Input Amount Of Top Up (IDR)</Text>
                <TextInput style={styles.inputForm} placeholder='Input your desirable amount to top up' keyboardType='number-pad' onChangeText={(value) => {
                setTopUpAmount(value)
              }}></TextInput>
            </View>
          </View>


          <TouchableOpacity style={styles.startBtn} onPress={() => {
            // console.log(topUpAmount);
            // navigation.navigate('Home')
            topUpAction()
          }}>
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