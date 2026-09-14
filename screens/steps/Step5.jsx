import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import registrationApi from "../../api/registrationApi";
import { getAuthUserId } from "../../api/apiClient";

export default function Step5({
  data = {},
  candidateId,
  applicationNo = "New",
  currentUser = {},
  onBack,
  onComplete,
}) {
  const [profile, setProfile] = useState(data);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isDeclared, setIsDeclared] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [clientStamp, setClientStamp] = useState(data.clientStamp || data.ClientStamp || null);

  const effectiveUserId = Number(currentUser?.UserId || data?.userId || getAuthUserId() || 0);
  const effectiveCandidateId = Number(candidateId || currentUser?.CandidateId || data?.candidateId || 0);

  useEffect(() => {
    if (effectiveUserId > 0) {
      loadProfileData(effectiveUserId);
    }
  }, [effectiveUserId]);

  const loadProfileData = async (userId) => {
    try {
      setLoadingProfile(true);
      const res = await registrationApi.getCandidateProfile(userId);
      console.log("Step 5 loaded candidate profile:", res);
      if (res) {
        const stamp = res.ClientStamp || res.clientStamp;
        if (stamp) setClientStamp(stamp);

        setProfile((prev) => ({
          ...prev,
          ...res,
        }));
      }
    } catch (e) {
      console.log("Step 5 getCandidateProfile notice:", e.message);
    } finally {
      setLoadingProfile(false);
    }
  };

  const handleSubmitForVerification = async () => {
    if (!isDeclared) {
      Alert.alert(
        "Declaration Required",
        "कृपया माहितीच्या सत्यतेसाठी हमीपत्र (डिक्लरेशन) चेकबॉक्स निवडा."
      );
      return;
    }

    if (!effectiveCandidateId || effectiveCandidateId <= 0) {
      Alert.alert(
        "Candidate ID Missing",
        "Candidate ID not found. Please complete Step 1 first."
      );
      return;
    }

    try {
      setSubmitting(true);
      const payload = {
        ActorUserId: effectiveUserId,
        ActorType: "candidate",
        ClientStamp: clientStamp || profile?.ClientStamp || profile?.clientStamp || null,
        UserId: effectiveUserId,
        CandidateId: effectiveCandidateId,
      };

      console.log("SUBMITTING FOR VERIFICATION:", payload);
      const res = await registrationApi.submitForVerification(payload);

      if (res?.Success === false) {
        throw new Error(res?.Message || "Submission failed.");
      }

      setIsSubmitted(true);

      Alert.alert(
        "Submission Successful!",
        "आपले प्रोफाइल पडताळणीसाठी (Verification) यशस्वीरित्या सादर झाले आहे.\n\n४८ तासांच्या आत आपल्या प्रोफाईलची पडताळणी केली जाईल आणि त्यानंतर प्रोफाइल ऑनलाइन सूची मध्ये प्रकाशित होईल.",
        [
          {
            text: "Go to Dashboard",
            onPress: () => onComplete && onComplete(),
          },
        ]
      );
    } catch (err) {
      console.error("Submit for verification error:", err);
      const msg =
        err.response?.data?.Message ||
        err.response?.data?.ErrorMessage ||
        err.message ||
        "Could not submit profile for verification. Please check network.";
      Alert.alert("Submission Failed", msg);
    } finally {
      setSubmitting(false);
    }
  };

  // Helper row renderer
  const InfoRow = ({ label, value }) => (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}:</Text>
      <Text style={styles.infoValue}>{value || "-"}</Text>
    </View>
  );

  const candidateTypeDisplay =
    profile.candidateType ||
    profile.CandidateType ||
    (currentUser?.UserTypeCode === "candidate" ? "वधू (Bride)" : "वर (Groom)");

  const photoSource = profile.photoBase64
    ? { uri: `data:image/jpeg;base64,${profile.photoBase64}` }
    : profile.PhotoBase64
    ? { uri: `data:image/jpeg;base64,${profile.PhotoBase64}` }
    : profile.PhotofilePath
    ? { uri: profile.PhotofilePath }
    : null;

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* Banner */}
      <View style={styles.banner}>
        <View style={styles.bannerTopRow}>
          <View style={styles.bannerTitleRow}>
            <Ionicons name="shield-checkmark-outline" size={24} color="#FFFFFF" />
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.bannerTitle}>Review & Verification (पूर्वावलोकन व पडताळणी)</Text>
              <Text style={styles.bannerSub}>
                Application No: <Text style={styles.boldWhite}>{applicationNo}</Text>
              </Text>
            </View>
          </View>
          <View style={styles.stepBadge}>
            <Text style={styles.stepBadgeText}>STEP 5 / 5</Text>
          </View>
        </View>
      </View>

      {loadingProfile && (
        <View style={styles.loadingBanner}>
          <ActivityIndicator size="small" color="#831843" />
          <Text style={styles.loadingBannerText}>Updating profile review...</Text>
        </View>
      )}

      {/* ── PROFILE PREVIEW CARD ── */}
      <View style={styles.profileCard}>
        {/* Top Header */}
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderTitle}>समता भ्रातृ मंडळ (पिंपरी चिंचवड)</Text>
          <View style={styles.badgeCandidateType}>
            <Text style={styles.badgeCandidateTypeText}>{candidateTypeDisplay}</Text>
          </View>
        </View>

        {/* Photo + Personal Summary */}
        <View style={styles.photoSummaryRow}>
          <View style={styles.photoContainer}>
            {photoSource ? (
              <Image source={photoSource} style={styles.photo} />
            ) : (
              <View style={styles.photoPlaceholder}>
                <Ionicons name="person" size={42} color="#94A3B8" />
                <Text style={styles.noPhotoText}>No Photo</Text>
              </View>
            )}
          </View>

          <View style={styles.nameContainer}>
            <Text style={styles.marathiFullName}>
              {profile.mFirstName || profile.MFirstName || ""}{" "}
              {profile.mMiddleName || profile.MMiddleName || ""}{" "}
              {profile.mLastName || profile.MLastName || ""}
            </Text>
            <Text style={styles.englishFullName}>
              {profile.firstName || profile.FirstName || ""}{" "}
              {profile.middleName || profile.MiddleName || ""}{" "}
              {profile.lastName || profile.LastName || ""}
            </Text>
            {(profile.birthName || profile.mBirthName) && (
              <Text style={styles.birthNameText}>
                जन्माचे नाव: {profile.mBirthName || profile.birthName}
              </Text>
            )}
            <View style={styles.candidateIdPill}>
              <Text style={styles.candidateIdPillText}>
                Candidate ID: {effectiveCandidateId || applicationNo}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Section 1: Education & Employment */}
        <View style={styles.sectionWrap}>
          <View style={styles.subHeader}>
            <Ionicons name="school" size={16} color="#831843" />
            <Text style={styles.subHeaderText}>शिक्षण व नोकरी / व्यवसाय</Text>
          </View>
          <InfoRow
            label="शिक्षण पातळी"
            value={profile.educationLevel || profile.EducationLevel}
          />
          <InfoRow
            label="पदवी / शाखा"
            value={profile.education || profile.Education}
          />
          <InfoRow
            label="नोकरी / व्यवसाय"
            value={profile.jobBuzEdu || profile.JobBuzEdu}
          />
          <InfoRow
            label="हुद्दा (Position)"
            value={profile.position || profile.Position}
          />
          <InfoRow
            label="कंपनी नाव"
            value={profile.company || profile.Company}
          />
          <InfoRow
            label="नोकरीचे शहर"
            value={profile.placeOfEmployment || profile.PlaceOfEmployment}
          />
          <InfoRow
            label="मासिक उत्पन्न"
            value={
              profile.monthlyIncome || profile.MonthlyIncome
                ? `₹ ${profile.monthlyIncome || profile.MonthlyIncome}`
                : "-"
            }
          />
        </View>

        <View style={styles.divider} />

        {/* Section 2: Personal & Horoscope */}
        <View style={styles.sectionWrap}>
          <View style={styles.subHeader}>
            <Ionicons name="calendar" size={16} color="#831843" />
            <Text style={styles.subHeaderText}>जन्म व कौटुंबिक माहिती</Text>
          </View>
          <InfoRow
            label="जन्म तारीख"
            value={profile.birthDate || profile.BirthDate}
          />
          <InfoRow
            label="जन्म वेळ"
            value={
              profile.birthTime ||
              profile.BirthTime ||
              (profile.birthHrs ? `${profile.birthHrs}:${profile.birthMin || "00"}` : "-")
            }
          />
          <InfoRow
            label="जन्मस्थळ"
            value={profile.birthPlace || profile.BirthPlace}
          />
          <InfoRow
            label="ऊंची"
            value={
              profile.foot || profile.Foot
                ? `${profile.foot || profile.Foot}' ${profile.inch || profile.Inch || "0"}"`
                : "-"
            }
          />
          <InfoRow
            label="वर्ण"
            value={profile.complexion || profile.Complexion}
          />
          <InfoRow
            label="रक्तगट"
            value={profile.bloodGroup || profile.BloodGroup}
          />
          <InfoRow
            label="गोत्र"
            value={profile.gotra || profile.Gotra}
          />
          <InfoRow
            label="मामकुळ"
            value={profile.mamkul || profile.Mamkul}
          />
          <InfoRow
            label="मूळगाव"
            value={profile.hometown || profile.Hometown}
          />
          <InfoRow
            label="तालुका व जिल्हा"
            value={`${profile.taluka || profile.Taluka || "-"}, ${profile.district || profile.District || "-"}`}
          />
          <InfoRow
            label="भाऊ"
            value={`विवाहित: ${profile.broMarried || profile.BroMarried || "0"}, अविवाहित: ${profile.broUnmarried || profile.BroUnmarried || "0"}`}
          />
          <InfoRow
            label="बहिण"
            value={`विवाहित: ${profile.sisMarried || profile.SisMarried || "0"}, अविवाहित: ${profile.sisUnmarried || profile.SisUnmarried || "0"}`}
          />
          <InfoRow
            label="उमेदवार मोबाईल"
            value={profile.personalMobile || profile.PersonalMobile}
          />
        </View>

        <View style={styles.divider} />

        {/* Section 3: Expectations */}
        <View style={styles.sectionWrap}>
          <View style={styles.subHeader}>
            <Ionicons name="heart" size={16} color="#831843" />
            <Text style={styles.subHeaderText}>जोडीदाराविषयी अपेक्षा</Text>
          </View>
          <Text style={styles.expectationsBoxText}>
            {profile.expectations || profile.Expectations || "अनुरूप व सुशिक्षित जोडीदार"}
          </Text>
        </View>

        <View style={styles.divider} />

        {/* Section 4: Guardian & Contacts */}
        <View style={styles.sectionWrap}>
          <View style={styles.subHeader}>
            <Ionicons name="people" size={16} color="#831843" />
            <Text style={styles.subHeaderText}>पालक व संपर्क माहिती</Text>
          </View>
          <InfoRow
            label="वडिलांचे नाव"
            value={`${profile.fatherTitle || profile.FatherGurdianTitle || "श्री"} ${profile.fatherName || profile.NameOfFatherGuardian || ""}`}
          />
          <InfoRow
            label="पालकांचा पत्ता"
            value={profile.fatherAddress || profile.ParentalAddress}
          />
          <InfoRow
            label="पालक मोबाईल"
            value={profile.fatherMobile || profile.ParentalContactNo1}
          />
          {Boolean(profile.fatherPhone || profile.ParentalContactNo2) && (
            <InfoRow
              label="पालक दूरध्वनी"
              value={profile.fatherPhone || profile.ParentalContactNo2}
            />
          )}
          {Boolean(profile.fatherEmail || profile.ParentalEmail) && (
            <InfoRow
              label="पालक Email"
              value={profile.fatherEmail || profile.ParentalEmail}
            />
          )}

          {Boolean(profile.altName1 || profile.AltNameOfFatherGuardian) && (
            <>
              <View style={styles.subDivider} />
              <InfoRow
                label="पर्यायी संपर्क १"
                value={`${profile.altTitle1 || profile.AltFatherGurdianTitle || ""} ${profile.altName1 || profile.AltNameOfFatherGuardian}`}
              />
              <InfoRow
                label="पत्ता"
                value={profile.altAddress1 || profile.AltParentalAddress}
              />
              <InfoRow
                label="मोबाईल"
                value={profile.altMobile1 || profile.AltParentalContactNo1}
              />
            </>
          )}

          {Boolean(profile.altName2 || profile.AltNameOfFatherGuardian2) && (
            <>
              <View style={styles.subDivider} />
              <InfoRow
                label="पर्यायी संपर्क २"
                value={`${profile.altTitle2 || profile.AltFatherGurdianTitle2 || ""} ${profile.altName2 || profile.AltNameOfFatherGuardian2}`}
              />
              <InfoRow
                label="पत्ता"
                value={profile.altAddress2 || profile.AltParentalAddress2}
              />
              <InfoRow
                label="मोबाईल"
                value={profile.altMobile2 || profile.AltParental2ContactNo1}
              />
            </>
          )}
        </View>
      </View>

      {/* Declaration Checkbox */}
      <TouchableOpacity
        style={styles.declarationWrap}
        onPress={() => setIsDeclared(!isDeclared)}
        activeOpacity={0.8}
      >
        <Ionicons
          name={isDeclared ? "checkbox" : "square-outline"}
          size={24}
          color={isDeclared ? "#831843" : "#64748B"}
        />
        <Text style={styles.declarationText}>
          मी याद्वारे प्रमाणित करतो/करते की वरील दिलेली सर्व माहिती खरी, अचूक व परिपूर्ण आहे.{"\n"}
          (I certify that the information provided above is true and accurate.)
        </Text>
      </TouchableOpacity>

      {/* Verification Notice Card */}
      <View style={styles.noticeCard}>
        <Ionicons name="information-circle" size={20} color="#B45309" />
        <View style={{ flex: 1, marginLeft: 8 }}>
          <Text style={styles.noticeCardTitle}>पडताळणी प्रक्रिया (Verification Process)</Text>
          <Text style={styles.noticeCardDesc}>
            प्रोफाइल सबमिट केल्यावर ४८ तासांच्या आत समितीद्वारे पडताळणी केली जाईल. त्यानंतर आपले प्रोफाइल
            वधू-वर सूचीमध्ये प्रकाशित होईल.
          </Text>
        </View>
      </View>

      {/* Submit Buttons */}
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
          style={[
            styles.submitBtn,
            (!isDeclared || submitting || isSubmitted) && styles.submitBtnDisabled,
          ]}
          onPress={handleSubmitForVerification}
          disabled={!isDeclared || submitting || isSubmitted}
          activeOpacity={0.85}
        >
          {submitting ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : isSubmitted ? (
            <View style={styles.submitBtnContent}>
              <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" />
              <Text style={styles.submitBtnText}>Submitted (सादर झाले)</Text>
            </View>
          ) : (
            <View style={styles.submitBtnContent}>
              <Ionicons name="paper-plane" size={18} color="#FFFFFF" />
              <Text style={styles.submitBtnText}>Submit for Verification</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: "#F8FAFC",
    paddingBottom: 36,
  },
  banner: {
    backgroundColor: "#831843",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
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
  loadingBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#FCE7F3",
    borderRadius: 8,
    marginBottom: 10,
    gap: 8,
  },
  loadingBannerText: {
    color: "#831843",
    fontSize: 12,
    fontWeight: "600",
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    overflow: "hidden",
    marginBottom: 14,
  },
  cardHeader: {
    backgroundColor: "#831843",
    paddingVertical: 10,
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardHeaderTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
  badgeCandidateType: {
    backgroundColor: "#FCE7F3",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  badgeCandidateTypeText: {
    color: "#831843",
    fontSize: 11,
    fontWeight: "800",
  },
  photoSummaryRow: {
    flexDirection: "row",
    padding: 14,
    alignItems: "center",
    gap: 14,
  },
  photoContainer: {
    width: 90,
    height: 115,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    overflow: "hidden",
    backgroundColor: "#F8FAFC",
  },
  photo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  photoPlaceholder: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  noPhotoText: {
    fontSize: 10,
    color: "#94A3B8",
    marginTop: 4,
  },
  nameContainer: {
    flex: 1,
  },
  marathiFullName: {
    fontSize: 17,
    fontWeight: "800",
    color: "#0F172A",
    lineHeight: 22,
  },
  englishFullName: {
    fontSize: 13.5,
    fontWeight: "600",
    color: "#475569",
    marginTop: 2,
  },
  birthNameText: {
    fontSize: 11.5,
    color: "#64748B",
    marginTop: 3,
  },
  candidateIdPill: {
    backgroundColor: "#F1F5F9",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginTop: 6,
  },
  candidateIdPillText: {
    fontSize: 11,
    color: "#334155",
    fontWeight: "700",
  },
  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginHorizontal: 14,
  },
  subDivider: {
    height: 1,
    backgroundColor: "#F8FAFC",
    marginVertical: 4,
  },
  sectionWrap: {
    padding: 14,
  },
  subHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 6,
  },
  subHeaderText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#831843",
  },
  infoRow: {
    flexDirection: "row",
    paddingVertical: 3,
    justifyContent: "space-between",
  },
  infoLabel: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "600",
    flex: 0.45,
  },
  infoValue: {
    fontSize: 12,
    color: "#0F172A",
    fontWeight: "700",
    flex: 0.55,
    textAlign: "right",
  },
  expectationsBoxText: {
    fontSize: 12.5,
    color: "#334155",
    lineHeight: 18,
    fontStyle: "italic",
    backgroundColor: "#FFFBEB",
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#FDE68A",
  },
  declarationWrap: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    gap: 10,
  },
  declarationText: {
    fontSize: 11.5,
    color: "#334155",
    flex: 1,
    lineHeight: 16,
    fontWeight: "500",
  },
  noticeCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FEF3C7",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#FCD34D",
  },
  noticeCardTitle: {
    fontSize: 12,
    fontWeight: "800",
    color: "#92400E",
    marginBottom: 2,
  },
  noticeCardDesc: {
    fontSize: 11,
    color: "#78350F",
    lineHeight: 15,
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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
  submitBtn: {
    flex: 0.65,
    backgroundColor: "#16A34A",
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
  submitBtnDisabled: {
    opacity: 0.55,
    backgroundColor: "#94A3B8",
  },
  submitBtnContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  submitBtnText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
});