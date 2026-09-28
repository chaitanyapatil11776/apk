// // import React, { useState, useEffect } from "react";
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TouchableOpacity,
// //   ScrollView,
// //   SafeAreaView,
// //   StatusBar,
// //   Alert,
// // } from "react-native";
// // import { Ionicons } from "@expo/vector-icons";
// // import registrationApi from "../api/registrationApi";
// // import { getAuthUserId } from "../api/apiClient";

// // import Step1 from "./steps/Step1";
// // import Step2 from "./steps/Step2";
// // import Step3 from "./steps/Step3";
// // import Step4 from "./steps/Step4";
// // import Step5 from "./steps/Step5";

// // const STEPS = [
// //   { id: 1, title: "मूलभूत माहिती", sub: "Basic Details", icon: "person" },
// //   { id: 2, title: "शिक्षण व नोकरी", sub: "Qualification", icon: "school" },
// //   { id: 3, title: "वैयक्तिक माहिती", sub: "Personal", icon: "finger-print" },
// //   { id: 4, title: "अपेक्षा व पालक", sub: "Expectations", icon: "heart" },
// //   { id: 5, title: "पडताळणी सादर", sub: "Submit", icon: "checkmark-done-circle" },
// // ];

// // export default function SuchiBookingScreen({ navigation, route }) {
// //   const params = route?.params || {};
// //   const currentUser = params?.currentUser || params?.userInfo || {};

// //   // -------------------------------------------------------------
// //   // CANDIDATE ID & CONTEXT
// //   // -------------------------------------------------------------
// //   const initialCandidateId = Number(
// //     params?.candidateId ??
// //       params?.CandidateId ??
// //       currentUser?.CandidateId ??
// //       0
// //   );

// //   const [candidateId, setCandidateId] = useState(initialCandidateId);
// //   const [candidateType, setCandidateType] = useState(
// //     params?.candidateType ||
// //       (currentUser?.UserTypeCode === "candidate" ? "Bride" : "Bride")
// //   );

// //   const [currentStep, setCurrentStep] = useState(1);
// //   const [maxReachedStep, setMaxReachedStep] = useState(initialCandidateId > 0 ? 5 : 1);
// //   const [wizardData, setWizardData] = useState({});
// //   const [isSubmitted, setIsSubmitted] = useState(false);

// //   const userId = Number(params?.userId || currentUser?.UserId || getAuthUserId() || 0);

// //   // Auto-resolve candidateId and submission status from API
// //   useEffect(() => {
// //     if (userId > 0) {
// //       (async () => {
// //         try {
// //           const profile = await registrationApi.getCandidateProfile(userId);
// //           if (profile) {
// //             const status = profile.ApplicationFormStatusApplicationRound;
// //             const stepId = profile.StepID;
// //             if (status === "S" || stepId === 5) {
// //               console.log("Candidate profile is SUBMITTED for verification (status: S, stepId: 5)");
// //               setIsSubmitted(true);
// //               setMaxReachedStep(5);
// //             }
// //             if (profile.CandidateId && candidateId <= 0) {
// //               setCandidateId(Number(profile.CandidateId));
// //             }
// //             if (profile.CandidateType) {
// //               setCandidateType(profile.CandidateType);
// //             }
// //           } else if (candidateId <= 0) {
// //             const resolvedId = await registrationApi.getCandidateId(userId);
// //             if (resolvedId > 0) {
// //               setCandidateId(resolvedId);
// //               setMaxReachedStep(5);
// //             }
// //           }
// //         } catch (e) {
// //           console.log("Could not auto-resolve candidate status:", e.message);
// //         }
// //       })();
// //     }
// //   }, [userId]);

// //   const applicationNo = candidateId > 0 ? `P${candidateId}` : "New";

// //   // -------------------------------------------------------------
// //   // STEP NAVIGATION
// //   // -------------------------------------------------------------
// //   const handleStep1Next = (newId) => {
// //     if (newId && Number(newId) > 0) {
// //       setCandidateId(Number(newId));
// //     }
// //     setMaxReachedStep((prev) => Math.max(prev, 2));
// //     setCurrentStep(2);
// //   };

// //   const handleStep2Next = () => {
// //     setMaxReachedStep((prev) => Math.max(prev, 3));
// //     setCurrentStep(3);
// //   };

// //   const handleStep3Next = () => {
// //     setMaxReachedStep((prev) => Math.max(prev, 4));
// //     setCurrentStep(4);
// //   };

// //   const handleStep4Next = () => {
// //     setMaxReachedStep((prev) => Math.max(prev, 5));
// //     setCurrentStep(5);
// //   };

// //   const handleStep5Complete = () => {
// //     navigation.navigate("Dashboard", {
// //       candidateId: candidateId,
// //       userId: userId,
// //       refresh: true,
// //     });
// //   };

// //   const handleTabPress = (stepId) => {
// //     // Only allow navigating to steps that were already unlocked or reached
// //     if (stepId <= maxReachedStep || candidateId > 0 || isSubmitted) {
// //       setCurrentStep(stepId);
// //     } else {
// //       Alert.alert(
// //         "Complete Step First",
// //         `कृपया आधी पायरी ${stepId - 1} ची माहिती पूर्ण भरा आणि सेव्ह करा.`
// //       );
// //     }
// //   };

// //   // -------------------------------------------------------------
// //   // RENDER CURRENT STEP
// //   // -------------------------------------------------------------
// //   const renderCurrentStep = () => {
// //     switch (currentStep) {
// //       case 1:
// //         return (
// //           <Step1
// //             data={wizardData}
// //             setData={setWizardData}
// //             onNext={handleStep1Next}
// //             candidateId={candidateId}
// //             setCandidateId={setCandidateId}
// //             candidateType={candidateType}
// //             setCandidateType={setCandidateType}
// //             applicationNo={applicationNo}
// //             currentUser={currentUser}
// //             isSubmitted={isSubmitted}
// //           />
// //         );
// //       case 2:
// //         return (
// //           <Step2
// //             data={wizardData}
// //             setData={setWizardData}
// //             onNext={handleStep2Next}
// //             onBack={() => setCurrentStep(1)}
// //             candidateId={candidateId}
// //             applicationNo={applicationNo}
// //             currentUser={currentUser}
// //             isSubmitted={isSubmitted}
// //           />
// //         );
// //       case 3:
// //         return (
// //           <Step3
// //             data={wizardData}
// //             setData={setWizardData}
// //             onNext={handleStep3Next}
// //             onBack={() => setCurrentStep(2)}
// //             candidateId={candidateId}
// //             applicationNo={applicationNo}
// //             currentUser={currentUser}
// //             isSubmitted={isSubmitted}
// //           />
// //         );
// //       case 4:
// //         return (
// //           <Step4
// //             data={wizardData}
// //             setData={setWizardData}
// //             onNext={handleStep4Next}
// //             onBack={() => setCurrentStep(3)}
// //             candidateId={candidateId}
// //             applicationNo={applicationNo}
// //             currentUser={currentUser}
// //             isSubmitted={isSubmitted}
// //           />
// //         );
// //       case 5:
// //         return (
// //           <Step5
// //             data={wizardData}
// //             candidateId={candidateId}
// //             applicationNo={applicationNo}
// //             currentUser={currentUser}
// //             onBack={() => setCurrentStep(4)}
// //             onComplete={handleStep5Complete}
// //             isSubmitted={isSubmitted}
// //           />
// //         );
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <SafeAreaView style={styles.safeArea}>
// //       <StatusBar barStyle="light-content" backgroundColor="#831843" />

// //       {/* Top Bar with Back and Candidate Info */}
// //       <View style={styles.topBar}>
// //         <TouchableOpacity
// //           style={styles.backIconBtn}
// //           onPress={() => navigation.goBack()}
// //           activeOpacity={0.7}
// //         >
// //           <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
// //         </TouchableOpacity>

// //         <View style={styles.candidatePill}>
// //           <Text style={styles.candidateNameText} numberOfLines={1}>
// //             {currentUser?.UserName || wizardData?.firstName || "New Candidate"}
// //           </Text>
// //           <View style={styles.typeBadge}>
// //             <Text style={styles.typeBadgeText}>
// //               {candidateType === "Bride" || candidateType === "वधू"
// //                 ? "वधू | Bride"
// //                 : "वर | Groom"}
// //             </Text>
// //           </View>
// //         </View>

// //         <View style={styles.appNoBadge}>
// //           <Text style={styles.appNoBadgeText}>{applicationNo}</Text>
// //         </View>
// //       </View>

// //       {/* Stepper Tabs Bar */}
// //       <View style={styles.stepperWrap}>
// //         <ScrollView
// //           horizontal
// //           showsHorizontalScrollIndicator={false}
// //           contentContainerStyle={styles.stepperScroll}
// //         >
// //           {STEPS.map((s) => {
// //             const isActive = s.id === currentStep;
// //             const isCompleted = s.id < currentStep || (candidateId > 0 && s.id < maxReachedStep);
// //             const isAccessible = s.id <= maxReachedStep || candidateId > 0;

// //             return (
// //               <TouchableOpacity
// //                 key={s.id}
// //                 style={[
// //                   styles.stepTab,
// //                   isActive && styles.stepTabActive,
// //                   !isAccessible && styles.stepTabDisabled,
// //                 ]}
// //                 onPress={() => handleTabPress(s.id)}
// //                 activeOpacity={0.8}
// //               >
// //                 <View
// //                   style={[
// //                     styles.stepCircle,
// //                     isActive && styles.stepCircleActive,
// //                     isCompleted && styles.stepCircleCompleted,
// //                   ]}
// //                 >
// //                   {isCompleted && !isActive ? (
// //                     <Ionicons name="checkmark" size={13} color="#FFFFFF" />
// //                   ) : (
// //                     <Text
// //                       style={[
// //                         styles.stepCircleNum,
// //                         (isActive || isCompleted) && styles.stepCircleNumActive,
// //                       ]}
// //                     >
// //                       {s.id}
// //                     </Text>
// //                   )}
// //                 </View>

// //                 <View style={styles.stepTextWrap}>
// //                   <Text
// //                     style={[styles.stepTitle, isActive && styles.stepTitleActive]}
// //                     numberOfLines={1}
// //                   >
// //                     {s.title}
// //                   </Text>
// //                   <Text
// //                     style={[styles.stepSub, isActive && styles.stepSubActive]}
// //                     numberOfLines={1}
// //                   >
// //                     {s.sub}
// //                   </Text>
// //                 </View>
// //               </TouchableOpacity>
// //             );
// //           })}
// //         </ScrollView>
// //       </View>

// //       {/* Main Step Content */}
// //       <View style={styles.contentWrap}>{renderCurrentStep()}</View>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   safeArea: {
// //     flex: 1,
// //     backgroundColor: "#831843",
// //   },
// //   topBar: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     paddingHorizontal: 12,
// //     paddingVertical: 10,
// //     backgroundColor: "#831843",
// //     gap: 8,
// //   },
// //   backIconBtn: {
// //     padding: 6,
// //     borderRadius: 8,
// //     backgroundColor: "rgba(255,255,255,0.15)",
// //   },
// //   candidatePill: {
// //     flex: 1,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     backgroundColor: "rgba(255,255,255,0.12)",
// //     borderRadius: 20,
// //     paddingHorizontal: 12,
// //     paddingVertical: 6,
// //     justifyContent: "space-between",
// //   },
// //   candidateNameText: {
// //     color: "#FFFFFF",
// //     fontSize: 13.5,
// //     fontWeight: "700",
// //     flex: 1,
// //     marginRight: 6,
// //   },
// //   typeBadge: {
// //     backgroundColor: "#FCE7F3",
// //     paddingHorizontal: 8,
// //     paddingVertical: 2,
// //     borderRadius: 12,
// //   },
// //   typeBadgeText: {
// //     color: "#831843",
// //     fontSize: 10.5,
// //     fontWeight: "800",
// //   },
// //   appNoBadge: {
// //     backgroundColor: "#BE185D",
// //     paddingHorizontal: 8,
// //     paddingVertical: 6,
// //     borderRadius: 8,
// //   },
// //   appNoBadgeText: {
// //     color: "#FFFFFF",
// //     fontSize: 11,
// //     fontWeight: "800",
// //   },
// //   stepperWrap: {
// //     backgroundColor: "#FFFFFF",
// //     borderBottomWidth: 1,
// //     borderBottomColor: "#E2E8F0",
// //     elevation: 3,
// //     shadowColor: "#000",
// //     shadowOpacity: 0.05,
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowRadius: 3,
// //   },
// //   stepperScroll: {
// //     flexDirection: "row",
// //     paddingHorizontal: 8,
// //     paddingVertical: 6,
// //     gap: 6,
// //   },
// //   stepTab: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     paddingHorizontal: 10,
// //     paddingVertical: 6,
// //     borderRadius: 8,
// //     backgroundColor: "#F8FAFC",
// //     borderWidth: 1,
// //     borderColor: "#E2E8F0",
// //   },
// //   stepTabActive: {
// //     backgroundColor: "#FDF2F8",
// //     borderColor: "#831843",
// //   },
// //   stepTabDisabled: {
// //     opacity: 0.5,
// //   },
// //   stepCircle: {
// //     width: 22,
// //     height: 22,
// //     borderRadius: 11,
// //     backgroundColor: "#E2E8F0",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginRight: 7,
// //   },
// //   stepCircleActive: {
// //     backgroundColor: "#831843",
// //   },
// //   stepCircleCompleted: {
// //     backgroundColor: "#16A34A",
// //   },
// //   stepCircleNum: {
// //     fontSize: 11,
// //     fontWeight: "700",
// //     color: "#64748B",
// //   },
// //   stepCircleNumActive: {
// //     color: "#FFFFFF",
// //   },
// //   stepTextWrap: {
// //     justifyContent: "center",
// //   },
// //   stepTitle: {
// //     fontSize: 11.5,
// //     fontWeight: "700",
// //     color: "#334155",
// //   },
// //   stepTitleActive: {
// //     color: "#831843",
// //   },
// //   stepSub: {
// //     fontSize: 9,
// //     color: "#64748B",
// //   },
// //   stepSubActive: {
// //     color: "#9D174D",
// //     fontWeight: "600",
// //   },
// //   contentWrap: {
// //     flex: 1,
// //     backgroundColor: "#F8FAFC",
// //   },
// // });



// // ll
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
//   StatusBar,
//   Alert,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import registrationApi from "../api/registrationApi";
// import { getAuthUserId } from "../api/apiClient";

// import Step1 from "./steps/Step1";
// import Step2 from "./steps/Step2";
// import Step3 from "./steps/Step3";
// import Step4 from "./steps/Step4";
// import Step5 from "./steps/Step5";

// const STEPS = [
//   { id: 1, title: "मूलभूत माहिती", sub: "Basic Details", icon: "person" },
//   { id: 2, title: "शिक्षण व नोकरी", sub: "Qualification", icon: "school" },
//   { id: 3, title: "वैयक्तिक माहिती", sub: "Personal", icon: "finger-print" },
//   { id: 4, title: "अपेक्षा व पालक", sub: "Expectations", icon: "heart" },
//   { id: 5, title: "पडताळणी सादर", sub: "Submit", icon: "checkmark-done-circle" },
// ];

// export default function SuchiBookingScreen({ navigation, route }) {
//   const params = route?.params || {};
//   const currentUser = params?.currentUser || params?.userInfo || {};

//   // -------------------------------------------------------------
//   // CANDIDATE ID & CONTEXT
//   // -------------------------------------------------------------
//   const initialCandidateId = Number(
//     params?.candidateId ??
//       params?.CandidateId ??
//       currentUser?.CandidateId ??
//       0
//   );

//   const [candidateId, setCandidateId] = useState(initialCandidateId);
//   const [candidateType, setCandidateType] = useState(
//     params?.candidateType || currentUser?.CandidateType || ""
//   );

//   const [currentStep, setCurrentStep] = useState(1);
//   const [maxReachedStep, setMaxReachedStep] = useState(initialCandidateId > 0 ? 5 : 1);
//   const [wizardData, setWizardData] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const userId = Number(params?.userId || currentUser?.UserId || getAuthUserId() || 0);

//   // Auto-resolve candidateId and submission status from API
//   useEffect(() => {
//     if (userId > 0) {
//       (async () => {
//         try {
//           const profile = await registrationApi.getCandidateProfile(userId);
//           if (profile) {
//             const status = profile.ApplicationFormStatusApplicationRound;
//             const stepId = profile.StepID;
//             if (status === "S" || stepId === 5) {
//               console.log("Candidate profile is SUBMITTED for verification (status: S, stepId: 5)");
//               setIsSubmitted(true);
//               setMaxReachedStep(5);
//             }
//             if (profile.CandidateId && candidateId <= 0) {
//               setCandidateId(Number(profile.CandidateId));
//             }
//             if (profile.CandidateType) {
//               const savedType = String(profile.CandidateType).trim();
//               setCandidateType(savedType);
//               setWizardData((prev) => ({
//                 ...prev,
//                 candidateType: savedType,
//               }));
//             }
//             if (profile.CandidateId) {
//               try {
//                 const basic = await registrationApi.getBasicDetails(Number(profile.CandidateId));
//                 if (basic?.CandidateType) {
//                   const savedType = String(basic.CandidateType).trim();
//                   setCandidateType(savedType);
//                   setWizardData((prev) => ({
//                     ...prev,
//                     candidateType: savedType,
//                   }));
//                 }
//               } catch (basicErr) {
//                 console.log("Could not load candidate basic details:", basicErr.message);
//               }
//             }
//           } else if (candidateId <= 0) {
//             const resolvedId = await registrationApi.getCandidateId(userId);
//             if (resolvedId > 0) {
//               setCandidateId(resolvedId);
//               setMaxReachedStep(5);
//             }
//           }
//         } catch (e) {
//           console.log("Could not auto-resolve candidate status:", e.message);
//         }
//       })();
//     }
//   }, [userId]);

//   const applicationNo = candidateId > 0 ? `P${candidateId}` : "New";

//   // -------------------------------------------------------------
//   // STEP NAVIGATION
//   // -------------------------------------------------------------
//   const handleStep1Next = (newId) => {
//     if (newId && Number(newId) > 0) {
//       setCandidateId(Number(newId));
//     }
//     setMaxReachedStep((prev) => Math.max(prev, 2));
//     setCurrentStep(2);
//   };

//   const handleStep2Next = () => {
//     setMaxReachedStep((prev) => Math.max(prev, 3));
//     setCurrentStep(3);
//   };

//   const handleStep3Next = () => {
//     setMaxReachedStep((prev) => Math.max(prev, 4));
//     setCurrentStep(4);
//   };

//   const handleStep4Next = () => {
//     setMaxReachedStep((prev) => Math.max(prev, 5));
//     setCurrentStep(5);
//   };

//   const handleStep5Complete = () => {
//     navigation.navigate("Dashboard", {
//       candidateId: candidateId,
//       userId: userId,
//       refresh: true,
//     });
//   };

//   const handleTabPress = (stepId) => {
//     // Only allow navigating to steps that were already unlocked or reached
//     if (stepId <= maxReachedStep || candidateId > 0 || isSubmitted) {
//       setCurrentStep(stepId);
//     } else {
//       Alert.alert(
//         "Complete Step First",
//         `कृपया आधी पायरी ${stepId - 1} ची माहिती पूर्ण भरा आणि सेव्ह करा.`
//       );
//     }
//   };

//   // -------------------------------------------------------------
//   // RENDER CURRENT STEP
//   // -------------------------------------------------------------
//   const renderCurrentStep = () => {
//     switch (currentStep) {
//       case 1:
//         return (
//           <Step1
//             data={wizardData}
//             setData={setWizardData}
//             onNext={handleStep1Next}
//             candidateId={candidateId}
//             setCandidateId={setCandidateId}
//             candidateType={candidateType}
//             setCandidateType={setCandidateType}
//             applicationNo={applicationNo}
//             currentUser={currentUser}
//             isSubmitted={isSubmitted}
//           />
//         );
//       case 2:
//         return (
//           <Step2
//             data={wizardData}
//             setData={setWizardData}
//             onNext={handleStep2Next}
//             onBack={() => setCurrentStep(1)}
//             candidateId={candidateId}
//             applicationNo={applicationNo}
//             currentUser={currentUser}
//             isSubmitted={isSubmitted}
//           />
//         );
//       case 3:
//         return (
//           <Step3
//             data={wizardData}
//             setData={setWizardData}
//             onNext={handleStep3Next}
//             onBack={() => setCurrentStep(2)}
//             candidateId={candidateId}
//             applicationNo={applicationNo}
//             currentUser={currentUser}
//             isSubmitted={isSubmitted}
//           />
//         );
//       case 4:
//         return (
//           <Step4
//             data={wizardData}
//             setData={setWizardData}
//             onNext={handleStep4Next}
//             onBack={() => setCurrentStep(3)}
//             candidateId={candidateId}
//             applicationNo={applicationNo}
//             currentUser={currentUser}
//             isSubmitted={isSubmitted}
//           />
//         );
//       case 5:
//         return (
//           <Step5
//             data={wizardData}
//             candidateId={candidateId}
//             applicationNo={applicationNo}
//             currentUser={currentUser}
//             onBack={() => setCurrentStep(4)}
//             onComplete={handleStep5Complete}
//             isSubmitted={isSubmitted}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar barStyle="light-content" backgroundColor="#831843" />

//       {/* Top Bar with Back and Candidate Info */}
//       <View style={styles.topBar}>
//         <TouchableOpacity
//           style={styles.backIconBtn}
//           onPress={() => navigation.goBack()}
//           activeOpacity={0.7}
//         >
//           <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
//         </TouchableOpacity>

//         <View style={styles.candidatePill}>
//           <Text style={styles.candidateNameText} numberOfLines={1}>
//             {currentUser?.UserName || wizardData?.firstName || "New Candidate"}
//           </Text>
//           <View style={styles.typeBadge}>
//             <Text style={styles.typeBadgeText}>
//               {{
//                 Bride: "वधू | Bride",
//                 "वधू": "वधू | Bride",
//                 Groom: "वर | Groom",
//                 "वर": "वर | Groom",
//                 Widow: "विधवा | Widow",
//                 "विधवा": "विधवा | Widow",
//                 Widower: "विधुर | Widower",
//                 "विधुर": "विधुर | Widower",
//                 DivorcedBride: "घटस्फोटीत वधू | Divorced Bride",
//                 "Divorced Bride": "घटस्फोटीत वधू | Divorced Bride",
//                 DivorcedGroom: "घटस्फोटीत वर | Divorced Groom",
//                 "Divorced Groom": "घटस्फोटीत वर | Divorced Groom",
//               }[candidateType] || "Candidate Type Not Selected"}
//             </Text>
//           </View>
//         </View>

//         <View style={styles.appNoBadge}>
//           <Text style={styles.appNoBadgeText}>{applicationNo}</Text>
//         </View>
//       </View>

//       {/* Stepper Tabs Bar */}
//       <View style={styles.stepperWrap}>
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.stepperScroll}
//         >
//           {STEPS.map((s) => {
//             const isActive = s.id === currentStep;
//             const isCompleted = s.id < currentStep || (candidateId > 0 && s.id < maxReachedStep);
//             const isAccessible = s.id <= maxReachedStep || candidateId > 0;

//             return (
//               <TouchableOpacity
//                 key={s.id}
//                 style={[
//                   styles.stepTab,
//                   isActive && styles.stepTabActive,
//                   !isAccessible && styles.stepTabDisabled,
//                 ]}
//                 onPress={() => handleTabPress(s.id)}
//                 activeOpacity={0.8}
//               >
//                 <View
//                   style={[
//                     styles.stepCircle,
//                     isActive && styles.stepCircleActive,
//                     isCompleted && styles.stepCircleCompleted,
//                   ]}
//                 >
//                   {isCompleted && !isActive ? (
//                     <Ionicons name="checkmark" size={13} color="#FFFFFF" />
//                   ) : (
//                     <Text
//                       style={[
//                         styles.stepCircleNum,
//                         (isActive || isCompleted) && styles.stepCircleNumActive,
//                       ]}
//                     >
//                       {s.id}
//                     </Text>
//                   )}
//                 </View>

//                 <View style={styles.stepTextWrap}>
//                   <Text
//                     style={[styles.stepTitle, isActive && styles.stepTitleActive]}
//                     numberOfLines={1}
//                   >
//                     {s.title}
//                   </Text>
//                   <Text
//                     style={[styles.stepSub, isActive && styles.stepSubActive]}
//                     numberOfLines={1}
//                   >
//                     {s.sub}
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             );
//           })}
//         </ScrollView>
//       </View>

//       {/* Main Step Content */}
//       <View style={styles.contentWrap}>{renderCurrentStep()}</View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#831843",
//   },
//   topBar: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//     backgroundColor: "#831843",
//     gap: 8,
//   },
//   backIconBtn: {
//     padding: 6,
//     borderRadius: 8,
//     backgroundColor: "rgba(255,255,255,0.15)",
//   },
//   candidatePill: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "rgba(255,255,255,0.12)",
//     borderRadius: 20,
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     justifyContent: "space-between",
//   },
//   candidateNameText: {
//     color: "#FFFFFF",
//     fontSize: 13.5,
//     fontWeight: "700",
//     flex: 1,
//     marginRight: 6,
//   },
//   typeBadge: {
//     backgroundColor: "#FCE7F3",
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 12,
//   },
//   typeBadgeText: {
//     color: "#831843",
//     fontSize: 10.5,
//     fontWeight: "800",
//   },
//   appNoBadge: {
//     backgroundColor: "#BE185D",
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 8,
//   },
//   appNoBadgeText: {
//     color: "#FFFFFF",
//     fontSize: 11,
//     fontWeight: "800",
//   },
//   stepperWrap: {
//     backgroundColor: "#FFFFFF",
//     borderBottomWidth: 1,
//     borderBottomColor: "#E2E8F0",
//     elevation: 3,
//     shadowColor: "#000",
//     shadowOpacity: 0.05,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 3,
//   },
//   stepperScroll: {
//     flexDirection: "row",
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     gap: 6,
//   },
//   stepTab: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 8,
//     backgroundColor: "#F8FAFC",
//     borderWidth: 1,
//     borderColor: "#E2E8F0",
//   },
//   stepTabActive: {
//     backgroundColor: "#FDF2F8",
//     borderColor: "#831843",
//   },
//   stepTabDisabled: {
//     opacity: 0.5,
//   },
//   stepCircle: {
//     width: 22,
//     height: 22,
//     borderRadius: 11,
//     backgroundColor: "#E2E8F0",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 7,
//   },
//   stepCircleActive: {
//     backgroundColor: "#831843",
//   },
//   stepCircleCompleted: {
//     backgroundColor: "#16A34A",
//   },
//   stepCircleNum: {
//     fontSize: 11,
//     fontWeight: "700",
//     color: "#64748B",
//   },
//   stepCircleNumActive: {
//     color: "#FFFFFF",
//   },
//   stepTextWrap: {
//     justifyContent: "center",
//   },
//   stepTitle: {
//     fontSize: 11.5,
//     fontWeight: "700",
//     color: "#334155",
//   },
//   stepTitleActive: {
//     color: "#831843",
//   },
//   stepSub: {
//     fontSize: 9,
//     color: "#64748B",
//   },
//   stepSubActive: {
//     color: "#9D174D",
//     fontWeight: "600",
//   },
//   contentWrap: {
//     flex: 1,
//     backgroundColor: "#F8FAFC",
//   },
// });




import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import registrationApi from "../api/registrationApi";
import { getAuthUserId } from "../api/apiClient";
import {
  normalizeCandidateType,
  getCandidateTypeLabel,
  extractCandidateTypeValue,
} from "../api/candidateTypeHelper";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";

const STEPS = [
  { id: 1, title: "मूलभूत माहिती", sub: "Basic Details", icon: "person" },
  { id: 2, title: "शिक्षण व नोकरी", sub: "Qualification", icon: "school" },
  { id: 3, title: "वैयक्तिक माहिती", sub: "Personal", icon: "finger-print" },
  { id: 4, title: "अपेक्षा व पालक", sub: "Expectations", icon: "heart" },
  { id: 5, title: "पडताळणी सादर", sub: "Submit", icon: "checkmark-done-circle" },
];

export default function SuchiBookingScreen({ navigation, route }) {
  const params = route?.params || {};
  const currentUser = params?.currentUser || params?.userInfo || {};

  const applyCandidateType = (rawType, source) => {
    const normalized = normalizeCandidateType(rawType);
    if (!normalized) return false;

    console.log(
      `[SuchiBooking] CandidateType from ${source}:`,
      rawType,
      "=>",
      normalized
    );

    setCandidateType(normalized);
    setWizardData((prev) => ({
      ...prev,
      candidateType: normalized,
    }));

    return true;
  };

  // -------------------------------------------------------------
  // CANDIDATE ID & CONTEXT
  // -------------------------------------------------------------
  const initialCandidateId = Number(
    params?.candidateId ??
      params?.CandidateId ??
      currentUser?.CandidateId ??
      0
  );

  const [candidateId, setCandidateId] = useState(initialCandidateId);
  const [candidateType, setCandidateType] = useState(
    normalizeCandidateType(params?.candidateType || "")
  );

  const [currentStep, setCurrentStep] = useState(1);
  const [maxReachedStep, setMaxReachedStep] = useState(initialCandidateId > 0 ? 5 : 1);
  const [wizardData, setWizardData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const userId = Number(params?.userId || currentUser?.UserId || getAuthUserId() || 0);

  // Trace the exact flow:
  // 1. Get logged-in UserId.
  // 2. Call GET /api/registration/GetCandidate to resolve the actual candidate data.
  // Then fetch BasicDetails and Profile for submission status.
  useEffect(() => {
    if (userId <= 0) return;

    let cancelled = false;

    (async () => {
      try {
        console.log(`[SuchiBooking] Step 1: Logged-in UserId: ${userId}`);

        let resolvedCandidateId = Number(
          candidateId ||
            params?.candidateId ||
            params?.CandidateId ||
            0
        );

        // Step 2: Call GET /api/registration/GetCandidate
        try {
          const candidateData = await registrationApi.getCandidate(userId);
          if (cancelled) return;
          console.log("[SuchiBooking] Step 2: GetCandidate response:", candidateData);

          if (candidateData) {
            const backendType = extractCandidateTypeValue(candidateData);
            if (backendType) {
              applyCandidateType(backendType, "GetCandidate");
            }

            const cId = Number(
              candidateData.CandidateId || candidateData.candidateId || 0
            );
            if (cId > 0 && resolvedCandidateId <= 0) {
              resolvedCandidateId = cId;
              setCandidateId(cId);
              setMaxReachedStep(5);
            }
          }
        } catch (candErr) {
          console.log("[SuchiBooking] GetCandidate notice:", candErr?.message);
        }

        // Secondary: GetCandidateProfile for submission status & profile info
        try {
          const profile = await registrationApi.getCandidateProfile(userId);
          if (cancelled) return;

          console.log("[SuchiBooking] GetCandidateProfile:", profile);

          if (profile) {
            const status =
              profile.ApplicationFormStatusApplicationRound ??
              profile.applicationFormStatusApplicationRound;
            const stepId = Number(profile.StepID ?? profile.stepId ?? 0);

            if (status === "S" || stepId === 5) {
              setIsSubmitted(true);
              setMaxReachedStep(5);
            }

            const profCandidateId = Number(
              profile.CandidateId || profile.candidateId || 0
            );
            if (profCandidateId > 0 && resolvedCandidateId <= 0) {
              resolvedCandidateId = profCandidateId;
              setCandidateId(resolvedCandidateId);
            }

            const profileType = extractCandidateTypeValue(profile);
            if (profileType) {
              applyCandidateType(profileType, "GetCandidateProfile");
            }
          }
        } catch (profErr) {
          console.log("[SuchiBooking] GetCandidateProfile notice:", profErr?.message);
        }

        if (resolvedCandidateId <= 0) {
          const resolvedId = await registrationApi.getCandidateId(userId);

          if (!cancelled && Number(resolvedId) > 0) {
            resolvedCandidateId = Number(resolvedId);
            setCandidateId(resolvedCandidateId);
            setMaxReachedStep(5);
          }
        }

        // Candidate-specific basic details check
        if (resolvedCandidateId > 0) {
          try {
            const basic = await registrationApi.getBasicDetails(
              resolvedCandidateId
            );

            if (cancelled) return;

            console.log("[SuchiBooking] GetBasicDetails:", basic);

            const basicType = extractCandidateTypeValue(basic);

            if (basicType) {
              applyCandidateType(basicType, "GetBasicDetails");
            }
          } catch (basicErr) {
            console.log(
              "[SuchiBooking] Could not load candidate basic details:",
              basicErr?.message
            );
          }
        }
      } catch (e) {
        console.log(
          "[SuchiBooking] Could not auto-resolve candidate profile:",
          e?.message
        );
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [userId]);


  const applicationNo = candidateId > 0 ? `P${candidateId}` : "New";

  // -------------------------------------------------------------
  // STEP NAVIGATION
  // -------------------------------------------------------------
  const handleStep1Next = (newId) => {
    if (newId && Number(newId) > 0) {
      setCandidateId(Number(newId));
    }
    setMaxReachedStep((prev) => Math.max(prev, 2));
    setCurrentStep(2);
  };

  const handleStep2Next = () => {
    setMaxReachedStep((prev) => Math.max(prev, 3));
    setCurrentStep(3);
  };

  const handleStep3Next = () => {
    setMaxReachedStep((prev) => Math.max(prev, 4));
    setCurrentStep(4);
  };

  const handleStep4Next = () => {
    setMaxReachedStep((prev) => Math.max(prev, 5));
    setCurrentStep(5);
  };

  const handleStep5Complete = () => {
    navigation.navigate("Dashboard", {
      candidateId: candidateId,
      userId: userId,
      refresh: true,
    });
  };

  const handleTabPress = (stepId) => {
    // Only allow navigating to steps that were already unlocked or reached
    if (stepId <= maxReachedStep || candidateId > 0 || isSubmitted) {
      setCurrentStep(stepId);
    } else {
      Alert.alert(
        "Complete Step First",
        `कृपया आधी पायरी ${stepId - 1} ची माहिती पूर्ण भरा आणि सेव्ह करा.`
      );
    }
  };

  // -------------------------------------------------------------
  // RENDER CURRENT STEP
  // -------------------------------------------------------------
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            data={wizardData}
            setData={setWizardData}
            onNext={handleStep1Next}
            candidateId={candidateId}
            setCandidateId={setCandidateId}
            candidateType={candidateType}
            setCandidateType={setCandidateType}
            applicationNo={applicationNo}
            currentUser={currentUser}
            isSubmitted={isSubmitted}
          />
        );
      case 2:
        return (
          <Step2
            data={wizardData}
            setData={setWizardData}
            onNext={handleStep2Next}
            onBack={() => setCurrentStep(1)}
            candidateId={candidateId}
            applicationNo={applicationNo}
            currentUser={currentUser}
            isSubmitted={isSubmitted}
          />
        );
      case 3:
        return (
          <Step3
            data={wizardData}
            setData={setWizardData}
            onNext={handleStep3Next}
            onBack={() => setCurrentStep(2)}
            candidateId={candidateId}
            applicationNo={applicationNo}
            currentUser={currentUser}
            candidateType={candidateType}
            isSubmitted={isSubmitted}
          />
        );
      case 4:
        return (
          <Step4
            data={wizardData}
            setData={setWizardData}
            onNext={handleStep4Next}
            onBack={() => setCurrentStep(3)}
            candidateId={candidateId}
            applicationNo={applicationNo}
            currentUser={currentUser}
            isSubmitted={isSubmitted}
          />
        );
      case 5:
        return (
          <Step5
            data={wizardData}
            candidateId={candidateId}
            applicationNo={applicationNo}
            currentUser={currentUser}
            onBack={() => setCurrentStep(4)}
            onComplete={handleStep5Complete}
            isSubmitted={isSubmitted}
          />
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#831843" />

      {/* Top Bar with Back and Candidate Info */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backIconBtn}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
        </TouchableOpacity>

        <View style={styles.candidatePill}>
          <Text style={styles.candidateNameText} numberOfLines={1}>
            {currentUser?.UserName || wizardData?.firstName || "New Candidate"}
          </Text>
          <View style={styles.typeBadge}>
            <Text style={styles.typeBadgeText}>
              {getCandidateTypeLabel(candidateType)}
            </Text>
          </View>
        </View>

        <View style={styles.appNoBadge}>
          <Text style={styles.appNoBadgeText}>{applicationNo}</Text>
        </View>
      </View>

      {/* Stepper Tabs Bar */}
      <View style={styles.stepperWrap}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.stepperScroll}
        >
          {STEPS.map((s) => {
            const isActive = s.id === currentStep;
            const isCompleted = s.id < currentStep || (candidateId > 0 && s.id < maxReachedStep);
            const isAccessible = s.id <= maxReachedStep || candidateId > 0;

            return (
              <TouchableOpacity
                key={s.id}
                style={[
                  styles.stepTab,
                  isActive && styles.stepTabActive,
                  !isAccessible && styles.stepTabDisabled,
                ]}
                onPress={() => handleTabPress(s.id)}
                activeOpacity={0.8}
              >
                <View
                  style={[
                    styles.stepCircle,
                    isActive && styles.stepCircleActive,
                    isCompleted && styles.stepCircleCompleted,
                  ]}
                >
                  {isCompleted && !isActive ? (
                    <Ionicons name="checkmark" size={13} color="#FFFFFF" />
                  ) : (
                    <Text
                      style={[
                        styles.stepCircleNum,
                        (isActive || isCompleted) && styles.stepCircleNumActive,
                      ]}
                    >
                      {s.id}
                    </Text>
                  )}
                </View>

                <View style={styles.stepTextWrap}>
                  <Text
                    style={[styles.stepTitle, isActive && styles.stepTitleActive]}
                    numberOfLines={1}
                  >
                    {s.title}
                  </Text>
                  <Text
                    style={[styles.stepSub, isActive && styles.stepSubActive]}
                    numberOfLines={1}
                  >
                    {s.sub}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Main Step Content */}
      <View style={styles.contentWrap}>{renderCurrentStep()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#831843",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#831843",
    gap: 8,
  },
  backIconBtn: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  candidatePill: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: "space-between",
  },
  candidateNameText: {
    color: "#FFFFFF",
    fontSize: 13.5,
    fontWeight: "700",
    flex: 1,
    marginRight: 6,
  },
  typeBadge: {
    backgroundColor: "#FCE7F3",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  typeBadgeText: {
    color: "#831843",
    fontSize: 10.5,
    fontWeight: "800",
  },
  appNoBadge: {
    backgroundColor: "#BE185D",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
  },
  appNoBadgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "800",
  },
  stepperWrap: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  stepperScroll: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 6,
    gap: 6,
  },
  stepTab: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  stepTabActive: {
    backgroundColor: "#FDF2F8",
    borderColor: "#831843",
  },
  stepTabDisabled: {
    opacity: 0.5,
  },
  stepCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },
  stepCircleActive: {
    backgroundColor: "#831843",
  },
  stepCircleCompleted: {
    backgroundColor: "#16A34A",
  },
  stepCircleNum: {
    fontSize: 11,
    fontWeight: "700",
    color: "#64748B",
  },
  stepCircleNumActive: {
    color: "#FFFFFF",
  },
  stepTextWrap: {
    justifyContent: "center",
  },
  stepTitle: {
    fontSize: 11.5,
    fontWeight: "700",
    color: "#334155",
  },
  stepTitleActive: {
    color: "#831843",
  },
  stepSub: {
    fontSize: 9,
    color: "#64748B",
  },
  stepSubActive: {
    color: "#9D174D",
    fontWeight: "600",
  },
  contentWrap: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
});