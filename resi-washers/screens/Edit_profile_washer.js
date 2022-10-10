import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import { Input, Button } from "react-native-elements";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Edit_profile_washer({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.divProfile}>
        <View style={styles.photoProfile}>
          <Image
            style={styles.imgProfile}
            source={{
              uri: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
            }}
          />

        </View>
      </View>
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
        <Input placeholder="Asep Gigi"></Input>
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
        <Input placeholder="*******"></Input>
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
        <Input placeholder="081234567"></Input>
      </View>
      <View style={styles.labelAddress}>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Profile Image Url
        </Text>
      </View>
      <View style={styles.inputAddress}>
        <Input placeholder="http://bluedragon.com"></Input>
      </View>
      <View style={styles.buttonRegister}>
        <Button
          title="Submit"
          onPress={() => navigation.navigate("Profile_washer")}
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
    elevation: 2,
  },
  divProfile: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  photoProfile: {
    backgroundColor: "grey",
    marginHorizontal: 10,
    marginTop: 20,
    resizeMode: "contain",

    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
  imgProfile: {
    resizeMode: "contain",
    flex: 1,
    height: 100,
    width: 100,
    borderRadius: 100 / 2,

  },
  labelPassword: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputPassword: {
    flex: 1,
    elevation: 2,
  },
  labelPhoneNumber: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputPhoneNumber: {
    flex: 1,
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
  },
  labelImgUrl: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  inputImgProfileUrl: {
    flex: 1,
    elevation: 2,
  },
  buttonRegister: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
