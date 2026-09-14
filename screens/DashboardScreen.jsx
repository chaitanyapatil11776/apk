import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Alert,
  ActivityIndicator,
  RefreshControl,
  Image,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import accountApi from "../api/accountApi";
import registrationApi from "../api/registrationApi";
import { getAuthUserId } from "../api/apiClient";
import BottomNavBar from "../components/BottomNavBar";

export default function DashboardScreen({ navigation, route }) {
  const userInfo = route.params?.userInfo || {};
  const [candidateId, setCandidateId] = useState(
    Number(route.params?.candidateId ?? userInfo.CandidateId ?? 0)
  );
  const userId = Number(route.params?.userId ?? userInfo.UserId ?? getAuthUserId() ?? 0);

  const [candidateProfile, setCandidateProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // -------------------------------------------------------------
  // FETCH FULL CANDIDATE PROFILE & DASHBOARD DATA
  // -------------------------------------------------------------
  const loadDashboardData = useCallback(async () => {
    if (!userId || userId <= 0) {
      setLoading(false);
      return;
    }

    try {
      // 1. Fetch full candidate profile
      const profile = await registrationApi.getCandidateProfile(userId);
      console.log("Dashboard candidate profile:", profile);

      if (profile) {
        setCandidateProfile(profile);
        if (profile.CandidateId && Number(profile.CandidateId) > 0) {
          setCandidateId(Number(profile.CandidateId));
        }
      } else {
        // Fallback: resolve candidateId directly
        const resolvedId = await registrationApi.getCandidateId(userId);
        if (resolvedId > 0) {
          setCandidateId(resolvedId);
        }
      }
    } catch (e) {
      console.log("Dashboard data notice:", e.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [userId]);

  useEffect(() => {
    loadDashboardData();
  }, [loadDashboardData]);

  // Pull to refresh
  const onRefresh = () => {
    setRefreshing(true);
    loadDashboardData();
  };

  // Hardware back handler
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert("Logout", "Do you want to logout?", [
          { text: "Cancel", style: "cancel" },
          {
            text: "Yes",
            onPress: async () => {
              await accountApi.logoutUser(userId, userInfo.LoggedInSessionId);
              navigation.replace("Login");
            },
          },
        ]);
        return true;
      };

      const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () => subscription.remove();
    }, [userId, userInfo])
  );

  // Navigate to Suchi Booking wizard
  const handleOpenSuchi = (stepToOpen = null) => {
    const candidateType =
      candidateProfile?.CandidateType ||
      userInfo.GenderCode === "F" ||
      userInfo.CandidateType === "Bride"
        ? "Bride"
        : "Groom";

    const isSubmitted =
      candidateProfile?.ApplicationFormStatusApplicationRound === "S" ||
      candidateProfile?.StepID === 5;

    navigation.navigate("SuchiBooking", {
      candidateId: candidateId || candidateProfile?.CandidateId || 0,
      userId: userId,
      candidateType: candidateType,
      applicationNo: candidateId > 0 ? `P${candidateId}` : "New",
      currentUser: { ...userInfo, ...candidateProfile },
      isSubmitted: isSubmitted,
      openStep: stepToOpen || (isSubmitted ? 5 : 1),
    });
  };

  // Derived Candidate details
  const fullName =
    candidateProfile?.FirstName
      ? `${candidateProfile.FirstName} ${candidateProfile.MiddleName || ""} ${candidateProfile.LastName || ""}`.trim()
      : userInfo.UserName || userInfo.FirstName || "Candidate User";

  const marathiFullName =
    candidateProfile?.MFirstName
      ? `${candidateProfile.MFirstName} ${candidateProfile.MMiddleName || ""} ${candidateProfile.MLastName || ""}`.trim()
      : "";

  const candidateTypeDisplay =
    candidateProfile?.CandidateType === "Bride" || candidateProfile?.CandidateType === "वधू"
      ? "वधू | Bride"
      : "वर | Groom";

  const applicationNoDisplay =
    candidateProfile?.ApplicationFormNo ||
    (candidateId > 0 ? `P${candidateId}` : "Under Generation");

  const isSubmitted =
    candidateProfile?.ApplicationFormStatusApplicationRound === "S" ||
    candidateProfile?.StepID === 5;

  const mandalName =
    candidateProfile?.MandalName ||
    "समता भ्रातृमंडळ पिंपरी चिंचवड (पुणे)";

  const photoSource = candidateProfile?.PhotoBase64
    ? { uri: `data:image/jpeg;base64,${candidateProfile.PhotoBase64}` }
    : candidateProfile?.PhotofilePath
    ? { uri: candidateProfile.PhotofilePath }
    : null;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {/* Top Header Card */}
        <View style={styles.headerCard}>
          <View style={styles.mandalRow}>
            <Ionicons name="business" size={16} color="#831843" />
            <Text style={styles.mandalText} numberOfLines={1}>{mandalName}</Text>
          </View>

          <View style={styles.headerMainRow}>
            {photoSource ? (
              <Image source={photoSource} style={styles.avatarImg} />
            ) : (
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarInitials}>
                  {(fullName[0] || "C").toUpperCase()}
                </Text>
              </View>
            )}

            <View style={styles.headerTextWrap}>
              <Text style={styles.userNameText}>{fullName}</Text>
              {Boolean(marathiFullName) && (
                <Text style={styles.userMarathiText}>{marathiFullName}</Text>
              )}
              <View style={styles.badgeRow}>
                <View style={styles.typeBadge}>
                  <Text style={styles.typeBadgeText}>{candidateTypeDisplay}</Text>
                </View>
                <View style={styles.appNoBadge}>
                  <Text style={styles.appNoBadgeText}>App No: {applicationNoDisplay}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {loading ? (
          <View style={styles.loadingCard}>
            <ActivityIndicator size="large" color="#831843" />
            <Text style={styles.loadingText}>Loading Dashboard Data...</Text>
          </View>
        ) : (
          <>
            {/* Status Tracker Card */}
            <View style={[styles.card, isSubmitted ? styles.cardSubmitted : styles.cardPending]}>
              <View style={styles.statusHeaderRow}>
                <View style={styles.statusIconWrap}>
                  <Ionicons
                    name={isSubmitted ? "checkmark-circle" : "time"}
                    size={26}
                    color={isSubmitted ? "#16A34A" : "#D97706"}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.statusTitle}>
                    {isSubmitted
                      ? "पडताळणी प्रक्रियेत आहे (Under Verification)"
                      : "नोंदणी प्रक्रिया अपूर्ण (Incomplete Registration)"}
                  </Text>
                  <Text style={styles.statusSub}>
                    {isSubmitted
                      ? "आपला अर्ज संस्थेकडे पडताळणीसाठी सादर झाला आहे (Status: S)."
                      : "कृपया सूची पुस्तिकेसाठी सर्व ५ पायऱ्यांची माहिती पूर्ण भरा."}
                  </Text>
                </View>
              </View>

              {isSubmitted ? (
                <View style={styles.statusDetailsBox}>
                  <View style={styles.statusDetailRow}>
                    <Text style={styles.statusDetailLabel}>अर्ज स्थिती (Status):</Text>
                    <Text style={[styles.statusDetailValue, { color: "#16A34A" }]}>
                      सादर झाले (Submitted)
                    </Text>
                  </View>
                  <View style={styles.statusDetailRow}>
                    <Text style={styles.statusDetailLabel}>नोंदणी दिनांक (Date):</Text>
                    <Text style={styles.statusDetailValue}>
                      {candidateProfile?.CreatedOn || "14-09-2026"}
                    </Text>
                  </View>
                  <View style={styles.statusDetailRow}>
                    <Text style={styles.statusDetailLabel}>पडताळणी शेरा (Comment):</Text>
                    <Text style={styles.statusDetailValue}>
                      {candidateProfile?.CommentByVerify || "पडताळणी सुरू आहे (In Progress)"}
                    </Text>
                  </View>
                </View>
              ) : null}

              <TouchableOpacity
                style={[styles.primaryActionBtn, isSubmitted && styles.viewProfileBtn]}
                onPress={() => handleOpenSuchi(isSubmitted ? 5 : null)}
                activeOpacity={0.85}
              >
                <Ionicons
                  name={isSubmitted ? "eye-outline" : "arrow-forward-circle"}
                  size={18}
                  color="#FFFFFF"
                  style={{ marginRight: 6 }}
                />
                <Text style={styles.primaryActionBtnText}>
                  {isSubmitted
                    ? "सादर केलेले प्रोफाईल पहा (View Application) ➔"
                    : "नोंदणी पूर्ण करा (Complete Registration) ➔"}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Quick Summary Grid */}
            {candidateProfile && (
              <>
                <Text style={styles.sectionHeader}>📋 प्रोफाईल सारांश (Profile Snapshot)</Text>

                {/* 1. Education & Employment */}
                <View style={styles.summaryCard}>
                  <View style={styles.summaryCardHeader}>
                    <MaterialCommunityIcons name="school" size={20} color="#831843" />
                    <Text style={styles.summaryCardTitle}>शिक्षण व नोकरी (Career)</Text>
                  </View>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>शिक्षण (Degree):</Text>
                    <Text style={styles.summaryVal}>
                      {candidateProfile.Education || candidateProfile.EducationLevel || "Not provided"}
                    </Text>
                  </View>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>व्यवसाय / नोकरी:</Text>
                    <Text style={styles.summaryVal}>
                      {candidateProfile.JobBuzEdu || candidateProfile.Position || "Not provided"}
                    </Text>
                  </View>
                  {Boolean(candidateProfile.Company) && (
                    <View style={styles.summaryRow}>
                      <Text style={styles.summaryLabel}>कंपनी / व्यवसाय नाव:</Text>
                      <Text style={styles.summaryVal}>{candidateProfile.Company}</Text>
                    </View>
                  )}
                  {Boolean(candidateProfile.MonthlyIncome) && (
                    <View style={styles.summaryRow}>
                      <Text style={styles.summaryLabel}>मासिक उत्पन्न:</Text>
                      <Text style={styles.summaryVal}>₹{candidateProfile.MonthlyIncome}</Text>
                    </View>
                  )}
                </View>

                {/* 2. Personal & Horoscope */}
                <View style={styles.summaryCard}>
                  <View style={styles.summaryCardHeader}>
                    <MaterialCommunityIcons name="star-circle" size={20} color="#831843" />
                    <Text style={styles.summaryCardTitle}>जन्म व वैयक्तिक माहिती (Personal & Horoscope)</Text>
                  </View>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>जन्म तारीख:</Text>
                    <Text style={styles.summaryVal}>
                      {candidateProfile.BirthDateDisplay || candidateProfile.BirthDate || "Not provided"}
                    </Text>
                  </View>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>जन्म वेळ व ठिकाण:</Text>
                    <Text style={styles.summaryVal}>
                      {candidateProfile.BirthTime || "-"}, {candidateProfile.BirthPlace || "-"}
                    </Text>
                  </View>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>उंची व वर्ण:</Text>
                    <Text style={styles.summaryVal}>
                      {candidateProfile.Foot ? `${candidateProfile.Foot}' ${candidateProfile.Inch || 0}"` : "-"}, {candidateProfile.Complexion || "-"}
                    </Text>
                  </View>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>रक्तगट व गोत्र:</Text>
                    <Text style={styles.summaryVal}>
                      {candidateProfile.Bloodgroup || "-"}, गोत्र: {candidateProfile.Gotra || "-"}
                    </Text>
                  </View>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>मूळगाव (Hometown):</Text>
                    <Text style={styles.summaryVal}>
                      {candidateProfile.Hometown || "-"}, {candidateProfile.Taluka || "-"}, {candidateProfile.District || "-"}
                    </Text>
                  </View>
                </View>

                {/* 3. Parent & Contacts */}
                <View style={styles.summaryCard}>
                  <View style={styles.summaryCardHeader}>
                    <Ionicons name="people" size={20} color="#831843" />
                    <Text style={styles.summaryCardTitle}>पालक व संपर्क (Parent & Contact)</Text>
                  </View>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>पालकांचे नाव:</Text>
                    <Text style={styles.summaryVal}>
                      {candidateProfile.FatherGurdianTitle || ""} {candidateProfile.NameOfFatherGuardian || "-"}
                    </Text>
                  </View>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>पालकांचा पत्ता:</Text>
                    <Text style={styles.summaryVal}>{candidateProfile.ParentalAddress || "-"}</Text>
                  </View>
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>संपर्क क्रमांक:</Text>
                    <Text style={styles.summaryVal}>
                      {candidateProfile.PersonalMobile || candidateProfile.ParentalContactNo1 || "-"}
                    </Text>
                  </View>
                </View>
              </>
            )}

            {/* Important Dates / Guidelines Box */}
            <View style={styles.infoCard}>
              <View style={styles.infoCardHeader}>
                <Ionicons name="information-circle" size={20} color="#1E40AF" />
                <Text style={styles.infoCardTitle}>महत्त्वाच्या सूचना (Important Notice)</Text>
              </View>
              <Text style={styles.infoPoint}>
                • ३१ ऑक्टोबर पर्यंत सादर झालेली नावे यंदाच्या वधू-वर पुस्तिकेत छापली जातील.
              </Text>
              <Text style={styles.infoPoint}>
                • ऑनलाइन वधू-वर सूची उमेदवारांच्या अकाऊंटमध्ये वर्षभर उपलब्ध राहील.
              </Text>
              <Text style={styles.infoPoint}>
                • पुस्तक मिळण्याची संभाव्य तारीख: २५ डिसेंबर.
              </Text>
            </View>

            {/* Logout Button */}
            <TouchableOpacity
              style={styles.logoutBtn}
              onPress={() => {
                Alert.alert("Logout", "Do you want to logout?", [
                  { text: "Cancel", style: "cancel" },
                  {
                    text: "Logout",
                    style: "destructive",
                    onPress: async () => {
                      await accountApi.logoutUser(userId, userInfo.LoggedInSessionId);
                      navigation.replace("Login");
                    },
                  },
                ]);
              }}
              activeOpacity={0.8}
            >
              <Ionicons name="log-out-outline" size={18} color="#DC2626" style={{ marginRight: 6 }} />
              <Text style={styles.logoutBtnText}>लॉगआउट (Logout)</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>

      {/* Persistent Bottom Navigation Bar */}
      <BottomNavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#831843" },
  container: { padding: 16, backgroundColor: "#F3F4F6", flexGrow: 1, paddingBottom: 24 },

  // Header Card
  headerCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  mandalRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  mandalText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#831843",
    flex: 1,
  },
  headerMainRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatarImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#831843",
  },
  avatarCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FCE7F3",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#F472B6",
  },
  avatarInitials: {
    fontSize: 24,
    fontWeight: "800",
    color: "#831843",
  },
  headerTextWrap: {
    flex: 1,
  },
  userNameText: {
    fontSize: 17,
    fontWeight: "800",
    color: "#1E293B",
  },
  userMarathiText: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 1,
  },
  badgeRow: {
    flexDirection: "row",
    gap: 6,
    marginTop: 6,
    flexWrap: "wrap",
  },
  typeBadge: {
    backgroundColor: "#FCE7F3",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  typeBadgeText: {
    color: "#9D174D",
    fontSize: 11,
    fontWeight: "700",
  },
  appNoBadge: {
    backgroundColor: "#E2E8F0",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  appNoBadgeText: {
    color: "#334155",
    fontSize: 11,
    fontWeight: "700",
  },

  // Loading
  loadingCard: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    marginTop: 10,
    color: "#64748B",
    fontSize: 14,
  },

  // Status Card
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardSubmitted: {
    borderColor: "#86EFAC",
    backgroundColor: "#F0FDF4",
  },
  cardPending: {
    borderColor: "#FCD34D",
    backgroundColor: "#FFFBEB",
  },
  statusHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  statusIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
  },
  statusTitle: {
    fontSize: 14.5,
    fontWeight: "800",
    color: "#1E293B",
  },
  statusSub: {
    fontSize: 11.5,
    color: "#475569",
    marginTop: 2,
  },
  statusDetailsBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 10,
    gap: 4,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  statusDetailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusDetailLabel: {
    fontSize: 11.5,
    color: "#64748B",
    fontWeight: "600",
  },
  statusDetailValue: {
    fontSize: 11.5,
    fontWeight: "700",
    color: "#1E293B",
  },
  primaryActionBtn: {
    backgroundColor: "#831843",
    height: 44,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },
  viewProfileBtn: {
    backgroundColor: "#166534",
  },
  primaryActionBtnText: {
    color: "#FFFFFF",
    fontSize: 13.5,
    fontWeight: "700",
  },

  // Section Headers & Summary Cards
  sectionHeader: {
    fontSize: 14,
    fontWeight: "800",
    color: "#334155",
    marginBottom: 8,
    marginLeft: 2,
  },
  summaryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  summaryCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  summaryCardTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#831843",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 3,
  },
  summaryLabel: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "500",
  },
  summaryVal: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1E293B",
    maxWidth: "60%",
    textAlign: "right",
  },

  // Info Card
  infoCard: {
    backgroundColor: "#EFF6FF",
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#BFDBFE",
  },
  infoCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 6,
  },
  infoCardTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E40AF",
  },
  infoPoint: {
    fontSize: 11.5,
    color: "#1E3A8A",
    lineHeight: 17,
    marginTop: 2,
  },

  // Logout
  logoutBtn: {
    height: 44,
    borderWidth: 1,
    borderColor: "#EF4444",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEF2F2",
    marginBottom: 10,
  },
  logoutBtnText: {
    color: "#DC2626",
    fontSize: 13.5,
    fontWeight: "700",
  },
});