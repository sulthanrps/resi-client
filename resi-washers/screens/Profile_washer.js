import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
  Image,
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
          <View style={styles.photoProfile}>
            <Image
              style={{
                resizeMode: "contain",
                height: 130,
                width: 130,
                borderRadius: 130 / 2,
              }}
              source={{
                uri: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
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

        <View style={styles.blankbody}></View>
        <View style={styles.buttonEditProfile_washer}>
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
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  photoProfile: {
    backgroundColor: "grey",
    marginHorizontal: 10,
    marginTop: 20,
    resizeMode: "contain",
    height: 130,
    width: 130,
    borderRadius: 130 / 2,
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

  blankbody: {
    flex: 2,
    marginHorizontal: 10,
    // backgroundColor: "red",
  },
  buttonEditProfile_washer: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
