import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { useState } from "react";
import { axios } from "axios";

const baseUrl = `https://service-user-resi.herokuapp.com/`;
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Register({ navigation }) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    profileImg: "",
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
  const validate = () => {
    // Keyboard.dismiss();
    // if (!inputs.email) {
    // }

    axios
      .post(`${baseUrl}/register`, inputs)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleOnChange = (text, input) => {
    setInputs({
      ...inputs,
      [input]: text,
    });
    // setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  console.log(inputs);
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
          <Input onChangeText={(text) => handleOnChange(text, "name")}></Input>
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
          <Input onChangeText={(text) => handleOnChange(text, "email")}></Input>
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
            onChangeText={(text) => handleOnChange(text, "profileImg")}
          ></Input>
        </View>
        <View style={styles.buttonRegister}>
          <Button
            title="Submit"
            onPress={() => {
              validate;
              navigation.navigate("Home_washer");
            }}
          />
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
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
