import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Register } from "./screens/Register";
import { Login_washer } from "./screens/Login_washer";

export default function App() {
  return (
    <View style={styles.container}>
      <Login_washer></Login_washer>
      {/* <Register></Register> */}
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
