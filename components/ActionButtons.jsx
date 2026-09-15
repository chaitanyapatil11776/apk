import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ActionButtons() {
  return (
    <View style={styles.container}>

      {/* Row 1 */}
      <View style={styles.row}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "#dc2626" }]}>
          <Text style={styles.text}>वधू-वर नोंदणी 2026</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, { backgroundColor: "#16a34a" }]}>
          <Text style={styles.text}>2026 सूची मागवा</Text>
        </TouchableOpacity>
      </View>

      {/* Row 2 */}
      <View style={styles.row}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "#dc2626" }]}>
          <Text style={styles.text}>ऑनलाईन प्रवेश फी</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, { backgroundColor: "#16a34a" }]}>
          <Text style={styles.text}>सूची मिळण्याचे केंद्र</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  btn: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
    textAlign: "center",
  },
});
