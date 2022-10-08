import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BookTaken } from "./screens/BookTaken";

export default function App() {
  return (
    <View style={styles.container}>
      <BookTaken></BookTaken>
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
