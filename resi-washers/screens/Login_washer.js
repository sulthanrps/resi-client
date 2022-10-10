import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import { Input, Button } from "react-native-elements";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Login_washer({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageLogin}>
        <Image
          style={{
            resizeMode: "contain",
            height: 600,
            width: 600,
            flex: 1,
          }}
          source={{
            uri: "https://cdn.dribbble.com/users/542205/screenshots/5380805/media/71dcfb8fa5ef0c6f5459aa77f100fb7a.png?compress=1&resize=1000x750&vertical=top",
          }}
        />
      </View>
      <View style={styles.labelEmail}>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Email
        </Text>
      </View>
      <View style={styles.inputEmail}>
        <Input></Input>
      </View>
      <View style={styles.labelPassword}>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Password
        </Text>
      </View>
      <View style={styles.inputPassword}>
        <Input></Input>
      </View>

      <View style={styles.buttonLogin_washer}>
        <Button
          title="Log in"
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
  imageLogin: {
    flex: 8,
    backgroundColor: "grey",
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  labelEmail: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputEmail: {
    flex: 1,
    elevation: 2,
    marginHorizontal: 2,
  },
  labelPassword: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputPassword: {
    flex: 1,
    elevation: 2,
    marginHorizontal: 2,
  },

  buttonLogin_washer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
