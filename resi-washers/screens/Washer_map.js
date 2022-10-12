import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  Linking,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import { useState, useRef, useEffect } from "react";
import MapViewDirections from "react-native-maps-directions";
import {
  locationPermission,
  getCurrentLocation,
} from "../helpers/helperFunction";
import * as Location from "expo-location";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Washer_map({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    console.log(location, "dar");
    text = JSON.stringify(location);
    console.log(location.coords.latitude, "dari location");
  }
  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  // const getLiveLocation = async () => {
  //   const locPermissionDenied = await locationPermission();
  //   if (locPermissionDenied) {
  //     const res = getCurrentLocation();
  //     console.log(res, "dari res");
  //   }
  // };
  const [state, setState] = useState({
    pickupCord: {
      latitude: location.coords.latitude, //-2.920128961081039,
      longitude: location.coords.longitude, //104.71986828202549,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropLocation: {
      latitude: -2.9244042367687273,
      longitude: 104.71663891758772,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const mapRef = useRef();
  const { pickupCord, dropLocation } = state;
  return (
    <View style={styles.container}>
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
          {"                             "}
        </Text>
        <Button
          buttonStyle={styles.buttonCall}
          type="solid"
          icon={
            <Icon
              name="phone"
              size={20}
              color="white"
              type="font-awesome"
              onPress={() => {
                Linking.openURL(`tel:${83456789012}`);
              }}
            />
          }
        />
      </View>
      <View style={styles.bodyImage}>
        <MapView style={styles.map} initialRegion={pickupCord} ref={mapRef}>
          <Marker coordinate={pickupCord} />
          <Marker coordinate={dropLocation} />
          <MapViewDirections
            origin={pickupCord}
            destination={dropLocation}
            apikey={"AIzaSyDwfOfj47tLmdHTYEm1sSKV5zAoWukvsvg"}
            strokeWidth={3}
            strokeColor="hotpink"
            optimizeWaypoints={true}
            onReady={(result) => {
              mapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: 30,
                  bottom: 300,
                  left: 30,
                  top: 300,
                },
              });
            }}
          />
        </MapView>
        {/* <Image
          style={{
            resizeMode: "stretch",
            height: 600,
            width: 340,
            flex: 1,
          }}
          source={{
            uri: "https://i.imgur.com/kFdpCg4.png",
          }}
        /> */}
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
        <Button
          title="  Generate QR Code"
          icon={
            <Icon name="qrcode" type="font-awesome" color="white" size={20} />
          }
          onPress={() => {
            navigation.navigate("QR_payment");
          }}
        ></Button>
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
    // resizeMode: "contain",
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
  map: {
    width: Dimensions.get("window").width * 0.95,
    height: Dimensions.get("window").height * 0.5,
    borderRadius: 20,
  },
  buttonCall: {
    backgroundColor: "#21c769",
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
});
