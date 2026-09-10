// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import HomeScreen from "./screens/HomeScreen";
// import LoginScreen from "./screens/LoginScreen";
// import RegistrationScreen from "./screens/RegistrationScreen";
// import DashboardScreen from "./screens/DashboardScreen";
// import AccountScreen from "./screens/AccountScreen";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Registration" component={RegistrationScreen} />
//         <Stack.Screen name="Dashboard" component={DashboardScreen} />
//         <Stack.Screen name="Account" component={AccountScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }












// // ---new--1
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import HomeScreen         from "./screens/HomeScreen";
// import LoginScreen        from "./screens/LoginScreen";
// import RegistrationScreen from "./screens/RegistrationScreen";
// import DashboardScreen    from "./screens/DashboardScreen";
// import AccountScreen      from "./screens/AccountScreen";
// import ProfileScreen      from "./screens/ProfileScreen";   // ← NEW

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="Home"         component={HomeScreen}         />
//         <Stack.Screen name="Login"        component={LoginScreen}        />
//         <Stack.Screen name="Registration" component={RegistrationScreen} />
//         <Stack.Screen name="Dashboard"    component={DashboardScreen}    />
//         <Stack.Screen name="Account"      component={AccountScreen}      />
//         <Stack.Screen name="Profile"      component={ProfileScreen}      />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }













// App.js--ew 2
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen           from "./screens/HomeScreen";
import LoginScreen          from "./screens/LoginScreen";
import RegistrationScreen   from "./screens/RegistrationScreen";
import MenuScreen           from "./screens/Menuscreen";
import DashboardScreen      from "./screens/DashboardScreen";
import AccountScreen        from "./screens/AccountScreen";
import ProfileScreen        from "./screens/ProfileScreen";
import SuchiBookingScreen   from "./screens/SuchiBookingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home"         component={HomeScreen}         />
        <Stack.Screen name="Login"        component={LoginScreen}        />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Menu"         component={MenuScreen}         />
        <Stack.Screen name="Dashboard"    component={DashboardScreen}    />
        <Stack.Screen name="Account"      component={AccountScreen}      />
        <Stack.Screen name="Profile"      component={ProfileScreen}      />
        <Stack.Screen name="SuchiBooking" component={SuchiBookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}