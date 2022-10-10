import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function QR_payment({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.bodyMessage}>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontWeight: "bold",
            fontSize: 32,
            textAlign: "center",
          }}
        >
          Scan this QR to finish payment
        </Text>
      </View>
      <View style={styles.bodyImage}>
        <Image
          style={{
            resizeMode: "contain",
            height: 350,
            width: 350,
            flex: 1,
            marginHorizontal: 10,
          }}
          source={{
            uri: "https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg",
          }}
        />
      </View>
      <View style={styles.statusIconTransfer}>
        <Pressable
          onPress={() => {
            navigation.navigate("Payment_success");
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 24,
              opacity: 0.6,
              color: "white",
            }}
          >
            Waiting to Payment Process..
          </Text>
        </Pressable>
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
  bodyImage: {
    flex: 6,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  bodyMessage: {
    // flex: 3,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },

  statusIconTransfer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#5377F9",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
