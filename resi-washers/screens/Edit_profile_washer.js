import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER } from "../queries";
import { EDIT_USER } from "../queries";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Edit_profile_washer({ navigation }) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    profileImg: "",
  });
  console.log(inputs, "dariinput");
  const [access_token, setAccess] = useState("");
  useEffect(() => {
    AsyncStorage.getItem("access_token").then((res) => {
      setAccess(res);
    });
  });
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { accessToken: access_token },
  });
  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
  if (error) console.log(error);
  // useEffect(() => {
  //   setInputs({
  //     name: data.getUser.name,
  //   });
  // }, []);
  // const [updateProfile, { loading: loadingEdit, error: errorEdit }] =
  //   useMutation(EDIT_USER, {
  //     onCompleted: async (data) => {
  //       console.log(data, "dari sehabis edit");
  //       navigation.navigate("Profile_washer");
  //     },
  //   });
  // if (loadingEdit) {
  //   return <ActivityIndicator size="large" color="#00ff00" />;
  // }
  // if (errorEdit) console.log(errorEdit);

  // const handleOnChange = (text, input) => {
  //   setInputs({
  //     ...inputs,
  //     [input]: text,
  //   });
  // };
  // console.log(inputs, "dari luar");
  const handleSubmit = () => {
    // console.log(inputs, "dari submit");
    // login({
    //   variables: inputs,
    // });
  };
  return (
    <View style={styles.container}>
      <View style={styles.divProfile}>
        <View style={styles.photoProfile}>
          <Image
            style={styles.imgProfile}
            source={{
              uri: `${data.getUser.profileImg}`,
            }}
          />
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
        <Input
          placeholder={`${data.getUser.name}`}
          onChangeText={(text) => setInputs({ ...inputs, name: text })}
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
          Email
        </Text>
      </View>
      <View style={styles.inputPassword}>
        <Input
          placeholder={`${data.getUser.email}`}
          onChangeText={(text) => setInputs({ ...inputs, email: text })}
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
          placeholder={`${data.getUser.phoneNumber}`}
          onChangeText={(text) => setInputs({ ...inputs, phoneNumber: text })}
        ></Input>
      </View>
      <View style={styles.labelAddress}>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Profile Image Url
        </Text>
      </View>
      <View style={styles.inputAddress}>
        <Input
          placeholder={`${data.getUser.profileImg}`}
          onChangeText={(text) => setInputs({ ...inputs, profileImg: text })}
        ></Input>
      </View>
      <View style={styles.buttonRegister}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
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
    elevation: 2,
  },
  divProfile: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  photoProfile: {
    backgroundColor: "grey",
    marginHorizontal: 10,
    marginTop: 20,
    resizeMode: "contain",

    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
  imgProfile: {
    resizeMode: "contain",
    flex: 1,
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
  labelPassword: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputPassword: {
    flex: 1,
    elevation: 2,
  },
  labelPhoneNumber: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputPhoneNumber: {
    flex: 1,
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
  },
  labelImgUrl: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputImgProfileUrl: {
    flex: 1,
    elevation: 2,
  },
  buttonRegister: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
