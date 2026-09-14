import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import registrationApi from "../../api/registrationApi";
import { getAuthUserId } from "../../api/apiClient";

const COMMON_EDUCATION_LEVELS = [
  "Graduate",
  "Post Graduate",
  "Engineer",
  "Doctor",
  "Diploma",
  "CA / CS / ICWA",
  "Ph.D.",
  "12th / Higher Secondary",
];

const OCCUPATION_TYPES = [
  { value: "नोकरी (Job / Service)", label: "नोकरी" },
  { value: "व्यवसाय (Business)", label: "व्यवसाय" },
  { value: "शेती (Agriculture)", label: "शेती" },
  { value: "काही नाही (Not Working)", label: "काही नाही" },
];

export default function Step2({
  data = {},
  setData,
  onNext,
  onBack,
  candidateId,
  applicationNo = "New",
  currentUser = {},
}) {
  // -------------------------------------------------------------
  // STATE
  // -------------------------------------------------------------
  const [educationLevel, setEducationLevel] = useState(data.educationLevel || "");
  const [education, setEducation] = useState(data.education || "");
  const [jobBuzEdu, setJobBuzEdu] = useState(data.jobBuzEdu || "नोकरी");
  const [position, setPosition] = useState(data.position || "");
  const [company, setCompany] = useState(data.company || "");
  const [placeOfEmployment, setPlaceOfEmployment] = useState(data.placeOfEmployment || "");
  const [companyPhone, setCompanyPhone] = useState(data.companyPhone || "");
  const [monthlyIncome, setMonthlyIncome] = useState(data.monthlyIncome || "");
  const [clientStamp, setClientStamp] = useState(data.clientStamp || data.ClientStamp || null);

  const [saving, setSaving] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(false);
  const [errors, setErrors] = useState({});

  const educationRef = useRef(null);
  const positionRef = useRef(null);
  const companyRef = useRef(null);
  const placeRef = useRef(null);
  const phoneRef = useRef(null);
  const incomeRef = useRef(null);

  // -------------------------------------------------------------
  // LOAD EXISTING DETAILS (GET /api/registration/GetQualificationEmploymentDetails)
  // -------------------------------------------------------------
  useEffect(() => {
    const effectiveId = Number(candidateId || currentUser?.CandidateId || 0);
    if (effectiveId > 0) {
      loadSavedDetails(effectiveId);
    }
  }, [candidateId]);

  const loadSavedDetails = async (id) => {
    try {
      setLoadingInitial(true);
      const res = await registrationApi.getQualificationEmploymentDetails(id);
      console.log("Step 2 loaded qualification details:", res);
      if (res) {
        const stamp = res.ClientStamp || res.clientStamp;
        if (stamp) setClientStamp(stamp);

        if (res.EducationLevel) setEducationLevel(res.EducationLevel);
        if (res.Education) setEducation(res.Education);
        if (res.JobBuzEdu) setJobBuzEdu(res.JobBuzEdu);
        if (res.Position) setPosition(res.Position);
        if (res.Company) setCompany(res.Company);
        if (res.PlaceOfEmployment) setPlaceOfEmployment(res.PlaceOfEmployment);
        if (res.CompanyPhone) setCompanyPhone(res.CompanyPhone);
        if (res.MonthlyIncome) setMonthlyIncome(res.MonthlyIncome);
      }
    } catch (err) {
      console.log("Step 2 load notice:", err.message);
    } finally {
      setLoadingInitial(false);
    }
  };

  // -------------------------------------------------------------
  // VALIDATION
  // -------------------------------------------------------------
  const validateForm = () => {
    const errs = {};
    if (!educationLevel.trim()) {
      errs.educationLevel = "Education level is required (शिक्षण पातळी आवश्यक आहे)";
    }
    if (!education.trim()) {
      errs.education = "Education degree / field is required (पदवी / शाखा आवश्यक आहे)";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // -------------------------------------------------------------
  // SUBMIT (POST /api/registration/SaveQualificationEmploymentDetails)
  // -------------------------------------------------------------
  const handleSaveAndContinue = async () => {
    if (!validateForm()) {
      Alert.alert("Required Fields", "Please fill in all mandatory fields marked with *.");
      return;
    }

    try {
      setSaving(true);
      const effectiveCandidateId = Number(candidateId || currentUser?.CandidateId || 0);
      const effectiveUserId = Number(currentUser?.UserId || data?.userId || getAuthUserId() || 0);

      const payload = {
        ActorUserId: effectiveUserId,
        ActorType: "candidate",
        ClientStamp: clientStamp || null,
        CandidateId: effectiveCandidateId,
        UserId: effectiveUserId,
        UserLoginId: currentUser?.UserLoginId || currentUser?.Email || "",
        EducationLevel: educationLevel.trim(),
        Education: education.trim(),
        JobBuzEdu: jobBuzEdu.trim(),
        Position: position.trim(),
        Company: company.trim(),
        PlaceOfEmployment: placeOfEmployment.trim(),
        CompanyPhone: companyPhone.trim(),
        MonthlyIncome: monthlyIncome.trim(),
      };

      const response = await registrationApi.saveQualificationEmploymentDetails(payload);

      if (response?.Success === false) {
        throw new Error(response?.Message || "Failed to save qualification details.");
      }

      const newStamp = response?.Data?.ClientStamp || response?.ClientStamp;
      if (newStamp) setClientStamp(newStamp);

      if (setData) {
        setData((prev) => ({
          ...prev,
          ClientStamp: newStamp || clientStamp || null,
          educationLevel,
          education,
          jobBuzEdu,
          position,
          company,
          placeOfEmployment,
          companyPhone,
          monthlyIncome,
        }));
      }

      Alert.alert(
        "Success",
        "शिक्षण आणि नोकरीची माहिती साठवली! (Qualification Details Saved)",
        [{ text: "Continue to Step 3", onPress: () => onNext && onNext() }]
      );
    } catch (err) {
      console.error("Save Qualification Error:", err);
      const msg =
        err.response?.data?.Message ||
        err.response?.data?.ErrorMessage ||
        err.message ||
        "Could not save qualification details. Please check network connection.";
      Alert.alert("Save Failed", msg);
    } finally {
      setSaving(false);
    }
  };

  if (loadingInitial) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#831843" />
        <Text style={styles.loadingText}>Loading saved details...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerTopRow}>
            <View style={styles.bannerTitleRow}>
              <Ionicons name="school-outline" size={24} color="#FFFFFF" />
              <View style={{ marginLeft: 8 }}>
                <Text style={styles.bannerTitle}>
                  Qualification & Employment (शिक्षण आणि नोकरी/व्यवसाय)
                </Text>
                <Text style={styles.bannerSub}>
                  Application No: <Text style={styles.boldWhite}>{applicationNo}</Text>
                </Text>
              </View>
            </View>
            <View style={styles.stepBadge}>
              <Text style={styles.stepBadgeText}>STEP 2 / 5</Text>
            </View>
          </View>
        </View>

        {/* ── SECTION 1: EDUCATION DETAILS ── */}
        <View style={[styles.sectionCard, styles.purpleBorder]}>
          <View style={[styles.sectionCardHeader, styles.purpleHeader]}>
            <Ionicons name="ribbon-outline" size={18} color="#6D28D9" />
            <Text style={[styles.sectionHeading, { color: "#6D28D9" }]}>
              Education Details (शिक्षणाची माहिती)
            </Text>
          </View>

          <View style={styles.sectionBody}>
            {/* Quick Education Level Chips */}
            <Text style={styles.label}>
              Education Level (शिक्षण पातळी) <Text style={styles.required}>*</Text>
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.chipsScroll}
            >
              {COMMON_EDUCATION_LEVELS.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[styles.chip, educationLevel === item && styles.chipActive]}
                  onPress={() => {
                    setEducationLevel(item);
                    if (errors.educationLevel) setErrors((p) => ({ ...p, educationLevel: null }));
                  }}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[styles.chipText, educationLevel === item && styles.chipTextActive]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={styles.inputGroup}>
              <TextInput
                style={[styles.input, errors.educationLevel && styles.inputError]}
                placeholder="Or type education level: Graduate / Post Graduate / Engineer"
                placeholderTextColor="#9CA3AF"
                value={educationLevel}
                onChangeText={(val) => {
                  setEducationLevel(val);
                  if (errors.educationLevel) setErrors((p) => ({ ...p, educationLevel: null }));
                }}
                returnKeyType="next"
                onSubmitEditing={() => educationRef.current?.focus()}
              />
              {errors.educationLevel && (
                <Text style={styles.errorText}>{errors.educationLevel}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Degree & Specialization (पदवी / शिक्षण शाखा) <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                ref={educationRef}
                style={[styles.input, errors.education && styles.inputError]}
                placeholder="e.g. B.E. Computer Science, M.B.A. Finance, M.B.B.S."
                placeholderTextColor="#9CA3AF"
                value={education}
                onChangeText={(val) => {
                  setEducation(val);
                  if (errors.education) setErrors((p) => ({ ...p, education: null }));
                }}
                returnKeyType="next"
                onSubmitEditing={() => positionRef.current?.focus()}
              />
              {errors.education && <Text style={styles.errorText}>{errors.education}</Text>}
              <Text style={styles.hintText}>
                उदा. बी.ई., एम.बी.ए., बी.कॉम., डी.एड., इंजिनियर, डॉक्टर इ.
              </Text>
            </View>
          </View>
        </View>

        {/* ── SECTION 2: OCCUPATION & EMPLOYMENT ── */}
        <View style={[styles.sectionCard, styles.amberBorder]}>
          <View style={[styles.sectionCardHeader, styles.amberHeader]}>
            <MaterialCommunityIcons name="briefcase-outline" size={18} color="#D97706" />
            <Text style={[styles.sectionHeading, { color: "#B45309" }]}>
              Employment / Business (नोकरी / व्यवसाय माहिती)
            </Text>
          </View>

          <View style={styles.sectionBody}>
            {/* Occupation Type Selector */}
            <Text style={styles.label}>Occupation Type (नोकरी/व्यवसाय प्रकार)</Text>
            <View style={styles.radioRow}>
              {OCCUPATION_TYPES.map((type) => (
                <TouchableOpacity
                  key={type.label}
                  style={[styles.radioBtn, jobBuzEdu.includes(type.label) && styles.radioBtnActive]}
                  onPress={() => setJobBuzEdu(type.label)}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.radioBtnText,
                      jobBuzEdu.includes(type.label) && styles.radioBtnTextActive,
                    ]}
                  >
                    {type.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.row2}>
              <View style={{ flex: 1, marginRight: 8 }}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Designation (हुद्दा / पद)</Text>
                  <TextInput
                    ref={positionRef}
                    style={styles.input}
                    placeholder="e.g. Software Engineer"
                    placeholderTextColor="#9CA3AF"
                    value={position}
                    onChangeText={setPosition}
                    returnKeyType="next"
                    onSubmitEditing={() => companyRef.current?.focus()}
                  />
                </View>
              </View>

              <View style={{ flex: 1, marginLeft: 8 }}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Company Name (कंपनी नाव)</Text>
                  <TextInput
                    ref={companyRef}
                    style={styles.input}
                    placeholder="e.g. TCS / Infosys"
                    placeholderTextColor="#9CA3AF"
                    value={company}
                    onChangeText={setCompany}
                    returnKeyType="next"
                    onSubmitEditing={() => placeRef.current?.focus()}
                  />
                </View>
              </View>
            </View>

            <View style={styles.row2}>
              <View style={{ flex: 1, marginRight: 8 }}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Job Location (नोकरीचे ठिकाण / शहर)</Text>
                  <TextInput
                    ref={placeRef}
                    style={styles.input}
                    placeholder="e.g. Pune, Mumbai"
                    placeholderTextColor="#9CA3AF"
                    value={placeOfEmployment}
                    onChangeText={setPlaceOfEmployment}
                    returnKeyType="next"
                    onSubmitEditing={() => phoneRef.current?.focus()}
                  />
                </View>
              </View>

              <View style={{ flex: 1, marginLeft: 8 }}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Company Phone (ऑफिस फोन)</Text>
                  <TextInput
                    ref={phoneRef}
                    style={styles.input}
                    placeholder="Phone number"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="phone-pad"
                    value={companyPhone}
                    onChangeText={setCompanyPhone}
                    returnKeyType="next"
                    onSubmitEditing={() => incomeRef.current?.focus()}
                  />
                </View>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Monthly Income (मासिक उत्पन्न ₹)</Text>
              <TextInput
                ref={incomeRef}
                style={styles.input}
                placeholder="e.g. 50000"
                placeholderTextColor="#9CA3AF"
                keyboardType="numeric"
                value={monthlyIncome}
                onChangeText={setMonthlyIncome}
                returnKeyType="done"
              />
              <Text style={styles.hintText}>उदा. 35000, 60000, 120000</Text>
            </View>
          </View>
        </View>

        {/* ── ACTION BUTTONS ── */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => onBack && onBack()}
            activeOpacity={0.8}
          >
            <Ionicons name="arrow-back" size={18} color="#475569" />
            <Text style={styles.backBtnText}>Back (मागे)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.continueBtn, saving && styles.continueBtnDisabled]}
            onPress={handleSaveAndContinue}
            disabled={saving}
            activeOpacity={0.85}
          >
            {saving ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <View style={styles.continueBtnContent}>
                <Text style={styles.continueBtnText}>Save & Continue to Step 3</Text>
                <Ionicons
                  name="arrow-forward-circle"
                  size={20}
                  color="#FFFFFF"
                  style={{ marginLeft: 6 }}
                />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: "#F8FAFC",
    flexGrow: 1,
    paddingBottom: 36,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F8FAFC",
  },
  loadingText: {
    marginTop: 10,
    color: "#64748B",
    fontSize: 13,
  },
  banner: {
    backgroundColor: "#831843",
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  bannerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bannerTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
  bannerSub: {
    color: "#FCE7F3",
    fontSize: 11,
    marginTop: 2,
  },
  boldWhite: {
    fontWeight: "700",
    color: "#FFFFFF",
  },
  stepBadge: {
    backgroundColor: "#BE185D",
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 6,
  },
  stepBadgeText: {
    color: "#FFFFFF",
    fontSize: 10.5,
    fontWeight: "800",
  },
  sectionCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 14,
    overflow: "hidden",
    borderWidth: 1,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  purpleBorder: { borderColor: "#DDD6FE" },
  purpleHeader: { backgroundColor: "#F5F3FF" },
  amberBorder: { borderColor: "#FDE68A" },
  amberHeader: { backgroundColor: "#FFFBEB" },
  sectionCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  sectionHeading: {
    fontSize: 13.5,
    fontWeight: "700",
    marginLeft: 6,
  },
  sectionBody: {
    padding: 14,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 4,
  },
  required: {
    color: "#EF4444",
  },
  input: {
    height: 42,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 7,
    paddingHorizontal: 12,
    fontSize: 13.5,
    color: "#0F172A",
    backgroundColor: "#FFFFFF",
  },
  inputError: {
    borderColor: "#EF4444",
    backgroundColor: "#FEF2F2",
  },
  errorText: {
    fontSize: 11,
    color: "#EF4444",
    marginTop: 3,
  },
  hintText: {
    fontSize: 10.5,
    color: "#64748B",
    marginTop: 3,
  },
  chipsScroll: {
    flexDirection: "row",
    paddingVertical: 4,
    marginBottom: 8,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#F1F5F9",
    borderWidth: 1,
    borderColor: "#CBD5E1",
  },
  chipActive: {
    backgroundColor: "#831843",
    borderColor: "#831843",
  },
  chipText: {
    fontSize: 12,
    color: "#334155",
    fontWeight: "600",
  },
  chipTextActive: {
    color: "#FFFFFF",
  },
  radioRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
    marginTop: 4,
  },
  radioBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    backgroundColor: "#F8FAFC",
  },
  radioBtnActive: {
    borderColor: "#D97706",
    backgroundColor: "#FEF3C7",
  },
  radioBtnText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#475569",
  },
  radioBtnTextActive: {
    color: "#B45309",
    fontWeight: "700",
  },
  row2: {
    flexDirection: "row",
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 6,
  },
  backBtn: {
    flex: 0.35,
    height: 50,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    gap: 4,
  },
  backBtnText: {
    fontSize: 13.5,
    fontWeight: "700",
    color: "#475569",
  },
  continueBtn: {
    flex: 0.65,
    backgroundColor: "#831843",
    height: 50,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  continueBtnDisabled: {
    opacity: 0.65,
  },
  continueBtnContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  continueBtnText: {
    color: "#FFFFFF",
    fontSize: 13.5,
    fontWeight: "700",
  },
});