// // // // // import React from "react";
// // // // // import { View, Text, ScrollView, TextInput } from "react-native";
// // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // export default function Step2({ data, setData }) {
// // // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));
  
// // // // //   return (
// // // // //     <ScrollView showsVerticalScrollIndicator={false}>
// // // // //       <SectionHeader title="Personal Information" />

// // // // //       <View style={styles.row3}>
// // // // //         <View style={{ flex: 1.2, marginRight: 6 }}>
// // // // //           <Field label="जन्म तारीख" required value={data.dob} onChangeText={set("dob")} placeholder="DD/MM/YYYY" />
// // // // //         </View>
// // // // //         <View style={{ flex: 0.8, marginHorizontal: 3 }}>
// // // // //           <Field label="तास" value={data.birthHour} onChangeText={set("birthHour")} placeholder="--" keyboardType="numeric" />
// // // // //         </View>
// // // // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // // // //           <Field label="मिनिटे" value={data.birthMin} onChangeText={set("birthMin")} placeholder="00" keyboardType="numeric" />
// // // // //         </View>
// // // // //       </View>

// // // // //       <View style={styles.row3}>
// // // // //         <View style={{ flex: 1.2, marginRight: 6 }}>
// // // // //           <Field label="जन्मस्थळ" required value={data.birthPlace} onChangeText={set("birthPlace")} placeholder="जन्मस्थळ" />
// // // // //         </View>
// // // // //         <View style={{ flex: 0.8, marginHorizontal: 3 }}>
// // // // //           <Field label="ऊंची फुट" required value={data.heightFt} onChangeText={set("heightFt")} placeholder="00" keyboardType="numeric" />
// // // // //         </View>
// // // // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // // // //           <Field label="इंच" value={data.heightIn} onChangeText={set("heightIn")} placeholder="00" keyboardType="numeric" />
// // // // //         </View>
// // // // //       </View>

// // // // //       <View style={styles.row2}>
// // // // //         <View style={{ flex: 1, marginRight: 8 }}>
// // // // //           <Field label="वर्ण" required value={data.complexion} onChangeText={set("complexion")} placeholder="गोरा" />
// // // // //         </View>
// // // // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // // // //           <Field label="रक्तगट" required value={data.bloodGroup} onChangeText={set("bloodGroup")} placeholder="--" />
// // // // //         </View>
// // // // //       </View>

// // // // //       <View style={styles.row2}>
// // // // //         <View style={{ flex: 1, marginRight: 8 }}>
// // // // //           <Field label="मामकुळ" required value={data.mamkul} onChangeText={set("mamkul")} placeholder="मामकुळ" />
// // // // //         </View>
// // // // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // // // //           <Field label="गोत्र" required value={data.gotra} onChangeText={set("gotra")} placeholder="--" />
// // // // //         </View>
// // // // //       </View>

// // // // //       <View style={styles.row3}>
// // // // //         <View style={{ flex: 1, marginRight: 6 }}>
// // // // //           <Field label="मूळगाव" required value={data.village} onChangeText={set("village")} placeholder="मूळगाव" />
// // // // //         </View>
// // // // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // //           <Field label="तालुका" required value={data.taluka} onChangeText={set("taluka")} placeholder="तालुका" />
// // // // //         </View>
// // // // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // // // //           <Field label="जिल्हा" required value={data.district} onChangeText={set("district")} placeholder="जिल्हा" />
// // // // //         </View>
// // // // //       </View>

// // // // //       <Text style={styles.subSectionLabel}>भाऊ (संख्या) <Text style={{ color: "red" }}>*</Text></Text>
// // // // //       <View style={styles.row2}>
// // // // //         <View style={{ flex: 1, marginRight: 8 }}>
// // // // //           <Field label="विवाहित" value={data.brotherMarried} onChangeText={set("brotherMarried")} keyboardType="numeric" />
// // // // //         </View>
// // // // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // // // //           <Field label="अविवाहित" value={data.brotherUnmarried} onChangeText={set("brotherUnmarried")} keyboardType="numeric" />
// // // // //         </View>
// // // // //       </View>

// // // // //       <Text style={styles.subSectionLabel}>बहिण (संख्या) <Text style={{ color: "red" }}>*</Text></Text>
// // // // //       <View style={styles.row2}>
// // // // //         <View style={{ flex: 1, marginRight: 8 }}>
// // // // //           <Field label="विवाहित" value={data.sisterMarried} onChangeText={set("sisterMarried")} keyboardType="numeric" />
// // // // //         </View>
// // // // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // // // //           <Field label="अविवाहित" value={data.sisterUnmarried} onChangeText={set("sisterUnmarried")} keyboardType="numeric" />
// // // // //         </View>
// // // // //       </View>

// // // // //       <Field label="वैयक्तिक मोबाइल नंबर" value={data.mobile} onChangeText={set("mobile")} keyboardType="phone-pad" placeholder="+91" />

// // // // //       <View style={styles.marathiPadWrap}>
// // // // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>Marathi Type Pad</Text>
// // // // //         <TextInput style={styles.marathiPad} multiline placeholder="Type in Marathi..." placeholderTextColor="#bbb" />
// // // // //       </View>
// // // // //     </ScrollView>
// // // // //   );
// // // // // }




// // // // // // z.ai
// // // // import React from "react";
// // // // import { View, Text, ScrollView, TextInput } from "react-native";
// // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // export default function Step2({ data, setData }) {

// // // //   // ---------------------------------------------------------
// // // //   // LOGIC 1: ENGLISH ONLY
// // // //   // Removes any character that is NOT A-Z, a-z, 0-9, or space
// // // //   // ---------------------------------------------------------
// // // //   const handleEnglishInput = (key) => (text) => {
// // // //     const englishOnly = text.replace(/[^a-zA-Z0-9\s]/g, "");
// // // //     setData((p) => ({ ...p, [key]: englishOnly }));
// // // //   };

// // // //   // ---------------------------------------------------------
// // // //   // LOGIC 2: MARATHI ONLY
// // // //   // Removes any character that is NOT in the Marathi Unicode range
// // // //   // ---------------------------------------------------------
// // // //   const handleMarathiInput = (key) => (text) => {
// // // //     // \u0900-\u097F covers Devanagari script (Marathi)
// // // //     const marathiOnly = text.replace(/[^\u0900-\u097F\s]/g, "");
// // // //     setData((p) => ({ ...p, [key]: marathiOnly }));
// // // //   };

// // // //   // Helper for Numbers Only
// // // //   const handleNumberInput = (key) => (text) => {
// // // //     const numbersOnly = text.replace(/[^0-9]/g, "");
// // // //     setData((p) => ({ ...p, [key]: numbersOnly }));
// // // //   };

// // // //   // Generic setter for mixed/standard fields
// // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// // // //   return (
// // // //     <ScrollView showsVerticalScrollIndicator={false}>
// // // //       <SectionHeader title="Personal Information" />

// // // //       {/* DATE ROW */}
// // // //       <View style={styles.row3}>
// // // //         <View style={{ flex: 1.2, marginRight: 6 }}>
// // // //           <Field
// // // //             label="जन्म तारीख"
// // // //             required
// // // //             value={data.dob}
// // // //             onChangeText={set("dob")}
// // // //             placeholder="DD/MM/YYYY"
// // // //           />
// // // //         </View>
// // // //         <View style={{ flex: 0.8, marginHorizontal: 3 }}>
// // // //           <Field
// // // //             label="तास"
// // // //             value={data.birthHour}
// // // //             onChangeText={handleNumberInput("birthHour")}
// // // //             placeholder="--"
// // // //             keyboardType="numeric"
// // // //           />
// // // //         </View>
// // // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // // //           <Field
// // // //             label="मिनिटे"
// // // //             value={data.birthMin}
// // // //             onChangeText={handleNumberInput("birthMin")}
// // // //             placeholder="00"
// // // //             keyboardType="numeric"
// // // //           />
// // // //         </View>
// // // //       </View>

// // // //       {/* ENGLISH ONLY SECTION: Birth Place */}
// // // //       <View style={styles.row3}>
// // // //         <View style={{ flex: 1.2, marginRight: 6 }}>
// // // //           <Field
// // // //             label="जन्मस्थळ"
// // // //             required
// // // //             value={data.birthPlace}
// // // //             onChangeText={handleEnglishInput("birthPlace")}
// // // //             placeholder="English Text Only"
// // // //           />
// // // //         </View>
// // // //         <View style={{ flex: 0.8, marginHorizontal: 3 }}>
// // // //           <Field
// // // //             label="ऊंची फुट"
// // // //             required
// // // //             value={data.heightFt}
// // // //             onChangeText={handleNumberInput("heightFt")}
// // // //             placeholder="00"
// // // //             keyboardType="numeric"
// // // //           />
// // // //         </View>
// // // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // // //           <Field
// // // //             label="इंच"
// // // //             value={data.heightIn}
// // // //             onChangeText={handleNumberInput("heightIn")}
// // // //             placeholder="00"
// // // //             keyboardType="numeric"
// // // //           />
// // // //         </View>
// // // //       </View>

// // // //       {/* ENGLISH ONLY SECTION: Complexion, Blood Group */}
// // // //       <View style={styles.row2}>
// // // //         <View style={{ flex: 1, marginRight: 8 }}>
// // // //           <Field
// // // //             label="वर्ण"
// // // //             required
// // // //             value={data.complexion}
// // // //             onChangeText={handleEnglishInput("complexion")}
// // // //             placeholder="English Text Only"
// // // //           />
// // // //         </View>
// // // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // // //           <Field
// // // //             label="रक्तगट"
// // // //             required
// // // //             value={data.bloodGroup}
// // // //             onChangeText={handleEnglishInput("bloodGroup")}
// // // //             placeholder="English Text Only"
// // // //           />
// // // //         </View>
// // // //       </View>

// // // //       {/* ENGLISH ONLY SECTION: Mamkul, Gotra */}
// // // //       <View style={styles.row2}>
// // // //         <View style={{ flex: 1, marginRight: 8 }}>
// // // //           <Field
// // // //             label="मामकुळ"
// // // //             required
// // // //             value={data.mamkul}
// // // //             onChangeText={handleEnglishInput("mamkul")}
// // // //             placeholder="English Text Only"
// // // //           />
// // // //         </View>
// // // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // // //           <Field
// // // //             label="गोत्र"
// // // //             required
// // // //             value={data.gotra}
// // // //             onChangeText={handleEnglishInput("gotra")}
// // // //             placeholder="English Text Only"
// // // //           />
// // // //         </View>
// // // //       </View>

// // // //       {/* ENGLISH ONLY SECTION: Address Details */}
// // // //       <View style={styles.row3}>
// // // //         <View style={{ flex: 1, marginRight: 6 }}>
// // // //           <Field
// // // //             label="मूळगाव"
// // // //             required
// // // //             value={data.village}
// // // //             onChangeText={handleEnglishInput("village")}
// // // //             placeholder="English Text Only"
// // // //           />
// // // //         </View>
// // // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // //           <Field
// // // //             label="तालुका"
// // // //             required
// // // //             value={data.taluka}
// // // //             onChangeText={handleEnglishInput("taluka")}
// // // //             placeholder="English Text Only"
// // // //           />
// // // //         </View>
// // // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // // //           <Field
// // // //             label="जिल्हा"
// // // //             required
// // // //             value={data.district}
// // // //             onChangeText={handleEnglishInput("district")}
// // // //             placeholder="English Text Only"
// // // //           />
// // // //         </View>
// // // //       </View>

// // // //       {/* NUMBER ONLY SECTION: Brothers */}
// // // //       <Text style={styles.subSectionLabel}>भाऊ (संख्या) <Text style={{ color: "red" }}>*</Text></Text>
// // // //       <View style={styles.row2}>
// // // //         <View style={{ flex: 1, marginRight: 8 }}>
// // // //           <Field
// // // //             label="विवाहित"
// // // //             value={data.brotherMarried}
// // // //             onChangeText={handleNumberInput("brotherMarried")}
// // // //             keyboardType="numeric"
// // // //           />
// // // //         </View>
// // // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // // //           <Field
// // // //             label="अविवाहित"
// // // //             value={data.brotherUnmarried}
// // // //             onChangeText={handleNumberInput("brotherUnmarried")}
// // // //             keyboardType="numeric"
// // // //           />
// // // //         </View>
// // // //       </View>

// // // //       {/* NUMBER ONLY SECTION: Sisters */}
// // // //       <Text style={styles.subSectionLabel}>बहिण (संख्या) <Text style={{ color: "red" }}>*</Text></Text>
// // // //       <View style={styles.row2}>
// // // //         <View style={{ flex: 1, marginRight: 8 }}>
// // // //           <Field
// // // //             label="विवाहित"
// // // //             value={data.sisterMarried}
// // // //             onChangeText={handleNumberInput("sisterMarried")}
// // // //             keyboardType="numeric"
// // // //           />
// // // //         </View>
// // // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // // //           <Field
// // // //             label="अविवाहित"
// // // //             value={data.sisterUnmarried}
// // // //             onChangeText={handleNumberInput("sisterUnmarried")}
// // // //             keyboardType="numeric"
// // // //           />
// // // //         </View>
// // // //       </View>

// // // //       {/* NUMBER ONLY SECTION: Mobile */}
// // // //       <Field
// // // //         label="वैयक्तिक मोबाइल नंबर"
// // // //         value={data.mobile}
// // // //         onChangeText={handleNumberInput("mobile")}
// // // //         keyboardType="phone-pad"
// // // //         placeholder="+91"
// // // //       />

// // // //       {/* MARATHI ONLY SECTION: Notes Pad */}
// // // //       <View style={styles.marathiPadWrap}>
// // // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // //           Marathi Type Pad (Marathi Only)
// // // //         </Text>
// // // //         <TextInput
// // // //           style={styles.marathiPad}
// // // //           multiline
// // // //           placeholder="Type in Marathi..."
// // // //           placeholderTextColor="#bbb"
// // // //           value={data.marathiNotes || ""}
// // // //           onChangeText={handleMarathiInput("marathiNotes")}
// // // //         />
// // // //       </View>
// // // //     </ScrollView>
// // // //   );
// // // // }






// // // import React from "react";
// // // import { View, Text, ScrollView, TextInput } from "react-native";
// // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // export default function Step2({ data, setData }) {

// // //   // ---------------------------------------------------------
// // //   // LOGIC: MARATHI ONLY (Strict)
// // //   // Blocks English characters (a-z, A-Z).
// // //   // Allows Marathi (Devanagari), Numbers, Space, and Punctuation.
// // //   // ---------------------------------------------------------
// // //   const handleMarathiInput = (key) => (text) => {
// // //     // Regex explained:
// // //     // [^...] means "not these characters"
// // //     // \u0900-\u097F is the Marathi (Devanagari) Unicode block
// // //     // 0-9 allows numbers
// // //     // \s allows spaces
// // //     // .,?! allows basic punctuation
// // //     const marathiOnly = text.replace(/[^\u0900-\u097F0-9\s.,?!]/g, "");
// // //     setData((p) => ({ ...p, [key]: marathiOnly }));
// // //   };

// // //   // Helper for Numbers Only
// // //   const handleNumberInput = (key) => (text) => {
// // //     const numbersOnly = text.replace(/[^0-9]/g, "");
// // //     setData((p) => ({ ...p, [key]: numbersOnly }));
// // //   };

// // //   // Generic setter (used for dates or un-validated fields)
// // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// // //   return (
// // //     <ScrollView showsVerticalScrollIndicator={false}>
// // //       <SectionHeader title="Personal Information" />

// // //       {/* DATE ROW */}
// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 1.2, marginRight: 6 }}>
// // //           <Field
// // //             label="जन्म तारीख"
// // //             required
// // //             value={data.dob}
// // //             onChangeText={set("dob")}
// // //             placeholder="DD/MM/YYYY"
// // //           />
// // //         </View>
// // //         <View style={{ flex: 0.8, marginHorizontal: 3 }}>
// // //           <Field
// // //             label="तास"
// // //             value={data.birthHour}
// // //             onChangeText={handleNumberInput("birthHour")}
// // //             placeholder="--"
// // //             keyboardType="numeric"
// // //           />
// // //         </View>
// // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // //           <Field
// // //             label="मिनिटे"
// // //             value={data.birthMin}
// // //             onChangeText={handleNumberInput("birthMin")}
// // //             placeholder="00"
// // //             keyboardType="numeric"
// // //           />
// // //         </View>
// // //       </View>

// // //       {/* MARATHI ONLY FIELDS */}
// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 1.2, marginRight: 6 }}>
// // //           <Field
// // //             label="जन्मस्थळ"
// // //             required
// // //             value={data.birthPlace}
// // //             onChangeText={handleMarathiInput("birthPlace")}
// // //             placeholder="फक्त मराठी मजकूर"
// // //           />
// // //         </View>
// // //         <View style={{ flex: 0.8, marginHorizontal: 3 }}>
// // //           <Field
// // //             label="ऊंची फुट"
// // //             required
// // //             value={data.heightFt}
// // //             onChangeText={handleNumberInput("heightFt")}
// // //             placeholder="00"
// // //             keyboardType="numeric"
// // //           />
// // //         </View>
// // //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// // //           <Field
// // //             label="इंच"
// // //             value={data.heightIn}
// // //             onChangeText={handleNumberInput("heightIn")}
// // //             placeholder="00"
// // //             keyboardType="numeric"
// // //           />
// // //         </View>
// // //       </View>

// // //       <View style={styles.row2}>
// // //         <View style={{ flex: 1, marginRight: 8 }}>
// // //           <Field
// // //             label="वर्ण"
// // //             required
// // //             value={data.complexion}
// // //             onChangeText={handleMarathiInput("complexion")}
// // //             placeholder="फक्त मराठी मजकूर"
// // //           />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // //           <Field
// // //             label="रक्तगट"
// // //             required
// // //             value={data.bloodGroup}
// // //             onChangeText={handleMarathiInput("bloodGroup")}
// // //             placeholder="उदा. ए पॉझिटिव्ह"
// // //           />
// // //         </View>
// // //       </View>

// // //       <View style={styles.row2}>
// // //         <View style={{ flex: 1, marginRight: 8 }}>
// // //           <Field
// // //             label="मामकुल"
// // //             required
// // //             value={data.mamkul}
// // //             onChangeText={handleMarathiInput("mamkul")}
// // //             placeholder="फक्त मराठी मजकूर"
// // //           />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // //           <Field
// // //             label="गोत्र"
// // //             required
// // //             value={data.gotra}
// // //             onChangeText={handleMarathiInput("gotra")}
// // //             placeholder="फक्त मराठी मजकूर"
// // //           />
// // //         </View>
// // //       </View>

// // //       <View style={styles.row3}>
// // //         <View style={{ flex: 1, marginRight: 6 }}>
// // //           <Field
// // //             label="मूळगाव"
// // //             required
// // //             value={data.village}
// // //             onChangeText={handleMarathiInput("village")}
// // //             placeholder="गाव"
// // //           />
// // //         </View>
// // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // //           <Field
// // //             label="तालुका"
// // //             required
// // //             value={data.taluka}
// // //             onChangeText={handleMarathiInput("taluka")}
// // //             placeholder="तालुका"
// // //           />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // //           <Field
// // //             label="जिल्हा"
// // //             required
// // //             value={data.district}
// // //             onChangeText={handleMarathiInput("district")}
// // //             placeholder="जिल्हा"
// // //           />
// // //         </View>
// // //       </View>

// // //       {/* NUMBER ONLY SECTION: Brothers */}
// // //       <Text style={styles.subSectionLabel}>भाऊ (संख्या) <Text style={{ color: "red" }}>*</Text></Text>
// // //       <View style={styles.row2}>
// // //         <View style={{ flex: 1, marginRight: 8 }}>
// // //           <Field
// // //             label="विवाहित"
// // //             value={data.brotherMarried}
// // //             onChangeText={handleNumberInput("brotherMarried")}
// // //             keyboardType="numeric"
// // //           />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // //           <Field
// // //             label="अविवाहित"
// // //             value={data.brotherUnmarried}
// // //             onChangeText={handleNumberInput("brotherUnmarried")}
// // //             keyboardType="numeric"
// // //           />
// // //         </View>
// // //       </View>

// // //       {/* NUMBER ONLY SECTION: Sisters */}
// // //       <Text style={styles.subSectionLabel}>बहिण (संख्या) <Text style={{ color: "red" }}>*</Text></Text>
// // //       <View style={styles.row2}>
// // //         <View style={{ flex: 1, marginRight: 8 }}>
// // //           <Field
// // //             label="विवाहित"
// // //             value={data.sisterMarried}
// // //             onChangeText={handleNumberInput("sisterMarried")}
// // //             keyboardType="numeric"
// // //           />
// // //         </View>
// // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // //           <Field
// // //             label="अविवाहित"
// // //             value={data.sisterUnmarried}
// // //             onChangeText={handleNumberInput("sisterUnmarried")}
// // //             keyboardType="numeric"
// // //           />
// // //         </View>
// // //       </View>

// // //       {/* NUMBER ONLY SECTION: Mobile */}
// // //       <Field
// // //         label="वैयक्तिक मोबाइल नंबर"
// // //         value={data.mobile}
// // //         onChangeText={handleNumberInput("mobile")}
// // //         keyboardType="phone-pad"
// // //         placeholder="+91"
// // //       />

// // //       {/* MARATHI ONLY SECTION: Notes Pad */}
// // //       <View style={styles.marathiPadWrap}>
// // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // //           इतर माहिती (फक्त मराठी)
// // //         </Text>
// // //         <TextInput
// // //           style={styles.marathiPad}
// // //           multiline
// // //           placeholder="येथे मराठीत टाइप करा..."
// // //           placeholderTextColor="#bbb"
// // //           value={data.marathiNotes || ""}
// // //           onChangeText={handleMarathiInput("marathiNotes")}
// // //         />
// // //       </View>
// // //     </ScrollView>
// // //   );
// // // }











// // import React, { useState } from "react";
// // import { View, Text, ScrollView, TextInput, TouchableOpacity, Platform } from "react-native";
// // import DateTimePicker from "@react-native-community/datetimepicker";
// // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // export default function Step2({ data, setData }) {
// //   const [showPicker, setShowPicker] = useState(false);

// //   // ---------------------------------------------------------
// //   // LOGIC: MARATHI ONLY (Strict)
// //   // ---------------------------------------------------------
// //   const handleMarathiInput = (key) => (text) => {
// //     const marathiOnly = text.replace(/[^\u0900-\u097F0-9\s.,?!]/g, "");
// //     setData((p) => ({ ...p, [key]: marathiOnly }));
// //   };

// //   // Helper for Numbers Only
// //   const handleNumberInput = (key) => (text) => {
// //     const numbersOnly = text.replace(/[^0-9]/g, "");
// //     setData((p) => ({ ...p, [key]: numbersOnly }));
// //   };

// //   // ---------------------------------------------------------
// //   // CALENDAR LOGIC
// //   // ---------------------------------------------------------
// //   const onDateChange = (event, selectedDate) => {
// //     setShowPicker(Platform.OS === "ios"); // Keep open on iOS, close on Android
// //     if (selectedDate) {
// //       const day = String(selectedDate.getDate()).padStart(2, "0");
// //       const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
// //       const year = selectedDate.getFullYear();
// //       const formattedDate = `${day}/${month}/${year}`;
// //       setData((p) => ({ ...p, dob: formattedDate }));
// //     }
// //   };

// //   return (
// //     <ScrollView showsVerticalScrollIndicator={false}>
// //       <SectionHeader title="Personal Information" />

// //       {/* DATE ROW WITH CALENDAR */}
// //       <View style={styles.row3}>
// //         <View style={{ flex: 1.2, marginRight: 6 }}>
// //           <TouchableOpacity onPress={() => setShowPicker(true)}>
// //             <View pointerEvents="none">
// //               <Field
// //                 label="जन्म तारीख"
// //                 required
// //                 value={data.dob}
// //                 placeholder="DD/MM/YYYY"
// //               />
// //             </View>
// //           </TouchableOpacity>
// //         </View>

// //         {showPicker && (
// //           <DateTimePicker
// //             value={new Date()}
// //             mode="date"
// //             display="default"
// //             onChange={onDateChange}
// //           />
// //         )}

// //         <View style={{ flex: 0.8, marginHorizontal: 3 }}>
// //           <Field
// //             label="तास"
// //             value={data.birthHour}
// //             onChangeText={handleNumberInput("birthHour")}
// //             placeholder="--"
// //             keyboardType="numeric"
// //           />
// //         </View>
// //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// //           <Field
// //             label="मिनिटे"
// //             value={data.birthMin}
// //             onChangeText={handleNumberInput("birthMin")}
// //             placeholder="00"
// //             keyboardType="numeric"
// //           />
// //         </View>
// //       </View>

// //       {/* MARATHI ONLY FIELDS */}
// //       <View style={styles.row3}>
// //         <View style={{ flex: 1.2, marginRight: 6 }}>
// //           <Field
// //             label="जन्मस्थळ"
// //             required
// //             value={data.birthPlace}
// //             onChangeText={handleMarathiInput("birthPlace")}
// //             placeholder="जन्मस्थळ"
// //           />
// //         </View>
// //         <View style={{ flex: 0.8, marginHorizontal: 3 }}>
// //           <Field
// //             label="ऊंची फुट"
// //             required
// //             value={data.heightFt}
// //             onChangeText={handleNumberInput("heightFt")}
// //             placeholder="00"
// //             keyboardType="numeric"
// //           />
// //         </View>
// //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// //           <Field
// //             label="इंच"
// //             value={data.heightIn}
// //             onChangeText={handleNumberInput("heightIn")}
// //             placeholder="00"
// //             keyboardType="numeric"
// //           />
// //         </View>
// //       </View>

// //       <View style={styles.row2}>
// //         <View style={{ flex: 1, marginRight: 8 }}>
// //           <Field
// //             label="वर्ण"
// //             required
// //             value={data.complexion}
// //             onChangeText={handleMarathiInput("complexion")}
// //             placeholder="सावळा/गोरा"
// //           />
// //         </View>
// //         <View style={{ flex: 1, marginLeft: 8 }}>
// //           <Field
// //             label="रक्तगट"
// //             required
// //             value={data.bloodGroup}
// //             onChangeText={handleMarathiInput("bloodGroup")}
// //             placeholder="रक्तगट"
// //           />
// //         </View>
// //       </View>

// //       <View style={styles.row2}>
// //         <View style={{ flex: 1, marginRight: 8 }}>
// //           <Field
// //             label="मामकुल"
// //             required
// //             value={data.mamkul}
// //             onChangeText={handleMarathiInput("mamkul")}
// //             placeholder="आडनाव"
// //           />
// //         </View>
// //         <View style={{ flex: 1, marginLeft: 8 }}>
// //           <Field
// //             label="गोत्र"
// //             required
// //             value={data.gotra}
// //             onChangeText={handleMarathiInput("gotra")}
// //             placeholder="गोत्र"
// //           />
// //         </View>
// //       </View>

// //       <View style={styles.row3}>
// //         <View style={{ flex: 1, marginRight: 6 }}>
// //           <Field
// //             label="मूळगाव"
// //             required
// //             value={data.village}
// //             onChangeText={handleMarathiInput("village")}
// //             placeholder="गाव"
// //           />
// //         </View>
// //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// //           <Field
// //             label="तालुका"
// //             required
// //             value={data.taluka}
// //             onChangeText={handleMarathiInput("taluka")}
// //             placeholder="तालुका"
// //           />
// //         </View>
// //         <View style={{ flex: 1, marginLeft: 6 }}>
// //           <Field
// //             label="जिल्हा"
// //             required
// //             value={data.district}
// //             onChangeText={handleMarathiInput("district")}
// //             placeholder="जिल्हा"
// //           />
// //         </View>
// //       </View>

// //       {/* NUMBER ONLY SECTIONS */}
// //       <Text style={styles.subSectionLabel}>भाऊ (संख्या) <Text style={{ color: "red" }}>*</Text></Text>
// //       <View style={styles.row2}>
// //         <View style={{ flex: 1, marginRight: 8 }}>
// //           <Field
// //             label="विवाहित"
// //             value={data.brotherMarried}
// //             onChangeText={handleNumberInput("brotherMarried")}
// //             keyboardType="numeric"
// //           />
// //         </View>
// //         <View style={{ flex: 1, marginLeft: 8 }}>
// //           <Field
// //             label="अविवाहित"
// //             value={data.brotherUnmarried}
// //             onChangeText={handleNumberInput("brotherUnmarried")}
// //             keyboardType="numeric"
// //           />
// //         </View>
// //       </View>

// //       <Text style={styles.subSectionLabel}>बहिण (संख्या) <Text style={{ color: "red" }}>*</Text></Text>
// //       <View style={styles.row2}>
// //         <View style={{ flex: 1, marginRight: 8 }}>
// //           <Field
// //             label="विवाहित"
// //             value={data.sisterMarried}
// //             onChangeText={handleNumberInput("sisterMarried")}
// //             keyboardType="numeric"
// //           />
// //         </View>
// //         <View style={{ flex: 1, marginLeft: 8 }}>
// //           <Field
// //             label="अविवाहित"
// //             value={data.sisterUnmarried}
// //             onChangeText={handleNumberInput("sisterUnmarried")}
// //             keyboardType="numeric"
// //           />
// //         </View>
// //       </View>

// //       <Field
// //         label="वैयक्तिक मोबाइल नंबर"
// //         value={data.mobile}
// //         onChangeText={handleNumberInput("mobile")}
// //         keyboardType="phone-pad"
// //         placeholder="+91"
// //       />

// //       <View style={styles.marathiPadWrap}>
// //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// //           इतर माहिती (फक्त मराठी)
// //         </Text>
// //         <TextInput
// //           style={styles.marathiPad}
// //           multiline
// //           placeholder="येथे मराठीत टाइप करा..."
// //           placeholderTextColor="#bbb"
// //           value={data.marathiNotes || ""}
// //           onChangeText={handleMarathiInput("marathiNotes")}
// //         />
// //       </View>
// //     </ScrollView>
// //   );
// // }












// // // api
// // import React, { useState, useRef } from "react";
// // import { 
// //   View, Text, ScrollView, TextInput, TouchableOpacity, 
// //   Platform, ActivityIndicator 
// // } from "react-native";
// // import DateTimePicker from "@react-native-community/datetimepicker";
// // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // Reuse the translation helper (Ensure this matches your global helper or keep it here)
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

// // export default function Step2({ data, setData }) {
// //   const [showPicker, setShowPicker] = useState(false);
// //   const [translatingFields, setTranslatingFields] = useState({});
// //   const typingTimeoutRef = useRef(null);

// //   // ---------------------------------------------------------
// //   // LOGIC: DEBOUNCED MARATHI TRANSLATION
// //   // ---------------------------------------------------------
// //   const handleMarathiInput = (key) => (val) => {
// //     // 1. Update UI immediately
// //     setData((p) => ({ ...p, [key]: val }));

// //     // 2. Clear timer
// //     if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

// //     // 3. Detect English for Auto-translate
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

// //   const onDateChange = (event, selectedDate) => {
// //     setShowPicker(Platform.OS === "ios");
// //     if (selectedDate) {
// //       const day = String(selectedDate.getDate()).padStart(2, "0");
// //       const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
// //       const year = selectedDate.getFullYear();
// //       setData((p) => ({ ...p, dob: `${day}/${month}/${year}` }));
// //     }
// //   };

// //   // Helper to show indicator
// //   const renderIndicator = (key) => translatingFields[key] && (
// //     <View style={{ position: 'absolute', right: 10, top: '55%' }}>
// //       <ActivityIndicator size="small" color="#f97316" />
// //     </View>
// //   );

// //   return (
// //     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
// //       <SectionHeader title="Personal Information" />

// //       {/* BIRTH DATE & TIME */}
// //       <View style={styles.row3}>
// //         <View style={{ flex: 1.2, marginRight: 6 }}>
// //           <TouchableOpacity onPress={() => setShowPicker(true)}>
// //             <View pointerEvents="none">
// //               <Field label="जन्म तारीख" required value={data.dob} placeholder="DD/MM/YYYY" />
// //             </View>
// //           </TouchableOpacity>
// //         </View>

// //         {showPicker && (
// //           <DateTimePicker value={new Date()} mode="date" display="default" onChange={onDateChange} />
// //         )}

// //         <View style={{ flex: 0.8, marginHorizontal: 3 }}>
// //           <Field label="तास" value={data.birthHour} onChangeText={handleNumberInput("birthHour")} placeholder="--" keyboardType="numeric" />
// //         </View>
// //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// //           <Field label="मिनिटे" value={data.birthMin} onChangeText={handleNumberInput("birthMin")} placeholder="00" keyboardType="numeric" />
// //         </View>
// //       </View>

// //       {/* BIRTH PLACE & HEIGHT */}
// //       <View style={styles.row3}>
// //         <View style={{ flex: 1.2, marginRight: 6, position: 'relative' }}>
// //           <Field
// //             label="जन्मस्थळ"
// //             required
// //             value={data.birthPlace}
// //             onChangeText={handleMarathiInput("birthPlace")}
// //             placeholder="मराठी"
// //             inputStyle={translatingFields.birthPlace && { opacity: 0.6 }}
// //           />
// //           {renderIndicator("birthPlace")}
// //         </View>
// //         <View style={{ flex: 0.8, marginHorizontal: 3 }}>
// //           <Field label="ऊंची फुट" required value={data.heightFt} onChangeText={handleNumberInput("heightFt")} placeholder="00" keyboardType="numeric" />
// //         </View>
// //         <View style={{ flex: 0.8, marginLeft: 6 }}>
// //           <Field label="इंच" value={data.heightIn} onChangeText={handleNumberInput("heightIn")} placeholder="00" keyboardType="numeric" />
// //         </View>
// //       </View>

// //       {/* COMPLEXION & BLOOD GROUP */}
// //       <View style={styles.row2}>
// //         <View style={{ flex: 1, marginRight: 8, position: 'relative' }}>
// //           <Field
// //             label="वर्ण"
// //             required
// //             value={data.complexion}
// //             onChangeText={handleMarathiInput("complexion")}
// //             placeholder="मराठी"
// //             inputStyle={translatingFields.complexion && { opacity: 0.6 }}
// //           />
// //           {renderIndicator("complexion")}
// //         </View>
// //         <View style={{ flex: 1, marginLeft: 8, position: 'relative' }}>
// //           <Field
// //             label="रक्तगट"
// //             required
// //             value={data.bloodGroup}
// //             onChangeText={handleMarathiInput("bloodGroup")}
// //             placeholder="उदा. A+"
// //             inputStyle={translatingFields.bloodGroup && { opacity: 0.6 }}
// //           />
// //           {renderIndicator("bloodGroup")}
// //         </View>
// //       </View>

// //       {/* MAMKUL & GOTRA */}
// //       <View style={styles.row2}>
// //         <View style={{ flex: 1, marginRight: 8, position: 'relative' }}>
// //           <Field
// //             label="मामकुल"
// //             required
// //             value={data.mamkul}
// //             onChangeText={handleMarathiInput("mamkul")}
// //             placeholder="मराठी"
// //             inputStyle={translatingFields.mamkul && { opacity: 0.6 }}
// //           />
// //           {renderIndicator("mamkul")}
// //         </View>
// //         <View style={{ flex: 1, marginLeft: 8, position: 'relative' }}>
// //           <Field
// //             label="गोत्र"
// //             required
// //             value={data.gotra}
// //             onChangeText={handleMarathiInput("gotra")}
// //             placeholder="मराठी"
// //             inputStyle={translatingFields.gotra && { opacity: 0.6 }}
// //           />
// //           {renderIndicator("gotra")}
// //         </View>
// //       </View>

// //       {/* VILLAGE, TALUKA, DISTRICT */}
// //       <View style={styles.row3}>
// //         <View style={{ flex: 1, marginRight: 6, position: 'relative' }}>
// //           <Field label="मूळगाव" required value={data.village} onChangeText={handleMarathiInput("village")} placeholder="मराठी" />
// //           {renderIndicator("village")}
// //         </View>
// //         <View style={{ flex: 1, marginHorizontal: 3, position: 'relative' }}>
// //           <Field label="तालुका" required value={data.taluka} onChangeText={handleMarathiInput("taluka")} placeholder="मराठी" />
// //           {renderIndicator("taluka")}
// //         </View>
// //         <View style={{ flex: 1, marginLeft: 6, position: 'relative' }}>
// //           <Field label="जिल्हा" required value={data.district} onChangeText={handleMarathiInput("district")} placeholder="मराठी" />
// //           {renderIndicator("district")}
// //         </View>
// //       </View>

// //       {/* BROTHERS & SISTERS */}
// //       <Text style={styles.subSectionLabel}>भाऊ (संख्या) <Text style={{ color: "red" }}>*</Text></Text>
// //       <View style={styles.row2}>
// //         <View style={{ flex: 1, marginRight: 8 }}>
// //           <Field label="विवाहित" value={data.brotherMarried} onChangeText={handleNumberInput("brotherMarried")} keyboardType="numeric" />
// //         </View>
// //         <View style={{ flex: 1, marginLeft: 8 }}>
// //           <Field label="अविवाहित" value={data.brotherUnmarried} onChangeText={handleNumberInput("brotherUnmarried")} keyboardType="numeric" />
// //         </View>
// //       </View>

// //       <Text style={styles.subSectionLabel}>बहिण (संख्या) <Text style={{ color: "red" }}>*</Text></Text>
// //       <View style={styles.row2}>
// //         <View style={{ flex: 1, marginRight: 8 }}>
// //           <Field label="विवाहित" value={data.sisterMarried} onChangeText={handleNumberInput("sisterMarried")} keyboardType="numeric" />
// //         </View>
// //         <View style={{ flex: 1, marginLeft: 8 }}>
// //           <Field label="अविवाहित" value={data.sisterUnmarried} onChangeText={handleNumberInput("sisterUnmarried")} keyboardType="numeric" />
// //         </View>
// //       </View>

// //       <Field
// //         label="वैयक्तिक मोबाइल नंबर"
// //         value={data.mobile}
// //         onChangeText={handleNumberInput("mobile")}
// //         keyboardType="phone-pad"
// //         placeholder="+91"
// //       />

// //       {/* MARATHI NOTES */}
// //       <View style={[styles.marathiPadWrap, { position: 'relative' }]}>
// //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// //           इतर माहिती (auto-translate)
// //         </Text>
// //         <TextInput
// //           style={[styles.marathiPad, translatingFields.marathiNotes && { opacity: 0.6 }]}
// //           multiline
// //           placeholder="येथे मराठीत टाइप करा किंवा English लिहा..."
// //           placeholderTextColor="#bbb"
// //           value={data.marathiNotes || ""}
// //           onChangeText={handleMarathiInput("marathiNotes")}
// //         />
// //         {translatingFields.marathiNotes && (
// //           <View style={{ position: 'absolute', right: 10, top: 35 }}>
// //             <ActivityIndicator size="small" color="#f97316" />
// //           </View>
// //         )}
// //       </View>
// //     </ScrollView>
// //   );
// // }






// // new kkk

// // api - FIXED WITH WORKING KEYBOARD SCROLL
// import React, { useState, useRef } from "react";
// import { 
//   View, Text, ScrollView, TextInput, TouchableOpacity, 
//   Platform, ActivityIndicator, KeyboardAvoidingView 
// } from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";
// import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // Reuse the translation helper (Ensure this matches your global helper or keep it here)
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

// export default function Step2({ data, setData }) {
//   const [showPicker, setShowPicker] = useState(false);
//   const [translatingFields, setTranslatingFields] = useState({});
//   const typingTimeoutRef = useRef(null);
//   const scrollViewRef = useRef(null);

//   // ---------------------------------------------------------
//   // LOGIC: DEBOUNCED MARATHI TRANSLATION
//   // ---------------------------------------------------------
//   const handleMarathiInput = (key) => (val) => {
//     // 1. Update UI immediately
//     setData((p) => ({ ...p, [key]: val }));

//     // 2. Clear timer
//     if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

//     // 3. Detect English for Auto-translate
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

//   const onDateChange = (event, selectedDate) => {
//     setShowPicker(Platform.OS === "ios");
//     if (selectedDate) {
//       const day = String(selectedDate.getDate()).padStart(2, "0");
//       const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
//       const year = selectedDate.getFullYear();
//       setData((p) => ({ ...p, dob: `${day}/${month}/${year}` }));
//     }
//   };

//   // Helper to show indicator
//   const renderIndicator = (key) => translatingFields[key] && (
//     <View style={{ position: 'absolute', right: 10, top: '55%' }}>
//       <ActivityIndicator size="small" color="#f97316" />
//     </View>
//   );

//   // ✅ KEYBOARD SCROLL HANDLER - Auto scroll when focusing text inputs
//   const handleMarathiFieldFocus = () => {
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
//         <SectionHeader title="Personal Information" />

//         {/* BIRTH DATE & TIME */}
//         <View style={styles.row3}>
//           <View style={{ flex: 1.2, marginRight: 6 }}>
//             <TouchableOpacity onPress={() => setShowPicker(true)}>
//               <View pointerEvents="none">
//                 <Field label="जन्म तारीख" required value={data.dob} placeholder="DD/MM/YYYY" />
//               </View>
//             </TouchableOpacity>
//           </View>

//           {showPicker && (
//             <DateTimePicker value={new Date()} mode="date" display="default" onChange={onDateChange} />
//           )}

//           <View style={{ flex: 0.8, marginHorizontal: 3 }}>
//             <Field label="तास" value={data.birthHour} onChangeText={handleNumberInput("birthHour")} placeholder="--" keyboardType="numeric" />
//           </View>
//           <View style={{ flex: 0.8, marginLeft: 6 }}>
//             <Field label="मिनिटे" value={data.birthMin} onChangeText={handleNumberInput("birthMin")} placeholder="00" keyboardType="numeric" />
//           </View>
//         </View>

//         {/* BIRTH PLACE & HEIGHT */}
//         <View style={styles.row3}>
//           <View style={{ flex: 1.2, marginRight: 6, position: 'relative' }}>
//             <Field
//               label="जन्मस्थळ"
//               required
//               value={data.birthPlace}
//               onChangeText={handleMarathiInput("birthPlace")}
//               placeholder="मराठी"
//               inputStyle={translatingFields.birthPlace && { opacity: 0.6 }}
//               onFocus={handleMarathiFieldFocus}
//             />
//             {renderIndicator("birthPlace")}
//           </View>
//           <View style={{ flex: 0.8, marginHorizontal: 3 }}>
//             <Field label="ऊंची फुट" required value={data.heightFt} onChangeText={handleNumberInput("heightFt")} placeholder="00" keyboardType="numeric" />
//           </View>
//           <View style={{ flex: 0.8, marginLeft: 6 }}>
//             <Field label="इंच" value={data.heightIn} onChangeText={handleNumberInput("heightIn")} placeholder="00" keyboardType="numeric" />
//           </View>
//         </View>

//         {/* COMPLEXION & BLOOD GROUP */}
//         <View style={styles.row2}>
//           <View style={{ flex: 1, marginRight: 8, position: 'relative' }}>
//             <Field
//               label="वर्ण"
//               required
//               value={data.complexion}
//               onChangeText={handleMarathiInput("complexion")}
//               placeholder="मराठी"
//               inputStyle={translatingFields.complexion && { opacity: 0.6 }}
//               onFocus={handleMarathiFieldFocus}
//             />
//             {renderIndicator("complexion")}
//           </View>
//           <View style={{ flex: 1, marginLeft: 8, position: 'relative' }}>
//             <Field
//               label="रक्तगट"
//               required
//               value={data.bloodGroup}
//               onChangeText={handleMarathiInput("bloodGroup")}
//               placeholder="उदा. A+"
//               inputStyle={translatingFields.bloodGroup && { opacity: 0.6 }}
//               onFocus={handleMarathiFieldFocus}
//             />
//             {renderIndicator("bloodGroup")}
//           </View>
//         </View>

//         {/* MAMKUL & GOTRA */}
//         <View style={styles.row2}>
//           <View style={{ flex: 1, marginRight: 8, position: 'relative' }}>
//             <Field
//               label="मामकुल"
//               required
//               value={data.mamkul}
//               onChangeText={handleMarathiInput("mamkul")}
//               placeholder="मराठी"
//               inputStyle={translatingFields.mamkul && { opacity: 0.6 }}
//               onFocus={handleMarathiFieldFocus}
//             />
//             {renderIndicator("mamkul")}
//           </View>
//           <View style={{ flex: 1, marginLeft: 8, position: 'relative' }}>
//             <Field
//               label="गोत्र"
//               required
//               value={data.gotra}
//               onChangeText={handleMarathiInput("gotra")}
//               placeholder="मराठी"
//               inputStyle={translatingFields.gotra && { opacity: 0.6 }}
//               onFocus={handleMarathiFieldFocus}
//             />
//             {renderIndicator("gotra")}
//           </View>
//         </View>

//         {/* VILLAGE, TALUKA, DISTRICT */}
//         <View style={styles.row3}>
//           <View style={{ flex: 1, marginRight: 6, position: 'relative' }}>
//             <Field 
//               label="मूळगाव" 
//               required 
//               value={data.village} 
//               onChangeText={handleMarathiInput("village")} 
//               placeholder="मराठी"
//               onFocus={handleMarathiFieldFocus}
//             />
//             {renderIndicator("village")}
//           </View>
//           <View style={{ flex: 1, marginHorizontal: 3, position: 'relative' }}>
//             <Field 
//               label="तालुका" 
//               required 
//               value={data.taluka} 
//               onChangeText={handleMarathiInput("taluka")} 
//               placeholder="मराठी"
//               onFocus={handleMarathiFieldFocus}
//             />
//             {renderIndicator("taluka")}
//           </View>
//           <View style={{ flex: 1, marginLeft: 6, position: 'relative' }}>
//             <Field 
//               label="जिल्हा" 
//               required 
//               value={data.district} 
//               onChangeText={handleMarathiInput("district")} 
//               placeholder="मराठी"
//               onFocus={handleMarathiFieldFocus}
//             />
//             {renderIndicator("district")}
//           </View>
//         </View>

//         {/* BROTHERS & SISTERS */}
//         <Text style={styles.subSectionLabel}>भाऊ (संख्या) <Text style={{ color: "red" }}>*</Text></Text>
//         <View style={styles.row2}>
//           <View style={{ flex: 1, marginRight: 8 }}>
//             <Field label="विवाहित" value={data.brotherMarried} onChangeText={handleNumberInput("brotherMarried")} keyboardType="numeric" />
//           </View>
//           <View style={{ flex: 1, marginLeft: 8 }}>
//             <Field label="अविवाहित" value={data.brotherUnmarried} onChangeText={handleNumberInput("brotherUnmarried")} keyboardType="numeric" />
//           </View>
//         </View>

//         <Text style={styles.subSectionLabel}>बहिण (संख्या) <Text style={{ color: "red" }}>*</Text></Text>
//         <View style={styles.row2}>
//           <View style={{ flex: 1, marginRight: 8 }}>
//             <Field label="विवाहित" value={data.sisterMarried} onChangeText={handleNumberInput("sisterMarried")} keyboardType="numeric" />
//           </View>
//           <View style={{ flex: 1, marginLeft: 8 }}>
//             <Field label="अविवाहित" value={data.sisterUnmarried} onChangeText={handleNumberInput("sisterUnmarried")} keyboardType="numeric" />
//           </View>
//         </View>

//         <Field
//           label="वैयक्तिक मोबाइल नंबर"
//           value={data.mobile}
//           onChangeText={handleNumberInput("mobile")}
//           keyboardType="phone-pad"
//           placeholder="+91"
//         />

//         {/* MARATHI NOTES - WITH EXTRA SPACE FOR KEYBOARD */}
//         <View style={[styles.marathiPadWrap, { position: 'relative', minHeight: 180 }]}>
//           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
//             इतर माहिती (auto-translate)
//           </Text>
//           <TextInput
//             style={[styles.marathiPad, translatingFields.marathiNotes && { opacity: 0.6 }]}
//             multiline
//             placeholder="येथे मराठीत टाइप करा किंवा English लिहा..."
//             placeholderTextColor="#bbb"
//             value={data.marathiNotes || ""}
//             onChangeText={handleMarathiInput("marathiNotes")}
//             onFocus={handleMarathiFieldFocus}
//           />
//           {translatingFields.marathiNotes && (
//             <View style={{ position: 'absolute', right: 10, top: 35 }}>
//               <ActivityIndicator size="small" color="#f97316" />
//             </View>
//           )}
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }
















// Step2.jsx - FIXED WITH AGGRESSIVE KEYBOARD SCROLL
import React, { useState, useRef } from "react";
import { 
  View, Text, ScrollView, TextInput, TouchableOpacity, 
  Platform, ActivityIndicator, KeyboardAvoidingView 
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
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

export default function Step2({ data, setData }) {
  const [showPicker, setShowPicker] = useState(false);
  const [translatingFields, setTranslatingFields] = useState({});
  const typingTimeoutRef = useRef(null);
  const scrollViewRef = useRef(null);

  // ---------------------------------------------------------
  // LOGIC: DEBOUNCED MARATHI TRANSLATION
  // ---------------------------------------------------------
  const handleMarathiInput = (key) => (val) => {
    // 1. Update UI immediately
    setData((p) => ({ ...p, [key]: val }));

    // 2. Clear timer
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    // 3. Detect English for Auto-translate
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

  const onDateChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === "ios");
    if (selectedDate) {
      const day = String(selectedDate.getDate()).padStart(2, "0");
      const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const year = selectedDate.getFullYear();
      setData((p) => ({ ...p, dob: `${day}/${month}/${year}` }));
    }
  };

  // Helper to show indicator
  const renderIndicator = (key) => translatingFields[key] && (
    <View style={{ position: 'absolute', right: 10, top: '55%' }}>
      <ActivityIndicator size="small" color="#f97316" />
    </View>
  );

  // ─── UPDATED KEYBOARD SCROLL HANDLER ───
  // Scrolls aggressively to the bottom on every focus
  const handleMarathiFieldFocus = () => {
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
        <SectionHeader title="Personal Information" />

        {/* BIRTH DATE & TIME */}
        <View style={styles.row3}>
          <View style={{ flex: 1.2, marginRight: 6 }}>
            <TouchableOpacity onPress={() => setShowPicker(true)}>
              <View pointerEvents="none">
                <Field label="जन्म तारीख" required value={data.dob} placeholder="DD/MM/YYYY" />
              </View>
            </TouchableOpacity>
          </View>

          {showPicker && (
            <DateTimePicker value={new Date()} mode="date" display="default" onChange={onDateChange} />
          )}

          <View style={{ flex: 0.8, marginHorizontal: 3 }}>
            <Field label="तास" value={data.birthHour} onChangeText={handleNumberInput("birthHour")} placeholder="--" keyboardType="numeric" />
          </View>
          <View style={{ flex: 0.8, marginLeft: 6 }}>
            <Field label="मिनिटे" value={data.birthMin} onChangeText={handleNumberInput("birthMin")} placeholder="00" keyboardType="numeric" />
          </View>
        </View>

        {/* BIRTH PLACE & HEIGHT */}
        <View style={styles.row3}>
          <View style={{ flex: 1.2, marginRight: 6, position: 'relative' }}>
            <Field
              label="जन्मस्थळ"
              required
              value={data.birthPlace}
              onChangeText={handleMarathiInput("birthPlace")}
              placeholder="मराठी"
              inputStyle={translatingFields.birthPlace && { opacity: 0.6 }}
              onFocus={handleMarathiFieldFocus}
            />
            {renderIndicator("birthPlace")}
          </View>
          <View style={{ flex: 0.8, marginHorizontal: 3 }}>
            <Field label="ऊंची फुट" required value={data.heightFt} onChangeText={handleNumberInput("heightFt")} placeholder="00" keyboardType="numeric" />
          </View>
          <View style={{ flex: 0.8, marginLeft: 6 }}>
            <Field label="इंच" value={data.heightIn} onChangeText={handleNumberInput("heightIn")} placeholder="00" keyboardType="numeric" />
          </View>
        </View>

        {/* COMPLEXION & BLOOD GROUP */}
        <View style={styles.row2}>
          <View style={{ flex: 1, marginRight: 8, position: 'relative' }}>
            <Field
              label="वर्ण"
              required
              value={data.complexion}
              onChangeText={handleMarathiInput("complexion")}
              placeholder="मराठी"
              inputStyle={translatingFields.complexion && { opacity: 0.6 }}
              onFocus={handleMarathiFieldFocus}
            />
            {renderIndicator("complexion")}
          </View>
          <View style={{ flex: 1, marginLeft: 8, position: 'relative' }}>
            <Field
              label="रक्तगट"
              required
              value={data.bloodGroup}
              onChangeText={handleMarathiInput("bloodGroup")}
              placeholder="उदा. A+"
              inputStyle={translatingFields.bloodGroup && { opacity: 0.6 }}
              onFocus={handleMarathiFieldFocus}
            />
            {renderIndicator("bloodGroup")}
          </View>
        </View>

        {/* MAMKUL & GOTRA */}
        <View style={styles.row2}>
          <View style={{ flex: 1, marginRight: 8, position: 'relative' }}>
            <Field
              label="मामकुल"
              required
              value={data.mamkul}
              onChangeText={handleMarathiInput("mamkul")}
              placeholder="मराठी"
              inputStyle={translatingFields.mamkul && { opacity: 0.6 }}
              onFocus={handleMarathiFieldFocus}
            />
            {renderIndicator("mamkul")}
          </View>
          <View style={{ flex: 1, marginLeft: 8, position: 'relative' }}>
            <Field
              label="गोत्र"
              required
              value={data.gotra}
              onChangeText={handleMarathiInput("gotra")}
              placeholder="मराठी"
              inputStyle={translatingFields.gotra && { opacity: 0.6 }}
              onFocus={handleMarathiFieldFocus}
            />
            {renderIndicator("gotra")}
          </View>
        </View>

        {/* VILLAGE, TALUKA, DISTRICT */}
        <View style={styles.row3}>
          <View style={{ flex: 1, marginRight: 6, position: 'relative' }}>
            <Field 
              label="मूळगाव" 
              required 
              value={data.village} 
              onChangeText={handleMarathiInput("village")} 
              placeholder="मराठी"
              onFocus={handleMarathiFieldFocus}
            />
            {renderIndicator("village")}
          </View>
          <View style={{ flex: 1, marginHorizontal: 3, position: 'relative' }}>
            <Field 
              label="तालुका" 
              required 
              value={data.taluka} 
              onChangeText={handleMarathiInput("taluka")} 
              placeholder="मराठी"
              onFocus={handleMarathiFieldFocus}
            />
            {renderIndicator("taluka")}
          </View>
          <View style={{ flex: 1, marginLeft: 6, position: 'relative' }}>
            <Field 
              label="जिल्हा" 
              required 
              value={data.district} 
              onChangeText={handleMarathiInput("district")} 
              placeholder="मराठी"
              onFocus={handleMarathiFieldFocus}
            />
            {renderIndicator("district")}
          </View>
        </View>

        {/* BROTHERS & SISTERS */}
        <Text style={styles.subSectionLabel}>भाऊ (संख्या) <Text style={{ color: "red" }}>*</Text></Text>
        <View style={styles.row2}>
          <View style={{ flex: 1, marginRight: 8 }}>
            <Field label="विवाहित" value={data.brotherMarried} onChangeText={handleNumberInput("brotherMarried")} keyboardType="numeric" />
          </View>
          <View style={{ flex: 1, marginLeft: 8 }}>
            <Field label="अविवाहित" value={data.brotherUnmarried} onChangeText={handleNumberInput("brotherUnmarried")} keyboardType="numeric" />
          </View>
        </View>

        <Text style={styles.subSectionLabel}>बहिण (संख्या) <Text style={{ color: "red" }}>*</Text></Text>
        <View style={styles.row2}>
          <View style={{ flex: 1, marginRight: 8 }}>
            <Field label="विवाहित" value={data.sisterMarried} onChangeText={handleNumberInput("sisterMarried")} keyboardType="numeric" />
          </View>
          <View style={{ flex: 1, marginLeft: 8 }}>
            <Field label="अविवाहित" value={data.sisterUnmarried} onChangeText={handleNumberInput("sisterUnmarried")} keyboardType="numeric" />
          </View>
        </View>

        <Field
          label="वैयक्तिक मोबाइल नंबर"
          value={data.mobile}
          onChangeText={handleNumberInput("mobile")}
          keyboardType="phone-pad"
          placeholder="+91"
        />

        {/* MARATHI NOTES - WITH EXTRA SPACE FOR KEYBOARD */}
        <View style={[styles.marathiPadWrap, { position: 'relative', minHeight: 180 }]}>
          <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
            इतर माहिती (auto-translate)
          </Text>
          <TextInput
            style={[styles.marathiPad, translatingFields.marathiNotes && { opacity: 0.6 }]}
            multiline
            placeholder="येथे मराठीत टाइप करा किंवा English लिहा..."
            placeholderTextColor="#bbb"
            value={data.marathiNotes || ""}
            onChangeText={handleMarathiInput("marathiNotes")}
            onFocus={handleMarathiFieldFocus}
          />
          {translatingFields.marathiNotes && (
            <View style={{ position: 'absolute', right: 10, top: 35 }}>
              <ActivityIndicator size="small" color="#f97316" />
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}