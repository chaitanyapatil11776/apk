// // // import { NavigationContainer } from "@react-navigation/native";
// // // import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // // import HomeScreen from "./screens/HomeScreen";
// // // import LoginScreen from "./screens/LoginScreen";
// // // import RegistrationScreen from "./screens/RegistrationScreen";
// // // import DashboardScreen from "./screens/DashboardScreen";
// // // import AccountScreen from "./screens/AccountScreen";

// // // const Stack = createNativeStackNavigator();

// // // export default function App() {
// // //   return (
// // //     <NavigationContainer>
// // //       <Stack.Navigator screenOptions={{ headerShown: false }}>
// // //         <Stack.Screen name="Home" component={HomeScreen} />
// // //         <Stack.Screen name="Login" component={LoginScreen} />
// // //         <Stack.Screen name="Registration" component={RegistrationScreen} />
// // //         <Stack.Screen name="Dashboard" component={DashboardScreen} />
// // //         <Stack.Screen name="Account" component={AccountScreen} />
// // //       </Stack.Navigator>
// // //     </NavigationContainer>
// // //   );
// // // }












// // // // ---new--1
// // // import { NavigationContainer } from "@react-navigation/native";
// // // import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // // import HomeScreen         from "./screens/HomeScreen";
// // // import LoginScreen        from "./screens/LoginScreen";
// // // import RegistrationScreen from "./screens/RegistrationScreen";
// // // import DashboardScreen    from "./screens/DashboardScreen";
// // // import AccountScreen      from "./screens/AccountScreen";
// // // import ProfileScreen      from "./screens/ProfileScreen";   // ← NEW

// // // const Stack = createNativeStackNavigator();

// // // export default function App() {
// // //   return (
// // //     <NavigationContainer>
// // //       <Stack.Navigator screenOptions={{ headerShown: false }}>
// // //         <Stack.Screen name="Home"         component={HomeScreen}         />
// // //         <Stack.Screen name="Login"        component={LoginScreen}        />
// // //         <Stack.Screen name="Registration" component={RegistrationScreen} />
// // //         <Stack.Screen name="Dashboard"    component={DashboardScreen}    />
// // //         <Stack.Screen name="Account"      component={AccountScreen}      />
// // //         <Stack.Screen name="Profile"      component={ProfileScreen}      />
// // //       </Stack.Navigator>
// // //     </NavigationContainer>
// // //   );
// // // }













// // // App.js--ew 2
// // import { NavigationContainer } from "@react-navigation/native";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // import HomeScreen           from "./screens/HomeScreen";
// // import LoginScreen          from "./screens/LoginScreen";
// // import RegistrationScreen   from "./screens/RegistrationScreen";
// // import MenuScreen           from "./screens/Menuscreen";
// // import DashboardScreen      from "./screens/DashboardScreen";
// // import AccountScreen        from "./screens/AccountScreen";
// // import ProfileScreen        from "./screens/ProfileScreen";
// // import SuchiBookingScreen   from "./screens/SuchiBookingScreen";

// // const Stack = createNativeStackNavigator();

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator screenOptions={{ headerShown: false }}>
// //         <Stack.Screen name="Home"         component={HomeScreen}         />
// //         <Stack.Screen name="Login"        component={LoginScreen}        />
// //         <Stack.Screen name="Registration" component={RegistrationScreen} />
// //         <Stack.Screen name="Menu"         component={MenuScreen}         />
// //         <Stack.Screen name="Dashboard"    component={DashboardScreen}    />
// //         <Stack.Screen name="Account"      component={AccountScreen}      />
// //         <Stack.Screen name="Profile"      component={ProfileScreen}      />
// //         <Stack.Screen name="SuchiBooking" component={SuchiBookingScreen} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }





// // App.js

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";


// // ================= EXISTING SCREENS =================

// import HomeScreen from "./screens/HomeScreen";
// import LoginScreen from "./screens/LoginScreen";
// import RegistrationScreen from "./screens/RegistrationScreen";
// import MenuScreen from "./screens/Menuscreen";
// import DashboardScreen from "./screens/DashboardScreen";
// import AccountScreen from "./screens/AccountScreen";
// import ProfileScreen from "./screens/ProfileScreen";
// import SuchiBookingScreen from "./screens/SuchiBookingScreen";


// // ================= NEW SCREENS =================

// import GreenPage1 from "./screens/GreenPage1";
// import GreenPage2 from "./screens/GreenPage2";
// import RedPage1 from "./screens/RedPage1";
// import RedPage2 from "./screens/RedPage2";


// const Stack = createNativeStackNavigator();


// export default function App() {
//   return (
//     <NavigationContainer>

//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}
//       >

//         {/* ================= HOME ================= */}

//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//         />


//         {/* ================= LOGIN ================= */}

//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//         />


//         {/* ================= REGISTRATION ================= */}

//         <Stack.Screen
//           name="Registration"
//           component={RegistrationScreen}
//         />


//         {/* ================= MENU ================= */}

//         <Stack.Screen
//           name="Menu"
//           component={MenuScreen}
//         />


//         {/* ================= DASHBOARD ================= */}

//         <Stack.Screen
//           name="Dashboard"
//           component={DashboardScreen}
//         />


//         {/* ================= ACCOUNT ================= */}

//         <Stack.Screen
//           name="Account"
//           component={AccountScreen}
//         />


//         {/* ================= PROFILE ================= */}

//         <Stack.Screen
//           name="Profile"
//           component={ProfileScreen}
//         />


//         {/* ================= SUCHI BOOKING ================= */}

//         <Stack.Screen
//           name="SuchiBooking"
//           component={SuchiBookingScreen}
//         />


//         {/* =================================================
//             NEW GREEN PAGES
//         ================================================= */}

//         <Stack.Screen
//           name="GreenPage1"
//           component={GreenPage1}
//         />

//         <Stack.Screen
//           name="GreenPage2"
//           component={GreenPage2}
//         />


//         {/* =================================================
//             NEW RED PAGES
//         ================================================= */}

//         <Stack.Screen
//           name="RedPage1"
//           component={RedPage1}
//         />

//         <Stack.Screen
//           name="RedPage2"
//           component={RedPage2}
//         />

//       </Stack.Navigator>

//     </NavigationContainer>
//   );
// }










// contact as adn faq
// App.js

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// ================= EXISTING SCREENS =================

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import MenuScreen from "./screens/Menuscreen";
import DashboardScreen from "./screens/DashboardScreen";
import AccountScreen from "./screens/AccountScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SuchiBookingScreen from "./screens/SuchiBookingScreen";

// ================= ABOUT / CONTACT / FAQ =================

import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import FAQScreen from "./screens/FAQScreen";

// ================= GREEN / RED SCREENS =================

import GreenPage1 from "./screens/GreenPage1";
import GreenPage2 from "./screens/GreenPage2";
import RedPage1 from "./screens/RedPage1";
import RedPage2 from "./screens/RedPage2";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >

        {/* ================= HOME ================= */}

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        {/* ================= ABOUT ================= */}

        <Stack.Screen
          name="About"
          component={AboutScreen}
        />

        {/* ================= CONTACT ================= */}

        <Stack.Screen
          name="Contact"
          component={ContactScreen}
        />

        {/* ================= FAQ ================= */}

        <Stack.Screen
          name="FAQ"
          component={FAQScreen}
        />

        {/* ================= LOGIN ================= */}

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        {/* ================= REGISTRATION ================= */}

        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
        />

        {/* ================= MENU ================= */}

        <Stack.Screen
          name="Menu"
          component={MenuScreen}
        />

        {/* ================= DASHBOARD ================= */}

        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
        />

        {/* ================= ACCOUNT ================= */}

        <Stack.Screen
          name="Account"
          component={AccountScreen}
        />

        {/* ================= PROFILE ================= */}

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />

        {/* ================= SUCHI BOOKING ================= */}

        <Stack.Screen
          name="SuchiBooking"
          component={SuchiBookingScreen}
        />

        {/* ================= GREEN PAGES ================= */}

        <Stack.Screen
          name="GreenPage1"
          component={GreenPage1}
        />

        <Stack.Screen
          name="GreenPage2"
          component={GreenPage2}
        />

        {/* ================= RED PAGES ================= */}

        <Stack.Screen
          name="RedPage1"
          component={RedPage1}
        />

        <Stack.Screen
          name="RedPage2"
          component={RedPage2}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}