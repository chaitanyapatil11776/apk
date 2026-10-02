// // import React, { useState, useEffect, useCallback } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   ScrollView,
// //   TouchableOpacity,
// //   BackHandler,
// //   Alert,
// //   ActivityIndicator,
// //   RefreshControl,
// //   Image,
// // } from "react-native";
// // import { useFocusEffect } from "@react-navigation/native";
// // import { SafeAreaView } from "react-native-safe-area-context";
// // import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// // import accountApi from "../api/accountApi";
// // import registrationApi from "../api/registrationApi";
// // import { getAuthUserId } from "../api/apiClient";
// // import {
// //   normalizeCandidateType,
// //   getCandidateTypeLabel,
// //   extractCandidateTypeValue,
// // } from "../api/candidateTypeHelper";
// // import BottomNavBar from "../components/BottomNavBar";

// // export default function DashboardScreen({ navigation, route }) {
// //   const userInfo = route.params?.userInfo || {};
// //   const [candidateId, setCandidateId] = useState(
// //     Number(route.params?.candidateId ?? userInfo.CandidateId ?? 0)
// //   );
// //   const userId = Number(route.params?.userId ?? userInfo.UserId ?? getAuthUserId() ?? 0);

// //   const [candidateProfile, setCandidateProfile] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [refreshing, setRefreshing] = useState(false);

// //   // -------------------------------------------------------------
// //   // FETCH FULL CANDIDATE PROFILE & DASHBOARD DATA
// //   // -------------------------------------------------------------
// //   const loadDashboardData = useCallback(async () => {
// //     if (!userId || userId <= 0) {
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       // Step 2 in flow: Call GetCandidate for logged-in UserId
// //       let candidateRecord = null;
// //       try {
// //         candidateRecord = await registrationApi.getCandidate(userId);
// //         console.log("Dashboard candidate record (GetCandidate):", candidateRecord);
// //       } catch (candErr) {
// //         console.log("Dashboard getCandidate notice:", candErr.message);
// //       }

// //       // 1. Fetch full candidate profile
// //       const profile = await registrationApi.getCandidateProfile(userId);
// //       console.log("Dashboard candidate profile:", profile);

// //       const mergedProfile = {
// //         ...(candidateRecord || {}),
// //         ...(profile || {}),
// //         CandidateType:
// //           extractCandidateTypeValue(candidateRecord) ||
// //           extractCandidateTypeValue(profile) ||
// //           "",
// //       };

// //       if (profile || candidateRecord) {
// //         setCandidateProfile(mergedProfile);
// //         const resolvedId = Number(
// //           candidateRecord?.CandidateId || profile?.CandidateId || 0
// //         );
// //         if (resolvedId > 0) {
// //           setCandidateId(resolvedId);
// //         }
// //       } else {
// //         // Fallback: resolve candidateId directly
// //         const resolvedId = await registrationApi.getCandidateId(userId);
// //         if (resolvedId > 0) {
// //           setCandidateId(resolvedId);
// //         }
// //       }
// //     } catch (e) {
// //       console.log("Dashboard data notice:", e.message);
// //     } finally {
// //       setLoading(false);
// //       setRefreshing(false);
// //     }
// //   }, [userId]);

// //   useEffect(() => {
// //     loadDashboardData();
// //   }, [loadDashboardData]);

// //   // Pull to refresh
// //   const onRefresh = () => {
// //     setRefreshing(true);
// //     loadDashboardData();
// //   };

// //   // Hardware back handler
// //   useFocusEffect(
// //     useCallback(() => {
// //       const onBackPress = () => {
// //         Alert.alert("Logout", "Do you want to logout?", [
// //           { text: "Cancel", style: "cancel" },
// //           {
// //             text: "Yes",
// //             onPress: async () => {
// //               await accountApi.logoutUser(userId, userInfo.LoggedInSessionId);
// //               navigation.replace("Login");
// //             },
// //           },
// //         ]);
// //         return true;
// //       };

// //       const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress);
// //       return () => subscription.remove();
// //     }, [userId, userInfo])
// //   );

// //   // Navigate to Suchi Booking wizard
// //   const handleOpenSuchi = (stepToOpen = null) => {
// //     const rawType = extractCandidateTypeValue(candidateProfile);
// //     const candidateType = normalizeCandidateType(rawType);

// //     const isSubmitted =
// //       candidateProfile?.ApplicationFormStatusApplicationRound === "S" ||
// //       candidateProfile?.StepID === 5;

// //     navigation.navigate("SuchiBooking", {
// //       candidateId: candidateId || candidateProfile?.CandidateId || 0,
// //       userId: userId,
// //       candidateType: candidateType || "",
// //       applicationNo: candidateId > 0 ? `P${candidateId}` : "New",
// //       currentUser: { ...userInfo, ...candidateProfile },
// //       isSubmitted: isSubmitted,
// //       openStep: stepToOpen || (isSubmitted ? 5 : 1),
// //     });
// //   };

// //   // Derived Candidate details
// //   const fullName =
// //     candidateProfile?.FirstName
// //       ? `${candidateProfile.FirstName} ${candidateProfile.MiddleName || ""} ${candidateProfile.LastName || ""}`.trim()
// //       : userInfo.UserName || userInfo.FirstName || "Candidate User";

// //   const marathiFullName =
// //     candidateProfile?.MFirstName
// //       ? `${candidateProfile.MFirstName} ${candidateProfile.MMiddleName || ""} ${candidateProfile.MLastName || ""}`.trim()
// //       : "";

// //   const candidateTypeDisplay = getCandidateTypeLabel(
// //     extractCandidateTypeValue(candidateProfile)
// //   );

// //   const applicationNoDisplay =
// //     candidateProfile?.ApplicationFormNo ||
// //     (candidateId > 0 ? `P${candidateId}` : "Under Generation");

// //   const isSubmitted =
// //     candidateProfile?.ApplicationFormStatusApplicationRound === "S" ||
// //     candidateProfile?.StepID === 5;

// //   const mandalName =
// //     candidateProfile?.MandalName ||
// //     "समता भ्रातृमंडळ पिंपरी चिंचवड (पुणे)";

// //   const photoSource = candidateProfile?.PhotoBase64
// //     ? { uri: `data:image/jpeg;base64,${candidateProfile.PhotoBase64}` }
// //     : candidateProfile?.PhotofilePath
// //     ? { uri: candidateProfile.PhotofilePath }
// //     : null;

// //   return (
// //     <SafeAreaView style={styles.safeArea}>
// //       <ScrollView
// //         contentContainerStyle={styles.container}
// //         showsVerticalScrollIndicator={false}
// //         refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
// //       >
// //         {/* Top Header Card */}
// //         <View style={styles.headerCard}>
// //           <View style={styles.mandalRow}>
// //             <Ionicons name="business" size={16} color="#831843" />
// //             <Text style={styles.mandalText} numberOfLines={1}>{mandalName}</Text>
// //           </View>

// //           <View style={styles.headerMainRow}>
// //             {photoSource ? (
// //               <Image source={photoSource} style={styles.avatarImg} />
// //             ) : (
// //               <View style={styles.avatarCircle}>
// //                 <Text style={styles.avatarInitials}>
// //                   {(fullName[0] || "C").toUpperCase()}
// //                 </Text>
// //               </View>
// //             )}

// //             <View style={styles.headerTextWrap}>
// //               <Text style={styles.userNameText}>{fullName}</Text>
// //               {Boolean(marathiFullName) && (
// //                 <Text style={styles.userMarathiText}>{marathiFullName}</Text>
// //               )}
// //               <View style={styles.badgeRow}>
// //                 <View style={styles.typeBadge}>
// //                   <Text style={styles.typeBadgeText}>{candidateTypeDisplay}</Text>
// //                 </View>
// //                 <View style={styles.appNoBadge}>
// //                   <Text style={styles.appNoBadgeText}>App No: {applicationNoDisplay}</Text>
// //                 </View>
// //               </View>
// //             </View>
// //           </View>
// //         </View>

// //         {loading ? (
// //           <View style={styles.loadingCard}>
// //             <ActivityIndicator size="large" color="#831843" />
// //             <Text style={styles.loadingText}>Loading Dashboard Data...</Text>
// //           </View>
// //         ) : (
// //           <>
// //             {/* Status Tracker Card */}
// //             <View style={[styles.card, isSubmitted ? styles.cardSubmitted : styles.cardPending]}>
// //               <View style={styles.statusHeaderRow}>
// //                 <View style={styles.statusIconWrap}>
// //                   <Ionicons
// //                     name={isSubmitted ? "checkmark-circle" : "time"}
// //                     size={26}
// //                     color={isSubmitted ? "#16A34A" : "#D97706"}
// //                   />
// //                 </View>
// //                 <View style={{ flex: 1 }}>
// //                   <Text style={styles.statusTitle}>
// //                     {isSubmitted
// //                       ? "पडताळणी प्रक्रियेत आहे (Under Verification)"
// //                       : "नोंदणी प्रक्रिया अपूर्ण (Incomplete Registration)"}
// //                   </Text>
// //                   <Text style={styles.statusSub}>
// //                     {isSubmitted
// //                       ? "आपला अर्ज संस्थेकडे पडताळणीसाठी सादर झाला आहे (Status: S)."
// //                       : "कृपया सूची पुस्तिकेसाठी सर्व ५ पायऱ्यांची माहिती पूर्ण भरा."}
// //                   </Text>
// //                 </View>
// //               </View>

// //               {isSubmitted ? (
// //                 <View style={styles.statusDetailsBox}>
// //                   <View style={styles.statusDetailRow}>
// //                     <Text style={styles.statusDetailLabel}>अर्ज स्थिती (Status):</Text>
// //                     <Text style={[styles.statusDetailValue, { color: "#16A34A" }]}>
// //                       सादर झाले (Submitted)
// //                     </Text>
// //                   </View>
// //                   <View style={styles.statusDetailRow}>
// //                     <Text style={styles.statusDetailLabel}>नोंदणी दिनांक (Date):</Text>
// //                     <Text style={styles.statusDetailValue}>
// //                       {candidateProfile?.CreatedOn || "14-09-2026"}
// //                     </Text>
// //                   </View>
// //                   <View style={styles.statusDetailRow}>
// //                     <Text style={styles.statusDetailLabel}>पडताळणी शेरा (Comment):</Text>
// //                     <Text style={styles.statusDetailValue}>
// //                       {candidateProfile?.CommentByVerify || "पडताळणी सुरू आहे (In Progress)"}
// //                     </Text>
// //                   </View>
// //                 </View>
// //               ) : null}

// //               <TouchableOpacity
// //                 style={[styles.primaryActionBtn, isSubmitted && styles.viewProfileBtn]}
// //                 onPress={() => handleOpenSuchi(isSubmitted ? 5 : null)}
// //                 activeOpacity={0.85}
// //               >
// //                 <Ionicons
// //                   name={isSubmitted ? "eye-outline" : "arrow-forward-circle"}
// //                   size={18}
// //                   color="#FFFFFF"
// //                   style={{ marginRight: 6 }}
// //                 />
// //                 <Text style={styles.primaryActionBtnText}>
// //                   {isSubmitted
// //                     ? "सादर केलेले प्रोफाईल पहा (View Application) ➔"
// //                     : "नोंदणी पूर्ण करा (Complete Registration) ➔"}
// //                 </Text>
// //               </TouchableOpacity>
// //             </View>

// //             {/* Quick Summary Grid */}
// //             {candidateProfile && (
// //               <>
// //                 <Text style={styles.sectionHeader}>📋 प्रोफाईल सारांश (Profile Snapshot)</Text>

// //                 {/* 1. Education & Employment */}
// //                 <View style={styles.summaryCard}>
// //                   <View style={styles.summaryCardHeader}>
// //                     <MaterialCommunityIcons name="school" size={20} color="#831843" />
// //                     <Text style={styles.summaryCardTitle}>शिक्षण व नोकरी (Career)</Text>
// //                   </View>
// //                   <View style={styles.summaryRow}>
// //                     <Text style={styles.summaryLabel}>शिक्षण (Degree):</Text>
// //                     <Text style={styles.summaryVal}>
// //                       {candidateProfile.Education || candidateProfile.EducationLevel || "Not provided"}
// //                     </Text>
// //                   </View>
// //                   <View style={styles.summaryRow}>
// //                     <Text style={styles.summaryLabel}>व्यवसाय / नोकरी:</Text>
// //                     <Text style={styles.summaryVal}>
// //                       {candidateProfile.JobBuzEdu || candidateProfile.Position || "Not provided"}
// //                     </Text>
// //                   </View>
// //                   {Boolean(candidateProfile.Company) && (
// //                     <View style={styles.summaryRow}>
// //                       <Text style={styles.summaryLabel}>कंपनी / व्यवसाय नाव:</Text>
// //                       <Text style={styles.summaryVal}>{candidateProfile.Company}</Text>
// //                     </View>
// //                   )}
// //                   {Boolean(candidateProfile.MonthlyIncome) && (
// //                     <View style={styles.summaryRow}>
// //                       <Text style={styles.summaryLabel}>मासिक उत्पन्न:</Text>
// //                       <Text style={styles.summaryVal}>₹{candidateProfile.MonthlyIncome}</Text>
// //                     </View>
// //                   )}
// //                 </View>

// //                 {/* 2. Personal & Horoscope */}
// //                 <View style={styles.summaryCard}>
// //                   <View style={styles.summaryCardHeader}>
// //                     <MaterialCommunityIcons name="star-circle" size={20} color="#831843" />
// //                     <Text style={styles.summaryCardTitle}>जन्म व वैयक्तिक माहिती (Personal & Horoscope)</Text>
// //                   </View>
// //                   <View style={styles.summaryRow}>
// //                     <Text style={styles.summaryLabel}>जन्म तारीख:</Text>
// //                     <Text style={styles.summaryVal}>
// //                       {candidateProfile.BirthDateDisplay || candidateProfile.BirthDate || "Not provided"}
// //                     </Text>
// //                   </View>
// //                   <View style={styles.summaryRow}>
// //                     <Text style={styles.summaryLabel}>जन्म वेळ व ठिकाण:</Text>
// //                     <Text style={styles.summaryVal}>
// //                       {candidateProfile.BirthTime || "-"}, {candidateProfile.BirthPlace || "-"}
// //                     </Text>
// //                   </View>
// //                   <View style={styles.summaryRow}>
// //                     <Text style={styles.summaryLabel}>उंची व वर्ण:</Text>
// //                     <Text style={styles.summaryVal}>
// //                       {candidateProfile.Foot ? `${candidateProfile.Foot}' ${candidateProfile.Inch || 0}"` : "-"}, {candidateProfile.Complexion || "-"}
// //                     </Text>
// //                   </View>
// //                   <View style={styles.summaryRow}>
// //                     <Text style={styles.summaryLabel}>रक्तगट व गोत्र:</Text>
// //                     <Text style={styles.summaryVal}>
// //                       {candidateProfile.Bloodgroup || "-"}, गोत्र: {candidateProfile.Gotra || "-"}
// //                     </Text>
// //                   </View>
// //                   <View style={styles.summaryRow}>
// //                     <Text style={styles.summaryLabel}>मूळगाव (Hometown):</Text>
// //                     <Text style={styles.summaryVal}>
// //                       {candidateProfile.Hometown || "-"}, {candidateProfile.Taluka || "-"}, {candidateProfile.District || "-"}
// //                     </Text>
// //                   </View>
// //                 </View>

// //                 {/* 3. Parent & Contacts */}
// //                 <View style={styles.summaryCard}>
// //                   <View style={styles.summaryCardHeader}>
// //                     <Ionicons name="people" size={20} color="#831843" />
// //                     <Text style={styles.summaryCardTitle}>पालक व संपर्क (Parent & Contact)</Text>
// //                   </View>
// //                   <View style={styles.summaryRow}>
// //                     <Text style={styles.summaryLabel}>पालकांचे नाव:</Text>
// //                     <Text style={styles.summaryVal}>
// //                       {candidateProfile.FatherGurdianTitle || ""} {candidateProfile.NameOfFatherGuardian || "-"}
// //                     </Text>
// //                   </View>
// //                   <View style={styles.summaryRow}>
// //                     <Text style={styles.summaryLabel}>पालकांचा पत्ता:</Text>
// //                     <Text style={styles.summaryVal}>{candidateProfile.ParentalAddress || "-"}</Text>
// //                   </View>
// //                   <View style={styles.summaryRow}>
// //                     <Text style={styles.summaryLabel}>संपर्क क्रमांक:</Text>
// //                     <Text style={styles.summaryVal}>
// //                       {candidateProfile.PersonalMobile || candidateProfile.ParentalContactNo1 || "-"}
// //                     </Text>
// //                   </View>
// //                 </View>
// //               </>
// //             )}

// //             {/* Important Dates / Guidelines Box */}
// //             <View style={styles.infoCard}>
// //               <View style={styles.infoCardHeader}>
// //                 <Ionicons name="information-circle" size={20} color="#1E40AF" />
// //                 <Text style={styles.infoCardTitle}>महत्त्वाच्या सूचना (Important Notice)</Text>
// //               </View>
// //               <Text style={styles.infoPoint}>
// //                 • ३१ ऑक्टोबर पर्यंत सादर झालेली नावे यंदाच्या वधू-वर पुस्तिकेत छापली जातील.
// //               </Text>
// //               <Text style={styles.infoPoint}>
// //                 • ऑनलाइन वधू-वर सूची उमेदवारांच्या अकाऊंटमध्ये वर्षभर उपलब्ध राहील.
// //               </Text>
// //               <Text style={styles.infoPoint}>
// //                 • पुस्तक मिळण्याची संभाव्य तारीख: २५ डिसेंबर.
// //               </Text>
// //             </View>

// //             {/* Logout Button */}
// //             <TouchableOpacity
// //               style={styles.logoutBtn}
// //               onPress={() => {
// //                 Alert.alert("Logout", "Do you want to logout?", [
// //                   { text: "Cancel", style: "cancel" },
// //                   {
// //                     text: "Logout",
// //                     style: "destructive",
// //                     onPress: async () => {
// //                       await accountApi.logoutUser(userId, userInfo.LoggedInSessionId);
// //                       navigation.replace("Login");
// //                     },
// //                   },
// //                 ]);
// //               }}
// //               activeOpacity={0.8}
// //             >
// //               <Ionicons name="log-out-outline" size={18} color="#DC2626" style={{ marginRight: 6 }} />
// //               <Text style={styles.logoutBtnText}>लॉगआउट (Logout)</Text>
// //             </TouchableOpacity>
// //           </>
// //         )}
// //       </ScrollView>

// //       {/* Persistent Bottom Navigation Bar */}
// //       <BottomNavBar />
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   safeArea: { flex: 1, backgroundColor: "#831843" },
// //   container: { padding: 16, backgroundColor: "#F3F4F6", flexGrow: 1, paddingBottom: 24 },

// //   // Header Card
// //   headerCard: {
// //     backgroundColor: "#FFFFFF",
// //     borderRadius: 12,
// //     padding: 16,
// //     marginBottom: 14,
// //     elevation: 2,
// //     shadowColor: "#000",
// //     shadowOpacity: 0.06,
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowRadius: 4,
// //   },
// //   mandalRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     gap: 6,
// //     marginBottom: 12,
// //     paddingBottom: 8,
// //     borderBottomWidth: 1,
// //     borderBottomColor: "#F1F5F9",
// //   },
// //   mandalText: {
// //     fontSize: 12,
// //     fontWeight: "700",
// //     color: "#831843",
// //     flex: 1,
// //   },
// //   headerMainRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     gap: 12,
// //   },
// //   avatarImg: {
// //     width: 60,
// //     height: 60,
// //     borderRadius: 30,
// //     borderWidth: 2,
// //     borderColor: "#831843",
// //   },
// //   avatarCircle: {
// //     width: 60,
// //     height: 60,
// //     borderRadius: 30,
// //     backgroundColor: "#FCE7F3",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     borderWidth: 2,
// //     borderColor: "#F472B6",
// //   },
// //   avatarInitials: {
// //     fontSize: 24,
// //     fontWeight: "800",
// //     color: "#831843",
// //   },
// //   headerTextWrap: {
// //     flex: 1,
// //   },
// //   userNameText: {
// //     fontSize: 17,
// //     fontWeight: "800",
// //     color: "#1E293B",
// //   },
// //   userMarathiText: {
// //     fontSize: 14,
// //     color: "#64748B",
// //     marginTop: 1,
// //   },
// //   badgeRow: {
// //     flexDirection: "row",
// //     gap: 6,
// //     marginTop: 6,
// //     flexWrap: "wrap",
// //   },
// //   typeBadge: {
// //     backgroundColor: "#FCE7F3",
// //     paddingHorizontal: 8,
// //     paddingVertical: 2,
// //     borderRadius: 6,
// //   },
// //   typeBadgeText: {
// //     color: "#9D174D",
// //     fontSize: 11,
// //     fontWeight: "700",
// //   },
// //   appNoBadge: {
// //     backgroundColor: "#E2E8F0",
// //     paddingHorizontal: 8,
// //     paddingVertical: 2,
// //     borderRadius: 6,
// //   },
// //   appNoBadgeText: {
// //     color: "#334155",
// //     fontSize: 11,
// //     fontWeight: "700",
// //   },

// //   // Loading
// //   loadingCard: {
// //     padding: 30,
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   loadingText: {
// //     marginTop: 10,
// //     color: "#64748B",
// //     fontSize: 14,
// //   },

// //   // Status Card
// //   card: {
// //     backgroundColor: "#FFFFFF",
// //     borderRadius: 12,
// //     padding: 16,
// //     marginBottom: 14,
// //     borderWidth: 1,
// //     elevation: 2,
// //     shadowColor: "#000",
// //     shadowOpacity: 0.05,
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowRadius: 4,
// //   },
// //   cardSubmitted: {
// //     borderColor: "#86EFAC",
// //     backgroundColor: "#F0FDF4",
// //   },
// //   cardPending: {
// //     borderColor: "#FCD34D",
// //     backgroundColor: "#FFFBEB",
// //   },
// //   statusHeaderRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     gap: 10,
// //     marginBottom: 10,
// //   },
// //   statusIconWrap: {
// //     width: 36,
// //     height: 36,
// //     borderRadius: 18,
// //     backgroundColor: "#FFFFFF",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     elevation: 1,
// //   },
// //   statusTitle: {
// //     fontSize: 14.5,
// //     fontWeight: "800",
// //     color: "#1E293B",
// //   },
// //   statusSub: {
// //     fontSize: 11.5,
// //     color: "#475569",
// //     marginTop: 2,
// //   },
// //   statusDetailsBox: {
// //     backgroundColor: "#FFFFFF",
// //     borderRadius: 8,
// //     padding: 10,
// //     gap: 4,
// //     marginVertical: 10,
// //     borderWidth: 1,
// //     borderColor: "#E2E8F0",
// //   },
// //   statusDetailRow: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //   },
// //   statusDetailLabel: {
// //     fontSize: 11.5,
// //     color: "#64748B",
// //     fontWeight: "600",
// //   },
// //   statusDetailValue: {
// //     fontSize: 11.5,
// //     fontWeight: "700",
// //     color: "#1E293B",
// //   },
// //   primaryActionBtn: {
// //     backgroundColor: "#831843",
// //     height: 44,
// //     borderRadius: 8,
// //     flexDirection: "row",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginTop: 6,
// //   },
// //   viewProfileBtn: {
// //     backgroundColor: "#166534",
// //   },
// //   primaryActionBtnText: {
// //     color: "#FFFFFF",
// //     fontSize: 13.5,
// //     fontWeight: "700",
// //   },

// //   // Section Headers & Summary Cards
// //   sectionHeader: {
// //     fontSize: 14,
// //     fontWeight: "800",
// //     color: "#334155",
// //     marginBottom: 8,
// //     marginLeft: 2,
// //   },
// //   summaryCard: {
// //     backgroundColor: "#FFFFFF",
// //     borderRadius: 10,
// //     padding: 14,
// //     marginBottom: 10,
// //     borderWidth: 1,
// //     borderColor: "#E2E8F0",
// //   },
// //   summaryCardHeader: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     gap: 6,
// //     marginBottom: 8,
// //     paddingBottom: 6,
// //     borderBottomWidth: 1,
// //     borderBottomColor: "#F1F5F9",
// //   },
// //   summaryCardTitle: {
// //     fontSize: 13,
// //     fontWeight: "700",
// //     color: "#831843",
// //   },
// //   summaryRow: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     paddingVertical: 3,
// //   },
// //   summaryLabel: {
// //     fontSize: 12,
// //     color: "#64748B",
// //     fontWeight: "500",
// //   },
// //   summaryVal: {
// //     fontSize: 12,
// //     fontWeight: "600",
// //     color: "#1E293B",
// //     maxWidth: "60%",
// //     textAlign: "right",
// //   },

// //   // Info Card
// //   infoCard: {
// //     backgroundColor: "#EFF6FF",
// //     borderRadius: 10,
// //     padding: 14,
// //     marginBottom: 14,
// //     borderWidth: 1,
// //     borderColor: "#BFDBFE",
// //   },
// //   infoCardHeader: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     gap: 6,
// //     marginBottom: 6,
// //   },
// //   infoCardTitle: {
// //     fontSize: 13,
// //     fontWeight: "700",
// //     color: "#1E40AF",
// //   },
// //   infoPoint: {
// //     fontSize: 11.5,
// //     color: "#1E3A8A",
// //     lineHeight: 17,
// //     marginTop: 2,
// //   },

// //   // Logout
// //   logoutBtn: {
// //     height: 44,
// //     borderWidth: 1,
// //     borderColor: "#EF4444",
// //     borderRadius: 8,
// //     flexDirection: "row",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     backgroundColor: "#FEF2F2",
// //     marginBottom: 10,
// //   },
// //   logoutBtnText: {
// //     color: "#DC2626",
// //     fontSize: 13.5,
// //     fontWeight: "700",
// //   },
// // });








// import React, { useState, useEffect, useCallback, useRef } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   BackHandler,
//   Alert,
//   ActivityIndicator,
//   RefreshControl,
//   Image,
//   AppState,
// } from "react-native";
// import { useFocusEffect } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import accountApi from "../api/accountApi";
// import registrationApi from "../api/registrationApi";
// import { getAuthUserId } from "../api/apiClient";
// import {
//   normalizeCandidateType,
//   getCandidateTypeLabel,
//   extractCandidateTypeValue,
// } from "../api/candidateTypeHelper";
// import BottomNavBar from "../components/BottomNavBar";

// // ---------------------------------------------------------------
// // LIVE POLLING INTERVAL (ms) - used only while waiting on admin
// // ---------------------------------------------------------------
// const POLL_INTERVAL_MS = 30000;

// // ---------------------------------------------------------------
// // REGISTRATION STEPS CONFIG
// // ---------------------------------------------------------------
// const STEPS = [
//   { id: 1, title: "Basic Details" },
//   { id: 2, title: "Qualification & Employment" },
//   { id: 3, title: "Personal Details" },
//   { id: 4, title: "Expectation & Parent Details" },
//   { id: 5, title: "Submitted for Verification" },
//   { id: 6, title: "Verified", pendingText: "Waiting for Admin Approval" },
//   { id: 7, title: "Approved / Ready to Print", pendingText: "Pending step" },
// ];

// /**
//  * Returns the last COMPLETED step number (0..7).
//  * !! Adjust the field names / values below to match your API !!
//  *  - "S" / StepID 5  -> submitted (known from your code)
//  *  - "V" / IsVerified -> verified by admin (assumed)
//  *  - "A" / IsApproved -> approved & ready to print (assumed)
//  */
// const getCompletedUpTo = (p) => {
//   if (!p) return 0;
//   const status = p.ApplicationFormStatusApplicationRound;

//   if (status === "A" || p.IsApproved) return 7;
//   if (status === "V" || p.IsVerified) return 6;
//   if (status === "S" || Number(p.StepID) === 5) return 5;

//   // Wizard in progress: StepID = last saved step (max 4 before submit)
//   // If your StepID means "current step", use: Number(p.StepID) - 1
//   return Math.min(Math.max(Number(p.StepID) || 0, 0), 4);
// };

// // ---------------------------------------------------------------
// // REGISTRATION STEPS TIMELINE COMPONENT
// // ---------------------------------------------------------------
// function RegistrationSteps({ profile, lastUpdated, isLive, onStepPress }) {
//   const done = getCompletedUpTo(profile);
//   const currentId = Math.min(done + 1, 8); // 8 => everything done

//   return (
//     <View style={rs.card}>
//       <View style={rs.headingRow}>
//         <Text style={rs.heading}>Registration Steps</Text>
//         {isLive && (
//           <View style={rs.liveWrap}>
//             <View style={rs.liveDot} />
//             <Text style={rs.liveText}>Live</Text>
//           </View>
//         )}
//       </View>
//       {lastUpdated ? (
//         <Text style={rs.updatedText}>Updated {lastUpdated}</Text>
//       ) : null}

//       {STEPS.map((step, index) => {
//         const state =
//           step.id <= done ? "done" : step.id === currentId ? "current" : "pending";
//         const isLast = index === STEPS.length - 1;

//         // Steps 1-5 open the wizard. Steps 6-7 are admin steps (not tappable).
//         const canOpen = step.id <= 5 && (state === "done" || state === "current");

//         let subText;
//         if (state === "done") subText = "Completed";
//         else if (state === "current")
//           subText = step.id <= 5 ? "In progress - tap to continue" : step.pendingText;
//         else subText = step.pendingText || "Pending step";

//         return (
//           <View key={step.id} style={rs.rowWrap}>
//             {!isLast && (
//               <View
//                 style={[rs.line, state === "done" && { backgroundColor: "#A7F3D0" }]}
//               />
//             )}
//             <TouchableOpacity
//               activeOpacity={canOpen ? 0.8 : 1}
//               disabled={!canOpen}
//               onPress={() => onStepPress && onStepPress(step.id)}
//               style={[
//                 rs.row,
//                 state === "done" && rs.rowDone,
//                 state === "current" && rs.rowCurrent,
//                 state === "pending" && rs.rowPending,
//               ]}
//             >
//               <View
//                 style={[
//                   rs.circle,
//                   state === "done" && rs.circleDone,
//                   state === "current" && rs.circleCurrent,
//                 ]}
//               >
//                 {state === "done" ? (
//                   <Ionicons name="checkmark" size={16} color="#059669" />
//                 ) : (
//                   <Text
//                     style={[rs.circleText, state === "current" && { color: "#2563EB" }]}
//                   >
//                     {step.id}
//                   </Text>
//                 )}
//               </View>

//               <View style={{ flex: 1 }}>
//                 <Text
//                   style={[
//                     rs.title,
//                     state === "done" && { color: "#064E3B" },
//                     state === "current" && { color: "#1E3A8A" },
//                   ]}
//                 >
//                   {step.title}
//                 </Text>
//                 <Text style={rs.sub}>{subText}</Text>
//               </View>

//               {state === "done" && (
//                 <View style={rs.doneBadge}>
//                   <Text style={rs.doneBadgeText}>Done</Text>
//                 </View>
//               )}
//               {canOpen && (
//                 <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
//               )}
//             </TouchableOpacity>
//           </View>
//         );
//       })}
//     </View>
//   );
// }

// // ---------------------------------------------------------------
// // DASHBOARD SCREEN
// // ---------------------------------------------------------------
// export default function DashboardScreen({ navigation, route }) {
//   const userInfo = route.params?.userInfo || {};
//   const [candidateId, setCandidateId] = useState(
//     Number(route.params?.candidateId ?? userInfo.CandidateId ?? 0)
//   );
//   const userId = Number(route.params?.userId ?? userInfo.UserId ?? getAuthUserId() ?? 0);

//   const [candidateProfile, setCandidateProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [refreshing, setRefreshing] = useState(false);
//   const [lastUpdated, setLastUpdated] = useState("");

//   const mountedRef = useRef(true);
//   const fetchingRef = useRef(false);

//   useEffect(() => {
//     mountedRef.current = true;
//     return () => {
//       mountedRef.current = false;
//     };
//   }, []);

//   // -------------------------------------------------------------
//   // FETCH FULL CANDIDATE PROFILE & DASHBOARD DATA
//   // -------------------------------------------------------------
//   const loadDashboardData = useCallback(async () => {
//     if (!userId || userId <= 0) {
//       setLoading(false);
//       setRefreshing(false);
//       return;
//     }
//     if (fetchingRef.current) return; // avoid overlapping calls
//     fetchingRef.current = true;

//     try {
//       let candidateRecord = null;
//       try {
//         candidateRecord = await registrationApi.getCandidate(userId);
//         console.log("Dashboard candidate record (GetCandidate):", candidateRecord);
//       } catch (candErr) {
//         console.log("Dashboard getCandidate notice:", candErr.message);
//       }

//       const profile = await registrationApi.getCandidateProfile(userId);
//       console.log("Dashboard candidate profile:", profile);

//       if (!mountedRef.current) return;

//       const mergedProfile = {
//         ...(candidateRecord || {}),
//         ...(profile || {}),
//         CandidateType:
//           extractCandidateTypeValue(candidateRecord) ||
//           extractCandidateTypeValue(profile) ||
//           "",
//       };

//       if (profile || candidateRecord) {
//         setCandidateProfile(mergedProfile);
//         setLastUpdated(new Date().toLocaleTimeString());
//         const resolvedId = Number(
//           candidateRecord?.CandidateId || profile?.CandidateId || 0
//         );
//         if (resolvedId > 0) setCandidateId(resolvedId);
//       } else {
//         const resolvedId = await registrationApi.getCandidateId(userId);
//         if (mountedRef.current && resolvedId > 0) setCandidateId(resolvedId);
//       }
//     } catch (e) {
//       console.log("Dashboard data notice:", e.message);
//     } finally {
//       fetchingRef.current = false;
//       if (mountedRef.current) {
//         setLoading(false);
//         setRefreshing(false);
//       }
//     }
//   }, [userId]);

//   // LIVE #1: reload every time the screen gets focus
//   // (first load + coming back from the wizard)
//   useFocusEffect(
//     useCallback(() => {
//       loadDashboardData();
//     }, [loadDashboardData])
//   );

//   // LIVE #2: reload when the app returns from background
//   useEffect(() => {
//     const sub = AppState.addEventListener("change", (state) => {
//       if (state === "active") loadDashboardData();
//     });
//     return () => sub.remove();
//   }, [loadDashboardData]);

//   // LIVE #3: poll while waiting on admin (steps 5 and 6)
//   const completedUpTo = getCompletedUpTo(candidateProfile);
//   const isWaitingOnAdmin = completedUpTo >= 5 && completedUpTo < 7;

//   useEffect(() => {
//     if (!isWaitingOnAdmin) return;
//     const timer = setInterval(loadDashboardData, POLL_INTERVAL_MS);
//     return () => clearInterval(timer);
//   }, [isWaitingOnAdmin, loadDashboardData]);

//   // Pull to refresh
//   const onRefresh = () => {
//     setRefreshing(true);
//     loadDashboardData();
//   };

//   // Hardware back handler
//   useFocusEffect(
//     useCallback(() => {
//       const onBackPress = () => {
//         Alert.alert("Logout", "Do you want to logout?", [
//           { text: "Cancel", style: "cancel" },
//           {
//             text: "Yes",
//             onPress: async () => {
//               await accountApi.logoutUser(userId, userInfo.LoggedInSessionId);
//               navigation.replace("Login");
//             },
//           },
//         ]);
//         return true;
//       };

//       const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress);
//       return () => subscription.remove();
//     }, [userId, userInfo])
//   );

//   // Derived flags
//   const isSubmitted = completedUpTo >= 5;
//   const isVerified = completedUpTo >= 6;
//   const isApproved = completedUpTo >= 7;

//   // Navigate to Suchi Booking wizard
//   const handleOpenSuchi = (stepToOpen = null) => {
//     const rawType = extractCandidateTypeValue(candidateProfile);
//     const candidateType = normalizeCandidateType(rawType);

//     navigation.navigate("SuchiBooking", {
//       candidateId: candidateId || candidateProfile?.CandidateId || 0,
//       userId: userId,
//       candidateType: candidateType || "",
//       applicationNo: candidateId > 0 ? `P${candidateId}` : "New",
//       currentUser: { ...userInfo, ...candidateProfile },
//       isSubmitted: isSubmitted,
//       openStep: stepToOpen || (isSubmitted ? 5 : Math.max(completedUpTo + 1, 1)),
//     });
//   };

//   // Derived Candidate details
//   const fullName = candidateProfile?.FirstName
//     ? `${candidateProfile.FirstName} ${candidateProfile.MiddleName || ""} ${candidateProfile.LastName || ""}`.trim()
//     : userInfo.UserName || userInfo.FirstName || "Candidate User";

//   const marathiFullName = candidateProfile?.MFirstName
//     ? `${candidateProfile.MFirstName} ${candidateProfile.MMiddleName || ""} ${candidateProfile.MLastName || ""}`.trim()
//     : "";

//   const candidateTypeDisplay = getCandidateTypeLabel(
//     extractCandidateTypeValue(candidateProfile)
//   );

//   const applicationNoDisplay =
//     candidateProfile?.ApplicationFormNo ||
//     (candidateId > 0 ? `P${candidateId}` : "Under Generation");

//   const mandalName =
//     candidateProfile?.MandalName || "समता भ्रातृमंडळ पिंपरी चिंचवड (पुणे)";

//   const photoSource = candidateProfile?.PhotoBase64
//     ? { uri: `data:image/jpeg;base64,${candidateProfile.PhotoBase64}` }
//     : candidateProfile?.PhotofilePath
//     ? { uri: candidateProfile.PhotofilePath }
//     : null;

//   // Status card content, driven by the live step
//   const statusInfo = isApproved
//     ? {
//         icon: "ribbon",
//         color: "#16A34A",
//         cardStyle: styles.cardSubmitted,
//         title: "मंजूर झाले (Approved / Ready to Print)",
//         sub: "आपला अर्ज मंजूर झाला आहे व छपाईसाठी तयार आहे.",
//         statusText: "मंजूर (Approved)",
//       }
//     : isVerified
//     ? {
//         icon: "shield-checkmark",
//         color: "#2563EB",
//         cardStyle: styles.cardVerified,
//         title: "पडताळणी पूर्ण (Verified)",
//         sub: "आपला अर्ज पडताळला गेला आहे. अंतिम मंजुरीची प्रतीक्षा आहे.",
//         statusText: "पडताळले (Verified)",
//       }
//     : isSubmitted
//     ? {
//         icon: "checkmark-circle",
//         color: "#16A34A",
//         cardStyle: styles.cardSubmitted,
//         title: "पडताळणी प्रक्रियेत आहे (Under Verification)",
//         sub: "आपला अर्ज संस्थेकडे पडताळणीसाठी सादर झाला आहे (Status: S).",
//         statusText: "सादर झाले (Submitted)",
//       }
//     : {
//         icon: "time",
//         color: "#D97706",
//         cardStyle: styles.cardPending,
//         title: "नोंदणी प्रक्रिया अपूर्ण (Incomplete Registration)",
//         sub: "कृपया सूची पुस्तिकेसाठी सर्व ५ पायऱ्यांची माहिती पूर्ण भरा.",
//         statusText: "अपूर्ण (Incomplete)",
//       };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}
//         refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
//       >
//         {/* Top Header Card */}
//         <View style={styles.headerCard}>
//           <View style={styles.mandalRow}>
//             <Ionicons name="business" size={16} color="#831843" />
//             <Text style={styles.mandalText} numberOfLines={1}>
//               {mandalName}
//             </Text>
//           </View>

//           <View style={styles.headerMainRow}>
//             {photoSource ? (
//               <Image source={photoSource} style={styles.avatarImg} />
//             ) : (
//               <View style={styles.avatarCircle}>
//                 <Text style={styles.avatarInitials}>
//                   {(fullName[0] || "C").toUpperCase()}
//                 </Text>
//               </View>
//             )}

//             <View style={styles.headerTextWrap}>
//               <Text style={styles.userNameText}>{fullName}</Text>
//               {Boolean(marathiFullName) && (
//                 <Text style={styles.userMarathiText}>{marathiFullName}</Text>
//               )}
//               <View style={styles.badgeRow}>
//                 <View style={styles.typeBadge}>
//                   <Text style={styles.typeBadgeText}>{candidateTypeDisplay}</Text>
//                 </View>
//                 <View style={styles.appNoBadge}>
//                   <Text style={styles.appNoBadgeText}>App No: {applicationNoDisplay}</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>

//         {loading ? (
//           <View style={styles.loadingCard}>
//             <ActivityIndicator size="large" color="#831843" />
//             <Text style={styles.loadingText}>Loading Dashboard Data...</Text>
//           </View>
//         ) : (
//           <>
//             {/* Status Tracker Card */}
//             <View style={[styles.card, statusInfo.cardStyle]}>
//               <View style={styles.statusHeaderRow}>
//                 <View style={styles.statusIconWrap}>
//                   <Ionicons name={statusInfo.icon} size={26} color={statusInfo.color} />
//                 </View>
//                 <View style={{ flex: 1 }}>
//                   <Text style={styles.statusTitle}>{statusInfo.title}</Text>
//                   <Text style={styles.statusSub}>{statusInfo.sub}</Text>
//                 </View>
//               </View>

//               {isSubmitted ? (
//                 <View style={styles.statusDetailsBox}>
//                   <View style={styles.statusDetailRow}>
//                     <Text style={styles.statusDetailLabel}>अर्ज स्थिती (Status):</Text>
//                     <Text style={[styles.statusDetailValue, { color: statusInfo.color }]}>
//                       {statusInfo.statusText}
//                     </Text>
//                   </View>
//                   <View style={styles.statusDetailRow}>
//                     <Text style={styles.statusDetailLabel}>नोंदणी दिनांक (Date):</Text>
//                     <Text style={styles.statusDetailValue}>
//                       {candidateProfile?.CreatedOn || "-"}
//                     </Text>
//                   </View>
//                   <View style={styles.statusDetailRow}>
//                     <Text style={styles.statusDetailLabel}>पडताळणी शेरा (Comment):</Text>
//                     <Text style={[styles.statusDetailValue, styles.statusCommentValue]}>
//                       {candidateProfile?.CommentByVerify || "पडताळणी सुरू आहे (In Progress)"}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}

//               <TouchableOpacity
//                 style={[styles.primaryActionBtn, isSubmitted && styles.viewProfileBtn]}
//                 onPress={() => handleOpenSuchi(isSubmitted ? 5 : null)}
//                 activeOpacity={0.85}
//               >
//                 <Ionicons
//                   name={isSubmitted ? "eye-outline" : "arrow-forward-circle"}
//                   size={18}
//                   color="#FFFFFF"
//                   style={{ marginRight: 6 }}
//                 />
//                 <Text style={styles.primaryActionBtnText}>
//                   {isSubmitted
//                     ? "सादर केलेले प्रोफाईल पहा (View Application) ➔"
//                     : "नोंदणी पूर्ण करा (Complete Registration) ➔"}
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             {/* LIVE Registration Steps Timeline */}
//             <RegistrationSteps
//               profile={candidateProfile}
//               lastUpdated={lastUpdated}
//               isLive={isWaitingOnAdmin}
//               onStepPress={(stepId) => handleOpenSuchi(stepId)}
//             />

//             {/* Quick Summary Grid */}
//             {candidateProfile && (
//               <>
//                 <Text style={styles.sectionHeader}>📋 प्रोफाईल सारांश (Profile Snapshot)</Text>

//                 {/* 1. Education & Employment */}
//                 <View style={styles.summaryCard}>
//                   <View style={styles.summaryCardHeader}>
//                     <MaterialCommunityIcons name="school" size={20} color="#831843" />
//                     <Text style={styles.summaryCardTitle}>शिक्षण व नोकरी (Career)</Text>
//                   </View>
//                   <View style={styles.summaryRow}>
//                     <Text style={styles.summaryLabel}>शिक्षण (Degree):</Text>
//                     <Text style={styles.summaryVal}>
//                       {candidateProfile.Education ||
//                         candidateProfile.EducationLevel ||
//                         "Not provided"}
//                     </Text>
//                   </View>
//                   <View style={styles.summaryRow}>
//                     <Text style={styles.summaryLabel}>व्यवसाय / नोकरी:</Text>
//                     <Text style={styles.summaryVal}>
//                       {candidateProfile.JobBuzEdu || candidateProfile.Position || "Not provided"}
//                     </Text>
//                   </View>
//                   {Boolean(candidateProfile.Company) && (
//                     <View style={styles.summaryRow}>
//                       <Text style={styles.summaryLabel}>कंपनी / व्यवसाय नाव:</Text>
//                       <Text style={styles.summaryVal}>{candidateProfile.Company}</Text>
//                     </View>
//                   )}
//                   {Boolean(candidateProfile.MonthlyIncome) && (
//                     <View style={styles.summaryRow}>
//                       <Text style={styles.summaryLabel}>मासिक उत्पन्न:</Text>
//                       <Text style={styles.summaryVal}>₹{candidateProfile.MonthlyIncome}</Text>
//                     </View>
//                   )}
//                 </View>

//                 {/* 2. Personal & Horoscope */}
//                 <View style={styles.summaryCard}>
//                   <View style={styles.summaryCardHeader}>
//                     <MaterialCommunityIcons name="star-circle" size={20} color="#831843" />
//                     <Text style={styles.summaryCardTitle}>
//                       जन्म व वैयक्तिक माहिती (Personal & Horoscope)
//                     </Text>
//                   </View>
//                   <View style={styles.summaryRow}>
//                     <Text style={styles.summaryLabel}>जन्म तारीख:</Text>
//                     <Text style={styles.summaryVal}>
//                       {candidateProfile.BirthDateDisplay ||
//                         candidateProfile.BirthDate ||
//                         "Not provided"}
//                     </Text>
//                   </View>
//                   <View style={styles.summaryRow}>
//                     <Text style={styles.summaryLabel}>जन्म वेळ व ठिकाण:</Text>
//                     <Text style={styles.summaryVal}>
//                       {candidateProfile.BirthTime || "-"}, {candidateProfile.BirthPlace || "-"}
//                     </Text>
//                   </View>
//                   <View style={styles.summaryRow}>
//                     <Text style={styles.summaryLabel}>उंची व वर्ण:</Text>
//                     <Text style={styles.summaryVal}>
//                       {candidateProfile.Foot
//                         ? `${candidateProfile.Foot}' ${candidateProfile.Inch || 0}"`
//                         : "-"}
//                       , {candidateProfile.Complexion || "-"}
//                     </Text>
//                   </View>
//                   <View style={styles.summaryRow}>
//                     <Text style={styles.summaryLabel}>रक्तगट व गोत्र:</Text>
//                     <Text style={styles.summaryVal}>
//                       {candidateProfile.Bloodgroup || "-"}, गोत्र: {candidateProfile.Gotra || "-"}
//                     </Text>
//                   </View>
//                   <View style={styles.summaryRow}>
//                     <Text style={styles.summaryLabel}>मूळगाव (Hometown):</Text>
//                     <Text style={styles.summaryVal}>
//                       {candidateProfile.Hometown || "-"}, {candidateProfile.Taluka || "-"},{" "}
//                       {candidateProfile.District || "-"}
//                     </Text>
//                   </View>
//                 </View>

//                 {/* 3. Parent & Contacts */}
//                 <View style={styles.summaryCard}>
//                   <View style={styles.summaryCardHeader}>
//                     <Ionicons name="people" size={20} color="#831843" />
//                     <Text style={styles.summaryCardTitle}>पालक व संपर्क (Parent & Contact)</Text>
//                   </View>
//                   <View style={styles.summaryRow}>
//                     <Text style={styles.summaryLabel}>पालकांचे नाव:</Text>
//                     <Text style={styles.summaryVal}>
//                       {candidateProfile.FatherGurdianTitle || ""}{" "}
//                       {candidateProfile.NameOfFatherGuardian || "-"}
//                     </Text>
//                   </View>
//                   <View style={styles.summaryRow}>
//                     <Text style={styles.summaryLabel}>पालकांचा पत्ता:</Text>
//                     <Text style={styles.summaryVal}>{candidateProfile.ParentalAddress || "-"}</Text>
//                   </View>
//                   <View style={styles.summaryRow}>
//                     <Text style={styles.summaryLabel}>संपर्क क्रमांक:</Text>
//                     <Text style={styles.summaryVal}>
//                       {candidateProfile.PersonalMobile ||
//                         candidateProfile.ParentalContactNo1 ||
//                         "-"}
//                     </Text>
//                   </View>
//                 </View>
//               </>
//             )}

//             {/* Important Dates / Guidelines Box */}
//             <View style={styles.infoCard}>
//               <View style={styles.infoCardHeader}>
//                 <Ionicons name="information-circle" size={20} color="#1E40AF" />
//                 <Text style={styles.infoCardTitle}>महत्त्वाच्या सूचना (Important Notice)</Text>
//               </View>
//               <Text style={styles.infoPoint}>
//                 • ३१ ऑक्टोबर पर्यंत सादर झालेली नावे यंदाच्या वधू-वर पुस्तिकेत छापली जातील.
//               </Text>
//               <Text style={styles.infoPoint}>
//                 • ऑनलाइन वधू-वर सूची उमेदवारांच्या अकाऊंटमध्ये वर्षभर उपलब्ध राहील.
//               </Text>
//               <Text style={styles.infoPoint}>
//                 • पुस्तक मिळण्याची संभाव्य तारीख: २५ डिसेंबर.
//               </Text>
//             </View>

//             {/* Logout Button */}
//             <TouchableOpacity
//               style={styles.logoutBtn}
//               onPress={() => {
//                 Alert.alert("Logout", "Do you want to logout?", [
//                   { text: "Cancel", style: "cancel" },
//                   {
//                     text: "Logout",
//                     style: "destructive",
//                     onPress: async () => {
//                       await accountApi.logoutUser(userId, userInfo.LoggedInSessionId);
//                       navigation.replace("Login");
//                     },
//                   },
//                 ]);
//               }}
//               activeOpacity={0.8}
//             >
//               <Ionicons
//                 name="log-out-outline"
//                 size={18}
//                 color="#DC2626"
//                 style={{ marginRight: 6 }}
//               />
//               <Text style={styles.logoutBtnText}>लॉगआउट (Logout)</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </ScrollView>

//       {/* Persistent Bottom Navigation Bar */}
//       <BottomNavBar />
//     </SafeAreaView>
//   );
// }

// // ---------------------------------------------------------------
// // STYLES - Registration Steps timeline
// // ---------------------------------------------------------------
// const rs = StyleSheet.create({
//   card: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 16,
//     padding: 16,
//     marginBottom: 14,
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOpacity: 0.06,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//   },
//   headingRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   heading: { fontSize: 16, fontWeight: "800", color: "#0F172A" },
//   updatedText: { fontSize: 10.5, color: "#94A3B8", marginTop: 2, marginBottom: 12 },
//   liveWrap: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 5,
//     backgroundColor: "#ECFDF5",
//     paddingHorizontal: 8,
//     paddingVertical: 3,
//     borderRadius: 10,
//   },
//   liveDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: "#10B981" },
//   liveText: { fontSize: 10.5, fontWeight: "700", color: "#059669" },
//   rowWrap: { marginBottom: 10 },
//   line: {
//     position: "absolute",
//     left: 29,
//     top: 46,
//     bottom: -22,
//     width: 2,
//     backgroundColor: "#E5E7EB",
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 12,
//     padding: 12,
//     borderRadius: 12,
//     borderWidth: 1,
//   },
//   rowDone: { backgroundColor: "#F0FDF9", borderColor: "#D1FAE5" },
//   rowCurrent: { backgroundColor: "#F3F7FF", borderColor: "#BFDBFE" },
//   rowPending: { backgroundColor: "#F9FAFB", borderColor: "#E5E7EB" },
//   circle: {
//     width: 34,
//     height: 34,
//     borderRadius: 17,
//     backgroundColor: "#E5E7EB",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   circleDone: { backgroundColor: "#D1FAE5" },
//   circleCurrent: { backgroundColor: "#DBEAFE" },
//   circleText: { fontSize: 13, fontWeight: "700", color: "#6B7280" },
//   title: { fontSize: 14, fontWeight: "700", color: "#475569" },
//   sub: { fontSize: 11, color: "#94A3B8", marginTop: 2 },
//   doneBadge: {
//     paddingHorizontal: 10,
//     paddingVertical: 3,
//     borderRadius: 12,
//     backgroundColor: "#ECFDF5",
//     borderWidth: 1,
//     borderColor: "#A7F3D0",
//   },
//   doneBadgeText: { fontSize: 11, fontWeight: "700", color: "#059669" },
// });

// // ---------------------------------------------------------------
// // STYLES - Dashboard
// // ---------------------------------------------------------------
// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: "#831843" },
//   container: { padding: 16, backgroundColor: "#F3F4F6", flexGrow: 1, paddingBottom: 24 },

//   // Header Card
//   headerCard: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 14,
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOpacity: 0.06,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//   },
//   mandalRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 6,
//     marginBottom: 12,
//     paddingBottom: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: "#F1F5F9",
//   },
//   mandalText: { fontSize: 12, fontWeight: "700", color: "#831843", flex: 1 },
//   headerMainRow: { flexDirection: "row", alignItems: "center", gap: 12 },
//   avatarImg: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     borderWidth: 2,
//     borderColor: "#831843",
//   },
//   avatarCircle: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: "#FCE7F3",
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 2,
//     borderColor: "#F472B6",
//   },
//   avatarInitials: { fontSize: 24, fontWeight: "800", color: "#831843" },
//   headerTextWrap: { flex: 1 },
//   userNameText: { fontSize: 17, fontWeight: "800", color: "#1E293B" },
//   userMarathiText: { fontSize: 14, color: "#64748B", marginTop: 1 },
//   badgeRow: { flexDirection: "row", gap: 6, marginTop: 6, flexWrap: "wrap" },
//   typeBadge: {
//     backgroundColor: "#FCE7F3",
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 6,
//   },
//   typeBadgeText: { color: "#9D174D", fontSize: 11, fontWeight: "700" },
//   appNoBadge: {
//     backgroundColor: "#E2E8F0",
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 6,
//   },
//   appNoBadgeText: { color: "#334155", fontSize: 11, fontWeight: "700" },

//   // Loading
//   loadingCard: { padding: 30, alignItems: "center", justifyContent: "center" },
//   loadingText: { marginTop: 10, color: "#64748B", fontSize: 14 },

//   // Status Card
//   card: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 14,
//     borderWidth: 1,
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//   },
//   cardSubmitted: { borderColor: "#86EFAC", backgroundColor: "#F0FDF4" },
//   cardVerified: { borderColor: "#93C5FD", backgroundColor: "#EFF6FF" },
//   cardPending: { borderColor: "#FCD34D", backgroundColor: "#FFFBEB" },
//   statusHeaderRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 10,
//     marginBottom: 10,
//   },
//   statusIconWrap: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: "#FFFFFF",
//     alignItems: "center",
//     justifyContent: "center",
//     elevation: 1,
//   },
//   statusTitle: { fontSize: 14.5, fontWeight: "800", color: "#1E293B" },
//   statusSub: { fontSize: 11.5, color: "#475569", marginTop: 2 },
//   statusDetailsBox: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 8,
//     padding: 10,
//     gap: 4,
//     marginVertical: 10,
//     borderWidth: 1,
//     borderColor: "#E2E8F0",
//   },
//   statusDetailRow: { flexDirection: "row", justifyContent: "space-between", gap: 8 },
//   statusDetailLabel: { fontSize: 11.5, color: "#64748B", fontWeight: "600" },
//   statusDetailValue: { fontSize: 11.5, fontWeight: "700", color: "#1E293B" },
//   statusCommentValue: { flex: 1, textAlign: "right" },
//   primaryActionBtn: {
//     backgroundColor: "#831843",
//     height: 44,
//     borderRadius: 8,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 6,
//   },
//   viewProfileBtn: { backgroundColor: "#166534" },
//   primaryActionBtnText: { color: "#FFFFFF", fontSize: 13.5, fontWeight: "700" },

//   // Section Headers & Summary Cards
//   sectionHeader: {
//     fontSize: 14,
//     fontWeight: "800",
//     color: "#334155",
//     marginBottom: 8,
//     marginLeft: 2,
//   },
//   summaryCard: {
//     backgroundColor: "#FFFFFF",
//     borderRadius: 10,
//     padding: 14,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: "#E2E8F0",
//   },
//   summaryCardHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 6,
//     marginBottom: 8,
//     paddingBottom: 6,
//     borderBottomWidth: 1,
//     borderBottomColor: "#F1F5F9",
//   },
//   summaryCardTitle: { fontSize: 13, fontWeight: "700", color: "#831843" },
//   summaryRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 3,
//   },
//   summaryLabel: { fontSize: 12, color: "#64748B", fontWeight: "500" },
//   summaryVal: {
//     fontSize: 12,
//     fontWeight: "600",
//     color: "#1E293B",
//     maxWidth: "60%",
//     textAlign: "right",
//   },

//   // Info Card
//   infoCard: {
//     backgroundColor: "#EFF6FF",
//     borderRadius: 10,
//     padding: 14,
//     marginBottom: 14,
//     borderWidth: 1,
//     borderColor: "#BFDBFE",
//   },
//   infoCardHeader: { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 6 },
//   infoCardTitle: { fontSize: 13, fontWeight: "700", color: "#1E40AF" },
//   infoPoint: { fontSize: 11.5, color: "#1E3A8A", lineHeight: 17, marginTop: 2 },

//   // Logout
//   logoutBtn: {
//     height: 44,
//     borderWidth: 1,
//     borderColor: "#EF4444",
//     borderRadius: 8,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#FEF2F2",
//     marginBottom: 10,
//   },
//   logoutBtnText: { color: "#DC2626", fontSize: 13.5, fontWeight: "700" },
// });





import React, { useState, useEffect, useCallback, useRef } from "react";
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
  AppState,
  Linking,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient"; // npx expo install expo-linear-gradient
import { Ionicons } from "@expo/vector-icons";
import accountApi from "../api/accountApi";
import registrationApi from "../api/registrationApi";
import { getAuthUserId } from "../api/apiClient";
import {
  normalizeCandidateType,
  getCandidateTypeLabel,
  extractCandidateTypeValue,
} from "../api/candidateTypeHelper";
import BottomNavBar from "../components/BottomNavBar";

const POLL_INTERVAL_MS = 30000;

// ---------------------------------------------------------------
// STATIC CONTENT (verify against your web app - read from screenshots)
// ---------------------------------------------------------------
const UPCOMING_EVENT = {
  title: "Samta Matrimony Melava",
  date: "22 नोव्हेंबर 2026 (१० ते ४)",
  venue: "सातेरा नगर, ग्रामीण पुणे, पिंपरी चिंचवड (पिंपरी विभाग).",
};

const MANAGERS = [
  {
    heading: "Your Dedicated Relationship Manager",
    name: "Nirmalkishor Waykole",
    contact: "9823091141",
    email: "samatabhratrumandal@gmail.com",
    help: "Profile Final Approval or Suchi Correction related issues, Change Technical Help or Approval Help",
     photo: null,
  },
  {
    heading: "Your Admin Relationship Manager",
    name: "Raghunath Shankar Pegade",
    contact: "9922020700",
    email: "samatabhratrumandal@gmail.com",
    help: "Profile Initial Verification or Suchi Correction related issues",
    photo: null,
  },
];

// ---------------------------------------------------------------
// STEPS
// ---------------------------------------------------------------
const STEPS = [
  { id: 1, title: "Basic Details" },
  { id: 2, title: "Qualification & Employment" },
  { id: 3, title: "Personal Details" },
  { id: 4, title: "Expectation & Parent Details" },
  { id: 5, title: "Submitted for Verification" },
  { id: 6, title: "Verified", pendingText: "Waiting for Admin Approval" },
  { id: 7, title: "Approved / Ready to Print", pendingText: "Pending step" },
];

// !! Adjust field names/values to match your API (V / A / IsVerified / IsApproved are guesses) !!
const getCompletedUpTo = (p) => {
  if (!p) return 0;
  const status = p.ApplicationFormStatusApplicationRound;
  if (status === "A" || p.IsApproved) return 7;
  if (status === "V" || p.IsVerified) return 6;
  if (status === "S" || Number(p.StepID) === 5) return 5;
  return Math.min(Math.max(Number(p.StepID) || 0, 0), 4);
};

// ---------------------------------------------------------------
// SMALL COMPONENTS
// ---------------------------------------------------------------
function RegistrationSteps({ done, lastUpdated, isLive, onStepPress }) {
  const currentId = Math.min(done + 1, 8);
  return (
    <View style={s.card}>
      <View style={s.rowBetween}>
        <Text style={s.cardTitle}>Registration Steps</Text>
        {isLive && (
          <View style={s.liveWrap}>
            <View style={s.liveDot} />
            <Text style={s.liveText}>Live</Text>
          </View>
        )}
      </View>
      {lastUpdated ? <Text style={s.updated}>Updated {lastUpdated}</Text> : <View style={{ height: 10 }} />}

      {STEPS.map((step, index) => {
        const state = step.id <= done ? "done" : step.id === currentId ? "current" : "pending";
        const isLast = index === STEPS.length - 1;
        const canOpen = step.id <= 5 && (state === "done" || state === "current");
        const sub =
          state === "done"
            ? "Completed"
            : state === "current"
            ? step.id <= 5
              ? "In progress - tap to continue"
              : step.pendingText
            : step.pendingText || "Pending step";

        return (
          <View key={step.id} style={{ marginBottom: 10 }}>
            {!isLast && (
              <View style={[s.line, state === "done" && { backgroundColor: "#A7F3D0" }]} />
            )}
            <TouchableOpacity
              disabled={!canOpen}
              activeOpacity={0.8}
              onPress={() => onStepPress(step.id)}
              style={[
                s.stepRow,
                state === "done" && s.stepDone,
                state === "current" && s.stepCurrent,
                state === "pending" && s.stepPending,
              ]}
            >
              <View
                style={[
                  s.circle,
                  state === "done" && { backgroundColor: "#D1FAE5" },
                  state === "current" && { backgroundColor: "#DBEAFE" },
                ]}
              >
                {state === "done" ? (
                  <Ionicons name="checkmark" size={16} color="#059669" />
                ) : (
                  <Text style={[s.circleText, state === "current" && { color: "#2563EB" }]}>
                    {step.id}
                  </Text>
                )}
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    s.stepTitle,
                    state === "done" && { color: "#064E3B" },
                    state === "current" && { color: "#1E3A8A" },
                  ]}
                >
                  {step.title}
                </Text>
                <Text style={s.stepSub}>{sub}</Text>
              </View>
              {state === "done" && (
                <View style={s.doneBadge}>
                  <Text style={s.doneBadgeText}>Done</Text>
                </View>
              )}
              {canOpen && <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

function SummaryRow({ icon, label, value, valueColor }) {
  return (
    <View style={s.sumRow}>
      <View style={s.sumIcon}>
        <Ionicons name={icon} size={13} color="#94A3B8" />
      </View>
      <Text style={s.sumLabel}>{label}</Text>
      <Text style={[s.sumValue, valueColor && { color: valueColor }]}>{value}</Text>
    </View>
  );
}

function ManagerCard({ m }) {
  return (
    <View style={s.mgrCard}>
      <View style={s.mgrTop}>
        {m.photo ? (
          <Image source={{ uri: m.photo }} style={s.mgrPhoto} />
        ) : (
          <View style={[s.mgrPhoto, s.mgrPhotoFallback]}>
            <Text style={s.mgrInitial}>{m.name[0]}</Text>
          </View>
        )}
        <View style={{ flex: 1 }}>
          <Text style={s.mgrHeading}>{m.heading}</Text>
          <Text style={s.mgrLine}>Name: <Text style={s.mgrBold}>{m.name}</Text></Text>
          <TouchableOpacity onPress={() => Linking.openURL(`tel:${m.contact}`)}>
            <Text style={s.mgrLine}>Contact: <Text style={[s.mgrBold, s.mgrLink]}>{m.contact}</Text></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(`mailto:${m.email}`)}>
            <Text style={s.mgrLine}>Email: <Text style={[s.mgrBold, s.mgrLink]}>{m.email}</Text></Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={s.mgrHelpBox}>
        <Text style={s.mgrHelp}>
          <Text style={{ fontWeight: "700" }}>How Can I Help You: </Text>
          {m.help}
        </Text>
      </View>
    </View>
  );
}

// ---------------------------------------------------------------
// SCREEN
// ---------------------------------------------------------------
export default function DashboardScreen({ navigation, route }) {
  const userInfo = route.params?.userInfo || {};
  const [candidateId, setCandidateId] = useState(
    Number(route.params?.candidateId ?? userInfo.CandidateId ?? 0)
  );
  const userId = Number(route.params?.userId ?? userInfo.UserId ?? getAuthUserId() ?? 0);

  const [candidateProfile, setCandidateProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");

  const mountedRef = useRef(true);
  const fetchingRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const loadDashboardData = useCallback(async () => {
    if (!userId || userId <= 0) {
      setLoading(false);
      setRefreshing(false);
      return;
    }
    if (fetchingRef.current) return;
    fetchingRef.current = true;

    try {
      let candidateRecord = null;
      try {
        candidateRecord = await registrationApi.getCandidate(userId);
      } catch (e) {
        console.log("Dashboard getCandidate notice:", e.message);
      }
      const profile = await registrationApi.getCandidateProfile(userId);
      if (!mountedRef.current) return;

      const merged = {
        ...(candidateRecord || {}),
        ...(profile || {}),
        CandidateType:
          extractCandidateTypeValue(candidateRecord) || extractCandidateTypeValue(profile) || "",
      };

      if (profile || candidateRecord) {
        setCandidateProfile(merged);
        setLastUpdated(new Date().toLocaleTimeString());
        const id = Number(candidateRecord?.CandidateId || profile?.CandidateId || 0);
        if (id > 0) setCandidateId(id);
      } else {
        const id = await registrationApi.getCandidateId(userId);
        if (mountedRef.current && id > 0) setCandidateId(id);
      }
    } catch (e) {
      console.log("Dashboard data notice:", e.message);
    } finally {
      fetchingRef.current = false;
      if (mountedRef.current) {
        setLoading(false);
        setRefreshing(false);
      }
    }
  }, [userId]);

  // LIVE 1: on focus
  useFocusEffect(
    useCallback(() => {
      loadDashboardData();
    }, [loadDashboardData])
  );

  // LIVE 2: on app resume
  useEffect(() => {
    const sub = AppState.addEventListener("change", (st) => {
      if (st === "active") loadDashboardData();
    });
    return () => sub.remove();
  }, [loadDashboardData]);

  // LIVE 3: poll while waiting on admin
  const done = getCompletedUpTo(candidateProfile);
  const waitingOnAdmin = done >= 5 && done < 7;
  useEffect(() => {
    if (!waitingOnAdmin) return;
    const t = setInterval(loadDashboardData, POLL_INTERVAL_MS);
    return () => clearInterval(t);
  }, [waitingOnAdmin, loadDashboardData]);

  const onRefresh = () => {
    setRefreshing(true);
    loadDashboardData();
  };

  const doLogout = async () => {
    await accountApi.logoutUser(userId, userInfo.LoggedInSessionId);
    navigation.replace("Login");
  };

  useFocusEffect(
    useCallback(() => {
      const onBack = () => {
        Alert.alert("Logout", "Do you want to logout?", [
          { text: "Cancel", style: "cancel" },
          { text: "Yes", onPress: doLogout },
        ]);
        return true;
      };
      const sub = BackHandler.addEventListener("hardwareBackPress", onBack);
      return () => sub.remove();
    }, [userId, userInfo])
  );

  const isSubmitted = done >= 5;
  const isApproved = done >= 7;

  const handleOpenSuchi = (stepToOpen = null) => {
    const candidateType = normalizeCandidateType(extractCandidateTypeValue(candidateProfile));
    navigation.navigate("SuchiBooking", {
      candidateId: candidateId || candidateProfile?.CandidateId || 0,
      userId,
      candidateType: candidateType || "",
      applicationNo: candidateId > 0 ? `P${candidateId}` : "New",
      currentUser: { ...userInfo, ...candidateProfile },
      isSubmitted,
      openStep: stepToOpen || (isSubmitted ? 5 : Math.max(done + 1, 1)),
    });
  };

  // Derived display values
  const fullName = candidateProfile?.FirstName
    ? `${candidateProfile.FirstName} ${candidateProfile.MiddleName || ""} ${candidateProfile.LastName || ""}`
        .replace(/\s+/g, " ")
        .trim()
    : userInfo.UserName || userInfo.FirstName || "Candidate User";

  const candidateTypeDisplay = getCandidateTypeLabel(extractCandidateTypeValue(candidateProfile));
  const appNo =
    candidateProfile?.ApplicationFormNo || (candidateId > 0 ? `P${candidateId}` : "Under Generation");

  const verificationLabel = isApproved
    ? "Approved"
    : done >= 6
    ? "Verified - awaiting approval"
    : isSubmitted
    ? "Waiting for Approval"
    : "Incomplete";
  const verificationColor = isApproved ? "#16A34A" : isSubmitted ? "#EA580C" : "#D97706";

  const completionPct = Math.round((Math.min(done, 5) / 5) * 100);

  const photoSource = candidateProfile?.PhotoBase64
    ? { uri: `data:image/jpeg;base64,${candidateProfile.PhotoBase64}` }
    : candidateProfile?.PhotofilePath
    ? { uri: candidateProfile.PhotofilePath }
    : null;

  const mobile = candidateProfile?.PersonalMobile || candidateProfile?.ParentalContactNo1 || "-";

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView
        contentContainerStyle={s.container}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {/* Welcome banner */}
        <LinearGradient
          colors={["#2563EB", "#06B6D4"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={s.banner}
        >
          <View style={{ flex: 1 }}>
            <Text style={s.bannerHello}>Welcome Back,</Text>
            <Text style={s.bannerName} numberOfLines={2}>{fullName}</Text>
            <View style={s.bannerBadges}>
              <View style={s.idPill}>
                <Text style={s.idPillText}>ID: {appNo}</Text>
              </View>
              <View style={s.statusPill}>
                <Text style={s.statusPillText}>{verificationLabel}</Text>
              </View>
            </View>
          </View>
          <View style={s.typeBox}>
            <Text style={s.typeBoxValue}>{candidateTypeDisplay}</Text>
            <Text style={s.typeBoxLabel}>Candidate Type</Text>
          </View>
        </LinearGradient>

        {loading ? (
          <View style={{ padding: 30, alignItems: "center" }}>
            <ActivityIndicator size="large" color="#2563EB" />
            <Text style={{ marginTop: 10, color: "#64748B" }}>Loading Dashboard Data...</Text>
          </View>
        ) : (
          <>
            {/* Profile completion */}
            <View style={s.card}>
              <View style={s.rowBetween}>
                <View style={{ flex: 1, paddingRight: 10 }}>
                  <Text style={s.cardTitle}>Profile Completion</Text>
                  <Text style={s.muted}>
                    {completionPct >= 100
                      ? "Your profile is complete. Nothing further is needed from you."
                      : "Complete all steps to submit your profile for verification."}
                  </Text>
                </View>
                <Text style={s.pct}>{completionPct}%</Text>
              </View>
              <View style={s.track}>
                <LinearGradient
                  colors={["#2563EB", "#06B6D4"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={[s.fill, { width: `${completionPct}%` }]}
                />
              </View>
              {!isSubmitted && (
                <TouchableOpacity style={s.primaryBtn} onPress={() => handleOpenSuchi()} activeOpacity={0.85}>
                  <Text style={s.primaryBtnText}>Complete Registration</Text>
                </TouchableOpacity>
              )}
              {isSubmitted && (
                <TouchableOpacity style={s.outlineBtn} onPress={() => handleOpenSuchi(5)} activeOpacity={0.85}>
                  <Ionicons name="eye-outline" size={16} color="#2563EB" style={{ marginRight: 6 }} />
                  <Text style={s.outlineBtnText}>View Application</Text>
                </TouchableOpacity>
              )}
            </View>

            {/* Registration steps (live) */}
            <RegistrationSteps
              done={done}
              lastUpdated={lastUpdated}
              isLive={waitingOnAdmin}
              onStepPress={(id) => handleOpenSuchi(id)}
            />

            {/* Photo card */}
            <View style={[s.card, { alignItems: "center" }]}>
              {photoSource ? (
                <Image source={photoSource} style={s.photo} />
              ) : (
                <View style={[s.photo, s.photoFallback]}>
                  <Ionicons name="person-outline" size={44} color="#94A3B8" />
                </View>
              )}
              <Text style={s.photoName}>{fullName}</Text>
              <Text style={s.muted}>Candidate Profile Photo</Text>
            </View>

            {/* Account summary */}
            <View style={s.card}>
              <Text style={s.cardTitle}>Account Summary</Text>
              <SummaryRow icon="document-text-outline" label="Application No." value={appNo} />
              <SummaryRow
                icon="time-outline"
                label="Verification Status"
                value={verificationLabel}
                valueColor={verificationColor}
              />
              <SummaryRow icon="ribbon-outline" label="Membership" value="Active Candidate" />
              <SummaryRow
                icon="print-outline"
                label="Printed in Suchi"
                value={isApproved && candidateProfile?.IsPrinted ? "Yes" : "No"}
              />
              {!isApproved && (
                <View style={s.noteBox}>
                  <Ionicons name="information-circle-outline" size={14} color="#64748B" />
                  <Text style={s.noteText}>
                    Your profile will appear in the Suchi / Android app once approved.
                  </Text>
                </View>
              )}
            </View>

            {/* Personal details */}
            <View style={s.card}>
              <Text style={s.cardTitle}>Personal Details</Text>
              <View style={s.detailChip}>
                <Text style={s.detailChipLabel}>Mobile No.</Text>
                <Text style={s.detailChipValue}>{mobile}</Text>
              </View>
            </View>

            {/* Upcoming event */}
            <View style={[s.card, s.eventCard]}>
              <View style={s.rowStart}>
                <Ionicons name="calendar-outline" size={16} color="#1E40AF" />
                <Text style={[s.cardTitle, { marginLeft: 6, marginBottom: 0 }]}>Upcoming Event</Text>
              </View>
              <Text style={s.eventTitle}>{UPCOMING_EVENT.title}</Text>
              <View style={s.rowStart}>
                <Ionicons name="time-outline" size={13} color="#2563EB" />
                <Text style={s.eventLine}>{UPCOMING_EVENT.date}</Text>
              </View>
              <View style={s.rowStart}>
                <Ionicons name="location-outline" size={13} color="#2563EB" />
                <Text style={[s.eventLine, { flex: 1 }]}>{UPCOMING_EVENT.venue}</Text>
              </View>
            </View>

            {/* Important notices */}
            <View style={s.card}>
              <View style={[s.rowStart, { marginBottom: 10 }]}>
                <Ionicons name="notifications-outline" size={16} color="#334155" />
                <Text style={[s.cardTitle, { marginLeft: 6, marginBottom: 0 }]}>Important Notices</Text>
              </View>
              <View style={s.noticeBlue}>
                <Text style={s.noticeTitle}>Profile Verification</Text>
                <Text style={s.noticeText}>
                  Your profile will be reviewed, verified and approved by our technical team prior to
                  publishing in Suchi Book or online.
                </Text>
              </View>
              <View style={s.noticeAmber}>
                <Text style={[s.noticeTitle, { color: "#B45309" }]}>Registration Renewal</Text>
                <Text style={[s.noticeText, { color: "#92400E" }]}>
                  Account registration is valid for the current academic cycle. Reminders are sent
                  before reset.
                </Text>
              </View>
            </View>

            {/* Relationship managers */}
            <View style={s.mgrWrap}>
              <LinearGradient
                colors={["#F97316", "#D97706"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={s.mgrHeader}
              >
                <Text style={s.mgrHeaderText}>Exclusive Account Relationship Manager</Text>
              </LinearGradient>
              <View style={{ padding: 10, gap: 10 }}>
                {MANAGERS.map((m) => (
                  <ManagerCard key={m.name} m={m} />
                ))}
                <View style={s.mgrNote}>
                  <Text style={s.noticeTitle}>Note:</Text>
                  <Text style={s.mgrNoteText}>
                    • On this date, your account will be automatically deactivated or reset so that if
                    you wish to register again next year then please log in and submit it again for
                    verification.
                  </Text>
                  <Text style={s.mgrNoteText}>• We will also send you reminders to re-register for next year.</Text>
                </View>
              </View>
            </View>

            {/* Logout */}
            <TouchableOpacity
              style={s.logoutBtn}
              activeOpacity={0.8}
              onPress={() =>
                Alert.alert("Logout", "Do you want to logout?", [
                  { text: "Cancel", style: "cancel" },
                  { text: "Logout", style: "destructive", onPress: doLogout },
                ])
              }
            >
              <Ionicons name="log-out-outline" size={18} color="#DC2626" style={{ marginRight: 6 }} />
              <Text style={s.logoutText}>लॉगआउट (Logout)</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>

      <BottomNavBar />
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------
// STYLES
// ---------------------------------------------------------------
const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F97316" },
  container: { padding: 14, backgroundColor: "#F1F5F9", flexGrow: 1, paddingBottom: 24 },

  // Banner
  banner: {
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  bannerHello: { color: "#DBEAFE", fontSize: 12 },
  bannerName: { color: "#FFFFFF", fontSize: 19, fontWeight: "800", marginTop: 2 },
  bannerBadges: { flexDirection: "row", gap: 6, marginTop: 8, flexWrap: "wrap" },
  idPill: { backgroundColor: "rgba(255,255,255,0.25)", paddingHorizontal: 9, paddingVertical: 3, borderRadius: 10 },
  idPillText: { color: "#FFFFFF", fontSize: 10.5, fontWeight: "700" },
  statusPill: { backgroundColor: "#FFFFFF", paddingHorizontal: 9, paddingVertical: 3, borderRadius: 10 },
  statusPillText: { color: "#1E3A8A", fontSize: 10.5, fontWeight: "700" },
  typeBox: {
    minWidth: 62,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
  },
  typeBoxValue: { color: "#FFFFFF", fontSize: 14, fontWeight: "800" },
  typeBoxLabel: { color: "#E0F2FE", fontSize: 8, marginTop: 2 },

  // Generic card
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardTitle: { fontSize: 15, fontWeight: "800", color: "#0F172A", marginBottom: 2 },
  muted: { fontSize: 11, color: "#94A3B8" },
  rowBetween: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  rowStart: { flexDirection: "row", alignItems: "center", gap: 5, marginTop: 4 },

  // Completion
  pct: { fontSize: 22, fontWeight: "800", color: "#0EA5E9" },
  track: { height: 6, borderRadius: 3, backgroundColor: "#E2E8F0", marginTop: 12, overflow: "hidden" },
  fill: { height: 6, borderRadius: 3 },
  primaryBtn: {
    backgroundColor: "#2563EB",
    height: 42,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  primaryBtnText: { color: "#FFFFFF", fontWeight: "700", fontSize: 13.5 },
  outlineBtn: {
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#BFDBFE",
    backgroundColor: "#EFF6FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  outlineBtnText: { color: "#2563EB", fontWeight: "700", fontSize: 13 },

  // Steps
  updated: { fontSize: 10.5, color: "#94A3B8", marginTop: 2, marginBottom: 12 },
  liveWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#ECFDF5",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  liveDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: "#10B981" },
  liveText: { fontSize: 10.5, fontWeight: "700", color: "#059669" },
  line: { position: "absolute", left: 29, top: 46, bottom: -22, width: 2, backgroundColor: "#E5E7EB" },
  stepRow: { flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderRadius: 12, borderWidth: 1 },
  stepDone: { backgroundColor: "#F0FDF9", borderColor: "#D1FAE5" },
  stepCurrent: { backgroundColor: "#F3F7FF", borderColor: "#BFDBFE" },
  stepPending: { backgroundColor: "#F9FAFB", borderColor: "#E5E7EB" },
  circle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
  },
  circleText: { fontSize: 13, fontWeight: "700", color: "#6B7280" },
  stepTitle: { fontSize: 14, fontWeight: "700", color: "#475569" },
  stepSub: { fontSize: 11, color: "#94A3B8", marginTop: 2 },
  doneBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    backgroundColor: "#ECFDF5",
    borderWidth: 1,
    borderColor: "#A7F3D0",
  },
  doneBadgeText: { fontSize: 11, fontWeight: "700", color: "#059669" },

  // Photo
  photo: { width: 110, height: 110, borderRadius: 18, marginBottom: 10 },
  photoFallback: { backgroundColor: "#F1F5F9", alignItems: "center", justifyContent: "center" },
  photoName: { fontSize: 13, fontWeight: "700", color: "#1E293B", textAlign: "center" },

  // Account summary
  sumRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  sumIcon: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  sumLabel: { flex: 1, fontSize: 12, color: "#64748B" },
  sumValue: { fontSize: 12, fontWeight: "700", color: "#1E293B", maxWidth: "55%", textAlign: "right" },
  noteBox: {
    flexDirection: "row",
    gap: 6,
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
  noteText: { flex: 1, fontSize: 11, color: "#64748B" },

  // Personal details
  detailChip: {
    alignSelf: "flex-start",
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginTop: 8,
  },
  detailChipLabel: { fontSize: 10, color: "#94A3B8" },
  detailChipValue: { fontSize: 13, fontWeight: "700", color: "#1E293B", marginTop: 1 },

  // Event
  eventCard: { backgroundColor: "#EFF6FF", borderColor: "#DBEAFE" },
  eventTitle: { fontSize: 14, fontWeight: "700", color: "#1E293B", marginVertical: 6 },
  eventLine: { fontSize: 12, color: "#334155", marginLeft: 2 },

  // Notices
  noticeBlue: {
    backgroundColor: "#EFF6FF",
    borderWidth: 1,
    borderColor: "#BFDBFE",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  noticeAmber: {
    backgroundColor: "#FFFBEB",
    borderWidth: 1,
    borderColor: "#FDE68A",
    borderRadius: 10,
    padding: 12,
  },
  noticeTitle: { fontSize: 12, fontWeight: "700", color: "#1E40AF", marginBottom: 3 },
  noticeText: { fontSize: 11.5, color: "#1E3A8A", lineHeight: 17 },

  // Managers
  mgrWrap: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    overflow: "hidden",
    marginBottom: 12,
  },
  mgrHeader: { paddingVertical: 10, paddingHorizontal: 14 },
  mgrHeaderText: { color: "#FFFFFF", fontWeight: "800", fontSize: 13 },
  mgrCard: { borderWidth: 1, borderColor: "#E2E8F0", borderRadius: 10, padding: 10 },
  mgrTop: { flexDirection: "row", gap: 10 },
  mgrPhoto: { width: 52, height: 52, borderRadius: 26 },
  mgrPhotoFallback: { backgroundColor: "#E0E7FF", alignItems: "center", justifyContent: "center" },
  mgrInitial: { fontSize: 20, fontWeight: "800", color: "#4338CA" },
  mgrHeading: { fontSize: 13, fontWeight: "800", color: "#0F172A", marginBottom: 3 },
  mgrLine: { fontSize: 11.5, color: "#475569", marginTop: 1 },
  mgrBold: { fontWeight: "700", color: "#1E293B" },
  mgrLink: { color: "#2563EB" },
  mgrHelpBox: { borderTopWidth: 1, borderTopColor: "#F1F5F9", marginTop: 8, paddingTop: 8 },
  mgrHelp: { fontSize: 11, color: "#7C3AED", lineHeight: 16 },
  mgrNote: { borderWidth: 1, borderColor: "#E2E8F0", borderRadius: 10, padding: 10 },
  mgrNoteText: { fontSize: 11, color: "#334155", lineHeight: 16, marginTop: 3 },

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
  logoutText: { color: "#DC2626", fontSize: 13.5, fontWeight: "700" },
});