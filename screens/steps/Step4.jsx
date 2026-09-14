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

const TITLES = ["श्री", "सौ", "कै.", "डॉ."];

export default function Step4({
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
  const [expectations, setExpectations] = useState(data.expectations || "");

  // Guardian
  const [fatherTitle, setFatherTitle] = useState(data.fatherTitle || "श्री");
  const [fatherName, setFatherName] = useState(data.fatherName || "");
  const [fatherAddress, setFatherAddress] = useState(data.fatherAddress || "");
  const [fatherMobile, setFatherMobile] = useState(data.fatherMobile || "");
  const [fatherPhone, setFatherPhone] = useState(data.fatherPhone || "");
  const [fatherEmail, setFatherEmail] = useState(data.fatherEmail || "");

  // Alt Contact 1
  const [showAlt1, setShowAlt1] = useState(!!data.altName1);
  const [altTitle1, setAltTitle1] = useState(data.altTitle1 || "श्री");
  const [altName1, setAltName1] = useState(data.altName1 || "");
  const [altAddress1, setAltAddress1] = useState(data.altAddress1 || "");
  const [altMobile1, setAltMobile1] = useState(data.altMobile1 || "");
  const [altPhone1, setAltPhone1] = useState(data.altPhone1 || "");

  // Alt Contact 2
  const [showAlt2, setShowAlt2] = useState(!!data.altName2);
  const [altTitle2, setAltTitle2] = useState(data.altTitle2 || "श्री");
  const [altName2, setAltName2] = useState(data.altName2 || "");
  const [altAddress2, setAltAddress2] = useState(data.altAddress2 || "");
  const [altMobile2, setAltMobile2] = useState(data.altMobile2 || "");
  const [altPhone2, setAltPhone2] = useState(data.altPhone2 || "");

  const [saving, setSaving] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(false);
  const [errors, setErrors] = useState({});
  const [clientStamp, setClientStamp] = useState(data.clientStamp || data.ClientStamp || null);

  const fatherAddressRef = useRef(null);
  const fatherMobileRef = useRef(null);
  const fatherPhoneRef = useRef(null);
  const fatherEmailRef = useRef(null);

  // -------------------------------------------------------------
  // LOAD SAVED DETAILS (GET /api/registration/GetExpectationParentDetails)
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
      const res = await registrationApi.getExpectationParentDetails(id);
      console.log("Step 4 loaded expectation details:", res);
      if (res) {
        const stamp = res.ClientStamp || res.clientStamp;
        if (stamp) setClientStamp(stamp);

        if (res.Expectations) setExpectations(res.Expectations);
        if (res.FatherGurdianTitle) setFatherTitle(res.FatherGurdianTitle);
        if (res.NameOfFatherGuardian) setFatherName(res.NameOfFatherGuardian);
        if (res.ParentalAddress) setFatherAddress(res.ParentalAddress);
        if (res.ParentalContactNo1) setFatherMobile(res.ParentalContactNo1);
        if (res.ParentalContactNo2) setFatherPhone(res.ParentalContactNo2);
        if (res.ParentalEmail) setFatherEmail(res.ParentalEmail);

        if (res.AltNameOfFatherGuardian) {
          setShowAlt1(true);
          if (res.AltFatherGurdianTitle) setAltTitle1(res.AltFatherGurdianTitle);
          setAltName1(res.AltNameOfFatherGuardian);
          if (res.AltParentalAddress) setAltAddress1(res.AltParentalAddress);
          if (res.AltParentalContactNo1) setAltMobile1(res.AltParentalContactNo1);
          if (res.AltParentalContactNo2) setAltPhone1(res.AltParentalContactNo2);
        }

        if (res.AltNameOfFatherGuardian2) {
          setShowAlt2(true);
          if (res.AltFatherGurdianTitle2) setAltTitle2(res.AltFatherGurdianTitle2);
          setAltName2(res.AltNameOfFatherGuardian2);
          if (res.AltParentalAddress2) setAltAddress2(res.AltParentalAddress2);
          if (res.AltParental2ContactNo1) setAltMobile2(res.AltParental2ContactNo1);
          if (res.AltParental2ContactNo2) setAltPhone2(res.AltParental2ContactNo2);
        }
      }
    } catch (err) {
      console.log("Step 4 load notice:", err.message);
    } finally {
      setLoadingInitial(false);
    }
  };

  // -------------------------------------------------------------
  // TRANSLITERATION
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
  // VALIDATION
  // -------------------------------------------------------------
  const validateForm = () => {
    const errs = {};
    if (!expectations.trim()) {
      errs.expectations = "Expectations are required (अपेक्षा आवश्यक आहेत)";
    }
    if (!fatherName.trim()) {
      errs.fatherName = "Father / guardian name is required (पालकांचे नाव आवश्यक आहे)";
    }
    if (!fatherAddress.trim()) {
      errs.fatherAddress = "Parental address is required (पालकांचा पत्ता आवश्यक आहे)";
    }
    if (!fatherMobile.trim()) {
      errs.fatherMobile = "Parent mobile is required (पालकांचा मोबाईल नंबर आवश्यक आहे)";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // -------------------------------------------------------------
  // SUBMIT (POST /api/registration/SaveExpectationParentDetails)
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
        Expectations: expectations.trim(),
        FatherGurdianTitle: fatherTitle.trim(),
        NameOfFatherGuardian: fatherName.trim(),
        ParentalAddress: fatherAddress.trim(),
        ParentalContactNo1: fatherMobile.trim(),
        ParentalContactNo2: fatherPhone.trim(),
        ParentalEmail: fatherEmail.trim(),
        AltFatherGurdianTitle: altTitle1.trim(),
        AltNameOfFatherGuardian: altName1.trim(),
        AltParentalAddress: altAddress1.trim(),
        AltParentalContactNo1: altMobile1.trim(),
        AltParentalContactNo2: altPhone1.trim(),
        AltParentalEmail: "",
        AltFatherGurdianTitle2: altTitle2.trim(),
        AltNameOfFatherGuardian2: altName2.trim(),
        AltParentalAddress2: altAddress2.trim(),
        AltParental2ContactNo1: altMobile2.trim(),
        AltParental2ContactNo2: altPhone2.trim(),
        AltParentalEmail2: "",
      };

      const response = await registrationApi.saveExpectationParentDetails(payload);

      if (response?.Success === false) {
        throw new Error(response?.Message || "Failed to save expectation details.");
      }

      const newStamp = response?.Data?.ClientStamp || response?.ClientStamp;
      if (newStamp) setClientStamp(newStamp);

      if (setData) {
        setData((prev) => ({
          ...prev,
          ClientStamp: newStamp || clientStamp || null,
          expectations,
          fatherTitle,
          fatherName,
          fatherAddress,
          fatherMobile,
          fatherPhone,
          fatherEmail,
          altTitle1,
          altName1,
          altAddress1,
          altMobile1,
          altPhone1,
          altTitle2,
          altName2,
          altAddress2,
          altMobile2,
          altPhone2,
        }));
      }

      Alert.alert(
        "Success",
        "अपेक्षा आणि संपर्क माहिती साठवली! (Expectations & Parent Details Saved)",
        [{ text: "Continue to Step 5", onPress: () => onNext && onNext() }]
      );
    } catch (err) {
      console.error("Save Expectations Error:", err);
      const msg =
        err.response?.data?.Message ||
        err.response?.data?.ErrorMessage ||
        err.message ||
        "Could not save details. Please check network connection.";
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
              <Ionicons name="heart-outline" size={24} color="#FFFFFF" />
              <View style={{ marginLeft: 8 }}>
                <Text style={styles.bannerTitle}>
                  Expectations & Parents (अपेक्षा आणि पालक माहिती)
                </Text>
                <Text style={styles.bannerSub}>
                  Application No: <Text style={styles.boldWhite}>{applicationNo}</Text>
                </Text>
              </View>
            </View>
            <View style={styles.stepBadge}>
              <Text style={styles.stepBadgeText}>STEP 4 / 5</Text>
            </View>
          </View>
        </View>

        {/* ── SECTION 1: PARTNER EXPECTATIONS ── */}
        <View style={[styles.sectionCard, styles.roseBorder]}>
          <View style={[styles.sectionCardHeader, styles.roseHeader]}>
            <Ionicons name="heart" size={18} color="#BE185D" />
            <Text style={[styles.sectionHeading, { color: "#BE185D" }]}>
              Partner Expectations (जोडीदाराविषयी अपेक्षा) <Text style={styles.required}>*</Text>
            </Text>
          </View>

          <View style={styles.sectionBody}>
            <Text style={styles.label}>
              Expectations (छंद / गुण / स्वभाव / अनुरूप शेरे) <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={[styles.textArea, errors.expectations && styles.inputError]}
              placeholder="उदा. सुशिक्षित, अनुरूप, नोकरी करणारी/करणारा, शाकाहारी, निर्व्यसनी..."
              placeholderTextColor="#9CA3AF"
              multiline
              numberOfLines={4}
              value={expectations}
              onChangeText={(val) => transliterateToMarathi(val, setExpectations)}
            />
            {errors.expectations && <Text style={styles.errorText}>{errors.expectations}</Text>}
            <Text style={styles.hintText}>
              टीप: येथे इंग्रजीत टाइप करून स्पेस दाबा, आपोआप मराठीत होईल.
            </Text>
          </View>
        </View>

        {/* ── SECTION 2: FATHER / GUARDIAN DETAILS ── */}
        <View style={[styles.sectionCard, styles.purpleBorder]}>
          <View style={[styles.sectionCardHeader, styles.purpleHeader]}>
            <Ionicons name="people-outline" size={18} color="#6D28D9" />
            <Text style={[styles.sectionHeading, { color: "#6D28D9" }]}>
              Father's / Guardian's Details (वडिलांची / पालकांची माहिती)
            </Text>
          </View>

          <View style={styles.sectionBody}>
            {/* Title & Name */}
            <Text style={styles.label}>
              Father's / Guardian's Full Name (पालकांचे संपूर्ण नाव){" "}
              <Text style={styles.required}>*</Text>
            </Text>
            <View style={styles.rowTitleAndName}>
              <View style={styles.titleWrap}>
                <View style={styles.titleSelectorRow}>
                  {TITLES.map((t) => (
                    <TouchableOpacity
                      key={t}
                      style={[styles.titleChip, fatherTitle === t && styles.titleChipActive]}
                      onPress={() => setFatherTitle(t)}
                    >
                      <Text
                        style={[
                          styles.titleChipText,
                          fatherTitle === t && styles.titleChipTextActive,
                        ]}
                      >
                        {t}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <View style={{ flex: 1, marginLeft: 8 }}>
                <TextInput
                  style={[styles.input, errors.fatherName && styles.inputError]}
                  placeholder="उदा. सुरेश उत्तम पाटील"
                  placeholderTextColor="#9CA3AF"
                  value={fatherName}
                  onChangeText={(val) => transliterateToMarathi(val, setFatherName)}
                  returnKeyType="next"
                  onSubmitEditing={() => fatherAddressRef.current?.focus()}
                />
              </View>
            </View>
            {errors.fatherName && <Text style={styles.errorText}>{errors.fatherName}</Text>}

            {/* Address */}
            <View style={[styles.inputGroup, { marginTop: 12 }]}>
              <Text style={styles.label}>
                Parental Address (पालकांचा कायमचा पत्ता) <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                ref={fatherAddressRef}
                style={[styles.textArea, { minHeight: 65 }, errors.fatherAddress && styles.inputError]}
                placeholder="उदा. फ्लॅट नं. ४, समर्थ कृपा अपार्टमेंट, निगडी, पुणे ४११०४४"
                placeholderTextColor="#9CA3AF"
                multiline
                value={fatherAddress}
                onChangeText={(val) => transliterateToMarathi(val, setFatherAddress)}
              />
              {errors.fatherAddress && <Text style={styles.errorText}>{errors.fatherAddress}</Text>}
            </View>

            {/* Mobile & Phone */}
            <View style={styles.row2}>
              <View style={{ flex: 1, marginRight: 8 }}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>
                    Mobile (मोबाईल) <Text style={styles.required}>*</Text>
                  </Text>
                  <TextInput
                    ref={fatherMobileRef}
                    style={[styles.input, errors.fatherMobile && styles.inputError]}
                    placeholder="10-digit mobile"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="phone-pad"
                    maxLength={10}
                    value={fatherMobile}
                    onChangeText={(v) => {
                      setFatherMobile(v);
                      if (errors.fatherMobile) setErrors((p) => ({ ...p, fatherMobile: null }));
                    }}
                    returnKeyType="next"
                    onSubmitEditing={() => fatherPhoneRef.current?.focus()}
                  />
                  {errors.fatherMobile && (
                    <Text style={styles.errorText}>{errors.fatherMobile}</Text>
                  )}
                </View>
              </View>

              <View style={{ flex: 1, marginLeft: 8 }}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Landline (दूरध्वनी)</Text>
                  <TextInput
                    ref={fatherPhoneRef}
                    style={styles.input}
                    placeholder="STD Phone"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="phone-pad"
                    value={fatherPhone}
                    onChangeText={setFatherPhone}
                    returnKeyType="next"
                    onSubmitEditing={() => fatherEmailRef.current?.focus()}
                  />
                </View>
              </View>
            </View>

            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email (पालकांचा ईमेल - पर्यायी)</Text>
              <TextInput
                ref={fatherEmailRef}
                style={styles.input}
                placeholder="example@gmail.com"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
                value={fatherEmail}
                onChangeText={setFatherEmail}
                returnKeyType="done"
              />
            </View>
          </View>
        </View>

        {/* ── SECTION 3: ALTERNATE CONTACT 1 ── */}
        <View style={[styles.sectionCard, styles.amberBorder]}>
          <TouchableOpacity
            style={[styles.sectionCardHeader, styles.amberHeader, { justifyContent: "space-between" }]}
            onPress={() => setShowAlt1(!showAlt1)}
            activeOpacity={0.8}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="call-outline" size={18} color="#D97706" />
              <Text style={[styles.sectionHeading, { color: "#B45309" }]}>
                Alternate Contact 1 (पर्यायी संपर्क १ - नातेवाईक)
              </Text>
            </View>
            <Ionicons name={showAlt1 ? "chevron-up" : "chevron-down"} size={20} color="#B45309" />
          </TouchableOpacity>

          {showAlt1 && (
            <View style={styles.sectionBody}>
              <View style={styles.row2}>
                <View style={{ width: 70, marginRight: 8 }}>
                  <Text style={styles.label}>Title</Text>
                  <TextInput
                    style={styles.input}
                    value={altTitle1}
                    onChangeText={setAltTitle1}
                    placeholder="श्री"
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.label}>Contact Person Name (संपर्काचे नाव)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="उदा. काका / मामा यांचे नाव"
                    placeholderTextColor="#9CA3AF"
                    value={altName1}
                    onChangeText={(val) => transliterateToMarathi(val, setAltName1)}
                  />
                </View>
              </View>

              <View style={[styles.inputGroup, { marginTop: 10 }]}>
                <Text style={styles.label}>Address (पत्ता)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="पत्ता / शहर"
                  placeholderTextColor="#9CA3AF"
                  value={altAddress1}
                  onChangeText={(val) => transliterateToMarathi(val, setAltAddress1)}
                />
              </View>

              <View style={styles.row2}>
                <View style={{ flex: 1, marginRight: 8 }}>
                  <Text style={styles.label}>Mobile (मोबाईल)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Mobile"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="phone-pad"
                    value={altMobile1}
                    onChangeText={setAltMobile1}
                  />
                </View>
                <View style={{ flex: 1, marginLeft: 8 }}>
                  <Text style={styles.label}>Phone (दूरध्वनी)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="phone-pad"
                    value={altPhone1}
                    onChangeText={setAltPhone1}
                  />
                </View>
              </View>
            </View>
          )}
        </View>

        {/* ── SECTION 4: ALTERNATE CONTACT 2 ── */}
        <View style={[styles.sectionCard, styles.amberBorder]}>
          <TouchableOpacity
            style={[styles.sectionCardHeader, styles.amberHeader, { justifyContent: "space-between" }]}
            onPress={() => setShowAlt2(!showAlt2)}
            activeOpacity={0.8}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="call-outline" size={18} color="#D97706" />
              <Text style={[styles.sectionHeading, { color: "#B45309" }]}>
                Alternate Contact 2 (पर्यायी संपर्क २ - ऐच्छिक)
              </Text>
            </View>
            <Ionicons name={showAlt2 ? "chevron-up" : "chevron-down"} size={20} color="#B45309" />
          </TouchableOpacity>

          {showAlt2 && (
            <View style={styles.sectionBody}>
              <View style={styles.row2}>
                <View style={{ width: 70, marginRight: 8 }}>
                  <Text style={styles.label}>Title</Text>
                  <TextInput
                    style={styles.input}
                    value={altTitle2}
                    onChangeText={setAltTitle2}
                    placeholder="श्री"
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.label}>Contact Person Name (संपर्काचे नाव)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="नातेवाईक / मित्र यांचे नाव"
                    placeholderTextColor="#9CA3AF"
                    value={altName2}
                    onChangeText={(val) => transliterateToMarathi(val, setAltName2)}
                  />
                </View>
              </View>

              <View style={[styles.inputGroup, { marginTop: 10 }]}>
                <Text style={styles.label}>Address (पत्ता)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="पत्ता / शहर"
                  placeholderTextColor="#9CA3AF"
                  value={altAddress2}
                  onChangeText={(val) => transliterateToMarathi(val, setAltAddress2)}
                />
              </View>

              <View style={styles.row2}>
                <View style={{ flex: 1, marginRight: 8 }}>
                  <Text style={styles.label}>Mobile (मोबाईल)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Mobile"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="phone-pad"
                    value={altMobile2}
                    onChangeText={setAltMobile2}
                  />
                </View>
                <View style={{ flex: 1, marginLeft: 8 }}>
                  <Text style={styles.label}>Phone (दूरध्वनी)</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="phone-pad"
                    value={altPhone2}
                    onChangeText={setAltPhone2}
                  />
                </View>
              </View>
            </View>
          )}
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
                <Text style={styles.continueBtnText}>Review & Continue to Step 5</Text>
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
  textArea: {
    minHeight: 80,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 7,
    padding: 10,
    fontSize: 13.5,
    color: "#0F172A",
    backgroundColor: "#FFFFFF",
    textAlignVertical: "top",
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
  rowTitleAndName: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleWrap: {
    width: 140,
  },
  titleSelectorRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  titleChip: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 5,
    backgroundColor: "#F1F5F9",
    borderWidth: 1,
    borderColor: "#CBD5E1",
  },
  titleChipActive: {
    backgroundColor: "#831843",
    borderColor: "#831843",
  },
  titleChipText: {
    fontSize: 11,
    color: "#334155",
    fontWeight: "700",
  },
  titleChipTextActive: {
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