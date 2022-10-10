import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './screens/LandingPage';
import Register from './screens/Register';
import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile/Profile';
import TopUp from './screens/Profile/TopUp';
import EditProfile from './screens/Profile/EditProfile';
import DetailBook from './screens/Book/DetailBook';
import CreateBook from './screens/Book/CreateBook';
import LookingWasher from './screens/Book/BookFlow/LookingWasher';
import BookTaken from './screens/Book/BookFlow/BookTaken';
import WasherTracker from './screens/Book/BookFlow/WasherTracker';
import SuccessPay from './screens/Book/BookFlow/SuccessPay';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerShown: false
        }} name='LandingPage' component={LandingPage}></Stack.Screen>
        <Stack.Screen name='Register' component={Register}></Stack.Screen>
        <Stack.Screen options={{
          headerShown: false
        }} name='Login' component={Login}></Stack.Screen>
        <Stack.Screen options={{
          headerShown: false
        }} name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Profile' component={Profile}></Stack.Screen>
        <Stack.Screen options={{
          headerTitle: 'Top Up Repay'
        }} name='TopUp' component={TopUp}></Stack.Screen>
        <Stack.Screen options={{
          headerTitle: 'Edit Profile'
        }} name='EditProfile' component={EditProfile}></Stack.Screen>
        <Stack.Screen options={{
          headerTitle: 'Detail Book'
        }} name='DetailBook' component={DetailBook}></Stack.Screen>
        <Stack.Screen options={{
          headerShown: false
        }} name='CreateBook' component={CreateBook}></Stack.Screen>
        <Stack.Screen options={{
          headerShown: false
        }} name='LookingWasher' component={LookingWasher}></Stack.Screen>
        <Stack.Screen options={{
          headerShown: false
        }} name='BookTaken' component={BookTaken}></Stack.Screen>
        <Stack.Screen name='WasherTracker' component={WasherTracker}></Stack.Screen>
        <Stack.Screen options={{
          headerShown: false
        }} name='SuccessPay' component={SuccessPay}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


