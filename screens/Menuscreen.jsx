// // import React from "react";
// // import {
// //   View, Text, StyleSheet, ScrollView,
// //   TouchableOpacity, SafeAreaView, Alert,
// // } from "react-native";
// // import { LinearGradient } from "expo-linear-gradient";
// // import { useNavigation } from "@react-navigation/native";
// // import BottomNavBar from "../components/BottomNavBar";

// // const MENU_ITEMS = [
// //   { icon: "📅", title: "edit profile",  subtitle: "Book your event slot",       bg: "#fff3ec", border: "#f97316", screen: "SuchiBooking" },
// //   { icon: "ℹ️",  title: "About Us",       subtitle: "Know about us",              bg: "#ecf9f1", border: "#16a34a", screen: null           },
// //   { icon: "📞", title: "Contact Us",     subtitle: "Reach out to us",            bg: "#ecf0ff", border: "#4f46e5", screen: null           },
// //   { icon: "❓", title: "FAQ",            subtitle: "Frequently asked questions", bg: "#fef9ec", border: "#ca8a04", screen: null           },
// //   { icon: "👤", title: "My Profile",     subtitle: "View & edit your profile",   bg: "#fce4ff", border: "#a21caf", screen: "Profile"      },
// //   { icon: "📋", title: "My Account",     subtitle: "Bookings & payments",        bg: "#e4f0ff", border: "#2563eb", screen: "Account"      },
// // ];

// // export default function MenuScreen() {
// //   const navigation = useNavigation();

// //   const handlePress = (item) => {
// //     if (item.screen) {
// //       navigation.navigate(item.screen);
// //     } else {
// //       Alert.alert("Coming Soon", item.title + " page will be available soon!");
// //     }
// //   };

// //   const handleLogout = () => {
// //     Alert.alert("Logout", "Are you sure you want to logout?", [
// //       { text: "Cancel", style: "cancel" },
// //       {
// //         text: "Logout",
// //         style: "destructive",
// //         onPress: () => navigation.reset({ index: 0, routes: [{ name: "Home" }] }),
// //       },
// //     ]);
// //   };

// //   return (
// //     <SafeAreaView style={styles.safe}>

// //       <LinearGradient colors={["#f97316", "#fb923c"]} style={styles.header}>
// //         <View style={styles.headerRow}>
// //           <View style={styles.logoCircle}>
// //             <Text style={styles.logoEmoji}>🏛️</Text>
// //           </View>
// //           <View style={{ flex: 1 }}>
// //             <Text style={styles.headerTitle}>समता भ्रातृ मंडळ</Text>
// //             <Text style={styles.headerSub}>पिंपरी चिंचवड, पुणे</Text>
// //           </View>
// //           <TouchableOpacity style={styles.logoutIconBtn} onPress={handleLogout}>
// //             <Text style={styles.logoutIcon}>🚪</Text>
// //           </TouchableOpacity>
// //         </View>

// //         <View style={styles.welcomeStrip}>
// //           <Text style={styles.welcomeText}>👋 Welcome, Admin!</Text>
// //           <Text style={styles.welcomeSub}>What would you like to do today?</Text>
// //         </View>
// //       </LinearGradient>

// //       <ScrollView contentContainerStyle={styles.body} showsVerticalScrollIndicator={false}>

// //         <Text style={styles.sectionTitle}>📌 Main Menu</Text>

// //         <View style={styles.grid}>
// //           {MENU_ITEMS.map((item) => (
// //             <TouchableOpacity
// //               key={item.title}
// //               style={[styles.card, { backgroundColor: item.bg, borderLeftColor: item.border }]}
// //               onPress={() => handlePress(item)}
// //               activeOpacity={0.75}
// //             >
// //               <Text style={styles.cardIcon}>{item.icon}</Text>
// //               <Text style={styles.cardTitle}>{item.title}</Text>
// //               <Text style={styles.cardSub}>{item.subtitle}</Text>
// //               <Text style={[styles.cardArrow, { color: item.border }]}>→</Text>
// //             </TouchableOpacity>
// //           ))}
// //         </View>

// //         <View style={styles.announcementBox}>
// //           <Text style={styles.announcementTitle}>📢 Announcement</Text>
// //           <Text style={styles.announcementText}>
// //             Suchi Booking for the upcoming event is now open.{"\n"}Register before 5th April 2025.
// //           </Text>
// //           <TouchableOpacity
// //             style={styles.announcementBtn}
// //             onPress={() => navigation.navigate("SuchiBooking")}
// //           >
// //             <Text style={styles.announcementBtnText}>Book Now →</Text>
// //           </TouchableOpacity>
// //         </View>

// //         <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
// //           <Text style={styles.logoutBtnText}>🚪  Logout</Text>
// //         </TouchableOpacity>

// //       </ScrollView>

// //       <BottomNavBar />
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   safe:               { flex: 1, backgroundColor: "#f5f5f5" },
// //   header:             { paddingTop: 16, paddingBottom: 20, paddingHorizontal: 18 },
// //   headerRow:          { flexDirection: "row", alignItems: "center", marginBottom: 14 },
// //   logoCircle:         { width: 46, height: 46, borderRadius: 23, backgroundColor: "rgba(255,255,255,0.25)", alignItems: "center", justifyContent: "center", marginRight: 12 },
// //   logoEmoji:          { fontSize: 22 },
// //   headerTitle:        { color: "#fff", fontWeight: "bold", fontSize: 17 },
// //   headerSub:          { color: "rgba(255,255,255,0.85)", fontSize: 12 },
// //   logoutIconBtn:      { padding: 8, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 10 },
// //   logoutIcon:         { fontSize: 20 },
// //   welcomeStrip:       { backgroundColor: "rgba(255,255,255,0.18)", borderRadius: 14, padding: 14 },
// //   welcomeText:        { color: "#fff", fontWeight: "bold", fontSize: 16 },
// //   welcomeSub:         { color: "rgba(255,255,255,0.85)", fontSize: 12, marginTop: 3 },
// //   body:               { padding: 18, paddingBottom: 30 },
// //   sectionTitle:       { fontWeight: "bold", fontSize: 16, color: "#333", marginBottom: 14 },
// //   grid:               { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
// //   card:               { width: "48%", borderRadius: 16, padding: 16, marginBottom: 14, borderLeftWidth: 4, elevation: 3, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.07, shadowRadius: 6 },
// //   cardIcon:           { fontSize: 28, marginBottom: 8 },
// //   cardTitle:          { fontWeight: "700", fontSize: 14, color: "#1a1a1a" },
// //   cardSub:            { fontSize: 11, color: "#888", marginTop: 3, lineHeight: 16 },
// //   cardArrow:          { alignSelf: "flex-end", fontSize: 18, fontWeight: "bold", marginTop: 8 },
// //   announcementBox:    { backgroundColor: "#fff8f0", borderLeftWidth: 4, borderLeftColor: "#f97316", borderRadius: 14, padding: 16, marginBottom: 16, marginTop: 4 },
// //   announcementTitle:  { fontWeight: "700", color: "#f97316", fontSize: 14, marginBottom: 6 },
// //   announcementText:   { color: "#555", fontSize: 13, lineHeight: 20 },
// //   announcementBtn:    { marginTop: 10, alignSelf: "flex-start", backgroundColor: "#f97316", borderRadius: 8, paddingHorizontal: 14, paddingVertical: 7 },
// //   announcementBtnText:{ color: "#fff", fontWeight: "700", fontSize: 13 },
// //   logoutBtn:          { backgroundColor: "#fff", borderRadius: 14, padding: 15, alignItems: "center", borderWidth: 1.5, borderColor: "#f97316" },
// //   logoutBtnText:      { color: "#f97316", fontWeight: "bold", fontSize: 15 },
// // });

















import React, { useState, useCallback } from "react";
import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, SafeAreaView, Alert,
  Modal, BackHandler,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import BottomNavBar from "../components/BottomNavBar";

const MENU_ITEMS = [
  { icon: "📅", title: "edit profile",  subtitle: "Book your event slot",       bg: "#fff3ec", border: "#f97316", screen: "SuchiBooking" },
  { icon: "ℹ️",  title: "About Us",       subtitle: "Know about us",              bg: "#ecf9f1", border: "#16a34a", screen: null           },
  { icon: "📞", title: "Contact Us",     subtitle: "Reach out to us",            bg: "#ecf0ff", border: "#4f46e5", screen: null           },
  { icon: "❓", title: "FAQ",            subtitle: "Frequently asked questions", bg: "#fef9ec", border: "#ca8a04", screen: null           },
  { icon: "👤", title: "My Profile",     subtitle: "View & edit your profile",   bg: "#fce4ff", border: "#a21caf", screen: "Profile"      },
  { icon: "📋", title: "My Account",     subtitle: "Bookings & payments",        bg: "#e4f0ff", border: "#2563eb", screen: "Account"      },
];

export default function MenuScreen() {
  const navigation = useNavigation();
  const [logoutVisible, setLogoutVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (logoutVisible) {
          setLogoutVisible(false);
          return true;
        }
        setLogoutVisible(true);
        return true;
      };
      const sub = BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () => sub.remove();
    }, [logoutVisible])
  );

  const handlePress = (item) => {
    if (item.screen) {
      navigation.navigate(item.screen);
    } else {
      Alert.alert("Coming Soon", item.title + " page will be available soon!");
    }
  };

  const confirmLogout = () => {
    setLogoutVisible(false);
    navigation.reset({ index: 0, routes: [{ name: "Home" }] });
  };

  return (
    <SafeAreaView style={styles.safe}>

      <Modal transparent visible={logoutVisible} animationType="fade" onRequestClose={() => setLogoutVisible(false)}>
        <View style={styles.overlay}>
          <View style={styles.popupCard}>
            <View style={styles.popupIconWrap}>
              <Text style={styles.popupIconEmoji}>🚪</Text>
            </View>
            <Text style={styles.popupTitle}>Logout</Text>
            <Text style={styles.popupMsg}>
              Are you sure you want to logout? You will need to login again to access your account.
            </Text>
            <View style={styles.popupActions}>
              <TouchableOpacity style={styles.cancelBtn} onPress={() => setLogoutVisible(false)}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmBtn} onPress={confirmLogout}>
                <Text style={styles.confirmBtnText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <LinearGradient colors={["#f97316", "#fb923c"]} style={styles.header}>
        <View style={styles.headerRow}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoEmoji}>🏛️</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.headerTitle}>समता भ्रातृ मंडळ</Text>
            <Text style={styles.headerSub}>पिंपरी चिंचवड, पुणे</Text>
          </View>
          <TouchableOpacity style={styles.logoutIconBtn} onPress={() => setLogoutVisible(true)}>
            <Text style={styles.logoutIcon}>🚪</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.welcomeStrip}>
          <Text style={styles.welcomeText}>👋 Welcome, Admin!</Text>
          <Text style={styles.welcomeSub}>What would you like to do today?</Text>
        </View>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.body} showsVerticalScrollIndicator={false}>

        <Text style={styles.sectionTitle}>📌 Main Menu</Text>

        <View style={styles.grid}>
          {MENU_ITEMS.map((item) => (
            <TouchableOpacity
              key={item.title}
              style={[styles.card, { backgroundColor: item.bg, borderLeftColor: item.border }]}
              onPress={() => handlePress(item)}
              activeOpacity={0.75}
            >
              <Text style={styles.cardIcon}>{item.icon}</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSub}>{item.subtitle}</Text>
              <Text style={[styles.cardArrow, { color: item.border }]}>→</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.announcementBox}>
          <Text style={styles.announcementTitle}>📢 Announcement</Text>
          <Text style={styles.announcementText}>
            Suchi Booking for the upcoming event is now open.{"\n"}Register before 5th April 2025.
          </Text>
          <TouchableOpacity
            style={styles.announcementBtn}
            onPress={() => navigation.navigate("SuchiBooking")}
          >
            <Text style={styles.announcementBtnText}>Book Now →</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={() => setLogoutVisible(true)}>
          <Text style={styles.logoutBtnText}>🚪  Logout</Text>
        </TouchableOpacity>

      </ScrollView>

      <BottomNavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:               { flex: 1, backgroundColor: "#f5f5f5" },
  header:             { paddingTop: 16, paddingBottom: 20, paddingHorizontal: 18 },
  headerRow:          { flexDirection: "row", alignItems: "center", marginBottom: 14 },
  logoCircle:         { width: 46, height: 46, borderRadius: 23, backgroundColor: "rgba(255,255,255,0.25)", alignItems: "center", justifyContent: "center", marginRight: 12 },
  logoEmoji:          { fontSize: 22 },
  headerTitle:        { color: "#fff", fontWeight: "bold", fontSize: 17 },
  headerSub:          { color: "rgba(255,255,255,0.85)", fontSize: 12 },
  logoutIconBtn:      { padding: 8, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 10 },
  logoutIcon:         { fontSize: 20 },
  welcomeStrip:       { backgroundColor: "rgba(255,255,255,0.18)", borderRadius: 14, padding: 14 },
  welcomeText:        { color: "#fff", fontWeight: "bold", fontSize: 16 },
  welcomeSub:         { color: "rgba(255,255,255,0.85)", fontSize: 12, marginTop: 3 },
  body:               { padding: 18, paddingBottom: 30 },
  sectionTitle:       { fontWeight: "bold", fontSize: 16, color: "#333", marginBottom: 14 },
  grid:               { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  card:               { width: "48%", borderRadius: 16, padding: 16, marginBottom: 14, borderLeftWidth: 4, elevation: 3, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.07, shadowRadius: 6 },
  cardIcon:           { fontSize: 28, marginBottom: 8 },
  cardTitle:          { fontWeight: "700", fontSize: 14, color: "#1a1a1a" },
  cardSub:            { fontSize: 11, color: "#888", marginTop: 3, lineHeight: 16 },
  cardArrow:          { alignSelf: "flex-end", fontSize: 18, fontWeight: "bold", marginTop: 8 },
  announcementBox:    { backgroundColor: "#fff8f0", borderLeftWidth: 4, borderLeftColor: "#f97316", borderRadius: 14, padding: 16, marginBottom: 16, marginTop: 4 },
  announcementTitle:  { fontWeight: "700", color: "#f97316", fontSize: 14, marginBottom: 6 },
  announcementText:   { color: "#555", fontSize: 13, lineHeight: 20 },
  announcementBtn:    { marginTop: 10, alignSelf: "flex-start", backgroundColor: "#f97316", borderRadius: 8, paddingHorizontal: 14, paddingVertical: 7 },
  announcementBtnText:{ color: "#fff", fontWeight: "700", fontSize: 13 },
  logoutBtn:          { backgroundColor: "#fff", borderRadius: 14, padding: 15, alignItems: "center", borderWidth: 1.5, borderColor: "#f97316" },
  logoutBtnText:      { color: "#f97316", fontWeight: "bold", fontSize: 15 },

  overlay:            { flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "center", alignItems: "center", padding: 24 },
  popupCard:          { backgroundColor: "#fff", borderRadius: 20, padding: 28, width: "100%", maxWidth: 320, alignItems: "center" },
  popupIconWrap:      { width: 60, height: 60, borderRadius: 30, backgroundColor: "#fff3ec", borderWidth: 2, borderColor: "#f97316", alignItems: "center", justifyContent: "center", marginBottom: 16 },
  popupIconEmoji:     { fontSize: 26 },
  popupTitle:         { fontSize: 18, fontWeight: "700", color: "#1a1a1a", marginBottom: 8 },
  popupMsg:           { fontSize: 13, color: "#888", textAlign: "center", lineHeight: 20, marginBottom: 24 },
  popupActions:       { flexDirection: "row", gap: 10, width: "100%" },
  cancelBtn:          { flex: 1, padding: 13, borderRadius: 12, borderWidth: 1.5, borderColor: "#f97316", alignItems: "center" },
  cancelBtnText:      { color: "#f97316", fontWeight: "600", fontSize: 14 },
  confirmBtn:         { flex: 1, padding: 13, borderRadius: 12, backgroundColor: "#f97316", alignItems: "center" },
  confirmBtnText:     { color: "#fff", fontWeight: "600", fontSize: 14 },
});