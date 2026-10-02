import React, { useCallback, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Alert,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import {
  useNavigation,
  useFocusEffect,
} from "@react-navigation/native";

import registrationApi from "../api/registrationApi";

import {
  getAuthUserId,
  clearAuth,
} from "../api/apiClient";

// ============================================================
// HELPERS
// ============================================================

const getValue = (obj, ...keys) => {
  if (!obj) return "";

  for (const key of keys) {
    const value = obj[key];

    if (
      value !== undefined &&
      value !== null &&
      String(value).trim() !== ""
    ) {
      return value;
    }
  }

  return "";
};

const displayValue = (value) => {
  if (
    value === undefined ||
    value === null ||
    String(value).trim() === ""
  ) {
    return "—";
  }

  return String(value);
};

const getInitials = (name) => {
  if (!name) return "U";

  return String(name)
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

// ============================================================
// FORMAT DATE
// ============================================================

const formatDate = (value) => {
  if (!value) return "";

  try {
    const date = new Date(value);

    if (isNaN(date.getTime())) {
      return String(value);
    }

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch {
    return String(value);
  }
};

// ============================================================
// INFO ROW
// ============================================================

const InfoRow = ({ icon, label, value }) => {
  return (
    <View style={styles.infoRow}>

      <View style={styles.infoIconBox}>
        <Text style={styles.infoIcon}>
          {icon}
        </Text>
      </View>

      <View style={styles.infoText}>

        <Text style={styles.infoLabel}>
          {label}
        </Text>

        <Text style={styles.infoValue}>
          {displayValue(value)}
        </Text>

      </View>

    </View>
  );
};

// ============================================================
// SECTION CARD
// ============================================================

const SectionCard = ({ title, children }) => {
  return (
    <View style={styles.card}>

      <Text style={styles.cardTitle}>
        {title}
      </Text>

      {children}

    </View>
  );
};

// ============================================================
// DIVIDER
// ============================================================

const Divider = () => {
  return <View style={styles.divider} />;
};

// ============================================================
// BADGE
// ============================================================

const Badge = ({ value }) => {

  const yes =
    value === true ||
    value === 1 ||
    value === "1" ||
    String(value).toLowerCase() === "true" ||
    String(value).toLowerCase() === "yes";

  return (
    <View
      style={[
        styles.badge,
        yes
          ? styles.badgeYes
          : styles.badgeNo,
      ]}
    >

      <Text
        style={[
          styles.badgeText,
          yes
            ? styles.badgeTextYes
            : styles.badgeTextNo,
        ]}
      >
        {yes ? "✓ Yes" : "✕ No"}
      </Text>

    </View>
  );
};

// ============================================================
// PROFILE SCREEN
// ============================================================

export default function ProfileScreen() {

  const navigation = useNavigation();

  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  // ==========================================================
  // LOAD PROFILE FROM API
  // ==========================================================

  const loadProfile = async (showLoading = true) => {

    try {

      if (showLoading) {
        setLoading(true);
      }

      setErrorMessage("");

      // ------------------------------------------------------
      // GET LOGGED-IN USER ID
      // ------------------------------------------------------

      const userId = getAuthUserId();

      console.log(
        "======================================"
      );

      console.log(
        "PROFILE SCREEN"
      );

      console.log(
        "Logged in UserId:",
        userId
      );

      console.log(
        "======================================"
      );

      if (!userId) {

        setErrorMessage(
          "User ID not found. Please login again."
        );

        Alert.alert(
          "Login Required",
          "Your login session is not available. Please login again.",
          [
            {
              text: "OK",
              onPress: () => {

                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: "Login",
                    },
                  ],
                });

              },
            },
          ]
        );

        return;
      }

      // ------------------------------------------------------
      // CALL LIVE PROFILE API
      // ------------------------------------------------------

      console.log(
        "Calling GetCandidateProfile..."
      );

      const response =
        await registrationApi.getCandidateProfile(
          userId
        );

      console.log(
        "PROFILE API RESPONSE:",
        JSON.stringify(
          response,
          null,
          2
        )
      );

      // ------------------------------------------------------
      // HANDLE API RESPONSE
      // ------------------------------------------------------

      let data = response;

      if (data?.Data !== undefined) {
        data = data.Data;
      }

      if (Array.isArray(data)) {
        data = data[0];
      }

      if (!data) {

        throw new Error(
          "Profile data not found."
        );

      }

      console.log(
        "FINAL PROFILE DATA:",
        JSON.stringify(
          data,
          null,
          2
        )
      );

      setProfile(data);

    } catch (error) {

      console.log(
        "PROFILE API ERROR:"
      );

      console.log(
        error?.response?.data ||
        error?.message ||
        error
      );

      const message =
        error?.response?.data?.Message ||
        error?.response?.data?.message ||
        error?.message ||
        "Unable to load profile.";

      setErrorMessage(message);

      Alert.alert(
        "Profile Error",
        message
      );

    } finally {

      setLoading(false);

      setRefreshing(false);

    }

  };

  // ==========================================================
  // LOAD PROFILE WHEN SCREEN OPENS
  // ==========================================================

  useFocusEffect(
    useCallback(() => {

      loadProfile(true);

    }, [])
  );

  // ==========================================================
  // REFRESH
  // ==========================================================

  const handleRefresh = () => {

    setRefreshing(true);

    loadProfile(false);

  };

  // ==========================================================
  // LOGOUT
  // ==========================================================

  const handleLogout = () => {

    Alert.alert(
      "Logout",
      "Do you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },

        {
          text: "Logout",
          style: "destructive",

          onPress: () => {

            clearAuth();

            navigation.reset({
              index: 0,

              routes: [
                {
                  name: "Login",
                },
              ],
            });

          },
        },
      ]
    );

  };

  // ==========================================================
  // LOADING SCREEN
  // ==========================================================

  if (loading && !profile) {

    return (
      <SafeAreaView style={styles.safe}>

        <StatusBar
          barStyle="light-content"
          backgroundColor={ORANGE}
        />

        <View style={styles.header}>

          <Text style={styles.headerTitle}>
            My Profile
          </Text>

          <Text style={styles.headerSub}>
            Vadhu-Var Suchi 2025
          </Text>

        </View>

        <View style={styles.loadingContainer}>

          <ActivityIndicator
            size="large"
            color={ORANGE}
          />

          <Text style={styles.loadingText}>
            Loading profile...
          </Text>

        </View>

      </SafeAreaView>
    );

  }

  // ==========================================================
  // ERROR SCREEN
  // ==========================================================

  if (!profile && errorMessage) {

    return (
      <SafeAreaView style={styles.safe}>

        <StatusBar
          barStyle="light-content"
          backgroundColor={ORANGE}
        />

        <View style={styles.header}>

          <Text style={styles.headerTitle}>
            My Profile
          </Text>

          <Text style={styles.headerSub}>
            Vadhu-Var Suchi 2025
          </Text>

        </View>

        <View style={styles.errorContainer}>

          <Text style={styles.errorIcon}>
            ⚠️
          </Text>

          <Text style={styles.errorTitle}>
            Profile Not Available
          </Text>

          <Text style={styles.errorText}>
            {errorMessage}
          </Text>

          <TouchableOpacity
            style={styles.retryButton}
            onPress={() => loadProfile(true)}
          >
            <Text style={styles.retryButtonText}>
              Try Again
            </Text>
          </TouchableOpacity>

        </View>

      </SafeAreaView>
    );

  }

  // ==========================================================
  // GET PROFILE VALUES
  // ==========================================================

  const fullName =
    getValue(
      profile,
      "FullName",
      "fullName",
      "CandidateName",
      "candidateName",
      "Name",
      "name"
    ) ||
    [
      getValue(
        profile,
        "FirstName",
        "firstName"
      ),

      getValue(
        profile,
        "MiddleName",
        "middleName"
      ),

      getValue(
        profile,
        "LastName",
        "lastName"
      ),
    ]
      .filter(Boolean)
      .join(" ");

  const gender = getValue(
    profile,
    "Gender",
    "gender",
    "Sex",
    "sex"
  );

  const candidateType = getValue(
    profile,
    "CandidateType",
    "candidateType"
  );

  const mandal = getValue(
    profile,
    "Mandal",
    "mandal",
    "MandalName",
    "mandalName"
  );

  const mobile = getValue(
    profile,
    "Mobile",
    "mobile",
    "MobileNumber",
    "mobileNumber",
    "PersonalMobile",
    "personalMobile",
    "ContactNo",
    "ContactNumber",
    "Phone",
    "phone"
  );

  const email = getValue(
    profile,
    "Email",
    "email",
    "EmailAddress",
    "emailAddress"
  );

  const profileId = getValue(
    profile,
    "ProfileId",
    "profileId",
    "CandidateId",
    "candidateId"
  );

  const applicationNo = getValue(
    profile,
    "ApplicationFormNo",
    "applicationFormNo",
    "ApplicationNo",
    "applicationNo"
  );

  const birthDate = getValue(
    profile,
    "BirthDate",
    "birthDate",
    "DateOfBirth",
    "dateOfBirth"
  );

  const birthPlace = getValue(
    profile,
    "BirthPlace",
    "birthPlace"
  );

  const educationLevel = getValue(
    profile,
    "EducationLevel",
    "educationLevel"
  );

  const education = getValue(
    profile,
    "Education",
    "education"
  );

  const job = getValue(
    profile,
    "JobBuzEdu",
    "jobBuzEdu",
    "Occupation",
    "occupation"
  );

  const position = getValue(
    profile,
    "Position",
    "position"
  );

  const company = getValue(
    profile,
    "Company",
    "company"
  );

  const employmentPlace = getValue(
    profile,
    "PlaceOfEmployment",
    "placeOfEmployment"
  );

  const income = getValue(
    profile,
    "MonthlyIncome",
    "monthlyIncome"
  );

  const complexion = getValue(
    profile,
    "Complexion",
    "complexion"
  );

  const bloodGroup = getValue(
    profile,
    "BloodGroup",
    "bloodGroup"
  );

  const gotra = getValue(
    profile,
    "Gotra",
    "gotra"
  );

  const mamkul = getValue(
    profile,
    "Mamkul",
    "mamkul"
  );

  const hometown = getValue(
    profile,
    "Hometown",
    "hometown"
  );

  const taluka = getValue(
    profile,
    "Taluka",
    "taluka"
  );

  const district = getValue(
    profile,
    "District",
    "district"
  );

  const foot = getValue(
    profile,
    "Foot",
    "foot"
  );

  const inch = getValue(
    profile,
    "Inch",
    "inch"
  );

  const fatherName = getValue(
    profile,
    "NameOfFatherGuardian",
    "nameOfFatherGuardian",
    "FatherName",
    "fatherName"
  );

  const fatherContact = getValue(
    profile,
    "ParentalContactNo1",
    "parentalContactNo1",
    "FatherContact",
    "fatherContact"
  );

  const fatherContact2 = getValue(
    profile,
    "ParentalContactNo2",
    "parentalContactNo2"
  );

  const parentAddress = getValue(
    profile,
    "ParentalAddress",
    "parentalAddress"
  );

  const parentEmail = getValue(
    profile,
    "ParentalEmail",
    "parentalEmail"
  );

  const expectations = getValue(
    profile,
    "Expectations",
    "expectations"
  );

  const status = getValue(
    profile,
    "Status",
    "status",
    "CandidateStatus",
    "candidateStatus"
  );

  const isPrinted = getValue(
    profile,
    "IsPrintedInBooklet",
    "isPrintedInBooklet",
    "PrintedInBooklet",
    "printedInBooklet"
  );

  const bookletPage = getValue(
    profile,
    "BookletPageNumber",
    "bookletPageNumber",
    "PageNumber",
    "pageNumber"
  );

  const initials = getInitials(
    fullName
  );

  // ==========================================================
  // SCREEN
  // ==========================================================

  return (
    <SafeAreaView style={styles.safe}>

      <StatusBar
        barStyle="light-content"
        backgroundColor={ORANGE}
      />

      {/* ================================================== */}
      {/* HEADER */}
      {/* ================================================== */}

      <View style={styles.header}>

        <Text style={styles.headerTitle}>
          My Profile
        </Text>

        <Text style={styles.headerSub}>
          Vadhu-Var Suchi 2025
        </Text>

      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}

        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={[ORANGE]}
          />
        }
      >

        {/* ================================================= */}
        {/* PROFILE CARD */}
        {/* ================================================= */}

        <View style={styles.avatarCard}>

          <View style={styles.avatarStrip} />

          <View style={styles.avatarCircle}>

            <Text style={styles.avatarInitials}>
              {initials}
            </Text>

          </View>

          <Text style={styles.userName}>
            {displayValue(fullName)}
          </Text>

          <Text style={styles.userSub}>
            {displayValue(gender)}
            {"  •  "}
            {displayValue(mandal)}
          </Text>

          <View style={styles.profileIdPill}>

            <Text style={styles.profileIdLabel}>
              Profile ID:
            </Text>

            <Text style={styles.profileIdValue}>
              {displayValue(
                profileId ||
                applicationNo
              )}
            </Text>

          </View>

        </View>

        {/* ================================================= */}
        {/* PERSONAL INFORMATION */}
        {/* ================================================= */}

        <SectionCard title="👤 Personal Information">

          <InfoRow
            icon="🪪"
            label="Full Name"
            value={fullName}
          />

          <Divider />

          <InfoRow
            icon="⚧"
            label="Gender"
            value={gender}
          />

          <Divider />

          <InfoRow
            icon="💍"
            label="Candidate Type"
            value={candidateType}
          />

          <Divider />

          <InfoRow
            icon="🏛️"
            label="Mandal"
            value={mandal}
          />

          <Divider />

          <InfoRow
            icon="🎂"
            label="Birth Date"
            value={formatDate(birthDate)}
          />

          <Divider />

          <InfoRow
            icon="📍"
            label="Birth Place"
            value={birthPlace}
          />

        </SectionCard>

        {/* ================================================= */}
        {/* CONTACT */}
        {/* ================================================= */}

        <SectionCard title="📞 Contact Details">

          <InfoRow
            icon="📱"
            label="Mobile Number"
            value={
              mobile
                ? `+91 ${mobile}`
                : ""
            }
          />

          <Divider />

          <InfoRow
            icon="✉️"
            label="Email Address"
            value={email}
          />

        </SectionCard>

        {/* ================================================= */}
        {/* EDUCATION */}
        {/* ================================================= */}

        <SectionCard title="🎓 Education & Employment">

          <InfoRow
            icon="🎓"
            label="Education Level"
            value={educationLevel}
          />

          <Divider />

          <InfoRow
            icon="📚"
            label="Education"
            value={education}
          />

          <Divider />

          <InfoRow
            icon="💼"
            label="Occupation"
            value={job}
          />

          <Divider />

          <InfoRow
            icon="👔"
            label="Position"
            value={position}
          />

          <Divider />

          <InfoRow
            icon="🏢"
            label="Company"
            value={company}
          />

          <Divider />

          <InfoRow
            icon="📍"
            label="Place of Employment"
            value={employmentPlace}
          />

          <Divider />

          <InfoRow
            icon="💰"
            label="Monthly Income"
            value={income}
          />

        </SectionCard>

        {/* ================================================= */}
        {/* PERSONAL DETAILS */}
        {/* ================================================= */}

        <SectionCard title="🧍 Personal Details">

          <InfoRow
            icon="📏"
            label="Height"
            value={
              foot || inch
                ? `${foot || 0}' ${inch || 0}"`
                : ""
            }
          />

          <Divider />

          <InfoRow
            icon="🎨"
            label="Complexion"
            value={complexion}
          />

          <Divider />

          <InfoRow
            icon="🩸"
            label="Blood Group"
            value={bloodGroup}
          />

          <Divider />

          <InfoRow
            icon="🛕"
            label="Gotra"
            value={gotra}
          />

          <Divider />

          <InfoRow
            icon="👪"
            label="Mamkul"
            value={mamkul}
          />

          <Divider />

          <InfoRow
            icon="🏠"
            label="Hometown"
            value={hometown}
          />

          <Divider />

          <InfoRow
            icon="📍"
            label="Taluka"
            value={taluka}
          />

          <Divider />

          <InfoRow
            icon="🗺️"
            label="District"
            value={district}
          />

        </SectionCard>

        {/* ================================================= */}
        {/* PARENT / GUARDIAN */}
        {/* ================================================= */}

        <SectionCard title="👨‍👩‍👧 Parent / Guardian">

          <InfoRow
            icon="👨"
            label="Father / Guardian"
            value={fatherName}
          />

          <Divider />

          <InfoRow
            icon="📱"
            label="Contact Number"
            value={fatherContact}
          />

          <Divider />

          <InfoRow
            icon="📱"
            label="Alternate Contact"
            value={fatherContact2}
          />

          <Divider />

          <InfoRow
            icon="🏠"
            label="Address"
            value={parentAddress}
          />

          <Divider />

          <InfoRow
            icon="✉️"
            label="Email"
            value={parentEmail}
          />

        </SectionCard>

        {/* ================================================= */}
        {/* EXPECTATIONS */}
        {/* ================================================= */}

        <SectionCard title="❤️ Expectations">

          <InfoRow
            icon="💭"
            label="Partner Expectations"
            value={expectations}
          />

        </SectionCard>

        {/* ================================================= */}
        {/* APPLICATION */}
        {/* ================================================= */}

        <SectionCard title="📄 Application">

          <InfoRow
            icon="🔢"
            label="Application Number"
            value={applicationNo}
          />

          <Divider />

          <InfoRow
            icon="🆔"
            label="Candidate ID"
            value={profileId}
          />

          <Divider />

          <InfoRow
            icon="📌"
            label="Status"
            value={status || "Active"}
          />

        </SectionCard>

        {/* ================================================= */}
        {/* BOOKLET */}
        {/* ================================================= */}

        <SectionCard title="📖 Vadhu-Var Suchi Booklet 2025">

          <View style={styles.bookletRow}>

            <Text style={styles.bookletQuestion}>
              Is my name printed in the booklet?
            </Text>

            <Badge
              value={isPrinted}
            />

          </View>

          <Divider />

          <View style={styles.bookletRow}>

            <Text style={styles.bookletQuestion}>
              Page Number
            </Text>

            <Text style={styles.bookletPage}>
              {displayValue(bookletPage)}
            </Text>

          </View>

        </SectionCard>

        {/* ================================================= */}
        {/* STATUS */}
        {/* ================================================= */}

        <View style={styles.statusStrip}>

          <View style={styles.statusItem}>

            <Text style={styles.statusValue}>
              2025
            </Text>

            <Text style={styles.statusLabel}>
              Year
            </Text>

          </View>

          <View style={styles.statusSep} />

          <View style={styles.statusItem}>

            <Text
              style={[
                styles.statusValue,
                {
                  color: "#16a34a",
                },
              ]}
            >
              {status || "Active"}
            </Text>

            <Text style={styles.statusLabel}>
              Status
            </Text>

          </View>

          <View style={styles.statusSep} />

          <View style={styles.statusItem}>

            <Text style={styles.statusValue}>
              —
            </Text>

            <Text style={styles.statusLabel}>
              Matches
            </Text>

          </View>

        </View>

        {/* ================================================= */}
        {/* REFRESH */}
        {/* ================================================= */}

        <TouchableOpacity
          style={styles.refreshButton}
          onPress={handleRefresh}
          activeOpacity={0.85}
        >

          <Text style={styles.refreshButtonText}>
            ↻  Refresh Profile
          </Text>

        </TouchableOpacity>

        {/* ================================================= */}
        {/* DASHBOARD */}
        {/* ================================================= */}

        <TouchableOpacity
          style={styles.dashboardButton}
          onPress={() =>
            navigation.navigate("Dashboard")
          }
          activeOpacity={0.85}
        >

          <Text style={styles.dashboardButtonText}>
            Go to Dashboard →
          </Text>

        </TouchableOpacity>

        {/* ================================================= */}
        {/* LOGOUT */}
        {/* ================================================= */}

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.85}
        >

          <Text style={styles.logoutButtonText}>
            Logout
          </Text>

        </TouchableOpacity>

        <View style={{ height: 40 }} />

      </ScrollView>

    </SafeAreaView>
  );
}

// ============================================================
// COLORS
// ============================================================

const ORANGE = "#f97316";

const ORANGE_LIGHT = "#fff7ed";

const TEXT1 = "#111827";

const TEXT2 = "#6b7280";

const BORDER = "#e5e7eb";

const WHITE = "#ffffff";

// ============================================================
// STYLES
// ============================================================

const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },

  // ==========================================================
  // HEADER
  // ==========================================================

  header: {
    backgroundColor: ORANGE,
    paddingTop: 16,
    paddingBottom: 20,
    alignItems: "center",
  },

  headerTitle: {
    color: WHITE,
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: 0.3,
  },

  headerSub: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
    marginTop: 2,
    fontWeight: "500",
  },

  // ==========================================================
  // SCROLL
  // ==========================================================

  scroll: {
    paddingHorizontal: 16,
    paddingTop: 0,
  },

  // ==========================================================
  // LOADING
  // ==========================================================

  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  loadingText: {
    marginTop: 12,
    color: TEXT2,
    fontSize: 14,
  },

  // ==========================================================
  // ERROR
  // ==========================================================

  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  errorIcon: {
    fontSize: 45,
    marginBottom: 15,
  },

  errorTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: TEXT1,
    marginBottom: 8,
  },

  errorText: {
    textAlign: "center",
    color: TEXT2,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 20,
  },

  retryButton: {
    backgroundColor: ORANGE,
    paddingHorizontal: 28,
    paddingVertical: 13,
    borderRadius: 10,
  },

  retryButtonText: {
    color: WHITE,
    fontSize: 15,
    fontWeight: "700",
  },

  // ==========================================================
  // PROFILE CARD
  // ==========================================================

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
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
  },

  avatarInitials: {
    fontSize: 30,
    fontWeight: "800",
    color: ORANGE,
  },

  userName: {
    fontSize: 20,
    fontWeight: "800",
    color: TEXT1,
    marginTop: 10,
    marginBottom: 2,
    textAlign: "center",
  },

  userSub: {
    fontSize: 13,
    color: TEXT2,
    fontWeight: "500",
    marginBottom: 10,
  },

  profileIdPill: {
    flexDirection: "row",
    backgroundColor: ORANGE_LIGHT,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    alignItems: "center",
  },

  profileIdLabel: {
    fontSize: 12,
    color: TEXT2,
    fontWeight: "500",
  },

  profileIdValue: {
    fontSize: 13,
    color: ORANGE,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  // ==========================================================
  // CARD
  // ==========================================================

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
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  cardTitle: {
    fontSize: 12,
    fontWeight: "800",
    color: ORANGE,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginBottom: 12,
  },

  // ==========================================================
  // INFO ROW
  // ==========================================================

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },

  infoIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: ORANGE_LIGHT,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  infoIcon: {
    fontSize: 16,
  },

  infoText: {
    flex: 1,
  },

  infoLabel: {
    fontSize: 10,
    color: TEXT2,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 2,
  },

  infoValue: {
    fontSize: 15,
    color: TEXT1,
    fontWeight: "600",
  },

  divider: {
    height: 1,
    backgroundColor: BORDER,
  },

  // ==========================================================
  // BOOKLET
  // ==========================================================

  bookletRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },

  bookletQuestion: {
    fontSize: 14,
    color: TEXT1,
    fontWeight: "500",
    flex: 1,
    paddingRight: 8,
  },

  bookletPage: {
    fontSize: 15,
    color: TEXT2,
    fontWeight: "700",
  },

  // ==========================================================
  // BADGE
  // ==========================================================

  badge: {
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },

  badgeYes: {
    backgroundColor: "#dcfce7",
  },

  badgeNo: {
    backgroundColor: "#fee2e2",
  },

  badgeText: {
    fontSize: 13,
    fontWeight: "700",
  },

  badgeTextYes: {
    color: "#16a34a",
  },

  badgeTextNo: {
    color: "#dc2626",
  },

  // ==========================================================
  // STATUS
  // ==========================================================

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
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  statusItem: {
    flex: 1,
    alignItems: "center",
  },

  statusValue: {
    fontSize: 16,
    fontWeight: "800",
    color: ORANGE,
    marginBottom: 2,
  },

  statusLabel: {
    fontSize: 11,
    color: TEXT2,
    fontWeight: "500",
  },

  statusSep: {
    width: 1,
    backgroundColor: BORDER,
  },

  // ==========================================================
  // REFRESH BUTTON
  // ==========================================================

  refreshButton: {
    backgroundColor: WHITE,
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: BORDER,
  },

  refreshButtonText: {
    color: TEXT1,
    fontSize: 15,
    fontWeight: "700",
  },

  // ==========================================================
  // DASHBOARD BUTTON
  // ==========================================================

  dashboardButton: {
    backgroundColor: ORANGE,
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 12,

    elevation: 4,

    shadowColor: ORANGE,
    shadowOpacity: 0.35,
    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  dashboardButtonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.4,
  },

  // ==========================================================
  // LOGOUT BUTTON
  // ==========================================================

  logoutButton: {
    backgroundColor: WHITE,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#dc2626",
  },

  logoutButtonText: {
    color: "#dc2626",
    fontSize: 15,
    fontWeight: "700",
  },

});