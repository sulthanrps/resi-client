import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Overlay, Button, Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReusableCard } from "./ReusableCard";
import { useMutation, useQuery } from "@apollo/client";
import * as Location from "expo-location";
import { useFocusEffect } from "@react-navigation/native";
import {
  GET_ORDER,
  GET_ORDER_TAKEN,
  CHANGE_STATUS,
  GET_USER,
  INPUT_WASHER_ID,
} from "../queries";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Home_washer({ navigation }) {
  //GeoLocation
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [access_token, setAccess] = useState("");
  const [visible, setVisible] = useState(false);
  const [visiblePendingOrder, setVisiblePendingOrder] = useState(true);
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
  const [
    washerPickBook,
    {
      loading: loadingInputWasher,
      error: errorInputWasher,
      data: dataInputWasher,
    },
  ] = useMutation(INPUT_WASHER_ID, {
    variables: {
      washerPickBook: dataOrder?.getWasherBooksPending[0]?.id,
      accessToken: access_token,
    },
    onCompleted: async (data) => {
      console.log(data, "dari complete");
    },
  });
  const {
    loading: loadingOrderTaken,
    error: errorOrderTaken,
    data: dataOrderTaken,
    refetch: refetchOrderTaken,
  } = useQuery(GET_ORDER_TAKEN, {
    variables: {
      accessToken: access_token,
    },
  });
  const [
    washerUpdateBook,
    {
      loading: loadingChangeStatus,
      error: errorChangeStatus,
      data: dataChangeStatus,
    },
  ] = useMutation(CHANGE_STATUS, {
    variables: {
      washerUpdateBookId: dataOrderTaken?.getWasherBooks[0]?.id,
      accessToken: access_token,
      status: "ongoing",
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
      // refetchOrder({
      //   accessToken: access_token,
      //   lon: location.coords.longitude,
      //   lat: location.coords.latitude,
      //   dist: 2,
      // });
    })();
  }, []);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const toggleOverlayPendingOrder = () => {
    setVisiblePendingOrder(!visiblePendingOrder);
    washerPickBook({
      variables: {
        washerPickBookId: dataOrder?.getWasherBooksPending[0]?.id,
        accessToken: access_token,
      },
    });
  };

  useEffect(() => {
    AsyncStorage.getItem("access_token").then((res) => {
      setAccess(res);
    });
  }, []);
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { accessToken: access_token },
  });
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  useEffect(() => {
    refetchOrderTaken({
      accessToken: access_token,
    });
  }, [access_token]);
  // useEffect(() => {
  //   // setInterval(() => {
  //   refetchOrder({
  //     accessToken: access_token,
  //   });
  //   // }, 10000);
  // }, [access_token]);
  const changeStatus = async () => {
    console.log(dataOrderTaken?.getWasherBooks[0]?.id, "dari button change");
    console.log(access_token, "dari button");

    washerUpdateBook({
      variables: {
        washerUpdateBookId: dataOrderTaken?.getWasherBooks[0]?.id,
        accessToken: access_token,
        status: "ongoing",
      },
    });
    await AsyncStorage.setItem(
      "id_book_ongoing",
      `${dataOrderTaken?.getWasherBooks?.id}`
    );
    navigation.navigate("Washer_map");
    console.log(dataChangeStatus, "dari change status");
  };

  console.log(dataOrder, "dari order");
  // console.log(BookTaken[0]);
  //Cek Order
  if (loadingOrder) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
  if (errorOrder) console.log(error);
  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
  if (error) console.log(error);
  if (!location) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
  if (loadingInputWasher) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
  if (errorInputWasher) console.log(error);
  if (loadingOrderTaken) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
  if (errorOrderTaken) console.log(error, "dari order taken");
  if (loadingChangeStatus) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
  if (errorChangeStatus) console.log(errorChangeStatus);
  console.log(dataOrderTaken, "dari order taken");
  const BookTaken = dataOrderTaken?.getWasherBooks?.filter(
    (el) => el.status === "taken"
  );
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.divNavigation}>
            <View style={styles.divNavigationLeft}>
              <Text style={styles.textNavigation}>Welcome Back,</Text>
              <Text style={styles.textNavigationBottom}>
                {data.getUser.name}
              </Text>
            </View>
            <View style={styles.divNavigationRight}>
              <Pressable onPress={() => navigation.navigate("Profile_washer")}>
                <Image
                  style={styles.imgNavigation}
                  source={{
                    uri: `${data.getUser.profileImg}`,
                  }}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.divHeader}>
            <View style={styles.divProfile}>
              <Image
                style={{
                  resizeMode: "contain",
                  height: 80,
                  width: 100,
                }}
                source={{
                  uri: "https://posbargains.com/wp-content/uploads/2021/01/undraw_Payments_re_77x0-removebg-preview.png",
                }}
              />
            </View>

            <View style={styles.divBalance}>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginLeft: 10,
                }}
              >
                Balance
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontWeight: "bold",
                  fontSize: 12,
                  marginLeft: 10,
                }}
              >
                Rp.{" "}
                {data.getUser.balance
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                {" ,-"}
              </Text>
            </View>
          </View>
          <View style={styles.BookTakenContainer}>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
              <View style={styles.Overlay}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      fontWeight: "bold",
                      fontSize: 20,
                      marginLeft: 3,
                    }}
                  >
                    Detail Order
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginLeft: 3,
                    marginTop: 20,
                  }}
                >
                  Bike Type
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontWeight: "bold",
                    fontSize: 14,
                    marginLeft: 3,
                    color: "#9F9F9F",
                  }}
                >
                  {dataOrderTaken.getWasherBooks[0].Bike.name}
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginLeft: 3,
                    marginTop: 20,
                  }}
                >
                  Price
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontWeight: "bold",
                    fontSize: 14,
                    marginLeft: 3,
                    marginBottom: 5,
                    color: "#9F9F9F",
                  }}
                >
                  Rp.{" "}
                  {dataOrderTaken.getWasherBooks[0].GrandTotal.toString().replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    "."
                  )}{" "}
                  {" ,-"}
                </Text>
                {/* <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginLeft: 3,
                    marginTop: 20,
                  }}
                >
                  Location
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontWeight: "bold",
                    fontSize: 14,
                    marginLeft: 3,
                    color: "#9F9F9F",
                    marginBottom: 10,
                  }}
                >
                  Jl. Sisingamangaraja
                </Text> */}

                <Button
                  icon={
                    <Icon
                      name="car"
                      type="font-awesome"
                      color="white"
                      size={25}
                      iconStyle={{ marginRight: 10 }}
                    />
                  }
                  title="Start Driving"
                  onPress={() => {
                    toggleOverlay;
                    changeStatus();
                  }}
                />
              </View>
            </Overlay>
            {/* BOOK TAKEN */}
            <View style={styles.labelBook}>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginLeft: 3,
                  marginTop: 20,
                }}
              >
                Book Taken
              </Text>
            </View>
            {!dataOrder && (
              <Text style={styles.textbehindOrder}>
                No Books Has Been Taken yet ..
              </Text>
            )}
            {dataOrder?.getWasherBooksPending[0]?.WasherId === null && (
              <Overlay
                isVisible={visiblePendingOrder}
                onBackdropPress={toggleOverlayPendingOrder}
              >
                <View style={styles.Overlay}>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text
                      style={{
                        fontFamily: "Poppins_400Regular",
                        fontWeight: "bold",
                        fontSize: 20,
                        marginLeft: 3,
                      }}
                    >
                      Detail Order
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      fontWeight: "bold",
                      fontSize: 20,
                      marginLeft: 3,
                      marginTop: 20,
                    }}
                  >
                    Bike Type
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      fontWeight: "bold",
                      fontSize: 14,
                      marginLeft: 3,
                      color: "#9F9F9F",
                    }}
                  >
                    BMX
                    {/* {dataOrder.getWasherBooksPending[0].Bike.name} */}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      fontWeight: "bold",
                      fontSize: 20,
                      marginLeft: 3,
                      marginTop: 20,
                    }}
                  >
                    Price
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      fontWeight: "bold",
                      fontSize: 14,
                      marginLeft: 3,
                      marginBottom: 5,
                      color: "#9F9F9F",
                    }}
                  >
                    Rp.{" "}
                    {dataOrder.getWasherBooksPending[0].GrandTotal.toString().replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      "."
                    )}{" "}
                    {" ,-"}
                  </Text>
                  {/* <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginLeft: 3,
                    marginTop: 20,
                  }}
                >
                  Location
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontWeight: "bold",
                    fontSize: 14,
                    marginLeft: 3,
                    color: "#9F9F9F",
                    marginBottom: 10,
                  }}
                >
                  Jl. Sisingamangaraja
                </Text> */}

                  <Button
                    icon={
                      <Icon
                        name="check"
                        type="font-awesome"
                        color="white"
                        size={25}
                        iconStyle={{ marginRight: 10 }}
                      />
                    }
                    title="Yes"
                    onPress={() => {
                      toggleOverlayPendingOrder();
                      // locationPermission();
                      // navigation.navigate("Washer_map");
                    }}
                  />
                </View>
              </Overlay>
            )}

            {BookTaken[0].status === "taken" && (
              <Pressable onPress={toggleOverlay}>
                <View style={styles.divBookTaken}>
                  <View style={styles.ColumnBookTakenLeft}>
                    <Text
                      style={{
                        fontFamily: "Poppins_400Regular",
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      {BookTaken[0].Bike?.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Poppins_400Regular",
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "#9F9F9F",
                      }}
                    >
                      Val
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Poppins_400Regular",
                        fontWeight: "bold",
                        fontSize: 14,
                        color: "#9F9F9F",
                      }}
                    >
                      Jalan. Imam Bonjol
                    </Text>
                  </View>

                  <View style={styles.ColumnBookTakenRight}>
                    <Text
                      style={{
                        fontFamily: "Poppins_400Regular",
                        fontWeight: "bold",
                        fontSize: 14,
                        marginLeft: 10,
                        color: "#9F9F9F",
                        textAlign: "right",
                      }}
                    >
                      {BookTaken[0]?.BookDate}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          </View>
          <View style={styles.HistoryContainer}>
            <View style={styles.labelBook}>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginLeft: 3,
                }}
              >
                History
              </Text>
            </View>
            <ReusableCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  divNavigation: {
    // marginHorizontal: 10,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    // elevation: 1,
  },
  divNavigationLeft: {
    flexDirection: "column",
    width: 0.5 * width,
  },
  divNavigationRight: {
    flexDirection: "column",
    height: 50,
    width: 0.5 * width,
    borderRadius: 50 / 2,
    alignItems: "flex-end",
    marginRight: 20,
  },
  imgNavigation: {
    resizeMode: "contain",
    flex: 1,
    borderRadius: 50 / 2,
    height: 50,
    width: 50,
    marginRight: 20,
  },
  textNavigation: {
    fontFamily: "Poppins_400Regular",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
  },
  textNavigationBottom: {
    fontFamily: "Poppins_400Regular",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10,
  },
  divHeader: {
    // flex: 1,
    height: 60,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#5377F9",
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 40,
    flexDirection: "row",
  },
  divProfile: {
    justifyContent: "center",
    height: 40,
    width: 60,
    borderRadius: 10,
    marginLeft: 5,
  },
  divBalance: {
    // flex: 1,
    backgroundColor: "#F1F1F1",
    height: 50,
    width: 100,
    borderRadius: 10,
    flexDirection: "column",
  },
  labelBook: {
    // flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    justifyContent: "flex-end",
    // backgroundColor: "green",
  },
  divBookTaken: {
    height: 100,
    width: 350,
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 10,
    flexDirection: "row",
    elevation: 7,
    marginBottom: 10,
  },
  ColumnBookTakenLeft: {
    marginLeft: 15,
    flexDirection: "column",
    width: 0.5 * width,
    marginBottom: 5,
    marginTop: 10,
  },
  ColumnBookTakenRight: {
    flex: 1,
    flexDirection: "column",
    width: 0.5 * width,
    height: 70,
    marginBottom: 5,
    marginTop: 15,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginRight: 15,
  },
  HistoryContainer: {
    marginTop: 30,
    flex: 7,
    // backgroundColor: "red",
  },
  BookTakenContainer: {
    flex: 2,
  },
  Overlay: {
    backgroundColor: "#FFFFFF",
    width: 0.7 * width,
  },
  textbehindOrder: {
    flex: 1,
    marginHorizontal: 13,
  },
});
