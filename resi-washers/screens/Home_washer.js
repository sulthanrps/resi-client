import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Overlay, Button, Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { ReusableCard } from "./ReusableCard";
import { locationPermission } from "../helpers/helperFunction";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Home_washer({ navigation }) {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.divNavigation}>
            <View style={styles.divNavigationLeft}>
              <Text style={styles.textNavigation}>Welcome Back,</Text>
              <Text style={styles.textNavigationBottom}>Asep Gigi</Text>
            </View>
            <View style={styles.divNavigationRight}>
              <Pressable onPress={() => navigation.navigate("Profile_washer")}>
                <Image
                  style={styles.imgNavigation}
                  source={{
                    uri: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
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
                Rp. 100.000,-
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
                  BMX Bike
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
                    color: "#9F9F9F",
                  }}
                >
                  Rp. 60.000,-
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
                </Text>

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
                    // locationPermission();
                    navigation.navigate("Washer_map");
                  }}
                />
              </View>
            </Overlay>
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
                    BMX Bike
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      fontWeight: "bold",
                      fontSize: 14,
                      color: "#9F9F9F",
                    }}
                  >
                    Asep Gigi
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      fontWeight: "bold",
                      fontSize: 14,
                      color: "#9F9F9F",
                    }}
                  >
                    Jalan. SIsingamangaraja
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
                    }}
                  >
                    09-20-2022
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      fontWeight: "bold",
                      fontSize: 14,
                      marginLeft: 10,
                      color: "#9F9F9F",
                    }}
                  >
                    10:00
                  </Text>
                </View>
              </View>
            </Pressable>
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
    elevation: 2,
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
});
