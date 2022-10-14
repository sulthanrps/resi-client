import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { useState } from "react";
import { REGISTER } from "../queries";
import { useMutation } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Register({ navigation }) {
  // USEMutation
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    profileImg: "",
    role: "washer",
  });
  const [register, { loading, error, data }] = useMutation(REGISTER, {
    onCompleted: async (data) => {
      if (data) {
        await AsyncStorage.setItem(
          "access_token",
          `${data.register.access_token}`
        );
        navigation.navigate("Home_washer");
      }
    },
  });
  const [hidePassword, setPassword] = useState(true);
  let [passIcon, setPassIcon] = useState("eye");
  let seePassword = () => {
    if (hidePassword) {
      setPassword(false);
      setPassIcon("eye-with-line");
    } else {
      setPassword(true);
      setPassIcon("eye");
    }
  };
  // const validate = () => {
  //   // Keyboard.dismiss();
  //   // if (!inputs.email) {
  //   // }
  // };

  const handleOnChange = (text, input) => {
    setInputs({
      ...inputs,
      [input]: text,
    });
  };
  const handleSubmit = () => {
    register({
      variables: inputs,
    });
    // navigation.navigate("Login_washer");
  };
  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) console.log(error);
  return (
    <ScrollView>
      <View style={styles.container}>
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
          <Input
            placeholder="example..."
            leftIcon={{ type: "font-awesome", name: "user" }}
            onChangeText={(text) => handleOnChange(text, "name")}
          ></Input>
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
          <Input
            onChangeText={(text) => handleOnChange(text, "email")}
            placeholder="example@mail.com"
            leftIcon={{ type: "font-awesome", name: "envelope" }}
          ></Input>
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
          <Input
            placeholder="Password"
            leftIcon={{ type: "font-awesome", name: "lock" }}
            rightIcon={
              <TouchableOpacity onPress={() => seePassword()}>
                <Icon name={passIcon} type="entypo"></Icon>
              </TouchableOpacity>
            }
            secureTextEntry={hidePassword}
            onChangeText={(text) => handleOnChange(text, "password")}
          ></Input>
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
          <Input
            placeholder="08***"
            leftIcon={{ type: "font-awesome", name: "phone" }}
            keyboardType="numeric"
            onChangeText={(text) => handleOnChange(text, "phoneNumber")}
          ></Input>
        </View>
        <View style={styles.labelImgUrl}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Profile Image URL
          </Text>
        </View>
        <View style={styles.inputImgProfileUrl}>
          <Input
            placeholder="http://example.com"
            leftIcon={{ type: "font-awesome", name: "globe" }}
            onChangeText={(text) => handleOnChange(text, "profileImg")}
          ></Input>
        </View>
        <View style={styles.buttonRegister}>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
        <View style={styles.textHaveAnAccount}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login_washer")}
            // style={styles.clickHere}
          >
            <Text>
              Already have an account ? click here
              {/* <Text style={styles.clickHere}> here</Text> */}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    marginHorizontal: 2,
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
    marginHorizontal: 2,
  },
  labelPassword: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputPassword: {
    flex: 1,
    // elevation: 2,
    marginHorizontal: 2,
  },
  passwordInput: {
    flexDirection: "row",
  },
  seePasswordBtn: {
    marginTop: 23,
    transform: [{ translateX: -35 }],
    backgroundColor: "red",
  },
  labelPhoneNumber: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputPhoneNumber: {
    flex: 1,
    elevation: 2,
    marginHorizontal: 2,
  },
  labelImgUrl: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputImgProfileUrl: {
    flex: 1,
    elevation: 2,

    marginHorizontal: 2,
  },
  buttonRegister: {
    // flex: 1,
    height: 40,
    marginHorizontal: 10,
    backgroundColor: "blue",
  },
  textHaveAnAccount: {
    // backgroundColor: "grey",
    justifyContent: "center",
    // alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
    // marginTop: 5,
  },
  clickHere: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    // height: 30,
    // marginTop: 50,
  },
});
