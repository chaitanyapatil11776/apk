// // // // // // // // // import React, { useState } from "react";
// // // // // // // // // import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // // // // import { SafeAreaView } from "react-native-safe-area-context";
// // // // // // // // // import { LinearGradient } from "expo-linear-gradient";

// // // // // // // // // import Step1 from "./steps/Step1";
// // // // // // // // // import Step2 from "./steps/Step2";
// // // // // // // // // import Step3 from "./steps/Step3";
// // // // // // // // // import Step4 from "./steps/Step4";

// // // // // // // // // export default function SuchiBookingScreen() {
// // // // // // // // //   const [step, setStep] = useState(1);

// // // // // // // // //   // ✅ FULL FORM DATA (Added all missing Step 1 fields)
// // // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // // //     // Step1 (English)
// // // // // // // // //     firstName: "",
// // // // // // // // //     middleName: "",
// // // // // // // // //     lastName: "",
// // // // // // // // //     birthName: "",
// // // // // // // // //     birthNameEn: "",
// // // // // // // // //     candidateType: "",
    
// // // // // // // // //     // Step1 (Marathi)
// // // // // // // // //     firstNameMr: "",
// // // // // // // // //     middleNameMr: "",
// // // // // // // // //     lastNameMr: "",
// // // // // // // // //     marathiNote: "",

// // // // // // // // //     // Step1 (Media)
// // // // // // // // //     photo: null,

// // // // // // // // //     // Step2
// // // // // // // // //     dob: "",
// // // // // // // // //     mobile: "",

// // // // // // // // //     // Step3
// // // // // // // // //     education: "",
// // // // // // // // //     company: "",

// // // // // // // // //     // Step4
// // // // // // // // //     expectations: "",
// // // // // // // // //     fatherName: "",
// // // // // // // // //   });

// // // // // // // // //   // ✅ VALIDATION FUNCTION
// // // // // // // // //   const validate = () => {
// // // // // // // // //     // 🔴 STEP 1 VALIDATION (ALL FIELDS REQUIRED)
// // // // // // // // //     if (step === 1) {
// // // // // // // // //       if (
// // // // // // // // //         !formData.firstName ||
// // // // // // // // //         !formData.middleName ||
// // // // // // // // //         !formData.lastName ||
// // // // // // // // //         !formData.firstNameMr ||
// // // // // // // // //         !formData.middleNameMr ||
// // // // // // // // //         !formData.lastNameMr ||
// // // // // // // // //         !formData.birthName ||
// // // // // // // // //         !formData.birthNameEn ||
// // // // // // // // //         !formData.candidateType ||
// // // // // // // // //         !formData.marathiNote ||
// // // // // // // // //         !formData.photo
// // // // // // // // //       ) {
// // // // // // // // //         Alert.alert("Error", "Please fill all fields and upload a photo in Step 1 to proceed.");
// // // // // // // // //         return false;
// // // // // // // // //       }
// // // // // // // // //     }

// // // // // // // // //     // 🔴 STEP 2
// // // // // // // // //     if (step === 2) {
// // // // // // // // //       if (!formData.dob || !formData.mobile) {
// // // // // // // // //         Alert.alert("Error", "Fill all Step 2 fields");
// // // // // // // // //         return false;
// // // // // // // // //       }
// // // // // // // // //     }

// // // // // // // // //     // 🔴 STEP 3
// // // // // // // // //     if (step === 3) {
// // // // // // // // //       if (!formData.education || !formData.company) {
// // // // // // // // //         Alert.alert("Error", "Fill all Step 3 fields");
// // // // // // // // //         return false;
// // // // // // // // //       }
// // // // // // // // //     }

// // // // // // // // //     // 🔴 STEP 4
// // // // // // // // //     if (step === 4) {
// // // // // // // // //       if (!formData.expectations || !formData.fatherName) {
// // // // // // // // //         Alert.alert("Error", "Fill all Step 4 fields");
// // // // // // // // //         return false;
// // // // // // // // //       }
// // // // // // // // //     }

// // // // // // // // //     return true;
// // // // // // // // //   };

// // // // // // // // //   // ✅ NEXT BUTTON
// // // // // // // // //   const next = () => {
// // // // // // // // //     if (!validate()) return;

// // // // // // // // //     if (step < 4) {
// // // // // // // // //       setStep(step + 1);
// // // // // // // // //     } else {
// // // // // // // // //       Alert.alert("Success", "Form Submitted Successfully 🎉");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // ✅ PREVIOUS BUTTON
// // // // // // // // //   const prev = () => {
// // // // // // // // //     if (step > 1) setStep(step - 1);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <SafeAreaView style={styles.container}>
      
// // // // // // // // //       {/* HEADER */}
// // // // // // // // //       <LinearGradient colors={["#f97316", "#fb923c"]} style={styles.header}>
// // // // // // // // //         <Text style={styles.title}>Suchi Booking</Text>
// // // // // // // // //         <Text style={styles.sub}>Step {step} of 4</Text>
// // // // // // // // //       </LinearGradient>

// // // // // // // // //       {/* FORM */}
// // // // // // // // //       <View style={{ flex: 1, padding: 16 }}>
// // // // // // // // //         {step === 1 && <Step1 data={formData} setData={setFormData} />}
// // // // // // // // //         {step === 2 && <Step2 data={formData} setData={setFormData} />}
// // // // // // // // //         {step === 3 && <Step3 data={formData} setData={setFormData} />}
// // // // // // // // //         {step === 4 && <Step4 data={formData} setData={setFormData} />}
// // // // // // // // //       </View>

// // // // // // // // //       {/* FOOTER BUTTONS */}
// // // // // // // // //       <View style={styles.footer}>
// // // // // // // // //         {step > 1 && (
// // // // // // // // //           <TouchableOpacity style={styles.prevBtn} onPress={prev}>
// // // // // // // // //             <Text style={styles.prevText}>Previous</Text>
// // // // // // // // //           </TouchableOpacity>
// // // // // // // // //         )}

// // // // // // // // //         <TouchableOpacity style={styles.nextBtn} onPress={next}>
// // // // // // // // //           <Text style={styles.nextText}>
// // // // // // // // //             {step === 4 ? "Submit" : "Next"}
// // // // // // // // //           </Text>
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //       </View>

// // // // // // // // //     </SafeAreaView>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // // 🎨 STYLES
// // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // //   container: {
// // // // // // // // //     flex: 1,
// // // // // // // // //     backgroundColor: "#f5f5f5",
// // // // // // // // //   },
// // // // // // // // //   header: {
// // // // // // // // //     padding: 16,
// // // // // // // // //   },
// // // // // // // // //   title: {
// // // // // // // // //     color: "#fff",
// // // // // // // // //     fontSize: 20,
// // // // // // // // //     fontWeight: "bold",
// // // // // // // // //   },
// // // // // // // // //   sub: {
// // // // // // // // //     color: "#fff",
// // // // // // // // //     fontSize: 12,
// // // // // // // // //   },
// // // // // // // // //   footer: {
// // // // // // // // //     flexDirection: "row",
// // // // // // // // //     padding: 16,
// // // // // // // // //   },
// // // // // // // // //   nextBtn: {
// // // // // // // // //     flex: 1,
// // // // // // // // //     backgroundColor: "#f97316",
// // // // // // // // //     padding: 14,
// // // // // // // // //     borderRadius: 10,
// // // // // // // // //     alignItems: "center",
// // // // // // // // //   },
// // // // // // // // //   nextText: {
// // // // // // // // //     color: "#fff",
// // // // // // // // //     fontWeight: "bold",
// // // // // // // // //   },
// // // // // // // // //   prevBtn: {
// // // // // // // // //     flex: 1,
// // // // // // // // //     borderWidth: 1,
// // // // // // // // //     borderColor: "#f97316",
// // // // // // // // //     padding: 14,
// // // // // // // // //     borderRadius: 10,
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     marginRight: 10,
// // // // // // // // //   },
// // // // // // // // //   prevText: {
// // // // // // // // //     color: "#f97316",
// // // // // // // // //     fontWeight: "bold",
// // // // // // // // //   },
// // // // // // // // // });












// // // // // // // // import React, { useState } from "react";
// // // // // // // // import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // // // import { SafeAreaView } from "react-native-safe-area-context";
// // // // // // // // import { LinearGradient } from "expo-linear-gradient";

// // // // // // // // import Step1 from "./steps/Step1";
// // // // // // // // import Step2 from "./steps/Step2";
// // // // // // // // import Step3 from "./steps/Step3";
// // // // // // // // import Step4 from "./steps/Step4";

// // // // // // // // export default function SuchiBookingScreen() {
// // // // // // // //   const [step, setStep] = useState(1);

// // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // //     firstName: "",
// // // // // // // //     middleName: "",
// // // // // // // //     lastName: "",
// // // // // // // //     birthName: "",
// // // // // // // //     birthNameEn: "",
// // // // // // // //     candidateType: "",
// // // // // // // //     firstNameMr: "",
// // // // // // // //     middleNameMr: "",
// // // // // // // //     lastNameMr: "",
// // // // // // // //     marathiNote: "",
// // // // // // // //     photo: null,
// // // // // // // //     dob: "",
// // // // // // // //     mobile: "",
// // // // // // // //     education: "",
// // // // // // // //     company: "",
// // // // // // // //     expectations: "",
// // // // // // // //     fatherName: "",
// // // // // // // //   });

// // // // // // // //   const validate = () => {
// // // // // // // //     let missingFields = [];

// // // // // // // //     if (step === 1) {
// // // // // // // //       if (!formData.firstName) missingFields.push("First Name");
// // // // // // // //       if (!formData.middleName) missingFields.push("Middle Name");
// // // // // // // //       if (!formData.lastName) missingFields.push("Last Name");
// // // // // // // //       if (!formData.firstNameMr) missingFields.push("पहिले नाव");
// // // // // // // //       if (!formData.middleNameMr) missingFields.push("वडिलांचे नाव");
// // // // // // // //       if (!formData.lastNameMr) missingFields.push("आडनाव");
// // // // // // // //       if (!formData.birthName) missingFields.push("जन्म नाव");
// // // // // // // //       if (!formData.birthNameEn) missingFields.push("Birth Name");
// // // // // // // //       if (!formData.candidateType) missingFields.push("Candidate Type");
// // // // // // // //       if (!formData.marathiNote) missingFields.push("Marathi Type Box");
// // // // // // // //       if (!formData.photo) missingFields.push("Photo");
// // // // // // // //     }

// // // // // // // //     if (step === 2) {
// // // // // // // //       if (!formData.dob) missingFields.push("Date of Birth");
// // // // // // // //       if (!formData.mobile) missingFields.push("Mobile Number");
// // // // // // // //     }

// // // // // // // //     if (step === 3) {
// // // // // // // //       if (!formData.education) missingFields.push("Education");
// // // // // // // //       if (!formData.company) missingFields.push("Company");
// // // // // // // //     }

// // // // // // // //     if (step === 4) {
// // // // // // // //       if (!formData.expectations) missingFields.push("Expectations");
// // // // // // // //       if (!formData.fatherName) missingFields.push("Father's Name");
// // // // // // // //     }

// // // // // // // //     if (missingFields.length > 0) {
// // // // // // // //       Alert.alert(
// // // // // // // //         "Missing Information",
// // // // // // // //         `Please fill out the following fields:\n\n• ${missingFields.join("\n• ")}`
// // // // // // // //       );
// // // // // // // //       return false;
// // // // // // // //     }

// // // // // // // //     return true;
// // // // // // // //   };

// // // // // // // //   const next = () => {
// // // // // // // //     if (!validate()) return;

// // // // // // // //     if (step < 4) {
// // // // // // // //       setStep(step + 1);
// // // // // // // //     } else {
// // // // // // // //       Alert.alert("Success", "Form Submitted Successfully 🎉");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const prev = () => {
// // // // // // // //     if (step > 1) setStep(step - 1);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // // //       <LinearGradient colors={["#f97316", "#fb923c"]} style={styles.header}>
// // // // // // // //         <Text style={styles.title}>Suchi Booking</Text>
// // // // // // // //         <Text style={styles.sub}>Step {step} of 4</Text>
// // // // // // // //       </LinearGradient>

// // // // // // // //       <View style={{ flex: 1, padding: 16 }}>
// // // // // // // //         {step === 1 && <Step1 data={formData} setData={setFormData} />}
// // // // // // // //         {step === 2 && <Step2 data={formData} setData={setFormData} />}
// // // // // // // //         {step === 3 && <Step3 data={formData} setData={setFormData} />}
// // // // // // // //         {step === 4 && <Step4 data={formData} setData={setFormData} />}
// // // // // // // //       </View>

// // // // // // // //       <View style={styles.footer}>
// // // // // // // //         {step > 1 && (
// // // // // // // //           <TouchableOpacity style={styles.prevBtn} onPress={prev}>
// // // // // // // //             <Text style={styles.prevText}>Previous</Text>
// // // // // // // //           </TouchableOpacity>
// // // // // // // //         )}

// // // // // // // //         <TouchableOpacity style={styles.nextBtn} onPress={next}>
// // // // // // // //           <Text style={styles.nextText}>
// // // // // // // //             {step === 4 ? "Submit" : "Next"}
// // // // // // // //           </Text>
// // // // // // // //         </TouchableOpacity>
// // // // // // // //       </View>
// // // // // // // //     </SafeAreaView>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   container: {
// // // // // // // //     flex: 1,
// // // // // // // //     backgroundColor: "#f5f5f5",
// // // // // // // //   },
// // // // // // // //   header: {
// // // // // // // //     padding: 16,
// // // // // // // //   },
// // // // // // // //   title: {
// // // // // // // //     color: "#fff",
// // // // // // // //     fontSize: 20,
// // // // // // // //     fontWeight: "bold",
// // // // // // // //   },
// // // // // // // //   sub: {
// // // // // // // //     color: "#fff",
// // // // // // // //     fontSize: 12,
// // // // // // // //   },
// // // // // // // //   footer: {
// // // // // // // //     flexDirection: "row",
// // // // // // // //     padding: 16,
// // // // // // // //   },
// // // // // // // //   nextBtn: {
// // // // // // // //     flex: 1,
// // // // // // // //     backgroundColor: "#f97316",
// // // // // // // //     padding: 14,
// // // // // // // //     borderRadius: 10,
// // // // // // // //     alignItems: "center",
// // // // // // // //   },
// // // // // // // //   nextText: {
// // // // // // // //     color: "#fff",
// // // // // // // //     fontWeight: "bold",
// // // // // // // //   },
// // // // // // // //   prevBtn: {
// // // // // // // //     flex: 1,
// // // // // // // //     borderWidth: 1,
// // // // // // // //     borderColor: "#f97316",
// // // // // // // //     padding: 14,
// // // // // // // //     borderRadius: 10,
// // // // // // // //     alignItems: "center",
// // // // // // // //     marginRight: 10,
// // // // // // // //   },
// // // // // // // //   prevText: {
// // // // // // // //     color: "#f97316",
// // // // // // // //     fontWeight: "bold",
// // // // // // // //   },
// // // // // // // // });






// // // // // // // // import React, { useState } from "react";
// // // // // // // // import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // // // import { SafeAreaView } from "react-native-safe-area-context";
// // // // // // // // import { LinearGradient } from "expo-linear-gradient";

// // // // // // // // import Step1 from "./steps/Step1";
// // // // // // // // import Step2 from "./steps/Step2";
// // // // // // // // import Step3 from "./steps/Step3";
// // // // // // // // import Step4 from "./steps/Step4";

// // // // // // // // export default function SuchiBookingScreen() {
// // // // // // // //   const [step, setStep] = useState(1);

// // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // //     firstName: "", middleName: "", lastName: "",
// // // // // // // //     birthName: "", birthNameEn: "", candidateType: "",
// // // // // // // //     firstNameMr: "", middleNameMr: "", lastNameMr: "",
// // // // // // // //     marathiNote: "", photo: null,
    
// // // // // // // //     educationLevel: "", education: "", employmentType: "",
// // // // // // // //     designation: "", company: "", jobLocation: "",
// // // // // // // //     mobile: "", monthlyIncome: "", marathiNote2: "",

// // // // // // // //     fatherName: "", motherName: "",
// // // // // // // //     expectations: "",
// // // // // // // //   });

// // // // // // // //   const validate = () => {
// // // // // // // //     let missingFields = [];

// // // // // // // //     if (step === 1) {
// // // // // // // //       if (!formData.firstName) missingFields.push("First Name");
// // // // // // // //       if (!formData.middleName) missingFields.push("Middle Name");
// // // // // // // //       if (!formData.lastName) missingFields.push("Last Name");
// // // // // // // //       if (!formData.firstNameMr) missingFields.push("पहिले नाव");
// // // // // // // //       if (!formData.middleNameMr) missingFields.push("वडिलांचे नाव");
// // // // // // // //       if (!formData.lastNameMr) missingFields.push("आडनाव");
// // // // // // // //       if (!formData.birthName) missingFields.push("जन्म नाव");
// // // // // // // //       if (!formData.birthNameEn) missingFields.push("Birth Name");
// // // // // // // //       if (!formData.candidateType) missingFields.push("Candidate Type");
// // // // // // // //       if (!formData.marathiNote) missingFields.push("Marathi Type Box");
// // // // // // // //       if (!formData.photo) missingFields.push("Photo");
// // // // // // // //     }

// // // // // // // //     if (step === 2) {
// // // // // // // //       if (!formData.educationLevel) missingFields.push("Education Level");
// // // // // // // //       if (!formData.education) missingFields.push("शिक्षण");
// // // // // // // //     }

// // // // // // // //     if (step === 3) {
// // // // // // // //       if (!formData.fatherName) missingFields.push("Father's Name");
// // // // // // // //     }

// // // // // // // //     if (step === 4) {
// // // // // // // //       if (!formData.expectations) missingFields.push("Expectations");
// // // // // // // //     }

// // // // // // // //     if (missingFields.length > 0) {
// // // // // // // //       Alert.alert("Missing Information", `Please fill out:\n\n• ${missingFields.join("\n• ")}`);
// // // // // // // //       return false;
// // // // // // // //     }
// // // // // // // //     return true;
// // // // // // // //   };

// // // // // // // //   const next = () => {
// // // // // // // //     if (!validate()) return;
// // // // // // // //     if (step < 4) setStep(step + 1);
// // // // // // // //     else Alert.alert("Success", "Form Submitted Successfully 🎉");
// // // // // // // //   };

// // // // // // // //   const prev = () => { if (step > 1) setStep(step - 1); };

// // // // // // // //   return (
// // // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // // //       <LinearGradient colors={["#ea580c", "#f97316"]} style={styles.header}>
// // // // // // // //         <Text style={styles.title}>Suchi Booking</Text>
// // // // // // // //         <Text style={styles.sub}>Step {step} of 4</Text>
// // // // // // // //       </LinearGradient>

// // // // // // // //       <View style={styles.formContainer}>
// // // // // // // //         {step === 1 && <Step1 data={formData} setData={setFormData} />}
// // // // // // // //         {step === 2 && <Step2 data={formData} setData={setFormData} />}
// // // // // // // //         {step === 3 && <Step3 data={formData} setData={setFormData} />}
// // // // // // // //         {step === 4 && <Step4 data={formData} setData={setFormData} />}
// // // // // // // //       </View>

// // // // // // // //       <View style={styles.footer}>
// // // // // // // //         {step > 1 && (
// // // // // // // //           <TouchableOpacity style={styles.prevBtn} onPress={prev}>
// // // // // // // //             <Text style={styles.prevText}>Previous</Text>
// // // // // // // //           </TouchableOpacity>
// // // // // // // //         )}
// // // // // // // //         <TouchableOpacity style={styles.nextBtn} onPress={next}>
// // // // // // // //           <Text style={styles.nextText}>{step === 4 ? "Submit" : "Next"}</Text>
// // // // // // // //         </TouchableOpacity>
// // // // // // // //       </View>
// // // // // // // //     </SafeAreaView>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   container: { flex: 1, backgroundColor: "#f5f5f5" },
// // // // // // // //   header: { padding: 16 },
// // // // // // // //   title: { color: "#fff", fontSize: 20, fontWeight: "bold" },
// // // // // // // //   sub: { color: "#fff", fontSize: 12 },
// // // // // // // //   formContainer: { flex: 1, padding: 16 },
// // // // // // // //   footer: { flexDirection: "row", padding: 16, backgroundColor: "#fff", borderTopWidth: 1, borderColor: "#e5e5e5" },
// // // // // // // //   nextBtn: { flex: 1, backgroundColor: "#2563eb", padding: 14, borderRadius: 5, alignItems: "center" },
// // // // // // // //   nextText: { color: "#fff", fontWeight: "bold" },
// // // // // // // //   prevBtn: { flex: 1, borderWidth: 1, borderColor: "#ccc", backgroundColor: "#fff", padding: 14, borderRadius: 5, alignItems: "center", marginRight: 10 },
// // // // // // // //   prevText: { color: "#333", fontWeight: "bold" },
// // // // // // // // });












// // // // // // // // // screens/SuchiBookingScreen.js

// // // // // // // // import React, { useState } from "react";
// // // // // // // // import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // // // import { SafeAreaView } from "react-native-safe-area-context";
// // // // // // // // import { LinearGradient } from "expo-linear-gradient";

// // // // // // // // import Step1 from "./steps/Step1";
// // // // // // // // import Step2 from "./steps/Step2";
// // // // // // // // import Step3 from "./steps/Step3";
// // // // // // // // import Step4 from "./steps/Step4";

// // // // // // // // export default function SuchiBookingScreen() {
// // // // // // // //   const [step, setStep] = useState(1);

// // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // //     firstName: "", middleName: "", lastName: "",
// // // // // // // //     birthName: "", birthNameEn: "", candidateType: "",
// // // // // // // //     firstNameMr: "", middleNameMr: "", lastNameMr: "",
// // // // // // // //     marathiNote: "", photo: null,
    
// // // // // // // //     educationLevel: "", education: "", employmentType: "",
// // // // // // // //     designation: "", company: "", jobLocation: "",
// // // // // // // //     mobile: "", monthlyIncome: "", marathiNote2: "",

// // // // // // // //     fatherName: "", motherName: "",
// // // // // // // //     expectations: "",
// // // // // // // //   });

// // // // // // // //   const validate = () => {
// // // // // // // //     let missingFields = [];

// // // // // // // //     if (step === 1) {
// // // // // // // //       if (!formData.firstName) missingFields.push("First Name");
// // // // // // // //       if (!formData.middleName) missingFields.push("Middle Name");
// // // // // // // //       if (!formData.lastName) missingFields.push("Last Name");
// // // // // // // //       if (!formData.firstNameMr) missingFields.push("पहिले नाव");
// // // // // // // //       if (!formData.middleNameMr) missingFields.push("वडिलांचे नाव");
// // // // // // // //       if (!formData.lastNameMr) missingFields.push("आडनाव");
// // // // // // // //       if (!formData.birthName) missingFields.push("जन्म नाव");
// // // // // // // //       if (!formData.birthNameEn) missingFields.push("Birth Name");
// // // // // // // //       if (!formData.candidateType) missingFields.push("Candidate Type");
// // // // // // // //       if (!formData.marathiNote) missingFields.push("Marathi Type Box");
// // // // // // // //       if (!formData.photo) missingFields.push("Photo");
// // // // // // // //     }

// // // // // // // //     if (step === 2) {
// // // // // // // //       if (!formData.educationLevel) missingFields.push("Education Level");
// // // // // // // //       if (!formData.education) missingFields.push("शिक्षण");
// // // // // // // //       if (!formData.employmentType) missingFields.push("नोकरी/ व्यवसाय");
// // // // // // // //       if (!formData.designation) missingFields.push("हुद्दा");
// // // // // // // //       if (!formData.company) missingFields.push("कंपनी");
// // // // // // // //       if (!formData.jobLocation) missingFields.push("नोकरीचे ठिकाण");
// // // // // // // //       if (!formData.mobile) missingFields.push("मोबाईल");
// // // // // // // //       if (!formData.monthlyIncome) missingFields.push("मासिक उत्पन्न (रु.)");
// // // // // // // //       if (!formData.marathiNote2) missingFields.push("Marathi Type Pad");
// // // // // // // //     }

// // // // // // // //     if (step === 3) {
// // // // // // // //       if (!formData.fatherName) missingFields.push("Father's Name");
// // // // // // // //     }

// // // // // // // //     if (step === 4) {
// // // // // // // //       if (!formData.expectations) missingFields.push("Expectations");
// // // // // // // //     }

// // // // // // // //     if (missingFields.length > 0) {
// // // // // // // //       Alert.alert("Missing Information", `Please fill out:\n\n• ${missingFields.join("\n• ")}`);
// // // // // // // //       return false;
// // // // // // // //     }
// // // // // // // //     return true;
// // // // // // // //   };

// // // // // // // //   const next = () => {
// // // // // // // //     if (!validate()) return;
// // // // // // // //     if (step < 4) setStep(step + 1);
// // // // // // // //     else Alert.alert("Success", "Form Submitted Successfully 🎉");
// // // // // // // //   };

// // // // // // // //   const prev = () => { if (step > 1) setStep(step - 1); };

// // // // // // // //   return (
// // // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // // //       <LinearGradient colors={["#ea580c", "#f97316"]} style={styles.header}>
// // // // // // // //         <Text style={styles.title}>Suchi Booking</Text>
// // // // // // // //         <Text style={styles.sub}>Step {step} of 4</Text>
// // // // // // // //       </LinearGradient>

// // // // // // // //       <View style={styles.formContainer}>
// // // // // // // //         {step === 1 && <Step1 data={formData} setData={setFormData} />}
// // // // // // // //         {step === 2 && <Step2 data={formData} setData={setFormData} />}
// // // // // // // //         {step === 3 && <Step3 data={formData} setData={setFormData} />}
// // // // // // // //         {step === 4 && <Step4 data={formData} setData={setFormData} />}
// // // // // // // //       </View>

// // // // // // // //       <View style={styles.footer}>
// // // // // // // //         {step > 1 && (
// // // // // // // //           <TouchableOpacity style={styles.prevBtn} onPress={prev}>
// // // // // // // //             <Text style={styles.prevText}>Previous</Text>
// // // // // // // //           </TouchableOpacity>
// // // // // // // //         )}
// // // // // // // //         <TouchableOpacity style={styles.nextBtn} onPress={next}>
// // // // // // // //           <Text style={styles.nextText}>{step === 4 ? "Submit" : "Next"}</Text>
// // // // // // // //         </TouchableOpacity>
// // // // // // // //       </View>
// // // // // // // //     </SafeAreaView>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   container: { flex: 1, backgroundColor: "#f5f5f5" },
// // // // // // // //   header: { padding: 16 },
// // // // // // // //   title: { color: "#fff", fontSize: 20, fontWeight: "bold" },
// // // // // // // //   sub: { color: "#fff", fontSize: 12 },
// // // // // // // //   formContainer: { flex: 1, padding: 16 },
// // // // // // // //   footer: { flexDirection: "row", padding: 16, backgroundColor: "#fff", borderTopWidth: 1, borderColor: "#e5e5e5" },
// // // // // // // //   nextBtn: { flex: 1, backgroundColor: "#2563eb", padding: 14, borderRadius: 5, alignItems: "center" },
// // // // // // // //   nextText: { color: "#fff", fontWeight: "bold" },
// // // // // // // //   prevBtn: { flex: 1, borderWidth: 1, borderColor: "#ccc", backgroundColor: "#fff", padding: 14, borderRadius: 5, alignItems: "center", marginRight: 10 },
// // // // // // // //   prevText: { color: "#333", fontWeight: "bold" },
// // // // // // // // });














// // // // // // // // screens/SuchiBookingScreen.js

// // // // // // // import React, { useState } from "react";
// // // // // // // import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // // import { SafeAreaView } from "react-native-safe-area-context";
// // // // // // // import { LinearGradient } from "expo-linear-gradient";

// // // // // // // import Step1 from "./steps/Step1";
// // // // // // // import Step2 from "./steps/Step2";
// // // // // // // import Step3 from "./steps/Step3";
// // // // // // // import Step4 from "./steps/Step4";

// // // // // // // export default function SuchiBookingScreen() {
// // // // // // //   const [step, setStep] = useState(1); // You can set this to 1 for production

// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     // Step 1
// // // // // // //     firstName: "", middleName: "", lastName: "",
// // // // // // //     birthName: "", birthNameEn: "", candidateType: "",
// // // // // // //     firstNameMr: "", middleNameMr: "", lastNameMr: "",
// // // // // // //     marathiNote: "", photo: null,
    
// // // // // // //     // Step 2
// // // // // // //     educationLevel: "", education: "", employmentType: "",
// // // // // // //     designation: "", company: "", jobLocation: "",
// // // // // // //     mobile: "", monthlyIncome: "", marathiNote2: "",

// // // // // // //     // Step 3 (Personal Details)
// // // // // // //     dob: "", birthHour: "", birthMinute: "",
// // // // // // //     birthPlace: "", heightFeet: "", heightInches: "", complexion: "",
// // // // // // //     bloodGroup: "", mamaKul: "", gotra: "",
// // // // // // //     nativePlace: "", taluka: "", district: "",
// // // // // // //     brothersMarried: "", brothersUnmarried: "",
// // // // // // //     sistersMarried: "", sistersUnmarried: "",
// // // // // // //     personalMobile: "", marathiNote3: "",

// // // // // // //     // Step 4
// // // // // // //     expectations: "",
// // // // // // //   });

// // // // // // //   const validate = () => {
// // // // // // //     let missingFields = [];

// // // // // // //     // Step 1 Validation
// // // // // // //     if (step === 1) {
// // // // // // //       if (!formData.firstName) missingFields.push("First Name");
// // // // // // //       if (!formData.middleName) missingFields.push("Middle Name");
// // // // // // //       if (!formData.lastName) missingFields.push("Last Name");
// // // // // // //       if (!formData.firstNameMr) missingFields.push("पहिले नाव");
// // // // // // //       if (!formData.middleNameMr) missingFields.push("वडिलांचे नाव");
// // // // // // //       if (!formData.lastNameMr) missingFields.push("आडनाव");
// // // // // // //       if (!formData.birthName) missingFields.push("जन्म नाव");
// // // // // // //       if (!formData.birthNameEn) missingFields.push("Birth Name");
// // // // // // //       if (!formData.candidateType) missingFields.push("Candidate Type");
// // // // // // //       if (!formData.marathiNote) missingFields.push("Marathi Type Box");
// // // // // // //       if (!formData.photo) missingFields.push("Photo");
// // // // // // //     }

// // // // // // //     // Step 2 Validation
// // // // // // //     if (step === 2) {
// // // // // // //       if (!formData.educationLevel) missingFields.push("Education Level");
// // // // // // //       if (!formData.education) missingFields.push("शिक्षण");
// // // // // // //       if (!formData.employmentType) missingFields.push("नोकरी/ व्यवसाय");
// // // // // // //       if (!formData.designation) missingFields.push("हुद्दा");
// // // // // // //       if (!formData.company) missingFields.push("कंपनी");
// // // // // // //       if (!formData.jobLocation) missingFields.push("नोकरीचे ठिकाण");
// // // // // // //       if (!formData.mobile) missingFields.push("मोबाईल");
// // // // // // //       if (!formData.monthlyIncome) missingFields.push("मासिक उत्पन्न (रु.)");
// // // // // // //       if (!formData.marathiNote2) missingFields.push("Marathi Type Pad");
// // // // // // //     }

// // // // // // //     // Step 3 Validation (Based on the red asterisks in your image)
// // // // // // //     if (step === 3) {
// // // // // // //       if (!formData.dob) missingFields.push("जन्म तारीख");
// // // // // // //       if (!formData.birthPlace) missingFields.push("जन्म स्थळ");
// // // // // // //       if (!formData.heightFeet) missingFields.push("ऊंची फूट");
// // // // // // //       if (!formData.complexion) missingFields.push("वर्ण");
// // // // // // //       if (!formData.bloodGroup) missingFields.push("रक्तगट");
// // // // // // //       if (!formData.mamaKul) missingFields.push("मामा कुळ");
// // // // // // //       if (!formData.gotra) missingFields.push("गोत्र");
// // // // // // //       if (!formData.nativePlace) missingFields.push("मुळगाव");
// // // // // // //       if (!formData.taluka) missingFields.push("तालुका");
// // // // // // //       if (!formData.district) missingFields.push("जिल्हा");
// // // // // // //       if (!formData.brothersMarried || !formData.brothersUnmarried) missingFields.push("भाऊ (संख्या)");
// // // // // // //       if (!formData.sistersMarried || !formData.sistersUnmarried) missingFields.push("बहीण (संख्या)");
// // // // // // //     }

// // // // // // //     // Step 4 Validation
// // // // // // //     if (step === 4) {
// // // // // // //       if (!formData.expectations) missingFields.push("Expectations");
// // // // // // //     }

// // // // // // //     if (missingFields.length > 0) {
// // // // // // //       Alert.alert("Missing Information", `Please fill out:\n\n• ${missingFields.join("\n• ")}`);
// // // // // // //       return false;
// // // // // // //     }
// // // // // // //     return true;
// // // // // // //   };

// // // // // // //   const next = () => {
// // // // // // //     if (!validate()) return;
// // // // // // //     if (step < 4) setStep(step + 1);
// // // // // // //     else Alert.alert("Success", "Form Submitted Successfully 🎉");
// // // // // // //   };

// // // // // // //   const prev = () => { if (step > 1) setStep(step - 1); };

// // // // // // //   return (
// // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // //       <LinearGradient colors={["#ea580c", "#f97316"]} style={styles.header}>
// // // // // // //         <Text style={styles.title}>Suchi Booking</Text>
// // // // // // //         <Text style={styles.sub}>Step {step} of 4</Text>
// // // // // // //       </LinearGradient>

// // // // // // //       <View style={styles.formContainer}>
// // // // // // //         {step === 1 && <Step1 data={formData} setData={setFormData} />}
// // // // // // //         {step === 2 && <Step2 data={formData} setData={setFormData} />}
// // // // // // //         {step === 3 && <Step3 data={formData} setData={setFormData} />}
// // // // // // //         {step === 4 && <Step4 data={formData} setData={setFormData} />}
// // // // // // //       </View>

// // // // // // //       <View style={styles.footer}>
// // // // // // //         {step > 1 && (
// // // // // // //           <TouchableOpacity style={styles.prevBtn} onPress={prev}>
// // // // // // //             <Text style={styles.prevText}>Previous</Text>
// // // // // // //           </TouchableOpacity>
// // // // // // //         )}
// // // // // // //         <TouchableOpacity style={styles.nextBtn} onPress={next}>
// // // // // // //           <Text style={styles.nextText}>{step === 4 ? "Submit" : "Next"}</Text>
// // // // // // //         </TouchableOpacity>
// // // // // // //       </View>
// // // // // // //     </SafeAreaView>
// // // // // // //   );
// // // // // // // }

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   container: { flex: 1, backgroundColor: "#f5f5f5" },
// // // // // // //   header: { padding: 16 },
// // // // // // //   title: { color: "#fff", fontSize: 20, fontWeight: "bold" },
// // // // // // //   sub: { color: "#fff", fontSize: 12 },
// // // // // // //   formContainer: { flex: 1, padding: 16 },
// // // // // // //   footer: { flexDirection: "row", padding: 16, backgroundColor: "#fff", borderTopWidth: 1, borderColor: "#e5e5e5" },
// // // // // // //   nextBtn: { flex: 1, backgroundColor: "#2563eb", padding: 14, borderRadius: 5, alignItems: "center" },
// // // // // // //   nextText: { color: "#fff", fontWeight: "bold" },
// // // // // // //   prevBtn: { flex: 1, borderWidth: 1, borderColor: "#ccc", backgroundColor: "#fff", padding: 14, borderRadius: 5, alignItems: "center", marginRight: 10 },
// // // // // // //   prevText: { color: "#333", fontWeight: "bold" },
// // // // // // // });












// // // // // // // screens/SuchiBookingScreen.js

// // // // // // import React, { useState } from "react";
// // // // // // import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // // import { SafeAreaView } from "react-native-safe-area-context";
// // // // // // import { LinearGradient } from "expo-linear-gradient";

// // // // // // import Step1 from "./steps/Step1";
// // // // // // import Step2 from "./steps/Step2";
// // // // // // import Step3 from "./steps/Step3";
// // // // // // import Step4 from "./steps/Step4";

// // // // // // export default function SuchiBookingScreen() {
// // // // // //   const [step, setStep] = useState(4); // Set to 4 to test Step 4 directly. Change to 1 for production.

// // // // // //   const [formData, setFormData] = useState({
// // // // // //     // Step 1
// // // // // //     firstName: "", middleName: "", lastName: "",
// // // // // //     birthName: "", birthNameEn: "", candidateType: "",
// // // // // //     firstNameMr: "", middleNameMr: "", lastNameMr: "",
// // // // // //     marathiNote: "", photo: null,
    
// // // // // //     // Step 2
// // // // // //     educationLevel: "", education: "", employmentType: "",
// // // // // //     designation: "", company: "", jobLocation: "",
// // // // // //     mobile: "", monthlyIncome: "", marathiNote2: "",

// // // // // //     // Step 3 (Personal Details)
// // // // // //     dob: "", birthHour: "", birthMinute: "",
// // // // // //     birthPlace: "", heightFeet: "", heightInches: "", complexion: "",
// // // // // //     bloodGroup: "", mamaKul: "", gotra: "",
// // // // // //     nativePlace: "", taluka: "", district: "",
// // // // // //     brothersMarried: "", brothersUnmarried: "",
// // // // // //     sistersMarried: "", sistersUnmarried: "",
// // // // // //     personalMobile: "", marathiNote3: "",

// // // // // //     // Step 4 (Expectations & Parents/Contact Details)
// // // // // //     expectations: "",
    
// // // // // //     titleFather: "श्री", fatherName: "", fatherAddress: "",
// // // // // //     fatherPhone: "", fatherMobile: "", fatherEmail: "",
    
// // // // // //     titleContact1: "श्री", contact1Name: "", contact1Address: "",
// // // // // //     contact1Phone: "", contact1Mobile: "",
    
// // // // // //     titleContact2: "श्री", contact2Name: "", contact2Address: "",
// // // // // //     contact2Phone: "", contact2Mobile: "",
    
// // // // // //     marathiNote4: "",
// // // // // //   });

// // // // // //   const validate = () => {
// // // // // //     let missingFields = [];

// // // // // //     // Step 1
// // // // // //     if (step === 1) {
// // // // // //       if (!formData.firstName) missingFields.push("First Name");
// // // // // //       if (!formData.middleName) missingFields.push("Middle Name");
// // // // // //       if (!formData.lastName) missingFields.push("Last Name");
// // // // // //       if (!formData.firstNameMr) missingFields.push("पहिले नाव");
// // // // // //       if (!formData.middleNameMr) missingFields.push("वडिलांचे नाव");
// // // // // //       if (!formData.lastNameMr) missingFields.push("आडनाव");
// // // // // //       if (!formData.birthName) missingFields.push("जन्म नाव");
// // // // // //       if (!formData.birthNameEn) missingFields.push("Birth Name");
// // // // // //       if (!formData.candidateType) missingFields.push("Candidate Type");
// // // // // //       if (!formData.marathiNote) missingFields.push("Marathi Type Box");
// // // // // //       if (!formData.photo) missingFields.push("Photo");
// // // // // //     }

// // // // // //     // Step 2
// // // // // //     if (step === 2) {
// // // // // //       if (!formData.educationLevel) missingFields.push("Education Level");
// // // // // //       if (!formData.education) missingFields.push("शिक्षण");
// // // // // //       if (!formData.employmentType) missingFields.push("नोकरी/ व्यवसाय");
// // // // // //       if (!formData.designation) missingFields.push("हुद्दा");
// // // // // //       if (!formData.company) missingFields.push("कंपनी");
// // // // // //       if (!formData.jobLocation) missingFields.push("नोकरीचे ठिकाण");
// // // // // //       if (!formData.mobile) missingFields.push("मोबाईल");
// // // // // //       if (!formData.monthlyIncome) missingFields.push("मासिक उत्पन्न (रु.)");
// // // // // //       if (!formData.marathiNote2) missingFields.push("Marathi Type Pad");
// // // // // //     }

// // // // // //     // Step 3
// // // // // //     if (step === 3) {
// // // // // //       if (!formData.dob) missingFields.push("जन्म तारीख");
// // // // // //       if (!formData.birthPlace) missingFields.push("जन्म स्थळ");
// // // // // //       if (!formData.heightFeet) missingFields.push("ऊंची फूट");
// // // // // //       if (!formData.complexion) missingFields.push("वर्ण");
// // // // // //       if (!formData.bloodGroup) missingFields.push("रक्तगट");
// // // // // //       if (!formData.mamaKul) missingFields.push("मामा कुळ");
// // // // // //       if (!formData.gotra) missingFields.push("गोत्र");
// // // // // //       if (!formData.nativePlace) missingFields.push("मुळगाव");
// // // // // //       if (!formData.taluka) missingFields.push("तालुका");
// // // // // //       if (!formData.district) missingFields.push("जिल्हा");
// // // // // //       if (!formData.brothersMarried || !formData.brothersUnmarried) missingFields.push("भाऊ (संख्या)");
// // // // // //       if (!formData.sistersMarried || !formData.sistersUnmarried) missingFields.push("बहीण (संख्या)");
// // // // // //     }

// // // // // //     // Step 4 Validation (Based on red asterisks in the image)
// // // // // //     if (step === 4) {
// // // // // //       if (!formData.expectations) missingFields.push("जोडीदाराविषयी अपेक्षा (Expectations)");
// // // // // //       if (!formData.titleFather) missingFields.push("Father's Title");
// // // // // //       if (!formData.fatherName) missingFields.push("वडीलांचे/ पालकाचे नाव (Father's Name)");
// // // // // //       if (!formData.fatherAddress) missingFields.push("Father's Address");
// // // // // //       if (!formData.fatherMobile) missingFields.push("Father's Mobile");
// // // // // //     }

// // // // // //     if (missingFields.length > 0) {
// // // // // //       Alert.alert("Missing Information", `Please fill out:\n\n• ${missingFields.join("\n• ")}`);
// // // // // //       return false;
// // // // // //     }
// // // // // //     return true;
// // // // // //   };

// // // // // //   const next = () => {
// // // // // //     if (!validate()) return;
// // // // // //     if (step < 4) setStep(step + 1);
// // // // // //     else {
// // // // // //       Alert.alert("Success", "Form Submitted Successfully 🎉");
// // // // // //       console.log("FINAL FORM DATA:", formData);
// // // // // //     }
// // // // // //   };

// // // // // //   const prev = () => { if (step > 1) setStep(step - 1); };

// // // // // //   return (
// // // // // //     <SafeAreaView style={styles.container}>
// // // // // //       <LinearGradient colors={["#ea580c", "#f97316"]} style={styles.header}>
// // // // // //         <Text style={styles.title}>Suchi Booking</Text>
// // // // // //         <Text style={styles.sub}>Step {step} of 4</Text>
// // // // // //       </LinearGradient>

// // // // // //       <View style={styles.formContainer}>
// // // // // //         {step === 1 && <Step1 data={formData} setData={setFormData} />}
// // // // // //         {step === 2 && <Step2 data={formData} setData={setFormData} />}
// // // // // //         {step === 3 && <Step3 data={formData} setData={setFormData} />}
// // // // // //         {step === 4 && <Step4 data={formData} setData={setFormData} />}
// // // // // //       </View>

// // // // // //       <View style={styles.footer}>
// // // // // //         {step > 1 && (
// // // // // //           <TouchableOpacity style={styles.prevBtn} onPress={prev}>
// // // // // //             <Text style={styles.prevText}>Previous</Text>
// // // // // //           </TouchableOpacity>
// // // // // //         )}
// // // // // //         <TouchableOpacity style={styles.nextBtn} onPress={next}>
// // // // // //           <Text style={styles.nextText}>{step === 4 ? "Submit" : "Next"}</Text>
// // // // // //         </TouchableOpacity>
// // // // // //       </View>
// // // // // //     </SafeAreaView>
// // // // // //   );
// // // // // // }

// // // // // // const styles = StyleSheet.create({
// // // // // //   container: { flex: 1, backgroundColor: "#f5f5f5" },
// // // // // //   header: { padding: 16 },
// // // // // //   title: { color: "#fff", fontSize: 20, fontWeight: "bold" },
// // // // // //   sub: { color: "#fff", fontSize: 12 },
// // // // // //   formContainer: { flex: 1, padding: 16 },
// // // // // //   footer: { flexDirection: "row", padding: 16, backgroundColor: "#fff", borderTopWidth: 1, borderColor: "#e5e5e5" },
// // // // // //   nextBtn: { flex: 1, backgroundColor: "#2563eb", padding: 14, borderRadius: 5, alignItems: "center" },
// // // // // //   nextText: { color: "#fff", fontWeight: "bold" },
// // // // // //   prevBtn: { flex: 1, borderWidth: 1, borderColor: "#ccc", backgroundColor: "#fff", padding: 14, borderRadius: 5, alignItems: "center", marginRight: 10 },
// // // // // //   prevText: { color: "#333", fontWeight: "bold" },
// // // // // // });












// // // // // // screens/SuchiBookingScreen.js

// // // // // import React, { useState } from "react";
// // // // // import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // // import { SafeAreaView } from "react-native-safe-area-context";
// // // // // import { LinearGradient } from "expo-linear-gradient";

// // // // // import Step1 from "./steps/Step1";
// // // // // import Step2 from "./steps/Step2";
// // // // // import Step3 from "./steps/Step3";
// // // // // import Step4 from "./steps/Step4";
// // // // // import Step5 from "./steps/Step5"; // ✅ Import the new Preview screen

// // // // // export default function SuchiBookingScreen() {
// // // // //   const [step, setStep] = useState(1);

// // // // //   const [formData, setFormData] = useState({
// // // // //     firstName: "", middleName: "", lastName: "",
// // // // //     birthName: "", birthNameEn: "", candidateType: "",
// // // // //     firstNameMr: "", middleNameMr: "", lastNameMr: "",
// // // // //     marathiNote: "", photo: null,
    
// // // // //     educationLevel: "", education: "", employmentType: "",
// // // // //     designation: "", company: "", jobLocation: "",
// // // // //     mobile: "", monthlyIncome: "", marathiNote2: "",

// // // // //     dob: "", birthHour: "", birthMinute: "",
// // // // //     birthPlace: "", heightFeet: "", heightInches: "", complexion: "",
// // // // //     bloodGroup: "", mamaKul: "", gotra: "",
// // // // //     nativePlace: "", taluka: "", district: "",
// // // // //     brothersMarried: "", brothersUnmarried: "",
// // // // //     sistersMarried: "", sistersUnmarried: "",
// // // // //     personalMobile: "", marathiNote3: "",

// // // // //     expectations: "",
// // // // //     titleFather: "श्री", fatherName: "", fatherAddress: "",
// // // // //     fatherPhone: "", fatherMobile: "", fatherEmail: "",
// // // // //     titleContact1: "श्री", contact1Name: "", contact1Address: "",
// // // // //     contact1Phone: "", contact1Mobile: "",
// // // // //     titleContact2: "श्री", contact2Name: "", contact2Address: "",
// // // // //     contact2Phone: "", contact2Mobile: "",
// // // // //     marathiNote4: "",
// // // // //   });

// // // // //   const validate = () => {
// // // // //     let missingFields = [];

// // // // //     if (step === 1) {
// // // // //       if (!formData.firstName) missingFields.push("First Name");
// // // // //       if (!formData.lastName) missingFields.push("Last Name");
// // // // //     }
// // // // //     // Add back your validation rules here...

// // // // //     if (missingFields.length > 0) {
// // // // //       Alert.alert("Missing Information", `Please fill out:\n\n• ${missingFields.join("\n• ")}`);
// // // // //       return false;
// // // // //     }
// // // // //     return true;
// // // // //   };

// // // // //   const next = () => {
// // // // //     if (!validate()) return;
// // // // //     if (step < 5) setStep(step + 1); // ✅ Allow moving to Step 5
// // // // //   };

// // // // //   const prev = () => { if (step > 1) setStep(step - 1); };

// // // // //   // ✅ Final Submission Function
// // // // //   const submitForm = () => {
// // // // //     Alert.alert("Success", "Application Submitted For Verification 🎉");
// // // // //     console.log("FINAL SUBMITTED DATA:", formData);
// // // // //   };

// // // // //   return (
// // // // //     <SafeAreaView style={styles.container}>
// // // // //       <LinearGradient colors={["#ea580c", "#f97316"]} style={styles.header}>
// // // // //         <Text style={styles.title}>Suchi Booking</Text>
// // // // //         <Text style={styles.sub}>
// // // // //           {step === 5 ? "Review Application" : `Step ${step} of 4`}
// // // // //         </Text>
// // // // //       </LinearGradient>

// // // // //       <View style={styles.formContainer}>
// // // // //         {step === 1 && <Step1 data={formData} setData={setFormData} />}
// // // // //         {step === 2 && <Step2 data={formData} setData={setFormData} />}
// // // // //         {step === 3 && <Step3 data={formData} setData={setFormData} />}
// // // // //         {step === 4 && <Step4 data={formData} setData={setFormData} />}
// // // // //         {step === 5 && <Step5 data={formData} onEdit={prev} onSubmit={submitForm} />}
// // // // //       </View>

// // // // //       {/* ✅ Hide this footer if we are on the final Preview step (Step 5) */}
// // // // //       {step < 5 && (
// // // // //         <View style={styles.footer}>
// // // // //           {step > 1 && (
// // // // //             <TouchableOpacity style={styles.prevBtn} onPress={prev}>
// // // // //               <Text style={styles.prevText}>Previous</Text>
// // // // //             </TouchableOpacity>
// // // // //           )}
// // // // //           <TouchableOpacity style={styles.nextBtn} onPress={next}>
// // // // //             <Text style={styles.nextText}>Next / Preview</Text>
// // // // //           </TouchableOpacity>
// // // // //         </View>
// // // // //       )}
// // // // //     </SafeAreaView>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   container: { flex: 1, backgroundColor: "#f5f5f5" },
// // // // //   header: { padding: 16 },
// // // // //   title: { color: "#fff", fontSize: 20, fontWeight: "bold" },
// // // // //   sub: { color: "#fff", fontSize: 12 },
// // // // //   formContainer: { flex: 1, padding: 16 },
// // // // //   footer: { flexDirection: "row", padding: 16, backgroundColor: "#fff", borderTopWidth: 1, borderColor: "#e5e5e5" },
// // // // //   nextBtn: { flex: 1, backgroundColor: "#2563eb", padding: 14, borderRadius: 5, alignItems: "center" },
// // // // //   nextText: { color: "#fff", fontWeight: "bold" },
// // // // //   prevBtn: { flex: 1, borderWidth: 1, borderColor: "#ccc", backgroundColor: "#fff", padding: 14, borderRadius: 5, alignItems: "center", marginRight: 10 },
// // // // //   prevText: { color: "#333", fontWeight: "bold" },
// // // // // });










// // // // import React, { useState } from "react";
// // // // import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // import { SafeAreaView } from "react-native-safe-area-context";
// // // // import { LinearGradient } from "expo-linear-gradient";

// // // // import Step1 from "./steps/Step1";
// // // // import Step2 from "./steps/Step2";
// // // // import Step3 from "./steps/Step3";
// // // // import Step4 from "./steps/Step4";
// // // // import Step5 from "./steps/Step5"; 

// // // // export default function SuchiBookingScreen() {
// // // //   const [step, setStep] = useState(1);

// // // //   const [formData, setFormData] = useState({
// // // //     firstName: "", middleName: "", lastName: "",
// // // //     birthName: "", birthNameEn: "", candidateType: "",
// // // //     firstNameMr: "", middleNameMr: "", lastNameMr: "",
// // // //     marathiNote: "", photo: null,
    
// // // //     educationLevel: "", education: "", employmentType: "",
// // // //     designation: "", company: "", jobLocation: "",
// // // //     mobile: "", monthlyIncome: "", marathiNote2: "",

// // // //     dob: "", birthHour: "", birthMinute: "",
// // // //     birthPlace: "", heightFeet: "", heightInches: "", complexion: "",
// // // //     bloodGroup: "", mamaKul: "", gotra: "",
// // // //     nativePlace: "", taluka: "", district: "",
// // // //     brothersMarried: "", brothersUnmarried: "",
// // // //     sistersMarried: "", sistersUnmarried: "",
// // // //     personalMobile: "", marathiNote3: "",

// // // //     expectations: "",
// // // //     titleFather: "श्री", fatherName: "", fatherAddress: "",
// // // //     fatherPhone: "", fatherMobile: "", fatherEmail: "",
// // // //     titleContact1: "श्री", contact1Name: "", contact1Address: "",
// // // //     contact1Phone: "", contact1Mobile: "",
// // // //     titleContact2: "श्री", contact2Name: "", contact2Address: "",
// // // //     contact2Phone: "", contact2Mobile: "",
// // // //     marathiNote4: "",
// // // //   });

// // // //   const validate = () => {
// // // //     let missingFields = [];

// // // //     if (step === 1) {
// // // //       if (!formData.firstName) missingFields.push("First Name");
// // // //       if (!formData.middleName) missingFields.push("Middle Name");
// // // //       if (!formData.lastName) missingFields.push("Last Name");
// // // //       if (!formData.firstNameMr) missingFields.push("पहिले नाव");
// // // //       if (!formData.middleNameMr) missingFields.push("वडिलांचे नाव");
// // // //       if (!formData.lastNameMr) missingFields.push("आडनाव");
// // // //       if (!formData.birthName) missingFields.push("जन्म नाव");
// // // //       if (!formData.birthNameEn) missingFields.push("Birth Name");
// // // //       if (!formData.candidateType) missingFields.push("Candidate Type");
// // // //       if (!formData.photo) missingFields.push("Photo");
// // // //     }

// // // //     if (step === 2) {
// // // //       if (!formData.educationLevel) missingFields.push("Education Level");
// // // //       if (!formData.education) missingFields.push("शिक्षण");
// // // //       if (!formData.employmentType) missingFields.push("नोकरी/ व्यवसाय");
// // // //       if (!formData.designation) missingFields.push("हुद्दा");
// // // //       if (!formData.company) missingFields.push("कंपनी");
// // // //       if (!formData.jobLocation) missingFields.push("नोकरीचे ठिकाण");
// // // //       if (!formData.mobile) missingFields.push("मोबाईल");
// // // //       if (!formData.monthlyIncome) missingFields.push("मासिक उत्पन्न (रु.)");
// // // //     }

// // // //     if (step === 3) {
// // // //       if (!formData.dob) missingFields.push("जन्म तारीख");
// // // //       if (!formData.birthPlace) missingFields.push("जन्म स्थळ");
// // // //       if (!formData.heightFeet) missingFields.push("ऊंची फूट");
// // // //       if (!formData.complexion) missingFields.push("वर्ण");
// // // //       if (!formData.bloodGroup) missingFields.push("रक्तगट");
// // // //       if (!formData.mamaKul) missingFields.push("मामा कुळ");
// // // //       if (!formData.gotra) missingFields.push("गोत्र");
// // // //       if (!formData.nativePlace) missingFields.push("मुळगाव");
// // // //       if (!formData.taluka) missingFields.push("तालुका");
// // // //       if (!formData.district) missingFields.push("जिल्हा");
// // // //       if (!formData.brothersMarried || !formData.brothersUnmarried) missingFields.push("भाऊ (संख्या)");
// // // //       if (!formData.sistersMarried || !formData.sistersUnmarried) missingFields.push("बहीण (संख्या)");
// // // //     }

// // // //     if (step === 4) {
// // // //       if (!formData.expectations) missingFields.push("जोडीदाराविषयी अपेक्षा (Expectations)");
// // // //       if (!formData.titleFather) missingFields.push("Father's Title");
// // // //       if (!formData.fatherName) missingFields.push("वडीलांचे/ पालकाचे नाव (Father's Name)");
// // // //       if (!formData.fatherAddress) missingFields.push("Father's Address");
// // // //       if (!formData.fatherMobile) missingFields.push("Father's Mobile");
// // // //     }

// // // //     if (missingFields.length > 0) {
// // // //       Alert.alert("Missing Information", `Please fill out:\n\n• ${missingFields.join("\n• ")}`);
// // // //       return false;
// // // //     }
// // // //     return true;
// // // //   };

// // // //   const next = () => {
// // // //     if (!validate()) return;
// // // //     if (step < 5) setStep(step + 1); 
// // // //   };

// // // //   const prev = () => { if (step > 1) setStep(step - 1); };

// // // //   const submitForm = () => {
// // // //     Alert.alert("Success", "Application Submitted For Verification 🎉");
// // // //     console.log("FINAL SUBMITTED DATA:", formData);
// // // //   };

// // // //   return (
// // // //     <SafeAreaView style={styles.container}>
// // // //       <LinearGradient colors={["#ea580c", "#f97316"]} style={styles.header}>
// // // //         <Text style={styles.title}>Suchi Booking</Text>
// // // //         <Text style={styles.sub}>
// // // //           {step === 5 ? "Review Application" : `Step ${step} of 4`}
// // // //         </Text>
// // // //       </LinearGradient>

// // // //       <View style={styles.formContainer}>
// // // //         {step === 1 && <Step1 data={formData} setData={setFormData} />}
// // // //         {step === 2 && <Step2 data={formData} setData={setFormData} />}
// // // //         {step === 3 && <Step3 data={formData} setData={setFormData} />}
// // // //         {step === 4 && <Step4 data={formData} setData={setFormData} />}
// // // //         {step === 5 && <Step5 data={formData} onEdit={prev} onSubmit={submitForm} />}
// // // //       </View>

// // // //       {step < 5 && (
// // // //         <View style={styles.footer}>
// // // //           {step > 1 && (
// // // //             <TouchableOpacity style={styles.prevBtn} onPress={prev}>
// // // //               <Text style={styles.prevText}>Previous</Text>
// // // //             </TouchableOpacity>
// // // //           )}
// // // //           <TouchableOpacity style={styles.nextBtn} onPress={next}>
// // // //             <Text style={styles.nextText}>{step === 4 ? "Preview" : "Next"}</Text>
// // // //           </TouchableOpacity>
// // // //         </View>
// // // //       )}
// // // //     </SafeAreaView>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: { flex: 1, backgroundColor: "#f5f5f5" },
// // // //   header: { padding: 16 },
// // // //   title: { color: "#fff", fontSize: 20, fontWeight: "bold" },
// // // //   sub: { color: "#fff", fontSize: 12 },
// // // //   formContainer: { flex: 1, padding: 16 },
// // // //   footer: { flexDirection: "row", padding: 16, backgroundColor: "#fff", borderTopWidth: 1, borderColor: "#e5e5e5" },
// // // //   nextBtn: { flex: 1, backgroundColor: "#2563eb", padding: 14, borderRadius: 5, alignItems: "center" },
// // // //   nextText: { color: "#fff", fontWeight: "bold" },
// // // //   prevBtn: { flex: 1, borderWidth: 1, borderColor: "#ccc", backgroundColor: "#fff", padding: 14, borderRadius: 5, alignItems: "center", marginRight: 10 },
// // // //   prevText: { color: "#333", fontWeight: "bold" },
// // // // });










// // // // // screens/SuchiBookingScreen.js - FIXED VERSION

// // // // import React, { useState } from "react";
// // // // import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
// // // // import { SafeAreaView } from "react-native-safe-area-context";
// // // // import { LinearGradient } from "expo-linear-gradient";

// // // // import Step1 from "./steps/Step1";
// // // // import Step2 from "./steps/Step2";
// // // // import Step3 from "./steps/Step3";
// // // // import Step4 from "./steps/Step4";
// // // // import Step5 from "./steps/Step5"; 

// // // // export default function SuchiBookingScreen() {
// // // //   const [step, setStep] = useState(1);

// // // //   const [formData, setFormData] = useState({
// // // //     firstName: "", middleName: "", lastName: "",
// // // //     birthName: "", birthNameEn: "", candidateType: "",
// // // //     firstNameMr: "", middleNameMr: "", lastNameMr: "",
// // // //     marathiNote: "", photo: null,
    
// // // //     educationLevel: "", education: "", employmentType: "",
// // // //     designation: "", company: "", jobLocation: "",
// // // //     mobile: "", monthlyIncome: "", marathiNote2: "",

// // // //     dob: "", birthHour: "", birthMinute: "",
// // // //     birthPlace: "", heightFeet: "", heightInches: "", complexion: "",
// // // //     bloodGroup: "", mamaKul: "", gotra: "",
// // // //     nativePlace: "", taluka: "", district: "",
// // // //     brothersMarried: "", brothersUnmarried: "",
// // // //     sistersMarried: "", sistersUnmarried: "",
// // // //     personalMobile: "", marathiNote3: "",

// // // //     expectations: "",
// // // //     titleFather: "श्री", fatherName: "", fatherAddress: "",
// // // //     fatherPhone: "", fatherMobile: "", fatherEmail: "",
// // // //     titleContact1: "श्री", contact1Name: "", contact1Address: "",
// // // //     contact1Phone: "", contact1Mobile: "",
// // // //     titleContact2: "श्री", contact2Name: "", contact2Address: "",
// // // //     contact2Phone: "", contact2Mobile: "",
// // // //     marathiNote4: "",
// // // //   });

// // // //   const validate = () => {
// // // //     let missingFields = [];

// // // //     if (step === 1) {
// // // //       if (!formData.firstName) missingFields.push("First Name");
// // // //       if (!formData.middleName) missingFields.push("Middle Name");
// // // //       if (!formData.lastName) missingFields.push("Last Name");
// // // //       if (!formData.firstNameMr) missingFields.push("पहिले नाव");
// // // //       if (!formData.middleNameMr) missingFields.push("वडिलांचे नाव");
// // // //       if (!formData.lastNameMr) missingFields.push("आडनाव");
// // // //       if (!formData.birthName) missingFields.push("जन्म नाव");
// // // //       if (!formData.birthNameEn) missingFields.push("Birth Name");
// // // //       if (!formData.candidateType) missingFields.push("Candidate Type");
// // // //       if (!formData.photo) missingFields.push("Photo");
// // // //     }

// // // //     if (step === 2) {
// // // //       if (!formData.educationLevel) missingFields.push("Education Level");
// // // //       if (!formData.education) missingFields.push("शिक्षण");
// // // //       if (!formData.employmentType) missingFields.push("नोकरी/ व्यवसाय");
// // // //       if (!formData.designation) missingFields.push("हुद्दा");
// // // //       if (!formData.company) missingFields.push("कंपनी");
// // // //       if (!formData.jobLocation) missingFields.push("नोकरीचे ठिकाण");
// // // //       if (!formData.mobile) missingFields.push("मोबाईल");
// // // //       if (!formData.monthlyIncome) missingFields.push("मासिक उत्पन्न (रु.)");
// // // //     }

// // // //     if (step === 3) {
// // // //       if (!formData.dob) missingFields.push("जन्म तारीख");
// // // //       if (!formData.birthPlace) missingFields.push("जन्म स्थळ");
// // // //       if (!formData.heightFeet) missingFields.push("ऊंची फूट");
// // // //       if (!formData.complexion) missingFields.push("वर्ण");
// // // //       if (!formData.bloodGroup) missingFields.push("रक्तगट");
// // // //       if (!formData.mamaKul) missingFields.push("मामा कुळ");
// // // //       if (!formData.gotra) missingFields.push("गोत्र");
// // // //       if (!formData.nativePlace) missingFields.push("मुळगाव");
// // // //       if (!formData.taluka) missingFields.push("तालुका");
// // // //       if (!formData.district) missingFields.push("जिल्हा");
// // // //       if (!formData.brothersMarried || !formData.brothersUnmarried) missingFields.push("भाऊ (संख्या)");
// // // //       if (!formData.sistersMarried || !formData.sistersUnmarried) missingFields.push("बहीण (संख्या)");
// // // //     }

// // // //     if (step === 4) {
// // // //       if (!formData.expectations) missingFields.push("जोडीदाराविषयी अपेक्षा (Expectations)");
// // // //       if (!formData.titleFather) missingFields.push("Father's Title");
// // // //       if (!formData.fatherName) missingFields.push("वडीलांचे/ पालकाचे नाव (Father's Name)");
// // // //       if (!formData.fatherAddress) missingFields.push("Father's Address");
// // // //       if (!formData.fatherMobile) missingFields.push("Father's Mobile");
// // // //     }

// // // //     if (missingFields.length > 0) {
// // // //       Alert.alert("Missing Information", `Please fill out:\n\n• ${missingFields.join("\n• ")}`);
// // // //       return false;
// // // //     }
// // // //     return true;
// // // //   };

// // // //   // ✅ FIXED: Separate logic for Step 4 → Step 5 preview
// // // //   const next = () => {
// // // //     if (step === 4) {
// // // //       // Go directly to Step 5 without validation
// // // //       setStep(5);
// // // //       return;
// // // //     }
// // // //     if (!validate()) return;
// // // //     if (step < 5) setStep(step + 1); 
// // // //   };

// // // //   // ✅ FIXED: Edit function that navigates back safely
// // // //   const editStep = (targetStep) => {
// // // //     if (formData && Object.keys(formData).length > 0) {
// // // //       setStep(targetStep);
// // // //     } else {
// // // //       Alert.alert("Error", "Form data corrupted. Please start over.");
// // // //       setStep(1);
// // // //     }
// // // //   };

// // // //   const prev = () => { 
// // // //     if (step > 1) setStep(step - 1); 
// // // //   };

// // // //   const submitForm = () => {
// // // //     Alert.alert("Success", "Application Submitted For Verification 🎉");
// // // //     console.log("FINAL SUBMITTED DATA:", formData);
// // // //     // Reset form and go to Step 1
// // // //     setStep(1);
// // // //   };

// // // //   return (
// // // //     <SafeAreaView style={styles.container}>
// // // //       <LinearGradient colors={["#ea580c", "#f97316"]} style={styles.header}>
// // // //         <Text style={styles.title}>Suchi Booking</Text>
// // // //         <Text style={styles.sub}>
// // // //           {step === 5 ? "Review Application" : `Step ${step} of 4`}
// // // //         </Text>
// // // //       </LinearGradient>

// // // //       <View style={styles.formContainer}>
// // // //         {step === 1 && <Step1 data={formData} setData={setFormData} />}
// // // //         {step === 2 && <Step2 data={formData} setData={setFormData} />}
// // // //         {step === 3 && <Step3 data={formData} setData={setFormData} />}
// // // //         {step === 4 && <Step4 data={formData} setData={setFormData} />}
// // // //         {step === 5 && <Step5 data={formData} onEdit={() => editStep(1)} onSubmit={submitForm} />}
// // // //       </View>

// // // //       {step < 5 && (
// // // //         <View style={styles.footer}>
// // // //           {step > 1 && (
// // // //             <TouchableOpacity style={styles.prevBtn} onPress={prev}>
// // // //               <Text style={styles.prevText}>Previous</Text>
// // // //             </TouchableOpacity>
// // // //           )}
// // // //           <TouchableOpacity style={styles.nextBtn} onPress={next}>
// // // //             <Text style={styles.nextText}>{step === 4 ? "Preview" : "Next"}</Text>
// // // //           </TouchableOpacity>
// // // //         </View>
// // // //       )}
// // // //     </SafeAreaView>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: { flex: 1, backgroundColor: "#f5f5f5" },
// // // //   header: { padding: 16 },
// // // //   title: { color: "#fff", fontSize: 20, fontWeight: "bold" },
// // // //   sub: { color: "#fff", fontSize: 12 },
// // // //   formContainer: { flex: 1, padding: 16 },
// // // //   footer: { flexDirection: "row", padding: 16, backgroundColor: "#fff", borderTopWidth: 1, borderColor: "#e5e5e5" },
// // // //   nextBtn: { flex: 1, backgroundColor: "#2563eb", padding: 14, borderRadius: 5, alignItems: "center" },
// // // //   nextText: { color: "#fff", fontWeight: "bold" },
// // // //   prevBtn: { flex: 1, borderWidth: 1, borderColor: "#ccc", backgroundColor: "#fff", padding: 14, borderRadius: 5, alignItems: "center", marginRight: 10 },
// // // //   prevText: { color: "#333", fontWeight: "bold" },
// // // // });














// // // // screens/SuchiBookingScreen.jsx
// // // import React, { useState } from "react";
// // // import {
// // //   View, Text, StyleSheet, ScrollView, TouchableOpacity,
// // //   SafeAreaView, TextInput, Alert,
// // // } from "react-native";
// // // import { LinearGradient } from "expo-linear-gradient";
// // // import { useNavigation } from "@react-navigation/native";

// // // // ─── Step indicator ───────────────────────────────────────────────────────────
// // // function StepBar({ current, total }) {
// // //   return (
// // //     <View style={sb.row}>
// // //       {Array.from({ length: total }).map((_, i) => (
// // //         <React.Fragment key={i}>
// // //           <View style={[sb.circle, i < current && sb.done, i === current - 1 && sb.active]}>
// // //             <Text style={[sb.num, (i < current || i === current - 1) && sb.numActive]}>
// // //               {i + 1}
// // //             </Text>
// // //           </View>
// // //           {i < total - 1 && (
// // //             <View style={[sb.line, i < current - 1 && sb.lineDone]} />
// // //           )}
// // //         </React.Fragment>
// // //       ))}
// // //     </View>
// // //   );
// // // }
// // // const sb = StyleSheet.create({
// // //   row:       { flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 14 },
// // //   circle:    { width: 32, height: 32, borderRadius: 16, backgroundColor: "#e0e0e0", alignItems: "center", justifyContent: "center" },
// // //   active:    { backgroundColor: "#f97316" },
// // //   done:      { backgroundColor: "#f97316" },
// // //   num:       { fontWeight: "bold", color: "#999", fontSize: 14 },
// // //   numActive: { color: "#fff" },
// // //   line:      { flex: 1, height: 3, backgroundColor: "#e0e0e0", marginHorizontal: 4 },
// // //   lineDone:  { backgroundColor: "#f97316" },
// // // });

// // // // ─── Reusable field components ────────────────────────────────────────────────
// // // const Field = ({ label, placeholder, value, onChangeText, keyboardType, required }) => (
// // //   <View style={f.wrap}>
// // //     <Text style={f.label}>{label}{required && <Text style={f.req}> *</Text>}</Text>
// // //     <TextInput
// // //       style={f.input}
// // //       placeholder={placeholder || label}
// // //       placeholderTextColor="#bbb"
// // //       value={value}
// // //       onChangeText={onChangeText}
// // //       keyboardType={keyboardType || "default"}
// // //     />
// // //   </View>
// // // );
// // // const f = StyleSheet.create({
// // //   wrap:  { marginBottom: 12 },
// // //   label: { fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 },
// // //   req:   { color: "red" },
// // //   input: { backgroundColor: "#f3f4f6", borderRadius: 10, padding: 12, fontSize: 14, color: "#222", borderWidth: 1, borderColor: "#e5e7eb" },
// // // });

// // // const SectionHeader = ({ title }) => (
// // //   <LinearGradient colors={["#f97316", "#fb923c"]} style={sh.bar}>
// // //     <Text style={sh.text}>{title}</Text>
// // //   </LinearGradient>
// // // );
// // // const sh = StyleSheet.create({
// // //   bar:  { borderRadius: 10, paddingVertical: 12, paddingHorizontal: 16, marginBottom: 16, marginTop: 8 },
// // //   text: { color: "#fff", fontWeight: "bold", fontSize: 15, textAlign: "center" },
// // // });

// // // // ─── STEP 1: Basic Information ────────────────────────────────────────────────
// // // function Step1({ data, setData }) {
// // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));
// // //   return (
// // //     <ScrollView showsVerticalScrollIndicator={false}>
// // //       <SectionHeader title="Basic Information - (Application Number : F2788)" />

// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 1, marginRight: 6 }}>
// // //           <Field label="First Name" required value={data.firstName} onChangeText={set("firstName")} />
// // //         </View>
// // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // //           <Field label="Middle Name" required value={data.middleName} onChangeText={set("middleName")} />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // //           <Field label="Last Name / Surname" required value={data.lastName} onChangeText={set("lastName")} />
// // //         </View>
// // //       </View>

// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 1, marginRight: 6 }}>
// // //           <Field label="पहिले नाव" required value={data.firstNameMr} onChangeText={set("firstNameMr")} />
// // //         </View>
// // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // //           <Field label="वडिलांचे नाव" required value={data.middleNameMr} onChangeText={set("middleNameMr")} />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // //           <Field label="शेवटचे नाव / आडनाव" required value={data.lastNameMr} onChangeText={set("lastNameMr")} />
// // //         </View>
// // //       </View>

// // //       <View style={styles.row2}>
// // //         <View style={{ flex: 1, marginRight: 8 }}>
// // //           <Field label="जन्म नाव" required value={data.birthName} onChangeText={set("birthName")} />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // //           <Field label="Birth Name" required value={data.birthNameEn} onChangeText={set("birthNameEn")} />
// // //         </View>
// // //       </View>

// // //       <Field label="Candidate Type" required value={data.candidateType} onChangeText={set("candidateType")} placeholder="e.g. वधू / वर" />

// // //       <View style={f.wrap}>
// // //         <Text style={f.label}>Photo <Text style={f.req}>*</Text></Text>
// // //         <TouchableOpacity style={styles.photoBtn}>
// // //           <Text style={styles.photoBtnText}>📷  Choose Photo</Text>
// // //         </TouchableOpacity>
// // //       </View>

// // //       <View style={f.wrap}>
// // //         <Text style={f.label}>(मराठी) Marathi Type Box</Text>
// // //         <TextInput
// // //           style={[f.input, { height: 80, textAlignVertical: "top" }]}
// // //           multiline
// // //           placeholder="Type in Marathi..."
// // //           placeholderTextColor="#bbb"
// // //           value={data.marathiNote}
// // //           onChangeText={set("marathiNote")}
// // //         />
// // //       </View>
// // //     </ScrollView>
// // //   );
// // // }

// // // // ─── STEP 2: Personal Details ─────────────────────────────────────────────────
// // // function Step2({ data, setData }) {
// // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));
// // //   return (
// // //     <ScrollView showsVerticalScrollIndicator={false}>
// // //       <SectionHeader title="Personal Information" />

// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 1.2, marginRight: 6 }}>
// // //           <Field label="जन्म तारीख" required value={data.dob} onChangeText={set("dob")} placeholder="DD/MM/YYYY" />
// // //         </View>
// // //         <View style={{ flex: 0.8, marginHorizontal: 3 }}>
// // //           <Field label="तास" value={data.birthHour} onChangeText={set("birthHour")} placeholder="--" keyboardType="numeric" />
// // //         </View>
// // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // //           <Field label="मिनिटे" value={data.birthMin} onChangeText={set("birthMin")} placeholder="00" keyboardType="numeric" />
// // //         </View>
// // //       </View>

// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 1.2, marginRight: 6 }}>
// // //           <Field label="जन्मस्थळ" required value={data.birthPlace} onChangeText={set("birthPlace")} placeholder="जन्मस्थळ" />
// // //         </View>
// // //         <View style={{ flex: 0.8, marginHorizontal: 3 }}>
// // //           <Field label="ऊंची फुट" required value={data.heightFt} onChangeText={set("heightFt")} placeholder="00" keyboardType="numeric" />
// // //         </View>
// // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // //           <Field label="इंच" value={data.heightIn} onChangeText={set("heightIn")} placeholder="00" keyboardType="numeric" />
// // //         </View>
// // //       </View>

// // //       <View style={styles.row2}>
// // //         <View style={{ flex: 1, marginRight: 8 }}>
// // //           <Field label="वर्ण" required value={data.complexion} onChangeText={set("complexion")} placeholder="गोरा" />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // //           <Field label="रक्तगट" required value={data.bloodGroup} onChangeText={set("bloodGroup")} placeholder="--" />
// // //         </View>
// // //       </View>

// // //       <View style={styles.row2}>
// // //         <View style={{ flex: 1, marginRight: 8 }}>
// // //           <Field label="मामकुळ" required value={data.mamkul} onChangeText={set("mamkul")} placeholder="मामकुळ" />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // //           <Field label="गोत्र" required value={data.gotra} onChangeText={set("gotra")} placeholder="--" />
// // //         </View>
// // //       </View>

// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 1, marginRight: 6 }}>
// // //           <Field label="मूळगाव" required value={data.village} onChangeText={set("village")} placeholder="मूळगाव" />
// // //         </View>
// // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // //           <Field label="तालुका" required value={data.taluka} onChangeText={set("taluka")} placeholder="तालुका" />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // //           <Field label="जिल्हा" required value={data.district} onChangeText={set("district")} placeholder="जिल्हा" />
// // //         </View>
// // //       </View>

// // //       <Text style={styles.subSectionLabel}>भाऊ (संख्या) <Text style={f.req}>*</Text></Text>
// // //       <View style={styles.row2}>
// // //         <View style={{ flex: 1, marginRight: 8 }}>
// // //           <Field label="विवाहित" value={data.brotherMarried} onChangeText={set("brotherMarried")} keyboardType="numeric" />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // //           <Field label="अविवाहित" value={data.brotherUnmarried} onChangeText={set("brotherUnmarried")} keyboardType="numeric" />
// // //         </View>
// // //       </View>

// // //       <Text style={styles.subSectionLabel}>बहिण (संख्या) <Text style={f.req}>*</Text></Text>
// // //       <View style={styles.row2}>
// // //         <View style={{ flex: 1, marginRight: 8 }}>
// // //           <Field label="विवाहित" value={data.sisterMarried} onChangeText={set("sisterMarried")} keyboardType="numeric" />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // //           <Field label="अविवाहित" value={data.sisterUnmarried} onChangeText={set("sisterUnmarried")} keyboardType="numeric" />
// // //         </View>
// // //       </View>

// // //       <Field label="वैयक्तिक मोबाइल नंबर" value={data.mobile} onChangeText={set("mobile")} keyboardType="phone-pad" placeholder="+91" />

// // //       <View style={f.wrap}>
// // //         <Text style={f.label}>Marathi Type Pad</Text>
// // //         <TextInput style={[f.input, { height: 70, textAlignVertical: "top" }]} multiline placeholder="Type in Marathi..." placeholderTextColor="#bbb" />
// // //       </View>
// // //     </ScrollView>
// // //   );
// // // }

// // // // ─── STEP 3: Qualification & Employment ───────────────────────────────────────
// // // function Step3({ data, setData }) {
// // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));
// // //   return (
// // //     <ScrollView showsVerticalScrollIndicator={false}>
// // //       <SectionHeader title="Education Details" />

// // //       <Field label="Education Level" required value={data.educationLevel} onChangeText={set("educationLevel")} placeholder="Graduate" />
// // //       <View style={f.wrap}>
// // //         <Text style={f.label}>शिक्षण <Text style={f.req}>*</Text></Text>
// // //         <TextInput
// // //           style={[f.input, { height: 80, textAlignVertical: "top" }]}
// // //           multiline
// // //           placeholder="Engineering"
// // //           placeholderTextColor="#bbb"
// // //           value={data.education}
// // //           onChangeText={set("education")}
// // //         />
// // //         <Text style={styles.hint}>For e.g.: Graduate, PG, BE, MTech, Engineer etc.</Text>
// // //       </View>

// // //       <SectionHeader title="Service / Business" />

// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 1, marginRight: 6 }}>
// // //           <Field label="नोकरी/ व्यवसाय" value={data.jobType} onChangeText={set("jobType")} placeholder="नोकरी" />
// // //         </View>
// // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // //           <Field label="हुद्दा" value={data.designation} onChangeText={set("designation")} placeholder="हुद्दा" />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // //           <Field label="कंपनी" value={data.company} onChangeText={set("company")} placeholder="AISOLO" />
// // //         </View>
// // //       </View>

// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 1, marginRight: 6 }}>
// // //           <Field label="नोकरीचे ठिकाण" value={data.jobLocation} onChangeText={set("jobLocation")} placeholder="Badlapur" />
// // //         </View>
// // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // //           <Field label="मोबाईल" value={data.jobMobile} onChangeText={set("jobMobile")} keyboardType="phone-pad" placeholder="9284521255" />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // //           <Field label="मासिक उत्पन्न (₹)" value={data.salary} onChangeText={set("salary")} keyboardType="numeric" placeholder="350000" />
// // //         </View>
// // //       </View>

// // //       <View style={f.wrap}>
// // //         <Text style={f.label}>Marathi Type Pad</Text>
// // //         <TextInput style={[f.input, { height: 70, textAlignVertical: "top" }]} multiline placeholder="Type in Marathi..." placeholderTextColor="#bbb" />
// // //       </View>
// // //     </ScrollView>
// // //   );
// // // }

// // // // ─── STEP 4: Expectations & Contact Details ───────────────────────────────────
// // // function Step4({ data, setData }) {
// // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));
// // //   return (
// // //     <ScrollView showsVerticalScrollIndicator={false}>
// // //       <SectionHeader title="जोडीदाराविषयी अपेक्षा" />
// // //       <View style={f.wrap}>
// // //         <Text style={f.label}>(छंद/गुण/स्वभाव/वांछनीय शेरे) <Text style={f.req}>*</Text></Text>
// // //         <TextInput
// // //           style={[f.input, { height: 90, textAlignVertical: "top" }]}
// // //           multiline
// // //           placeholder="Expectations"
// // //           placeholderTextColor="#bbb"
// // //           value={data.expectations}
// // //           onChangeText={set("expectations")}
// // //         />
// // //         <Text style={styles.hint}>For e.g.: Smart, अनुरूप, इंजिनीअर, डॉक्टर, मिळवती इत्र.</Text>
// // //       </View>

// // //       <SectionHeader title="Father's / Parents Details" />
// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 0.6, marginRight: 6 }}>
// // //           <Field label="Title" required value={data.fatherTitle} onChangeText={set("fatherTitle")} placeholder="श्री" />
// // //         </View>
// // //         <View style={{ flex: 1.4, marginHorizontal: 3 }}>
// // //           <Field label="वडिलांचे / पालकांचे नाव" required value={data.fatherName} onChangeText={set("fatherName")} placeholder="वडिलांचे नाव" />
// // //         </View>
// // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // //           <Field label="पत्ता" required value={data.fatherAddress} onChangeText={set("fatherAddress")} placeholder="पत्ता" />
// // //         </View>
// // //       </View>
// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 1, marginRight: 6 }}>
// // //           <Field label="दूरध्वनी (with STD)" value={data.fatherPhone} onChangeText={set("fatherPhone")} keyboardType="phone-pad" />
// // //         </View>
// // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // //           <Field label="मोबाईल" required value={data.fatherMobile} onChangeText={set("fatherMobile")} keyboardType="phone-pad" />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // //           <Field label="Email" value={data.fatherEmail} onChangeText={set("fatherEmail")} keyboardType="email-address" />
// // //         </View>
// // //       </View>

// // //       <SectionHeader title="संपर्कासाठी नाव व पत्ता 1" />
// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 0.6, marginRight: 6 }}>
// // //           <Field label="Title" value={data.contact1Title} onChangeText={set("contact1Title")} placeholder="श्री" />
// // //         </View>
// // //         <View style={{ flex: 1.4, marginHorizontal: 3 }}>
// // //           <Field label="संपर्काचे नाव" value={data.contact1Name} onChangeText={set("contact1Name")} placeholder="संपर्काचे नाव" />
// // //         </View>
// // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // //           <Field label="पत्ता" value={data.contact1Address} onChangeText={set("contact1Address")} placeholder="पत्ता" />
// // //         </View>
// // //       </View>
// // //       <View style={styles.row2}>
// // //         <View style={{ flex: 1, marginRight: 8 }}>
// // //           <Field label="दूरध्वनी (with STD)" value={data.contact1Phone} onChangeText={set("contact1Phone")} keyboardType="phone-pad" />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // //           <Field label="मोबाईल" value={data.contact1Mobile} onChangeText={set("contact1Mobile")} keyboardType="phone-pad" />
// // //         </View>
// // //       </View>

// // //       <SectionHeader title="संपर्कासाठी नाव व पत्ता 2" />
// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 0.6, marginRight: 6 }}>
// // //           <Field label="Title" value={data.contact2Title} onChangeText={set("contact2Title")} placeholder="श्री" />
// // //         </View>
// // //         <View style={{ flex: 1.4, marginHorizontal: 3 }}>
// // //           <Field label="संपर्काचे नाव" value={data.contact2Name} onChangeText={set("contact2Name")} placeholder="संपर्काचे नाव" />
// // //         </View>
// // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // //           <Field label="पत्ता" value={data.contact2Address} onChangeText={set("contact2Address")} placeholder="पत्ता" />
// // //         </View>
// // //       </View>
// // //       <View style={styles.row2}>
// // //         <View style={{ flex: 1, marginRight: 8 }}>
// // //           <Field label="दूरध्वनी (with STD)" value={data.contact2Phone} onChangeText={set("contact2Phone")} keyboardType="phone-pad" />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // //           <Field label="मोबाईल" value={data.contact2Mobile} onChangeText={set("contact2Mobile")} keyboardType="phone-pad" />
// // //         </View>
// // //       </View>

// // //       <View style={f.wrap}>
// // //         <Text style={f.label}>Marathi Type Pad</Text>
// // //         <TextInput style={[f.input, { height: 70, textAlignVertical: "top" }]} multiline placeholder="Type in Marathi..." placeholderTextColor="#bbb" />
// // //       </View>
// // //     </ScrollView>
// // //   );
// // // }

// // // // ─── STEP TITLES ──────────────────────────────────────────────────────────────
// // // const STEP_TITLES = [
// // //   "Basic Information",
// // //   "Personal Details",
// // //   "Qualification & Employment",
// // //   "Expectations & Contact",
// // // ];

// // // // ─── MAIN SCREEN ──────────────────────────────────────────────────────────────
// // // export default function SuchiBookingScreen() {
// // //   const navigation = useNavigation();
// // //   const [step, setStep] = useState(1);
// // //   const TOTAL = 4;

// // //   const [step1, setStep1] = useState({ firstName: "", middleName: "", lastName: "", firstNameMr: "", middleNameMr: "", lastNameMr: "", birthName: "", birthNameEn: "", candidateType: "", marathiNote: "" });
// // //   const [step2, setStep2] = useState({ dob: "", birthHour: "", birthMin: "", birthPlace: "", heightFt: "", heightIn: "", complexion: "", bloodGroup: "", mamkul: "", gotra: "", village: "", taluka: "", district: "", brotherMarried: "", brotherUnmarried: "", sisterMarried: "", sisterUnmarried: "", mobile: "" });
// // //   const [step3, setStep3] = useState({ educationLevel: "", education: "", jobType: "", designation: "", company: "", jobLocation: "", jobMobile: "", salary: "" });
// // //   const [step4, setStep4] = useState({ expectations: "", fatherTitle: "", fatherName: "", fatherAddress: "", fatherPhone: "", fatherMobile: "", fatherEmail: "", contact1Title: "", contact1Name: "", contact1Address: "", contact1Phone: "", contact1Mobile: "", contact2Title: "", contact2Name: "", contact2Address: "", contact2Phone: "", contact2Mobile: "" });

// // //   const handleNext = () => {
// // //     if (step < TOTAL) setStep(step + 1);
// // //     else {
// // //       Alert.alert("✅ Submitted!", "Your Suchi Booking form has been submitted successfully!", [
// // //         { text: "OK", onPress: () => navigation.navigate("Menu") },
// // //       ]);
// // //     }
// // //   };

// // //   const handleBack = () => {
// // //     if (step > 1) setStep(step - 1);
// // //     else navigation.goBack();
// // //   };

// // //   return (
// // //     <SafeAreaView style={styles.safe}>
// // //       {/* Header */}
// // //       <LinearGradient colors={["#f97316", "#fb923c"]} style={styles.header}>
// // //         <TouchableOpacity onPress={handleBack} style={styles.backBtn}>
// // //           <Text style={styles.backText}>← Back</Text>
// // //         </TouchableOpacity>
// // //         <Text style={styles.headerTitle}>Suchi Booking</Text>
// // //         <Text style={styles.headerSub}>{STEP_TITLES[step - 1]}</Text>
// // //       </LinearGradient>

// // //       {/* Step bar */}
// // //       <StepBar current={step} total={TOTAL} />

// // //       {/* Step label */}
// // //       <Text style={styles.stepLabel}>Step {step} of {TOTAL}: {STEP_TITLES[step - 1]}</Text>

// // //       {/* Form content */}
// // //       <View style={styles.formArea}>
// // //         {step === 1 && <Step1 data={step1} setData={setStep1} />}
// // //         {step === 2 && <Step2 data={step2} setData={setStep2} />}
// // //         {step === 3 && <Step3 data={step3} setData={setStep3} />}
// // //         {step === 4 && <Step4 data={step4} setData={setStep4} />}
// // //       </View>

// // //       {/* Next / Submit button */}
// // //       <View style={styles.footer}>
// // //         {step > 1 && (
// // //           <TouchableOpacity style={styles.prevBtn} onPress={handleBack}>
// // //             <Text style={styles.prevBtnText}>← Previous</Text>
// // //           </TouchableOpacity>
// // //         )}
// // //         <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
// // //           <Text style={styles.nextBtnText}>
// // //             {step === TOTAL ? "✅ Submit" : "Next →"}
// // //           </Text>
// // //         </TouchableOpacity>
// // //       </View>
// // //     </SafeAreaView>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   safe:          { flex: 1, backgroundColor: "#f5f5f5" },
// // //   header:        { paddingTop: 16, paddingBottom: 20, paddingHorizontal: 18 },
// // //   backBtn:       { marginBottom: 6 },
// // //   backText:      { color: "rgba(255,255,255,0.85)", fontSize: 14 },
// // //   headerTitle:   { color: "#fff", fontSize: 20, fontWeight: "bold" },
// // //   headerSub:     { color: "rgba(255,255,255,0.85)", fontSize: 12, marginTop: 2 },
// // //   stepLabel:     { textAlign: "center", color: "#f97316", fontWeight: "700", fontSize: 13, marginBottom: 6 },
// // //   formArea:      { flex: 1, paddingHorizontal: 16 },
// // //   footer:        { flexDirection: "row", padding: 16, gap: 10, backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: "#ffe5d0" },
// // //   nextBtn:       { flex: 1, backgroundColor: "#f97316", borderRadius: 12, padding: 15, alignItems: "center" },
// // //   nextBtnText:   { color: "#fff", fontWeight: "bold", fontSize: 16 },
// // //   prevBtn:       { flex: 1, backgroundColor: "#fff", borderRadius: 12, padding: 15, alignItems: "center", borderWidth: 1.5, borderColor: "#f97316" },
// // //   prevBtnText:   { color: "#f97316", fontWeight: "bold", fontSize: 16 },
// // //   row2:          { flexDirection: "row", marginBottom: 0 },
// // //   row3:          { flexDirection: "row", marginBottom: 0 },
// // //   hint:          { color: "#f97316", fontSize: 11, marginTop: 4 },
// // //   photoBtn:      { backgroundColor: "#f3f4f6", borderRadius: 10, padding: 14, borderWidth: 1, borderColor: "#e5e7eb", alignItems: "center" },
// // //   photoBtnText:  { color: "#666", fontWeight: "600" },
// // //   subSectionLabel: { fontSize: 13, fontWeight: "700", color: "#333", marginBottom: 6, marginTop: 4 },
// // // });













// // // import React, { useState } from "react";
// // // import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from "react-native";
// // // import { LinearGradient } from "expo-linear-gradient";
// // // import { useNavigation } from "@react-navigation/native";

// // // import Step1 from "../screens/steps/Step1";
// // // import Step2 from "../screens/steps/Step2";
// // // import Step3 from "../screens/steps/Step3";
// // // import Step4 from "../screens/steps/Step4";
// // // import Step5 from "../screens/steps/Step5";
// // // // ─── VALIDATION FUNCTIONS ─────────────────────────────────────────────────────
// // // // ─── VALIDATION FUNCTIONS (Keep the ones you already have) ────────────────────
// // // const validateStep1 = (data) => {
// // //   const missing = [];
// // //   if (!data.firstName?.trim()) missing.push("First Name");
// // //   if (!data.middleName?.trim()) missing.push("Middle Name");
// // //   if (!data.lastName?.trim()) missing.push("Last Name / Surname");
// // //   if (!data.firstNameMr?.trim()) missing.push("पहिले नाव");
// // //   if (!data.middleNameMr?.trim()) missing.push("वडिलांचे नाव");
// // //   if (!data.lastNameMr?.trim()) missing.push("शेवटचे नाव / आडनाव");
// // //   if (!data.birthName?.trim()) missing.push("जन्म नाव");
// // //   if (!data.birthNameEn?.trim()) missing.push("Birth Name");
// // //   if (!data.candidateType?.trim()) missing.push("Candidate Type");
// // //   if (!data.photo) missing.push("Photo");
// // //   // if (!data.marathiNote?.trim()) missing.push("(मराठी) Marathi Type Box");

// // //   if (missing.length > 0) {
// // //     Alert.alert("Missing Fields (Step 1)", "Please fill the following required fields:\n\n" + missing.join("\n"));
// // //     return false;
// // //   }
// // //   return true;
// // // };

// // // const validateStep2 = (data) => {
// // //   const missing = [];
// // //   if (!data.dob?.trim()) missing.push("जन्म तारीख");
// // //   if (!data.birthPlace?.trim()) missing.push("जन्मस्थळ");
// // //   if (!data.heightFt?.trim()) missing.push("ऊंची फुट");
// // //   if (!data.complexion?.trim()) missing.push("वर्ण");
// // //   if (!data.bloodGroup?.trim()) missing.push("रक्तगट");
// // //   if (!data.mamkul?.trim()) missing.push("मामकुळ");
// // //   if (!data.gotra?.trim()) missing.push("गोत्र");
// // //   if (!data.village?.trim()) missing.push("मूळगाव");
// // //   if (!data.taluka?.trim()) missing.push("तालुका");
// // //   if (!data.district?.trim()) missing.push("जिल्हा");
// // //   if (!data.brotherMarried?.trim() && !data.brotherUnmarried?.trim()) missing.push("भाऊ (संख्या)");
// // //   if (!data.sisterMarried?.trim() && !data.sisterUnmarried?.trim()) missing.push("बहिण (संख्या)");

// // //   if (missing.length > 0) {
// // //     Alert.alert("Missing Fields (Step 2)", "Please fill the following required fields:\n\n" + missing.join("\n"));
// // //     return false;
// // //   }
// // //   return true;
// // // };

// // // const validateStep3 = (data) => {
// // //   const missing = [];
// // //   if (!data.educationLevel?.trim()) missing.push("Education Level");
// // //   if (!data.education?.trim()) missing.push("शिक्षण");

// // //   if (missing.length > 0) {
// // //     Alert.alert("Missing Fields (Step 3)", "Please fill the following required fields:\n\n" + missing.join("\n"));
// // //     return false;
// // //   }
// // //   return true;
// // // };

// // // const validateStep4 = (data) => {
// // //   const missing = [];
// // //   if (!data.expectations?.trim()) missing.push("जोडीदाराविषयी अपेक्षा");
// // //   if (!data.fatherTitle?.trim()) missing.push("Father's Title");
// // //   if (!data.fatherName?.trim()) missing.push("वडिलांचे / पालकांचे नाव");
// // //   if (!data.fatherAddress?.trim()) missing.push("पत्ता (Father)");
// // //   if (!data.fatherMobile?.trim()) missing.push("मोबाईल (Father)");

// // //   if (missing.length > 0) {
// // //     Alert.alert("Missing Fields (Step 4)", "Please fill the following required fields:\n\n" + missing.join("\n"));
// // //     return false;
// // //   }
// // //   return true;
// // // };

// // // // ─── STEP INDICATOR COMPONENT ─────────────────────────────────────────────────
// // // function StepBar({ current, total }) {
// // //   return (
// // //     <View style={sb.row}>
// // //       {Array.from({ length: total }).map((_, i) => (
// // //         <React.Fragment key={i}>
// // //           <View style={[sb.circle, i < current && sb.done, i === current - 1 && sb.active]}>
// // //             <Text style={[sb.num, (i < current || i === current - 1) && sb.numActive]}>
// // //               {i + 1}
// // //             </Text>
// // //           </View>
// // //           {i < total - 1 && (
// // //             <View style={[sb.line, i < current - 1 && sb.lineDone]} />
// // //           )}
// // //         </React.Fragment>
// // //       ))}
// // //     </View>
// // //   );
// // // }

// // // const sb = StyleSheet.create({
// // //   row:       { flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 14 },
// // //   circle:    { width: 32, height: 32, borderRadius: 16, backgroundColor: "#e0e0e0", alignItems: "center", justifyContent: "center" },
// // //   active:    { backgroundColor: "#f97316" },
// // //   done:      { backgroundColor: "#f97316" },
// // //   num:       { fontWeight: "bold", color: "#999", fontSize: 14 },
// // //   numActive: { color: "#fff" },
// // //   line:      { flex: 1, height: 3, backgroundColor: "#e0e0e0", marginHorizontal: 2 },
// // //   lineDone:  { backgroundColor: "#f97316" },
// // // });

// // // // ─── ADDED 5TH TITLE ──────────────────────────────────────────────────────────
// // // const STEP_TITLES = [
// // //   "Basic Information",
// // //   "Personal Details",
// // //   "Qualification & Employment",
// // //   "Expectations & Contact",
// // //   "Review & Summary" // <-- Added Step 5
// // // ];

// // // // ─── MAIN SCREEN COMPONENT ────────────────────────────────────────────────────
// // // export default function SuchiBookingScreen() {
// // //   const navigation = useNavigation();
// // //   const [step, setStep] = useState(1);
// // //   const TOTAL = 5; // <-- Changed to 5

// // //   const [step1, setStep1] = useState({ firstName: "", middleName: "", lastName: "", firstNameMr: "", middleNameMr: "", lastNameMr: "", birthName: "", birthNameEn: "", candidateType: "", marathiNote: "", photo: null });
// // //   const [step2, setStep2] = useState({ dob: "", birthHour: "", birthMin: "", birthPlace: "", heightFt: "", heightIn: "", complexion: "", bloodGroup: "", mamkul: "", gotra: "", village: "", taluka: "", district: "", brotherMarried: "", brotherUnmarried: "", sisterMarried: "", sisterUnmarried: "", mobile: "" });
// // //   const [step3, setStep3] = useState({ educationLevel: "", education: "", jobType: "", designation: "", company: "", jobLocation: "", jobMobile: "", salary: "" });
// // //   const [step4, setStep4] = useState({ expectations: "", fatherTitle: "", fatherName: "", fatherAddress: "", fatherPhone: "", fatherMobile: "", fatherEmail: "", contact1Title: "", contact1Name: "", contact1Address: "", contact1Phone: "", contact1Mobile: "", contact2Title: "", contact2Name: "", contact2Address: "", contact2Phone: "", contact2Mobile: "" });

// // //   const handleNext = () => {
// // //     if (step === 1 && !validateStep1(step1)) return;
// // //     if (step === 2 && !validateStep2(step2)) return;
// // //     if (step === 3 && !validateStep3(step3)) return;
// // //     if (step === 4 && !validateStep4(step4)) return;
    
// // //     // Final step submission (Step 5)
// // //     if (step === 5) {
// // //       Alert.alert("✅ Submitted!", "Your Suchi Booking form has been submitted for verification successfully!", [
// // //         { text: "OK", onPress: () => navigation.navigate("Menu") },
// // //       ]);
// // //       return;
// // //     }

// // //     setStep(step + 1);
// // //   };

// // //   const handleBack = () => {
// // //     if (step > 1) setStep(step - 1);
// // //     else navigation.goBack();
// // //   };

// // //   return (
// // //     <SafeAreaView style={styles.safe}>
// // //       <LinearGradient colors={["#f97316", "#fb923c"]} style={styles.header}>
// // //         <TouchableOpacity onPress={handleBack} style={styles.backBtn}>
// // //           <Text style={styles.backText}>← Back</Text>
// // //         </TouchableOpacity>
// // //         <Text style={styles.headerTitle}>Suchi Booking</Text>
// // //         <Text style={styles.headerSub}>{STEP_TITLES[step - 1]}</Text>
// // //       </LinearGradient>

// // //       <StepBar current={step} total={TOTAL} />
// // //       <Text style={styles.stepLabel}>Step {step} of {TOTAL}: {STEP_TITLES[step - 1]}</Text>

// // //       <View style={styles.formArea}>
// // //         {step === 1 && <Step1 data={step1} setData={setStep1} />}
// // //         {step === 2 && <Step2 data={step2} setData={setStep2} />}
// // //         {step === 3 && <Step3 data={step3} setData={setStep3} />}
// // //         {step === 4 && <Step4 data={step4} setData={setStep4} />}
// // //         {step === 5 && <Step5 data1={step1} data2={step2} data3={step3} data4={step4} />}
// // //       </View>

// // //       <View style={styles.footer}>
// // //         {step > 1 && (
// // //           <TouchableOpacity style={styles.prevBtn} onPress={handleBack}>
// // //             <Text style={styles.prevBtnText}>← Previous</Text>
// // //           </TouchableOpacity>
// // //         )}
// // //         <TouchableOpacity 
// // //           style={[styles.nextBtn, step === TOTAL && { backgroundColor: "#10b981" }]} // Makes Submit button green
// // //           onPress={handleNext}
// // //         >
// // //           <Text style={styles.nextBtnText}>
// // //             {step === TOTAL ? "✅ Final Submit" : "Next →"}
// // //           </Text>
// // //         </TouchableOpacity>
// // //       </View>
// // //     </SafeAreaView>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   safe:          { flex: 1, backgroundColor: "#f5f5f5" },
// // //   header:        { paddingTop: 16, paddingBottom: 20, paddingHorizontal: 18 },
// // //   backBtn:       { marginBottom: 6 },
// // //   backText:      { color: "rgba(255,255,255,0.85)", fontSize: 14 },
// // //   headerTitle:   { color: "#fff", fontSize: 20, fontWeight: "bold" },
// // //   headerSub:     { color: "rgba(255,255,255,0.85)", fontSize: 12, marginTop: 2 },
// // //   stepLabel:     { textAlign: "center", color: "#f97316", fontWeight: "700", fontSize: 13, marginBottom: 6 },
// // //   formArea:      { flex: 1, paddingHorizontal: 16 },
// // //   footer:        { flexDirection: "row", padding: 16, gap: 10, backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: "#ffe5d0" },
// // //   nextBtn:       { flex: 1, backgroundColor: "#f97316", borderRadius: 12, padding: 15, alignItems: "center" },
// // //   nextBtnText:   { color: "#fff", fontWeight: "bold", fontSize: 16 },
// // //   prevBtn:       { flex: 1, backgroundColor: "#fff", borderRadius: 12, padding: 15, alignItems: "center", borderWidth: 1.5, borderColor: "#f97316" },
// // //   prevBtnText:   { color: "#f97316", fontWeight: "bold", fontSize: 16 },
// // // });










// // // new
// // import React, { useState } from "react";
// // import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from "react-native";
// // import { LinearGradient } from "expo-linear-gradient";
// // import { useNavigation } from "@react-navigation/native";

// // import Step1 from "../screens/steps/Step1";
// // import Step2 from "../screens/steps/Step2";
// // import Step3 from "../screens/steps/Step3";
// // import Step4 from "../screens/steps/Step4";
// // import Step5 from "../screens/steps/Step5";

// // // ─── VALIDATION FUNCTIONS ─────────────────────────────────────────────────────
// // const validateStep1 = (data) => {
// //   const missing = [];
// //   if (!data.firstName?.trim()) missing.push("First Name");
// //   if (!data.middleName?.trim()) missing.push("Middle Name");
// //   if (!data.lastName?.trim()) missing.push("Last Name / Surname");
// //   if (!data.firstNameMr?.trim()) missing.push("पहिले नाव");
// //   if (!data.middleNameMr?.trim()) missing.push("वडिलांचे नाव");
// //   if (!data.lastNameMr?.trim()) missing.push("शेवटचे नाव / आडनाव");
// //   if (!data.birthName?.trim()) missing.push("जन्म नाव");
// //   if (!data.birthNameEn?.trim()) missing.push("Birth Name");
// //   if (!data.candidateType?.trim()) missing.push("Candidate Type");
// //   if (!data.photo) missing.push("Photo");

// //   if (missing.length > 0) {
// //     Alert.alert("Missing Fields (Step 1)", "Please fill the following required fields:\n\n" + missing.join("\n"));
// //     return false;
// //   }
// //   return true;
// // };

// // const validateStep2 = (data) => {
// //   const missing = [];
// //   if (!data.dob?.trim()) missing.push("जन्म तारीख");
// //   if (!data.birthPlace?.trim()) missing.push("जन्मस्थळ");
// //   if (!data.heightFt?.trim()) missing.push("ऊंची फुट");
// //   if (!data.complexion?.trim()) missing.push("वर्ण");
// //   if (!data.bloodGroup?.trim()) missing.push("रक्तगट");
// //   if (!data.mamkul?.trim()) missing.push("मामकुळ");
// //   if (!data.gotra?.trim()) missing.push("गोत्र");
// //   if (!data.village?.trim()) missing.push("मूळगाव");
// //   if (!data.taluka?.trim()) missing.push("तालुका");
// //   if (!data.district?.trim()) missing.push("जिल्हा");
// //   if (!data.brotherMarried?.trim() && !data.brotherUnmarried?.trim()) missing.push("भाऊ (संख्या)");
// //   if (!data.sisterMarried?.trim() && !data.sisterUnmarried?.trim()) missing.push("बहिण (संख्या)");

// //   if (missing.length > 0) {
// //     Alert.alert("Missing Fields (Step 2)", "Please fill the following required fields:\n\n" + missing.join("\n"));
// //     return false;
// //   }
// //   return true;
// // };

// // const validateStep3 = (data) => {
// //   const missing = [];
// //   if (!data.educationLevel?.trim()) missing.push("Education Level");
// //   // "शिक्षण" (education) field removed — no longer required

// //   if (missing.length > 0) {
// //     Alert.alert("Missing Fields (Step 3)", "Please fill the following required fields:\n\n" + missing.join("\n"));
// //     return false;
// //   }
// //   return true;
// // };

// // const validateStep4 = (data) => {
// //   const missing = [];
// //   if (!data.expectations?.trim()) missing.push("जोडीदाराविषयी अपेक्षा");
// //   if (!data.fatherTitle?.trim()) missing.push("Father's Title");
// //   if (!data.fatherName?.trim()) missing.push("वडिलांचे / पालकांचे नाव");
// //   if (!data.fatherAddress?.trim()) missing.push("पत्ता (Father)");
// //   if (!data.fatherMobile?.trim()) missing.push("मोबाईल (Father)");

// //   if (missing.length > 0) {
// //     Alert.alert("Missing Fields (Step 4)", "Please fill the following required fields:\n\n" + missing.join("\n"));
// //     return false;
// //   }
// //   return true;
// // };

// // // ─── STEP INDICATOR COMPONENT ─────────────────────────────────────────────────
// // function StepBar({ current, total }) {
// //   return (
// //     <View style={sb.row}>
// //       {Array.from({ length: total }).map((_, i) => (
// //         <React.Fragment key={i}>
// //           <View style={[sb.circle, i < current && sb.done, i === current - 1 && sb.active]}>
// //             <Text style={[sb.num, (i < current || i === current - 1) && sb.numActive]}>
// //               {i + 1}
// //             </Text>
// //           </View>
// //           {i < total - 1 && (
// //             <View style={[sb.line, i < current - 1 && sb.lineDone]} />
// //           )}
// //         </React.Fragment>
// //       ))}
// //     </View>
// //   );
// // }

// // const sb = StyleSheet.create({
// //   row:       { flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 14 },
// //   circle:    { width: 32, height: 32, borderRadius: 16, backgroundColor: "#e0e0e0", alignItems: "center", justifyContent: "center" },
// //   active:    { backgroundColor: "#f97316" },
// //   done:      { backgroundColor: "#f97316" },
// //   num:       { fontWeight: "bold", color: "#999", fontSize: 14 },
// //   numActive: { color: "#fff" },
// //   line:      { flex: 1, height: 3, backgroundColor: "#e0e0e0", marginHorizontal: 2 },
// //   lineDone:  { backgroundColor: "#f97316" },
// // });

// // const STEP_TITLES = [
// //   "Basic Information",
// //   "Personal Details",
// //   "Qualification & Employment",
// //   "Expectations & Contact",
// //   "Review & Summary",
// // ];

// // // ─── MAIN SCREEN COMPONENT ────────────────────────────────────────────────────
// // export default function SuchiBookingScreen() {
// //   const navigation = useNavigation();
// //   const [step, setStep] = useState(1);
// //   const TOTAL = 5;

// //   const [step1, setStep1] = useState({ firstName: "", middleName: "", lastName: "", firstNameMr: "", middleNameMr: "", lastNameMr: "", birthName: "", birthNameEn: "", candidateType: "", marathiNote: "", photo: null });
// //   const [step2, setStep2] = useState({ dob: "", birthHour: "", birthMin: "", birthPlace: "", heightFt: "", heightIn: "", complexion: "", bloodGroup: "", mamkul: "", gotra: "", village: "", taluka: "", district: "", brotherMarried: "", brotherUnmarried: "", sisterMarried: "", sisterUnmarried: "", mobile: "" });
// //   const [step3, setStep3] = useState({ educationLevel: "", jobType: "", designation: "", company: "", jobLocation: "", jobMobile: "", salary: "" });
// //   const [step4, setStep4] = useState({ expectations: "", fatherTitle: "", fatherName: "", fatherAddress: "", fatherPhone: "", fatherMobile: "", fatherEmail: "", contact1Title: "", contact1Name: "", contact1Address: "", contact1Phone: "", contact1Mobile: "", contact2Title: "", contact2Name: "", contact2Address: "", contact2Phone: "", contact2Mobile: "" });

// //   const handleNext = () => {
// //     if (step === 1 && !validateStep1(step1)) return;
// //     if (step === 2 && !validateStep2(step2)) return;
// //     if (step === 3 && !validateStep3(step3)) return;
// //     if (step === 4 && !validateStep4(step4)) return;

// //     if (step === 5) {
// //       Alert.alert("✅ Submitted!", "Your Suchi Booking form has been submitted for verification successfully!", [
// //         { text: "OK", onPress: () => navigation.navigate("Menu") },
// //       ]);
// //       return;
// //     }

// //     setStep(step + 1);
// //   };

// //   const handleBack = () => {
// //     if (step > 1) setStep(step - 1);
// //     else navigation.goBack();
// //   };

// //   return (
// //     <SafeAreaView style={styles.safe}>
// //       <LinearGradient colors={["#f97316", "#fb923c"]} style={styles.header}>
// //         <TouchableOpacity onPress={handleBack} style={styles.backBtn}>
// //           <Text style={styles.backText}>← Back</Text>
// //         </TouchableOpacity>
// //         <Text style={styles.headerTitle}>Suchi Booking</Text>
// //         <Text style={styles.headerSub}>{STEP_TITLES[step - 1]}</Text>
// //       </LinearGradient>

// //       <StepBar current={step} total={TOTAL} />
// //       <Text style={styles.stepLabel}>Step {step} of {TOTAL}: {STEP_TITLES[step - 1]}</Text>

// //       <View style={styles.formArea}>
// //         {step === 1 && <Step1 data={step1} setData={setStep1} />}
// //         {step === 2 && <Step2 data={step2} setData={setStep2} />}
// //         {step === 3 && <Step3 data={step3} setData={setStep3} />}
// //         {step === 4 && <Step4 data={step4} setData={setStep4} />}
// //         {step === 5 && <Step5 data1={step1} data2={step2} data3={step3} data4={step4} />}
// //       </View>

// //       <View style={styles.footer}>
// //         {step > 1 && (
// //           <TouchableOpacity style={styles.prevBtn} onPress={handleBack}>
// //             <Text style={styles.prevBtnText}>← Previous</Text>
// //           </TouchableOpacity>
// //         )}
// //         <TouchableOpacity
// //           style={[styles.nextBtn, step === TOTAL && { backgroundColor: "#10b981" }]}
// //           onPress={handleNext}
// //         >
// //           <Text style={styles.nextBtnText}>
// //             {step === TOTAL ? "✅ Final Submit" : "Next →"}
// //           </Text>
// //         </TouchableOpacity>
// //       </View>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   safe:        { flex: 1, backgroundColor: "#f5f5f5" },
// //   header:      { paddingTop: 16, paddingBottom: 20, paddingHorizontal: 18 },
// //   backBtn:     { marginBottom: 6 },
// //   backText:    { color: "rgba(255,255,255,0.85)", fontSize: 14 },
// //   headerTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
// //   headerSub:   { color: "rgba(255,255,255,0.85)", fontSize: 12, marginTop: 2 },
// //   stepLabel:   { textAlign: "center", color: "#f97316", fontWeight: "700", fontSize: 13, marginBottom: 6 },
// //   formArea:    { flex: 1, paddingHorizontal: 16 },
// //   footer:      { flexDirection: "row", padding: 16, gap: 10, backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: "#ffe5d0" },
// //   nextBtn:     { flex: 1, backgroundColor: "#f97316", borderRadius: 12, padding: 15, alignItems: "center" },
// //   nextBtnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
// //   prevBtn:     { flex: 1, backgroundColor: "#fff", borderRadius: 12, padding: 15, alignItems: "center", borderWidth: 1.5, borderColor: "#f97316" },
// //   prevBtnText: { color: "#f97316", fontWeight: "bold", fontSize: 16 },
// // });











// import React, { useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { useNavigation } from "@react-navigation/native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

// import Step1 from "../screens/steps/Step1";
// import Step2 from "../screens/steps/Step2";
// import Step3 from "../screens/steps/Step3";
// import Step4 from "../screens/steps/Step4";
// import Step5 from "../screens/steps/Step5";

// // ─── VALIDATION FUNCTIONS ─────────────────────────────────────────────────────
// const validateStep1 = (data) => {
//   const missing = [];
//   if (!data.firstName?.trim()) missing.push("First Name");
//   if (!data.middleName?.trim()) missing.push("Middle Name");
//   if (!data.lastName?.trim()) missing.push("Last Name / Surname");
//   if (!data.firstNameMr?.trim()) missing.push("पहिले नाव");
//   if (!data.middleNameMr?.trim()) missing.push("वडिलांचे नाव");
//   if (!data.lastNameMr?.trim()) missing.push("शेवटचे नाव / आडनाव");
//   if (!data.birthName?.trim()) missing.push("जन्म नाव");
//   if (!data.birthNameEn?.trim()) missing.push("Birth Name");
//   if (!data.candidateType?.trim()) missing.push("Candidate Type");
//   if (!data.photo) missing.push("Photo");

//   if (missing.length > 0) {
//     Alert.alert("Missing Fields (Step 1)", "Please fill the following required fields:\n\n" + missing.join("\n"));
//     return false;
//   }
//   return true;
// };

// const validateStep2 = (data) => {
//   const missing = [];
//   if (!data.dob?.trim()) missing.push("जन्म तारीख");
//   if (!data.birthPlace?.trim()) missing.push("जन्मस्थळ");
//   if (!data.heightFt?.trim()) missing.push("ऊंची फुट");
//   if (!data.complexion?.trim()) missing.push("वर्ण");
//   if (!data.bloodGroup?.trim()) missing.push("रक्तगट");
//   if (!data.mamkul?.trim()) missing.push("मामकुळ");
//   if (!data.gotra?.trim()) missing.push("गोत्र");
//   if (!data.village?.trim()) missing.push("मूळगाव");
//   if (!data.taluka?.trim()) missing.push("तालुका");
//   if (!data.district?.trim()) missing.push("जिल्हा");
//   if (!data.brotherMarried?.trim() && !data.brotherUnmarried?.trim()) missing.push("भाऊ (संख्या)");
//   if (!data.sisterMarried?.trim() && !data.sisterUnmarried?.trim()) missing.push("बहिण (संख्या)");

//   if (missing.length > 0) {
//     Alert.alert("Missing Fields (Step 2)", "Please fill the following required fields:\n\n" + missing.join("\n"));
//     return false;
//   }
//   return true;
// };

// const validateStep3 = (data) => {
//   const missing = [];
//   if (!data.educationLevel?.trim()) missing.push("Education Level");
//   // "शिक्षण" (education) field removed — no longer required

//   if (missing.length > 0) {
//     Alert.alert("Missing Fields (Step 3)", "Please fill the following required fields:\n\n" + missing.join("\n"));
//     return false;
//   }
//   return true;
// };

// const validateStep4 = (data) => {
//   const missing = [];
//   if (!data.expectations?.trim()) missing.push("जोडीदाराविषयी अपेक्षा");
//   if (!data.fatherTitle?.trim()) missing.push("Father's Title");
//   if (!data.fatherName?.trim()) missing.push("वडिलांचे / पालकांचे नाव");
//   if (!data.fatherAddress?.trim()) missing.push("पत्ता (Father)");
//   if (!data.fatherMobile?.trim()) missing.push("मोबाईल (Father)");

//   if (missing.length > 0) {
//     Alert.alert("Missing Fields (Step 4)", "Please fill the following required fields:\n\n" + missing.join("\n"));
//     return false;
//   }
//   return true;
// };

// // ─── STEP INDICATOR COMPONENT ─────────────────────────────────────────────────
// function StepBar({ current, total }) {
//   return (
//     <View style={sb.row}>
//       {Array.from({ length: total }).map((_, i) => (
//         <React.Fragment key={i}>
//           <View style={[sb.circle, i < current && sb.done, i === current - 1 && sb.active]}>
//             <Text style={[sb.num, (i < current || i === current - 1) && sb.numActive]}>
//               {i + 1}
//             </Text>
//           </View>
//           {i < total - 1 && (
//             <View style={[sb.line, i < current - 1 && sb.lineDone]} />
//           )}
//         </React.Fragment>
//       ))}
//     </View>
//   );
// }

// const sb = StyleSheet.create({
//   row:       { flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 14 },
//   circle:    { width: 32, height: 32, borderRadius: 16, backgroundColor: "#e0e0e0", alignItems: "center", justifyContent: "center" },
//   active:    { backgroundColor: "#f97316" },
//   done:      { backgroundColor: "#f97316" },
//   num:       { fontWeight: "bold", color: "#999", fontSize: 14 },
//   numActive: { color: "#fff" },
//   line:      { flex: 1, height: 3, backgroundColor: "#e0e0e0", marginHorizontal: 2 },
//   lineDone:  { backgroundColor: "#f97316" },
// });

// const STEP_TITLES = [
//   "Basic Information",
//   "Personal Details",
//   "Qualification & Employment",
//   "Expectations & Contact",
//   "Review & Summary",
// ];

// // ─── MAIN SCREEN COMPONENT ────────────────────────────────────────────────────
// export default function SuchiBookingScreen() {
//   const navigation = useNavigation();
//   const insets = useSafeAreaInsets();
//   const [step, setStep] = useState(1);
//   const TOTAL = 5;

//   const [step1, setStep1] = useState({ firstName: "", middleName: "", lastName: "", firstNameMr: "", middleNameMr: "", lastNameMr: "", birthName: "", birthNameEn: "", candidateType: "", marathiNote: "", photo: null });
//   const [step2, setStep2] = useState({ dob: "", birthHour: "", birthMin: "", birthPlace: "", heightFt: "", heightIn: "", complexion: "", bloodGroup: "", mamkul: "", gotra: "", village: "", taluka: "", district: "", brotherMarried: "", brotherUnmarried: "", sisterMarried: "", sisterUnmarried: "", mobile: "" });
//   const [step3, setStep3] = useState({ educationLevel: "", jobType: "", designation: "", company: "", jobLocation: "", jobMobile: "", salary: "" });
//   const [step4, setStep4] = useState({ expectations: "", fatherTitle: "", fatherName: "", fatherAddress: "", fatherPhone: "", fatherMobile: "", fatherEmail: "", contact1Title: "", contact1Name: "", contact1Address: "", contact1Phone: "", contact1Mobile: "", contact2Title: "", contact2Name: "", contact2Address: "", contact2Phone: "", contact2Mobile: "" });

//   const handleNext = () => {
//     if (step === 1 && !validateStep1(step1)) return;
//     if (step === 2 && !validateStep2(step2)) return;
//     if (step === 3 && !validateStep3(step3)) return;
//     if (step === 4 && !validateStep4(step4)) return;

//     if (step === 5) {
//       Alert.alert("✅ Submitted!", "Your Suchi Booking form has been submitted for verification successfully!", [
//         { text: "OK", onPress: () => navigation.navigate("Menu") },
//       ]);
//       return;
//     }

//     setStep(step + 1);
//   };

//   const handleBack = () => {
//     if (step > 1) setStep(step - 1);
//     else navigation.goBack();
//   };

//   return (
//     <SafeAreaView style={styles.safe}>
//       <LinearGradient colors={["#f97316", "#fb923c"]} style={styles.header}>
//         <TouchableOpacity onPress={handleBack} style={styles.backBtn}>
//           <Text style={styles.backText}>← Back</Text>
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Suchi Booking</Text>
//         <Text style={styles.headerSub}>{STEP_TITLES[step - 1]}</Text>
//       </LinearGradient>

//       <StepBar current={step} total={TOTAL} />
//       <Text style={styles.stepLabel}>Step {step} of {TOTAL}: {STEP_TITLES[step - 1]}</Text>

//       <View style={styles.formArea}>
//         {step === 1 && <Step1 data={step1} setData={setStep1} />}
//         {step === 2 && <Step2 data={step2} setData={setStep2} />}
//         {step === 3 && <Step3 data={step3} setData={setStep3} />}
//         {step === 4 && <Step4 data={step4} setData={setStep4} />}
//         {step === 5 && <Step5 data1={step1} data2={step2} data3={step3} data4={step4} />}
//       </View>

//       <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 16) }]}>
//         {step > 1 && (
//           <TouchableOpacity style={styles.prevBtn} onPress={handleBack}>
//             <Text style={styles.prevBtnText}>← Previous</Text>
//           </TouchableOpacity>
//         )}
//         <TouchableOpacity
//           style={[styles.nextBtn, step === TOTAL && { backgroundColor: "#10b981" }]}
//           onPress={handleNext}
//         >
//           <Text style={styles.nextBtnText}>
//             {step === TOTAL ? "✅ Final Submit" : "Next →"}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safe:        { flex: 1, backgroundColor: "#f5f5f5" },
//   header:      { paddingTop: 16, paddingBottom: 20, paddingHorizontal: 18 },
//   backBtn:     { marginBottom: 6 },
//   backText:    { color: "rgba(255,255,255,0.85)", fontSize: 14 },
//   headerTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
//   headerSub:   { color: "rgba(255,255,255,0.85)", fontSize: 12, marginTop: 2 },
//   stepLabel:   { textAlign: "center", color: "#f97316", fontWeight: "700", fontSize: 13, marginBottom: 6 },
//   formArea:    { flex: 1, paddingHorizontal: 16 },
//   footer:      { flexDirection: "row", padding: 16, paddingBottom: 28, gap: 10, backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: "#ffe5d0" },
//   nextBtn:     { flex: 1, backgroundColor: "#f97316", borderRadius: 12, padding: 15, alignItems: "center" },
//   nextBtnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
//   prevBtn:     { flex: 1, backgroundColor: "#fff", borderRadius: 12, padding: 15, alignItems: "center", borderWidth: 1.5, borderColor: "#f97316" },
//   prevBtnText: { color: "#f97316", fontWeight: "bold", fontSize: 16 },
// });





// new
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Step1 from "../screens/steps/Step1";
import Step2 from "../screens/steps/Step2";
import Step3 from "../screens/steps/Step3";
import Step4 from "../screens/steps/Step4";
import Step5 from "../screens/steps/Step5";

// ─── VALIDATION FUNCTIONS ─────────────────────────────────────────────────────
const validateStep1 = (data) => {
  const missing = [];
  if (!data.firstName?.trim()) missing.push("First Name");
  if (!data.middleName?.trim()) missing.push("Middle Name");
  if (!data.lastName?.trim()) missing.push("Last Name / Surname");
  if (!data.firstNameMr?.trim()) missing.push("पहिले नाव");
  if (!data.middleNameMr?.trim()) missing.push("वडिलांचे नाव");
  if (!data.lastNameMr?.trim()) missing.push("शेवटचे नाव / आडनाव");
  if (!data.birthName?.trim()) missing.push("जन्म नाव");
  if (!data.birthNameEn?.trim()) missing.push("Birth Name");
  if (!data.candidateType?.trim()) missing.push("Candidate Type");
  if (!data.photo) missing.push("Photo");

  if (missing.length > 0) {
    Alert.alert("Missing Fields (Step 1)", "Please fill the following required fields:\n\n" + missing.join("\n"));
    return false;
  }
  return true;
};

const validateStep2 = (data) => {
  const missing = [];
  if (!data.dob?.trim()) missing.push("जन्म तारीख");
  if (!data.birthPlace?.trim()) missing.push("जन्मस्थळ");
  if (!data.heightFt?.trim()) missing.push("ऊंची फुट");
  if (!data.complexion?.trim()) missing.push("वर्ण");
  if (!data.bloodGroup?.trim()) missing.push("रक्तगट");
  if (!data.mamkul?.trim()) missing.push("मामकुळ");
  if (!data.gotra?.trim()) missing.push("गोत्र");
  if (!data.village?.trim()) missing.push("मूळगाव");
  if (!data.taluka?.trim()) missing.push("तालुका");
  if (!data.district?.trim()) missing.push("जिल्हा");
  if (!data.brotherMarried?.trim() && !data.brotherUnmarried?.trim()) missing.push("भाऊ (संख्या)");
  if (!data.sisterMarried?.trim() && !data.sisterUnmarried?.trim()) missing.push("बहिण (संख्या)");

  if (missing.length > 0) {
    Alert.alert("Missing Fields (Step 2)", "Please fill the following required fields:\n\n" + missing.join("\n"));
    return false;
  }
  return true;
};

const validateStep3 = (data) => {
  const missing = [];
  if (!data.educationLevel?.trim()) missing.push("Education Level");

  if (missing.length > 0) {
    Alert.alert("Missing Fields (Step 3)", "Please fill the following required fields:\n\n" + missing.join("\n"));
    return false;
  }
  return true;
};

const validateStep4 = (data) => {
  const missing = [];
  if (!data.expectations?.trim()) missing.push("जोडीदाराविषयी अपेक्षा");
  if (!data.fatherTitle?.trim()) missing.push("Father's Title");
  if (!data.fatherName?.trim()) missing.push("वडिलांचे / पालकांचे नाव");
  if (!data.fatherAddress?.trim()) missing.push("पत्ता (Father)");
  if (!data.fatherMobile?.trim()) missing.push("मोबाईल (Father)");

  if (missing.length > 0) {
    Alert.alert("Missing Fields (Step 4)", "Please fill the following required fields:\n\n" + missing.join("\n"));
    return false;
  }
  return true;
};

// ─── STEP INDICATOR COMPONENT ─────────────────────────────────────────────────
function StepBar({ current, total }) {
  return (
    <View style={sb.row}>
      {Array.from({ length: total }).map((_, i) => (
        <React.Fragment key={i}>
          <View style={[sb.circle, i < current && sb.done, i === current - 1 && sb.active]}>
            <Text style={[sb.num, (i < current || i === current - 1) && sb.numActive]}>
              {i + 1}
            </Text>
          </View>
          {i < total - 1 && (
            <View style={[sb.line, i < current - 1 && sb.lineDone]} />
          )}
        </React.Fragment>
      ))}
    </View>
  );
}

const sb = StyleSheet.create({
  row:       { flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 14 },
  circle:    { width: 32, height: 32, borderRadius: 16, backgroundColor: "#e0e0e0", alignItems: "center", justifyContent: "center" },
  active:    { backgroundColor: "#f97316" },
  done:      { backgroundColor: "#f97316" },
  num:       { fontWeight: "bold", color: "#999", fontSize: 14 },
  numActive: { color: "#fff" },
  line:      { flex: 1, height: 3, backgroundColor: "#e0e0e0", marginHorizontal: 2 },
  lineDone:  { backgroundColor: "#f97316" },
});

const STEP_TITLES = [
  "Basic Information",
  "Personal Details",
  "Qualification & Employment",
  "Expectations & Contact",
  "Review & Summary",
];

// ─── MAIN SCREEN COMPONENT ────────────────────────────────────────────────────
export default function SuchiBookingScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [step, setStep] = useState(1);
  const TOTAL = 5;

  const [step1, setStep1] = useState({ firstName: "", middleName: "", lastName: "", firstNameMr: "", middleNameMr: "", lastNameMr: "", birthName: "", birthNameEn: "", candidateType: "", marathiNote: "", photo: null });
  const [step2, setStep2] = useState({ dob: "", birthHour: "", birthMin: "", birthPlace: "", heightFt: "", heightIn: "", complexion: "", bloodGroup: "", mamkul: "", gotra: "", village: "", taluka: "", district: "", brotherMarried: "", brotherUnmarried: "", sisterMarried: "", sisterUnmarried: "", mobile: "" });
  const [step3, setStep3] = useState({ educationLevel: "", jobType: "", designation: "", company: "", jobLocation: "", jobMobile: "", salary: "" });
  const [step4, setStep4] = useState({ expectations: "", fatherTitle: "", fatherName: "", fatherAddress: "", fatherPhone: "", fatherMobile: "", fatherEmail: "", contact1Title: "", contact1Name: "", contact1Address: "", contact1Phone: "", contact1Mobile: "", contact2Title: "", contact2Name: "", contact2Address: "", contact2Phone: "", contact2Mobile: "" });

  const handleNext = () => {
    if (step === 1 && !validateStep1(step1)) return;
    if (step === 2 && !validateStep2(step2)) return;
    if (step === 3 && !validateStep3(step3)) return;
    if (step === 4 && !validateStep4(step4)) return;

    if (step === 5) {
      Alert.alert("✅ Submitted!", "Your Suchi Booking form has been submitted for verification successfully!", [
        { text: "OK", onPress: () => navigation.navigate("Menu") },
      ]);
      return;
    }

    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safe}>
      <LinearGradient colors={["#f97316", "#fb923c"]} style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Suchi Booking</Text>
        <Text style={styles.headerSub}>{STEP_TITLES[step - 1]}</Text>
      </LinearGradient>

      <StepBar current={step} total={TOTAL} />
      <Text style={styles.stepLabel}>Step {step} of {TOTAL}: {STEP_TITLES[step - 1]}</Text>

      <View style={styles.formArea}>
        {step === 1 && <Step1 data={step1} setData={setStep1} />}
        {step === 2 && <Step2 data={step2} setData={setStep2} />}
        {step === 3 && <Step3 data={step3} setData={setStep3} />}
        {step === 4 && <Step4 data={step4} setData={setStep4} />}
        {step === 5 && <Step5 data1={step1} data2={step2} data3={step3} data4={step4} />}
      </View>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        {step > 1 && (
          <TouchableOpacity style={styles.prevBtn} onPress={handleBack}>
            <Text style={styles.prevBtnText}>← Previous</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[styles.nextBtn, step === TOTAL && { backgroundColor: "#10b981" }]}
          onPress={handleNext}
        >
          <Text style={styles.nextBtnText}>
            {step === TOTAL ? "✅ Final Submit" : "Next →"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:        { flex: 1, backgroundColor: "#f5f5f5" },
  header:      { paddingTop: 16, paddingBottom: 20, paddingHorizontal: 18 },
  backBtn:     { marginBottom: 6 },
  backText:    { color: "rgba(255,255,255,0.85)", fontSize: 14 },
  headerTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  headerSub:   { color: "rgba(255,255,255,0.85)", fontSize: 12, marginTop: 2 },
  stepLabel:   { textAlign: "center", color: "#f97316", fontWeight: "700", fontSize: 13, marginBottom: 6 },
  formArea:    { flex: 1, paddingHorizontal: 16 },
  footer:      { flexDirection: "row", padding: 16, paddingBottom: 28, gap: 10, backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: "#ffe5d0" },
  
  // ─── UPDATED BUTTON COLORS ───
  // Next button is now Blue (#2563EB)
  nextBtn:     { flex: 1, backgroundColor: "#2563EB", borderRadius: 12, padding: 15, alignItems: "center" },
  nextBtnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  
  // Previous button remains Orange outline
  prevBtn:     { flex: 1, backgroundColor: "#fff", borderRadius: 12, padding: 15, alignItems: "center", borderWidth: 1.5, borderColor: "#f97316" },
  prevBtnText: { color: "#f97316", fontWeight: "bold", fontSize: 16 },
});