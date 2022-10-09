import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Register } from "./screens/Register";
import { Login_washer } from "./screens/Login_washer";
import { Profile_washer } from "./screens/Profile_washer";
import { Edit_profile_washer } from "./screens/Edit_profile_washer";
import { Payment_success } from "./screens/Payment_success";
import { QR_payment } from "./screens/QR_payment";
import { Washer_map } from "./screens/Washer_map";
import { Home_washer } from "./screens/Home_washer";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Register></Register> */}
      {/* <Login_washer></Login_washer> */}
      <Profile_washer></Profile_washer>
      {/* <Edit_profile_washer></Edit_profile_washer> */}
      {/* <Payment_success></Payment_success> */}
      {/* <QR_payment></QR_payment> */}
      {/* <Washer_map></Washer_map> */}
      {/* <Home_washer></Home_washer> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
