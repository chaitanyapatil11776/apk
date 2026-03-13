import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ onMenuPress }) {
  return (
    <LinearGradient
      colors={["#e53935", "#f9a825"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <View style={styles.leftSection}>
        <Image
          source={require("../assets/icon.png")}
          style={styles.logo}
        />
        <View>
          <Text style={styles.title}>समता भ्रातृ मंडळ</Text>
          <Text style={styles.subtitle}>पिंपरी चिंचवड, पुणे</Text>
        </View>
      </View>

      <TouchableOpacity onPress={onMenuPress}>
        <Ionicons name="menu" size={28} color="#fff" />
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 45,
    height: 45,
    marginRight: 10,
    borderRadius: 25,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#fff",
    fontSize: 12,
  },
});
