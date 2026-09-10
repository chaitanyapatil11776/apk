import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function StepBar({ current, total }) {
  return (
    <View style={styles.row}>
      {Array.from({ length: total }).map((_, i) => (
        <React.Fragment key={i}>
          <View style={[styles.circle, i < current && styles.done]}>
            <Text style={styles.num}>{i + 1}</Text>
          </View>
          {i < total - 1 && <View style={styles.line} />}
        </React.Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "center", marginVertical: 10 },
  circle: { width: 30, height: 30, borderRadius: 15, backgroundColor: "#ccc", alignItems: "center", justifyContent: "center" },
  done: { backgroundColor: "#f97316" },
  num: { color: "#fff", fontWeight: "bold" },
  line: { width: 30, height: 3, backgroundColor: "#ccc" },
});