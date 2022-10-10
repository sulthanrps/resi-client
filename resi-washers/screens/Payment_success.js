import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-elements";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Payment_success({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.bodyImage}>
        <Image
          style={{
            resizeMode: "contain",
            height: 600,
            width: 600,
            flex: 1,
          }}
          source={{
            uri: "https://myps.ps/wp-content/uploads/2022/01/undraw_Accept_terms_re_lj38.png",
          }}
        />
      </View>
      <View style={styles.bodyMessage}>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontWeight: "bold",
            fontSize: 32,
          }}
        >
          Payment Success !
        </Text>
      </View>

      <View style={styles.buttonLogin_washer}>
        <Button
          title="Go To Home"
          onPress={() => navigation.navigate("Home_washer")}
        />
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
  header: {
    flex: 1,
  },
  bodyImage: {
    flex: 7,
    // backgroundColor: "grey",
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  bodyMessage: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
    marginHorizontal: 10,
  },

  buttonLogin_washer: {
    flex: 2,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "flex-end",
  },
});
