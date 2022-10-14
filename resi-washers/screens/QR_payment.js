import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import QRCode from "react-native-qrcode-svg";
import { GET_ORDER } from "../queries";
import { useQuery } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function QR_payment({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [access_token, setAccess] = useState("");
  const {
    loading: loadingOrder,
    error: errorOrder,
    data: dataOrder,
    refetch: refetchOrder,
  } = useQuery(GET_ORDER, {
    variables: {
      accessToken: access_token,
      lon: `${location?.coords?.longitude || 0}`,
      lat: `${location?.coords?.latitude || 0}`,
      dist: 2,
    },
    onCompleted: () => {
      console.log("masuk");
    },
  });
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  useEffect(() => {
    AsyncStorage.getItem("access_token").then((res) => {
      setAccess(res);
    });
  }, []);
  if (loadingOrder) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
  if (errorOrder) console.log(error);
  if (!location) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
  console.log(dataOrder, "dari QR code");
  console.log(access_token, "dari QR cide");

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
          value={`https://service-app-resi.herokuapp.com/customers/${dataOrder.getWasherBooksPending[0].id}?access_token=${access_token}`}
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
