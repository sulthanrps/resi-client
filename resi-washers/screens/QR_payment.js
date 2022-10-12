import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

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
        <QRCode
          value="https://www.npmjs.com/package/react-native-qrcode-svg"
          size={300}
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
    justifyContent: "center",
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
