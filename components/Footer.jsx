import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

export default function Footer() {
  return (
    <>
      <LinearGradient
        colors={["#1f2937", "#111827"]}
        style={styles.container}
      >
        {/* App Name */}
        <Text style={styles.appName}>Samata Mandal</Text>

        {/* Short Description */}
        <Text style={styles.description}>
          Connecting community with events & updates.
        </Text>

        {/* Social Icons */}
        <View style={styles.socialRow}>
          <FontAwesome name="facebook" size={20} color="#fff" />
          <FontAwesome name="instagram" size={20} color="#fff" />
          <FontAwesome name="youtube" size={20} color="#fff" />
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Copyright */}
        <Text style={styles.bottomText}>
          © 2026 Samata Bhratru Mandal
        </Text>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  appName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  description: {
    color: "#9ca3af",
    textAlign: "center",
    fontSize: 13,
    marginBottom: 20,
  },
  socialRow: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#374151",
    marginVertical: 15,
  },
  bottomText: {
    color: "#9ca3af",
    fontSize: 12,
  },
});
