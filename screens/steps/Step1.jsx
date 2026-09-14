import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import registrationApi from "../../api/registrationApi";
import { getAuthUserId } from "../../api/apiClient";

export default function Step1({
  data = {},
  setData,
  onNext,
  candidateId,
  setCandidateId,
  candidateType = "Bride",
  setCandidateType,
  applicationNo = "New",
  currentUser = {},
}) {
  // -------------------------------------------------------------
  // CANDIDATE TYPE
  // -------------------------------------------------------------
  const [selectedType, setSelectedType] = useState(
    data.candidateType || candidateType || "Bride"
  );

  // -------------------------------------------------------------
  // ENGLISH NAMES
  // -------------------------------------------------------------
  const [firstName, setFirstName] = useState(data.firstName || "");
  const [middleName, setMiddleName] = useState(data.middleName || "");
  const [lastName, setLastName] = useState(data.lastName || "");
  const [birthName, setBirthName] = useState(data.birthName || "");

  // -------------------------------------------------------------
  // MARATHI NAMES
  // -------------------------------------------------------------
  const [mFirstName, setMFirstName] = useState(data.mFirstName || "");
  const [mMiddleName, setMMiddleName] = useState(data.mMiddleName || "");
  const [mLastName, setMLastName] = useState(data.mLastName || "");
  const [mBirthName, setMBirthName] = useState(data.mBirthName || "");

  // -------------------------------------------------------------
  // PHOTO STATE
  // -------------------------------------------------------------
  const [photoBase64, setPhotoBase64] = useState(data.photoBase64 || null);
  const [photoUri, setPhotoUri] = useState(null);
  const [photoLoading, setPhotoLoading] = useState(false);

  // -------------------------------------------------------------
  // STATUS & REFS
  // -------------------------------------------------------------
  const [saving, setSaving] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(false);
  const [errors, setErrors] = useState({});
  const [clientStamp, setClientStamp] = useState(data.clientStamp || data.ClientStamp || null);

  const middleNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const birthNameRef = useRef(null);
  const mFirstNameRef = useRef(null);
  const mMiddleNameRef = useRef(null);
  const mLastNameRef = useRef(null);
  const mBirthNameRef = useRef(null);

  // -------------------------------------------------------------
  // INITIAL DATA LOADING (Only if CandidateId > 0)
  // -------------------------------------------------------------
  useEffect(() => {
    const effectiveId = Number(candidateId || currentUser?.CandidateId || 0);
    if (effectiveId > 0) {
      loadExistingDetails(effectiveId);
    } else {
      prefillFromCurrentUser();
    }
  }, [candidateId]);

  const prefillFromCurrentUser = () => {
    if (currentUser?.UserName && !firstName) {
      const parts = currentUser.UserName.trim().split(/\s+/);
      if (parts.length >= 1) setFirstName(parts[0]);
      if (parts.length >= 3) {
        setMiddleName(parts[1]);
        setLastName(parts.slice(2).join(" "));
      } else if (parts.length === 2) {
        setLastName(parts[1]);
      }
    }
  };

  const loadExistingDetails = async (id) => {
    try {
      setLoadingInitial(true);
      const d = await registrationApi.getBasicDetails(id);
      console.log("Step 1 loaded details:", d);
      if (d) {
        const stamp = d.ClientStamp || d.clientStamp;
        if (stamp) setClientStamp(stamp);

        if (d.FirstName) setFirstName(d.FirstName);
        if (d.MiddleName) setMiddleName(d.MiddleName);
        if (d.LastName) setLastName(d.LastName);
        if (d.BirthName) setBirthName(d.BirthName);

        if (d.MFirstName) setMFirstName(d.MFirstName);
        if (d.MMiddleName) setMMiddleName(d.MMiddleName);
        if (d.MLastName) setMLastName(d.MLastName);
        if (d.MBirthName) setMBirthName(d.MBirthName);

        if (d.CandidateType) {
          setSelectedType(d.CandidateType);
          if (setCandidateType) setCandidateType(d.CandidateType);
        }

        if (d.PhotoBase64) {
          setPhotoBase64(d.PhotoBase64);
        }
      } else {
        prefillFromCurrentUser();
      }
    } catch (err) {
      console.log("Load details notice:", err.message);
      prefillFromCurrentUser();
    } finally {
      setLoadingInitial(false);
    }
  };

  // -------------------------------------------------------------
  // TRANSLITERATION (English to Marathi)
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
      // Graceful fallback
    }
  };

  // -------------------------------------------------------------
  // PHOTO PICKER
  // -------------------------------------------------------------
  const pickPhoto = () => {
    Alert.alert("Upload Candidate Photo", "Select photo source:", [
      { text: "Take Photo (कॅमेरा)", onPress: () => launchImagePicker("camera") },
      { text: "Choose from Gallery (गॅलरी)", onPress: () => launchImagePicker("gallery") },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  const launchImagePicker = async (source) => {
    try {
      setPhotoLoading(true);
      const options = {
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [7, 9], // 35mm x 45mm ratio
        quality: 0.65,
        base64: true,
      };

      let result;
      if (source === "camera") {
        const perm = await ImagePicker.requestCameraPermissionsAsync();
        if (!perm.granted) {
          Alert.alert("Permission Required", "Camera permission is required to capture photo.");
          return;
        }
        result = await ImagePicker.launchCameraAsync(options);
      } else {
        const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!perm.granted) {
          Alert.alert("Permission Required", "Gallery permission is required to select photo.");
          return;
        }
        result = await ImagePicker.launchImageLibraryAsync(options);
      }

      if (!result.canceled && result.assets?.[0]) {
        const asset = result.assets[0];
        setPhotoUri(asset.uri);
        const cleanBase64 = (asset.base64 || "").replace(/^data:image\/[a-z]+;base64,/, "");
        setPhotoBase64(cleanBase64);
        setErrors((prev) => ({ ...prev, photo: null }));
      }
    } catch (err) {
      console.error("Photo Picker Error:", err);
      Alert.alert("Error", "Could not load image.");
    } finally {
      setPhotoLoading(false);
    }
  };

  // -------------------------------------------------------------
  // FORM VALIDATION
  // -------------------------------------------------------------
  const validateForm = () => {
    const errs = {};
    if (!firstName.trim()) errs.firstName = "First name is required (प्रथम नाव आवश्यक आहे)";
    if (!middleName.trim()) errs.middleName = "Middle name is required (वडिलांचे नाव आवश्यक आहे)";
    if (!lastName.trim()) errs.lastName = "Last name is required (आडनाव आवश्यक आहे)";

    if (!mFirstName.trim()) errs.mFirstName = "मराठीत प्रथम नाव आवश्यक आहे";
    if (!mLastName.trim()) errs.mLastName = "मराठीत आडनाव आवश्यक आहे";

    if (!photoBase64 && !data.photoBase64) {
      errs.photo = "Photo is required (35mm x 45mm फोटो आवश्यक आहे)";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // -------------------------------------------------------------
  // SAVE BASIC DETAILS (POST /api/registration/SaveBasicDetails)
  // -------------------------------------------------------------
  const handleSaveAndContinue = async () => {
    if (!validateForm()) {
      Alert.alert(
        "Required Fields",
        "Please fill in all mandatory fields marked with * and upload a photo."
      );
      return;
    }

    try {
      setSaving(true);
      const effectiveCandidateId = Number(candidateId || currentUser?.CandidateId || 0);
      const effectiveUserId = Number(currentUser?.UserId || data?.userId || getAuthUserId() || 0);

      // 1. Optionally save candidate type
      try {
        await registrationApi.saveRegistrationType(effectiveUserId, selectedType);
      } catch (e) {
        console.log("Notice saving candidate type:", e.message);
      }

      // 2. Save Basic Details DTO
      const payload = {
        ActorUserId: effectiveUserId,
        ActorType: "candidate",
        ClientStamp: clientStamp || null,
        CandidateId: effectiveCandidateId, // 0 for new candidate!
        UserId: effectiveUserId,
        UserLoginId: currentUser?.UserLoginId || currentUser?.Email || "",
        CandidateType: selectedType,
        PhotofilePath: null,
        PhotoBase64: photoBase64,
        FirstName: firstName.trim().toUpperCase(),
        MiddleName: middleName.trim().toUpperCase(),
        LastName: lastName.trim().toUpperCase(),
        BirthName: birthName.trim() ? birthName.trim().toUpperCase() : null,
        MFirstName: mFirstName.trim(),
        MMiddleName: mMiddleName.trim() || null,
        MLastName: mLastName.trim(),
        MBirthName: mBirthName.trim() || null,
      };

      const response = await registrationApi.saveBasicDetails(payload);

      if (response?.Success === false) {
        throw new Error(response?.Message || "Failed to save basic details.");
      }

      // Capture generated CandidateId & ClientStamp from backend response
      const returnedCandidateId =
        response?.CandidateId ||
        response?.Data?.CandidateId ||
        response?.Data?.Id ||
        effectiveCandidateId;

      const newStamp = response?.Data?.ClientStamp || response?.ClientStamp;
      if (newStamp) setClientStamp(newStamp);

      if (returnedCandidateId && setCandidateId) {
        setCandidateId(Number(returnedCandidateId));
      }

      if (setData) {
        setData((prev) => ({
          ...prev,
          ClientStamp: newStamp || clientStamp || null,
          candidateType: selectedType,
          firstName,
          middleName,
          lastName,
          birthName,
          mFirstName,
          mMiddleName,
          mLastName,
          mBirthName,
          photoBase64,
          candidateId: returnedCandidateId,
        }));
      }

      Alert.alert(
        "Success",
        "मूलभूत माहिती यशस्वीरित्या साठवली! (Basic Details Saved)",
        [{ text: "Continue to Step 2", onPress: () => onNext && onNext(returnedCandidateId) }]
      );
    } catch (err) {
      console.error("Save Basic Details Error:", err);
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
              <Ionicons name="person-circle-outline" size={24} color="#FFFFFF" />
              <View style={{ marginLeft: 8 }}>
                <Text style={styles.bannerTitle}>Basic Information (मूलभूत माहिती)</Text>
                <Text style={styles.bannerSub}>
                  Application No: <Text style={styles.boldWhite}>{applicationNo}</Text>
                </Text>
              </View>
            </View>
            <View style={styles.stepBadge}>
              <Text style={styles.stepBadgeText}>STEP 1 / 5</Text>
            </View>
          </View>
        </View>

        {/* Candidate Type Selector */}
        <View style={styles.typeSelectorCard}>
          <Text style={styles.typeSelectorLabel}>
            Candidate Type (उमेदवार प्रकार) <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.typeButtonsRow}>
            <TouchableOpacity
              style={[
                styles.typeBtn,
                (selectedType === "Bride" || selectedType === "वधू") && styles.typeBtnActive,
              ]}
              onPress={() => {
                setSelectedType("Bride");
                if (setCandidateType) setCandidateType("Bride");
              }}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.typeBtnText,
                  (selectedType === "Bride" || selectedType === "वधू") && styles.typeBtnTextActive,
                ]}
              >
                👰 वधू (Bride)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.typeBtn,
                (selectedType === "Groom" || selectedType === "वर") && styles.typeBtnActive,
              ]}
              onPress={() => {
                setSelectedType("Groom");
                if (setCandidateType) setCandidateType("Groom");
              }}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.typeBtnText,
                  (selectedType === "Groom" || selectedType === "वर") && styles.typeBtnTextActive,
                ]}
              >
                🤵 वर (Groom)
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Section 1: English Full Name */}
        <View style={[styles.sectionCard, styles.purpleBorder]}>
          <View style={[styles.sectionCardHeader, styles.purpleHeader]}>
            <Ionicons name="text" size={18} color="#6D28D9" />
            <Text style={[styles.sectionHeading, { color: "#6D28D9" }]}>
              Full Name in English (इंग्रजीमध्ये संपूर्ण नाव)
            </Text>
          </View>

          <View style={styles.sectionBody}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Candidate's First Name (प्रथम नाव) <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={[styles.input, errors.firstName && styles.inputError]}
                placeholder="e.g. Ramesh"
                placeholderTextColor="#9CA3AF"
                value={firstName}
                onChangeText={(val) => {
                  setFirstName(val);
                  if (errors.firstName) setErrors((p) => ({ ...p, firstName: null }));
                }}
                autoCapitalize="characters"
                returnKeyType="next"
                onSubmitEditing={() => middleNameRef.current?.focus()}
              />
              {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Father's Name / Middle Name (वडिलांचे नाव) <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                ref={middleNameRef}
                style={[styles.input, errors.middleName && styles.inputError]}
                placeholder="e.g. Suresh"
                placeholderTextColor="#9CA3AF"
                value={middleName}
                onChangeText={(val) => {
                  setMiddleName(val);
                  if (errors.middleName) setErrors((p) => ({ ...p, middleName: null }));
                }}
                autoCapitalize="characters"
                returnKeyType="next"
                onSubmitEditing={() => lastNameRef.current?.focus()}
              />
              {errors.middleName && <Text style={styles.errorText}>{errors.middleName}</Text>}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Last Name / Surname (आडनाव) <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                ref={lastNameRef}
                style={[styles.input, errors.lastName && styles.inputError]}
                placeholder="e.g. Patil"
                placeholderTextColor="#9CA3AF"
                value={lastName}
                onChangeText={(val) => {
                  setLastName(val);
                  if (errors.lastName) setErrors((p) => ({ ...p, lastName: null }));
                }}
                autoCapitalize="characters"
                returnKeyType="next"
                onSubmitEditing={() => birthNameRef.current?.focus()}
              />
              {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Name Before Marriage / Birth Name (विवाहापूर्वीचे / जन्माचे नाव - पर्यायी)
              </Text>
              <TextInput
                ref={birthNameRef}
                style={styles.input}
                placeholder="e.g. Rohini"
                placeholderTextColor="#9CA3AF"
                value={birthName}
                onChangeText={setBirthName}
                autoCapitalize="characters"
                returnKeyType="next"
                onSubmitEditing={() => mFirstNameRef.current?.focus()}
              />
            </View>
          </View>
        </View>

        {/* Section 2: Marathi Full Name */}
        <View style={[styles.sectionCard, styles.roseBorder]}>
          <View style={[styles.sectionCardHeader, styles.roseHeader]}>
            <MaterialCommunityIcons name="translate" size={18} color="#BE185D" />
            <Text style={[styles.sectionHeading, { color: "#BE185D" }]}>
              Full Name in Marathi (मराठीमध्ये संपूर्ण नाव)
            </Text>
          </View>

          <View style={styles.sectionBody}>
            <View style={styles.marathiHelperBox}>
              <Ionicons name="information-circle" size={16} color="#B45309" />
              <Text style={styles.marathiHelperText}>
                टीप: इंग्रजीत टाइप करा आणि स्पेस दाबा – आपोआप मराठीत रूपांतर होईल.{"\n"}
                (Type in English, press space to transliterate)
              </Text>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                उमेदवाराचे प्रथम नाव <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                ref={mFirstNameRef}
                style={[styles.input, errors.mFirstName && styles.inputError]}
                placeholder="उदा. रमेश"
                placeholderTextColor="#9CA3AF"
                value={mFirstName}
                onChangeText={(val) => transliterateToMarathi(val, setMFirstName)}
                returnKeyType="next"
                onSubmitEditing={() => mMiddleNameRef.current?.focus()}
              />
              {errors.mFirstName && <Text style={styles.errorText}>{errors.mFirstName}</Text>}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>वडिलांचे नाव</Text>
              <TextInput
                ref={mMiddleNameRef}
                style={styles.input}
                placeholder="उदा. सुरेश"
                placeholderTextColor="#9CA3AF"
                value={mMiddleName}
                onChangeText={(val) => transliterateToMarathi(val, setMMiddleName)}
                returnKeyType="next"
                onSubmitEditing={() => mLastNameRef.current?.focus()}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                आडनाव <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                ref={mLastNameRef}
                style={[styles.input, errors.mLastName && styles.inputError]}
                placeholder="उदा. पाटील"
                placeholderTextColor="#9CA3AF"
                value={mLastName}
                onChangeText={(val) => transliterateToMarathi(val, setMLastName)}
                returnKeyType="next"
                onSubmitEditing={() => mBirthNameRef.current?.focus()}
              />
              {errors.mLastName && <Text style={styles.errorText}>{errors.mLastName}</Text>}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>विवाहापूर्वीचे / जन्माचे नाव (पर्यायी)</Text>
              <TextInput
                ref={mBirthNameRef}
                style={styles.input}
                placeholder="उदा. रोहिणी"
                placeholderTextColor="#9CA3AF"
                value={mBirthName}
                onChangeText={(val) => transliterateToMarathi(val, setMBirthName)}
                returnKeyType="done"
              />
            </View>
          </View>
        </View>

        {/* Section 3: Photograph Upload */}
        <View style={[styles.sectionCard, styles.amberBorder]}>
          <View style={[styles.sectionCardHeader, styles.amberHeader]}>
            <Ionicons name="camera" size={18} color="#D97706" />
            <View style={{ marginLeft: 6 }}>
              <Text style={[styles.sectionHeading, { color: "#B45309" }]}>
                Photograph (उमेदवाराचा फोटो) <Text style={styles.required}>*</Text>
              </Text>
              <Text style={styles.sectionSubtitle}>
                रंगीत पासपोर्ट फोटो अपलोड करा (Upload Color Passport Photo)
              </Text>
            </View>
          </View>

          <View style={styles.sectionBody}>
            <View style={styles.photoRow}>
              {/* Upload Box */}
              <View style={styles.photoUploadCol}>
                <TouchableOpacity
                  style={[styles.dashedPhotoBox, errors.photo && styles.dashedPhotoBoxError]}
                  onPress={pickPhoto}
                  activeOpacity={0.7}
                >
                  {photoLoading ? (
                    <ActivityIndicator color="#831843" />
                  ) : photoUri ? (
                    <Image source={{ uri: photoUri }} style={styles.photoImage} />
                  ) : photoBase64 ? (
                    <Image
                      source={{ uri: `data:image/jpeg;base64,${photoBase64}` }}
                      style={styles.photoImage}
                    />
                  ) : (
                    <View style={styles.photoEmpty}>
                      <Ionicons name="camera-outline" size={32} color="#9CA3AF" />
                      <Text style={styles.photoEmptyText}>No Photo</Text>
                    </View>
                  )}
                </TouchableOpacity>

                <TouchableOpacity style={styles.coralUploadBtn} onPress={pickPhoto} activeOpacity={0.85}>
                  <Text style={styles.coralUploadBtnText}>↑ Upload Photo</Text>
                </TouchableOpacity>

                <Text style={styles.uploadHintText}>JPG / PNG - max 1 MB</Text>
                <Text style={styles.aiCropBadge}>35mm x 45mm Ready</Text>

                {errors.photo && <Text style={styles.errorText}>{errors.photo}</Text>}
              </View>

              {/* Sample Photo Guide */}
              <View style={styles.sampleGuideCol}>
                <Text style={styles.sampleGuideTitle}>Sample Photo (नमुना)</Text>
                <View style={styles.sampleBox}>
                  <View style={styles.samplePhotoMock}>
                    <FontAwesome5 name="user-tie" size={38} color="#94A3B8" />
                  </View>
                  <View style={styles.dimH}>
                    <Text style={styles.dimText}>45 mm</Text>
                  </View>
                  <View style={styles.dimW}>
                    <Text style={styles.dimText}>35 mm</Text>
                  </View>
                </View>
                <Text style={styles.sampleGuideNote}>
                  Plain background, formal look (साधी फिकट पार्श्वभूमी)
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Submit / Continue Button */}
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
              <Text style={styles.continueBtnText}>Save & Continue to Step 2 (साठवा आणि पुढे जा)</Text>
              <Ionicons name="arrow-forward-circle" size={20} color="#FFFFFF" style={{ marginLeft: 8 }} />
            </View>
          )}
        </TouchableOpacity>
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
    fontSize: 15,
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
  typeSelectorCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  typeSelectorLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 10,
  },
  typeButtonsRow: {
    flexDirection: "row",
    gap: 12,
  },
  typeBtn: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1.5,
    borderColor: "#CBD5E1",
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#F8FAFC",
  },
  typeBtnActive: {
    borderColor: "#831843",
    backgroundColor: "#FDF2F8",
  },
  typeBtnText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#475569",
  },
  typeBtnTextActive: {
    color: "#831843",
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
  sectionSubtitle: {
    fontSize: 10.5,
    color: "#78350F",
    marginTop: 1,
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
  marathiHelperBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFFBEB",
    borderWidth: 1,
    borderColor: "#FCD34D",
    borderRadius: 6,
    padding: 8,
    marginBottom: 12,
    gap: 6,
  },
  marathiHelperText: {
    fontSize: 11,
    color: "#92400E",
    flex: 1,
    lineHeight: 16,
  },
  photoRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: 4,
  },
  photoUploadCol: {
    width: 135,
    alignItems: "center",
  },
  dashedPhotoBox: {
    width: 115,
    height: 145,
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: "#CBD5E1",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    overflow: "hidden",
  },
  dashedPhotoBoxError: {
    borderColor: "#EF4444",
    backgroundColor: "#FEF2F2",
  },
  photoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  photoEmpty: {
    alignItems: "center",
    justifyContent: "center",
  },
  photoEmptyText: {
    fontSize: 11,
    color: "#94A3B8",
    marginTop: 4,
    fontWeight: "500",
  },
  coralUploadBtn: {
    backgroundColor: "#E06D75",
    marginTop: 10,
    width: 115,
    paddingVertical: 7,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  coralUploadBtnText: {
    color: "#FFFFFF",
    fontSize: 11.5,
    fontWeight: "700",
  },
  uploadHintText: {
    fontSize: 9.5,
    color: "#64748B",
    marginTop: 4,
    textAlign: "center",
  },
  aiCropBadge: {
    fontSize: 9,
    color: "#059669",
    fontWeight: "700",
    marginTop: 2,
    backgroundColor: "#ECFDF5",
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
  },
  sampleGuideCol: {
    width: 135,
    alignItems: "center",
  },
  sampleGuideTitle: {
    fontSize: 10.5,
    fontWeight: "700",
    color: "#475569",
    marginBottom: 8,
    textAlign: "center",
  },
  sampleBox: {
    width: 95,
    height: 120,
    borderWidth: 1,
    borderColor: "#94A3B8",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderRadius: 4,
  },
  samplePhotoMock: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },
  dimH: {
    position: "absolute",
    left: -16,
    transform: [{ rotate: "-90deg" }],
  },
  dimW: {
    position: "absolute",
    bottom: -14,
  },
  dimText: {
    fontSize: 8.5,
    color: "#64748B",
    fontWeight: "600",
  },
  sampleGuideNote: {
    fontSize: 9,
    color: "#64748B",
    textAlign: "center",
    marginTop: 18,
    lineHeight: 12,
  },
  continueBtn: {
    backgroundColor: "#831843",
    marginTop: 6,
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
    fontSize: 14.5,
    fontWeight: "700",
  },
});