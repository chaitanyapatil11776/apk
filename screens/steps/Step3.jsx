// // // // // // // // // // import React from "react";
// // // // // // // // // // import { View, Text, ScrollView, TextInput } from "react-native";
// // // // // // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // // // // // export default function Step3({ data, setData }) {
// // // // // // // // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));
  
// // // // // // // // // //   return (
// // // // // // // // // //     <ScrollView showsVerticalScrollIndicator={false}>
// // // // // // // // // //       <SectionHeader title="Education Details" />

// // // // // // // // // //       <Field label="Education Level" required value={data.educationLevel} onChangeText={set("educationLevel")} placeholder="Graduate" />
      
// // // // // // // // // //       <View style={styles.marathiPadWrap}>
// // // // // // // // // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>शिक्षण <Text style={{ color: "red" }}>*</Text></Text>
// // // // // // // // // //         <TextInput
// // // // // // // // // //           style={[styles.marathiPad, { height: 80 }]}
// // // // // // // // // //           multiline
// // // // // // // // // //           placeholder="Engineering"
// // // // // // // // // //           placeholderTextColor="#bbb"
// // // // // // // // // //           value={data.education}
// // // // // // // // // //           onChangeText={set("education")}
// // // // // // // // // //         />
// // // // // // // // // //         <Text style={styles.hint}>For e.g.: Graduate, PG, BE, MTech, Engineer etc.</Text>
// // // // // // // // // //       </View>

// // // // // // // // // //       <SectionHeader title="Service / Business" />

// // // // // // // // // //       <View style={styles.row3}>
// // // // // // // // // //         <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // //           <Field label="नोकरी/ व्यवसाय" value={data.jobType} onChangeText={set("jobType")} placeholder="नोकरी" />
// // // // // // // // // //         </View>
// // // // // // // // // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // //           <Field label="हुद्दा" value={data.designation} onChangeText={set("designation")} placeholder="हुद्दा" />
// // // // // // // // // //         </View>
// // // // // // // // // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // //           <Field label="कंपनी" value={data.company} onChangeText={set("company")} placeholder="AISOLO" />
// // // // // // // // // //         </View>
// // // // // // // // // //       </View>

// // // // // // // // // //       <View style={styles.row3}>
// // // // // // // // // //         <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // //           <Field label="नोकरीचे ठिकाण" value={data.jobLocation} onChangeText={set("jobLocation")} placeholder="Badlapur" />
// // // // // // // // // //         </View>
// // // // // // // // // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // //           <Field label="मोबाईल" value={data.jobMobile} onChangeText={set("jobMobile")} keyboardType="phone-pad" placeholder="9284521255" />
// // // // // // // // // //         </View>
// // // // // // // // // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // //           <Field label="मासिक उत्पन्न (₹)" value={data.salary} onChangeText={set("salary")} keyboardType="numeric" placeholder="350000" />
// // // // // // // // // //         </View>
// // // // // // // // // //       </View>

// // // // // // // // // //       <View style={styles.marathiPadWrap}>
// // // // // // // // // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>Marathi Type Pad</Text>
// // // // // // // // // //         <TextInput style={styles.marathiPad} multiline placeholder="Type in Marathi..." placeholderTextColor="#bbb" />
// // // // // // // // // //       </View>
// // // // // // // // // //     </ScrollView>
// // // // // // // // // //   );
// // // // // // // // // // }











// // // // // // // // // import React from "react";
// // // // // // // // // import { View, Text, ScrollView, TextInput } from "react-native";
// // // // // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // // // // export default function Step3({ data, setData }) {
  
// // // // // // // // //   // ---------------------------------------------------------
// // // // // // // // //   // LOGIC 1: ENGLISH ONLY
// // // // // // // // //   // Blocks Marathi characters. Allows A-Z, 0-9, and spaces.
// // // // // // // // //   // ---------------------------------------------------------
// // // // // // // // //   const handleEnglishInput = (key) => (text) => {
// // // // // // // // //     const englishOnly = text.replace(/[^a-zA-Z0-9\s]/g, "");
// // // // // // // // //     setData((p) => ({ ...p, [key]: englishOnly }));
// // // // // // // // //   };

// // // // // // // // //   // ---------------------------------------------------------
// // // // // // // // //   // LOGIC 2: MARATHI ONLY (Strict)
// // // // // // // // //   // Blocks English characters (a-z, A-Z).
// // // // // // // // //   // Allows Marathi (Devanagari), Numbers, Space, and Punctuation.
// // // // // // // // //   // ---------------------------------------------------------
// // // // // // // // //   const handleMarathiInput = (key) => (text) => {
// // // // // // // // //     const marathiOnly = text.replace(/[^\u0900-\u097F0-9\s.,?!]/g, "");
// // // // // // // // //     setData((p) => ({ ...p, [key]: marathiOnly }));
// // // // // // // // //   };

// // // // // // // // //   // Helper for Numbers Only
// // // // // // // // //   const handleNumberInput = (key) => (text) => {
// // // // // // // // //     const numbersOnly = text.replace(/[^0-9]/g, "");
// // // // // // // // //     setData((p) => ({ ...p, [key]: numbersOnly }));
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <ScrollView showsVerticalScrollIndicator={false}>
// // // // // // // // //       <SectionHeader title="Education Details" />

// // // // // // // // //       {/* ENGLISH ONLY FIELD */}
// // // // // // // // //       <Field 
// // // // // // // // //         label="Education Level" 
// // // // // // // // //         required 
// // // // // // // // //         value={data.educationLevel} 
// // // // // // // // //         onChangeText={handleEnglishInput("educationLevel")} 
// // // // // // // // //         placeholder="e.g. Graduate (English Only)" 
// // // // // // // // //       />
      
// // // // // // // // //       {/* MARATHI ONLY SECTION */}
// // // // // // // // //       <View style={styles.marathiPadWrap}>
// // // // // // // // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // // //           शिक्षण <Text style={{ color: "red" }}>*</Text> (फक्त मराठी)
// // // // // // // // //         </Text>
// // // // // // // // //         <TextInput
// // // // // // // // //           style={[styles.marathiPad, { height: 80 }]}
// // // // // // // // //           multiline
// // // // // // // // //           placeholder="उदा. इंजिनिअरिंग"
// // // // // // // // //           placeholderTextColor="#bbb"
// // // // // // // // //           value={data.education}
// // // // // // // // //           onChangeText={handleMarathiInput("education")}
// // // // // // // // //         />
// // // // // // // // //         <Text style={styles.hint}>उदा: पदवीधर, इंजिनिअर, डॉक्टर इ.</Text>
// // // // // // // // //       </View>

// // // // // // // // //       <SectionHeader title="Service / Business" />

// // // // // // // // //       {/* MARATHI FIELDS FOR JOB TYPE & DESIGNATION */}
// // // // // // // // //       <View style={styles.row3}>
// // // // // // // // //         <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // //           <Field 
// // // // // // // // //             label="नोकरी/ व्यवसाय" 
// // // // // // // // //             value={data.jobType} 
// // // // // // // // //             onChangeText={handleMarathiInput("jobType")} 
// // // // // // // // //             placeholder="नोकरी" 
// // // // // // // // //           />
// // // // // // // // //         </View>
// // // // // // // // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // //           <Field 
// // // // // // // // //             label="हुद्दा" 
// // // // // // // // //             value={data.designation} 
// // // // // // // // //             onChangeText={handleMarathiInput("designation")} 
// // // // // // // // //             placeholder="हुद्दा" 
// // // // // // // // //           />
// // // // // // // // //         </View>
// // // // // // // // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // //           {/* Company names are often English/Numbers */}
// // // // // // // // //           <Field 
// // // // // // // // //             label="कंपनी" 
// // // // // // // // //             value={data.company} 
// // // // // // // // //             onChangeText={handleEnglishInput("company")} 
// // // // // // // // //             placeholder="AISOLO" 
// // // // // // // // //           />
// // // // // // // // //         </View>
// // // // // // // // //       </View>

// // // // // // // // //       <View style={styles.row3}>
// // // // // // // // //         <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // //           <Field 
// // // // // // // // //             label="नोकरीचे ठिकाण" 
// // // // // // // // //             value={data.jobLocation} 
// // // // // // // // //             onChangeText={handleEnglishInput("jobLocation")} 
// // // // // // // // //             placeholder="Badlapur" 
// // // // // // // // //           />
// // // // // // // // //         </View>
// // // // // // // // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // //           <Field 
// // // // // // // // //             label="मोबाईल" 
// // // // // // // // //             value={data.jobMobile} 
// // // // // // // // //             onChangeText={handleNumberInput("jobMobile")} 
// // // // // // // // //             keyboardType="phone-pad" 
// // // // // // // // //             placeholder="9284521255" 
// // // // // // // // //           />
// // // // // // // // //         </View>
// // // // // // // // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // //           <Field 
// // // // // // // // //             label="मासिक उत्पन्न (₹)" 
// // // // // // // // //             value={data.salary} 
// // // // // // // // //             onChangeText={handleNumberInput("salary")} 
// // // // // // // // //             keyboardType="numeric" 
// // // // // // // // //             placeholder="350000" 
// // // // // // // // //           />
// // // // // // // // //         </View>
// // // // // // // // //       </View>

// // // // // // // // //       {/* MARATHI TYPE PAD */}
// // // // // // // // //       <View style={styles.marathiPadWrap}>
// // // // // // // // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // // //           Marathi Type Pad (Marathi Only)
// // // // // // // // //         </Text>
// // // // // // // // //         <TextInput 
// // // // // // // // //           style={styles.marathiPad} 
// // // // // // // // //           multiline 
// // // // // // // // //           placeholder="येथे मराठीत टाइप करा..." 
// // // // // // // // //           placeholderTextColor="#bbb" 
// // // // // // // // //           value={data.marathiWorkNotes || ""}
// // // // // // // // //           onChangeText={handleMarathiInput("marathiWorkNotes")}
// // // // // // // // //         />
// // // // // // // // //       </View>
// // // // // // // // //     </ScrollView>
// // // // // // // // //   );
// // // // // // // // // }




// // // // // // // // // api
// // // // // // // // import React, { useState, useRef } from "react";
// // // // // // // // import { View, Text, ScrollView, TextInput, ActivityIndicator } from "react-native";
// // // // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // // // // Reuse the translation helper
// // // // // // // // const translateText = async (text, targetLanguage = "mr") => {
// // // // // // // //   if (!text || text.trim().length === 0) return "";
// // // // // // // //   const API_KEY = "AIzaSyDaU2e1o8NbVbgh9I2p14EDekdP3ZvYyW4";
// // // // // // // //   try {
// // // // // // // //     const response = await fetch(
// // // // // // // //       `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
// // // // // // // //       {
// // // // // // // //         method: "POST",
// // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // //         body: JSON.stringify({
// // // // // // // //           q: text,
// // // // // // // //           target: targetLanguage,
// // // // // // // //           source: "en",
// // // // // // // //           format: "text",
// // // // // // // //         }),
// // // // // // // //       }
// // // // // // // //     );
// // // // // // // //     const data = await response.json();
// // // // // // // //     return data.data?.translations?.[0]?.translatedText || text;
// // // // // // // //   } catch (error) {
// // // // // // // //     console.error("Translation error:", error);
// // // // // // // //     return text;
// // // // // // // //   }
// // // // // // // // };

// // // // // // // // export default function Step3({ data, setData }) {
// // // // // // // //   const [translatingFields, setTranslatingFields] = useState({});
// // // // // // // //   const typingTimeoutRef = useRef(null);

// // // // // // // //   // ---------------------------------------------------------
// // // // // // // //   // LOGIC: AUTO-TRANSLATE (English to Marathi)
// // // // // // // //   // ---------------------------------------------------------
// // // // // // // //   const handleMarathiInput = (key) => (val) => {
// // // // // // // //     setData((p) => ({ ...p, [key]: val }));

// // // // // // // //     if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

// // // // // // // //     const englishChars = val.match(/[a-zA-Z]/g);

// // // // // // // //     if (englishChars && englishChars.length > 0) {
// // // // // // // //       const englishText = val.replace(/[^\x00-\x7F\s]/g, "").trim();
// // // // // // // //       if (englishText.length > 1) {
// // // // // // // //         setTranslatingFields((prev) => ({ ...prev, [key]: true }));

// // // // // // // //         typingTimeoutRef.current = setTimeout(async () => {
// // // // // // // //           try {
// // // // // // // //             const translated = await translateText(englishText, "mr");
// // // // // // // //             setData((p) => ({ ...p, [key]: translated }));
// // // // // // // //           } finally {
// // // // // // // //             setTranslatingFields((prev) => ({ ...prev, [key]: false }));
// // // // // // // //           }
// // // // // // // //         }, 800);
// // // // // // // //       }
// // // // // // // //     } else {
// // // // // // // //       // Pure Marathi filtering
// // // // // // // //       const filtered = val.replace(/[^\u0900-\u097F0-9\s.,?!]/g, "");
// // // // // // // //       setData((p) => ({ ...p, [key]: filtered }));
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleEnglishInput = (key) => (text) => {
// // // // // // // //     const englishOnly = text.replace(/[^a-zA-Z0-9\s]/g, "");
// // // // // // // //     setData((p) => ({ ...p, [key]: englishOnly }));
// // // // // // // //   };

// // // // // // // //   const handleNumberInput = (key) => (text) => {
// // // // // // // //     const numbersOnly = text.replace(/[^0-9]/g, "");
// // // // // // // //     setData((p) => ({ ...p, [key]: numbersOnly }));
// // // // // // // //   };

// // // // // // // //   // Helper for spinner
// // // // // // // //   const renderIndicator = (key, isLarge = false) => translatingFields[key] && (
// // // // // // // //     <View style={{ position: 'absolute', right: 10, top: isLarge ? 35 : '55%' }}>
// // // // // // // //       <ActivityIndicator size="small" color="#f97316" />
// // // // // // // //     </View>
// // // // // // // //   );

// // // // // // // //   return (
// // // // // // // //     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
// // // // // // // //       <SectionHeader title="Education Details" />

// // // // // // // //       {/* ENGLISH ONLY FIELD */}
// // // // // // // //       <Field 
// // // // // // // //         label="Education Level" 
// // // // // // // //         required 
// // // // // // // //         value={data.educationLevel} 
// // // // // // // //         onChangeText={handleEnglishInput("educationLevel")} 
// // // // // // // //         placeholder="e.g. Graduate (English Only)" 
// // // // // // // //       />
      
// // // // // // // //       {/* MARATHI EDUCATION SECTION */}
// // // // // // // //       <View style={[styles.marathiPadWrap, { position: 'relative' }]}>
// // // // // // // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // //           शिक्षण <Text style={{ color: "red" }}>*</Text> (English type for Marathi)
// // // // // // // //         </Text>
// // // // // // // //         <TextInput
// // // // // // // //           style={[styles.marathiPad, { height: 80 }, translatingFields.education && { opacity: 0.6 }]}
// // // // // // // //           multiline
// // // // // // // //           placeholder="उदा. इंजिनिअरिंग"
// // // // // // // //           placeholderTextColor="#bbb"
// // // // // // // //           value={data.education}
// // // // // // // //           onChangeText={handleMarathiInput("education")}
// // // // // // // //         />
// // // // // // // //         {renderIndicator("education", true)}
// // // // // // // //         <Text style={styles.hint}>उदा: पदवीधर, इंजिनिअर, डॉक्टर इ.</Text>
// // // // // // // //       </View>

// // // // // // // //       <SectionHeader title="Service / Business" />

// // // // // // // //       {/* MARATHI JOB & DESIGNATION */}
// // // // // // // //       <View style={styles.row3}>
// // // // // // // //         <View style={{ flex: 1, marginRight: 6, position: 'relative' }}>
// // // // // // // //           <Field 
// // // // // // // //             label="नोकरी/ व्यवसाय" 
// // // // // // // //             value={data.jobType} 
// // // // // // // //             onChangeText={handleMarathiInput("jobType")} 
// // // // // // // //             placeholder="मराठी" 
// // // // // // // //           />
// // // // // // // //           {renderIndicator("jobType")}
// // // // // // // //         </View>
// // // // // // // //         <View style={{ flex: 1, marginHorizontal: 3, position: 'relative' }}>
// // // // // // // //           <Field 
// // // // // // // //             label="हुद्दा" 
// // // // // // // //             value={data.designation} 
// // // // // // // //             onChangeText={handleMarathiInput("designation")} 
// // // // // // // //             placeholder="मराठी" 
// // // // // // // //           />
// // // // // // // //           {renderIndicator("designation")}
// // // // // // // //         </View>
// // // // // // // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // //           <Field 
// // // // // // // //             label="कंपनी" 
// // // // // // // //             value={data.company} 
// // // // // // // //             onChangeText={handleEnglishInput("company")} 
// // // // // // // //             placeholder="English" 
// // // // // // // //           />
// // // // // // // //         </View>
// // // // // // // //       </View>

// // // // // // // //       <View style={styles.row3}>
// // // // // // // //         <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // //           <Field 
// // // // // // // //             label="नोकरीचे ठिकाण" 
// // // // // // // //             value={data.jobLocation} 
// // // // // // // //             onChangeText={handleEnglishInput("jobLocation")} 
// // // // // // // //             placeholder="English" 
// // // // // // // //           />
// // // // // // // //         </View>
// // // // // // // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // //           <Field 
// // // // // // // //             label="मोबाईल" 
// // // // // // // //             value={data.jobMobile} 
// // // // // // // //             onChangeText={handleNumberInput("jobMobile")} 
// // // // // // // //             keyboardType="phone-pad" 
// // // // // // // //             placeholder="92..." 
// // // // // // // //           />
// // // // // // // //         </View>
// // // // // // // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // //           <Field 
// // // // // // // //             label="मासिक उत्पन्न (₹)" 
// // // // // // // //             value={data.salary} 
// // // // // // // //             onChangeText={handleNumberInput("salary")} 
// // // // // // // //             keyboardType="numeric" 
// // // // // // // //             placeholder="Amount" 
// // // // // // // //           />
// // // // // // // //         </View>
// // // // // // // //       </View>

// // // // // // // //       {/* MARATHI TYPE PAD */}
// // // // // // // //       <View style={[styles.marathiPadWrap, { position: 'relative' }]}>
// // // // // // // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // //           इतर कामाची माहिती (Auto-translate)
// // // // // // // //         </Text>
// // // // // // // //         <TextInput 
// // // // // // // //           style={[styles.marathiPad, translatingFields.marathiWorkNotes && { opacity: 0.6 }]} 
// // // // // // // //           multiline 
// // // // // // // //           placeholder="येथे टाइप करा..." 
// // // // // // // //           placeholderTextColor="#bbb" 
// // // // // // // //           value={data.marathiWorkNotes || ""}
// // // // // // // //           onChangeText={handleMarathiInput("marathiWorkNotes")}
// // // // // // // //         />
// // // // // // // //         {renderIndicator("marathiWorkNotes", true)}
// // // // // // // //       </View>
// // // // // // // //     </ScrollView>
// // // // // // // //   );
// // // // // // // // }












// // // // // // // // nnnn
// // // // // // // // api - FIXED WITH WORKING KEYBOARD SCROLL
// // // // // // // import React, { useState, useRef } from "react";
// // // // // // // import { View, Text, ScrollView, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native";
// // // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // // // Reuse the translation helper
// // // // // // // const translateText = async (text, targetLanguage = "mr") => {
// // // // // // //   if (!text || text.trim().length === 0) return "";
// // // // // // //   const API_KEY = "AIzaSyDaU2e1o8NbVbgh9I2p14EDekdP3ZvYyW4";
// // // // // // //   try {
// // // // // // //     const response = await fetch(
// // // // // // //       `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
// // // // // // //       {
// // // // // // //         method: "POST",
// // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // //         body: JSON.stringify({
// // // // // // //           q: text,
// // // // // // //           target: targetLanguage,
// // // // // // //           source: "en",
// // // // // // //           format: "text",
// // // // // // //         }),
// // // // // // //       }
// // // // // // //     );
// // // // // // //     const data = await response.json();
// // // // // // //     return data.data?.translations?.[0]?.translatedText || text;
// // // // // // //   } catch (error) {
// // // // // // //     console.error("Translation error:", error);
// // // // // // //     return text;
// // // // // // //   }
// // // // // // // };

// // // // // // // export default function Step3({ data, setData }) {
// // // // // // //   const [translatingFields, setTranslatingFields] = useState({});
// // // // // // //   const typingTimeoutRef = useRef(null);
// // // // // // //   const scrollViewRef = useRef(null);

// // // // // // //   // ---------------------------------------------------------
// // // // // // //   // LOGIC: AUTO-TRANSLATE (English to Marathi)
// // // // // // //   // ---------------------------------------------------------
// // // // // // //   const handleMarathiInput = (key) => (val) => {
// // // // // // //     setData((p) => ({ ...p, [key]: val }));

// // // // // // //     if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

// // // // // // //     const englishChars = val.match(/[a-zA-Z]/g);

// // // // // // //     if (englishChars && englishChars.length > 0) {
// // // // // // //       const englishText = val.replace(/[^\x00-\x7F\s]/g, "").trim();
// // // // // // //       if (englishText.length > 1) {
// // // // // // //         setTranslatingFields((prev) => ({ ...prev, [key]: true }));

// // // // // // //         typingTimeoutRef.current = setTimeout(async () => {
// // // // // // //           try {
// // // // // // //             const translated = await translateText(englishText, "mr");
// // // // // // //             setData((p) => ({ ...p, [key]: translated }));
// // // // // // //           } finally {
// // // // // // //             setTranslatingFields((prev) => ({ ...prev, [key]: false }));
// // // // // // //           }
// // // // // // //         }, 800);
// // // // // // //       }
// // // // // // //     } else {
// // // // // // //       // Pure Marathi filtering
// // // // // // //       const filtered = val.replace(/[^\u0900-\u097F0-9\s.,?!]/g, "");
// // // // // // //       setData((p) => ({ ...p, [key]: filtered }));
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleEnglishInput = (key) => (text) => {
// // // // // // //     const englishOnly = text.replace(/[^a-zA-Z0-9\s]/g, "");
// // // // // // //     setData((p) => ({ ...p, [key]: englishOnly }));
// // // // // // //   };

// // // // // // //   const handleNumberInput = (key) => (text) => {
// // // // // // //     const numbersOnly = text.replace(/[^0-9]/g, "");
// // // // // // //     setData((p) => ({ ...p, [key]: numbersOnly }));
// // // // // // //   };

// // // // // // //   // ✅ KEYBOARD SCROLL HANDLER
// // // // // // //   const handleFieldFocus = () => {
// // // // // // //     setTimeout(() => {
// // // // // // //       scrollViewRef.current?.scrollToEnd({ animated: true });
// // // // // // //     }, 300);
// // // // // // //   };

// // // // // // //   // Helper for spinner
// // // // // // //   const renderIndicator = (key, isLarge = false) => translatingFields[key] && (
// // // // // // //     <View style={{ position: 'absolute', right: 10, top: isLarge ? 35 : '55%' }}>
// // // // // // //       <ActivityIndicator size="small" color="#f97316" />
// // // // // // //     </View>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <KeyboardAvoidingView 
// // // // // // //       behavior={Platform.OS === "ios" ? "padding" : "height"}
// // // // // // //       style={{ flex: 1 }}
// // // // // // //       keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
// // // // // // //     >
// // // // // // //       <ScrollView 
// // // // // // //         ref={scrollViewRef}
// // // // // // //         showsVerticalScrollIndicator={false} 
// // // // // // //         contentContainerStyle={{ paddingBottom: 40 }}
// // // // // // //         keyboardShouldPersistTaps="handled"
// // // // // // //         scrollEventThrottle={16}
// // // // // // //       >
// // // // // // //         <SectionHeader title="Education Details" />

// // // // // // //         {/* ENGLISH ONLY FIELD */}
// // // // // // //         <Field 
// // // // // // //           label="Education Level" 
// // // // // // //           required 
// // // // // // //           value={data.educationLevel} 
// // // // // // //           onChangeText={handleEnglishInput("educationLevel")} 
// // // // // // //           placeholder="e.g. Graduate (English Only)"
// // // // // // //           onFocus={handleFieldFocus}
// // // // // // //         />
        
// // // // // // //         {/* MARATHI EDUCATION SECTION */}
// // // // // // //         <View style={[styles.marathiPadWrap, { position: 'relative', minHeight: 180 }]}>
// // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // //             शिक्षण <Text style={{ color: "red" }}>*</Text> (English type for Marathi)
// // // // // // //           </Text>
// // // // // // //           <TextInput
// // // // // // //             style={[styles.marathiPad, { height: 80 }, translatingFields.education && { opacity: 0.6 }]}
// // // // // // //             multiline
// // // // // // //             placeholder="उदा. इंजिनिअरिंग"
// // // // // // //             placeholderTextColor="#bbb"
// // // // // // //             value={data.education}
// // // // // // //             onChangeText={handleMarathiInput("education")}
// // // // // // //             onFocus={handleFieldFocus}
// // // // // // //           />
// // // // // // //           {renderIndicator("education", true)}
// // // // // // //           <Text style={styles.hint}>उदा: पदवीधर, इंजिनिअर, डॉक्टर इ.</Text>
// // // // // // //         </View>

// // // // // // //         <SectionHeader title="Service / Business" />

// // // // // // //         {/* MARATHI JOB & DESIGNATION */}
// // // // // // //         <View style={styles.row3}>
// // // // // // //           <View style={{ flex: 1, marginRight: 6, position: 'relative' }}>
// // // // // // //             <Field 
// // // // // // //               label="नोकरी/ व्यवसाय" 
// // // // // // //               value={data.jobType} 
// // // // // // //               onChangeText={handleMarathiInput("jobType")} 
// // // // // // //               placeholder="मराठी"
// // // // // // //               onFocus={handleFieldFocus}
// // // // // // //             />
// // // // // // //             {renderIndicator("jobType")}
// // // // // // //           </View>
// // // // // // //           <View style={{ flex: 1, marginHorizontal: 3, position: 'relative' }}>
// // // // // // //             <Field 
// // // // // // //               label="हुद्दा" 
// // // // // // //               value={data.designation} 
// // // // // // //               onChangeText={handleMarathiInput("designation")} 
// // // // // // //               placeholder="मराठी"
// // // // // // //               onFocus={handleFieldFocus}
// // // // // // //             />
// // // // // // //             {renderIndicator("designation")}
// // // // // // //           </View>
// // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // //             <Field 
// // // // // // //               label="कंपनी" 
// // // // // // //               value={data.company} 
// // // // // // //               onChangeText={handleEnglishInput("company")} 
// // // // // // //               placeholder="English"
// // // // // // //               onFocus={handleFieldFocus}
// // // // // // //             />
// // // // // // //           </View>
// // // // // // //         </View>

// // // // // // //         <View style={styles.row3}>
// // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // //             <Field 
// // // // // // //               label="नोकरीचे ठिकाण" 
// // // // // // //               value={data.jobLocation} 
// // // // // // //               onChangeText={handleEnglishInput("jobLocation")} 
// // // // // // //               placeholder="English"
// // // // // // //               onFocus={handleFieldFocus}
// // // // // // //             />
// // // // // // //           </View>
// // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // //             <Field 
// // // // // // //               label="मोबाईल" 
// // // // // // //               value={data.jobMobile} 
// // // // // // //               onChangeText={handleNumberInput("jobMobile")} 
// // // // // // //               keyboardType="phone-pad" 
// // // // // // //               placeholder="92..."
// // // // // // //               onFocus={handleFieldFocus}
// // // // // // //             />
// // // // // // //           </View>
// // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // //             <Field 
// // // // // // //               label="मासिक उत्पन्न (₹)" 
// // // // // // //               value={data.salary} 
// // // // // // //               onChangeText={handleNumberInput("salary")} 
// // // // // // //               keyboardType="numeric" 
// // // // // // //               placeholder="Amount"
// // // // // // //               onFocus={handleFieldFocus}
// // // // // // //             />
// // // // // // //           </View>
// // // // // // //         </View>

// // // // // // //         {/* MARATHI TYPE PAD - WITH EXTRA SPACE */}
// // // // // // //         <View style={[styles.marathiPadWrap, { position: 'relative', minHeight: 180 }]}>
// // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // //             इतर कामाची माहिती (Auto-translate)
// // // // // // //           </Text>
// // // // // // //           <TextInput 
// // // // // // //             style={[styles.marathiPad, translatingFields.marathiWorkNotes && { opacity: 0.6 }]} 
// // // // // // //             multiline 
// // // // // // //             placeholder="येथे टाइप करा..." 
// // // // // // //             placeholderTextColor="#bbb" 
// // // // // // //             value={data.marathiWorkNotes || ""}
// // // // // // //             onChangeText={handleMarathiInput("marathiWorkNotes")}
// // // // // // //             onFocus={handleFieldFocus}
// // // // // // //           />
// // // // // // //           {renderIndicator("marathiWorkNotes", true)}
// // // // // // //         </View>
// // // // // // //       </ScrollView>
// // // // // // //     </KeyboardAvoidingView>
// // // // // // //   );
// // // // // // // }













// // // // // // // nnnn
// // // // // // // api - FIXED WITH WORKING KEYBOARD SCROLL
// // // // // // import React, { useState, useRef } from "react";
// // // // // // import { View, Text, ScrollView, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native";
// // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // // Reuse the translation helper
// // // // // // const translateText = async (text, targetLanguage = "mr") => {
// // // // // //   if (!text || text.trim().length === 0) return "";
// // // // // //   const API_KEY = "AIzaSyDaU2e1o8NbVbgh9I2p14EDekdP3ZvYyW4";
// // // // // //   try {
// // // // // //     const response = await fetch(
// // // // // //       `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
// // // // // //       {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify({
// // // // // //           q: text,
// // // // // //           target: targetLanguage,
// // // // // //           source: "en",
// // // // // //           format: "text",
// // // // // //         }),
// // // // // //       }
// // // // // //     );
// // // // // //     const data = await response.json();
// // // // // //     return data.data?.translations?.[0]?.translatedText || text;
// // // // // //   } catch (error) {
// // // // // //     console.error("Translation error:", error);
// // // // // //     return text;
// // // // // //   }
// // // // // // };

// // // // // // export default function Step3({ data, setData }) {
// // // // // //   const [translatingFields, setTranslatingFields] = useState({});
// // // // // //   const typingTimeoutRef = useRef(null);
// // // // // //   const scrollViewRef = useRef(null);

// // // // // //   // ---------------------------------------------------------
// // // // // //   // LOGIC: AUTO-TRANSLATE (English to Marathi)
// // // // // //   // ---------------------------------------------------------
// // // // // //   const handleMarathiInput = (key) => (val) => {
// // // // // //     setData((p) => ({ ...p, [key]: val }));

// // // // // //     if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

// // // // // //     const englishChars = val.match(/[a-zA-Z]/g);

// // // // // //     if (englishChars && englishChars.length > 0) {
// // // // // //       const englishText = val.replace(/[^\x00-\x7F\s]/g, "").trim();
// // // // // //       if (englishText.length > 1) {
// // // // // //         setTranslatingFields((prev) => ({ ...prev, [key]: true }));

// // // // // //         typingTimeoutRef.current = setTimeout(async () => {
// // // // // //           try {
// // // // // //             const translated = await translateText(englishText, "mr");
// // // // // //             setData((p) => ({ ...p, [key]: translated }));
// // // // // //           } finally {
// // // // // //             setTranslatingFields((prev) => ({ ...prev, [key]: false }));
// // // // // //           }
// // // // // //         }, 800);
// // // // // //       }
// // // // // //     } else {
// // // // // //       // Pure Marathi filtering
// // // // // //       const filtered = val.replace(/[^\u0900-\u097F0-9\s.,?!]/g, "");
// // // // // //       setData((p) => ({ ...p, [key]: filtered }));
// // // // // //     }
// // // // // //   };

// // // // // //   const handleEnglishInput = (key) => (text) => {
// // // // // //     const englishOnly = text.replace(/[^a-zA-Z0-9\s]/g, "");
// // // // // //     setData((p) => ({ ...p, [key]: englishOnly }));
// // // // // //   };

// // // // // //   const handleNumberInput = (key) => (text) => {
// // // // // //     const numbersOnly = text.replace(/[^0-9]/g, "");
// // // // // //     setData((p) => ({ ...p, [key]: numbersOnly }));
// // // // // //   };

// // // // // //   // ✅ KEYBOARD SCROLL HANDLER
// // // // // //   const handleFieldFocus = () => {
// // // // // //     setTimeout(() => {
// // // // // //       scrollViewRef.current?.scrollToEnd({ animated: true });
// // // // // //     }, 300);
// // // // // //   };

// // // // // //   // Helper for spinner
// // // // // //   const renderIndicator = (key, isLarge = false) => translatingFields[key] && (
// // // // // //     <View style={{ position: 'absolute', right: 10, top: isLarge ? 35 : '55%' }}>
// // // // // //       <ActivityIndicator size="small" color="#f97316" />
// // // // // //     </View>
// // // // // //   );

// // // // // //   return (
// // // // // //     <KeyboardAvoidingView 
// // // // // //       behavior={Platform.OS === "ios" ? "padding" : "height"}
// // // // // //       style={{ flex: 1 }}
// // // // // //       keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
// // // // // //     >
// // // // // //       <ScrollView 
// // // // // //         ref={scrollViewRef}
// // // // // //         showsVerticalScrollIndicator={false} 
// // // // // //         contentContainerStyle={{ paddingBottom: 40 }}
// // // // // //         keyboardShouldPersistTaps="handled"
// // // // // //         scrollEventThrottle={16}
// // // // // //       >
// // // // // //         <SectionHeader title="Education Details" />

// // // // // //         {/* ENGLISH ONLY FIELD */}
// // // // // //         <Field 
// // // // // //           label="Education Level" 
// // // // // //           required 
// // // // // //           value={data.educationLevel} 
// // // // // //           onChangeText={handleEnglishInput("educationLevel")} 
// // // // // //           placeholder="e.g. Graduate (English Only)"
// // // // // //           onFocus={handleFieldFocus}
// // // // // //         />
        
// // // // // //         {/* MARATHI EDUCATION SECTION */}
// // // // // //         <View style={[styles.marathiPadWrap, { position: 'relative', minHeight: 180 }]}>
// // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // //             शिक्षण <Text style={{ color: "red" }}>*</Text> (English type for Marathi)
// // // // // //           </Text>
// // // // // //           <TextInput
// // // // // //             style={[styles.marathiPad, { height: 80 }, translatingFields.education && { opacity: 0.6 }]}
// // // // // //             multiline
// // // // // //             placeholder="उदा. इंजिनिअरिंग"
// // // // // //             placeholderTextColor="#bbb"
// // // // // //             value={data.education}
// // // // // //             onChangeText={handleMarathiInput("education")}
// // // // // //             onFocus={handleFieldFocus}
// // // // // //           />
// // // // // //           {renderIndicator("education", true)}
// // // // // //           <Text style={styles.hint}>उदा: पदवीधर, इंजिनिअर, डॉक्टर इ.</Text>
// // // // // //         </View>

// // // // // //         <SectionHeader title="Service / Business" />

// // // // // //         {/* MARATHI JOB & DESIGNATION */}
// // // // // //         <View style={styles.row3}>
// // // // // //           <View style={{ flex: 1, marginRight: 6, position: 'relative' }}>
// // // // // //             <Field 
// // // // // //               label="नोकरी/ व्यवसाय" 
// // // // // //               value={data.jobType} 
// // // // // //               onChangeText={handleMarathiInput("jobType")} 
// // // // // //               placeholder="मराठी"
// // // // // //               onFocus={handleFieldFocus}
// // // // // //             />
// // // // // //             {renderIndicator("jobType")}
// // // // // //           </View>
// // // // // //           <View style={{ flex: 1, marginHorizontal: 3, position: 'relative' }}>
// // // // // //             <Field 
// // // // // //               label="हुद्दा" 
// // // // // //               value={data.designation} 
// // // // // //               onChangeText={handleMarathiInput("designation")} 
// // // // // //               placeholder="मराठी"
// // // // // //               onFocus={handleFieldFocus}
// // // // // //             />
// // // // // //             {renderIndicator("designation")}
// // // // // //           </View>
// // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // //             <Field 
// // // // // //               label="कंपनी" 
// // // // // //               value={data.company} 
// // // // // //               onChangeText={handleEnglishInput("company")} 
// // // // // //               placeholder="English"
// // // // // //               onFocus={handleFieldFocus}
// // // // // //             />
// // // // // //           </View>
// // // // // //         </View>

// // // // // //         <View style={styles.row3}>
// // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // //             <Field 
// // // // // //               label="नोकरीचे ठिकाण" 
// // // // // //               value={data.jobLocation} 
// // // // // //               onChangeText={handleEnglishInput("jobLocation")} 
// // // // // //               placeholder="English"
// // // // // //               onFocus={handleFieldFocus}
// // // // // //             />
// // // // // //           </View>
// // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // //             <Field 
// // // // // //               label="मोबाईल" 
// // // // // //               value={data.jobMobile} 
// // // // // //               onChangeText={handleNumberInput("jobMobile")} 
// // // // // //               keyboardType="phone-pad" 
// // // // // //               placeholder="92..."
// // // // // //               onFocus={handleFieldFocus}
// // // // // //             />
// // // // // //           </View>
// // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // //             <Field 
// // // // // //               label="मासिक उत्पन्न (₹)" 
// // // // // //               value={data.salary} 
// // // // // //               onChangeText={handleNumberInput("salary")} 
// // // // // //               keyboardType="numeric" 
// // // // // //               placeholder="Amount"
// // // // // //               onFocus={handleFieldFocus}
// // // // // //             />
// // // // // //           </View>
// // // // // //         </View>

// // // // // //         {/* MARATHI TYPE PAD - WITH EXTRA SPACE */}
// // // // // //         <View style={[styles.marathiPadWrap, { position: 'relative', minHeight: 180 }]}>
// // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // //             इतर कामाची माहिती (Auto-translate)
// // // // // //           </Text>
// // // // // //           <TextInput 
// // // // // //             style={[styles.marathiPad, translatingFields.marathiWorkNotes && { opacity: 0.6 }]} 
// // // // // //             multiline 
// // // // // //             placeholder="येथे टाइप करा..." 
// // // // // //             placeholderTextColor="#bbb" 
// // // // // //             value={data.marathiWorkNotes || ""}
// // // // // //             onChangeText={handleMarathiInput("marathiWorkNotes")}
// // // // // //             onFocus={handleFieldFocus}
// // // // // //           />
// // // // // //           {renderIndicator("marathiWorkNotes", true)}
// // // // // //         </View>
// // // // // //       </ScrollView>
// // // // // //     </KeyboardAvoidingView>
// // // // // //   );
// // // // // // }
















// // // // // // Step3.jsx - FIXED WITH WORKING KEYBOARD SCROLL
// // // // // import React, { useState, useRef } from "react";
// // // // // import { View, Text, ScrollView, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native";
// // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // Reuse the translation helper
// // // // // const translateText = async (text, targetLanguage = "mr") => {
// // // // //   if (!text || text.trim().length === 0) return "";
// // // // //   const API_KEY = "AIzaSyDaU2e1o8NbVbgh9I2p14EDekdP3ZvYyW4";
// // // // //   try {
// // // // //     const response = await fetch(
// // // // //       `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
// // // // //       {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({
// // // // //           q: text,
// // // // //           target: targetLanguage,
// // // // //           source: "en",
// // // // //           format: "text",
// // // // //         }),
// // // // //       }
// // // // //     );
// // // // //     const data = await response.json();
// // // // //     return data.data?.translations?.[0]?.translatedText || text;
// // // // //   } catch (error) {
// // // // //     console.error("Translation error:", error);
// // // // //     return text;
// // // // //   }
// // // // // };

// // // // // export default function Step3({ data, setData }) {
// // // // //   const [translatingFields, setTranslatingFields] = useState({});
// // // // //   const typingTimeoutRef = useRef(null);
// // // // //   const scrollViewRef = useRef(null);

// // // // //   const handleMarathiInput = (key) => (val) => {
// // // // //     setData((p) => ({ ...p, [key]: val }));

// // // // //     if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

// // // // //     const englishChars = val.match(/[a-zA-Z]/g);

// // // // //     if (englishChars && englishChars.length > 0) {
// // // // //       const englishText = val.replace(/[^\x00-\x7F\s]/g, "").trim();
// // // // //       if (englishText.length > 1) {
// // // // //         setTranslatingFields((prev) => ({ ...prev, [key]: true }));

// // // // //         typingTimeoutRef.current = setTimeout(async () => {
// // // // //           try {
// // // // //             const translated = await translateText(englishText, "mr");
// // // // //             setData((p) => ({ ...p, [key]: translated }));
// // // // //           } finally {
// // // // //             setTranslatingFields((prev) => ({ ...prev, [key]: false }));
// // // // //           }
// // // // //         }, 800);
// // // // //       }
// // // // //     } else {
// // // // //       const filtered = val.replace(/[^\u0900-\u097F0-9\s.,?!]/g, "");
// // // // //       setData((p) => ({ ...p, [key]: filtered }));
// // // // //     }
// // // // //   };

// // // // //   const handleEnglishInput = (key) => (text) => {
// // // // //     const englishOnly = text.replace(/[^a-zA-Z0-9\s]/g, "");
// // // // //     setData((p) => ({ ...p, [key]: englishOnly }));
// // // // //   };

// // // // //   const handleNumberInput = (key) => (text) => {
// // // // //     const numbersOnly = text.replace(/[^0-9]/g, "");
// // // // //     setData((p) => ({ ...p, [key]: numbersOnly }));
// // // // //   };

// // // // //   const handleFieldFocus = () => {
// // // // //     setTimeout(() => {
// // // // //       scrollViewRef.current?.scrollToEnd({ animated: true });
// // // // //     }, 300);
// // // // //   };

// // // // //   const renderIndicator = (key, isLarge = false) => translatingFields[key] && (
// // // // //     <View style={{ position: 'absolute', right: 10, top: isLarge ? 35 : '55%' }}>
// // // // //       <ActivityIndicator size="small" color="#f97316" />
// // // // //     </View>
// // // // //   );

// // // // //   return (
// // // // //     <KeyboardAvoidingView
// // // // //       behavior={Platform.OS === "ios" ? "padding" : "height"}
// // // // //       style={{ flex: 1 }}
// // // // //       keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
// // // // //     >
// // // // //       <ScrollView
// // // // //         ref={scrollViewRef}
// // // // //         showsVerticalScrollIndicator={false}
// // // // //         contentContainerStyle={{ paddingBottom: 40 }}
// // // // //         keyboardShouldPersistTaps="handled"
// // // // //         scrollEventThrottle={16}
// // // // //       >
// // // // //         <SectionHeader title="Education Details" />

// // // // //         {/* ENGLISH ONLY FIELD */}
// // // // //         <Field
// // // // //           label="Education Level"
// // // // //           required
// // // // //           value={data.educationLevel}
// // // // //           onChangeText={handleEnglishInput("educationLevel")}
// // // // //           placeholder="e.g. Graduate (English Only)"
// // // // //           onFocus={handleFieldFocus}
// // // // //         />

// // // // //         <SectionHeader title="Service / Business" />

// // // // //         {/* MARATHI JOB & DESIGNATION */}
// // // // //         <View style={styles.row3}>
// // // // //           <View style={{ flex: 1, marginRight: 6, position: 'relative' }}>
// // // // //             <Field
// // // // //               label="नोकरी/ व्यवसाय"
// // // // //               value={data.jobType}
// // // // //               onChangeText={handleMarathiInput("jobType")}
// // // // //               placeholder="मराठी"
// // // // //               onFocus={handleFieldFocus}
// // // // //             />
// // // // //             {renderIndicator("jobType")}
// // // // //           </View>
// // // // //           <View style={{ flex: 1, marginHorizontal: 3, position: 'relative' }}>
// // // // //             <Field
// // // // //               label="हुद्दा"
// // // // //               value={data.designation}
// // // // //               onChangeText={handleMarathiInput("designation")}
// // // // //               placeholder="मराठी"
// // // // //               onFocus={handleFieldFocus}
// // // // //             />
// // // // //             {renderIndicator("designation")}
// // // // //           </View>
// // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // //             <Field
// // // // //               label="कंपनी"
// // // // //               value={data.company}
// // // // //               onChangeText={handleEnglishInput("company")}
// // // // //               placeholder="English"
// // // // //               onFocus={handleFieldFocus}
// // // // //             />
// // // // //           </View>
// // // // //         </View>

// // // // //         <View style={styles.row3}>
// // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // //             <Field
// // // // //               label="नोकरीचे ठिकाण"
// // // // //               value={data.jobLocation}
// // // // //               onChangeText={handleEnglishInput("jobLocation")}
// // // // //               placeholder="English"
// // // // //               onFocus={handleFieldFocus}
// // // // //             />
// // // // //           </View>
// // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // //             <Field
// // // // //               label="मोबाईल"
// // // // //               value={data.jobMobile}
// // // // //               onChangeText={handleNumberInput("jobMobile")}
// // // // //               keyboardType="phone-pad"
// // // // //               placeholder="92..."
// // // // //               onFocus={handleFieldFocus}
// // // // //             />
// // // // //           </View>
// // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // //             <Field
// // // // //               label="मासिक उत्पन्न (₹)"
// // // // //               value={data.salary}
// // // // //               onChangeText={handleNumberInput("salary")}
// // // // //               keyboardType="numeric"
// // // // //               placeholder="Amount"
// // // // //               onFocus={handleFieldFocus}
// // // // //             />
// // // // //           </View>
// // // // //         </View>

// // // // //         {/* MARATHI TYPE PAD */}
// // // // //         <View style={[styles.marathiPadWrap, { position: 'relative', minHeight: 180 }]}>
// // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // //             इतर कामाची माहिती (Auto-translate)
// // // // //           </Text>
// // // // //           <TextInput
// // // // //             style={[styles.marathiPad, translatingFields.marathiWorkNotes && { opacity: 0.6 }]}
// // // // //             multiline
// // // // //             placeholder="येथे टाइप करा..."
// // // // //             placeholderTextColor="#bbb"
// // // // //             value={data.marathiWorkNotes || ""}
// // // // //             onChangeText={handleMarathiInput("marathiWorkNotes")}
// // // // //             onFocus={handleFieldFocus}
// // // // //           />
// // // // //           {renderIndicator("marathiWorkNotes", true)}
// // // // //         </View>
// // // // //       </ScrollView>
// // // // //     </KeyboardAvoidingView>
// // // // //   );
// // // // // }













// // // // Step3.jsx - ORIGINAL STRUCTURE | ENGLISH ONLY
// // // import React, { useRef } from "react";
// // // import {
// // //   View,
// // //   Text,
// // //   ScrollView,
// // //   TextInput,
// // //   KeyboardAvoidingView,
// // //   Platform,
// // //   StyleSheet,
// // // } from "react-native";
// // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // export default function Step3({ data, setData }) {
// // //   const scrollViewRef = useRef(null);

// // //   const handleEnglishInput = (key) => (text) => {
// // //     const englishOnly = text.replace(/[^a-zA-Z0-9\s.,\-\/]/g, "");
// // //     setData((p) => ({ ...p, [key]: englishOnly }));
// // //   };

// // //   const handleNumberInput = (key) => (text) => {
// // //     const numbersOnly = text.replace(/[^0-9]/g, "");
// // //     setData((p) => ({ ...p, [key]: numbersOnly }));
// // //   };

// // //   const handleFieldFocus = () => {
// // //     setTimeout(() => {
// // //       scrollViewRef.current?.scrollToEnd({ animated: true });
// // //     }, 300);
// // //   };

// // //   return (
// // //     <KeyboardAvoidingView
// // //       behavior={Platform.OS === "ios" ? "padding" : "height"}
// // //       style={{ flex: 1 }}
// // //       keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
// // //     >
// // //       <ScrollView
// // //         ref={scrollViewRef}
// // //         showsVerticalScrollIndicator={false}
// // //         contentContainerStyle={{ paddingBottom: 40 }}
// // //         keyboardShouldPersistTaps="handled"
// // //         scrollEventThrottle={16}
// // //       >

// // //         {/* ── EDUCATION ── */}
// // //         <SectionHeader title="Education Details" />

// // //         <Field
// // //           label="Education Level"
// // //           required
// // //           value={data.educationLevel || ""}
// // //           onChangeText={handleEnglishInput("educationLevel")}
// // //           placeholder="e.g. Graduate / B.E. / SSC"
// // //           onFocus={handleFieldFocus}
// // //         />

// // //         {/* ── SERVICE / BUSINESS ── */}
// // //         <SectionHeader title="Service / Business" />

// // //         {/* Row 1 — Job | Designation | Company */}
// // //         <View style={styles.row3}>
// // //           <View style={{ flex: 1, marginRight: 6 }}>
// // //             <Field
// // //               label="Job / Occupation"
// // //               value={data.jobType || ""}
// // //               onChangeText={handleEnglishInput("jobType")}
// // //               placeholder="e.g. Engineer"
// // //               onFocus={handleFieldFocus}
// // //             />
// // //           </View>
// // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // //             <Field
// // //               label="Designation"
// // //               value={data.designation || ""}
// // //               onChangeText={handleEnglishInput("designation")}
// // //               placeholder="e.g. Manager"
// // //               onFocus={handleFieldFocus}
// // //             />
// // //           </View>
// // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // //             <Field
// // //               label="Company"
// // //               value={data.company || ""}
// // //               onChangeText={handleEnglishInput("company")}
// // //               placeholder="e.g. Infosys"
// // //               onFocus={handleFieldFocus}
// // //             />
// // //           </View>
// // //         </View>

// // //         {/* Row 2 — Location | Mobile | Income */}
// // //         <View style={styles.row3}>
// // //           <View style={{ flex: 1, marginRight: 6 }}>
// // //             <Field
// // //               label="Job Location"
// // //               value={data.jobLocation || ""}
// // //               onChangeText={handleEnglishInput("jobLocation")}
// // //               placeholder="e.g. Pune"
// // //               onFocus={handleFieldFocus}
// // //             />
// // //           </View>
// // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // //             <Field
// // //               label="Mobile No."
// // //               value={data.jobMobile || ""}
// // //               onChangeText={handleNumberInput("jobMobile")}
// // //               keyboardType="phone-pad"
// // //               placeholder="e.g. 9200000000"
// // //               onFocus={handleFieldFocus}
// // //             />
// // //           </View>
// // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // //             <Field
// // //               label="Monthly Income (₹)"
// // //               value={data.salary || ""}
// // //               onChangeText={handleNumberInput("salary")}
// // //               keyboardType="numeric"
// // //               placeholder="e.g. 25000"
// // //               onFocus={handleFieldFocus}
// // //             />
// // //           </View>
// // //         </View>

// // //         {/* ── OTHER WORK INFO ── */}
// // //         <View style={styles.marathiPadWrap}>
// // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // //             Other Work Information
// // //           </Text>
// // //           <TextInput
// // //             style={styles.marathiPad}
// // //             multiline
// // //             numberOfLines={5}
// // //             textAlignVertical="top"
// // //             placeholder="Enter any additional work details (English only)..."
// // //             placeholderTextColor="#bbb"
// // //             value={data.workNotes || ""}
// // //             onChangeText={handleEnglishInput("workNotes")}
// // //             onFocus={handleFieldFocus}
// // //           />
// // //         </View>

// // //       </ScrollView>
// // //     </KeyboardAvoidingView>
// // //   );
// // // }








// // // Step3.jsx - FIXED: 3-column rows truly horizontal
// // import React, { useRef } from "react";
// // import {
// //   View,
// //   Text,
// //   ScrollView,
// //   TextInput,
// //   KeyboardAvoidingView,
// //   Platform,
// //   StyleSheet,
// // } from "react-native";
// // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // export default function Step3({ data, setData }) {
// //   const scrollViewRef = useRef(null);

// //   const handleEnglishInput = (key) => (text) => {
// //     const englishOnly = text.replace(/[^a-zA-Z0-9\s.,\-\/]/g, "");
// //     setData((p) => ({ ...p, [key]: englishOnly }));
// //   };

// //   const handleNumberInput = (key) => (text) => {
// //     const numbersOnly = text.replace(/[^0-9]/g, "");
// //     setData((p) => ({ ...p, [key]: numbersOnly }));
// //   };

// //   const handleFieldFocus = () => {
// //     setTimeout(() => {
// //       scrollViewRef.current?.scrollToEnd({ animated: true });
// //     }, 300);
// //   };

// //   // Inline field rendered manually so flex layout is never broken by Field internals
// //   const InlineField = ({ label, required, value, onChangeText, placeholder, keyboardType, onFocus }) => (
// //     <View style={localStyles.inlineFieldWrap}>
// //       <Text style={localStyles.inlineLabel}>
// //         {label}
// //         {required ? <Text style={{ color: "red" }}> *</Text> : null}
// //       </Text>
// //       <TextInput
// //         style={localStyles.inlineInput}
// //         value={value}
// //         onChangeText={onChangeText}
// //         placeholder={placeholder}
// //         placeholderTextColor="#bbb"
// //         keyboardType={keyboardType || "default"}
// //         onFocus={onFocus}
// //       />
// //     </View>
// //   );

// //   return (
// //     <KeyboardAvoidingView
// //       behavior={Platform.OS === "ios" ? "padding" : "height"}
// //       style={{ flex: 1 }}
// //       keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
// //     >
// //       <ScrollView
// //         ref={scrollViewRef}
// //         showsVerticalScrollIndicator={false}
// //         contentContainerStyle={localStyles.scrollContent}
// //         keyboardShouldPersistTaps="handled"
// //         scrollEventThrottle={16}
// //       >

// //         {/* ── EDUCATION ── */}
// //         <SectionHeader title="Education Details" />
// //         <View style={localStyles.sectionBody}>
// //           <Field
// //             label="Education Level"
// //             required
// //             value={data.educationLevel || ""}
// //             onChangeText={handleEnglishInput("educationLevel")}
// //             placeholder="e.g. Graduate / B.E."
// //             onFocus={handleFieldFocus}
// //           />
// //         </View>

// //         {/* ── SERVICE / BUSINESS ── */}
// //         <SectionHeader title="Service / Business" />
// //         <View style={localStyles.sectionBody}>

// //           {/* Row 1 — Job | Designation | Company (horizontal) */}
// //           <View style={localStyles.row}>
// //             <InlineField
// //               label="Job / Occupation"
// //               value={data.jobType || ""}
// //               onChangeText={handleEnglishInput("jobType")}
// //               placeholder="e.g. Engineer"
// //               onFocus={handleFieldFocus}
// //             />
// //             <View style={localStyles.colDivider} />
// //             <InlineField
// //               label="Designation"
// //               value={data.designation || ""}
// //               onChangeText={handleEnglishInput("designation")}
// //               placeholder="e.g. Manager"
// //               onFocus={handleFieldFocus}
// //             />
// //             <View style={localStyles.colDivider} />
// //             <InlineField
// //               label="Company"
// //               value={data.company || ""}
// //               onChangeText={handleEnglishInput("company")}
// //               placeholder="e.g. Infosys"
// //               onFocus={handleFieldFocus}
// //             />
// //           </View>

// //           {/* Row 2 — Location | Mobile | Income (horizontal) */}
// //           <View style={localStyles.row}>
// //             <InlineField
// //               label="Job Location"
// //               value={data.jobLocation || ""}
// //               onChangeText={handleEnglishInput("jobLocation")}
// //               placeholder="e.g. Pune"
// //               onFocus={handleFieldFocus}
// //             />
// //             <View style={localStyles.colDivider} />
// //             <InlineField
// //               label="Mobile No."
// //               value={data.jobMobile || ""}
// //               onChangeText={handleNumberInput("jobMobile")}
// //               keyboardType="phone-pad"
// //               placeholder="9200000000"
// //               onFocus={handleFieldFocus}
// //             />
// //             <View style={localStyles.colDivider} />
// //             <InlineField
// //               label="Income (₹/mo)"
// //               value={data.salary || ""}
// //               onChangeText={handleNumberInput("salary")}
// //               keyboardType="numeric"
// //               placeholder="e.g. 25000"
// //               onFocus={handleFieldFocus}
// //             />
// //           </View>

// //         </View>

// //         {/* ── OTHER WORK INFO ── */}
// //         <View style={localStyles.notesSection}>
// //           <Text style={localStyles.notesLabel}>Other Work Information</Text>
// //           <TextInput
// //             style={localStyles.notesPad}
// //             multiline
// //             numberOfLines={5}
// //             textAlignVertical="top"
// //             placeholder="Enter any additional work details (English only)..."
// //             placeholderTextColor="#bbb"
// //             value={data.workNotes || ""}
// //             onChangeText={handleEnglishInput("workNotes")}
// //             onFocus={handleFieldFocus}
// //           />
// //         </View>

// //       </ScrollView>
// //     </KeyboardAvoidingView>
// //   );
// // }

// // const localStyles = StyleSheet.create({
// //   scrollContent: {
// //     paddingBottom: 40,
// //   },

// //   sectionBody: {
// //     paddingHorizontal: 12,
// //     marginBottom: 8,
// //   },

// //   /* ── 3-column horizontal row ── */
// //   row: {
// //     flexDirection: "row",       // forces children side-by-side
// //     alignItems: "flex-start",
// //     marginBottom: 10,
// //   },

// //   colDivider: {
// //     width: 6,                   // spacing gap between columns
// //   },

// //   /* Each inline field gets equal width via flex: 1 + minWidth: 0 */
// //   inlineFieldWrap: {
// //     flex: 1,
// //     minWidth: 0,                // prevents long text from pushing siblings down
// //   },

// //   inlineLabel: {
// //     fontSize: 12,
// //     fontWeight: "600",
// //     color: "#444",
// //     marginBottom: 4,
// //   },

// //   inlineInput: {
// //     borderWidth: 1,
// //     borderColor: "#ddd",
// //     borderRadius: 7,
// //     paddingHorizontal: 8,
// //     paddingVertical: 7,
// //     fontSize: 12,
// //     color: "#333",
// //     backgroundColor: "#fff",
// //   },

// //   /* Other Work Info */
// //   notesSection: {
// //     marginHorizontal: 12,
// //     marginTop: 8,
// //     marginBottom: 8,
// //   },
// //   notesLabel: {
// //     fontSize: 13,
// //     fontWeight: "600",
// //     color: "#333",
// //     marginBottom: 5,
// //   },
// //   notesPad: {
// //     borderWidth: 1,
// //     borderColor: "#ddd",
// //     borderRadius: 8,
// //     padding: 10,
// //     fontSize: 13,
// //     color: "#333",
// //     minHeight: 100,
// //     backgroundColor: "#fafafa",
// //   },
// // });











// // Step3.jsx - TIDY DESIGN APPLIED
// import React, { useRef } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   TextInput,
//   KeyboardAvoidingView,
//   Platform,
//   StyleSheet,
// } from "react-native";
// import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// export default function Step3({ data, setData }) {
//   const scrollViewRef = useRef(null);

//   const handleEnglishInput = (key) => (text) => {
//     const englishOnly = text.replace(/[^a-zA-Z0-9\s.,\-\/]/g, "");
//     setData((p) => ({ ...p, [key]: englishOnly }));
//   };

//   const handleNumberInput = (key) => (text) => {
//     const numbersOnly = text.replace(/[^0-9]/g, "");
//     setData((p) => ({ ...p, [key]: numbersOnly }));
//   };

//   const handleFieldFocus = () => {
//     setTimeout(() => {
//       scrollViewRef.current?.scrollToEnd({ animated: true });
//     }, 300);
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}
//       keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
//     >
//       <ScrollView
//         ref={scrollViewRef}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: 40 }}
//         keyboardShouldPersistTaps="handled"
//         scrollEventThrottle={16}
//       >
//         {/* ── EDUCATION ── */}
//         <SectionHeader title="Education Details" />
//         <View style={{ paddingHorizontal: 4 }}>
//           <Field
//             label="Education Level"
//             required
//             value={data.educationLevel || ""}
//             onChangeText={handleEnglishInput("educationLevel")}
//             placeholder="e.g. Graduate / B.E."
//             onFocus={handleFieldFocus}
//           />
//         </View>

//         {/* ── SERVICE / BUSINESS ── */}
//         <SectionHeader title="Service / Business" />

//         {/* Row 1 — Job | Designation | Company (3-Column Tidy) */}
//         <View style={styles.row3}>
//           <View style={{ flex: 1, marginRight: 6 }}>
//             <Field
//               label="Occupation"
//               value={data.jobType || ""}
//               onChangeText={handleEnglishInput("jobType")}
//               placeholder="Engineer"
//               onFocus={handleFieldFocus}
//             />
//           </View>
//           <View style={{ flex: 1, marginHorizontal: 3 }}>
//             <Field
//               label="Designation"
//               value={data.designation || ""}
//               onChangeText={handleEnglishInput("designation")}
//               placeholder="Manager"
//               onFocus={handleFieldFocus}
//             />
//           </View>
//           <View style={{ flex: 1, marginLeft: 6 }}>
//             <Field
//               label="Company"
//               value={data.company || ""}
//               onChangeText={handleEnglishInput("company")}
//               placeholder="Infosys"
//               onFocus={handleFieldFocus}
//             />
//           </View>
//         </View>

//         {/* Row 2 — Location | Mobile | Income (3-Column Tidy) */}
//         <View style={styles.row3}>
//           <View style={{ flex: 1, marginRight: 6 }}>
//             <Field
//               label="Job City"
//               value={data.jobLocation || ""}
//               onChangeText={handleEnglishInput("jobLocation")}
//               placeholder="Pune"
//               onFocus={handleFieldFocus}
//             />
//           </View>
//           <View style={{ flex: 1, marginHorizontal: 3 }}>
//             <Field
//               label="mobile No."
//               value={data.jobMobile || ""}
//               onChangeText={handleNumberInput("jobMobile")}
//               keyboardType="phone-pad"
//               placeholder="9200..."
//               onFocus={handleFieldFocus}
//             />
//           </View>
//           <View style={{ flex: 1, marginLeft: 6 }}>
//             <Field
//               label="Income (₹/m)"
//               value={data.salary || ""}
//               onChangeText={handleNumberInput("salary")}
//               keyboardType="numeric"
//               placeholder="25000"
//               onFocus={handleFieldFocus}
//             />
//           </View>
//         </View>

//         {/* ── OTHER WORK INFO ── */}
//         <View style={[styles.marathiPadWrap, { marginTop: 15 }]}>
//           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
//             Other Work Information (English)
//           </Text>
//           <TextInput
//             style={[styles.marathiPad, { minHeight: 120 }]}
//             multiline
//             placeholder="Enter any additional work details..."
//             placeholderTextColor="#bbb"
//             value={data.workNotes || ""}
//             onChangeText={handleEnglishInput("workNotes")}
//             onFocus={handleFieldFocus}
//           />
//         </View>

//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }












// Step3.jsx - FIXED WITH AGGRESSIVE KEYBOARD SCROLL
import React, { useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

export default function Step3({ data, setData }) {
  const scrollViewRef = useRef(null);

  const handleEnglishInput = (key) => (text) => {
    const englishOnly = text.replace(/[^a-zA-Z0-9\s.,\-\/]/g, "");
    setData((p) => ({ ...p, [key]: englishOnly }));
  };

  const handleNumberInput = (key) => (text) => {
    const numbersOnly = text.replace(/[^0-9]/g, "");
    setData((p) => ({ ...p, [key]: numbersOnly }));
  };

  // ─── UPDATED KEYBOARD SCROLL HANDLER ───
  // Scrolls aggressively to the bottom on every focus
  const handleFieldFocus = () => {
    // Immediate scroll
    scrollViewRef.current?.scrollToEnd({ animated: true });
    
    // Delayed scrolls to ensure keyboard is fully open
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
    
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 300);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        // INCREASED PADDING BOTTOM TO 300 FOR EXTRA SCROLL ROOM
        contentContainerStyle={{ paddingBottom: 300 }}
        keyboardShouldPersistTaps="handled"
        scrollEventThrottle={16}
      >
        {/* ── EDUCATION ── */}
        <SectionHeader title="Education Details" />
        <View style={{ paddingHorizontal: 4 }}>
          <Field
            label="Education Level"
            required
            value={data.educationLevel || ""}
            onChangeText={handleEnglishInput("educationLevel")}
            placeholder="e.g. Graduate / B.E."
            onFocus={handleFieldFocus}
          />
        </View>

        {/* ── SERVICE / BUSINESS ── */}
        <SectionHeader title="Service / Business" />

        {/* Row 1 — Job | Designation | Company (3-Column Tidy) */}
        <View style={styles.row3}>
          <View style={{ flex: 1, marginRight: 6 }}>
            <Field
              label="Occupation"
              value={data.jobType || ""}
              onChangeText={handleEnglishInput("jobType")}
              placeholder="Engineer"
              onFocus={handleFieldFocus}
            />
          </View>
          <View style={{ flex: 1, marginHorizontal: 3 }}>
            <Field
              label="Designation"
              value={data.designation || ""}
              onChangeText={handleEnglishInput("designation")}
              placeholder="Manager"
              onFocus={handleFieldFocus}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 6 }}>
            <Field
              label="Company"
              value={data.company || ""}
              onChangeText={handleEnglishInput("company")}
              placeholder="Infosys"
              onFocus={handleFieldFocus}
            />
          </View>
        </View>

        {/* Row 2 — Location | Mobile | Income (3-Column Tidy) */}
        <View style={styles.row3}>
          <View style={{ flex: 1, marginRight: 6 }}>
            <Field
              label="Job City"
              value={data.jobLocation || ""}
              onChangeText={handleEnglishInput("jobLocation")}
              placeholder="Pune"
              onFocus={handleFieldFocus}
            />
          </View>
          <View style={{ flex: 1, marginHorizontal: 3 }}>
            <Field
              label="mobile No."
              value={data.jobMobile || ""}
              onChangeText={handleNumberInput("jobMobile")}
              keyboardType="phone-pad"
              placeholder="9200..."
              onFocus={handleFieldFocus}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 6 }}>
            <Field
              label="Income (₹/m)"
              value={data.salary || ""}
              onChangeText={handleNumberInput("salary")}
              keyboardType="numeric"
              placeholder="25000"
              onFocus={handleFieldFocus}
            />
          </View>
        </View>

        {/* ── OTHER WORK INFO ── */}
        <View style={[styles.marathiPadWrap, { marginTop: 15 }]}>
          <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
            Other Work Information (English)
          </Text>
          <TextInput
            style={[styles.marathiPad, { minHeight: 120 }]}
            multiline
            placeholder="Enter any additional work details..."
            placeholderTextColor="#bbb"
            value={data.workNotes || ""}
            onChangeText={handleEnglishInput("workNotes")}
            onFocus={handleFieldFocus}
          />
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}