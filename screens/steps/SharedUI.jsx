import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const Field = ({ label, placeholder, value, onChangeText, keyboardType, required }) => (
  <View style={f.wrap}>
    <Text style={f.label}>{label}{required && <Text style={f.req}> *</Text>}</Text>
    <TextInput
      style={f.input}
      placeholder={placeholder || label}
      placeholderTextColor="#bbb"
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType || "default"}
    />
  </View>
);

const f = StyleSheet.create({
  wrap:  { marginBottom: 12 },
  label: { fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 },
  req:   { color: "red" },
  input: { backgroundColor: "#f3f4f6", borderRadius: 10, padding: 12, fontSize: 14, color: "#222", borderWidth: 1, borderColor: "#e5e7eb" },
});

export const SectionHeader = ({ title }) => (
  <LinearGradient colors={["#f97316", "#fb923c"]} style={sh.bar}>
    <Text style={sh.text}>{title}</Text>
  </LinearGradient>
);

const sh = StyleSheet.create({
  bar:  { borderRadius: 10, paddingVertical: 12, paddingHorizontal: 16, marginBottom: 16, marginTop: 8 },
  text: { color: "#fff", fontWeight: "bold", fontSize: 15, textAlign: "center" },
});

export const sharedStyles = StyleSheet.create({
  row2: { flexDirection: "row", marginBottom: 0 },
  row3: { flexDirection: "row", marginBottom: 0 },
  hint: { color: "#f97316", fontSize: 11, marginTop: 4 },
  photoBtn: { backgroundColor: "#f3f4f6", borderRadius: 10, padding: 14, borderWidth: 1, borderColor: "#e5e7eb", alignItems: "center" },
  photoBtnText: { color: "#666", fontWeight: "600" },
  subSectionLabel: { fontSize: 13, fontWeight: "700", color: "#333", marginBottom: 6, marginTop: 4 },
  marathiPad: { backgroundColor: "#f3f4f6", borderRadius: 10, padding: 12, fontSize: 14, color: "#222", borderWidth: 1, borderColor: "#e5e7eb", height: 70, textAlignVertical: "top" },
  marathiPadWrap: { marginBottom: 12 }
});

















