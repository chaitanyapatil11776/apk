// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const MANDALS = ["Mandal 1", "Mandal 2", "Mandal 3", "Mandal 4", "Mandal 5"];

// export default function RegistrationScreen() {
//   const navigation = useNavigation();

//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [gender, setGender] = useState("");
//   const [mandal, setMandal] = useState("");
//   const [showMandalList, setShowMandalList] = useState(false);

//   const validate = () => {
//     if (!fullName.trim()) { Alert.alert("Error", "Full Name is required"); return false; }
//     if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) { Alert.alert("Error", "Enter a valid Email Address"); return false; }
//     if (!mobile.trim() || !/^\d{10}$/.test(mobile)) { Alert.alert("Error", "Enter a valid 10-digit Mobile Number"); return false; }
//     if (!password) { Alert.alert("Error", "Password is required"); return false; }
//     if (!/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(password)) {
//       Alert.alert("Error", "Password must have 1 Capital letter, 1 Number, and 1 Special Character");
//       return false;
//     }
//     if (password !== confirmPassword) { Alert.alert("Error", "Passwords do not match"); return false; }
//     if (!gender) { Alert.alert("Error", "Please select Gender"); return false; }
//     if (!mandal) { Alert.alert("Error", "Please select a Mandal"); return false; }
//     return true;
//   };

//   const handleRegister = () => {
//     if (!validate()) return;
//     Alert.alert(
//       "Success 🎉",
//       `Welcome ${fullName}! Registration successful. Please login.`,
//       [{ text: "Go to Login", onPress: () => navigation.navigate("Login") }]
//     );
//   };

//   return (
//     <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
//       <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">

//         {/* Orange Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerText}>New Registration</Text>
//         </View>

//         <View style={styles.form}>
//           <Text style={styles.introText}>
//             New candidate please register here and create your login credentials
//             and then proceed below for login to your account.
//           </Text>

//           <Text style={styles.label}>Full Name of Candidate *</Text>
//           <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />

//           <Text style={styles.label}>Email Address *</Text>
//           <TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

//           <Text style={styles.label}>Mobile Number *</Text>
//           <View style={styles.mobileRow}>
//             <View style={styles.countryCode}><Text style={styles.countryCodeText}>+91</Text></View>
//             <TextInput style={styles.mobileInput} placeholder="Mobile Number" value={mobile} onChangeText={setMobile} keyboardType="numeric" maxLength={10} />
//           </View>

//           <Text style={styles.noteText}>
//             Note : Password should have 1 Capital Alphabet, 1 Number and 1 Special Character
//           </Text>

//           <Text style={styles.label}>Create your own password *</Text>
//           <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

//           <Text style={styles.label}>Confirm your own password *</Text>
//           <TextInput style={styles.input} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />

//           <Text style={styles.label}>Gender *</Text>
//           <View style={styles.genderRow}>
//             {["Male", "Female"].map((g) => (
//               <TouchableOpacity key={g} style={styles.genderOption} onPress={() => setGender(g)}>
//                 <View style={styles.radio}>
//                   {gender === g && <View style={styles.radioInner} />}
//                 </View>
//                 <Text style={styles.genderText}>{g}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <Text style={styles.label}>Select Mandal from which you get to know about us *</Text>
//           <TouchableOpacity style={styles.dropdown} onPress={() => setShowMandalList(!showMandalList)}>
//             <Text style={mandal ? styles.dropdownSelected : styles.dropdownPlaceholder}>
//               {mandal || "-- Select --"}
//             </Text>
//             <Text style={styles.dropdownArrow}>▼</Text>
//           </TouchableOpacity>
//           {showMandalList && (
//             <View style={styles.dropdownList}>
//               {MANDALS.map((m) => (
//                 <TouchableOpacity key={m} style={styles.dropdownItem} onPress={() => { setMandal(m); setShowMandalList(false); }}>
//                   <Text style={styles.dropdownItemText}>{m}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           )}

//           <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
//             <Text style={styles.registerBtnText}>Register</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
//             <Text style={styles.cancelBtnText}>Cancel Profile</Text>
//           </TouchableOpacity>

//           <Text style={styles.existingText}>Existing user if registered earlier, please login here</Text>
//           <TouchableOpacity style={styles.loginLinkBtn} onPress={() => navigation.navigate("Login")}>
//             <Text style={styles.loginLinkText}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff" },
//   header: { backgroundColor: "#f97316", paddingVertical: 16, alignItems: "center" },
//   headerText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
//   form: { padding: 20 },
//   introText: { fontSize: 13, color: "#333", marginBottom: 16, lineHeight: 20 },
//   label: { fontSize: 13, color: "#333", fontWeight: "600", marginBottom: 5 },
//   input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 11, marginBottom: 14, fontSize: 14, color: "#333" },
//   mobileRow: { flexDirection: "row", marginBottom: 14, gap: 8 },
//   countryCode: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 11, backgroundColor: "#f0f0f0", justifyContent: "center" },
//   countryCodeText: { fontSize: 14, color: "#333" },
//   mobileInput: { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 11, fontSize: 14, color: "#333" },
//   noteText: { fontSize: 12, color: "#1565c0", marginBottom: 14 },
//   genderRow: { flexDirection: "row", gap: 24, marginBottom: 14 },
//   genderOption: { flexDirection: "row", alignItems: "center", gap: 6 },
//   radio: { width: 18, height: 18, borderRadius: 9, borderWidth: 2, borderColor: "#f97316", alignItems: "center", justifyContent: "center" },
//   radioInner: { width: 9, height: 9, borderRadius: 4.5, backgroundColor: "#f97316" },
//   genderText: { fontSize: 14, color: "#333" },
//   dropdown: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 11, marginBottom: 4, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
//   dropdownPlaceholder: { color: "#aaa", fontSize: 14 },
//   dropdownSelected: { color: "#333", fontSize: 14 },
//   dropdownArrow: { color: "#666", fontSize: 12 },
//   dropdownList: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, marginBottom: 14, backgroundColor: "#fff", elevation: 3 },
//   dropdownItem: { padding: 12, borderBottomWidth: 1, borderBottomColor: "#f0f0f0" },
//   dropdownItemText: { fontSize: 14, color: "#333" },
//   registerBtn: { backgroundColor: "#f97316", padding: 14, borderRadius: 8, alignItems: "center", marginTop: 10, marginBottom: 10 },
//   registerBtnText: { color: "#fff", fontWeight: "bold", fontSize: 15 },
//   cancelBtn: { backgroundColor: "#e53935", padding: 14, borderRadius: 8, alignItems: "center", marginBottom: 20 },
//   cancelBtnText: { color: "#fff", fontWeight: "bold", fontSize: 15 },
//   existingText: { textAlign: "center", color: "#444", fontSize: 13, marginBottom: 10 },
//   loginLinkBtn: { backgroundColor: "#16a34a", padding: 14, borderRadius: 8, alignItems: "center", marginBottom: 30 },
//   loginLinkText: { color: "#fff", fontWeight: "bold", fontSize: 15 },
// });












import React, { useState, useRef, useEffect } from "react";
import {
  View, Text, StyleSheet, TouchableOpacity, TextInput,
  ScrollView, Alert, KeyboardAvoidingView, Platform,
  Modal, ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MANDALS = ["Mandal 1", "Mandal 2", "Mandal 3", "Mandal 4", "Mandal 5"];
const OTP_LENGTH = 6;

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

export default function RegistrationScreen() {
  const navigation = useNavigation();

  const [fullName, setFullName]               = useState("");
  const [email, setEmail]                     = useState("");
  const [mobile, setMobile]                   = useState("");
  const [password, setPassword]               = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender]                   = useState("");
  const [mandal, setMandal]                   = useState("");
  const [showMandalList, setShowMandalList]   = useState(false);

  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpValue, setOtpValue]         = useState("");
  const [mockOtp, setMockOtp]           = useState("");
  const [resendTimer, setResendTimer]   = useState(120);
  const [canResend, setCanResend]       = useState(false);
  const [loading, setLoading]           = useState(false);
  const [otpError, setOtpError]         = useState("");

  const otpInputRef = useRef(null);
  const timerRef    = useRef(null);

  // ─── Timer ─────────────────────────────────────────────────────────────────
  const startTimer = () => {
    setResendTimer(120);
    setCanResend(false);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) { clearInterval(timerRef.current); setCanResend(true); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => () => clearInterval(timerRef.current), []);

  // ─── Send mock OTP ─────────────────────────────────────────────────────────
  const sendOtp = () => {
    setLoading(true);
    setOtpError("");
    const otp = generateOtp();
    setMockOtp(otp);

    setTimeout(() => {
      setLoading(false);
      setOtpValue("");
      setShowOtpModal(true);
      startTimer();
      setTimeout(() => {
        Alert.alert(
          "OTP Sent ✅",
          `Demo OTP for +91 ${mobile}:\n\n🔐  ${otp}`,
          [{ text: "OK", onPress: () => otpInputRef.current?.focus() }]
        );
      }, 200);
    }, 800);
  };

  // ─── Auto-verify when 6 digits entered ────────────────────────────────────
  const handleOtpChange = (value) => {
    if (!/^\d*$/.test(value)) return;
    const trimmed = value.slice(0, OTP_LENGTH);
    setOtpValue(trimmed);
    setOtpError("");

    if (trimmed.length === OTP_LENGTH) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        if (trimmed === mockOtp) {
          clearInterval(timerRef.current);
          setShowOtpModal(false);
          Alert.alert("Success 🎉", `Welcome ${fullName}! Registration successful.`, [
            { text: "Go to Login", onPress: () => navigation.navigate("Login") },
          ]);
        } else {
          setOtpError("Invalid OTP. Please try again.");
          setOtpValue("");
          otpInputRef.current?.focus();
        }
      }, 500);
    }
  };

  // ─── Validation ─────────────────────────────────────────────────────────────
  const validate = () => {
    if (!fullName.trim())                                        { Alert.alert("Error", "Full Name is required"); return false; }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email))           { Alert.alert("Error", "Enter a valid Email"); return false; }
    if (!mobile.trim() || !/^\d{10}$/.test(mobile))             { Alert.alert("Error", "Enter valid 10-digit Mobile"); return false; }
    if (!password)                                               { Alert.alert("Error", "Password is required"); return false; }
    if (!/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(password)) { Alert.alert("Error", "Password must have 1 Capital, 1 Number, 1 Special Character"); return false; }
    if (password !== confirmPassword)                            { Alert.alert("Error", "Passwords do not match"); return false; }
    if (!gender)                                                 { Alert.alert("Error", "Please select Gender"); return false; }
    if (!mandal)                                                 { Alert.alert("Error", "Please select a Mandal"); return false; }
    return true;
  };

  const handleRegister = () => { if (!validate()) return; sendOtp(); };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">

        <View style={styles.header}>
          <Text style={styles.headerText}>New Registration</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.introText}>
            New candidate please register here and create your login credentials
            and then proceed below for login to your account.
          </Text>

          <Text style={styles.label}>Full Name of Candidate *</Text>
          <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />

          <Text style={styles.label}>Email Address *</Text>
          <TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

          <Text style={styles.label}>Mobile Number *</Text>
          <View style={styles.mobileRow}>
            <View style={styles.countryCode}><Text style={styles.countryCodeText}>+91</Text></View>
            <TextInput style={styles.mobileInput} placeholder="Mobile Number" value={mobile} onChangeText={setMobile} keyboardType="numeric" maxLength={10} />
          </View>

          <Text style={styles.noteText}>
            Note: Password must have 1 Capital, 1 Number and 1 Special Character
          </Text>

          <Text style={styles.label}>Create your own password *</Text>
          <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

          <Text style={styles.label}>Confirm your own password *</Text>
          <TextInput style={styles.input} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />

          <Text style={styles.label}>Gender *</Text>
          <View style={styles.genderRow}>
            {["Male", "Female"].map((g) => (
              <TouchableOpacity key={g} style={styles.genderOption} onPress={() => setGender(g)}>
                <View style={styles.radio}>{gender === g && <View style={styles.radioInner} />}</View>
                <Text style={styles.genderText}>{g}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>Select Mandal *</Text>
          <TouchableOpacity style={styles.dropdown} onPress={() => setShowMandalList(!showMandalList)}>
            <Text style={mandal ? styles.dropdownSelected : styles.dropdownPlaceholder}>{mandal || "-- Select --"}</Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>
          {showMandalList && (
            <View style={styles.dropdownList}>
              {MANDALS.map((m) => (
                <TouchableOpacity key={m} style={styles.dropdownItem} onPress={() => { setMandal(m); setShowMandalList(false); }}>
                  <Text style={styles.dropdownItemText}>{m}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <TouchableOpacity style={[styles.registerBtn, loading && { opacity: 0.7 }]} onPress={handleRegister} disabled={loading}>
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.registerBtnText}>Register</Text>}
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelBtnText}>Cancel Profile</Text>
          </TouchableOpacity>

          <Text style={styles.existingText}>Existing user? Login here</Text>
          <TouchableOpacity style={styles.loginLinkBtn} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLinkText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* ── OTP Modal — matches website popup style ───────────────────────── */}
      <Modal visible={showOtpModal} transparent animationType="fade" onRequestClose={() => setShowOtpModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>

            {/* Header */}
            <Text style={styles.modalTitle}>Enter Your OTP Number</Text>
            <View style={styles.divider} />

            {/* Info */}
            <Text style={styles.modalSubtitle}>
              OTP sent to <Text style={styles.modalHighlight}>+91 {mobile}</Text>
            </Text>

            {/* Single OTP text input */}
            <TextInput
              ref={otpInputRef}
              style={[
                styles.otpInput,
                otpError         ? styles.otpInputError  : null,
                otpValue.length === OTP_LENGTH ? styles.otpInputFilled : null,
              ]}
              placeholder="OTP Number"
              placeholderTextColor="#aaa"
              value={otpValue}
              onChangeText={handleOtpChange}
              keyboardType="numeric"
              maxLength={OTP_LENGTH}
              autoFocus
            />

            {/* Inline error */}
            {!!otpError && <Text style={styles.errorText}>{otpError}</Text>}

            {/* Auto-verifying spinner */}
            {loading && (
              <View style={styles.verifyingRow}>
                <ActivityIndicator color="#f97316" size="small" />
                <Text style={styles.verifyingText}>Verifying…</Text>
              </View>
            )}

            {/* Resend button — green, matches website */}
            <TouchableOpacity
              style={[styles.resendBtn, (!canResend || loading) && styles.resendBtnDisabled]}
              onPress={() => { if (canResend && !loading) sendOtp(); }}
              disabled={!canResend || loading}>
              <Text style={styles.resendBtnText}>Resend{"\n"}OTP</Text>
            </TouchableOpacity>

            {/* Timer line — matches "The Resend OTP will enable in 116 Seconds" */}
            {!canResend && (
              <Text style={styles.timerLine}>
                The Resend OTP will enable in{" "}
                <Text style={styles.timerCount}>{resendTimer}</Text> Seconds
              </Text>
            )}

            {/* Cancel */}
            <TouchableOpacity style={styles.cancelTouchable} onPress={() => setShowOtpModal(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container:           { flex: 1, backgroundColor: "#fff" },
  header:              { backgroundColor: "#f97316", paddingVertical: 16, alignItems: "center" },
  headerText:          { color: "#fff", fontSize: 18, fontWeight: "bold" },
  form:                { padding: 20 },
  introText:           { fontSize: 13, color: "#333", marginBottom: 16, lineHeight: 20 },
  label:               { fontSize: 13, color: "#333", fontWeight: "600", marginBottom: 5 },
  input:               { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 11, marginBottom: 14, fontSize: 14, color: "#333" },
  mobileRow:           { flexDirection: "row", marginBottom: 14, gap: 8 },
  countryCode:         { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 11, backgroundColor: "#f0f0f0", justifyContent: "center" },
  countryCodeText:     { fontSize: 14, color: "#333" },
  mobileInput:         { flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 11, fontSize: 14, color: "#333" },
  noteText:            { fontSize: 12, color: "#1565c0", marginBottom: 14 },
  genderRow:           { flexDirection: "row", gap: 24, marginBottom: 14 },
  genderOption:        { flexDirection: "row", alignItems: "center", gap: 6 },
  radio:               { width: 18, height: 18, borderRadius: 9, borderWidth: 2, borderColor: "#f97316", alignItems: "center", justifyContent: "center" },
  radioInner:          { width: 9, height: 9, borderRadius: 4.5, backgroundColor: "#f97316" },
  genderText:          { fontSize: 14, color: "#333" },
  dropdown:            { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 11, marginBottom: 4, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  dropdownPlaceholder: { color: "#aaa", fontSize: 14 },
  dropdownSelected:    { color: "#333", fontSize: 14 },
  dropdownArrow:       { color: "#666", fontSize: 12 },
  dropdownList:        { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, marginBottom: 14, backgroundColor: "#fff", elevation: 3 },
  dropdownItem:        { padding: 12, borderBottomWidth: 1, borderBottomColor: "#f0f0f0" },
  dropdownItemText:    { fontSize: 14, color: "#333" },
  registerBtn:         { backgroundColor: "#f97316", padding: 14, borderRadius: 8, alignItems: "center", marginTop: 10, marginBottom: 10 },
  registerBtnText:     { color: "#fff", fontWeight: "bold", fontSize: 15 },
  cancelBtn:           { backgroundColor: "#e53935", padding: 14, borderRadius: 8, alignItems: "center", marginBottom: 20 },
  cancelBtnText:       { color: "#fff", fontWeight: "bold", fontSize: 15 },
  existingText:        { textAlign: "center", color: "#444", fontSize: 13, marginBottom: 10 },
  loginLinkBtn:        { backgroundColor: "#16a34a", padding: 14, borderRadius: 8, alignItems: "center", marginBottom: 30 },
  loginLinkText:       { color: "#fff", fontWeight: "bold", fontSize: 15 },

  // ── OTP Modal ──────────────────────────────────────────────────────────────
  modalOverlay:       { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center" },
  modalCard:          { backgroundColor: "#fff", borderRadius: 8, padding: 20, width: "82%", elevation: 10 },
  modalTitle:         { fontSize: 17, fontWeight: "bold", color: "#111", marginBottom: 10 },
  divider:            { height: 1, backgroundColor: "#e5e7eb", marginBottom: 12 },
  modalSubtitle:      { fontSize: 13, color: "#555", marginBottom: 14 },
  modalHighlight:     { color: "#f97316", fontWeight: "600" },

  otpInput:           { borderWidth: 1, borderColor: "#ccc", borderRadius: 5, paddingHorizontal: 12, paddingVertical: 10, fontSize: 18, color: "#333", letterSpacing: 6, fontWeight: "700", marginBottom: 6 },
  otpInputError:      { borderColor: "#e53935" },
  otpInputFilled:     { borderColor: "#f97316", backgroundColor: "#fff7ed" },

  errorText:          { fontSize: 12, color: "#e53935", marginBottom: 8 },

  verifyingRow:       { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 10 },
  verifyingText:      { fontSize: 13, color: "#f97316" },

  // Green resend button — matches website
  resendBtn:          { backgroundColor: "#16a34a", paddingVertical: 10, paddingHorizontal: 18, borderRadius: 6, marginTop: 8, marginBottom: 10, alignSelf: "flex-start" },
  resendBtnDisabled:  { backgroundColor: "#86efac" },
  resendBtnText:      { color: "#fff", fontWeight: "bold", fontSize: 13, textAlign: "center" },

  // Timer line — matches website italic sentence
  timerLine:          { fontSize: 13, color: "#333", marginBottom: 14 },
  timerCount:         { color: "#1565c0", fontWeight: "bold" },

  cancelTouchable:    { alignSelf: "center", paddingTop: 4 },
  cancelText:         { color: "#e53935", fontSize: 14, fontWeight: "600" },
});