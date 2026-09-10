// import React, { useState, useEffect, useRef, useCallback } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   Modal,
//   ActivityIndicator,
//   Alert,
//   Dimensions,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { LinearGradient } from "expo-linear-gradient";
// import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import accountApi, { DEFAULT_MANDALS } from "../api/accountApi";

// const { width: SW } = Dimensions.get("window");

// // 12 Guidelines matching reference portal Ooa configuration
// const GUIDELINES = [
//   "For Registering name in Suchi (Hard Copy Booklet) starts: Every 1st August (Year to Year)",
//   "Last date for Registration: 31st October",
//   "Last date of Submission of profile: 31st October",
//   "You can still continue to register after the end date.",
//   "नोंदणी शुल्क : नाही (No Registration Fee)",
//   "उमेदवाराचे प्रोफाइल Verify झाल्यावर, ऑनलाइन मध्ये प्रकाशित होतील.",
//   "ऑनलाइन वधू-वर सूची, उमेदवारांच्या अकाऊंट मध्ये, वर्षभर उपलब्ध असेल.",
//   "दर वर्षी, 31st October पर्यंत आलेल्या उमेदवारांची नावे त्या वर्षाच्या वधू-वर पुस्तिकेत छापले जातील.",
//   "31st October नंतर आलेल्या उमेदवारांची नावे फक्त ऑनलाइन सूची मध्ये प्रकाशित होतील. लग्न ठरल्यास, अकाऊंट कधीही निष्क्रिय करता येईल.",
//   "सूची मिळण्याची तारीख 25th December",
//   "365 days 24X7 नाव नोंदणी उपलब्ध राहील.",
//   "वधु-वर मेळावा दर वर्षी जानेवारी मध्ये आयोजित केला जातो.",
// ];

// export default function RegistrationScreen() {
//   const navigation = useNavigation();

//   // Form Fields
//   const [mandals, setMandals] = useState(DEFAULT_MANDALS);
//   const [selectedMandal, setSelectedMandal] = useState(DEFAULT_MANDALS[0]);
//   const [mandalModalVisible, setMandalModalVisible] = useState(false);
//   const [mandalSearch, setMandalSearch] = useState("");

//   const [firstName, setFirstName] = useState("");
//   const [middleName, setMiddleName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [genderCode, setGenderCode] = useState("M"); // "M" or "F"

//   // Contact - Mobile
//   const [mobile, setMobile] = useState("");
//   const [mobileOtp, setMobileOtp] = useState("");
//   const [isMobileOtpSent, setIsMobileOtpSent] = useState(false);
//   const [isMobileVerified, setIsMobileVerified] = useState(false);
//   const [sendingMobileOtp, setSendingMobileOtp] = useState(false);
//   const [verifyingMobileOtp, setVerifyingMobileOtp] = useState(false);
//   const [mobileTimer, setMobileTimer] = useState(0);

//   // Contact - Email
//   const [email, setEmail] = useState("");
//   const [emailOtp, setEmailOtp] = useState("");
//   const [isEmailOtpSent, setIsEmailOtpSent] = useState(false);
//   const [isEmailVerified, setIsEmailVerified] = useState(false);
//   const [sendingEmailOtp, setSendingEmailOtp] = useState(false);
//   const [verifyingEmailOtp, setVerifyingEmailOtp] = useState(false);
//   const [emailTimer, setEmailTimer] = useState(0);

//   // Password
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   // General UI States
//   const [showGuidelines, setShowGuidelines] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [successModalVisible, setSuccessModalVisible] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");

//   const mobileTimerRef = useRef(null);
//   const emailTimerRef = useRef(null);

//   // Fetch live mandal list on mount
//   useEffect(() => {
//     let isMounted = true;
//     (async () => {
//       try {
//         const list = await accountApi.getMandalList();
//         if (isMounted && Array.isArray(list) && list.length > 0) {
//           setMandals(list);
//           setSelectedMandal(list[0]);
//         }
//       } catch (e) {
//         console.log("Could not load mandals dynamically:", e.message);
//       }
//     })();
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   // Mobile Timer countdown
//   useEffect(() => {
//     if (mobileTimer > 0) {
//       mobileTimerRef.current = setTimeout(() => {
//         setMobileTimer((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearTimeout(mobileTimerRef.current);
//   }, [mobileTimer]);

//   // Email Timer countdown
//   useEffect(() => {
//     if (emailTimer > 0) {
//       emailTimerRef.current = setTimeout(() => {
//         setEmailTimer((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearTimeout(emailTimerRef.current);
//   }, [emailTimer]);

//   // Handle Mobile Number Change (Reset verification if changed)
//   const handleMobileChange = (val) => {
//     const cleaned = val.replace(/[^0-9]/g, "").slice(0, 10);
//     setMobile(cleaned);
//     if (isMobileVerified || isMobileOtpSent) {
//       setIsMobileVerified(false);
//       setIsMobileOtpSent(false);
//       setMobileOtp("");
//       setMobileTimer(0);
//       Alert.alert(
//         "Mobile Changed",
//         "You have changed the mobile number, so the earlier verification no longer applies. Please verify the new number."
//       );
//     }
//   };

//   // Handle Email Change (Reset verification if changed)
//   const handleEmailChange = (val) => {
//     setEmail(val);
//     if (isEmailVerified || isEmailOtpSent) {
//       setIsEmailVerified(false);
//       setIsEmailOtpSent(false);
//       setEmailOtp("");
//       setEmailTimer(0);
//     }
//   };

//   // Format seconds to MM:SS
//   const formatTime = (secs) => {
//     const m = Math.floor(secs / 60);
//     const s = secs % 60;
//     return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
//   };



//   // ==========================================
//   // CHECK MOBILE NUMBER EXISTS
//   // ==========================================
//   const checkMobileNumber = async () => {
//     if (!mobile || mobile.length !== 10) {
//       Alert.alert(
//         "Invalid Mobile",
//         "Please enter a valid 10-digit mobile number."
//       );
//       return false;
//     }

//     try {
//       const res = await accountApi.checkMobileExists(
//         email.trim(),
//         mobile.trim()
//       );

//       console.log("CHECK MOBILE RESPONSE:", res);

//       if (res?.Data === true || res === true) {
//         Alert.alert(
//           "Mobile Already Registered",
//           "This mobile number is already registered. Please use another mobile number."
//         );
//         return false;
//       }

//       if (res?.Data === false || res === false) {
//         return true;
//       }

//       Alert.alert(
//         "Unable to Check Mobile",
//         res?.Message || "Could not verify mobile number."
//       );

//       return false;
//     } catch (error) {
//       console.log("CHECK MOBILE ERROR:", error);

//       Alert.alert(
//         "Mobile Check Error",
//         error.response?.data?.Message ||
//           error.message ||
//           "Unable to check mobile number."
//       );

//       return false;
//     }
//   };

//   // ==========================================
//   // CHECK EMAIL ADDRESS EXISTS (DUPLICATE CHECK)
//   // ==========================================
//   const checkEmailAddress = async () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email || !emailRegex.test(email.trim())) {
//       Alert.alert(
//         "Invalid Email",
//         "Please enter a valid email address."
//       );
//       return false;
//     }

//     try {
//       const res = await accountApi.checkEmailExists(
//         email.trim(),
//         mobile.trim()
//       );

//       console.log("CHECK EMAIL RESPONSE:", res);

//       if (res?.Data === true || res === true) {
//         Alert.alert(
//           "Email Already Registered",
//           "This Email ID is already registered. Kindly use a unique Email ID. हा ईमेल यापूर्वीच नोंदणीसाठी वापरला आहे. कृपया दुसरा ईमेल वापरा."
//         );
//         return false;
//       }

//       if (res?.Data === false || res === false) {
//         return true;
//       }

//       Alert.alert(
//         "Unable to Check Email",
//         res?.Message || "Could not verify email address."
//       );

//       return false;
//     } catch (error) {
//       console.log("CHECK EMAIL ERROR:", error);

//       Alert.alert(
//         "Email Check Error",
//         error.response?.data?.Message ||
//           error.message ||
//           "Unable to check email address."
//       );

//       return false;
//     }
//   };

//   // ==========================================
//   // SEND MOBILE OTP
//   // ==========================================
//   const handleSendMobileOtp = async () => {
//     if (!mobile || mobile.length !== 10) {
//       Alert.alert("Invalid Mobile", "Please enter a valid 10-digit mobile number first.");
//       return;
//     }
//     if (!firstName.trim()) {
//       Alert.alert("Name Required", "Please enter Candidate First Name first.");
//       return;
//     }

//     try {
//       setSendingMobileOtp(true);
//       // Pre-check duplicate
//       const isMobileTaken = await accountApi.checkMobileExists(email.trim(), mobile.trim());
//       if (isMobileTaken === true || isMobileTaken?.Data === true) {
//         Alert.alert(
//           "Mobile Already Registered",
//           "This Mobile Number is already registered. Kindly use a unique Mobile Number. हा मोबाईल क्रमांक यापूर्वीच नोंदणीसाठी वापरला आहे. कृपया दुसरा मोबाईल क्रमांक वापरा."
//         );
//         return;
//       }

//       const res = await accountApi.sendMobileOtp(mobile.trim(), firstName.trim(), "");
//       if (res?.Success === false) {
//         Alert.alert("OTP Failed", res?.Message || "Failed to send Mobile OTP.");
//         return;
//       }

//       setIsMobileOtpSent(true);
//       setIsMobileVerified(false);
//       setMobileTimer(600); // 10 minutes countdown
//       Alert.alert("OTP Sent", "An SMS OTP has been sent to your mobile number. Please check your messages.");
//     } catch (err) {
//       console.log("Send Mobile OTP error:", err.message);
//       Alert.alert(
//         "OTP Error",
//         err.response?.data?.Message || err.message || "Failed to send Mobile OTP. Please check mobile number."
//       );
//     } finally {
//       setSendingMobileOtp(false);
//     }
//   };

//   // ==========================================
//   // VERIFY MOBILE OTP
//   // ==========================================
//   const handleVerifyMobileOtp = async () => {
//     if (!mobileOtp.trim()) {
//       Alert.alert("OTP Required", "Please enter the OTP received on your mobile number.");
//       return;
//     }

//     try {
//       setVerifyingMobileOtp(true);
//       const res = await accountApi.verifyMobileOtp(mobile.trim(), mobileOtp.trim(), 0);

//       if (res?.Success === true || res === true) {
//         setIsMobileVerified(true);
//         setIsMobileOtpSent(false);
//         setMobileTimer(0);
//         Alert.alert("Mobile Verified ✓", "Mobile number verified successfully!");
//       } else {
//         Alert.alert("Verification Failed", res?.Message || "Invalid OTP. Please enter the correct OTP.");
//       }
//     } catch (err) {
//       console.log("Verify Mobile OTP error:", err.message);
//       Alert.alert(
//         "Verification Failed",
//         err.response?.data?.Message || "Invalid OTP. Please check and try again."
//       );
//     } finally {
//       setVerifyingMobileOtp(false);
//     }
//   };

//   // ==========================================
//   // SEND EMAIL OTP (Optional / Reference flow)
//   // ==========================================
//   const handleSendEmailOtp = async () => {
//     // 1. Check if email is valid and not duplicate
//     const isEmailAvailable = await checkEmailAddress();
//     if (!isEmailAvailable) {
//       return;
//     }

//     try {
//       setSendingEmailOtp(true);
//       const res = await accountApi.sendEmailOtp(email.trim(), firstName.trim() || "Candidate", "");
//       if (res?.Success === false) {
//         Alert.alert("Email OTP Failed", res?.Message || "Failed to send Email OTP.");
//         return;
//       }

//       setIsEmailOtpSent(true);
//       setEmailTimer(300); // 5 minutes
//       Alert.alert("Verification Sent", "A verification code has been sent to your email address.");
//     } catch (err) {
//       console.log("Send Email OTP error:", err.message);
//       Alert.alert(
//         "Email OTP Error",
//         err.response?.data?.Message || "Failed to send code to email."
//       );
//     } finally {
//       setSendingEmailOtp(false);
//     }
//   };

//   // ==========================================
//   // VERIFY EMAIL OTP
//   // ==========================================
//   const handleVerifyEmailOtp = async () => {
//     if (!emailOtp.trim()) {
//       Alert.alert("Code Required", "Please enter the verification code sent to your email.");
//       return;
//     }

//     try {
//       setVerifyingEmailOtp(true);
//       const res = await accountApi.verifyEmailOtp(email.trim(), emailOtp.trim());

//       if (res?.Success === true || res === true) {
//         setIsEmailVerified(true);
//         setIsEmailOtpSent(false);
//         setEmailTimer(0);
//         Alert.alert("Email Verified ✓", "Email address verified successfully!");
//       } else {
//         Alert.alert("Verification Failed", res?.Message || "Invalid code. Please try again.");
//       }
//     } catch (err) {
//       console.log("Verify Email OTP error:", err.message);
//       Alert.alert(
//         "Verification Failed",
//         err.response?.data?.Message || "Invalid email verification code."
//       );
//     } finally {
//       setVerifyingEmailOtp(false);
//     }
//   };

//   // ==========================================
//   // REGISTER USER SUBMISSION
//   // ==========================================
//   const handleRegister = async () => {
//     // 1. Validation
//     if (!selectedMandal?.value) {
//       Alert.alert("Validation", "Please select your Mandal.");
//       return;
//     }
//     if (!firstName.trim()) {
//       Alert.alert("Validation", "Please enter First Name.");
//       return;
//     }
//     if (!lastName.trim()) {
//       Alert.alert("Validation", "Please enter Last Name / Surname.");
//       return;
//     }
//     if (!mobile || mobile.length !== 10) {
//       Alert.alert("Validation", "Please enter a valid 10-digit mobile number.");
//       return;
//     }
//     if (!isMobileVerified) {
//       Alert.alert(
//         "Mobile Verification Required",
//         "Please verify your mobile number with OTP before submitting registration."
//       );
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email || !emailRegex.test(email.trim())) {
//       Alert.alert("Validation", "Please enter a valid email address.");
//       return;
//     }

//     // Password validation: min 8, 1 uppercase, 1 digit, 1 special char
//     const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-=[\]{}|;:'",.<>/~`])[A-Za-z\d@$!%*?&#^()_+\-=[\]{}|;:'",.<>/~`]{8,}$/;
//     if (!strongPasswordRegex.test(password)) {
//       Alert.alert(
//         "Password Requirement",
//         "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 number, and 1 special character."
//       );
//       return;
//     }

//     if (password !== confirmPassword) {
//       Alert.alert("Password Mismatch", "Password and Confirm Password do not match.");
//       return;
//     }

//     try {
//       setSubmitting(true);

//       // Pre-check email and mobile duplicates
//       const [emailExists, mobileExists] = await Promise.all([
//         accountApi.checkEmailExists(email.trim(), mobile.trim()),
//         accountApi.checkMobileExists(email.trim(), mobile.trim()),
//       ]);

//       if (emailExists === true || emailExists?.Data === true) {
//         Alert.alert(
//           "Email Already Registered",
//           "This Email ID is already registered. Kindly use a unique Email ID. हा ईमेल यापूर्वीच नोंदणीसाठी वापरला आहे. कृपया दुसरा ईमेल वापरा."
//         );
//         return;
//       }

//       if (mobileExists === true || mobileExists?.Data === true) {
//         Alert.alert(
//           "Mobile Already Registered",
//           "This Mobile Number is already registered. Kindly use a unique Mobile Number. हा मोबाईल क्रमांक यापूर्वीच नोंदणीसाठी वापरला आहे. कृपया दुसरा मोबाईल क्रमांक वापरा."
//         );
//         return;
//       }

//       // Payload matching RegisterUserRequestDto
//       const payload = {
//         MandalId: Number(selectedMandal.value) || 1,
//         FirstName: firstName.trim().toUpperCase(),
//         MiddleName: middleName.trim().toUpperCase(),
//         LastName: lastName.trim().toUpperCase(),
//         GenderCode: genderCode,
//         Mobile: mobile.trim(),
//         Email: email.trim(),
//         Password: password,
//       };

//       console.log("Submitting RegisterUser Payload:", payload);
//       const res = await accountApi.registerUser(payload);

//       if (res?.Success === true || res?.success === true) {
//         setSuccessMessage(
//           res?.Message ||
//             "Your candidate account has been registered successfully! You can now log in using your registered credentials."
//         );
//         setSuccessModalVisible(true);
//       } else {
//         Alert.alert("Registration Failed", res?.Message || "Unable to register candidate.");
//       }
//     } catch (err) {
//       console.log("Registration Error:", err.message);
//       Alert.alert(
//         "Registration Error",
//         err.response?.data?.Message ||
//           err.response?.data?.message ||
//           err.message ||
//           "An error occurred while creating your account. Please try again."
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const filteredMandals = mandals.filter((m) =>
//     (m.label || "").toLowerCase().includes(mandalSearch.toLowerCase())
//   );

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//       style={{ flex: 1, backgroundColor: "#f8fafc" }}
//     >
//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         {/* ========================================== */}
//         {/* HEADER BRANDING */}
//         {/* ========================================== */}
//         <LinearGradient
//           colors={["#c2410c", "#ea580c", "#f97316"]}
//           style={styles.headerContainer}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 1 }}
//         >
//           <View style={styles.headerIconWrap}>
//             <MaterialCommunityIcons name="ring" size={32} color="#ffffff" />
//           </View>
//           <Text style={styles.headerMarathiTitle}>
//             समता भ्रातृ मंडळ (पिंपरी - चिंचवड) व
//           </Text>
//           <Text style={styles.headerMarathiSub}>
//             लेवा पाटीदार मित्र मंडळ (सांगवी) आयोजित
//           </Text>
//           <Text style={styles.headerMarathiEvent}>
//             वधु-वर मेळावा नाव नोंदणी
//           </Text>
//           <View style={styles.headerBadge}>
//             <Text style={styles.headerBadgeText}>Welcome to Matrimonial Portal</Text>
//           </View>
//         </LinearGradient>

//         {/* ========================================== */}
//         {/* GUIDELINES ACCORDION */}
//         {/* ========================================== */}
//         <View style={styles.guidelinesCard}>
//           <TouchableOpacity
//             style={styles.guidelinesToggle}
//             onPress={() => setShowGuidelines(!showGuidelines)}
//             activeOpacity={0.8}
//           >
//             <View style={{ flexDirection: "row", alignItems: "center", gap: 8, flex: 1 }}>
//               <Ionicons name="information-circle" size={20} color="#ea580c" />
//               <Text style={styles.guidelinesToggleText}>
//                 नोंदणी संदर्भातील महत्त्वाची माहिती (Rules & Info)
//               </Text>
//             </View>
//             <Ionicons
//               name={showGuidelines ? "chevron-up" : "chevron-down"}
//               size={20}
//               color="#ea580c"
//             />
//           </TouchableOpacity>

//           {showGuidelines && (
//             <View style={styles.guidelinesList}>
//               {GUIDELINES.map((item, idx) => (
//                 <View key={idx} style={styles.guidelineItem}>
//                   <Ionicons
//                     name="checkmark-circle"
//                     size={16}
//                     color="#ea580c"
//                     style={{ marginTop: 2 }}
//                   />
//                   <Text style={styles.guidelineText}>{item}</Text>
//                 </View>
//               ))}
//             </View>
//           )}
//         </View>

//         {/* ========================================== */}
//         {/* FORM CONTAINER */}
//         {/* ========================================== */}
//         <View style={styles.formCard}>
//           {/* Card Title */}
//           <View style={styles.formCardHeader}>
//             <Ionicons name="person-add" size={22} color="#ea580c" />
//             <View style={{ flex: 1, marginLeft: 10 }}>
//               <Text style={styles.formTitle}>New Registration</Text>
//               <Text style={styles.formSubtitle}>
//                 Create your login credentials, then proceed to log in.
//               </Text>
//             </View>
//           </View>

//           {/* Password Tip */}
//           <View style={styles.tipBox}>
//             <Text style={styles.tipBold}>Note: </Text>
//             <Text style={styles.tipText}>
//               Password should have 1 capital alphabet, 1 number, and 1 special character.
//             </Text>
//           </View>

//           {/* ────────────────────────────────────────── */}
//           {/* SECTION 1: MANDAL */}
//           {/* ────────────────────────────────────────── */}
//           <View style={styles.sectionHeader}>
//             <MaterialCommunityIcons name="office-building" size={18} color="#d97706" />
//             <Text style={styles.sectionTitle}>
//               Mandal <Text style={styles.sectionTitleMarathi}>(मंडळ सिलेक्ट करा)</Text>
//               <Text style={styles.req}> *</Text>
//             </Text>
//           </View>
//           <Text style={styles.fieldNote}>
//             आपल्याला कुठल्या मंडळाकडून वधू वर नोंदणीची माहिती भेटली ते मंडळ सिलेक्ट करा
//           </Text>

//           <TouchableOpacity
//             style={styles.dropdownButton}
//             onPress={() => setMandalModalVisible(true)}
//             activeOpacity={0.8}
//           >
//             <Text style={styles.dropdownValueText} numberOfLines={1}>
//               {selectedMandal?.label || "Select your Mandal"}
//             </Text>
//             <Ionicons name="chevron-down" size={18} color="#64748b" />
//           </TouchableOpacity>

//           {/* ────────────────────────────────────────── */}
//           {/* SECTION 2: CANDIDATE NAME & GENDER */}
//           {/* ────────────────────────────────────────── */}
//           <View style={[styles.sectionHeader, { marginTop: 22 }]}>
//             <Ionicons name="person" size={18} color="#7c3aed" />
//             <Text style={styles.sectionTitle}>Candidate Name & Gender</Text>
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>
//               First Name <Text style={styles.req}>*</Text>
//             </Text>
//             <TextInput
//               style={styles.textInput}
//               value={firstName}
//               onChangeText={(t) => setFirstName(t.replace(/[^a-zA-Z\s]/g, ""))}
//               placeholder="Enter First Name"
//               placeholderTextColor="#94a3b8"
//               autoCapitalize="characters"
//               maxLength={50}
//             />
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>Middle Name</Text>
//             <TextInput
//               style={styles.textInput}
//               value={middleName}
//               onChangeText={(t) => setMiddleName(t.replace(/[^a-zA-Z\s]/g, ""))}
//               placeholder="Enter Middle Name"
//               placeholderTextColor="#94a3b8"
//               autoCapitalize="characters"
//               maxLength={50}
//             />
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>
//               Last Name / Surname <Text style={styles.req}>*</Text>
//             </Text>
//             <TextInput
//               style={styles.textInput}
//               value={lastName}
//               onChangeText={(t) => setLastName(t.replace(/[^a-zA-Z\s]/g, ""))}
//               placeholder="Enter Last Name"
//               placeholderTextColor="#94a3b8"
//               autoCapitalize="characters"
//               maxLength={50}
//             />
//           </View>

//           {/* Gender Selector */}
//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>
//               Gender <Text style={styles.req}>*</Text>
//             </Text>
//             <View style={styles.genderRow}>
//               <TouchableOpacity
//                 style={[
//                   styles.genderOption,
//                   genderCode === "M" && styles.genderOptionActive,
//                 ]}
//                 onPress={() => setGenderCode("M")}
//                 activeOpacity={0.8}
//               >
//                 <Ionicons
//                   name="male"
//                   size={18}
//                   color={genderCode === "M" ? "#ffffff" : "#475569"}
//                 />
//                 <Text
//                   style={[
//                     styles.genderText,
//                     genderCode === "M" && styles.genderTextActive,
//                   ]}
//                 >
//                   Male (वर)
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[
//                   styles.genderOption,
//                   genderCode === "F" && styles.genderOptionActive,
//                 ]}
//                 onPress={() => setGenderCode("F")}
//                 activeOpacity={0.8}
//               >
//                 <Ionicons
//                   name="female"
//                   size={18}
//                   color={genderCode === "F" ? "#ffffff" : "#475569"}
//                 />
//                 <Text
//                   style={[
//                     styles.genderText,
//                     genderCode === "F" && styles.genderTextActive,
//                   ]}
//                 >
//                   Female (वधू)
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* ────────────────────────────────────────── */}
//           {/* SECTION 3: CONTACT & REAL OTP */}
//           {/* ────────────────────────────────────────── */}
//           <View style={[styles.sectionHeader, { marginTop: 22 }]}>
//             <Ionicons name="call" size={18} color="#059669" />
//             <Text style={styles.sectionTitle}>Contact & Credentials</Text>
//           </View>

//           {/* Mobile Number Field */}
//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>
//               Mobile Number (मोबाईल क्रमांक) <Text style={styles.req}>*</Text>
//             </Text>
//             <View style={styles.inputWithActionRow}>
//               <View style={[styles.inputPrefixWrap, { flex: 1 }]}>
//                 <Ionicons name="call-outline" size={18} color="#64748b" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.textInputWithIcon}
//                   value={mobile}
//                   onChangeText={handleMobileChange}
//                   placeholder="10-digit mobile number"
//                   placeholderTextColor="#94a3b8"
//                   keyboardType="number-pad"
//                   maxLength={10}
//                 />
//               </View>

//               {/* Send OTP / Status Button */}
//               {isMobileVerified ? (
//                 <View style={styles.verifiedBadge}>
//                   <Ionicons name="checkmark-circle" size={16} color="#15803d" />
//                   <Text style={styles.verifiedBadgeText}>Verified</Text>
//                 </View>
//               ) : (
//                 <TouchableOpacity
//                   style={[
//                     styles.actionBtn,
//                     (mobile.length !== 10 || sendingMobileOtp || mobileTimer > 0) &&
//                       styles.actionBtnDisabled,
//                   ]}
//                   onPress={handleSendMobileOtp}
//                   disabled={mobile.length !== 10 || sendingMobileOtp || mobileTimer > 0}
//                   activeOpacity={0.8}
//                 >
//                   {sendingMobileOtp ? (
//                     <ActivityIndicator size="small" color="#ffffff" />
//                   ) : mobileTimer > 0 ? (
//                     <Text style={styles.actionBtnText}>{formatTime(mobileTimer)}</Text>
//                   ) : (
//                     <Text style={styles.actionBtnText}>
//                       {isMobileOtpSent ? "Resend OTP" : "Send OTP"}
//                     </Text>
//                   )}
//                 </TouchableOpacity>
//               )}
//             </View>
//           </View>

//           {/* Mobile OTP Box (Visible when OTP is sent & not yet verified) */}
//           {isMobileOtpSent && !isMobileVerified && (
//             <View style={styles.otpBox}>
//               <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 8 }}>
//                 <Ionicons name="key-outline" size={18} color="#b45309" />
//                 <Text style={styles.otpBoxTitle}>
//                   Enter 4 or 6-digit OTP sent to {mobile} <Text style={styles.req}>*</Text>
//                 </Text>
//               </View>

//               <View style={styles.otpInputRow}>
//                 <TextInput
//                   style={styles.otpTextInput}
//                   value={mobileOtp}
//                   onChangeText={setMobileOtp}
//                   placeholder="Enter Mobile OTP"
//                   placeholderTextColor="#94a3b8"
//                   keyboardType="number-pad"
//                   maxLength={6}
//                 />
//                 <TouchableOpacity
//                   style={[
//                     styles.verifyOtpBtn,
//                     (!mobileOtp.trim() || verifyingMobileOtp) && styles.actionBtnDisabled,
//                   ]}
//                   onPress={handleVerifyMobileOtp}
//                   disabled={!mobileOtp.trim() || verifyingMobileOtp}
//                   activeOpacity={0.8}
//                 >
//                   {verifyingMobileOtp ? (
//                     <ActivityIndicator size="small" color="#ffffff" />
//                   ) : (
//                     <Text style={styles.verifyOtpBtnText}>Verify OTP</Text>
//                   )}
//                 </TouchableOpacity>
//               </View>

//               {mobileTimer > 0 ? (
//                 <Text style={styles.timerHint}>
//                   OTP expires in <Text style={{ fontWeight: "700" }}>{formatTime(mobileTimer)}</Text>
//                 </Text>
//               ) : (
//                 <Text style={styles.timerExpired}>OTP expired. Please tap 'Resend OTP'.</Text>
//               )}
//             </View>
//           )}

//           {/* Email Address Field */}
//           <View style={[styles.inputGroup, { marginTop: 12 }]}>
//             <Text style={styles.label}>
//               Email Address (ईमेल आयडी) <Text style={styles.req}>*</Text>
//             </Text>
//             <View style={styles.inputWithActionRow}>
//               <View style={[styles.inputPrefixWrap, { flex: 1 }]}>
//                 <Ionicons name="mail-outline" size={18} color="#64748b" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.textInputWithIcon}
//                   value={email}
//                   onChangeText={handleEmailChange}
//                   placeholder="Enter Email ID"
//                   placeholderTextColor="#94a3b8"
//                   keyboardType="email-address"
//                   autoCapitalize="none"
//                   autoCorrect={false}
//                 />
//               </View>

//               {isEmailVerified ? (
//                 <View style={styles.verifiedBadge}>
//                   <Ionicons name="checkmark-circle" size={16} color="#15803d" />
//                   <Text style={styles.verifiedBadgeText}>Verified</Text>
//                 </View>
//               ) : (
//                 <TouchableOpacity
//                   style={[
//                     styles.actionBtnSecondary,
//                     (!email.includes("@") || sendingEmailOtp || emailTimer > 0) &&
//                       styles.actionBtnDisabled,
//                   ]}
//                   onPress={handleSendEmailOtp}
//                   disabled={!email.includes("@") || sendingEmailOtp || emailTimer > 0}
//                   activeOpacity={0.8}
//                 >
//                   {sendingEmailOtp ? (
//                     <ActivityIndicator size="small" color="#ffffff" />
//                   ) : emailTimer > 0 ? (
//                     <Text style={styles.actionBtnText}>{formatTime(emailTimer)}</Text>
//                   ) : (
//                     <Text style={styles.actionBtnText}>
//                       {isEmailOtpSent ? "Resend" : "Send Code"}
//                     </Text>
//                   )}
//                 </TouchableOpacity>
//               )}
//             </View>
//           </View>

//           {/* Email OTP Box */}
//           {isEmailOtpSent && !isEmailVerified && (
//             <View style={[styles.otpBox, { backgroundColor: "#f0f9ff", borderColor: "#bae6fd" }]}>
//               <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 8 }}>
//                 <Ionicons name="mail-unread-outline" size={18} color="#0369a1" />
//                 <Text style={[styles.otpBoxTitle, { color: "#0369a1" }]}>
//                   Enter Code sent to {email} <Text style={styles.req}>*</Text>
//                 </Text>
//               </View>

//               <View style={styles.otpInputRow}>
//                 <TextInput
//                   style={[styles.otpTextInput, { borderColor: "#7dd3fc" }]}
//                   value={emailOtp}
//                   onChangeText={setEmailOtp}
//                   placeholder="Enter Email Code"
//                   placeholderTextColor="#94a3b8"
//                   keyboardType="number-pad"
//                   maxLength={6}
//                 />
//                 <TouchableOpacity
//                   style={[
//                     styles.verifyOtpBtn,
//                     { backgroundColor: "#0284c7" },
//                     (!emailOtp.trim() || verifyingEmailOtp) && styles.actionBtnDisabled,
//                   ]}
//                   onPress={handleVerifyEmailOtp}
//                   disabled={!emailOtp.trim() || verifyingEmailOtp}
//                   activeOpacity={0.8}
//                 >
//                   {verifyingEmailOtp ? (
//                     <ActivityIndicator size="small" color="#ffffff" />
//                   ) : (
//                     <Text style={styles.verifyOtpBtnText}>Verify Code</Text>
//                   )}
//                 </TouchableOpacity>
//               </View>

//               {emailTimer > 0 ? (
//                 <Text style={[styles.timerHint, { color: "#0369a1" }]}>
//                   Code expires in <Text style={{ fontWeight: "700" }}>{formatTime(emailTimer)}</Text>
//                 </Text>
//               ) : (
//                 <Text style={styles.timerExpired}>Code expired. Tap 'Resend'.</Text>
//               )}
//             </View>
//           )}

//           {/* ────────────────────────────────────────── */}
//           {/* SECTION 4: PASSWORDS */}
//           {/* ────────────────────────────────────────── */}
//           <View style={[styles.inputGroup, { marginTop: 12 }]}>
//             <Text style={styles.label}>
//               Password <Text style={styles.req}>*</Text>
//             </Text>
//             <View style={styles.passwordInputWrap}>
//               <Ionicons name="lock-closed-outline" size={18} color="#64748b" style={styles.inputIcon} />
//               <TextInput
//                 style={styles.textInputWithIcon}
//                 value={password}
//                 onChangeText={setPassword}
//                 placeholder="Create a strong password"
//                 placeholderTextColor="#94a3b8"
//                 secureTextEntry={!showPassword}
//                 autoCapitalize="none"
//               />
//               <TouchableOpacity
//                 onPress={() => setShowPassword(!showPassword)}
//                 style={styles.eyeBtn}
//               >
//                 <Ionicons
//                   name={showPassword ? "eye-off-outline" : "eye-outline"}
//                   size={20}
//                   color="#64748b"
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>

//           <View style={styles.inputGroup}>
//             <Text style={styles.label}>
//               Confirm Password <Text style={styles.req}>*</Text>
//             </Text>
//             <View style={styles.passwordInputWrap}>
//               <Ionicons name="lock-closed-outline" size={18} color="#64748b" style={styles.inputIcon} />
//               <TextInput
//                 style={styles.textInputWithIcon}
//                 value={confirmPassword}
//                 onChangeText={setConfirmPassword}
//                 placeholder="Re-enter password"
//                 placeholderTextColor="#94a3b8"
//                 secureTextEntry={!showConfirmPassword}
//                 autoCapitalize="none"
//               />
//               <TouchableOpacity
//                 onPress={() => setShowConfirmPassword(!showConfirmPassword)}
//                 style={styles.eyeBtn}
//               >
//                 <Ionicons
//                   name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
//                   size={20}
//                   color="#64748b"
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Register Button */}
//           <TouchableOpacity
//             style={[styles.registerSubmitBtn, submitting && styles.actionBtnDisabled]}
//             onPress={handleRegister}
//             disabled={submitting}
//             activeOpacity={0.85}
//           >
//             {submitting ? (
//               <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
//                 <ActivityIndicator size="small" color="#ffffff" />
//                 <Text style={styles.registerSubmitBtnText}>Registering Candidate...</Text>
//               </View>
//             ) : (
//               <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
//                 <Ionicons name="checkmark-circle" size={20} color="#ffffff" />
//                 <Text style={styles.registerSubmitBtnText}>Register Now</Text>
//               </View>
//             )}
//           </TouchableOpacity>

//           {/* Existing user login link */}
//           <View style={styles.existingUserWrap}>
//             <Text style={styles.existingUserText}>Existing user? If you registered earlier, </Text>
//             <TouchableOpacity onPress={() => navigation.navigate("Login")}>
//               <Text style={styles.loginLinkText}>please login here.</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* ========================================== */}
//         {/* MANDAL SELECTOR MODAL */}
//         {/* ========================================== */}
//         <Modal
//           visible={mandalModalVisible}
//           animationType="slide"
//           transparent={true}
//           onRequestClose={() => setMandalModalVisible(false)}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContent}>
//               <View style={styles.modalHeader}>
//                 <Text style={styles.modalTitle}>Select Mandal (मंडळ निवडा)</Text>
//                 <TouchableOpacity
//                   onPress={() => setMandalModalVisible(false)}
//                   style={styles.modalCloseBtn}
//                 >
//                   <Ionicons name="close" size={22} color="#334155" />
//                 </TouchableOpacity>
//               </View>

//               {/* Search Box */}
//               <View style={styles.searchBoxWrap}>
//                 <Ionicons name="search" size={18} color="#64748b" style={{ marginRight: 8 }} />
//                 <TextInput
//                   style={styles.searchTextInput}
//                   value={mandalSearch}
//                   onChangeText={setMandalSearch}
//                   placeholder="Search Mandal..."
//                   placeholderTextColor="#94a3b8"
//                 />
//                 {mandalSearch.length > 0 && (
//                   <TouchableOpacity onPress={() => setMandalSearch("")}>
//                     <Ionicons name="close-circle" size={18} color="#94a3b8" />
//                   </TouchableOpacity>
//                 )}
//               </View>

//               {/* Mandal List */}
//               <ScrollView style={{ maxHeight: 360 }} showsVerticalScrollIndicator={false}>
//                 {filteredMandals.map((m) => {
//                   const isSelected = selectedMandal?.value === m.value;
//                   return (
//                     <TouchableOpacity
//                       key={String(m.value)}
//                       style={[
//                         styles.mandalListItem,
//                         isSelected && styles.mandalListItemActive,
//                       ]}
//                       onPress={() => {
//                         setSelectedMandal(m);
//                         setMandalModalVisible(false);
//                       }}
//                       activeOpacity={0.7}
//                     >
//                       <View style={{ flex: 1 }}>
//                         <Text
//                           style={[
//                             styles.mandalListItemText,
//                             isSelected && styles.mandalListItemTextActive,
//                           ]}
//                         >
//                           {m.label}
//                         </Text>
//                       </View>
//                       {isSelected && (
//                         <Ionicons name="checkmark-circle" size={20} color="#ea580c" />
//                       )}
//                     </TouchableOpacity>
//                   );
//                 })}
//               </ScrollView>
//             </View>
//           </View>
//         </Modal>

//         {/* ========================================== */}
//         {/* SUCCESS MODAL */}
//         {/* ========================================== */}
//         <Modal
//           visible={successModalVisible}
//           animationType="fade"
//           transparent={true}
//           onRequestClose={() => {
//             setSuccessModalVisible(false);
//             navigation.navigate("Login");
//           }}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.successCard}>
//               <View style={styles.successIconRing}>
//                 <Ionicons name="checkmark" size={36} color="#ffffff" />
//               </View>
//               <Text style={styles.successTitle}>Registration Successful!</Text>
//               <Text style={styles.successMessage}>{successMessage}</Text>
//               <TouchableOpacity
//                 style={styles.successProceedBtn}
//                 onPress={() => {
//                   setSuccessModalVisible(false);
//                   navigation.navigate("Login");
//                 }}
//                 activeOpacity={0.85}
//               >
//                 <Text style={styles.successProceedBtnText}>Proceed to Login</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// // ==========================================
// // STYLES
// // ==========================================
// const styles = StyleSheet.create({
//   scrollContent: {
//     paddingBottom: 40,
//   },
//   headerContainer: {
//     paddingTop: 36,
//     paddingBottom: 28,
//     paddingHorizontal: 20,
//     alignItems: "center",
//     borderBottomLeftRadius: 28,
//     borderBottomRightRadius: 28,
//     elevation: 8,
//     shadowColor: "#ea580c",
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: 4 },
//   },
//   headerIconWrap: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: "rgba(255,255,255,0.2)",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 10,
//   },
//   headerMarathiTitle: {
//     fontSize: 16,
//     fontWeight: "700",
//     color: "#ffffff",
//     textAlign: "center",
//     lineHeight: 22,
//   },
//   headerMarathiSub: {
//     fontSize: 14,
//     fontWeight: "600",
//     color: "#fff7ed",
//     textAlign: "center",
//     marginTop: 2,
//   },
//   headerMarathiEvent: {
//     fontSize: 18,
//     fontWeight: "800",
//     color: "#ffffff",
//     textAlign: "center",
//     marginTop: 4,
//     letterSpacing: 0.3,
//   },
//   headerBadge: {
//     backgroundColor: "#ffffff",
//     paddingHorizontal: 14,
//     paddingVertical: 5,
//     borderRadius: 20,
//     marginTop: 12,
//   },
//   headerBadgeText: {
//     color: "#c2410c",
//     fontWeight: "700",
//     fontSize: 12,
//     letterSpacing: 0.3,
//   },

//   guidelinesCard: {
//     marginHorizontal: 16,
//     marginTop: -10,
//     backgroundColor: "#ffffff",
//     borderRadius: 16,
//     padding: 14,
//     elevation: 4,
//     shadowColor: "#000",
//     shadowOpacity: 0.08,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   guidelinesToggle: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   guidelinesToggleText: {
//     fontSize: 13.5,
//     fontWeight: "700",
//     color: "#c2410c",
//   },
//   guidelinesList: {
//     marginTop: 12,
//     paddingTop: 10,
//     borderTopWidth: 1,
//     borderTopColor: "#fed7aa",
//     gap: 8,
//   },
//   guidelineItem: {
//     flexDirection: "row",
//     alignItems: "flex-start",
//     gap: 8,
//   },
//   guidelineText: {
//     fontSize: 12.5,
//     color: "#334155",
//     flex: 1,
//     lineHeight: 18,
//   },

//   formCard: {
//     marginHorizontal: 16,
//     marginTop: 18,
//     backgroundColor: "#ffffff",
//     borderRadius: 20,
//     padding: 20,
//     elevation: 3,
//     shadowColor: "#000",
//     shadowOpacity: 0.06,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   formCardHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 12,
//   },
//   formTitle: {
//     fontSize: 20,
//     fontWeight: "800",
//     color: "#0f172a",
//   },
//   formSubtitle: {
//     fontSize: 12,
//     color: "#64748b",
//     marginTop: 2,
//   },

//   tipBox: {
//     flexDirection: "row",
//     backgroundColor: "#fff7ed",
//     borderWidth: 1,
//     borderColor: "#fed7aa",
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 16,
//   },
//   tipBold: {
//     color: "#ea580c",
//     fontWeight: "700",
//     fontSize: 12,
//   },
//   tipText: {
//     color: "#1e3a8a",
//     fontSize: 12,
//     flex: 1,
//     lineHeight: 16,
//   },

//   sectionHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 6,
//     marginBottom: 4,
//   },
//   sectionTitle: {
//     fontSize: 14.5,
//     fontWeight: "700",
//     color: "#0f172a",
//   },
//   sectionTitleMarathi: {
//     fontSize: 13,
//     fontWeight: "600",
//     color: "#475569",
//   },
//   fieldNote: {
//     fontSize: 11.5,
//     color: "#64748b",
//     marginBottom: 8,
//     lineHeight: 16,
//   },
//   req: {
//     color: "#dc2626",
//     fontWeight: "700",
//   },

//   dropdownButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: "#f8fafc",
//     borderWidth: 1.5,
//     borderColor: "#cbd5e1",
//     borderRadius: 12,
//     paddingHorizontal: 14,
//     paddingVertical: 12,
//   },
//   dropdownValueText: {
//     fontSize: 14,
//     fontWeight: "600",
//     color: "#0f172a",
//     flex: 1,
//   },

//   inputGroup: {
//     marginTop: 12,
//   },
//   label: {
//     fontSize: 13,
//     fontWeight: "600",
//     color: "#334155",
//     marginBottom: 6,
//   },
//   textInput: {
//     backgroundColor: "#f8fafc",
//     borderWidth: 1.2,
//     borderColor: "#cbd5e1",
//     borderRadius: 12,
//     paddingHorizontal: 14,
//     paddingVertical: 11,
//     fontSize: 14,
//     color: "#0f172a",
//   },

//   genderRow: {
//     flexDirection: "row",
//     gap: 12,
//   },
//   genderOption: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 8,
//     backgroundColor: "#f1f5f9",
//     borderWidth: 1.2,
//     borderColor: "#cbd5e1",
//     borderRadius: 12,
//     paddingVertical: 12,
//   },
//   genderOptionActive: {
//     backgroundColor: "#ea580c",
//     borderColor: "#ea580c",
//   },
//   genderText: {
//     fontSize: 13.5,
//     fontWeight: "600",
//     color: "#475569",
//   },
//   genderTextActive: {
//     color: "#ffffff",
//   },

//   inputWithActionRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },
//   inputPrefixWrap: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f8fafc",
//     borderWidth: 1.2,
//     borderColor: "#cbd5e1",
//     borderRadius: 12,
//     paddingHorizontal: 12,
//   },
//   inputIcon: {
//     marginRight: 8,
//   },
//   textInputWithIcon: {
//     flex: 1,
//     paddingVertical: 11,
//     fontSize: 14,
//     color: "#0f172a",
//   },
//   passwordInputWrap: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f8fafc",
//     borderWidth: 1.2,
//     borderColor: "#cbd5e1",
//     borderRadius: 12,
//     paddingHorizontal: 12,
//   },
//   eyeBtn: {
//     padding: 6,
//   },

//   actionBtn: {
//     backgroundColor: "#ea580c",
//     paddingHorizontal: 14,
//     paddingVertical: 12,
//     borderRadius: 12,
//     minWidth: 95,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   actionBtnSecondary: {
//     backgroundColor: "#0284c7",
//     paddingHorizontal: 14,
//     paddingVertical: 12,
//     borderRadius: 12,
//     minWidth: 95,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   actionBtnDisabled: {
//     opacity: 0.5,
//   },
//   actionBtnText: {
//     color: "#ffffff",
//     fontWeight: "700",
//     fontSize: 12.5,
//   },
//   verifiedBadge: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#dcfce7",
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     borderRadius: 12,
//     gap: 4,
//     borderWidth: 1,
//     borderColor: "#86efac",
//   },
//   verifiedBadgeText: {
//     color: "#15803d",
//     fontSize: 12,
//     fontWeight: "700",
//   },

//   otpBox: {
//     backgroundColor: "#fffbeb",
//     borderWidth: 1.5,
//     borderColor: "#fde68a",
//     borderRadius: 14,
//     padding: 14,
//     marginTop: 10,
//   },
//   otpBoxTitle: {
//     fontSize: 12.5,
//     fontWeight: "700",
//     color: "#92400e",
//     flex: 1,
//   },
//   otpInputRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },
//   otpTextInput: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     borderWidth: 1.2,
//     borderColor: "#f59e0b",
//     borderRadius: 10,
//     paddingHorizontal: 12,
//     paddingVertical: 9,
//     fontSize: 15,
//     fontWeight: "600",
//     letterSpacing: 2,
//     color: "#0f172a",
//   },
//   verifyOtpBtn: {
//     backgroundColor: "#d97706",
//     paddingHorizontal: 14,
//     paddingVertical: 11,
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   verifyOtpBtnText: {
//     color: "#ffffff",
//     fontWeight: "700",
//     fontSize: 13,
//   },
//   timerHint: {
//     fontSize: 11.5,
//     color: "#92400e",
//     marginTop: 6,
//   },
//   timerExpired: {
//     fontSize: 11.5,
//     color: "#dc2626",
//     fontWeight: "700",
//     marginTop: 6,
//   },

//   registerSubmitBtn: {
//     backgroundColor: "#ea580c",
//     paddingVertical: 14,
//     borderRadius: 14,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 24,
//     elevation: 4,
//     shadowColor: "#ea580c",
//     shadowOpacity: 0.25,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   registerSubmitBtnText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "800",
//     letterSpacing: 0.5,
//   },

//   existingUserWrap: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 18,
//     flexWrap: "wrap",
//   },
//   existingUserText: {
//     fontSize: 12.5,
//     color: "#475569",
//   },
//   loginLinkText: {
//     fontSize: 12.5,
//     fontWeight: "700",
//     color: "#ea580c",
//   },

//   // Modal Styles
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: "rgba(15, 23, 42, 0.6)",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   modalContent: {
//     width: "100%",
//     backgroundColor: "#ffffff",
//     borderRadius: 20,
//     padding: 18,
//     maxHeight: "85%",
//   },
//   modalHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: 12,
//   },
//   modalTitle: {
//     fontSize: 16,
//     fontWeight: "700",
//     color: "#0f172a",
//   },
//   modalCloseBtn: {
//     padding: 4,
//   },
//   searchBoxWrap: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f1f5f9",
//     borderRadius: 10,
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     marginBottom: 10,
//   },
//   searchTextInput: {
//     flex: 1,
//     fontSize: 13.5,
//     color: "#0f172a",
//     paddingVertical: 0,
//   },
//   mandalListItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: "#f1f5f9",
//     borderRadius: 8,
//   },
//   mandalListItemActive: {
//     backgroundColor: "#fff7ed",
//   },
//   mandalListItemText: {
//     fontSize: 13.5,
//     color: "#334155",
//     fontWeight: "500",
//   },
//   mandalListItemTextActive: {
//     color: "#ea580c",
//     fontWeight: "700",
//   },

//   // Success Card
//   successCard: {
//     width: SW * 0.85,
//     backgroundColor: "#ffffff",
//     borderRadius: 22,
//     padding: 24,
//     alignItems: "center",
//     elevation: 10,
//   },
//   successIconRing: {
//     width: 64,
//     height: 64,
//     borderRadius: 32,
//     backgroundColor: "#16a34a",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 16,
//   },
//   successTitle: {
//     fontSize: 18,
//     fontWeight: "800",
//     color: "#15803d",
//     marginBottom: 8,
//     textAlign: "center",
//   },
//   successMessage: {
//     fontSize: 13.5,
//     color: "#475569",
//     textAlign: "center",
//     lineHeight: 20,
//     marginBottom: 20,
//   },
//   successProceedBtn: {
//     backgroundColor: "#16a34a",
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 12,
//     width: "100%",
//     alignItems: "center",
//   },
//   successProceedBtnText: {
//     color: "#ffffff",
//     fontSize: 14.5,
//     fontWeight: "700",
//   },
// });




















import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator,
  Alert,
  Dimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import accountApi, { DEFAULT_MANDALS } from "../api/accountApi";

const { width: SW } = Dimensions.get("window");

// ======================================================
// GUIDELINES
// ======================================================

const GUIDELINES = [
  "For Registering name in Suchi (Hard Copy Booklet) starts: Every 1st August (Year to Year)",
  "Last date for Registration: 31st October",
  "Last date of Submission of profile: 31st October",
  "You can still continue to register after the end date.",
  "नोंदणी शुल्क : नाही (No Registration Fee)",
  "उमेदवाराचे प्रोफाइल Verify झाल्यावर, ऑनलाइन मध्ये प्रकाशित होतील.",
  "ऑनलाइन वधू-वर सूची, उमेदवारांच्या अकाऊंट मध्ये, वर्षभर उपलब्ध असेल.",
  "दर वर्षी, 31st October पर्यंत आलेल्या उमेदवारांची नावे त्या वर्षाच्या वधू-वर पुस्तिकेत छापली जातील.",
  "31st October नंतर आलेल्या उमेदवारांची नावे फक्त ऑनलाइन सूची मध्ये प्रकाशित होतील. लग्न ठरल्यास, अकाऊंट कधीही निष्क्रिय करता येईल.",
  "सूची मिळण्याची तारीख 25th December",
  "365 days 24X7 नाव नोंदणी उपलब्ध राहील.",
  "वधु-वर मेळावा दर वर्षी जानेवारी मध्ये आयोजित केला जातो.",
];

// ======================================================
// SCREEN
// ======================================================

export default function RegistrationScreen() {
  const navigation = useNavigation();

  // ======================================================
  // MANDAL
  // ======================================================

  const [mandals, setMandals] = useState(DEFAULT_MANDALS);
  const [selectedMandal, setSelectedMandal] = useState(
    DEFAULT_MANDALS[0]
  );

  const [mandalModalVisible, setMandalModalVisible] = useState(false);
  const [mandalSearch, setMandalSearch] = useState("");

  // ======================================================
  // CANDIDATE
  // ======================================================

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const [genderCode, setGenderCode] = useState("M");

  // ======================================================
  // MOBILE
  // ======================================================

  const [mobile, setMobile] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");

  const [isMobileOtpSent, setIsMobileOtpSent] = useState(false);
  const [isMobileVerified, setIsMobileVerified] = useState(false);

  const [sendingMobileOtp, setSendingMobileOtp] = useState(false);
  const [verifyingMobileOtp, setVerifyingMobileOtp] = useState(false);

  const [mobileTimer, setMobileTimer] = useState(0);

  // ======================================================
  // EMAIL
  // ======================================================

  const [email, setEmail] = useState("");

  // IMPORTANT:
  // Stores exactly which email was successfully validated.
  const [validatedEmail, setValidatedEmail] = useState("");

  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const [validatingEmail, setValidatingEmail] = useState(false);

  // ======================================================
  // PASSWORD
  // ======================================================

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ======================================================
  // UI
  // ======================================================

  const [showGuidelines, setShowGuidelines] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const mobileTimerRef = useRef(null);

  // ======================================================
  // LOAD MANDALS
  // ======================================================

  useEffect(() => {
    let isMounted = true;

    const loadMandals = async () => {
      try {
        const list = await accountApi.getMandalList();

        if (
          isMounted &&
          Array.isArray(list) &&
          list.length > 0
        ) {
          setMandals(list);
          setSelectedMandal(list[0]);
        }
      } catch (error) {
        console.log(
          "Could not load mandals dynamically:",
          error?.message
        );
      }
    };

    loadMandals();

    return () => {
      isMounted = false;
    };
  }, []);

  // ======================================================
  // MOBILE TIMER
  // ======================================================

  useEffect(() => {
    if (mobileTimer > 0) {
      mobileTimerRef.current = setTimeout(() => {
        setMobileTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      if (mobileTimerRef.current) {
        clearTimeout(mobileTimerRef.current);
      }
    };
  }, [mobileTimer]);

  // ======================================================
  // FORMAT TIME
  // ======================================================

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;

    return `${minutes
      .toString()
      .padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // ======================================================
  // MOBILE CHANGE
  // ======================================================

  const handleMobileChange = (value) => {
    const cleaned = value
      .replace(/[^0-9]/g, "")
      .slice(0, 10);

    setMobile(cleaned);

    // If mobile changes after verification,
    // old verification is no longer valid.
    if (isMobileVerified || isMobileOtpSent) {
      setIsMobileVerified(false);
      setIsMobileOtpSent(false);
      setMobileOtp("");
      setMobileTimer(0);
    }
  };

  // ======================================================
  // EMAIL CHANGE
  // ======================================================

  const handleEmailChange = (value) => {
    // Always store email in lowercase
    const cleanEmail = value.toLowerCase();

    setEmail(cleanEmail);

    // VERY IMPORTANT:
    // If email changes, previous validation becomes invalid.
    setIsEmailValidated(false);
    setValidatedEmail("");
  };

  // ======================================================
  // CHECK MOBILE EXISTS
  // ======================================================

  const checkMobileNumber = async () => {
    if (!mobile || mobile.length !== 10) {
      Alert.alert(
        "Invalid Mobile",
        "Please enter a valid 10-digit mobile number."
      );

      return false;
    }

    try {
      const cleanEmail = email.trim().toLowerCase();
      const cleanMobile = mobile.trim();

      const res = await accountApi.checkMobileExists(
        cleanEmail,
        cleanMobile
      );

      console.log("CHECK MOBILE RESPONSE:", res);

      if (
        res?.Success === true &&
        res?.Data === true
      ) {
        Alert.alert(
          "Mobile Already Registered",
          "This mobile number is already registered. Please use another mobile number."
        );

        return false;
      }

      if (
        res?.Success === true &&
        res?.Data === false
      ) {
        return true;
      }

      // Backward compatibility if API directly returns boolean
      if (res === true) {
        Alert.alert(
          "Mobile Already Registered",
          "This mobile number is already registered. Please use another mobile number."
        );

        return false;
      }

      if (res === false) {
        return true;
      }

      Alert.alert(
        "Unable to Check Mobile",
        res?.Message ||
          "Could not verify mobile number."
      );

      return false;
    } catch (error) {
      console.log(
        "CHECK MOBILE ERROR:",
        error
      );

      Alert.alert(
        "Mobile Check Error",
        error?.response?.data?.Message ||
          error?.message ||
          "Unable to check mobile number."
      );

      return false;
    }
  };

  // ======================================================
  // CHECK EMAIL EXISTS
  // ======================================================

  const checkEmailAddress = async () => {
    const cleanEmail = email.trim().toLowerCase();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      Alert.alert(
        "Invalid Email",
        "Please enter a valid email address."
      );

      return false;
    }

    try {
      const res = await accountApi.checkEmailExists(
        cleanEmail,
        mobile.trim()
      );

      console.log(
        "CHECK EMAIL RESPONSE:",
        res
      );

      // TRUE means duplicate
      if (
        res?.Success === true &&
        res?.Data === true
      ) {
        Alert.alert(
          "Email Already Registered",
          "This Email ID is already registered. Kindly use a unique Email ID. हा ईमेल यापूर्वीच नोंदणीसाठी वापरला आहे. कृपया दुसरा ईमेल वापरा."
        );

        return false;
      }

      // FALSE means available
      if (
        res?.Success === true &&
        res?.Data === false
      ) {
        return true;
      }

      // Backward compatibility
      if (res === true) {
        Alert.alert(
          "Email Already Registered",
          "This Email ID is already registered. Kindly use a unique Email ID."
        );

        return false;
      }

      if (res === false) {
        return true;
      }

      Alert.alert(
        "Unable to Check Email",
        res?.Message ||
          "Could not verify email address."
      );

      return false;
    } catch (error) {
      console.log(
        "CHECK EMAIL ERROR:",
        error
      );

      Alert.alert(
        "Email Check Error",
        error?.response?.data?.Message ||
          error?.message ||
          "Unable to check email address."
      );

      return false;
    }
  };

  // ======================================================
  // VALIDATE EMAIL
  // ======================================================

  const handleValidateEmail = async () => {
    const cleanEmail = email.trim().toLowerCase();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // ------------------------------------------
    // Basic validation
    // ------------------------------------------

    if (!cleanEmail) {
      Alert.alert(
        "Email Required",
        "Please enter your email address."
      );

      return;
    }

    if (!emailRegex.test(cleanEmail)) {
      Alert.alert(
        "Invalid Email",
        "Please enter a valid email address."
      );

      return;
    }

    try {
      setValidatingEmail(true);

      // Make sure UI state contains clean email.
      setEmail(cleanEmail);

      console.log(
        "EMAIL TO VALIDATE:",
        cleanEmail
      );

      // ------------------------------------------
      // STEP 1
      // Check duplicate email
      // ------------------------------------------

      const existsResponse =
        await accountApi.checkEmailExists(
          cleanEmail,
          mobile.trim()
        );

      console.log(
        "EMAIL EXISTS RESPONSE:",
        existsResponse
      );

      // ONLY Data === true means duplicate
      if (
        existsResponse?.Success === true &&
        existsResponse?.Data === true
      ) {
        setIsEmailValidated(false);
        setValidatedEmail("");

        Alert.alert(
          "Email Already Registered",
          "This Email ID is already registered. Kindly use a unique Email ID."
        );

        return;
      }

      // ------------------------------------------
      // STEP 2
      // Validate email API
      // ------------------------------------------

      console.log(
        "================================"
      );

      console.log(
        "VALIDATE EMAIL API"
      );

      console.log(
        "EMAIL:",
        cleanEmail
      );

      const response =
        await accountApi.validateEmail(
          cleanEmail
        );

      console.log(
        "VALIDATE EMAIL RESPONSE:",
        response
      );

      console.log(
        "================================"
      );

      console.log(
        "VALIDATE EMAIL RESULT:",
        response
      );

      // ------------------------------------------
      // IMPORTANT RESPONSE FORMAT
      //
      // {
      //   Data: {
      //     Deliverable: true,
      //     Result: "deliverable"
      //   },
      //   Success: true
      // }
      // ------------------------------------------

      const isDeliverable =
        response?.Success === true &&
        response?.Data?.Deliverable === true &&
        response?.Data?.Result ===
          "deliverable";

      if (isDeliverable) {
        // ------------------------------------------
        // VERY IMPORTANT
        // Save exact validated email.
        // ------------------------------------------

        setEmail(cleanEmail);
        setValidatedEmail(cleanEmail);
        setIsEmailValidated(true);

        Alert.alert(
          "Email Verified ✓",
          response?.Message ||
            "Email address verified successfully."
        );
      } else {
        setIsEmailValidated(false);
        setValidatedEmail("");

        Alert.alert(
          "Email Validation Failed",
          response?.Message ||
            "This email address could not be verified."
        );
      }
    } catch (error) {
      console.log(
        "VALIDATE EMAIL ERROR:",
        error
      );

      setIsEmailValidated(false);
      setValidatedEmail("");

      Alert.alert(
        "Email Validation Error",
        error?.response?.data?.Message ||
          error?.response?.data?.message ||
          error?.message ||
          "Unable to validate email. Please try again."
      );
    } finally {
      setValidatingEmail(false);
    }
  };

  // ======================================================
  // SEND MOBILE OTP
  // ======================================================

  const handleSendMobileOtp = async () => {
    if (!mobile || mobile.length !== 10) {
      Alert.alert(
        "Invalid Mobile",
        "Please enter a valid 10-digit mobile number first."
      );

      return;
    }

    if (!firstName.trim()) {
      Alert.alert(
        "Name Required",
        "Please enter Candidate First Name first."
      );

      return;
    }

    try {
      setSendingMobileOtp(true);

      // ------------------------------------------
      // Duplicate mobile check
      // ------------------------------------------

      const res =
        await accountApi.checkMobileExists(
          email.trim().toLowerCase(),
          mobile.trim()
        );

      console.log(
        "MOBILE EXISTS:",
        res
      );

      if (
        res?.Success === true &&
        res?.Data === true
      ) {
        Alert.alert(
          "Mobile Already Registered",
          "This Mobile Number is already registered. Kindly use a unique Mobile Number. हा मोबाईल क्रमांक यापूर्वीच नोंदणीसाठी वापरला आहे. कृपया दुसरा मोबाईल क्रमांक वापरा."
        );

        return;
      }

      // ------------------------------------------
      // Send OTP
      // ------------------------------------------

      const otpResponse =
        await accountApi.sendMobileOtp(
          mobile.trim(),
          firstName.trim(),
          ""
        );

      console.log(
        "SEND OTP RESPONSE:",
        otpResponse
      );

      if (
        otpResponse?.Success === false
      ) {
        Alert.alert(
          "OTP Failed",
          otpResponse?.Message ||
            "Failed to send Mobile OTP."
        );

        return;
      }

      setIsMobileOtpSent(true);
      setIsMobileVerified(false);
      setMobileTimer(600);

      Alert.alert(
        "OTP Sent",
        "An SMS OTP has been sent to your mobile number. Please check your messages."
      );
    } catch (error) {
      console.log(
        "SEND MOBILE OTP ERROR:",
        error
      );

      Alert.alert(
        "OTP Error",
        error?.response?.data?.Message ||
          error?.message ||
          "Failed to send Mobile OTP."
      );
    } finally {
      setSendingMobileOtp(false);
    }
  };

  // ======================================================
  // VERIFY MOBILE OTP
  // ======================================================

  const handleVerifyMobileOtp = async () => {
    if (!mobileOtp.trim()) {
      Alert.alert(
        "OTP Required",
        "Please enter the OTP received on your mobile number."
      );

      return;
    }

    try {
      setVerifyingMobileOtp(true);

      const res =
        await accountApi.verifyMobileOtp(
          mobile.trim(),
          mobileOtp.trim(),
          0
        );

      console.log(
        "VERIFY MOBILE OTP RESPONSE:",
        res
      );

      if (
        res?.Success === true ||
        res === true
      ) {
        setIsMobileVerified(true);
        setIsMobileOtpSent(false);
        setMobileTimer(0);

        Alert.alert(
          "Mobile Verified ✓",
          "Mobile number verified successfully!"
        );
      } else {
        Alert.alert(
          "Verification Failed",
          res?.Message ||
            "Invalid OTP. Please enter the correct OTP."
        );
      }
    } catch (error) {
      console.log(
        "VERIFY MOBILE OTP ERROR:",
        error
      );

      Alert.alert(
        "Verification Failed",
        error?.response?.data?.Message ||
          error?.message ||
          "Invalid OTP. Please check and try again."
      );
    } finally {
      setVerifyingMobileOtp(false);
    }
  };

  // ======================================================
  // REGISTER
  // ======================================================

  const handleRegister = async () => {
    // ------------------------------------------
    // MANDAL
    // ------------------------------------------

    if (!selectedMandal?.value) {
      Alert.alert(
        "Validation",
        "Please select your Mandal."
      );

      return;
    }

    // ------------------------------------------
    // FIRST NAME
    // ------------------------------------------

    if (!firstName.trim()) {
      Alert.alert(
        "Validation",
        "Please enter First Name."
      );

      return;
    }

    // ------------------------------------------
    // LAST NAME
    // ------------------------------------------

    if (!lastName.trim()) {
      Alert.alert(
        "Validation",
        "Please enter Last Name / Surname."
      );

      return;
    }

    // ------------------------------------------
    // MOBILE
    // ------------------------------------------

    if (!mobile || mobile.length !== 10) {
      Alert.alert(
        "Validation",
        "Please enter a valid 10-digit mobile number."
      );

      return;
    }

    // ------------------------------------------
    // MOBILE OTP
    // ------------------------------------------

    if (!isMobileVerified) {
      Alert.alert(
        "Mobile Verification Required",
        "Please verify your mobile number with OTP before submitting registration."
      );

      return;
    }

    // ------------------------------------------
    // EMAIL
    // ------------------------------------------

    const cleanEmail =
      email.trim().toLowerCase();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !cleanEmail ||
      !emailRegex.test(cleanEmail)
    ) {
      Alert.alert(
        "Validation",
        "Please enter a valid email address."
      );

      return;
    }

    // ==================================================
    // IMPORTANT EMAIL VALIDATION CHECK
    // ==================================================

    if (
      !isEmailValidated ||
      validatedEmail !== cleanEmail
    ) {
      Alert.alert(
        "Email Validation Required",
        "Please validate the current email address before registration."
      );

      return;
    }

    // ------------------------------------------
    // PASSWORD
    // ------------------------------------------

    const strongPasswordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-=[\]{}|;:'",.<>/~`])[A-Za-z\d@$!%*?&#^()_+\-=[\]{}|;:'",.<>/~`]{8,}$/;

    if (
      !strongPasswordRegex.test(password)
    ) {
      Alert.alert(
        "Password Requirement",
        "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 number, and 1 special character."
      );

      return;
    }

    // ------------------------------------------
    // CONFIRM PASSWORD
    // ------------------------------------------

    if (password !== confirmPassword) {
      Alert.alert(
        "Password Mismatch",
        "Password and Confirm Password do not match."
      );

      return;
    }

    try {
      setSubmitting(true);

      console.log(
        "================================"
      );

      console.log(
        "REGISTERING EMAIL:",
        cleanEmail
      );

      console.log(
        "VALIDATED EMAIL:",
        validatedEmail
      );

      console.log(
        "================================"
      );

      // ==================================================
      // FINAL DUPLICATE EMAIL CHECK
      // ==================================================

      const emailExists =
        await accountApi.checkEmailExists(
          cleanEmail,
          mobile.trim()
        );

      console.log(
        "FINAL EMAIL EXISTS RESPONSE:",
        emailExists
      );

      // ONLY TRUE means duplicate
      if (
        emailExists?.Success === true &&
        emailExists?.Data === true
      ) {
        Alert.alert(
          "Email Already Registered",
          "This Email ID is already registered. Kindly use a unique Email ID."
        );

        return;
      }

      // ==================================================
      // FINAL DUPLICATE MOBILE CHECK
      // ==================================================

      const mobileExists =
        await accountApi.checkMobileExists(
          cleanEmail,
          mobile.trim()
        );

      console.log(
        "FINAL MOBILE EXISTS RESPONSE:",
        mobileExists
      );

      if (
        mobileExists?.Success === true &&
        mobileExists?.Data === true
      ) {
        Alert.alert(
          "Mobile Already Registered",
          "This Mobile Number is already registered. Kindly use a unique Mobile Number."
        );

        return;
      }

      // ==================================================
      // REGISTER PAYLOAD
      // ==================================================

      const payload = {
        MandalId:
          Number(selectedMandal.value) || 1,

        FirstName:
          firstName.trim().toUpperCase(),

        MiddleName:
          middleName.trim().toUpperCase(),

        LastName:
          lastName.trim().toUpperCase(),

        GenderCode:
          genderCode,

        Mobile:
          mobile.trim(),

        Email:
          cleanEmail,

        Password:
          password,
      };

      console.log(
        "================================"
      );

      console.log(
        "REGISTER USER PAYLOAD:"
      );

      console.log(
        payload
      );

      console.log(
        "================================"
      );

      // ==================================================
      // REGISTER API
      // ==================================================

      const res =
        await accountApi.registerUser(
          payload
        );

      console.log(
        "REGISTER USER RESPONSE:",
        res
      );

      if (
        res?.Success === true ||
        res?.success === true
      ) {
        setSuccessMessage(
          res?.Message ||
            "Your candidate account has been registered successfully! You can now log in using your registered credentials."
        );

        setSuccessModalVisible(true);
      } else {
        Alert.alert(
          "Registration Failed",
          res?.Message ||
            res?.message ||
            "Unable to register candidate."
        );
      }
    } catch (error) {
      console.log(
        "REGISTRATION ERROR:",
        error
      );

      console.log(
        "REGISTRATION ERROR RESPONSE:",
        error?.response?.data
      );

      Alert.alert(
        "Registration Error",
        error?.response?.data?.Message ||
          error?.response?.data?.message ||
          error?.message ||
          "An error occurred while creating your account. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // ======================================================
  // FILTER MANDALS
  // ======================================================

  const filteredMandals =
    mandals.filter((m) =>
      (m.label || "")
        .toLowerCase()
        .includes(
          mandalSearch.toLowerCase()
        )
    );

  // ======================================================
  // UI
  // ======================================================

  return (
    <KeyboardAvoidingView
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
      style={{
        flex: 1,
        backgroundColor: "#f8fafc",
      }}
    >
      <ScrollView
        contentContainerStyle={
          styles.scrollContent
        }
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* ==================================================
            HEADER
        ================================================== */}

        <LinearGradient
          colors={[
            "#c2410c",
            "#ea580c",
            "#f97316",
          ]}
          style={styles.headerContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View
            style={styles.headerIconWrap}
          >
            <MaterialCommunityIcons
              name="ring"
              size={32}
              color="#ffffff"
            />
          </View>

          <Text
            style={styles.headerMarathiTitle}
          >
            समता भ्रातृ मंडळ (पिंपरी - चिंचवड) व
          </Text>

          <Text
            style={styles.headerMarathiSub}
          >
            लेवा पाटीदार मित्र मंडळ (सांगवी) आयोजित
          </Text>

          <Text
            style={styles.headerMarathiEvent}
          >
            वधु-वर मेळावा नाव नोंदणी
          </Text>

          <View
            style={styles.headerBadge}
          >
            <Text
              style={styles.headerBadgeText}
            >
              Welcome to Matrimonial Portal
            </Text>
          </View>
        </LinearGradient>

        {/* ==================================================
            GUIDELINES
        ================================================== */}

        <View
          style={styles.guidelinesCard}
        >
          <TouchableOpacity
            style={
              styles.guidelinesToggle
            }
            onPress={() =>
              setShowGuidelines(
                !showGuidelines
              )
            }
            activeOpacity={0.8}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                flex: 1,
              }}
            >
              <Ionicons
                name="information-circle"
                size={20}
                color="#ea580c"
              />

              <Text
                style={
                  styles.guidelinesToggleText
                }
              >
                नोंदणी संदर्भातील महत्त्वाची माहिती (Rules & Info)
              </Text>
            </View>

            <Ionicons
              name={
                showGuidelines
                  ? "chevron-up"
                  : "chevron-down"
              }
              size={20}
              color="#ea580c"
            />
          </TouchableOpacity>

          {showGuidelines && (
            <View
              style={styles.guidelinesList}
            >
              {GUIDELINES.map(
                (item, index) => (
                  <View
                    key={index}
                    style={
                      styles.guidelineItem
                    }
                  >
                    <Ionicons
                      name="checkmark-circle"
                      size={16}
                      color="#ea580c"
                      style={{
                        marginTop: 2,
                      }}
                    />

                    <Text
                      style={
                        styles.guidelineText
                      }
                    >
                      {item}
                    </Text>
                  </View>
                )
              )}
            </View>
          )}
        </View>

        {/* ==================================================
            FORM
        ================================================== */}

        <View
          style={styles.formCard}
        >
          {/* FORM HEADER */}

          <View
            style={styles.formCardHeader}
          >
            <Ionicons
              name="person-add"
              size={22}
              color="#ea580c"
            />

            <View
              style={{
                flex: 1,
                marginLeft: 10,
              }}
            >
              <Text
                style={styles.formTitle}
              >
                New Registration
              </Text>

              <Text
                style={styles.formSubtitle}
              >
                Create your login credentials, then proceed to log in.
              </Text>
            </View>
          </View>

          {/* PASSWORD TIP */}

          <View style={styles.tipBox}>
            <Text
              style={styles.tipBold}
            >
              Note:{" "}
            </Text>

            <Text
              style={styles.tipText}
            >
              Password should have 1 capital alphabet, 1 number, and 1 special character.
            </Text>
          </View>

          {/* ==================================================
              SECTION 1 - MANDAL
          ================================================== */}

          <View
            style={styles.sectionHeader}
          >
            <MaterialCommunityIcons
              name="office-building"
              size={18}
              color="#d97706"
            />

            <Text
              style={styles.sectionTitle}
            >
              Mandal{" "}
              <Text
                style={
                  styles.sectionTitleMarathi
                }
              >
                (मंडळ सिलेक्ट करा)
              </Text>

              <Text
                style={styles.req}
              >
                {" "}
                *
              </Text>
            </Text>
          </View>

          <Text
            style={styles.fieldNote}
          >
            आपल्याला कुठल्या मंडळाकडून वधू वर नोंदणीची माहिती भेटली ते मंडळ सिलेक्ट करा
          </Text>

          <TouchableOpacity
            style={
              styles.dropdownButton
            }
            onPress={() =>
              setMandalModalVisible(
                true
              )
            }
            activeOpacity={0.8}
          >
            <Text
              style={
                styles.dropdownValueText
              }
              numberOfLines={1}
            >
              {selectedMandal?.label ||
                "Select your Mandal"}
            </Text>

            <Ionicons
              name="chevron-down"
              size={18}
              color="#64748b"
            />
          </TouchableOpacity>

          {/* ==================================================
              SECTION 2 - NAME
          ================================================== */}

          <View
            style={[
              styles.sectionHeader,
              { marginTop: 22 },
            ]}
          >
            <Ionicons
              name="person"
              size={18}
              color="#7c3aed"
            />

            <Text
              style={styles.sectionTitle}
            >
              Candidate Name & Gender
            </Text>
          </View>

          {/* FIRST NAME */}

          <View
            style={styles.inputGroup}
          >
            <Text
              style={styles.label}
            >
              First Name{" "}
              <Text style={styles.req}>
                *
              </Text>
            </Text>

            <TextInput
              style={styles.textInput}
              value={firstName}
              onChangeText={(text) =>
                setFirstName(
                  text.replace(
                    /[^a-zA-Z\s]/g,
                    ""
                  )
                )
              }
              placeholder="Enter First Name"
              placeholderTextColor="#94a3b8"
              autoCapitalize="characters"
              maxLength={50}
            />
          </View>

          {/* MIDDLE NAME */}

          <View
            style={styles.inputGroup}
          >
            <Text
              style={styles.label}
            >
              Middle Name
            </Text>

            <TextInput
              style={styles.textInput}
              value={middleName}
              onChangeText={(text) =>
                setMiddleName(
                  text.replace(
                    /[^a-zA-Z\s]/g,
                    ""
                  )
                )
              }
              placeholder="Enter Middle Name"
              placeholderTextColor="#94a3b8"
              autoCapitalize="characters"
              maxLength={50}
            />
          </View>

          {/* LAST NAME */}

          <View
            style={styles.inputGroup}
          >
            <Text
              style={styles.label}
            >
              Last Name / Surname{" "}
              <Text style={styles.req}>
                *
              </Text>
            </Text>

            <TextInput
              style={styles.textInput}
              value={lastName}
              onChangeText={(text) =>
                setLastName(
                  text.replace(
                    /[^a-zA-Z\s]/g,
                    ""
                  )
                )
              }
              placeholder="Enter Last Name"
              placeholderTextColor="#94a3b8"
              autoCapitalize="characters"
              maxLength={50}
            />
          </View>

          {/* GENDER */}

          <View
            style={styles.inputGroup}
          >
            <Text
              style={styles.label}
            >
              Gender{" "}
              <Text style={styles.req}>
                *
              </Text>
            </Text>

            <View
              style={styles.genderRow}
            >
              <TouchableOpacity
                style={[
                  styles.genderOption,
                  genderCode === "M" &&
                    styles.genderOptionActive,
                ]}
                onPress={() =>
                  setGenderCode("M")
                }
                activeOpacity={0.8}
              >
                <Ionicons
                  name="male"
                  size={18}
                  color={
                    genderCode === "M"
                      ? "#ffffff"
                      : "#475569"
                  }
                />

                <Text
                  style={[
                    styles.genderText,
                    genderCode === "M" &&
                      styles.genderTextActive,
                  ]}
                >
                  Male (वर)
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.genderOption,
                  genderCode === "F" &&
                    styles.genderOptionActive,
                ]}
                onPress={() =>
                  setGenderCode("F")
                }
                activeOpacity={0.8}
              >
                <Ionicons
                  name="female"
                  size={18}
                  color={
                    genderCode === "F"
                      ? "#ffffff"
                      : "#475569"
                  }
                />

                <Text
                  style={[
                    styles.genderText,
                    genderCode === "F" &&
                      styles.genderTextActive,
                  ]}
                >
                  Female (वधू)
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* ==================================================
              SECTION 3 - CONTACT
          ================================================== */}

          <View
            style={[
              styles.sectionHeader,
              { marginTop: 22 },
            ]}
          >
            <Ionicons
              name="call"
              size={18}
              color="#059669"
            />

            <Text
              style={styles.sectionTitle}
            >
              Contact & Credentials
            </Text>
          </View>

          {/* ==================================================
              MOBILE
          ================================================== */}

          <View
            style={styles.inputGroup}
          >
            <Text
              style={styles.label}
            >
              Mobile Number (मोबाईल क्रमांक){" "}
              <Text style={styles.req}>
                *
              </Text>
            </Text>

            <View
              style={
                styles.inputWithActionRow
              }
            >
              <View
                style={[
                  styles.inputPrefixWrap,
                  { flex: 1 },
                ]}
              >
                <Ionicons
                  name="call-outline"
                  size={18}
                  color="#64748b"
                  style={
                    styles.inputIcon
                  }
                />

                <TextInput
                  style={
                    styles.textInputWithIcon
                  }
                  value={mobile}
                  onChangeText={
                    handleMobileChange
                  }
                  placeholder="10-digit mobile number"
                  placeholderTextColor="#94a3b8"
                  keyboardType="number-pad"
                  maxLength={10}
                />
              </View>

              {/* MOBILE STATUS / OTP BUTTON */}

              {isMobileVerified ? (
                <View
                  style={
                    styles.verifiedBadge
                  }
                >
                  <Ionicons
                    name="checkmark-circle"
                    size={16}
                    color="#15803d"
                  />

                  <Text
                    style={
                      styles.verifiedBadgeText
                    }
                  >
                    Verified
                  </Text>
                </View>
              ) : (
                <TouchableOpacity
                  style={[
                    styles.actionBtn,
                    (mobile.length !== 10 ||
                      sendingMobileOtp ||
                      mobileTimer > 0) &&
                      styles.actionBtnDisabled,
                  ]}
                  onPress={
                    handleSendMobileOtp
                  }
                  disabled={
                    mobile.length !== 10 ||
                    sendingMobileOtp ||
                    mobileTimer > 0
                  }
                  activeOpacity={0.8}
                >
                  {sendingMobileOtp ? (
                    <ActivityIndicator
                      size="small"
                      color="#ffffff"
                    />
                  ) : mobileTimer > 0 ? (
                    <Text
                      style={
                        styles.actionBtnText
                      }
                    >
                      {formatTime(
                        mobileTimer
                      )}
                    </Text>
                  ) : (
                    <Text
                      style={
                        styles.actionBtnText
                      }
                    >
                      {isMobileOtpSent
                        ? "Resend OTP"
                        : "Send OTP"}
                    </Text>
                  )}
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* MOBILE OTP */}

          {isMobileOtpSent &&
            !isMobileVerified && (
              <View
                style={styles.otpBox}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                    marginBottom: 8,
                  }}
                >
                  <Ionicons
                    name="key-outline"
                    size={18}
                    color="#b45309"
                  />

                  <Text
                    style={
                      styles.otpBoxTitle
                    }
                  >
                    Enter 4 or 6-digit OTP sent to{" "}
                    {mobile}{" "}
                    <Text
                      style={styles.req}
                    >
                      *
                    </Text>
                  </Text>
                </View>

                <View
                  style={
                    styles.otpInputRow
                  }
                >
                  <TextInput
                    style={
                      styles.otpTextInput
                    }
                    value={mobileOtp}
                    onChangeText={
                      setMobileOtp
                    }
                    placeholder="Enter Mobile OTP"
                    placeholderTextColor="#94a3b8"
                    keyboardType="number-pad"
                    maxLength={6}
                  />

                  <TouchableOpacity
                    style={[
                      styles.verifyOtpBtn,
                      (!mobileOtp.trim() ||
                        verifyingMobileOtp) &&
                        styles.actionBtnDisabled,
                    ]}
                    onPress={
                      handleVerifyMobileOtp
                    }
                    disabled={
                      !mobileOtp.trim() ||
                      verifyingMobileOtp
                    }
                    activeOpacity={0.8}
                  >
                    {verifyingMobileOtp ? (
                      <ActivityIndicator
                        size="small"
                        color="#ffffff"
                      />
                    ) : (
                      <Text
                        style={
                          styles.verifyOtpBtnText
                        }
                      >
                        Verify OTP
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>

                {mobileTimer > 0 ? (
                  <Text
                    style={
                      styles.timerHint
                    }
                  >
                    OTP expires in{" "}
                    <Text
                      style={{
                        fontWeight: "700",
                      }}
                    >
                      {formatTime(
                        mobileTimer
                      )}
                    </Text>
                  </Text>
                ) : (
                  <Text
                    style={
                      styles.timerExpired
                    }
                  >
                    OTP expired. Please tap 'Resend OTP'.
                  </Text>
                )}
              </View>
            )}

          {/* ==================================================
              EMAIL
          ================================================== */}

          <View
            style={[
              styles.inputGroup,
              { marginTop: 12 },
            ]}
          >
            <Text
              style={styles.label}
            >
              Email Address (ईमेल आयडी){" "}
              <Text style={styles.req}>
                *
              </Text>
            </Text>

            <View
              style={
                styles.inputWithActionRow
              }
            >
              <View
                style={[
                  styles.inputPrefixWrap,
                  { flex: 1 },
                ]}
              >
                <Ionicons
                  name="mail-outline"
                  size={18}
                  color="#64748b"
                  style={
                    styles.inputIcon
                  }
                />

                <TextInput
                  style={
                    styles.textInputWithIcon
                  }
                  value={email}
                  onChangeText={
                    handleEmailChange
                  }
                  placeholder="Enter Email ID"
                  placeholderTextColor="#94a3b8"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              {/* EMAIL VALIDATION BUTTON */}

              {isEmailValidated &&
              validatedEmail ===
                email.trim().toLowerCase() ? (
                <View
                  style={
                    styles.verifiedBadge
                  }
                >
                  <Ionicons
                    name="checkmark-circle"
                    size={16}
                    color="#15803d"
                  />

                  <Text
                    style={
                      styles.verifiedBadgeText
                    }
                  >
                    Valid
                  </Text>
                </View>
              ) : (
                <TouchableOpacity
                  style={[
                    styles.actionBtnSecondary,
                    (!email.includes("@") ||
                      validatingEmail) &&
                      styles.actionBtnDisabled,
                  ]}
                  onPress={
                    handleValidateEmail
                  }
                  disabled={
                    !email.includes("@") ||
                    validatingEmail
                  }
                  activeOpacity={0.8}
                >
                  {validatingEmail ? (
                    <ActivityIndicator
                      size="small"
                      color="#ffffff"
                    />
                  ) : (
                    <Text
                      style={
                        styles.actionBtnText
                      }
                    >
                      Validate
                    </Text>
                  )}
                </TouchableOpacity>
              )}
            </View>

            {/* VALIDATION MESSAGE */}

            {isEmailValidated &&
              validatedEmail ===
                email.trim().toLowerCase() && (
                <Text
                  style={
                    styles.emailValidText
                  }
                >
                  ✓ Email address verified and deliverable
                </Text>
              )}
          </View>

          {/* ==================================================
              PASSWORD
          ================================================== */}

          <View
            style={[
              styles.inputGroup,
              { marginTop: 12 },
            ]}
          >
            <Text
              style={styles.label}
            >
              Password{" "}
              <Text style={styles.req}>
                *
              </Text>
            </Text>

            <View
              style={
                styles.passwordInputWrap
              }
            >
              <Ionicons
                name="lock-closed-outline"
                size={18}
                color="#64748b"
                style={
                  styles.inputIcon
                }
              />

              <TextInput
                style={
                  styles.textInputWithIcon
                }
                value={password}
                onChangeText={
                  setPassword
                }
                placeholder="Create a strong password"
                placeholderTextColor="#94a3b8"
                secureTextEntry={
                  !showPassword
                }
                autoCapitalize="none"
              />

              <TouchableOpacity
                onPress={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                style={styles.eyeBtn}
              >
                <Ionicons
                  name={
                    showPassword
                      ? "eye-off-outline"
                      : "eye-outline"
                  }
                  size={20}
                  color="#64748b"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* CONFIRM PASSWORD */}

          <View
            style={styles.inputGroup}
          >
            <Text
              style={styles.label}
            >
              Confirm Password{" "}
              <Text style={styles.req}>
                *
              </Text>
            </Text>

            <View
              style={
                styles.passwordInputWrap
              }
            >
              <Ionicons
                name="lock-closed-outline"
                size={18}
                color="#64748b"
                style={
                  styles.inputIcon
                }
              />

              <TextInput
                style={
                  styles.textInputWithIcon
                }
                value={
                  confirmPassword
                }
                onChangeText={
                  setConfirmPassword
                }
                placeholder="Re-enter password"
                placeholderTextColor="#94a3b8"
                secureTextEntry={
                  !showConfirmPassword
                }
                autoCapitalize="none"
              />

              <TouchableOpacity
                onPress={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                style={styles.eyeBtn}
              >
                <Ionicons
                  name={
                    showConfirmPassword
                      ? "eye-off-outline"
                      : "eye-outline"
                  }
                  size={20}
                  color="#64748b"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* ==================================================
              REGISTER BUTTON
          ================================================== */}

          <TouchableOpacity
            style={[
              styles.registerSubmitBtn,
              submitting &&
                styles.actionBtnDisabled,
            ]}
            onPress={handleRegister}
            disabled={submitting}
            activeOpacity={0.85}
          >
            {submitting ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <ActivityIndicator
                  size="small"
                  color="#ffffff"
                />

                <Text
                  style={
                    styles.registerSubmitBtnText
                  }
                >
                  Registering Candidate...
                </Text>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Ionicons
                  name="checkmark-circle"
                  size={20}
                  color="#ffffff"
                />

                <Text
                  style={
                    styles.registerSubmitBtnText
                  }
                >
                  Register Now
                </Text>
              </View>
            )}
          </TouchableOpacity>

          {/* LOGIN */}

          <View
            style={styles.existingUserWrap}
          >
            <Text
              style={
                styles.existingUserText
              }
            >
              Existing user? If you registered earlier,{" "}
            </Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  "Login"
                )
              }
            >
              <Text
                style={
                  styles.loginLinkText
                }
              >
                please login here.
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ==================================================
            MANDAL MODAL
        ================================================== */}

        <Modal
          visible={
            mandalModalVisible
          }
          animationType="slide"
          transparent={true}
          onRequestClose={() =>
            setMandalModalVisible(false)
          }
        >
          <View
            style={
              styles.modalOverlay
            }
          >
            <View
              style={
                styles.modalContent
              }
            >
              <View
                style={
                  styles.modalHeader
                }
              >
                <Text
                  style={
                    styles.modalTitle
                  }
                >
                  Select Mandal (मंडळ निवडा)
                </Text>

                <TouchableOpacity
                  onPress={() =>
                    setMandalModalVisible(
                      false
                    )
                  }
                  style={
                    styles.modalCloseBtn
                  }
                >
                  <Ionicons
                    name="close"
                    size={22}
                    color="#334155"
                  />
                </TouchableOpacity>
              </View>

              {/* SEARCH */}

              <View
                style={
                  styles.searchBoxWrap
                }
              >
                <Ionicons
                  name="search"
                  size={18}
                  color="#64748b"
                  style={{
                    marginRight: 8,
                  }}
                />

                <TextInput
                  style={
                    styles.searchTextInput
                  }
                  value={
                    mandalSearch
                  }
                  onChangeText={
                    setMandalSearch
                  }
                  placeholder="Search Mandal..."
                  placeholderTextColor="#94a3b8"
                />

                {mandalSearch.length >
                  0 && (
                  <TouchableOpacity
                    onPress={() =>
                      setMandalSearch(
                        ""
                      )
                    }
                  >
                    <Ionicons
                      name="close-circle"
                      size={18}
                      color="#94a3b8"
                    />
                  </TouchableOpacity>
                )}
              </View>

              {/* MANDAL LIST */}

              <ScrollView
                style={{
                  maxHeight: 360,
                }}
                showsVerticalScrollIndicator={
                  false
                }
              >
                {filteredMandals.map(
                  (mandal) => {
                    const isSelected =
                      selectedMandal?.value ===
                      mandal.value;

                    return (
                      <TouchableOpacity
                        key={String(
                          mandal.value
                        )}
                        style={[
                          styles.mandalListItem,
                          isSelected &&
                            styles.mandalListItemActive,
                        ]}
                        onPress={() => {
                          setSelectedMandal(
                            mandal
                          );

                          setMandalModalVisible(
                            false
                          );
                        }}
                        activeOpacity={0.7}
                      >
                        <View
                          style={{
                            flex: 1,
                          }}
                        >
                          <Text
                            style={[
                              styles.mandalListItemText,
                              isSelected &&
                                styles.mandalListItemTextActive,
                            ]}
                          >
                            {
                              mandal.label
                            }
                          </Text>
                        </View>

                        {isSelected && (
                          <Ionicons
                            name="checkmark-circle"
                            size={20}
                            color="#ea580c"
                          />
                        )}
                      </TouchableOpacity>
                    );
                  }
                )}
              </ScrollView>
            </View>
          </View>
        </Modal>

        {/* ==================================================
            SUCCESS MODAL
        ================================================== */}

        <Modal
          visible={
            successModalVisible
          }
          animationType="fade"
          transparent={true}
          onRequestClose={() => {
            setSuccessModalVisible(
              false
            );

            navigation.navigate(
              "Login"
            );
          }}
        >
          <View
            style={
              styles.modalOverlay
            }
          >
            <View
              style={
                styles.successCard
              }
            >
              <View
                style={
                  styles.successIconRing
                }
              >
                <Ionicons
                  name="checkmark"
                  size={36}
                  color="#ffffff"
                />
              </View>

              <Text
                style={
                  styles.successTitle
                }
              >
                Registration Successful!
              </Text>

              <Text
                style={
                  styles.successMessage
                }
              >
                {successMessage}
              </Text>

              <TouchableOpacity
                style={
                  styles.successProceedBtn
                }
                onPress={() => {
                  setSuccessModalVisible(
                    false
                  );

                  navigation.navigate(
                    "Login"
                  );
                }}
                activeOpacity={0.85}
              >
                <Text
                  style={
                    styles.successProceedBtnText
                  }
                >
                  Proceed to Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// ======================================================
// STYLES
// ======================================================

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
  },

  // ====================================================
  // HEADER
  // ====================================================

  headerContainer: {
    paddingTop: 36,
    paddingBottom: 28,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    elevation: 8,
    shadowColor: "#ea580c",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  headerIconWrap: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor:
      "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  headerMarathiTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "center",
    lineHeight: 22,
  },

  headerMarathiSub: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff7ed",
    textAlign: "center",
    marginTop: 2,
  },

  headerMarathiEvent: {
    fontSize: 18,
    fontWeight: "800",
    color: "#ffffff",
    textAlign: "center",
    marginTop: 4,
    letterSpacing: 0.3,
  },

  headerBadge: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 12,
  },

  headerBadgeText: {
    color: "#c2410c",
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: 0.3,
  },

  // ====================================================
  // GUIDELINES
  // ====================================================

  guidelinesCard: {
    marginHorizontal: 16,
    marginTop: -10,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 14,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  guidelinesToggle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  guidelinesToggleText: {
    fontSize: 13.5,
    fontWeight: "700",
    color: "#c2410c",
  },

  guidelinesList: {
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#fed7aa",
    gap: 8,
  },

  guidelineItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },

  guidelineText: {
    fontSize: 12.5,
    color: "#334155",
    flex: 1,
    lineHeight: 18,
  },

  // ====================================================
  // FORM
  // ====================================================

  formCard: {
    marginHorizontal: 16,
    marginTop: 18,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  formCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  formTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0f172a",
  },

  formSubtitle: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },

  tipBox: {
    flexDirection: "row",
    backgroundColor: "#fff7ed",
    borderWidth: 1,
    borderColor: "#fed7aa",
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },

  tipBold: {
    color: "#ea580c",
    fontWeight: "700",
    fontSize: 12,
  },

  tipText: {
    color: "#1e3a8a",
    fontSize: 12,
    flex: 1,
    lineHeight: 16,
  },

  // ====================================================
  // SECTION
  // ====================================================

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
  },

  sectionTitle: {
    fontSize: 14.5,
    fontWeight: "700",
    color: "#0f172a",
  },

  sectionTitleMarathi: {
    fontSize: 13,
    fontWeight: "600",
    color: "#475569",
  },

  fieldNote: {
    fontSize: 11.5,
    color: "#64748b",
    marginBottom: 8,
    lineHeight: 16,
  },

  req: {
    color: "#dc2626",
    fontWeight: "700",
  },

  // ====================================================
  // DROPDOWN
  // ====================================================

  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f8fafc",
    borderWidth: 1.5,
    borderColor: "#cbd5e1",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },

  dropdownValueText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0f172a",
    flex: 1,
  },

  // ====================================================
  // INPUT
  // ====================================================

  inputGroup: {
    marginTop: 12,
  },

  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
    marginBottom: 6,
  },

  textInput: {
    backgroundColor: "#f8fafc",
    borderWidth: 1.2,
    borderColor: "#cbd5e1",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 14,
    color: "#0f172a",
  },

  // ====================================================
  // GENDER
  // ====================================================

  genderRow: {
    flexDirection: "row",
    gap: 12,
  },

  genderOption: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#f1f5f9",
    borderWidth: 1.2,
    borderColor: "#cbd5e1",
    borderRadius: 12,
    paddingVertical: 12,
  },

  genderOptionActive: {
    backgroundColor: "#ea580c",
    borderColor: "#ea580c",
  },

  genderText: {
    fontSize: 13.5,
    fontWeight: "600",
    color: "#475569",
  },

  genderTextActive: {
    color: "#ffffff",
  },

  // ====================================================
  // ACTION ROW
  // ====================================================

  inputWithActionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  inputPrefixWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    borderWidth: 1.2,
    borderColor: "#cbd5e1",
    borderRadius: 12,
    paddingHorizontal: 12,
  },

  inputIcon: {
    marginRight: 8,
  },

  textInputWithIcon: {
    flex: 1,
    paddingVertical: 11,
    fontSize: 14,
    color: "#0f172a",
  },

  // ====================================================
  // PASSWORD
  // ====================================================

  passwordInputWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    borderWidth: 1.2,
    borderColor: "#cbd5e1",
    borderRadius: 12,
    paddingHorizontal: 12,
  },

  eyeBtn: {
    padding: 6,
  },

  // ====================================================
  // BUTTONS
  // ====================================================

  actionBtn: {
    backgroundColor: "#ea580c",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    minWidth: 95,
    alignItems: "center",
    justifyContent: "center",
  },

  actionBtnSecondary: {
    backgroundColor: "#0284c7",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 12,
    minWidth: 95,
    alignItems: "center",
    justifyContent: "center",
  },

  actionBtnDisabled: {
    opacity: 0.5,
  },

  actionBtnText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 12.5,
  },

  // ====================================================
  // VERIFIED
  // ====================================================

  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dcfce7",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 12,
    gap: 4,
    borderWidth: 1,
    borderColor: "#86efac",
  },

  verifiedBadgeText: {
    color: "#15803d",
    fontSize: 12,
    fontWeight: "700",
  },

  emailValidText: {
    color: "#15803d",
    fontSize: 11.5,
    fontWeight: "600",
    marginTop: 6,
  },

  // ====================================================
  // OTP
  // ====================================================

  otpBox: {
    backgroundColor: "#fffbeb",
    borderWidth: 1.5,
    borderColor: "#fde68a",
    borderRadius: 14,
    padding: 14,
    marginTop: 10,
  },

  otpBoxTitle: {
    fontSize: 12.5,
    fontWeight: "700",
    color: "#92400e",
    flex: 1,
  },

  otpInputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  otpTextInput: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderWidth: 1.2,
    borderColor: "#f59e0b",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 9,
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 2,
    color: "#0f172a",
  },

  verifyOtpBtn: {
    backgroundColor: "#d97706",
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  verifyOtpBtnText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 13,
  },

  timerHint: {
    fontSize: 11.5,
    color: "#92400e",
    marginTop: 6,
  },

  timerExpired: {
    fontSize: 11.5,
    color: "#dc2626",
    fontWeight: "700",
    marginTop: 6,
  },

  // ====================================================
  // REGISTER
  // ====================================================

  registerSubmitBtn: {
    backgroundColor: "#ea580c",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    elevation: 4,
    shadowColor: "#ea580c",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  registerSubmitBtnText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  // ====================================================
  // LOGIN
  // ====================================================

  existingUserWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
    flexWrap: "wrap",
  },

  existingUserText: {
    fontSize: 12.5,
    color: "#475569",
  },

  loginLinkText: {
    fontSize: 12.5,
    fontWeight: "700",
    color: "#ea580c",
  },

  // ====================================================
  // MODAL
  // ====================================================

  modalOverlay: {
    flex: 1,
    backgroundColor:
      "rgba(15, 23, 42, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modalContent: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 18,
    maxHeight: "85%",
  },

  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  modalTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
  },

  modalCloseBtn: {
    padding: 4,
  },

  // ====================================================
  // SEARCH
  // ====================================================

  searchBoxWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
  },

  searchTextInput: {
    flex: 1,
    fontSize: 13.5,
    color: "#0f172a",
    paddingVertical: 0,
  },

  // ====================================================
  // MANDAL LIST
  // ====================================================

  mandalListItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
    borderRadius: 8,
  },

  mandalListItemActive: {
    backgroundColor: "#fff7ed",
  },

  mandalListItemText: {
    fontSize: 13.5,
    color: "#334155",
    fontWeight: "500",
  },

  mandalListItemTextActive: {
    color: "#ea580c",
    fontWeight: "700",
  },

  // ====================================================
  // SUCCESS
  // ====================================================

  successCard: {
    width: SW * 0.85,
    backgroundColor: "#ffffff",
    borderRadius: 22,
    padding: 24,
    alignItems: "center",
    elevation: 10,
  },

  successIconRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#16a34a",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  successTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#15803d",
    marginBottom: 8,
    textAlign: "center",
  },

  successMessage: {
    fontSize: 13.5,
    color: "#475569",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 20,
  },

  successProceedBtn: {
    backgroundColor: "#16a34a",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },

  successProceedBtnText: {
    color: "#ffffff",
    fontSize: 14.5,
    fontWeight: "700",
  },
});