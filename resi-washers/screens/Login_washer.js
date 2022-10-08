import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from "@rneui/themed";
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
import { useState, useEffect } from "react";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Login_washer() {
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
    Poppins_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontWeight: "bold",
                fontSize: 32,
                opacity: 0.6,
              }}
            >
              Login_washer
            </Text>
          </View>
        </View>
        <View style={styles.imageLogin}>
          <Image
            style={{
              resizeMode: "contain",
              height: 600,
              width: 600,
              flex: 1,
            }}
            source={{
              uri: "https://cdn.dribbble.com/users/542205/screenshots/5380805/media/71dcfb8fa5ef0c6f5459aa77f100fb7a.png?compress=1&resize=1000x750&vertical=top",
            }}
          />
        </View>
        <View style={styles.labelEmail}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Email
          </Text>
        </View>
        <View style={styles.inputEmail}>
          <Input></Input>
        </View>
        <View style={styles.labelPassword}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Password
          </Text>
        </View>
        <View style={styles.inputPassword}>
          <Input></Input>
        </View>

        <View style={styles.buttonLogin_washer}>
          <Button title="Log in" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E6EA",
    marginHorizontal: 10,
    borderRadius: 10,
  },
  imageLogin: {
    flex: 8,
    backgroundColor: "grey",
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  labelEmail: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputEmail: {
    flex: 1,
    elevation: 2,
    marginHorizontal: 10,
  },
  labelPassword: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputPassword: {
    flex: 1,
    elevation: 2,
    marginHorizontal: 10,
  },

  buttonLogin_washer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
