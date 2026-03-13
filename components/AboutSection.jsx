import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.heading}>समता भ्रातृ मंडळ</Text>
        <Text style={styles.subHeading}>पिंपरी चिंचवड, पुणे</Text>

        <Text style={styles.text}>
          समाजातील एकत्रित विकासासाठी 1996 मध्ये या मंडळाची स्थापना झाली.
        </Text>

        {/* SHOW EXTRA INFO WHEN CLICK */}
        {expanded && (
          <View style={styles.extraContent}>
            <Text style={styles.point}>
              १. शैक्षणिक: लहान मुलांना शिक्षणाची आवड व शिस्त निर्माण करण्यासाठी उपक्रम.
            </Text>

            <Text style={styles.point}>
              २. वैद्यकीय: गरजू रुग्णांसाठी आरोग्य शिबिरे व आर्थिक मदत.
            </Text>

            <Text style={styles.point}>
              ३. क्रीडा: मुलांच्या क्रीडा कौशल्यासाठी विविध स्पर्धा.
            </Text>

            <Text style={styles.point}>
              ४. उद्योगविषयक: उद्योजकांना मार्गदर्शन व प्रोत्साहन.
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={() => setExpanded(!expanded)}
        >
          <Text style={styles.buttonText}>
            {expanded ? "Show Less" : "Read More"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 20,
    elevation: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#e53935",
  },
  subHeading: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
    color: "#666",
  },
  text: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
    marginBottom: 10,
  },
  extraContent: {
    marginTop: 10,
  },
  point: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#f97316",
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 25,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
