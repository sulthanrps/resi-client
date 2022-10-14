import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../queries";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Profile_washer({ navigation }) {
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

  // const LogOut = () =>
  //   Alert.alert(
  //     "Are you sure want to Log Out ?",
  //     [
  //       {
  //         text: "Cancel",
  //         onPress: () => Alert.alert("Cancel Pressed"),
  //         style: "cancel",
  //       },
  //     ],
  //     {
  //       cancelable: true,
  //       onDismiss: async () => {
  //         Alert.alert(
  //           "This alert was dismissed by tapping outside of the alert dialog."
  //         ),
  //           await AsyncStorage.clear();
  //         navigation.navigate("Login_washer");
  //       },
  //     }
  //   );
  const LogOut = async () => {
    await AsyncStorage.removeItem("access_token");
    navigation.navigate("Login_washer");
  };
  return (
    <View style={styles.container}>
      <View style={styles.divProfile}>
        <View style={styles.photoProfile}>
          <Image
            style={styles.imageprofile}
            source={{
              uri: `${data.getUser.profileImg}`,
            }}
          />
        </View>
      </View>
      <View style={styles.username}>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {data.getUser.name}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontWeight: "bold",
            fontSize: 20,
            opacity: 0.6,
          }}
        >
          {"  "}(Washer)
        </Text>
      </View>
      <View style={styles.divBalanceAndLogOut}>
        <View style={styles.buttonBalance}>
          <Icon name="credit-card" type="font-awesome" color={"white"} />
          <Text style={styles.textBalance}>
            {"  "}Balance :{"  "}
          </Text>
          <Text style={styles.textBalance}>
            Rp.{" "}
            {data.getUser.balance
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            ,-
          </Text>
        </View>
        <View style={styles.LogOut}>
          {/* <Text>Logout</Text> */}
          <Button
            icon={
              <Icon
                name="sign-out"
                type="font-awesome"
                color="white"
                size={25}
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="Log Out"
            buttonStyle={{ backgroundColor: "#DF4040" }}
            onPress={() => {
              LogOut();
            }}
          />
        </View>
      </View>

      <View style={styles.blankbody}></View>
      <View style={styles.buttonLogin_washer}>
        <Button
          title="Edit Profile"
          onPress={() => navigation.navigate("Edit_profile_washer")}
        />
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

  divProfile: {
    // flex: 4,
    height: 200,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  photoProfile: {
    backgroundColor: "grey",
    marginHorizontal: 10,
    marginTop: 20,
    resizeMode: "contain",
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    alignItems: "center",
  },
  imageprofile: {
    resizeMode: "contain",
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
  },
  username: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    flexDirection: "row",
  },
  divBalanceAndLogOut: {
    flex: 1,
    flexDirection: "row",
    width: width,
    justifyContent: "space-around",
  },
  buttonBalance: {
    // flex: 1,
    backgroundColor: "#5575F9",
    marginHorizontal: 10,
    height: 40,
    width: 220,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textBalance: {
    fontFamily: "Poppins_400Regular",
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  LogOut: {
    flexDirection: "row",
    marginRight: 10,
  },
  blankbody: {
    flex: 2,
    marginHorizontal: 10,
    // backgroundColor: "red",
  },
  buttonEditProfile_washer: {
    marginHorizontal: 10,
    marginTop: 10,
    justifyContent: "flex-end",
  },
});
