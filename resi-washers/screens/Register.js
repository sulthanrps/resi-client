import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
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
export function Register() {
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
              Register
            </Text>
          </View>
        </View>
        <View style={styles.labelName}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Name
          </Text>
        </View>
        <View style={styles.inputName}>
          {/* <Text>input Name</Text> */}
          <Input></Input>
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
        <View style={styles.labelPhoneNumber}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Phone Number
          </Text>
        </View>
        <View style={styles.inputPhoneNumber}>
          <Input></Input>
        </View>
        <View style={styles.labelAddress}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Address
          </Text>
        </View>
        <View style={styles.inputAddress}>
          <Input multiline></Input>
        </View>
        <View style={styles.buttonRegister}>
          <Button title="Submit" />
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
  labelName: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputName: {
    flex: 1,
    marginHorizontal: 10,
    elevation: 2,
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
  labelPhoneNumber: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputPhoneNumber: {
    flex: 1,
    elevation: 2,
    marginHorizontal: 10,
  },
  labelAddress: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputAddress: {
    flex: 2,
    elevation: 2,
    marginHorizontal: 10,
  },
  buttonRegister: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
