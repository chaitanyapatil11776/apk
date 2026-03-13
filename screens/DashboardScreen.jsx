import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Alert,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DashboardScreen({ navigation }) {

  // 🔥 Disable hardware back & show logout alert
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          "Logout",
          "Do you want to logout?",
          [
            { text: "Cancel", style: "cancel" },
            {
              text: "Yes",
              onPress: () => navigation.replace("Login"),
            },
          ]
        );
        return true;
      };

      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => subscription.remove();
    }, [])
  );

  const steps = [
    { id: 1, title: "Basic Details", status: "Complete" },
    { id: 2, title: "Qualification & Employment Uploading", status: "Complete" },
    { id: 3, title: "Personal Details", status: "Pending" },
    { id: 4, title: "Expectation & Parent Details", status: "Pending" },
    { id: 5, title: "Submitted for Verification", status: "Pending" },
    { id: 6, title: "Approval Status", status: "Pending" },
    { id: 7, title: "Ready for Print Status", status: "Pending" },
  ];

  return (
    <SafeAreaView style={styles.mainContainer} edges={["bottom"]}>

      {/* Scroll Content */}
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.header}>Application Progress</Text>

          {steps.map((item) => {
            const isComplete = item.status === "Complete";

            return (
              <View key={item.id} style={styles.card}>
                <View
                  style={[
                    styles.circle,
                    {
                      backgroundColor: isComplete
                        ? "#22c55e"
                        : "#e5e7eb",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.circleText,
                      { color: isComplete ? "#fff" : "#374151" },
                    ]}
                  >
                    {item.id}
                  </Text>
                </View>

                <View style={styles.details}>
                  <Text style={styles.title}>{item.title}</Text>

                  <View
                    style={[
                      styles.badge,
                      {
                        backgroundColor: isComplete
                          ? "#dcfce7"
                          : "#fef3c7",
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.badgeText,
                        {
                          color: isComplete
                            ? "#15803d"
                            : "#b45309",
                        },
                      ]}
                    >
                      {item.status}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>

      {/* Bottom Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Account")}
        >
          <Text style={styles.buttonText}>
            View Account Details
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },

  container: {
    padding: 20,
  },

  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
    color: "#1e293b",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  circle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  circleText: {
    fontWeight: "bold",
    fontSize: 16,
  },

  details: {
    marginLeft: 15,
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 8,
    color: "#334155",
  },

  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  badgeText: {
    fontWeight: "bold",
    fontSize: 12,
  },
buttonContainer: {
  paddingHorizontal: 20,
  paddingTop: 10,
  paddingBottom: 10,   // 👈 smaller bottom padding
  backgroundColor: "#f1f5f9",
},

  button: {
    backgroundColor: "#2563eb",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
    elevation: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});