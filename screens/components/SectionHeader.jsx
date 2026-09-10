import React from "react";
import { Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SectionHeader({ title }) {
  return (
    <LinearGradient colors={["#f97316", "#fb923c"]} style={styles.bar}>
      <Text style={styles.text}>{title}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  bar: { padding: 12, borderRadius: 10, marginBottom: 12 },
  text: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});