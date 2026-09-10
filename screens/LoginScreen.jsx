import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  BackHandler,
  Animated,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import accountApi from "../api/accountApi";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const shakeAnim = useRef(new Animated.Value(0)).current;

  const triggerShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: -8, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 8, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -6, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 6, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };

  const handleLogin = async () => {
    const userLoginId = identifier.trim();
    const userPassword = password.trim();

    if (!userLoginId) {
      setErrorMessage("Please enter your Email, Mobile Number, or User ID.");
      triggerShake();
      return;
    }

    if (!userPassword) {
      setErrorMessage("Please enter your Password.");
      triggerShake();
      return;
    }

    // Offline / Admin demo fallback
    if (userLoginId === "admin@gmail.com" && userPassword === "123456") {
      setErrorMessage("");
      navigation.reset({ index: 0, routes: [{ name: "Menu" }] });
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");

      const res = await accountApi.loginUser(userLoginId, userPassword);

      console.log("LOGIN SUCCESS RESULT:", res);

      if (res?.Success === true || res?.success === true || res?.Token || res?.token) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Menu", params: { user: res?.Data || res?.data || res } }],
        });
      } else {
        const msg =
          res?.Message ||
          res?.message ||
          "Invalid login credentials. Please check your username and password.";
        setErrorMessage(msg);
        triggerShake();
      }
    } catch (error) {
      console.log("LOGIN FAILED:", error.message);
      const serverMsg =
        error.response?.data?.Message ||
        error.response?.data?.message ||
        error.response?.data?.title ||
        "The login ID or password you entered is incorrect. Please try again.";
      setErrorMessage(serverMsg);
      triggerShake();
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        navigation.navigate("Home");
        return true;
      };
      const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () => subscription.remove();
    }, [navigation])
  );

  return (
    <LinearGradient colors={["#c2410c", "#ea580c", "#f97316"]} style={styles.gradient}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <Animated.View style={[styles.card, { transform: [{ translateX: shakeAnim }] }]}>
          {/* Top Logo / Icon */}
          <View style={styles.iconCircle}>
            <MaterialCommunityIcons name="account-heart" size={36} color="#ea580c" />
          </View>

          <Text style={styles.title}>Welcome Back 👋</Text>
          <Text style={styles.marathiSub}>समता भ्रातृ मंडळ (पिंपरी - चिंचवड)</Text>
          <Text style={styles.subtitle}>Login with your registered credentials</Text>

          {/* ── ERROR POPUP ── */}
          {Boolean(errorMessage) && (
            <View style={styles.errorBox}>
              <View style={styles.errorIcon}>
                <Text style={styles.errorIconText}>!</Text>
              </View>
              <View style={styles.errorTextWrap}>
                <Text style={styles.errorTitle}>Authentication Failed</Text>
                <Text style={styles.errorMsg}>{errorMessage}</Text>
              </View>
              <TouchableOpacity onPress={() => setErrorMessage("")} style={styles.errorClose}>
                <Text style={styles.errorCloseText}>✕</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* USER LOGIN ID / EMAIL / MOBILE */}
          <View style={styles.inputWrap}>
            <Ionicons name="person-outline" size={18} color="#64748b" style={styles.inputIcon} />
            <TextInput
              placeholder="Email, Mobile, or User ID"
              placeholderTextColor="#94a3b8"
              style={styles.textInput}
              value={identifier}
              onChangeText={(v) => {
                setIdentifier(v);
                setErrorMessage("");
              }}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* PASSWORD */}
          <View style={styles.inputWrap}>
            <Ionicons name="lock-closed-outline" size={18} color="#64748b" style={styles.inputIcon} />
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor="#94a3b8"
              style={styles.textInput}
              value={password}
              onChangeText={(v) => {
                setPassword(v);
                setErrorMessage("");
              }}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeBtn}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#64748b"
              />
            </TouchableOpacity>
          </View>

          {/* LOGIN BUTTON */}
          <TouchableOpacity
            style={[styles.loginButton, loading && styles.buttonDisabled]}
            onPress={handleLogin}
            disabled={loading}
            activeOpacity={0.85}
          >
            {loading ? (
              <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <ActivityIndicator size="small" color="#ffffff" />
                <Text style={styles.loginButtonText}>Authenticating...</Text>
              </View>
            ) : (
              <Text style={styles.loginButtonText}>Login</Text>
            )}
          </TouchableOpacity>

          {/* OR DIVIDER */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* NEW REGISTRATION BUTTON */}
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate("Registration")}
            activeOpacity={0.85}
          >
            <Text style={styles.registerButtonText}>+ New Candidate Registration</Text>
          </TouchableOpacity>

          <Text style={styles.registerHint}>
            New candidate? Register your profile for Vadhu-Var Melawa.
          </Text>

          {/* BACK TO HOME */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("Home")}
            activeOpacity={0.7}
          >
            <Text style={styles.backText}>Go Back To Home</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 26,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 10,
    alignItems: "center",
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#fff7ed",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#fed7aa",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0f172a",
    textAlign: "center",
  },
  marathiSub: {
    fontSize: 13,
    fontWeight: "600",
    color: "#c2410c",
    textAlign: "center",
    marginTop: 2,
  },
  subtitle: {
    textAlign: "center",
    color: "#64748b",
    fontSize: 13,
    marginBottom: 20,
    marginTop: 4,
  },

  inputWrap: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    borderWidth: 1.2,
    borderColor: "#cbd5e1",
    borderRadius: 14,
    paddingHorizontal: 12,
    marginBottom: 14,
  },
  inputIcon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14.5,
    color: "#0f172a",
  },
  eyeBtn: {
    padding: 6,
  },

  loginButton: {
    width: "100%",
    backgroundColor: "#ea580c",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 6,
    elevation: 3,
    shadowColor: "#ea580c",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  loginButtonText: {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: 16,
    letterSpacing: 0.3,
  },

  divider: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#e2e8f0",
  },
  dividerText: {
    marginHorizontal: 12,
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: "700",
  },

  registerButton: {
    width: "100%",
    backgroundColor: "#16a34a",
    paddingVertical: 13,
    borderRadius: 14,
    alignItems: "center",
    elevation: 2,
  },
  registerButtonText: {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: 15,
  },
  registerHint: {
    textAlign: "center",
    color: "#64748b",
    fontSize: 11.5,
    marginTop: 8,
    marginBottom: 4,
    lineHeight: 16,
  },
  backButton: {
    marginTop: 14,
    padding: 6,
  },
  backText: {
    color: "#c2410c",
    fontWeight: "700",
    fontSize: 13.5,
  },

  errorBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fef2f2",
    borderWidth: 1,
    borderColor: "#fca5a5",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    gap: 8,
  },
  errorIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#dc2626",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
  },
  errorIconText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 12,
  },
  errorTextWrap: {
    flex: 1,
  },
  errorTitle: {
    fontSize: 12.5,
    fontWeight: "700",
    color: "#991b1b",
    marginBottom: 2,
  },
  errorMsg: {
    fontSize: 12,
    color: "#b91c1c",
    lineHeight: 16,
  },
  errorClose: {
    padding: 2,
  },
  errorCloseText: {
    fontSize: 12,
    color: "#b91c1c",
    fontWeight: "700",
  },
});
