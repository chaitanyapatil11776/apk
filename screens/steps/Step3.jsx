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
import DateTimePicker from "@react-native-community/datetimepicker";
import registrationApi from "../../api/registrationApi";
import { getAuthUserId } from "../../api/apiClient";

const COMPLEXION_OPTIONS = ["गोरा (Fair)", "गव्हाळ (Wheatish)", "सावळा (Dusky)"];
const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function Step3({
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
  const [birthDate, setBirthDate] = useState(data.birthDate || "");
  const [birthHrs, setBirthHrs] = useState(data.birthHrs || "");
  const [birthMin, setBirthMin] = useState(data.birthMin || "");
  const [birthTimeAmPm, setBirthTimeAmPm] = useState("AM");
  const [birthPlace, setBirthPlace] = useState(data.birthPlace || "");

  const [foot, setFoot] = useState(data.foot || "");
  const [inch, setInch] = useState(data.inch || "");

  const [complexion, setComplexion] = useState(data.complexion || "गोरा");
  const [bloodGroup, setBloodGroup] = useState(data.bloodGroup || "B+");

  const [gotra, setGotra] = useState(data.gotra || "");
  const [mamkul, setMamkul] = useState(data.mamkul || "");
  const [hometown, setHometown] = useState(data.hometown || "");
  const [taluka, setTaluka] = useState(data.taluka || "");
  const [district, setDistrict] = useState(data.district || "");

  const [broMarried, setBroMarried] = useState(data.broMarried != null ? String(data.broMarried) : "0");
  const [broUnmarried, setBroUnmarried] = useState(data.broUnmarried != null ? String(data.broUnmarried) : "0");
  const [sisMarried, setSisMarried] = useState(data.sisMarried != null ? String(data.sisMarried) : "0");
  const [sisUnmarried, setSisUnmarried] = useState(data.sisUnmarried != null ? String(data.sisUnmarried) : "0");

  const [personalMobile, setPersonalMobile] = useState(
    data.personalMobile || currentUser?.Mobile || ""
  );

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(false);
  const [errors, setErrors] = useState({});
  const [clientStamp, setClientStamp] = useState(data.clientStamp || data.ClientStamp || null);

  // -------------------------------------------------------------
  // LOAD EXISTING DETAILS (GET /api/registration/GetPersonalDetails)
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
      const res = await registrationApi.getPersonalDetails(id);
      console.log("Step 3 loaded personal details:", res);
      if (res) {
        const stamp = res.ClientStamp || res.clientStamp;
        if (stamp) setClientStamp(stamp);

        if (res.BirthDate) setBirthDate(res.BirthDate);
        if (res.BirthHrs) setBirthHrs(res.BirthHrs);
        if (res.BirthMin) setBirthMin(res.BirthMin);
        if (res.BirthPlace) setBirthPlace(res.BirthPlace);
        if (res.Foot) setFoot(res.Foot);
        if (res.Inch) setInch(res.Inch);
        if (res.Complexion) setComplexion(res.Complexion);
        if (res.BloodGroup) setBloodGroup(res.BloodGroup);
        if (res.Gotra) setGotra(res.Gotra);
        if (res.Mamkul) setMamkul(res.Mamkul);
        if (res.Hometown) setHometown(res.Hometown);
        if (res.Taluka) setTaluka(res.Taluka);
        if (res.District) setDistrict(res.District);
        if (res.BroMarried != null) setBroMarried(String(res.BroMarried));
        if (res.BroUnmarried != null) setBroUnmarried(String(res.BroUnmarried));
        if (res.SisMarried != null) setSisMarried(String(res.SisMarried));
        if (res.SisUnmarried != null) setSisUnmarried(String(res.SisUnmarried));
        if (res.PersonalMobile) setPersonalMobile(res.PersonalMobile);
      }
    } catch (err) {
      console.log("Step 3 load notice:", err.message);
    } finally {
      setLoadingInitial(false);
    }
  };

  // -------------------------------------------------------------
  // MARATHI TRANSLITERATION
  // -------------------------------------------------------------
  const transliterateToMarathi = async (text, setter) => {
    setter(text);
    if (!text || !text.endsWith(" ")) return;

    const trimmed = text.trim();
    const words = trimmed.split(/\s+/);
    const lastWord = words[words.length - 1];
    if (!lastWord || /^[\u0900-\u097F]+$/.test(lastWord)) return;

    try {
      const url = `https://inputtools.google.com/request?text=${encodeURIComponent(
        lastWord
      )}&itc=mr-t-i0-und&num=1`;
      const res = await fetch(url);
      const json = await res.json();
      if (json?.[0] === "SUCCESS" && json?.[1]?.[0]?.[1]?.[0]) {
        const marathiWord = json[1][0][1][0];
        words[words.length - 1] = marathiWord;
        setter(words.join(" ") + " ");
      }
    } catch (e) {
      // Fallback
    }
  };

  // -------------------------------------------------------------
  // DATE PICKER CHANGE
  // -------------------------------------------------------------
  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      const day = String(selectedDate.getDate()).padStart(2, "0");
      const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const year = selectedDate.getFullYear();
      setBirthDate(`${day}/${month}/${year}`);
      if (errors.birthDate) setErrors((p) => ({ ...p, birthDate: null }));
    }
  };

  // -------------------------------------------------------------
  // VALIDATION
  // -------------------------------------------------------------
  const validateForm = () => {
    const errs = {};
    if (!birthDate.trim()) errs.birthDate = "Birth date is required (जन्म तारीख आवश्यक आहे)";
    if (!birthPlace.trim()) errs.birthPlace = "Birth place is required (जन्मस्थळ आवश्यक आहे)";
    if (!foot.trim()) errs.foot = "Height in feet is required (ऊंची फुट आवश्यक आहे)";
    if (!gotra.trim()) errs.gotra = "Gotra is required (गोत्र आवश्यक आहे)";
    if (!mamkul.trim()) errs.mamkul = "Mamkul is required (मामकुळ आवश्यक आहे)";
    if (!hometown.trim()) errs.hometown = "Hometown / village is required (मूळगाव आवश्यक आहे)";
    if (!district.trim()) errs.district = "District is required (जिल्हा आवश्यक आहे)";
    if (!personalMobile.trim()) errs.personalMobile = "Mobile number is required (मोबाइल नंबर आवश्यक आहे)";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // -------------------------------------------------------------
  // SUBMIT (POST /api/registration/SavePersonalDetails)
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

      const formattedBirthTime = birthHrs.trim()
        ? `${birthHrs.trim().padStart(2, "0")}:${(birthMin.trim() || "00").padStart(2, "0")} ${birthTimeAmPm}`
        : "";

      const payload = {
        ActorUserId: effectiveUserId,
        ActorType: "candidate",
        ClientStamp: clientStamp || null,
        CandidateId: effectiveCandidateId,
        UserId: effectiveUserId,
        UserLoginId: currentUser?.UserLoginId || currentUser?.Email || "",
        BirthDate: birthDate.trim(),
        BirthHrs: birthHrs.trim(),
        BirthMin: birthMin.trim(),
        BirthTime: formattedBirthTime,
        BirthPlace: birthPlace.trim(),
        Foot: foot.trim(),
        Inch: inch.trim() || "0",
        Complexion: complexion.trim(),
        BloodGroup: bloodGroup.trim(),
        Gotra: gotra.trim(),
        Mamkul: mamkul.trim(),
        Hometown: hometown.trim(),
        Taluka: taluka.trim(),
        District: district.trim(),
        BroMarried: broMarried.trim() || "0",
        BroUnmarried: broUnmarried.trim() || "0",
        SisMarried: sisMarried.trim() || "0",
        SisUnmarried: sisUnmarried.trim() || "0",
        MarriageDate: null,
        SeparationDate: null,
        PersonalMobile: personalMobile.trim(),
      };

      const response = await registrationApi.savePersonalDetails(payload);

      if (response?.Success === false) {
        throw new Error(response?.Message || "Failed to save personal details.");
      }

      const newStamp = response?.Data?.ClientStamp || response?.ClientStamp;
      if (newStamp) setClientStamp(newStamp);

      if (setData) {
        setData((prev) => ({
          ...prev,
          ClientStamp: newStamp || clientStamp || null,
          ...payload,
        }));
      }

      Alert.alert(
        "Success",
        "वैयक्तिक माहिती यशस्वीरित्या साठवली! (Personal Details Saved)",
        [{ text: "Continue to Step 4", onPress: () => onNext && onNext() }]
      );
    } catch (err) {
      console.error("Save Personal Details Error:", err);
      const msg =
        err.response?.data?.Message ||
        err.response?.data?.ErrorMessage ||
        err.message ||
        "Could not save personal details. Please check network connection.";
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
              <Ionicons name="finger-print-outline" size={24} color="#FFFFFF" />
              <View style={{ marginLeft: 8 }}>
                <Text style={styles.bannerTitle}>Personal Information (वैयक्तिक माहिती)</Text>
                <Text style={styles.bannerSub}>
                  Application No: <Text style={styles.boldWhite}>{applicationNo}</Text>
                </Text>
              </View>
            </View>
            <View style={styles.stepBadge}>
              <Text style={styles.stepBadgeText}>STEP 3 / 5</Text>
            </View>
          </View>
        </View>

        {/* ── SECTION 1: BIRTH DETAILS ── */}
        <View style={[styles.sectionCard, styles.purpleBorder]}>
          <View style={[styles.sectionCardHeader, styles.purpleHeader]}>
            <Ionicons name="calendar-outline" size={18} color="#6D28D9" />
            <Text style={[styles.sectionHeading, { color: "#6D28D9" }]}>
              Birth Date, Time & Place (जन्म माहिती)
            </Text>
          </View>

          <View style={styles.sectionBody}>
            {/* Birth Date */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Date of Birth (जन्म तारीख) <Text style={styles.required}>*</Text>
              </Text>
              <TouchableOpacity
                style={[styles.datePickerBtn, errors.birthDate && styles.inputError]}
                onPress={() => setShowDatePicker(true)}
                activeOpacity={0.8}
              >
                <Ionicons name="calendar" size={18} color="#831843" style={{ marginRight: 8 }} />
                <Text style={birthDate ? styles.datePickerValue : styles.datePickerPlaceholder}>
                  {birthDate || "DD/MM/YYYY (उदा. 15/08/1995)"}
                </Text>
              </TouchableOpacity>
              {errors.birthDate && <Text style={styles.errorText}>{errors.birthDate}</Text>}
            </View>

            {showDatePicker && (
              <DateTimePicker
                value={new Date(1995, 0, 1)}
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                maximumDate={new Date()}
                onChange={onDateChange}
              />
            )}

            {/* Birth Time */}
            <Text style={styles.label}>Birth Time (जन्म वेळ - तास व मिनिटे)</Text>
            <View style={styles.timeRow}>
              <View style={{ flex: 1, marginRight: 6 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Hrs (तास 01-12)"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                  maxLength={2}
                  value={birthHrs}
                  onChangeText={setBirthHrs}
                />
              </View>
              <View style={{ flex: 1, marginHorizontal: 3 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Min (मिनिटे 00-59)"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                  maxLength={2}
                  value={birthMin}
                  onChangeText={setBirthMin}
                />
              </View>
              <View style={styles.amPmRow}>
                <TouchableOpacity
                  style={[styles.amPmBtn, birthTimeAmPm === "AM" && styles.amPmBtnActive]}
                  onPress={() => setBirthTimeAmPm("AM")}
                >
                  <Text style={[styles.amPmText, birthTimeAmPm === "AM" && styles.amPmTextActive]}>
                    AM
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.amPmBtn, birthTimeAmPm === "PM" && styles.amPmBtnActive]}
                  onPress={() => setBirthTimeAmPm("PM")}
                >
                  <Text style={[styles.amPmText, birthTimeAmPm === "PM" && styles.amPmTextActive]}>
                    PM
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Birth Place */}
            <View style={[styles.inputGroup, { marginTop: 10 }]}>
              <Text style={styles.label}>
                Birth Place (जन्मस्थळ - मराठी) <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={[styles.input, errors.birthPlace && styles.inputError]}
                placeholder="उदा. पुणे, जळगाव, भुसावळ (इंग्रजीत टाईप करा व स्पेस द्या)"
                placeholderTextColor="#9CA3AF"
                value={birthPlace}
                onChangeText={(val) => transliterateToMarathi(val, setBirthPlace)}
              />
              {errors.birthPlace && <Text style={styles.errorText}>{errors.birthPlace}</Text>}
            </View>
          </View>
        </View>

        {/* ── SECTION 2: PHYSICAL & ASTROLOGICAL DETAILS ── */}
        <View style={[styles.sectionCard, styles.roseBorder]}>
          <View style={[styles.sectionCardHeader, styles.roseHeader]}>
            <Ionicons name="body-outline" size={18} color="#BE185D" />
            <Text style={[styles.sectionHeading, { color: "#BE185D" }]}>
              Physical & Astrological Details (शारीरिक व ज्योतिष माहिती)
            </Text>
          </View>

          <View style={styles.sectionBody}>
            {/* Height */}
            <Text style={styles.label}>
              Height (ऊंची) <Text style={styles.required}>*</Text>
            </Text>
            <View style={styles.row2}>
              <View style={{ flex: 1, marginRight: 8 }}>
                <TextInput
                  style={[styles.input, errors.foot && styles.inputError]}
                  placeholder="Feet (फुट उदा. 5)"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                  maxLength={1}
                  value={foot}
                  onChangeText={(v) => {
                    setFoot(v);
                    if (errors.foot) setErrors((p) => ({ ...p, foot: null }));
                  }}
                />
                {errors.foot && <Text style={styles.errorText}>{errors.foot}</Text>}
              </View>
              <View style={{ flex: 1, marginLeft: 8 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Inches (इंच उदा. 8)"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                  maxLength={2}
                  value={inch}
                  onChangeText={setInch}
                />
              </View>
            </View>

            {/* Complexion */}
            <View style={[styles.inputGroup, { marginTop: 12 }]}>
              <Text style={styles.label}>
                Complexion (वर्ण) <Text style={styles.required}>*</Text>
              </Text>
              <View style={styles.chipsRow}>
                {COMPLEXION_OPTIONS.map((c) => {
                  const val = c.split(" ")[0];
                  return (
                    <TouchableOpacity
                      key={c}
                      style={[styles.chip, complexion.includes(val) && styles.chipActive]}
                      onPress={() => setComplexion(val)}
                      activeOpacity={0.7}
                    >
                      <Text
                        style={[
                          styles.chipText,
                          complexion.includes(val) && styles.chipTextActive,
                        ]}
                      >
                        {c}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* Blood Group */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Blood Group (रक्तगट) <Text style={styles.required}>*</Text>
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.chipsRow}
              >
                {BLOOD_GROUPS.map((bg) => (
                  <TouchableOpacity
                    key={bg}
                    style={[styles.chip, bloodGroup === bg && styles.chipActive]}
                    onPress={() => setBloodGroup(bg)}
                    activeOpacity={0.7}
                  >
                    <Text style={[styles.chipText, bloodGroup === bg && styles.chipTextActive]}>
                      {bg}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* Gotra & Mamkul */}
            <View style={styles.row2}>
              <View style={{ flex: 1, marginRight: 8 }}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>
                    Gotra (गोत्र) <Text style={styles.required}>*</Text>
                  </Text>
                  <TextInput
                    style={[styles.input, errors.gotra && styles.inputError]}
                    placeholder="उदा. कश्यप"
                    placeholderTextColor="#9CA3AF"
                    value={gotra}
                    onChangeText={(val) => transliterateToMarathi(val, setGotra)}
                  />
                  {errors.gotra && <Text style={styles.errorText}>{errors.gotra}</Text>}
                </View>
              </View>

              <View style={{ flex: 1, marginLeft: 8 }}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>
                    Mamkul (मामकुळ) <Text style={styles.required}>*</Text>
                  </Text>
                  <TextInput
                    style={[styles.input, errors.mamkul && styles.inputError]}
                    placeholder="उदा. चौधरी"
                    placeholderTextColor="#9CA3AF"
                    value={mamkul}
                    onChangeText={(val) => transliterateToMarathi(val, setMamkul)}
                  />
                  {errors.mamkul && <Text style={styles.errorText}>{errors.mamkul}</Text>}
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* ── SECTION 3: NATIVE PLACE / HOMETOWN ── */}
        <View style={[styles.sectionCard, styles.amberBorder]}>
          <View style={[styles.sectionCardHeader, styles.amberHeader]}>
            <Ionicons name="home-outline" size={18} color="#D97706" />
            <Text style={[styles.sectionHeading, { color: "#B45309" }]}>
              Native Place & Contact (मूळगाव व संपर्क)
            </Text>
          </View>

          <View style={styles.sectionBody}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Hometown / Native Village (मूळगाव) <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={[styles.input, errors.hometown && styles.inputError]}
                placeholder="उदा. सावदा, फैजपूर, वरणगाव"
                placeholderTextColor="#9CA3AF"
                value={hometown}
                onChangeText={(val) => transliterateToMarathi(val, setHometown)}
              />
              {errors.hometown && <Text style={styles.errorText}>{errors.hometown}</Text>}
            </View>

            <View style={styles.row2}>
              <View style={{ flex: 1, marginRight: 8 }}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Taluka (तालुका)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="उदा. रावेर"
                    placeholderTextColor="#9CA3AF"
                    value={taluka}
                    onChangeText={(val) => transliterateToMarathi(val, setTaluka)}
                  />
                </View>
              </View>

              <View style={{ flex: 1, marginLeft: 8 }}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>
                    District (जिल्हा) <Text style={styles.required}>*</Text>
                  </Text>
                  <TextInput
                    style={[styles.input, errors.district && styles.inputError]}
                    placeholder="उदा. जळगाव"
                    placeholderTextColor="#9CA3AF"
                    value={district}
                    onChangeText={(val) => transliterateToMarathi(val, setDistrict)}
                  />
                  {errors.district && <Text style={styles.errorText}>{errors.district}</Text>}
                </View>
              </View>
            </View>

            {/* SIBLINGS */}
            <Text style={[styles.label, { marginTop: 4, fontWeight: "700" }]}>
              Brothers (भाऊ संख्या)
            </Text>
            <View style={styles.row2}>
              <View style={{ flex: 1, marginRight: 8 }}>
                <TextInput
                  style={styles.input}
                  placeholder="विवाहित (Married)"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                  value={broMarried}
                  onChangeText={setBroMarried}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 8 }}>
                <TextInput
                  style={styles.input}
                  placeholder="अविवाहित (Unmarried)"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                  value={broUnmarried}
                  onChangeText={setBroUnmarried}
                />
              </View>
            </View>

            <Text style={[styles.label, { marginTop: 10, fontWeight: "700" }]}>
              Sisters (बहिण संख्या)
            </Text>
            <View style={styles.row2}>
              <View style={{ flex: 1, marginRight: 8 }}>
                <TextInput
                  style={styles.input}
                  placeholder="विवाहित (Married)"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                  value={sisMarried}
                  onChangeText={setSisMarried}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 8 }}>
                <TextInput
                  style={styles.input}
                  placeholder="अविवाहित (Unmarried)"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="numeric"
                  value={sisUnmarried}
                  onChangeText={setSisUnmarried}
                />
              </View>
            </View>

            {/* PERSONAL MOBILE */}
            <View style={[styles.inputGroup, { marginTop: 12 }]}>
              <Text style={styles.label}>
                Candidate Personal Mobile (उमेदवाराचा वैयक्तिक मोबाईल){" "}
                <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={[styles.input, errors.personalMobile && styles.inputError]}
                placeholder="10-digit mobile number"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
                maxLength={10}
                value={personalMobile}
                onChangeText={(v) => {
                  setPersonalMobile(v);
                  if (errors.personalMobile) setErrors((p) => ({ ...p, personalMobile: null }));
                }}
              />
              {errors.personalMobile && (
                <Text style={styles.errorText}>{errors.personalMobile}</Text>
              )}
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
                <Text style={styles.continueBtnText}>Save & Continue to Step 4</Text>
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
  roseBorder: { borderColor: "#FBCFE8" },
  roseHeader: { backgroundColor: "#FDF2F8" },
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
  datePickerBtn: {
    height: 44,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 7,
    paddingHorizontal: 12,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
  },
  datePickerValue: {
    fontSize: 13.5,
    color: "#0F172A",
    fontWeight: "600",
  },
  datePickerPlaceholder: {
    fontSize: 13.5,
    color: "#9CA3AF",
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  amPmRow: {
    flexDirection: "row",
    marginLeft: 4,
    gap: 4,
  },
  amPmBtn: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    backgroundColor: "#F8FAFC",
  },
  amPmBtnActive: {
    backgroundColor: "#831843",
    borderColor: "#831843",
  },
  amPmText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#475569",
  },
  amPmTextActive: {
    color: "#FFFFFF",
  },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingVertical: 2,
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