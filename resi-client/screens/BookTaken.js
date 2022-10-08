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
  InriaSans_300Light,
  InriaSans_300Light_Italic,
  InriaSans_400Regular,
  InriaSans_400Regular_Italic,
  InriaSans_700Bold,
  InriaSans_700Bold_Italic,
} from "@expo-google-fonts/inria-sans";
import { useState, useEffect } from "react";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function BookTaken() {
  let [fontsLoaded] = useFonts({
    InriaSans_300Light,
    InriaSans_300Light_Italic,
    InriaSans_400Regular,
    InriaSans_400Regular_Italic,
    InriaSans_700Bold,
    InriaSans_700Bold_Italic,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ backgroundColor: "green" }}>
            <Text style={{ fontFamily: "InriaSans_400Regular" }}>Register</Text>
          </View>
        </View>
        <View style={styles.labelName}>
          <Text>Name</Text>
        </View>
        <View style={styles.inputName}>
          {/* <Text>input Name</Text> */}
          <Input></Input>
        </View>
        <View style={styles.labelEmail}>
          <Text>Email</Text>
        </View>
        <View style={styles.inputEmail}>
          <Text>Input Email</Text>
        </View>
        <View style={styles.labelPassword}>
          <Text>Password</Text>
        </View>
        <View style={styles.inputPassword}>
          <Text>inputPassword</Text>
        </View>
        <View style={styles.labelPhoneNumber}>
          <Text>Phone Number</Text>
        </View>
        <View style={styles.inputPhoneNumber}>
          <Text>input phone Number</Text>
        </View>
        <View style={styles.labelAddress}>
          <Text>Address</Text>
        </View>
        <View style={styles.inputAddress}>
          <Text>inputAddress</Text>
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
    backgroundColor: "grey",
    width: width,
    height: height,
  },
  header: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  labelName: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "flex-end",
  },
  inputName: {
    flex: 1,
    backgroundColor: "green",
  },
  labelEmail: {
    flex: 1,
    backgroundColor: "purple",
    justifyContent: "flex-end",
  },
  inputEmail: {
    flex: 1,
    backgroundColor: "red",
  },
  labelPassword: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "flex-end",
  },
  inputPassword: {
    flex: 1,
    backgroundColor: "green",
  },
  labelPhoneNumber: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "flex-end",
  },
  inputPhoneNumber: {
    flex: 1,
    backgroundColor: "green",
  },
  labelAddress: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "flex-end",
  },
  inputAddress: {
    flex: 2,
    backgroundColor: "green",
  },
  buttonRegister: {
    flex: 1,
  },
});
