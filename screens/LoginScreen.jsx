// // import React, { useState, useRef, useCallback } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TouchableOpacity,
// //   TextInput,
// //   KeyboardAvoidingView,
// //   Platform,
// //   BackHandler,
// //   Animated,
// //   ActivityIndicator,
// //   Alert,
// // } from "react-native";
// // import { useNavigation, useFocusEffect } from "@react-navigation/native";
// // import { LinearGradient } from "expo-linear-gradient";
// // import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// // import accountApi from "../api/accountApi";

// // export default function LoginScreen() {
// //   const navigation = useNavigation();
// //   const [identifier, setIdentifier] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [errorMessage, setErrorMessage] = useState("");

// //   const shakeAnim = useRef(new Animated.Value(0)).current;

// //   const triggerShake = () => {
// //     Animated.sequence([
// //       Animated.timing(shakeAnim, { toValue: -8, duration: 50, useNativeDriver: true }),
// //       Animated.timing(shakeAnim, { toValue: 8, duration: 50, useNativeDriver: true }),
// //       Animated.timing(shakeAnim, { toValue: -6, duration: 50, useNativeDriver: true }),
// //       Animated.timing(shakeAnim, { toValue: 6, duration: 50, useNativeDriver: true }),
// //       Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
// //     ]).start();
// //   };

// //   const handleLogin = async () => {
// //     const userLoginId = identifier.trim();
// //     const userPassword = password.trim();

// //     if (!userLoginId) {
// //       setErrorMessage("Please enter your Email, Mobile Number, or User ID.");
// //       triggerShake();
// //       return;
// //     }

// //     if (!userPassword) {
// //       setErrorMessage("Please enter your Password.");
// //       triggerShake();
// //       return;
// //     }

// //     // Offline / Admin demo fallback
// //     if (userLoginId === "admin@gmail.com" && userPassword === "123456") {
// //       setErrorMessage("");
// //       navigation.reset({ index: 0, routes: [{ name: "Menu" }] });
// //       return;
// //     }

// //     try {
// //       setLoading(true);
// //       setErrorMessage("");

// //       const res = await accountApi.loginUser(userLoginId, userPassword);

// //       console.log("LOGIN SUCCESS RESULT:", res);

// //       if (res?.Success === true || res?.success === true || res?.Token || res?.token) {
// //         navigation.reset({
// //           index: 0,
// //           routes: [{ name: "Menu", params: { user: res?.Data || res?.data || res } }],
// //         });
// //       } else {
// //         const msg =
// //           res?.Message ||
// //           res?.message ||
// //           "Invalid login credentials. Please check your username and password.";
// //         setErrorMessage(msg);
// //         triggerShake();
// //       }
// //     } catch (error) {
// //       console.log("LOGIN FAILED:", error.message);
// //       const serverMsg =
// //         error.response?.data?.Message ||
// //         error.response?.data?.message ||
// //         error.response?.data?.title ||
// //         "The login ID or password you entered is incorrect. Please try again.";
// //       setErrorMessage(serverMsg);
// //       triggerShake();
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useFocusEffect(
// //     useCallback(() => {
// //       const onBackPress = () => {
// //         navigation.navigate("Home");
// //         return true;
// //       };
// //       const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress);
// //       return () => subscription.remove();
// //     }, [navigation])
// //   );

// //   return (
// //     <LinearGradient colors={["#c2410c", "#ea580c", "#f97316"]} style={styles.gradient}>
// //       <KeyboardAvoidingView
// //         behavior={Platform.OS === "ios" ? "padding" : undefined}
// //         style={styles.container}
// //       >
// //         <Animated.View style={[styles.card, { transform: [{ translateX: shakeAnim }] }]}>
// //           {/* Top Logo / Icon */}
// //           <View style={styles.iconCircle}>
// //             <MaterialCommunityIcons name="account-heart" size={36} color="#ea580c" />
// //           </View>

// //           <Text style={styles.title}>Welcome Back 👋</Text>
// //           <Text style={styles.marathiSub}>समता भ्रातृ मंडळ (पिंपरी - चिंचवड)</Text>
// //           <Text style={styles.subtitle}>Login with your registered credentials</Text>

// //           {/* ── ERROR POPUP ── */}
// //           {Boolean(errorMessage) && (
// //             <View style={styles.errorBox}>
// //               <View style={styles.errorIcon}>
// //                 <Text style={styles.errorIconText}>!</Text>
// //               </View>
// //               <View style={styles.errorTextWrap}>
// //                 <Text style={styles.errorTitle}>Authentication Failed</Text>
// //                 <Text style={styles.errorMsg}>{errorMessage}</Text>
// //               </View>
// //               <TouchableOpacity onPress={() => setErrorMessage("")} style={styles.errorClose}>
// //                 <Text style={styles.errorCloseText}>✕</Text>
// //               </TouchableOpacity>
// //             </View>
// //           )}

// //           {/* USER LOGIN ID / EMAIL / MOBILE */}
// //           <View style={styles.inputWrap}>
// //             <Ionicons name="person-outline" size={18} color="#64748b" style={styles.inputIcon} />
// //             <TextInput
// //               placeholder="Email, Mobile, or User ID"
// //               placeholderTextColor="#94a3b8"
// //               style={styles.textInput}
// //               value={identifier}
// //               onChangeText={(v) => {
// //                 setIdentifier(v);
// //                 setErrorMessage("");
// //               }}
// //               autoCapitalize="none"
// //               autoCorrect={false}
// //             />
// //           </View>

// //           {/* PASSWORD */}
// //           <View style={styles.inputWrap}>
// //             <Ionicons name="lock-closed-outline" size={18} color="#64748b" style={styles.inputIcon} />
// //             <TextInput
// //               placeholder="Enter Password"
// //               placeholderTextColor="#94a3b8"
// //               style={styles.textInput}
// //               value={password}
// //               onChangeText={(v) => {
// //                 setPassword(v);
// //                 setErrorMessage("");
// //               }}
// //               secureTextEntry={!showPassword}
// //               autoCapitalize="none"
// //             />
// //             <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeBtn}>
// //               <Ionicons
// //                 name={showPassword ? "eye-off-outline" : "eye-outline"}
// //                 size={20}
// //                 color="#64748b"
// //               />
// //             </TouchableOpacity>
// //           </View>

// //           {/* LOGIN BUTTON */}
// //           <TouchableOpacity
// //             style={[styles.loginButton, loading && styles.buttonDisabled]}
// //             onPress={handleLogin}
// //             disabled={loading}
// //             activeOpacity={0.85}
// //           >
// //             {loading ? (
// //               <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
// //                 <ActivityIndicator size="small" color="#ffffff" />
// //                 <Text style={styles.loginButtonText}>Authenticating...</Text>
// //               </View>
// //             ) : (
// //               <Text style={styles.loginButtonText}>Login</Text>
// //             )}
// //           </TouchableOpacity>

// //           {/* OR DIVIDER */}
// //           <View style={styles.divider}>
// //             <View style={styles.dividerLine} />
// //             <Text style={styles.dividerText}>OR</Text>
// //             <View style={styles.dividerLine} />
// //           </View>

// //           {/* NEW REGISTRATION BUTTON */}
// //           <TouchableOpacity
// //             style={styles.registerButton}
// //             onPress={() => navigation.navigate("Registration")}
// //             activeOpacity={0.85}
// //           >
// //             <Text style={styles.registerButtonText}>+ New Candidate Registration</Text>
// //           </TouchableOpacity>

// //           <Text style={styles.registerHint}>
// //             New candidate? Register your profile for Vadhu-Var Melawa.
// //           </Text>

// //           {/* BACK TO HOME */}
// //           <TouchableOpacity
// //             style={styles.backButton}
// //             onPress={() => navigation.navigate("Home")}
// //             activeOpacity={0.7}
// //           >
// //             <Text style={styles.backText}>Go Back To Home</Text>
// //           </TouchableOpacity>
// //         </Animated.View>
// //       </KeyboardAvoidingView>
// //     </LinearGradient>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   gradient: {
// //     flex: 1,
// //   },
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     padding: 20,
// //   },
// //   card: {
// //     backgroundColor: "#ffffff",
// //     padding: 26,
// //     borderRadius: 24,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 6 },
// //     shadowOpacity: 0.15,
// //     shadowRadius: 12,
// //     elevation: 10,
// //     alignItems: "center",
// //   },
// //   iconCircle: {
// //     width: 64,
// //     height: 64,
// //     borderRadius: 32,
// //     backgroundColor: "#fff7ed",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginBottom: 12,
// //     borderWidth: 1,
// //     borderColor: "#fed7aa",
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: "800",
// //     color: "#0f172a",
// //     textAlign: "center",
// //   },
// //   marathiSub: {
// //     fontSize: 13,
// //     fontWeight: "600",
// //     color: "#c2410c",
// //     textAlign: "center",
// //     marginTop: 2,
// //   },
// //   subtitle: {
// //     textAlign: "center",
// //     color: "#64748b",
// //     fontSize: 13,
// //     marginBottom: 20,
// //     marginTop: 4,
// //   },

// //   inputWrap: {
// //     width: "100%",
// //     flexDirection: "row",
// //     alignItems: "center",
// //     backgroundColor: "#f8fafc",
// //     borderWidth: 1.2,
// //     borderColor: "#cbd5e1",
// //     borderRadius: 14,
// //     paddingHorizontal: 12,
// //     marginBottom: 14,
// //   },
// //   inputIcon: {
// //     marginRight: 8,
// //   },
// //   textInput: {
// //     flex: 1,
// //     paddingVertical: 12,
// //     fontSize: 14.5,
// //     color: "#0f172a",
// //   },
// //   eyeBtn: {
// //     padding: 6,
// //   },

// //   loginButton: {
// //     width: "100%",
// //     backgroundColor: "#ea580c",
// //     paddingVertical: 14,
// //     borderRadius: 14,
// //     alignItems: "center",
// //     marginTop: 6,
// //     elevation: 3,
// //     shadowColor: "#ea580c",
// //     shadowOpacity: 0.25,
// //     shadowRadius: 6,
// //     shadowOffset: { width: 0, height: 3 },
// //   },
// //   buttonDisabled: {
// //     opacity: 0.6,
// //   },
// //   loginButtonText: {
// //     color: "#ffffff",
// //     fontWeight: "800",
// //     fontSize: 16,
// //     letterSpacing: 0.3,
// //   },

// //   divider: {
// //     width: "100%",
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginVertical: 16,
// //   },
// //   dividerLine: {
// //     flex: 1,
// //     height: 1,
// //     backgroundColor: "#e2e8f0",
// //   },
// //   dividerText: {
// //     marginHorizontal: 12,
// //     color: "#94a3b8",
// //     fontSize: 12,
// //     fontWeight: "700",
// //   },

// //   registerButton: {
// //     width: "100%",
// //     backgroundColor: "#16a34a",
// //     paddingVertical: 13,
// //     borderRadius: 14,
// //     alignItems: "center",
// //     elevation: 2,
// //   },
// //   registerButtonText: {
// //     color: "#ffffff",
// //     fontWeight: "800",
// //     fontSize: 15,
// //   },
// //   registerHint: {
// //     textAlign: "center",
// //     color: "#64748b",
// //     fontSize: 11.5,
// //     marginTop: 8,
// //     marginBottom: 4,
// //     lineHeight: 16,
// //   },
// //   backButton: {
// //     marginTop: 14,
// //     padding: 6,
// //   },
// //   backText: {
// //     color: "#c2410c",
// //     fontWeight: "700",
// //     fontSize: 13.5,
// //   },

// //   errorBox: {
// //     width: "100%",
// //     flexDirection: "row",
// //     alignItems: "flex-start",
// //     backgroundColor: "#fef2f2",
// //     borderWidth: 1,
// //     borderColor: "#fca5a5",
// //     borderRadius: 12,
// //     padding: 12,
// //     marginBottom: 16,
// //     gap: 8,
// //   },
// //   errorIcon: {
// //     width: 20,
// //     height: 20,
// //     borderRadius: 10,
// //     backgroundColor: "#dc2626",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginTop: 1,
// //   },
// //   errorIconText: {
// //     color: "#ffffff",
// //     fontWeight: "bold",
// //     fontSize: 12,
// //   },
// //   errorTextWrap: {
// //     flex: 1,
// //   },
// //   errorTitle: {
// //     fontSize: 12.5,
// //     fontWeight: "700",
// //     color: "#991b1b",
// //     marginBottom: 2,
// //   },
// //   errorMsg: {
// //     fontSize: 12,
// //     color: "#b91c1c",
// //     lineHeight: 16,
// //   },
// //   errorClose: {
// //     padding: 2,
// //   },
// //   errorCloseText: {
// //     fontSize: 12,
// //     color: "#b91c1c",
// //     fontWeight: "700",
// //   },
// // });









// // new
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import accountApi from "../api/accountApi";

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [secureText, setSecureText] = useState(true);

//   const handleLogin = async () => {
//     if (!email.trim()) {
//       Alert.alert("Error", "Please enter your email or mobile number.");
//       return;
//     }
//     if (!password.trim()) {
//       Alert.alert("Error", "Please enter your password.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await accountApi.loginUser(email.trim(), password.trim());

//       if (res.Success && res.Data) {
//         const candidateData = res.Data;
//         console.log("LOGGED IN CANDIDATE ID:", candidateData.CandidateId);

//         // Navigate to Dashboard with candidate data
//         navigation.reset({
//           index: 0,
//           routes: [
//             {
//               name: "Dashboard",
//               params: {
//                 candidateId: candidateData.CandidateId || 0,
//                 userId: candidateData.UserId || 0,
//                 userInfo: candidateData,
//               },
//             },
//           ],
//         });
//       } else {
//         Alert.alert("Login Failed", res.Message || "Unable to login. Please verify credentials.");
//       }
//     } catch (err) {
//       console.error("Login Screen Error:", err);
//       const msg =
//         err.response?.data?.Message ||
//         err.response?.data?.ErrorMessage ||
//         err.message ||
//         "An unexpected error occurred during login.";
//       Alert.alert("Login Failed", msg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === "ios" ? "padding" : undefined}
//         style={styles.container}
//       >
//         <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
//           {/* Header Branding */}
//           <View style={styles.header}>
//             <Text style={styles.headerTitle}>समता भातृ मंडळ</Text>
//             <Text style={styles.headerSub}>वधू-वर सूचक केंद्र (पोर्टल लॉगिन)</Text>
//           </View>

//           {/* Login Card */}
//           <View style={styles.card}>
//             <Text style={styles.cardTitle}>Login to Your Account</Text>
//             <Text style={styles.cardSubtitle}>Enter your registered email and password</Text>

//             {/* Email / UserLoginId */}
//             <View style={styles.inputGroup}>
//               <Text style={styles.label}>Email / User Login ID</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter Email or Mobile Number"
//                 placeholderTextColor="#9CA3AF"
//                 autoCapitalize="none"
//                 keyboardType="email-address"
//                 value={email}
//                 onChangeText={setEmail}
//                 editable={!loading}
//               />
//             </View>

//             {/* Password */}
//             <View style={styles.inputGroup}>
//               <Text style={styles.label}>Password</Text>
//               <View style={styles.passwordRow}>
//                 <TextInput
//                   style={[styles.input, styles.passwordInput]}
//                   placeholder="Enter password"
//                   placeholderTextColor="#9CA3AF"
//                   secureTextEntry={secureText}
//                   value={password}
//                   onChangeText={setPassword}
//                   editable={!loading}
//                 />
//                 <TouchableOpacity
//                   style={styles.showBtn}
//                   onPress={() => setSecureText(!secureText)}
//                 >
//                   <Text style={styles.showBtnText}>{secureText ? "Show" : "Hide"}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>

//             {/* Submit Button */}
//             <TouchableOpacity
//               style={[styles.loginBtn, loading && styles.loginBtnDisabled]}
//               onPress={handleLogin}
//               disabled={loading}
//               activeOpacity={0.8}
//             >
//               {loading ? (
//                 <ActivityIndicator color="#FFFFFF" />
//               ) : (
//                 <Text style={styles.loginBtnText}>Login</Text>
//               )}
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: "#831843" },
//   container: { flex: 1 },
//   scrollContent: {
//     flexGrow: 1,
//     justifyContent: "center",
//     padding: 20,
//     backgroundColor: "#F3F4F6",
//   },
//   header: { alignItems: "center", marginBottom: 24 },
//   headerTitle: { fontSize: 26, fontWeight: "800", color: "#831843", textAlign: "center" },
//   headerSub: { fontSize: 14, color: "#6B7280", marginTop: 4, textAlign: "center" },
//   card: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 12,
//     padding: 24,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 8,
//     elevation: 3,
//   },
//   cardTitle: { fontSize: 20, fontWeight: "700", color: "#1F2937" },
//   cardSubtitle: { fontSize: 13, color: "#6B7280", marginTop: 4, marginBottom: 20 },
//   inputGroup: { marginBottom: 16 },
//   label: { fontSize: 13, fontWeight: "600", color: "#374151", marginBottom: 6 },
//   input: {
//     height: 48,
//     borderWidth: 1,
//     borderColor: "#D1D5DB",
//     borderRadius: 8,
//     paddingHorizontal: 14,
//     fontSize: 15,
//     color: "#111827",
//     backgroundColor: "#F9FAFB",
//   },
//   passwordRow: { position: "relative", justifyContent: "center" },
//   passwordInput: { paddingRight: 60 },
//   showBtn: { position: "absolute", right: 14, top: 14 },
//   showBtnText: { fontSize: 13, color: "#831843", fontWeight: "700" },
//   loginBtn: {
//     backgroundColor: "#831843",
//     height: 50,
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 10,
//     elevation: 2,
//   },
//   loginBtnDisabled: { opacity: 0.65 },
//   loginBtnText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" },
// });




// mmm
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import accountApi from "../api/accountApi";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [secureText, setSecureText] = useState(true);

  const handleLogin = async () => {
    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email or mobile number.");
      return;
    }
    if (!password.trim()) {
      Alert.alert("Error", "Please enter your password.");
      return;
    }

    try {
      setLoading(true);
      const res = await accountApi.loginUser(email.trim(), password.trim());

      if (res.Success && res.Data) {
        const candidateData = res.Data;
        console.log("LOGGED IN CANDIDATE ID:", candidateData.CandidateId);

        navigation.reset({
          index: 0,
          routes: [
            {
              name: "Dashboard",
              params: {
                candidateId: candidateData.CandidateId || 0,
                userId: candidateData.UserId || 0,
                userInfo: candidateData,
              },
            },
          ],
        });
      } else {
        Alert.alert("Login Failed", res.Message || "Unable to login. Please verify credentials.");
      }
    } catch (err) {
      console.error("Login Screen Error:", err);
      const msg =
        err.response?.data?.Message ||
        err.response?.data?.ErrorMessage ||
        err.message ||
        "An unexpected error occurred during login.";
      Alert.alert("Login Failed", msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          <View style={styles.header}>
            <Text style={styles.headerTitle}>समता भातृ मंडळ</Text>
            <Text style={styles.headerSub}>वधू-वर सूचक केंद्र (पोर्टल लॉगिन)</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Login to Your Account</Text>
            <Text style={styles.cardSubtitle}>Enter your registered email and password</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email / User Login ID</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Email or Mobile Number"
                placeholderTextColor="#9CA3AF"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                editable={!loading}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordRow}>
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  placeholder="Enter password"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={secureText}
                  value={password}
                  onChangeText={setPassword}
                  editable={!loading}
                />
                <TouchableOpacity
                  style={styles.showBtn}
                  onPress={() => setSecureText(!secureText)}
                >
                  <Text style={styles.showBtnText}>{secureText ? "Show" : "Hide"}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.loginBtn, loading && styles.loginBtnDisabled]}
              onPress={handleLogin}
              disabled={loading}
              activeOpacity={0.8}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.loginBtnText}>Login</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#831843" },
  container: { flex: 1 },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F3F4F6",
  },
  header: { alignItems: "center", marginBottom: 24 },
  headerTitle: { fontSize: 26, fontWeight: "800", color: "#831843", textAlign: "center" },
  headerSub: { fontSize: 14, color: "#6B7280", marginTop: 4, textAlign: "center" },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: { fontSize: 20, fontWeight: "700", color: "#1F2937" },
  cardSubtitle: { fontSize: 13, color: "#6B7280", marginTop: 4, marginBottom: 20 },
  inputGroup: { marginBottom: 16 },
  label: { fontSize: 13, fontWeight: "600", color: "#374151", marginBottom: 6 },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 15,
    color: "#111827",
    backgroundColor: "#F9FAFB",
  },
  passwordRow: { position: "relative", justifyContent: "center" },
  passwordInput: { paddingRight: 60 },
  showBtn: { position: "absolute", right: 14, top: 14 },
  showBtnText: { fontSize: 13, color: "#831843", fontWeight: "700" },
  loginBtn: {
    backgroundColor: "#831843",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    elevation: 2,
  },
  loginBtnDisabled: { opacity: 0.65 },
  loginBtnText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" },
});