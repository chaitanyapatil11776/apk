// // // import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// // // export default function ActionButtons() {
// // //   return (
// // //     <View style={styles.container}>

// // //       {/* Row 1 */}
// // //       <View style={styles.row}>
// // //         <TouchableOpacity style={[styles.btn, { backgroundColor: "#dc2626" }]}>
// // //           <Text style={styles.text}>वधू-वर नोंदणी 2026</Text>
// // //         </TouchableOpacity>

// // //         <TouchableOpacity style={[styles.btn, { backgroundColor: "#16a34a" }]}>
// // //           <Text style={styles.text}>2026 सूची मागवा</Text>
// // //         </TouchableOpacity>
// // //       </View>

// // //       {/* Row 2 */}
// // //       <View style={styles.row}>
// // //         <TouchableOpacity style={[styles.btn, { backgroundColor: "#dc2626" }]}>
// // //           <Text style={styles.text}>ऑनलाईन प्रवेश फी</Text>
// // //         </TouchableOpacity>

// // //         <TouchableOpacity style={[styles.btn, { backgroundColor: "#16a34a" }]}>
// // //           <Text style={styles.text}>सूची मिळण्याचे केंद्र</Text>
// // //         </TouchableOpacity>
// // //       </View>

// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     padding: 15,
// // //   },
// // //   row: {
// // //     flexDirection: "row",
// // //     justifyContent: "space-between",
// // //     marginBottom: 10,
// // //   },
// // //   btn: {
// // //     flex: 1,
// // //     padding: 15,
// // //     borderRadius: 10,
// // //     alignItems: "center",
// // //     marginHorizontal: 5,
// // //   },
// // //   text: {
// // //     color: "#fff",
// // //     fontWeight: "bold",
// // //     fontSize: 13,
// // //     textAlign: "center",
// // //   },
// // // });











// import React from "react";

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";

// export default function ActionButtons({ onNavigate }) {
//   return (
//     <View style={styles.container}>

//       {/* ================= ROW 1 ================= */}

//       <View style={styles.row}>

//         {/* RED - वधू-वर नोंदणी 2026 */}
//         <TouchableOpacity
//           style={[
//             styles.btn,
//             { backgroundColor: "#dc2626" },
//           ]}
//           activeOpacity={0.8}
//           onPress={() => onNavigate("RedPage1")}
//         >
//           <Text style={styles.text}>
//            (वधू-वर नोंदणी २०२६) Register Now
//           </Text>
//         </TouchableOpacity>


//         {/* GREEN - 2026 सूची मागवा */}
//         <TouchableOpacity
//           style={[
//             styles.btn,
//             { backgroundColor: "#16a34a" },
//           ]}
//           activeOpacity={0.8}
//           onPress={() => onNavigate("GreenPage1")}
//         >
//           <Text style={styles.text}>
//            वधू-वर २०२६ सूची कुरिअर मागवा (Courier)
//           </Text>
//         </TouchableOpacity>

//       </View>


//       {/* ================= ROW 2 ================= */}

//       <View style={styles.row}>

//         {/* RED - ऑनलाईन प्रवेश फी */}
//         <TouchableOpacity
//           style={[
//             styles.btn,
//             { backgroundColor: "#dc2626" },
//           ]}
//           activeOpacity={0.8}
//           onPress={() => onNavigate("RedPage2")}
//         >
//           <Text style={styles.text}>
//             वधू-वर मेळावा २०२६ ऑनलाइन प्रवेश घ्या
//           </Text>
//         </TouchableOpacity>


//         {/* GREEN - सूची मिळण्याचे केंद्र */}
//         <TouchableOpacity
//           style={[
//             styles.btn,
//             { backgroundColor: "#16a34a" },
//           ]}
//           activeOpacity={0.8}
//           onPress={() => onNavigate("GreenPage2")}
//         >
//           <Text style={styles.text}>
//             वधू-वर सूची मिळवण्याचे केंद्र
//           </Text>
//         </TouchableOpacity>

//       </View>

//     </View>
//   );
// }


// const styles = StyleSheet.create({

//   container: {
//     padding: 15,
//   },

//   row: {
//     flexDirection: "row",

//     justifyContent: "space-between",

//     marginBottom: 10,
//   },

//   btn: {
//     flex: 1,

//     padding: 15,

//     borderRadius: 10,

//     alignItems: "center",

//     justifyContent: "center",

//     marginHorizontal: 5,
//   },

//   text: {
//     color: "#fff",

//     fontWeight: "bold",

//     fontSize: 13,

//     textAlign: "center",
//   },

// });










import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ActionButtons({ onNavigate }) {
  // Safe guard: avoids a crash if the prop is not passed
  const go = (screen) => {
    if (typeof onNavigate === "function") {
      onNavigate(screen);
    } else {
      console.warn("ActionButtons: onNavigate prop is missing");
    }
  };

  return (
    <View style={styles.container}>
      {/* ================= ROW 1 ================= */}
      <View style={styles.row}>
        {/* RED - वधू-वर नोंदणी 2026 -> RegistrationScreen */}
        <TouchableOpacity
          style={[styles.btn, styles.red]}
          activeOpacity={0.8}
          onPress={() => go("Registration")}
        >
          <Text style={styles.text}>(वधू-वर नोंदणी २०२६) Register Now</Text>
        </TouchableOpacity>

        {/* GREEN - 2026 सूची कुरिअर मागवा */}
        <TouchableOpacity
          style={[styles.btn, styles.green]}
          activeOpacity={0.8}
          onPress={() => go("GreenPage1")}
        >
          <Text style={styles.text}>वधू-वर २०२६ सूची कुरिअर मागवा (Courier)</Text>
        </TouchableOpacity>
      </View>

      {/* ================= ROW 2 ================= */}
      <View style={styles.row}>
        {/* RED - ऑनलाईन प्रवेश */}
        <TouchableOpacity
          style={[styles.btn, styles.red]}
          activeOpacity={0.8}
          onPress={() => go("RedPage2")}
        >
          <Text style={styles.text}>वधू-वर मेळावा २०२६ ऑनलाइन प्रवेश घ्या</Text>
        </TouchableOpacity>

        {/* GREEN - सूची मिळण्याचे केंद्र */}
        <TouchableOpacity
          style={[styles.btn, styles.green]}
          activeOpacity={0.8}
          onPress={() => go("GreenPage2")}
        >
          <Text style={styles.text}>वधू-वर सूची मिळवण्याचे केंद्र</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  btn: {
    flex: 1,
    minHeight: 64,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  red: { backgroundColor: "#dc2626" },
  green: { backgroundColor: "#16a34a" },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
    textAlign: "center",
  },
});