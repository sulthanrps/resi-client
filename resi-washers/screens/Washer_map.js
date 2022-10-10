import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Icon } from "react-native-elements";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export function Washer_map({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.bodyMessage}>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontWeight: "bold",
            fontSize: 20,
            opacity: 0.6,
          }}
        >
          On the Way to Customer
        </Text>
      </View>
      <View style={styles.divHeader}>
        <View style={styles.divProfile}>
          <Image
            style={{
              resizeMode: "contain",
              flex: 1,
              borderRadius: 10,
            }}
            source={{
              uri: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
            }}
          />
        </View>

        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {" "}
          Ujang codet
          {"                      "}
        </Text>
        <Button
          type="solid"
          title="    Call"
          icon={
            <Icon name="phone" size={20} color="white" type="font-awesome" />
          }
        >
          {"  "}
          Call
        </Button>
      </View>
      <View style={styles.bodyImage}>
        <Image
          style={{
            resizeMode: "stretch",
            height: 600,
            width: 340,
            flex: 1,
          }}
          source={{
            uri: "https://i.imgur.com/kFdpCg4.png",
          }}
        />
      </View>
      <View style={styles.divFooter}>
        <View style={styles.divProfile}>
          {/* <Image
              style={{
                resizeMode: "contain",
                flex: 1,
                borderRadius: 10,
              }}
              source={{
                uri: "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
              }}
            /> */}
        </View>
        <View style={styles.divBody}>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {" "}
            Bike Washing
          </Text>
          <Text>{"  "}10.00-11.00</Text>
        </View>
        <View style={styles.divBodyRight}>
          <Text> Rp. 60.000,-</Text>
        </View>
      </View>

      <View style={styles.buttonLogin_washer}>
        <Button
          title="  Generate QR Code"
          icon={
            <Icon name="qrcode" type="font-awesome" color="white" size={20} />
          }
          onPress={() => {
            navigation.navigate("QR_payment");
          }}
        ></Button>
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

  divHeader: {
    flex: 1,
    marginHorizontal: 10,
    // justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: width,
  },
  divProfile: {
    // flex: 1,
    backgroundColor: "#E8E8E8",
    height: 40,
    width: 40,
    borderRadius: 10,
    marginLeft: 5,
    elevation: 7,
  },
  divFooter: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    width: width,
    marginTop: 10,
    marginRight: 20,
  },
  divBody: {
    // flex: 1,
    flexDirection: "column",
    marginRight: 90,
  },
  divBodyRight: {
    flexDirection: "column",
  },
  bodyImage: {
    flex: 7,
    backgroundColor: "grey",
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  bodyMessage: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },

  buttonLogin_washer: {
    flex: 2,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
