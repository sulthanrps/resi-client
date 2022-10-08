import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Icon } from "@rneui/themed";
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

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Profile_washer() {
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
              Home
            </Text>
          </View>
        </View>
        <View style={styles.divProfile}>
          <View style={styles.photoProfile}></View>
        </View>
        <View style={styles.username}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Asep
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
        <View style={styles.buttonBalance}>
          <Icon name="credit-card" type="font-awesome" color={"white"} />
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            }}
          >
            {"  "}Balance :{"  "}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            }}
          >
            Rp. 100.000,-
          </Text>
        </View>
        <View style={styles.bodyaddress}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
              opacity: 0.6,
            }}
          >
            Address :
          </Text>
          <Text style={{ opacity: 0.6 }}>
            Jalan Perdamaian anti huru hara Block ABCDEF RT Pak Amin Tetangga
          </Text>
        </View>
        <View style={styles.phoneNumber}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
              opacity: 0.6,
            }}
          >
            Phone Number
          </Text>
          <Text style={{ opacity: 0.6 }}>0812345678</Text>
        </View>
        <View style={styles.blankbody}></View>
        <View style={styles.buttonLogin_washer}>
          <Button title="Edit Profile" />
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
    height: 55,
    width: 55,
    borderRadius: 44 / 2,
  },
  username: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    flexDirection: "row",
  },
  buttonBalance: {
    // flex: 1,
    backgroundColor: "#5575F9",
    marginHorizontal: 10,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bodyaddress: {
    // flex: 1,
    height: 70,
    justifyContent: "flex-end",
    marginHorizontal: 10,
    marginTop: 5,
  },
  phoneNumber: {
    // flex: 1,
    height: 80,
    marginHorizontal: 10,
    justifyContent: "flex-end",
  },
  blankbody: {
    flex: 6,
    marginHorizontal: 10,
  },
  buttonLogin_washer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
