import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
import { ReusableCard } from "./ReusableCard";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Home_washer() {
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

        <View style={styles.divHeader}>
          <View style={styles.divProfile}>
            <Image
              style={{
                resizeMode: "contain",
                // flex: 1,
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
    // flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E6EA",
    marginHorizontal: 10,
    borderRadius: 10,
  },
  divHeader: {
    // flex: 1,
    height: 60,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#5377F9",
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
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
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    justifyContent: "flex-end",
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
    flex: 7,
  },
  BookTakenContainer: {
    flex: 3,
  },
});
