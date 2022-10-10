import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import landing from "../assets/landing.png";

let width = Dimensions.get("screen").width;
let height = Dimensions.get("screen").height;

export function LandingPage({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.landingTitle}>
            <Text style={styles.title}>Resi</Text>
            <Text style={styles.subtitle}>Re-clean Sepeda Indonesia</Text>
          </View>

          <View style={styles.illustrationSection}>
            <Image source={landing} style={styles.landingIllustration} />
          </View>

          <View style={styles.descSection}>
            <Text style={styles.descText}>Go Clean Your Bike Now !</Text>
          </View>

          <View style={styles.btnSection}>
            <TouchableOpacity
              style={styles.startBtn}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: height,
  },
  startBtn: {
    backgroundColor: "#5377F9",
    padding: 20,
    width: (width * 80) / 100,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
    fontSize: 16,
  },
  landingIllustration: {
    width: (width * 80) / 100,
    height: 400,
  },
  landingTitle: {
    flex: 2,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  illustrationSection: {
    flex: 5,
  },
  btnSection: {
    flex: 2,
  },
  descSection: {
    flex: 1,
    marginTop: 50,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 50,
    color: "#5377F9",
  },
  subtitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
  descText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
