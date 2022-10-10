import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import { Button, Icon } from "react-native-elements";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Profile_washer({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.divProfile}>
        <View style={styles.photoProfile}>
          <Image
            style={styles.imageprofile}
            source={{
              uri: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
            }}
          />
        </View>
      </View>
      <View style={styles.username}>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Asep
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontWeight: "bold",
            fontSize: 20,
            opacity: 0.6,
          }}
        >
          {"  "}(Washer)
        </Text>
      </View>
      <View style={styles.divBalanceAndLogOut}>
        <View style={styles.buttonBalance}>
          <Icon name="credit-card" type="font-awesome" color={"white"} />
          <Text style={styles.textBalance}>
            {"  "}Balance :{"  "}
          </Text>
          <Text style={styles.textBalance}>Rp. 100.000,-</Text>
        </View>
        <View style={styles.LogOut}>
          {/* <Text>Logout</Text> */}
          <Button
            icon={
              <Icon
                name="sign-out"
                type="font-awesome"
                color="white"
                size={25}
                iconStyle={{ marginRight: 10 }}
              />
            }
            title="Log Out"
            buttonStyle={{ backgroundColor: "#DF4040" }}
            onPress={() => {
              navigation.navigate("Login_washer");
            }}
          />
        </View>
      </View>

      <View style={styles.blankbody}></View>
      <View style={styles.buttonLogin_washer}>
        <Button
          title="Edit Profile"
          onPress={() => navigation.navigate("Edit_profile_washer")}
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

  divProfile: {
    // flex: 4,
    height: 200,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  photoProfile: {
    backgroundColor: "grey",
    marginHorizontal: 10,
    marginTop: 20,
    resizeMode: "contain",
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    alignItems: "center",
  },
  imageprofile: {
    resizeMode: "contain",
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
  },
  username: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    flexDirection: "row",
  },
  divBalanceAndLogOut: {
    flex: 1,
    flexDirection: "row",
    width: width,
    justifyContent: "space-around",
  },
  buttonBalance: {
    // flex: 1,
    backgroundColor: "#5575F9",
    marginHorizontal: 10,
    height: 40,
    width: 220,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textBalance: {
    fontFamily: "Poppins_400Regular",
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  LogOut: {
    flexDirection: "row",
    marginRight: 10,
  },
  blankbody: {
    flex: 2,
    marginHorizontal: 10,
  },
  buttonLogin_washer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    justifyContent: "flex-end",
  },
});
