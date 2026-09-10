import React from "react";
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, SafeAreaView, StatusBar, Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// ── Info Row ──────────────────────────────────────────────────────────────────
const InfoRow = ({ icon, label, value }) => (
  <View style={s.infoRow}>
    <View style={s.infoIconBox}>
      <Text style={s.infoIcon}>{icon}</Text>
    </View>
    <View style={s.infoText}>
      <Text style={s.infoLabel}>{label}</Text>
      <Text style={s.infoValue}>{value || "—"}</Text>
    </View>
  </View>
);

// ── Section Card ──────────────────────────────────────────────────────────────
const SectionCard = ({ title, children }) => (
  <View style={s.card}>
    <Text style={s.cardTitle}>{title}</Text>
    {children}
  </View>
);

// ── Divider ───────────────────────────────────────────────────────────────────
const Divider = () => <View style={s.divider} />;

// ── Badge ─────────────────────────────────────────────────────────────────────
const Badge = ({ value }) => (
  <View style={[s.badge, value ? s.badgeYes : s.badgeNo]}>
    <Text style={[s.badgeText, value ? s.badgeTextYes : s.badgeTextNo]}>
      {value ? "✓  Yes" : "✕  No"}
    </Text>
  </View>
);

// ── Main Profile Screen ───────────────────────────────────────────────────────
export default function ProfileScreen() {
  const navigation = useNavigation();
  const route      = useRoute();

  // Data passed from RegistrationScreen via navigation.navigate("Profile", { user: {...} })
  const user = route?.params?.user || {
    fullName:           "Rahul Sharma",
    email:              "rahul@example.com",
    mobile:             "9876543210",
    gender:             "Male",
    mandal:             "Mandal 1",
    profileId:          "VV-2025-00412",
    isPrintedInBooklet: false,
    bookletPageNumber:  null,
  };

  const initials = user.fullName
    ? user.fullName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "U";

  const handleGoToDashboard = () => navigation.navigate("Dashboard");

  const handleGoToLogin = () =>
    Alert.alert("Logout", "Do you want to go back to Login?", [
      { text: "Cancel", style: "cancel" },
      { text: "Yes", onPress: () => navigation.navigate("Login") },
    ]);

  return (
    <SafeAreaView style={s.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#f97316" />

      {/* ── Orange Header ── */}
      <View style={s.header}>
        <Text style={s.headerTitle}>My Profile</Text>
        <Text style={s.headerSub}>Vadhu-Var Suchi 2025</Text>
      </View>

      <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>

        {/* ── Avatar Card ── */}
        <View style={s.avatarCard}>
          <View style={s.avatarStrip} />
          <View style={s.avatarCircle}>
            <Text style={s.avatarInitials}>{initials}</Text>
          </View>
          <Text style={s.userName}>{user.fullName}</Text>
          <Text style={s.userSub}>{user.gender}  •  {user.mandal}</Text>
          <View style={s.profileIdPill}>
            <Text style={s.profileIdLabel}>Profile ID: </Text>
            <Text style={s.profileIdValue}>{user.profileId}</Text>
          </View>
        </View>

        {/* ── Personal Information ── */}
        <SectionCard title="👤  Personal Information">
          <InfoRow icon="🪪" label="Full Name"     value={user.fullName} />
          <Divider />
          <InfoRow icon="⚧"  label="Gender"        value={user.gender}   />
          <Divider />
          <InfoRow icon="🏛️" label="Mandal"        value={user.mandal}   />
        </SectionCard>

        {/* ── Contact Details ── */}
        <SectionCard title="📞  Contact Details">
          <InfoRow icon="📱" label="Mobile Number"  value={"+91 " + user.mobile} />
          <Divider />
          <InfoRow icon="✉️" label="Email Address"  value={user.email}           />
        </SectionCard>

        {/* ── Booklet Status ── */}
        <SectionCard title="📖  Vadhu-Var Suchi Booklet 2025">
          <View style={s.bookletRow}>
            <Text style={s.bookletQuestion}>Is my name printed in the booklet?</Text>
            <Badge value={user.isPrintedInBooklet} />
          </View>
          <Divider />
          <View style={s.bookletRow}>
            <Text style={s.bookletQuestion}>Page Number</Text>
            <Text style={s.bookletPage}>{user.bookletPageNumber ?? "N/A"}</Text>
          </View>
        </SectionCard>

        {/* ── Status Strip ── */}
        <View style={s.statusStrip}>
          <View style={s.statusItem}>
            <Text style={s.statusValue}>2025</Text>
            <Text style={s.statusLabel}>Year</Text>
          </View>
          <View style={s.statusSep} />
          <View style={s.statusItem}>
            <Text style={[s.statusValue, { color: "#16a34a" }]}>Active</Text>
            <Text style={s.statusLabel}>Status</Text>
          </View>
          <View style={s.statusSep} />
          <View style={s.statusItem}>
            <Text style={s.statusValue}>0</Text>
            <Text style={s.statusLabel}>Matches</Text>
          </View>
        </View>

        {/* ── Action Buttons ── */}
        <TouchableOpacity style={s.dashBtn} onPress={handleGoToDashboard} activeOpacity={0.85}>
          <Text style={s.dashBtnText}>Go to Dashboard  →</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.logoutBtn} onPress={handleGoToLogin} activeOpacity={0.85}>
          <Text style={s.logoutBtnText}>Back to Login</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────
const ORANGE = "#f97316";
const ORANGE_LIGHT = "#fff7ed";
const TEXT1  = "#111827";
const TEXT2  = "#6b7280";
const BORDER = "#e5e7eb";
const WHITE  = "#ffffff";

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f3f4f6" },

  // Header
  header: {
    backgroundColor: ORANGE,
    paddingTop: 16,
    paddingBottom: 20,
    alignItems: "center",
  },
  headerTitle: { color: WHITE, fontSize: 20, fontWeight: "800", letterSpacing: 0.3 },
  headerSub:   { color: "rgba(255,255,255,0.8)", fontSize: 12, marginTop: 2, fontWeight: "500" },

  scroll: { paddingHorizontal: 16, paddingTop: 0 },

  // Avatar card
  avatarCard: {
    backgroundColor: WHITE,
    borderRadius: 16,
    alignItems: "center",
    paddingBottom: 22,
    marginTop: -1,
    marginBottom: 14,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  avatarStrip: {
    width: "100%",
    height: 56,
    backgroundColor: ORANGE,
    marginBottom: -36,
  },
  avatarCircle: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: ORANGE_LIGHT,
    borderWidth: 4,
    borderColor: WHITE,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: ORANGE,
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  avatarInitials: { fontSize: 30, fontWeight: "800", color: ORANGE },
  userName:  { fontSize: 20, fontWeight: "800", color: TEXT1, marginTop: 10, marginBottom: 2 },
  userSub:   { fontSize: 13, color: TEXT2, fontWeight: "500", marginBottom: 10 },
  profileIdPill: {
    flexDirection: "row",
    backgroundColor: ORANGE_LIGHT,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    alignItems: "center",
  },
  profileIdLabel: { fontSize: 12, color: TEXT2, fontWeight: "500" },
  profileIdValue: { fontSize: 13, color: ORANGE, fontWeight: "800", letterSpacing: 0.5 },

  // Section card
  card: {
    backgroundColor: WHITE,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 6,
    marginBottom: 14,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: "800",
    color: ORANGE,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 12,
  },

  // Info row
  infoRow:    { flexDirection: "row", alignItems: "center", paddingVertical: 10 },
  infoIconBox:{ width: 36, height: 36, borderRadius: 10, backgroundColor: ORANGE_LIGHT, alignItems: "center", justifyContent: "center", marginRight: 12 },
  infoIcon:   { fontSize: 16 },
  infoText:   { flex: 1 },
  infoLabel:  { fontSize: 10, color: TEXT2, fontWeight: "600", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2 },
  infoValue:  { fontSize: 15, color: TEXT1, fontWeight: "600" },
  divider:    { height: 1, backgroundColor: BORDER },

  // Booklet
  bookletRow:     { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 12 },
  bookletQuestion:{ fontSize: 14, color: TEXT1, fontWeight: "500", flex: 1, paddingRight: 8 },
  bookletPage:    { fontSize: 15, color: TEXT2, fontWeight: "700" },

  // Badge
  badge:       { borderRadius: 20, paddingHorizontal: 12, paddingVertical: 5 },
  badgeYes:    { backgroundColor: "#dcfce7" },
  badgeNo:     { backgroundColor: "#fee2e2" },
  badgeText:   { fontSize: 13, fontWeight: "700" },
  badgeTextYes:{ color: "#16a34a" },
  badgeTextNo: { color: "#dc2626" },

  // Status strip
  statusStrip: {
    flexDirection: "row",
    backgroundColor: WHITE,
    borderRadius: 14,
    paddingVertical: 16,
    marginBottom: 14,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  statusItem:  { flex: 1, alignItems: "center" },
  statusValue: { fontSize: 16, fontWeight: "800", color: ORANGE, marginBottom: 2 },
  statusLabel: { fontSize: 11, color: TEXT2, fontWeight: "500" },
  statusSep:   { width: 1, backgroundColor: BORDER },

  // Buttons
  dashBtn: {
    backgroundColor: ORANGE,
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 12,
    elevation: 4,
    shadowColor: ORANGE,
    shadowOpacity: 0.35,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  dashBtnText: { color: WHITE, fontSize: 16, fontWeight: "800", letterSpacing: 0.4 },

  logoutBtn: {
    backgroundColor: WHITE,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: ORANGE,
  },
  logoutBtnText: { color: ORANGE, fontSize: 15, fontWeight: "700" },
});