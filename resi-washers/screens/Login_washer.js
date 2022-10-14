import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input, Button, Icon } from "react-native-elements";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../queries";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Login_washer({ navigation }) {
  //USE QUERY LOGIN
  const [login, { loading, error, data }] = useMutation(LOGIN, {
    onCompleted: async (data) => {
      console.log(data, "<<<<< dari useMutation");
      if (data) {
        await AsyncStorage.setItem(
          "access_token",
          `${data.login.access_token}`
        );
        navigation.navigate("Home_washer");
      }
    },
  });
  const [hidePassword, setPassword] = useState(true);
  let [passIcon, setPassIcon] = useState("eye");
  // console.log(loading, error, data);
  let seePassword = () => {
    if (hidePassword) {
      setPassword(false);
      setPassIcon("eye-with-line");
    } else {
      setPassword(true);
      setPassIcon("eye");
    }
  };
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (text, input) => {
    setInputs({
      ...inputs,
      [input]: text,
    });
  };
  const handleSubmit = () => {
    login({
      variables: inputs,
    });
  };
  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) console.log(error);

  return (
    <ScrollView>
      <View style={styles.container}>
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
          <Input
            placeholder="example@mail.com"
            onChangeText={(text) => handleOnChange(text, "email")}
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
                <Icon name={passIcon} type="entypo" />
              </TouchableOpacity>
            }
            secureTextEntry={hidePassword}
            onChangeText={(text) => handleOnChange(text, "password")}
          ></Input>
        </View>

        <View style={styles.buttonLogin_washer}>
          <Button
            title="Log in"
            onPress={handleSubmit}
            // onPress={() => navigation.navigate("Home_washer")}
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
  imageLogin: {
    flex: 8,
    // backgroundColor: "grey",
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
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
    marginHorizontal: 2,
  },
  labelPassword: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputPassword: {
    flex: 1,
    elevation: 2,
    marginHorizontal: 2,
  },

  buttonLogin_washer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
