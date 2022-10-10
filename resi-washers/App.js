import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Register } from "./screens/Register";
import { Login_washer } from "./screens/Login_washer";
import { Profile_washer } from "./screens/Profile_washer";
import { Edit_profile_washer } from "./screens/Edit_profile_washer";
import { Payment_success } from "./screens/Payment_success";
import { QR_payment } from "./screens/QR_payment";
import { Washer_map } from "./screens/Washer_map";
import { Home_washer } from "./screens/Home_washer";
import { LandingPage } from "./screens/LandingPage";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="Home_washer"
          component={Home_washer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Washer_map"
          component={Washer_map}
          options={{ title: "Map" }}
        />
        <Stack.Screen
          name="QR_payment"
          component={QR_payment}
          options={{ title: "QR Payment" }}
        />
        <Stack.Screen
          name="Payment_success"
          component={Payment_success}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile_washer"
          component={Profile_washer}
          options={{ title: "My Profile" }}
        />
        <Stack.Screen
          name="Edit_profile_washer"
          component={Edit_profile_washer}
          options={{ title: "Edit Profile" }}
        />
        <Stack.Screen
          name="Login_washer"
          component={Login_washer}
          options={{ title: "Login" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
