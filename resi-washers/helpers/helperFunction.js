import { Alert, PermissionsAndroid, Platform } from "react-native";
// import Geolocation from "@react-native-community/geolocation";
import * as Location from "expo-location";
import { useState } from "react";

export const locationPermission = async () => {
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
    text = JSON.stringify(location);
    console.log(location, "dari ");
  }
  // try {
  //   const granted = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //     {
  //       title: "Apakah anda mengijinkan aplikasi ini mengakses lokasi anda ?",

  //       buttonNeutral: "Ask Me Later",
  //       buttonNegative: "Cancel",
  //       buttonPositive: "OK",
  //     }
  //   );
  //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //     console.log(PermissionsAndroid.RESULTS.GRANTED);
  //     getCurrentLocation();
  //   } else {
  //     console.log("Yaah ditolak");
  //   }
  // } catch (err) {
  //   console.warn(err);
  // }
};

export const getCurrentLocation = () => {
  Geolocation.getCurrentPosition(
    (position) => {
      console.log(position, "dari position");
      //   let initialPosition = JSON.stringify(position);
    },
    (error) => Alert.alert("get location error", console.log(error)),
    { enableHighAccuracy: true, timeout: 30000, maximumAge: 1000 }
  );
};

// export const getCurrentLocation = () => {
//   new Promise((resolve, reject) => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const cords = {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         };
//         resolve(cords);
//       },
//       (error) => {
//         reject(error.message);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   });
// };

// export const locationPermission = async () =>
//   new Promise(async (resolve, reject) => {
//     if (Platform.OS === "ios") {
//       try {
//         const permissionStatus = await Geolocation.requestAuthorization(
//           "whenInUse"
//         );
//         if (permissionStatus === "granted") {
//           return resolve("granted");
//         }
//         reject("permission not granted");
//       } catch (error) {
//         return reject(error);
//       }
//     }
//     return PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//     )
//       .then((granted) => {
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           resolve("granted");
//         }
//         return reject("Location Permission Denied");
//       })
//       .catch((error) => {
//         console.log("Ask Location error: ", error);
//         return reject(error);
//       });
//   });
