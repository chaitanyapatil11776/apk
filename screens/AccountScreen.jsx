import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
  BackHandler,
  Alert,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountScreen({ navigation }) {

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          "Logout",
          "Do you want to logout?",
          [
            { text: "Cancel", style: "cancel" },
            { text: "Yes", onPress: handleLogout },
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

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerBox}>
          <Text style={styles.headerText}>Account Details</Text>
        </View>

        {/* Content */}
        <View style={styles.contentBox}>
          <Text style={styles.text}>
            Profile Status : <Text style={styles.bold}>Incomplete Profile</Text>
          </Text>

          <Text style={styles.text}>Registration Date :</Text>

          <Text style={styles.text}>
            Account Expiry Date : Every 30th April
          </Text>

          <Text style={styles.text}>
            Upcoming Suchi Booklet Printing Date : 15-Oct-2025
          </Text>

          <View style={styles.spacing} />

          <Text style={styles.question}>
            Will my Profile be print in this suchi ?
          </Text>

          <Text style={styles.answer}>
            If your profile is approved then it will be printed in current year suchi.
          </Text>

          <View style={styles.spacing} />

          <Text style={styles.marathiTitle}>वधू-वर मेळावा 2025</Text>
          <Text style={styles.marathiText}>तारीख : 08 नोव्हेंबर 2025</Text>
          <Text style={styles.marathiText}>वेळ : सकाळी 9.00 ते सायं. 5.00</Text>
          <Text style={styles.marathiText}>
            स्थळ निवृत्ती लॉन्स बँक्वेट, रावेत, पिंपरी-चिंचवड
          </Text>
          <Text style={styles.marathiText}>संपर्क : 02071173733</Text>

          <View style={styles.spacing} />

          <Text style={styles.question}>
            Whether online profile search facility is available on Website ?
          </Text>

          <Text style={styles.answer}>
            NOT on website but you can download our Android Application from Google Play Store.
          </Text>

          <TouchableOpacity
            style={styles.playButton}
            onPress={() => Linking.openURL("https://play.google.com")}
          >
            <Text style={styles.playButtonText}>Open Google Play</Text>
          </TouchableOpacity>

          {/* 🔵 Dashboard Button */}
          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Text style={styles.homeButtonText}>Go To Dashboard</Text>
          </TouchableOpacity>

          {/* 🔴 Logout Button */}
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() =>
              Alert.alert("Logout", "Do you want to logout?", [
                { text: "Cancel", style: "cancel" },
                { text: "Yes", onPress: handleLogout },
              ])
            }
          >
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>

          {/* 👇 Extra Bottom Space */}
          <View style={{ height: 40 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  container: {
    flexGrow: 1,
  },

  headerBox: {
    backgroundColor: "#f97316",
    paddingVertical: 18,
    alignItems: "center",
  },

  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  contentBox: {
    backgroundColor: "#e5e5e5",
    padding: 18,
    paddingBottom: 25, // extra spacing
  },

  text: {
    fontSize: 14,
    marginBottom: 6,
  },

  bold: {
    fontWeight: "bold",
  },

  question: {
    fontWeight: "bold",
    marginTop: 15,
  },

  answer: {
    marginTop: 6,
    fontSize: 14,
  },

  marathiTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
  },

  marathiText: {
    fontSize: 14,
    marginBottom: 4,
  },

  spacing: {
    height: 18,
  },

  playButton: {
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    alignItems: "center",
  },

  playButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  homeButton: {
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
  },

  homeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  logoutButton: {
    backgroundColor: "#dc2626",
    padding: 16,
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },

  logoutButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});