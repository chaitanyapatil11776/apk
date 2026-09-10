// import React from "react";
// import { View, Text, TextInput, StyleSheet } from "react-native";

// export default function Field({ label, value, onChangeText, placeholder, keyboardType, required }) {
//   return (
//     <View style={styles.wrap}>
//       <Text style={styles.label}>
//         {label}{required && <Text style={styles.req}> *</Text>}
//       </Text>
//       <TextInput
//         style={styles.input}
//         value={value || ""}
//         onChangeText={onChangeText}
//         placeholder={placeholder || label}
//         placeholderTextColor="#bbb"
//         keyboardType={keyboardType || "default"}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrap: { marginBottom: 12 },
//   label: { fontSize: 13, fontWeight: "600" },
//   req: { color: "red" },
//   input: {
//     backgroundColor: "#f3f4f6",
//     padding: 12,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "#e5e7eb",
//   },
// });










// components/Field.js - CREATE THIS IF MISSING

import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

/**
 * Reusable Field Component for form inputs
 * Supports text input, phone, email, numeric, and multiline inputs
 */
export default function Field({
  label = "",
  value = "",
  onChangeText = () => {},
  placeholder = "",
  keyboardType = "default",
  multiline = false,
  required = false,
  editable = true,
  secureTextEntry = false,
}) {
  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>
          {label} {required && <Text style={styles.required}>*</Text>}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          multiline && styles.multiline,
          !editable && styles.disabled
        ]}
        value={value || ""}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#bbb"
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={multiline ? 3 : 1}
        editable={editable}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    marginBottom: 12 
  },
  label: { 
    fontSize: 12, 
    fontWeight: "600", 
    color: "#333", 
    marginBottom: 5 
  },
  required: { 
    color: "red" 
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
    backgroundColor: "#fff",
    color: "#333",
  },
  multiline: { 
    height: 100, 
    textAlignVertical: "top",
    paddingTop: 10
  },
  disabled: {
    backgroundColor: "#f5f5f5",
    color: "#999",
  },
});