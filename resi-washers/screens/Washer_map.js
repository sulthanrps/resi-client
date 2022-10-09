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
const widthHeader = Dimensions.get("screen").width * 0.7;
export function Washer_map() {
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
        <View style={styles.bodyMessage}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
              opacity: 0.6,
            }}
          >
            On the Way to Customer
          </Text>
        </View>
        <View style={styles.divHeader}>
          <View style={styles.divProfile}>
            <Image
              style={{
                resizeMode: "contain",
                flex: 1,
                borderRadius: 10,
              }}
              source={{
                uri: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
              }}
            />
          </View>

          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {" "}
            Ujang codet
            {"                      "}
          </Text>
          <Button type="solid">
            <Icon name="phone" size={20} color="white" type="font-awesome" />
            {"  "}
            Call
          </Button>
        </View>
        <View style={styles.bodyImage}>
          <Image
            style={{
              resizeMode: "stretch",
              height: 600,
              width: 340,
              flex: 1,
            }}
            source={{
              uri: "https://i.imgur.com/kFdpCg4.png",
            }}
          />
        </View>
        <View style={styles.divFooter}>
          <View style={styles.divProfile}>
            {/* <Image
              style={{
                resizeMode: "contain",
                flex: 1,
                borderRadius: 10,
              }}
              source={{
                uri: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
              }}
            /> */}
          </View>
          <View style={styles.divBody}>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {" "}
              Bike Washing
            </Text>
            <Text>{"  "}10.00-11.00</Text>
          </View>
          <View style={styles.divBodyRight}>
            <Text> Rp. 60.000,-</Text>
          </View>
        </View>

        <View style={styles.buttonLogin_washer}>
          <Button title="Generate QR Code">
            <Icon name="qrcode" type="font-awesome" color="white" size={20} />
            {"  "}
            Generate QR
          </Button>
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
  divHeader: {
    flex: 1,
    marginHorizontal: 10,
    // justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: width,
  },
  divProfile: {
    // flex: 1,
    backgroundColor: "#E8E8E8",
    height: 40,
    width: 40,
    borderRadius: 10,
    marginLeft: 5,
    elevation: 7,
  },
  divFooter: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    width: width,
    marginTop: 10,
    marginRight: 20,
  },
  divBody: {
    // flex: 1,
    flexDirection: "column",
    marginRight: 90,
  },
  divBodyRight: {
    flexDirection: "column",
  },
  bodyImage: {
    flex: 7,
    backgroundColor: "grey",
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  bodyMessage: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },

  buttonLogin_washer: {
    flex: 2,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
