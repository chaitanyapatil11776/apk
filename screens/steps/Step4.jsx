// // // // import React from "react";
// // // // import { View, Text, ScrollView, TextInput } from "react-native";
// // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // export default function Step4({ data, setData }) {
// // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));
  
// // // //   return (
// // // //     <ScrollView showsVerticalScrollIndicator={false}>
// // // //       <SectionHeader title="जोडीदाराविषयी अपेक्षा" />
// // // //       <View style={styles.marathiPadWrap}>
// // // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>(छंद/गुण/स्वभाव/वांछनीय शेरे) <Text style={{ color: "red" }}>*</Text></Text>
// // // //         <TextInput
// // // //           style={[styles.marathiPad, { height: 90 }]}
// // // //           multiline
// // // //           placeholder="Expectations"
// // // //           placeholderTextColor="#bbb"
// // // //           value={data.expectations}
// // // //           onChangeText={set("expectations")}
// // // //         />
// // // //         <Text style={styles.hint}>For e.g.: Smart, अनुरूप, इंजिनीअर, डॉक्टर, मिळवती इत्र.</Text>
// // // //       </View>

// // // //       <SectionHeader title="Father's / Parents Details" />
// // // //       <View style={styles.row3}>
// // // //         <View style={{ flex: 0.6, marginRight: 6 }}>
// // // //           <Field label="Title" required value={data.fatherTitle} onChangeText={set("fatherTitle")} placeholder="श्री" />
// // // //         </View>
// // // //         <View style={{ flex: 1.4, marginHorizontal: 3 }}>
// // // //           <Field label="वडिलांचे / पालकांचे नाव" required value={data.fatherName} onChangeText={set("fatherName")} placeholder="वडिलांचे नाव" />
// // // //         </View>
// // // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // // //           <Field label="पत्ता" required value={data.fatherAddress} onChangeText={set("fatherAddress")} placeholder="पत्ता" />
// // // //         </View>
// // // //       </View>
// // // //       <View style={styles.row3}>
// // // //         <View style={{ flex: 1, marginRight: 6 }}>
// // // //           <Field label="दूरध्वनी (with STD)" value={data.fatherPhone} onChangeText={set("fatherPhone")} keyboardType="phone-pad" />
// // // //         </View>
// // // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // //           <Field label="मोबाईल" required value={data.fatherMobile} onChangeText={set("fatherMobile")} keyboardType="phone-pad" />
// // // //         </View>
// // // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // // //           <Field label="Email" value={data.fatherEmail} onChangeText={set("fatherEmail")} keyboardType="email-address" />
// // // //         </View>
// // // //       </View>

// // // //       <SectionHeader title="संपर्कासाठी नाव व पत्ता 1" />
// // // //       <View style={styles.row3}>
// // // //         <View style={{ flex: 0.6, marginRight: 6 }}>
// // // //           <Field label="Title" value={data.contact1Title} onChangeText={set("contact1Title")} placeholder="श्री" />
// // // //         </View>
// // // //         <View style={{ flex: 1.4, marginHorizontal: 3 }}>
// // // //           <Field label="संपर्काचे नाव" value={data.contact1Name} onChangeText={set("contact1Name")} placeholder="संपर्काचे नाव" />
// // // //         </View>
// // // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // // //           <Field label="पत्ता" value={data.contact1Address} onChangeText={set("contact1Address")} placeholder="पत्ता" />
// // // //         </View>
// // // //       </View>
// // // //       <View style={styles.row2}>
// // // //         <View style={{ flex: 1, marginRight: 8 }}>
// // // //           <Field label="दूरध्वनी (with STD)" value={data.contact1Phone} onChangeText={set("contact1Phone")} keyboardType="phone-pad" />
// // // //         </View>
// // // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // // //           <Field label="मोबाईल" value={data.contact1Mobile} onChangeText={set("contact1Mobile")} keyboardType="phone-pad" />
// // // //         </View>
// // // //       </View>

// // // //       <SectionHeader title="संपर्कासाठी नाव व पत्ता 2" />
// // // //       <View style={styles.row3}>
// // // //         <View style={{ flex: 0.6, marginRight: 6 }}>
// // // //           <Field label="Title" value={data.contact2Title} onChangeText={set("contact2Title")} placeholder="श्री" />
// // // //         </View>
// // // //         <View style={{ flex: 1.4, marginHorizontal: 3 }}>
// // // //           <Field label="संपर्काचे नाव" value={data.contact2Name} onChangeText={set("contact2Name")} placeholder="संपर्काचे नाव" />
// // // //         </View>
// // // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // // //           <Field label="पत्ता" value={data.contact2Address} onChangeText={set("contact2Address")} placeholder="पत्ता" />
// // // //         </View>
// // // //       </View>
// // // //       <View style={styles.row2}>
// // // //         <View style={{ flex: 1, marginRight: 8 }}>
// // // //           <Field label="दूरध्वनी (with STD)" value={data.contact2Phone} onChangeText={set("contact2Phone")} keyboardType="phone-pad" />
// // // //         </View>
// // // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // // //           <Field label="मोबाईल" value={data.contact2Mobile} onChangeText={set("contact2Mobile")} keyboardType="phone-pad" />
// // // //         </View>
// // // //       </View>

// // // //       <View style={styles.marathiPadWrap}>
// // // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>Marathi Type Pad</Text>
// // // //         <TextInput style={styles.marathiPad} multiline placeholder="Type in Marathi..." placeholderTextColor="#bbb" />
// // // //       </View>
// // // //     </ScrollView>
// // // //   );
// // // // }









// // // import React from "react";
// // // import { View, Text, ScrollView, TextInput } from "react-native";
// // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // export default function Step4({ data, setData }) {

// // //   // ---------------------------------------------------------
// // //   // LOGIC: MARATHI ONLY (Strict)
// // //   // Blocks English characters. Allows Marathi, Numbers, Spaces, Punctuation.
// // //   // ---------------------------------------------------------
// // //   const handleMarathiInput = (key) => (text) => {
// // //     const marathiOnly = text.replace(/[^\u0900-\u097F0-9\s.,?!]/g, "");
// // //     setData((p) => ({ ...p, [key]: marathiOnly }));
// // //   };

// // //   // ---------------------------------------------------------
// // //   // LOGIC: NUMBERS ONLY
// // //   // ---------------------------------------------------------
// // //   const handleNumberInput = (key) => (text) => {
// // //     const numbersOnly = text.replace(/[^0-9]/g, "");
// // //     setData((p) => ({ ...p, [key]: numbersOnly }));
// // //   };

// // //   // Generic setter for special fields (like Email)
// // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// // //   return (
// // //     <ScrollView showsVerticalScrollIndicator={false}>
// // //       <SectionHeader title="जोडीदाराविषयी अपेक्षा" />
      
// // //       {/* MARATHI ONLY EXPECTATIONS */}
// // //       <View style={styles.marathiPadWrap}>
// // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // //           (छंद/गुण/स्वभाव/वांछनीय शेरे) <Text style={{ color: "red" }}>*</Text>
// // //         </Text>
// // //         <TextInput
// // //           style={[styles.marathiPad, { height: 90 }]}
// // //           multiline
// // //           placeholder="येथे अपेक्षा लिहा..."
// // //           placeholderTextColor="#bbb"
// // //           value={data.expectations}
// // //           onChangeText={handleMarathiInput("expectations")}
// // //         />
// // //         <Text style={styles.hint}>उदा: हुशार, अनुरूप, इंजिनीअर, डॉक्टर इ.</Text>
// // //       </View>

// // //       <SectionHeader title="Father's / Parents Details" />
// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 0.6, marginRight: 6 }}>
// // //           <Field 
// // //             label="Title" 
// // //             required 
// // //             value={data.fatherTitle} 
// // //             onChangeText={handleMarathiInput("fatherTitle")} 
// // //             placeholder="श्री" 
// // //           />
// // //         </View>
// // //         <View style={{ flex: 1.4, marginHorizontal: 3 }}>
// // //           <Field 
// // //             label="वडिलांचे / पालकांचे नाव" 
// // //             required 
// // //             value={data.fatherName} 
// // //             onChangeText={handleMarathiInput("fatherName")} 
// // //             placeholder="नाव" 
// // //           />
// // //         </View>
// // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // //           <Field 
// // //             label="पत्ता" 
// // //             required 
// // //             value={data.fatherAddress} 
// // //             onChangeText={handleMarathiInput("fatherAddress")} 
// // //             placeholder="शहर/गाव" 
// // //           />
// // //         </View>
// // //       </View>
// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 1, marginRight: 6 }}>
// // //           <Field label="दूरध्वनी" value={data.fatherPhone} onChangeText={handleNumberInput("fatherPhone")} keyboardType="phone-pad" />
// // //         </View>
// // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // //           <Field label="मोबाईल" required value={data.fatherMobile} onChangeText={handleNumberInput("fatherMobile")} keyboardType="phone-pad" />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // //           <Field label="Email" value={data.fatherEmail} onChangeText={set("fatherEmail")} keyboardType="email-address" />
// // //         </View>
// // //       </View>

// // //       <SectionHeader title="संपर्कासाठी नाव व पत्ता १" />
// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 0.6, marginRight: 6 }}>
// // //           <Field label="Title" value={data.contact1Title} onChangeText={handleMarathiInput("contact1Title")} placeholder="श्री" />
// // //         </View>
// // //         <View style={{ flex: 1.4, marginHorizontal: 3 }}>
// // //           <Field label="संपर्काचे नाव" value={data.contact1Name} onChangeText={handleMarathiInput("contact1Name")} placeholder="नाव" />
// // //         </View>
// // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // //           <Field label="पत्ता" value={data.contact1Address} onChangeText={handleMarathiInput("contact1Address")} placeholder="पत्ता" />
// // //         </View>
// // //       </View>
// // //       <View style={styles.row2}>
// // //         <View style={{ flex: 1, marginRight: 8 }}>
// // //           <Field label="दूरध्वनी" value={data.contact1Phone} onChangeText={handleNumberInput("contact1Phone")} keyboardType="phone-pad" />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // //           <Field label="मोबाईल" value={data.contact1Mobile} onChangeText={handleNumberInput("contact1Mobile")} keyboardType="phone-pad" />
// // //         </View>
// // //       </View>

// // //       <SectionHeader title="संपर्कासाठी नाव व पत्ता २" />
// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 0.6, marginRight: 6 }}>
// // //           <Field label="Title" value={data.contact2Title} onChangeText={handleMarathiInput("contact2Title")} placeholder="श्री" />
// // //         </View>
// // //         <View style={{ flex: 1.4, marginHorizontal: 3 }}>
// // //           <Field label="संपर्काचे नाव" value={data.contact2Name} onChangeText={handleMarathiInput("contact2Name")} placeholder="नाव" />
// // //         </View>
// // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // //           <Field label="पत्ता" value={data.contact2Address} onChangeText={handleMarathiInput("contact2Address")} placeholder="पत्ता" />
// // //         </View>
// // //       </View>
// // //       <View style={styles.row2}>
// // //         <View style={{ flex: 1, marginRight: 8 }}>
// // //           <Field label="दूरध्वनी" value={data.contact2Phone} onChangeText={handleNumberInput("contact2Phone")} keyboardType="phone-pad" />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // //           <Field label="मोबाईल" value={data.contact2Mobile} onChangeText={handleNumberInput("contact2Mobile")} keyboardType="phone-pad" />
// // //         </View>
// // //       </View>

// // //       <View style={styles.marathiPadWrap}>
// // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>Marathi Type Pad</Text>
// // //         <TextInput 
// // //           style={styles.marathiPad} 
// // //           multiline 
// // //           placeholder="येथे मराठीत टाइप करा..." 
// // //           placeholderTextColor="#bbb"
// // //           value={data.extraMarathiNotes || ""}
// // //           onChangeText={handleMarathiInput("extraMarathiNotes")}
// // //         />
// // //       </View>
// // //     </ScrollView>
// // //   );
// // // }








// // // api
// // import React, { useState, useRef } from "react";
// // import { View, Text, ScrollView, TextInput, ActivityIndicator } from "react-native";
// // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // Reuse the translation helper
// // const translateText = async (text, targetLanguage = "mr") => {
// //   if (!text || text.trim().length === 0) return "";
// //   const API_KEY = "AIzaSyDaU2e1o8NbVbgh9I2p14EDekdP3ZvYyW4";
// //   try {
// //     const response = await fetch(
// //       `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
// //       {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           q: text,
// //           target: targetLanguage,
// //           source: "en",
// //           format: "text",
// //         }),
// //       }
// //     );
// //     const data = await response.json();
// //     return data.data?.translations?.[0]?.translatedText || text;
// //   } catch (error) {
// //     console.error("Translation error:", error);
// //     return text;
// //   }
// // };

// // export default function Step4({ data, setData }) {
// //   const [translatingFields, setTranslatingFields] = useState({});
// //   const typingTimeoutRef = useRef(null);

// //   // ---------------------------------------------------------
// //   // LOGIC: DEBOUNCED AUTO-TRANSLATE (English to Marathi)
// //   // ---------------------------------------------------------
// //   const handleMarathiInput = (key) => (val) => {
// //     setData((p) => ({ ...p, [key]: val }));

// //     if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

// //     const englishChars = val.match(/[a-zA-Z]/g);

// //     if (englishChars && englishChars.length > 0) {
// //       const englishText = val.replace(/[^\x00-\x7F\s]/g, "").trim();
// //       if (englishText.length > 1) {
// //         setTranslatingFields((prev) => ({ ...prev, [key]: true }));

// //         typingTimeoutRef.current = setTimeout(async () => {
// //           try {
// //             const translated = await translateText(englishText, "mr");
// //             setData((p) => ({ ...p, [key]: translated }));
// //           } finally {
// //             setTranslatingFields((prev) => ({ ...prev, [key]: false }));
// //           }
// //         }, 800);
// //       }
// //     } else {
// //       // Pure Marathi filtering
// //       const filtered = val.replace(/[^\u0900-\u097F0-9\s.,?!]/g, "");
// //       setData((p) => ({ ...p, [key]: filtered }));
// //     }
// //   };

// //   const handleNumberInput = (key) => (text) => {
// //     const numbersOnly = text.replace(/[^0-9]/g, "");
// //     setData((p) => ({ ...p, [key]: numbersOnly }));
// //   };

// //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// //   // Helper for spinner
// //   const renderIndicator = (key, isLarge = false) => translatingFields[key] && (
// //     <View style={{ position: 'absolute', right: 10, top: isLarge ? 35 : '55%' }}>
// //       <ActivityIndicator size="small" color="#f97316" />
// //     </View>
// //   );

// //   return (
// //     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
// //       <SectionHeader title="जोडीदाराविषयी अपेक्षा" />
      
// //       {/* MARATHI EXPECTATIONS */}
// //       <View style={[styles.marathiPadWrap, { position: 'relative' }]}>
// //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// //           (छंद/गुण/स्वभाव/वांछनीय शेरे) <Text style={{ color: "red" }}>*</Text>
// //         </Text>
// //         <TextInput
// //           style={[styles.marathiPad, { height: 90 }, translatingFields.expectations && { opacity: 0.6 }]}
// //           multiline
// //           placeholder="येथे अपेक्षा लिहा (English type for Marathi)..."
// //           placeholderTextColor="#bbb"
// //           value={data.expectations}
// //           onChangeText={handleMarathiInput("expectations")}
// //         />
// //         {renderIndicator("expectations", true)}
// //         <Text style={styles.hint}>उदा: हुशार, अनुरूप, इंजिनीअर, डॉक्टर इ.</Text>
// //       </View>

// //       <SectionHeader title="Father's / Parents Details" />
// //       <View style={styles.row3}>
// //         <View style={{ flex: 0.6, marginRight: 6, position: 'relative' }}>
// //           <Field 
// //             label="Title" 
// //             required 
// //             value={data.fatherTitle} 
// //             onChangeText={handleMarathiInput("fatherTitle")} 
// //             placeholder="श्री" 
// //           />
// //           {renderIndicator("fatherTitle")}
// //         </View>
// //         <View style={{ flex: 1.4, marginHorizontal: 3, position: 'relative' }}>
// //           <Field 
// //             label="वडिलांचे / पालकांचे नाव" 
// //             required 
// //             value={data.fatherName} 
// //             onChangeText={handleMarathiInput("fatherName")} 
// //             placeholder="नाव" 
// //           />
// //           {renderIndicator("fatherName")}
// //         </View>
// //         <View style={{ flex: 0.8, marginLeft: 6, position: 'relative' }}>
// //           <Field 
// //             label="पत्ता" 
// //             required 
// //             value={data.fatherAddress} 
// //             onChangeText={handleMarathiInput("fatherAddress")} 
// //             placeholder="शहर/गाव" 
// //           />
// //           {renderIndicator("fatherAddress")}
// //         </View>
// //       </View>

// //       <View style={styles.row3}>
// //         <View style={{ flex: 1, marginRight: 6 }}>
// //           <Field label="दूरध्वनी" value={data.fatherPhone} onChangeText={handleNumberInput("fatherPhone")} keyboardType="phone-pad" />
// //         </View>
// //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// //           <Field label="मोबाईल" required value={data.fatherMobile} onChangeText={handleNumberInput("fatherMobile")} keyboardType="phone-pad" />
// //         </View>
// //         <View style={{ flex: 1, marginLeft: 6 }}>
// //           <Field label="Email" value={data.fatherEmail} onChangeText={set("fatherEmail")} keyboardType="email-address" />
// //         </View>
// //       </View>

// //       <SectionHeader title="संपर्कासाठी नाव व पत्ता १" />
// //       <View style={styles.row3}>
// //         <View style={{ flex: 0.6, marginRight: 6, position: 'relative' }}>
// //           <Field label="Title" value={data.contact1Title} onChangeText={handleMarathiInput("contact1Title")} placeholder="श्री" />
// //           {renderIndicator("contact1Title")}
// //         </View>
// //         <View style={{ flex: 1.4, marginHorizontal: 3, position: 'relative' }}>
// //           <Field label="संपर्काचे नाव" value={data.contact1Name} onChangeText={handleMarathiInput("contact1Name")} placeholder="नाव" />
// //           {renderIndicator("contact1Name")}
// //         </View>
// //         <View style={{ flex: 0.8, marginLeft: 6, position: 'relative' }}>
// //           <Field label="पत्ता" value={data.contact1Address} onChangeText={handleMarathiInput("contact1Address")} placeholder="पत्ता" />
// //           {renderIndicator("contact1Address")}
// //         </View>
// //       </View>

// //       <View style={styles.row2}>
// //         <View style={{ flex: 1, marginRight: 8 }}>
// //           <Field label="दूरध्वनी" value={data.contact1Phone} onChangeText={handleNumberInput("contact1Phone")} keyboardType="phone-pad" />
// //         </View>
// //         <View style={{ flex: 1, marginLeft: 8 }}>
// //           <Field label="मोबाईल" value={data.contact1Mobile} onChangeText={handleNumberInput("contact1Mobile")} keyboardType="phone-pad" />
// //         </View>
// //       </View>

// //       <SectionHeader title="संपर्कासाठी नाव व पत्ता २" />
// //       <View style={styles.row3}>
// //         <View style={{ flex: 0.6, marginRight: 6, position: 'relative' }}>
// //           <Field label="Title" value={data.contact2Title} onChangeText={handleMarathiInput("contact2Title")} placeholder="श्री" />
// //           {renderIndicator("contact2Title")}
// //         </View>
// //         <View style={{ flex: 1.4, marginHorizontal: 3, position: 'relative' }}>
// //           <Field label="संपर्काचे नाव" value={data.contact2Name} onChangeText={handleMarathiInput("contact2Name")} placeholder="नाव" />
// //           {renderIndicator("contact2Name")}
// //         </View>
// //         <View style={{ flex: 0.8, marginLeft: 6, position: 'relative' }}>
// //           <Field label="पत्ता" value={data.contact2Address} onChangeText={handleMarathiInput("contact2Address")} placeholder="पत्ता" />
// //           {renderIndicator("contact2Address")}
// //         </View>
// //       </View>

// //       <View style={styles.row2}>
// //         <View style={{ flex: 1, marginRight: 8 }}>
// //           <Field label="दूरध्वनी" value={data.contact2Phone} onChangeText={handleNumberInput("contact2Phone")} keyboardType="phone-pad" />
// //         </View>
// //         <View style={{ flex: 1, marginLeft: 8 }}>
// //           <Field label="मोबाईल" value={data.contact2Mobile} onChangeText={handleNumberInput("contact2Mobile")} keyboardType="phone-pad" />
// //         </View>
// //       </View>

// //       <View style={[styles.marathiPadWrap, { position: 'relative' }]}>
// //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>Marathi Type Pad</Text>
// //         <TextInput 
// //           style={[styles.marathiPad, translatingFields.extraMarathiNotes && { opacity: 0.6 }]} 
// //           multiline 
// //           placeholder="येथे मराठीत टाइप करा..." 
// //           placeholderTextColor="#bbb"
// //           value={data.extraMarathiNotes || ""}
// //           onChangeText={handleMarathiInput("extraMarathiNotes")}
// //         />
// //         {renderIndicator("extraMarathiNotes", true)}
// //       </View>
// //     </ScrollView>
// //   );
// // }




// // new 
// // api - FIXED WITH WORKING KEYBOARD SCROLL
// import React, { useState, useRef } from "react";
// import { View, Text, ScrollView, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native";
// import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // Reuse the translation helper
// const translateText = async (text, targetLanguage = "mr") => {
//   if (!text || text.trim().length === 0) return "";
//   const API_KEY = "AIzaSyDaU2e1o8NbVbgh9I2p14EDekdP3ZvYyW4";
//   try {
//     const response = await fetch(
//       `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           q: text,
//           target: targetLanguage,
//           source: "en",
//           format: "text",
//         }),
//       }
//     );
//     const data = await response.json();
//     return data.data?.translations?.[0]?.translatedText || text;
//   } catch (error) {
//     console.error("Translation error:", error);
//     return text;
//   }
// };

// export default function Step4({ data, setData }) {
//   const [translatingFields, setTranslatingFields] = useState({});
//   const typingTimeoutRef = useRef(null);
//   const scrollViewRef = useRef(null);

//   // ---------------------------------------------------------
//   // LOGIC: DEBOUNCED AUTO-TRANSLATE (English to Marathi)
//   // ---------------------------------------------------------
//   const handleMarathiInput = (key) => (val) => {
//     setData((p) => ({ ...p, [key]: val }));

//     if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

//     const englishChars = val.match(/[a-zA-Z]/g);

//     if (englishChars && englishChars.length > 0) {
//       const englishText = val.replace(/[^\x00-\x7F\s]/g, "").trim();
//       if (englishText.length > 1) {
//         setTranslatingFields((prev) => ({ ...prev, [key]: true }));

//         typingTimeoutRef.current = setTimeout(async () => {
//           try {
//             const translated = await translateText(englishText, "mr");
//             setData((p) => ({ ...p, [key]: translated }));
//           } finally {
//             setTranslatingFields((prev) => ({ ...prev, [key]: false }));
//           }
//         }, 800);
//       }
//     } else {
//       // Pure Marathi filtering
//       const filtered = val.replace(/[^\u0900-\u097F0-9\s.,?!]/g, "");
//       setData((p) => ({ ...p, [key]: filtered }));
//     }
//   };

//   const handleNumberInput = (key) => (text) => {
//     const numbersOnly = text.replace(/[^0-9]/g, "");
//     setData((p) => ({ ...p, [key]: numbersOnly }));
//   };

//   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

//   // ✅ KEYBOARD SCROLL HANDLER
//   const handleFieldFocus = () => {
//     setTimeout(() => {
//       scrollViewRef.current?.scrollToEnd({ animated: true });
//     }, 300);
//   };

//   // Helper for spinner
//   const renderIndicator = (key, isLarge = false) => translatingFields[key] && (
//     <View style={{ position: 'absolute', right: 10, top: isLarge ? 35 : '55%' }}>
//       <ActivityIndicator size="small" color="#f97316" />
//     </View>
//   );

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
//         <SectionHeader title="जोडीदाराविषयी अपेक्षा" />
        
//         {/* MARATHI EXPECTATIONS */}
//         <View style={[styles.marathiPadWrap, { position: 'relative', minHeight: 180 }]}>
//           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
//             (छंद/गुण/स्वभाव/वांछनीय शेरे) <Text style={{ color: "red" }}>*</Text>
//           </Text>
//           <TextInput
//             style={[styles.marathiPad, { height: 90 }, translatingFields.expectations && { opacity: 0.6 }]}
//             multiline
//             placeholder="येथे अपेक्षा लिहा (English type for Marathi)..."
//             placeholderTextColor="#bbb"
//             value={data.expectations}
//             onChangeText={handleMarathiInput("expectations")}
//             onFocus={handleFieldFocus}
//           />
//           {renderIndicator("expectations", true)}
//           <Text style={styles.hint}>उदा: हुशार, अनुरूप, इंजिनीअर, डॉक्टर इ.</Text>
//         </View>

//         <SectionHeader title="Father's / Parents Details" />
//         <View style={styles.row3}>
//           <View style={{ flex: 0.6, marginRight: 6, position: 'relative' }}>
//             <Field 
//               label="Title" 
//               required 
//               value={data.fatherTitle} 
//               onChangeText={handleMarathiInput("fatherTitle")} 
//               placeholder="श्री"
//               onFocus={handleFieldFocus}
//             />
//             {renderIndicator("fatherTitle")}
//           </View>
//           <View style={{ flex: 1.4, marginHorizontal: 3, position: 'relative' }}>
//             <Field 
//               label="वडिलांचे / पालकांचे नाव" 
//               required 
//               value={data.fatherName} 
//               onChangeText={handleMarathiInput("fatherName")} 
//               placeholder="नाव"
//               onFocus={handleFieldFocus}
//             />
//             {renderIndicator("fatherName")}
//           </View>
//           <View style={{ flex: 0.8, marginLeft: 6, position: 'relative' }}>
//             <Field 
//               label="पत्ता" 
//               required 
//               value={data.fatherAddress} 
//               onChangeText={handleMarathiInput("fatherAddress")} 
//               placeholder="शहर/गाव"
//               onFocus={handleFieldFocus}
//             />
//             {renderIndicator("fatherAddress")}
//           </View>
//         </View>

//         <View style={styles.row3}>
//           <View style={{ flex: 1, marginRight: 6 }}>
//             <Field 
//               label="दूरध्वनी" 
//               value={data.fatherPhone} 
//               onChangeText={handleNumberInput("fatherPhone")} 
//               keyboardType="phone-pad"
//               onFocus={handleFieldFocus}
//             />
//           </View>
//           <View style={{ flex: 1, marginHorizontal: 3 }}>
//             <Field 
//               label="मोबाईल" 
//               required 
//               value={data.fatherMobile} 
//               onChangeText={handleNumberInput("fatherMobile")} 
//               keyboardType="phone-pad"
//               onFocus={handleFieldFocus}
//             />
//           </View>
//           <View style={{ flex: 1, marginLeft: 6 }}>
//             <Field 
//               label="Email" 
//               value={data.fatherEmail} 
//               onChangeText={set("fatherEmail")} 
//               keyboardType="email-address"
//               onFocus={handleFieldFocus}
//             />
//           </View>
//         </View>

//         <SectionHeader title="संपर्कासाठी नाव व पत्ता १" />
//         <View style={styles.row3}>
//           <View style={{ flex: 0.6, marginRight: 6, position: 'relative' }}>
//             <Field 
//               label="Title" 
//               value={data.contact1Title} 
//               onChangeText={handleMarathiInput("contact1Title")} 
//               placeholder="श्री"
//               onFocus={handleFieldFocus}
//             />
//             {renderIndicator("contact1Title")}
//           </View>
//           <View style={{ flex: 1.4, marginHorizontal: 3, position: 'relative' }}>
//             <Field 
//               label="संपर्काचे नाव" 
//               value={data.contact1Name} 
//               onChangeText={handleMarathiInput("contact1Name")} 
//               placeholder="नाव"
//               onFocus={handleFieldFocus}
//             />
//             {renderIndicator("contact1Name")}
//           </View>
//           <View style={{ flex: 0.8, marginLeft: 6, position: 'relative' }}>
//             <Field 
//               label="पत्ता" 
//               value={data.contact1Address} 
//               onChangeText={handleMarathiInput("contact1Address")} 
//               placeholder="पत्ता"
//               onFocus={handleFieldFocus}
//             />
//             {renderIndicator("contact1Address")}
//           </View>
//         </View>

//         <View style={styles.row2}>
//           <View style={{ flex: 1, marginRight: 8 }}>
//             <Field 
//               label="दूरध्वनी" 
//               value={data.contact1Phone} 
//               onChangeText={handleNumberInput("contact1Phone")} 
//               keyboardType="phone-pad"
//               onFocus={handleFieldFocus}
//             />
//           </View>
//           <View style={{ flex: 1, marginLeft: 8 }}>
//             <Field 
//               label="मोबाईल" 
//               value={data.contact1Mobile} 
//               onChangeText={handleNumberInput("contact1Mobile")} 
//               keyboardType="phone-pad"
//               onFocus={handleFieldFocus}
//             />
//           </View>
//         </View>

//         <SectionHeader title="संपर्कासाठी नाव व पत्ता २" />
//         <View style={styles.row3}>
//           <View style={{ flex: 0.6, marginRight: 6, position: 'relative' }}>
//             <Field 
//               label="Title" 
//               value={data.contact2Title} 
//               onChangeText={handleMarathiInput("contact2Title")} 
//               placeholder="श्री"
//               onFocus={handleFieldFocus}
//             />
//             {renderIndicator("contact2Title")}
//           </View>
//           <View style={{ flex: 1.4, marginHorizontal: 3, position: 'relative' }}>
//             <Field 
//               label="संपर्काचे नाव" 
//               value={data.contact2Name} 
//               onChangeText={handleMarathiInput("contact2Name")} 
//               placeholder="नाव"
//               onFocus={handleFieldFocus}
//             />
//             {renderIndicator("contact2Name")}
//           </View>
//           <View style={{ flex: 0.8, marginLeft: 6, position: 'relative' }}>
//             <Field 
//               label="पत्ता" 
//               value={data.contact2Address} 
//               onChangeText={handleMarathiInput("contact2Address")} 
//               placeholder="पत्ता"
//               onFocus={handleFieldFocus}
//             />
//             {renderIndicator("contact2Address")}
//           </View>
//         </View>

//         <View style={styles.row2}>
//           <View style={{ flex: 1, marginRight: 8 }}>
//             <Field 
//               label="दूरध्वनी" 
//               value={data.contact2Phone} 
//               onChangeText={handleNumberInput("contact2Phone")} 
//               keyboardType="phone-pad"
//               onFocus={handleFieldFocus}
//             />
//           </View>
//           <View style={{ flex: 1, marginLeft: 8 }}>
//             <Field 
//               label="मोबाईल" 
//               value={data.contact2Mobile} 
//               onChangeText={handleNumberInput("contact2Mobile")} 
//               keyboardType="phone-pad"
//               onFocus={handleFieldFocus}
//             />
//           </View>
//         </View>

//         <View style={[styles.marathiPadWrap, { position: 'relative', minHeight: 180 }]}>
//           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>Marathi Type Pad</Text>
//           <TextInput 
//             style={[styles.marathiPad, translatingFields.extraMarathiNotes && { opacity: 0.6 }]} 
//             multiline 
//             placeholder="येथे मराठीत टाइप करा..." 
//             placeholderTextColor="#bbb"
//             value={data.extraMarathiNotes || ""}
//             onChangeText={handleMarathiInput("extraMarathiNotes")}
//             onFocus={handleFieldFocus}
//           />
//           {renderIndicator("extraMarathiNotes", true)}
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }














// Step4.jsx - FIXED WITH AGGRESSIVE KEYBOARD SCROLL
import React, { useState, useRef } from "react";
import { View, Text, ScrollView, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native";
import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// Reuse the translation helper
const translateText = async (text, targetLanguage = "mr") => {
  if (!text || text.trim().length === 0) return "";
  const API_KEY = "AIzaSyDaU2e1o8NbVbgh9I2p14EDekdP3ZvYyW4";
  try {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: text,
          target: targetLanguage,
          source: "en",
          format: "text",
        }),
      }
    );
    const data = await response.json();
    return data.data?.translations?.[0]?.translatedText || text;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
};

export default function Step4({ data, setData }) {
  const [translatingFields, setTranslatingFields] = useState({});
  const typingTimeoutRef = useRef(null);
  const scrollViewRef = useRef(null);

  // ---------------------------------------------------------
  // LOGIC: DEBOUNCED AUTO-TRANSLATE (English to Marathi)
  // ---------------------------------------------------------
  const handleMarathiInput = (key) => (val) => {
    setData((p) => ({ ...p, [key]: val }));

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    const englishChars = val.match(/[a-zA-Z]/g);

    if (englishChars && englishChars.length > 0) {
      const englishText = val.replace(/[^\x00-\x7F\s]/g, "").trim();
      if (englishText.length > 1) {
        setTranslatingFields((prev) => ({ ...prev, [key]: true }));

        typingTimeoutRef.current = setTimeout(async () => {
          try {
            const translated = await translateText(englishText, "mr");
            setData((p) => ({ ...p, [key]: translated }));
          } finally {
            setTranslatingFields((prev) => ({ ...prev, [key]: false }));
          }
        }, 800);
      }
    } else {
      // Pure Marathi filtering
      const filtered = val.replace(/[^\u0900-\u097F0-9\s.,?!]/g, "");
      setData((p) => ({ ...p, [key]: filtered }));
    }
  };

  const handleNumberInput = (key) => (text) => {
    const numbersOnly = text.replace(/[^0-9]/g, "");
    setData((p) => ({ ...p, [key]: numbersOnly }));
  };

  const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

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

  // Helper for spinner
  const renderIndicator = (key, isLarge = false) => translatingFields[key] && (
    <View style={{ position: 'absolute', right: 10, top: isLarge ? 35 : '55%' }}>
      <ActivityIndicator size="small" color="#f97316" />
    </View>
  );

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
        <SectionHeader title="जोडीदाराविषयी अपेक्षा" />
        
        {/* MARATHI EXPECTATIONS */}
        <View style={[styles.marathiPadWrap, { position: 'relative', minHeight: 180 }]}>
          <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
            (छंद/गुण/स्वभाव/वांछनीय शेरे) <Text style={{ color: "red" }}>*</Text>
          </Text>
          <TextInput
            style={[styles.marathiPad, { height: 90 }, translatingFields.expectations && { opacity: 0.6 }]}
            multiline
            placeholder="येथे अपेक्षा लिहा (English type for Marathi)..."
            placeholderTextColor="#bbb"
            value={data.expectations}
            onChangeText={handleMarathiInput("expectations")}
            onFocus={handleFieldFocus}
          />
          {renderIndicator("expectations", true)}
          <Text style={styles.hint}>उदा: हुशार, अनुरूप, इंजिनीअर, डॉक्टर इ.</Text>
        </View>

        <SectionHeader title="Father's / Parents Details" />
        <View style={styles.row3}>
          <View style={{ flex: 0.6, marginRight: 6, position: 'relative' }}>
            <Field 
              label="Title" 
              required 
              value={data.fatherTitle} 
              onChangeText={handleMarathiInput("fatherTitle")} 
              placeholder="श्री"
              onFocus={handleFieldFocus}
            />
            {renderIndicator("fatherTitle")}
          </View>
          <View style={{ flex: 1.4, marginHorizontal: 3, position: 'relative' }}>
            <Field 
              label="वडिलांचे / पालकांचे नाव" 
              required 
              value={data.fatherName} 
              onChangeText={handleMarathiInput("fatherName")} 
              placeholder="नाव"
              onFocus={handleFieldFocus}
            />
            {renderIndicator("fatherName")}
          </View>
          <View style={{ flex: 0.8, marginLeft: 6, position: 'relative' }}>
            <Field 
              label="पत्ता" 
              required 
              value={data.fatherAddress} 
              onChangeText={handleMarathiInput("fatherAddress")} 
              placeholder="शहर/गाव"
              onFocus={handleFieldFocus}
            />
            {renderIndicator("fatherAddress")}
          </View>
        </View>

        <View style={styles.row3}>
          <View style={{ flex: 1, marginRight: 6 }}>
            <Field 
              label="दूरध्वनी" 
              value={data.fatherPhone} 
              onChangeText={handleNumberInput("fatherPhone")} 
              keyboardType="phone-pad"
              onFocus={handleFieldFocus}
            />
          </View>
          <View style={{ flex: 1, marginHorizontal: 3 }}>
            <Field 
              label="मोबाईल" 
              required 
              value={data.fatherMobile} 
              onChangeText={handleNumberInput("fatherMobile")} 
              keyboardType="phone-pad"
              onFocus={handleFieldFocus}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 6 }}>
            <Field 
              label="Email" 
              value={data.fatherEmail} 
              onChangeText={set("fatherEmail")} 
              keyboardType="email-address"
              onFocus={handleFieldFocus}
            />
          </View>
        </View>

        <SectionHeader title="संपर्कासाठी नाव व पत्ता १" />
        <View style={styles.row3}>
          <View style={{ flex: 0.6, marginRight: 6, position: 'relative' }}>
            <Field 
              label="Title" 
              value={data.contact1Title} 
              onChangeText={handleMarathiInput("contact1Title")} 
              placeholder="श्री"
              onFocus={handleFieldFocus}
            />
            {renderIndicator("contact1Title")}
          </View>
          <View style={{ flex: 1.4, marginHorizontal: 3, position: 'relative' }}>
            <Field 
              label="संपर्काचे नाव" 
              value={data.contact1Name} 
              onChangeText={handleMarathiInput("contact1Name")} 
              placeholder="नाव"
              onFocus={handleFieldFocus}
            />
            {renderIndicator("contact1Name")}
          </View>
          <View style={{ flex: 0.8, marginLeft: 6, position: 'relative' }}>
            <Field 
              label="पत्ता" 
              value={data.contact1Address} 
              onChangeText={handleMarathiInput("contact1Address")} 
              placeholder="पत्ता"
              onFocus={handleFieldFocus}
            />
            {renderIndicator("contact1Address")}
          </View>
        </View>

        <View style={styles.row2}>
          <View style={{ flex: 1, marginRight: 8 }}>
            <Field 
              label="दूरध्वनी" 
              value={data.contact1Phone} 
              onChangeText={handleNumberInput("contact1Phone")} 
              keyboardType="phone-pad"
              onFocus={handleFieldFocus}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 8 }}>
            <Field 
              label="मोबाईल" 
              value={data.contact1Mobile} 
              onChangeText={handleNumberInput("contact1Mobile")} 
              keyboardType="phone-pad"
              onFocus={handleFieldFocus}
            />
          </View>
        </View>

        <SectionHeader title="संपर्कासाठी नाव व पत्ता २" />
        <View style={styles.row3}>
          <View style={{ flex: 0.6, marginRight: 6, position: 'relative' }}>
            <Field 
              label="Title" 
              value={data.contact2Title} 
              onChangeText={handleMarathiInput("contact2Title")} 
              placeholder="श्री"
              onFocus={handleFieldFocus}
            />
            {renderIndicator("contact2Title")}
          </View>
          <View style={{ flex: 1.4, marginHorizontal: 3, position: 'relative' }}>
            <Field 
              label="संपर्काचे नाव" 
              value={data.contact2Name} 
              onChangeText={handleMarathiInput("contact2Name")} 
              placeholder="नाव"
              onFocus={handleFieldFocus}
            />
            {renderIndicator("contact2Name")}
          </View>
          <View style={{ flex: 0.8, marginLeft: 6, position: 'relative' }}>
            <Field 
              label="पत्ता" 
              value={data.contact2Address} 
              onChangeText={handleMarathiInput("contact2Address")} 
              placeholder="पत्ता"
              onFocus={handleFieldFocus}
            />
            {renderIndicator("contact2Address")}
          </View>
        </View>

        <View style={styles.row2}>
          <View style={{ flex: 1, marginRight: 8 }}>
            <Field 
              label="दूरध्वनी" 
              value={data.contact2Phone} 
              onChangeText={handleNumberInput("contact2Phone")} 
              keyboardType="phone-pad"
              onFocus={handleFieldFocus}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 8 }}>
            <Field 
              label="मोबाईल" 
              value={data.contact2Mobile} 
              onChangeText={handleNumberInput("contact2Mobile")} 
              keyboardType="phone-pad"
              onFocus={handleFieldFocus}
            />
          </View>
        </View>

        <View style={[styles.marathiPadWrap, { position: 'relative', minHeight: 180 }]}>
          <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>Marathi Type Pad</Text>
          <TextInput 
            style={[styles.marathiPad, translatingFields.extraMarathiNotes && { opacity: 0.6 }]} 
            multiline 
            placeholder="येथे मराठीत टाइप करा..." 
            placeholderTextColor="#bbb"
            value={data.extraMarathiNotes || ""}
            onChangeText={handleMarathiInput("extraMarathiNotes")}
            onFocus={handleFieldFocus}
          />
          {renderIndicator("extraMarathiNotes", true)}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}