import { Text, StyleSheet, View, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from "react-native-elements";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Register({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <View style={styles.header}>
            <View>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontWeight: "bold",
                  fontSize: 32,
                  opacity: 0.6,
                }}
              >
                Register
              </Text>
            </View>
          </View> */}
        <View style={styles.labelName}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Name
          </Text>
        </View>
        <View style={styles.inputName}>
          {/* <Text>input Name</Text> */}
          <Input></Input>
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
        <View style={styles.labelPhoneNumber}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Phone Number
          </Text>
        </View>
        <View style={styles.inputPhoneNumber}>
          <Input></Input>
        </View>
        <View style={styles.labelAddress}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Profile Image
          </Text>
        </View>
        <View style={styles.inputAddress}>
          <Input></Input>
        </View>
        <View style={styles.buttonRegister}>
          <Button
            title="Submit"
            onPress={() => navigation.navigate("Home_washer")}
          />
        </View>
      </View>
    </ScrollView>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E6EA",
    marginHorizontal: 10,
    borderRadius: 10,
  },
  labelName: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputName: {
    flex: 1,
    marginHorizontal: 2,
    elevation: 2,
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
  labelPhoneNumber: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputPhoneNumber: {
    flex: 1,
    elevation: 2,
    marginHorizontal: 2,
  },
  labelAddress: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputAddress: {
    flex: 2,
    elevation: 2,
    marginHorizontal: 2,
  },
  buttonRegister: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
