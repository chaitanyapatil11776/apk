import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  BackHandler,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "123456") {
      navigation.reset({ index: 0, routes: [{ name: "Dashboard" }] });
    } else {
      Alert.alert("Error", "Invalid Email or Password");
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
    }, [])
  );

  return (
    <LinearGradient colors={["#f97316", "#fb923c"]} style={styles.gradient}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.card}>
          <Text style={styles.title}>Welcome Back 👋</Text>
          <Text style={styles.subtitle}>Login to continue</Text>

          <TextInput
            placeholder="Enter Email"
            placeholderTextColor="#888"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#888"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* OR Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* ✅ NEW REGISTRATION BUTTON */}
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate("Registration")}
          >
            <Text style={styles.registerButtonText}>+ New Registration</Text>
          </TouchableOpacity>

          <Text style={styles.registerHint}>
            New candidate? Register to create your account.
          </Text>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.backText}>Go Back To Home</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: { flex: 1, justifyContent: "center", padding: 20 },
  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  title: { fontSize: 26, fontWeight: "bold", textAlign: "center" },
  subtitle: { textAlign: "center", color: "#666", marginBottom: 25, marginTop: 5 },
  input: {
    backgroundColor: "#f3f4f6",
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#f97316",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 5,
  },
  loginButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  divider: { flexDirection: "row", alignItems: "center", marginVertical: 16 },
  dividerLine: { flex: 1, height: 1, backgroundColor: "#e0e0e0" },
  dividerText: { marginHorizontal: 10, color: "#999", fontSize: 13 },
  registerButton: {
    backgroundColor: "#16a34a",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  registerButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  registerHint: {
    textAlign: "center",
    color: "#888",
    fontSize: 12,
    marginTop: 8,
    marginBottom: 4,
  },
  backButton: { marginTop: 15, alignItems: "center" },
  backText: { color: "#f97316", fontWeight: "600" },
});
