// // // // // // // // // // // // // // // // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // // // // // // // // // // // // // // // import { View, Text, ScrollView, TouchableOpacity, TextInput } from "react-native";
// // // // // // // // // // // // // // // // // // // // // // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // // // // // // // // // // // // // // // // // // // // // export default function Step1({ data, setData }) {
// // // // // // // // // // // // // // // // // // // // // // // // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// // // // // // // // // // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // // // // // // // // // //     <ScrollView showsVerticalScrollIndicator={false}>
// // // // // // // // // // // // // // // // // // // // // // // // // //       <SectionHeader title="Basic Information - (Application Number : F2788)" />

// // // // // // // // // // // // // // // // // // // // // // // // // //       <View style={styles.row3}>
// // // // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // // // // // // // // // // // // // // // // // //           <Field label="First Name" required value={data.firstName} onChangeText={set("firstName")} />
// // // // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // // // // // // // // // // // // // // // // // //           <Field label="Middle Name" required value={data.middleName} onChangeText={set("middleName")} />
// // // // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // // // // // // // // // // // // // // // // // //           <Field label="Last Name / Surname" required value={data.lastName} onChangeText={set("lastName")} />
// // // // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // // // //       </View>

// // // // // // // // // // // // // // // // // // // // // // // // // //       <View style={styles.row3}>
// // // // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // // // // // // // // // // // // // // // // // //           <Field label="पहिले नाव" required value={data.firstNameMr} onChangeText={set("firstNameMr")} />
// // // // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // // // // // // // // // // // // // // // // // //           <Field label="वडिलांचे नाव" required value={data.middleNameMr} onChangeText={set("middleNameMr")} />
// // // // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // // // // // // // // // // // // // // // // // //           <Field label="शेवटचे नाव / आडनाव" required value={data.lastNameMr} onChangeText={set("lastNameMr")} />
// // // // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // // // //       </View>

// // // // // // // // // // // // // // // // // // // // // // // // // //       <View style={styles.row2}>
// // // // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ flex: 1, marginRight: 8 }}>
// // // // // // // // // // // // // // // // // // // // // // // // // //           <Field label="जन्म नाव" required value={data.birthName} onChangeText={set("birthName")} />
// // // // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // // // // // // // // // // // // // // // // // // // // // //           <Field label="Birth Name" required value={data.birthNameEn} onChangeText={set("birthNameEn")} />
// // // // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // // // //       </View>

// // // // // // // // // // // // // // // // // // // // // // // // // //       <Field label="Candidate Type" required value={data.candidateType} onChangeText={set("candidateType")} placeholder="e.g. वधू / वर" />

// // // // // // // // // // // // // // // // // // // // // // // // // //       <View style={{ marginBottom: 12 }}>
// // // // // // // // // // // // // // // // // // // // // // // // // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>Photo <Text style={{ color: "red" }}>*</Text></Text>
// // // // // // // // // // // // // // // // // // // // // // // // // //         <TouchableOpacity style={styles.photoBtn}>
// // // // // // // // // // // // // // // // // // // // // // // // // //           <Text style={styles.photoBtnText}>📷  Choose Photo</Text>
// // // // // // // // // // // // // // // // // // // // // // // // // //         </TouchableOpacity>
// // // // // // // // // // // // // // // // // // // // // // // // // //       </View>

// // // // // // // // // // // // // // // // // // // // // // // // // //       <View style={styles.marathiPadWrap}>
// // // // // // // // // // // // // // // // // // // // // // // // // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>(मराठी) Marathi Type Box</Text>
// // // // // // // // // // // // // // // // // // // // // // // // // //         <TextInput
// // // // // // // // // // // // // // // // // // // // // // // // // //           style={[styles.marathiPad, { height: 80 }]}
// // // // // // // // // // // // // // // // // // // // // // // // // //           multiline
// // // // // // // // // // // // // // // // // // // // // // // // // //           placeholder="Type in Marathi..."
// // // // // // // // // // // // // // // // // // // // // // // // // //           placeholderTextColor="#bbb"
// // // // // // // // // // // // // // // // // // // // // // // // // //           value={data.marathiNote}
// // // // // // // // // // // // // // // // // // // // // // // // // //           onChangeText={set("marathiNote")}
// // // // // // // // // // // // // // // // // // // // // // // // // //         />
// // // // // // // // // // // // // // // // // // // // // // // // // //       </View>
// // // // // // // // // // // // // // // // // // // // // // // // // //     </ScrollView>
// // // // // // // // // // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // // // // // // // // // }






// // // // // // // // // // // // // // // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // // // // // // // // // // // // // // import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, Alert } from "react-native";
// // // // // // // // // // // // // // // // // // // // // // // // // import * as ImagePicker from "expo-image-picker";
// // // // // // // // // // // // // // // // // // // // // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // // // // // // // // // // // // // // // // // // // // export default function Step1({ data, setData }) {
// // // // // // // // // // // // // // // // // // // // // // // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// // // // // // // // // // // // // // // // // // // // // // // // //   const pickImage = async () => {
// // // // // // // // // // // // // // // // // // // // // // // // //     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

// // // // // // // // // // // // // // // // // // // // // // // // //     if (permissionResult.granted === false) {
// // // // // // // // // // // // // // // // // // // // // // // // //       Alert.alert("Permission Required", "You need to allow access to your photos to upload an image.");
// // // // // // // // // // // // // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // // // // // // // // // //     const result = await ImagePicker.launchImageLibraryAsync({
// // // // // // // // // // // // // // // // // // // // // // // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // // // // // // // // // // // // // // // // // // // // // // //       allowsEditing: true,
// // // // // // // // // // // // // // // // // // // // // // // // //       aspect: [4, 4],
// // // // // // // // // // // // // // // // // // // // // // // // //       quality: 0.8,
// // // // // // // // // // // // // // // // // // // // // // // // //     });

// // // // // // // // // // // // // // // // // // // // // // // // //     if (!result.canceled) {
// // // // // // // // // // // // // // // // // // // // // // // // //       set("photo")(result.assets[0].uri);
// // // // // // // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // // // // // // // // //     <ScrollView showsVerticalScrollIndicator={false}>
// // // // // // // // // // // // // // // // // // // // // // // // //       <SectionHeader title="Basic Information - (Application Number : F2788)" />

// // // // // // // // // // // // // // // // // // // // // // // // //       <View style={styles.row3}>
// // // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // // // // // // // // // // // // // // // // //           <Field label="First Name" required value={data.firstName} onChangeText={set("firstName")} />
// // // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // // // // // // // // // // // // // // // // //           <Field label="Middle Name" required value={data.middleName} onChangeText={set("middleName")} />
// // // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // // // // // // // // // // // // // // // // //           <Field label="Last Name / Surname" required value={data.lastName} onChangeText={set("lastName")} />
// // // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // // //       </View>

// // // // // // // // // // // // // // // // // // // // // // // // //       <View style={styles.row3}>
// // // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // // // // // // // // // // // // // // // // //           <Field label="पहिले नाव" required value={data.firstNameMr} onChangeText={set("firstNameMr")} />
// // // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // // // // // // // // // // // // // // // // //           <Field label="वडिलांचे नाव" required value={data.middleNameMr} onChangeText={set("middleNameMr")} />
// // // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // // // // // // // // // // // // // // // // //           <Field label="शेवटचे नाव / आडनाव" required value={data.lastNameMr} onChangeText={set("lastNameMr")} />
// // // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // // //       </View>

// // // // // // // // // // // // // // // // // // // // // // // // //       <View style={styles.row2}>
// // // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ flex: 1, marginRight: 8 }}>
// // // // // // // // // // // // // // // // // // // // // // // // //           <Field label="जन्म नाव" required value={data.birthName} onChangeText={set("birthName")} />
// // // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // // // // // // // // // // // // // // // // // // // // //           <Field label="Birth Name" required value={data.birthNameEn} onChangeText={set("birthNameEn")} />
// // // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // // //       </View>

// // // // // // // // // // // // // // // // // // // // // // // // //       <Field label="Candidate Type" required value={data.candidateType} onChangeText={set("candidateType")} placeholder="e.g. वधू / वर" />

// // // // // // // // // // // // // // // // // // // // // // // // //       <View style={{ marginBottom: 12 }}>
// // // // // // // // // // // // // // // // // // // // // // // // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>Photo <Text style={{ color: "red" }}>*</Text></Text>
// // // // // // // // // // // // // // // // // // // // // // // // //         <TouchableOpacity 
// // // // // // // // // // // // // // // // // // // // // // // // //           style={[styles.photoBtn, data.photo && { padding: 0, overflow: 'hidden' }]} 
// // // // // // // // // // // // // // // // // // // // // // // // //           onPress={pickImage}
// // // // // // // // // // // // // // // // // // // // // // // // //         >
// // // // // // // // // // // // // // // // // // // // // // // // //           {data.photo ? (
// // // // // // // // // // // // // // // // // // // // // // // // //             <Image source={{ uri: data.photo }} style={{ width: "100%", height: 120, resizeMode: 'cover' }} />
// // // // // // // // // // // // // // // // // // // // // // // // //           ) : (
// // // // // // // // // // // // // // // // // // // // // // // // //             <Text style={styles.photoBtnText}>📷  Choose Photo</Text>
// // // // // // // // // // // // // // // // // // // // // // // // //           )}
// // // // // // // // // // // // // // // // // // // // // // // // //         </TouchableOpacity>
// // // // // // // // // // // // // // // // // // // // // // // // //       </View>

// // // // // // // // // // // // // // // // // // // // // // // // //       <View style={styles.marathiPadWrap}>
// // // // // // // // // // // // // // // // // // // // // // // // //         <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>(मराठी) Marathi Type Box</Text>
// // // // // // // // // // // // // // // // // // // // // // // // //         <TextInput
// // // // // // // // // // // // // // // // // // // // // // // // //           style={[styles.marathiPad, { height: 80 }]}
// // // // // // // // // // // // // // // // // // // // // // // // //           multiline
// // // // // // // // // // // // // // // // // // // // // // // // //           placeholder="Type in Marathi..."
// // // // // // // // // // // // // // // // // // // // // // // // //           placeholderTextColor="#bbb"
// // // // // // // // // // // // // // // // // // // // // // // // //           value={data.marathiNote}
// // // // // // // // // // // // // // // // // // // // // // // // //           onChangeText={set("marathiNote")}
// // // // // // // // // // // // // // // // // // // // // // // // //         />
// // // // // // // // // // // // // // // // // // // // // // // // //       </View>
// // // // // // // // // // // // // // // // // // // // // // // // //     </ScrollView>
// // // // // // // // // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // // // // // // // // }








// // // // // // // // // // // // // // // // // // // // // // // // // new
// // // // // // // // // // // // // // // // // // // // // // // // import React, { useState, forwardRef, useImperativeHandle } from "react";
// // // // // // // // // // // // // // // // // // // // // // // // import {
// // // // // // // // // // // // // // // // // // // // // // // //   View, Text, ScrollView, TouchableOpacity,
// // // // // // // // // // // // // // // // // // // // // // // //   TextInput, Image, Modal,
// // // // // // // // // // // // // // // // // // // // // // // // } from "react-native";
// // // // // // // // // // // // // // // // // // // // // // // // import * as ImagePicker from "expo-image-picker";
// // // // // // // // // // // // // // // // // // // // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // // // // // // // // // // // // // // // // // // // const REQUIRED_FIELDS = [
// // // // // // // // // // // // // // // // // // // // // // // //   { key: "firstName",    label: "First Name"          },
// // // // // // // // // // // // // // // // // // // // // // // //   { key: "middleName",   label: "Middle Name"         },
// // // // // // // // // // // // // // // // // // // // // // // //   { key: "lastName",     label: "Last Name / Surname" },
// // // // // // // // // // // // // // // // // // // // // // // //   { key: "firstNameMr",  label: "पहिले नाव"           },
// // // // // // // // // // // // // // // // // // // // // // // //   { key: "middleNameMr", label: "वडिलांचे नाव"        },
// // // // // // // // // // // // // // // // // // // // // // // //   { key: "lastNameMr",   label: "शेवटचे नाव / आडनाव" },
// // // // // // // // // // // // // // // // // // // // // // // //   { key: "birthName",    label: "जन्म नाव"            },
// // // // // // // // // // // // // // // // // // // // // // // //   { key: "birthNameEn",  label: "Birth Name"          },
// // // // // // // // // // // // // // // // // // // // // // // //   { key: "candidateType",label: "Candidate Type"      },
// // // // // // // // // // // // // // // // // // // // // // // //   { key: "photo",        label: "Photo"               },
// // // // // // // // // // // // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // // // // // // // // // // // const Step1 = forwardRef(({ data, setData }, ref) => {
// // // // // // // // // // // // // // // // // // // // // // // //   const [errorVisible, setErrorVisible] = useState(false);
// // // // // // // // // // // // // // // // // // // // // // // //   const [missingFields, setMissingFields] = useState([]);

// // // // // // // // // // // // // // // // // // // // // // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// // // // // // // // // // // // // // // // // // // // // // // //   const setEnglish = (key) => (val) => {
// // // // // // // // // // // // // // // // // // // // // // // //     const filtered = val.replace(/[^\x00-\x7F]/g, "");
// // // // // // // // // // // // // // // // // // // // // // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // // // // // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // // // // // // //   const setMarathi = (key) => (val) => {
// // // // // // // // // // // // // // // // // // // // // // // //     const filtered = val.replace(/[^\u0900-\u097F\s]/g, "");
// // // // // // // // // // // // // // // // // // // // // // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // // // // // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // // // // // // //   const validate = () => {
// // // // // // // // // // // // // // // // // // // // // // // //     const missing = REQUIRED_FIELDS.filter(
// // // // // // // // // // // // // // // // // // // // // // // //       (f) => !data[f.key] || data[f.key].toString().trim() === ""
// // // // // // // // // // // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // // // // // // // // // //     if (missing.length > 0) {
// // // // // // // // // // // // // // // // // // // // // // // //       setMissingFields(missing);
// // // // // // // // // // // // // // // // // // // // // // // //       setErrorVisible(true);
// // // // // // // // // // // // // // // // // // // // // // // //       return false;
// // // // // // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // // // // //     return true;
// // // // // // // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // // // // // // //   useImperativeHandle(ref, () => ({ validate }));

// // // // // // // // // // // // // // // // // // // // // // // //   const isFieldMissing = (key) => missingFields.some((f) => f.key === key);

// // // // // // // // // // // // // // // // // // // // // // // //   const pickImage = async () => {
// // // // // // // // // // // // // // // // // // // // // // // //     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // // // // // // // // // // // // // // // // // // // // // //     if (permissionResult.granted === false) {
// // // // // // // // // // // // // // // // // // // // // // // //       setMissingFields([{ label: "Permission Required: Allow photo access." }]);
// // // // // // // // // // // // // // // // // // // // // // // //       setErrorVisible(true);
// // // // // // // // // // // // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // // // // //     const result = await ImagePicker.launchImageLibraryAsync({
// // // // // // // // // // // // // // // // // // // // // // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // // // // // // // // // // // // // // // // // // // // // //       allowsEditing: true,
// // // // // // // // // // // // // // // // // // // // // // // //       aspect: [4, 4],
// // // // // // // // // // // // // // // // // // // // // // // //       quality: 0.8,
// // // // // // // // // // // // // // // // // // // // // // // //     });
// // // // // // // // // // // // // // // // // // // // // // // //     if (!result.canceled) set("photo")(result.assets[0].uri);
// // // // // // // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // // // // // // // //     <>
// // // // // // // // // // // // // // // // // // // // // // // //       {/* ── VALIDATION POPUP ── */}
// // // // // // // // // // // // // // // // // // // // // // // //       <Modal transparent visible={errorVisible} animationType="fade" onRequestClose={() => setErrorVisible(false)}>
// // // // // // // // // // // // // // // // // // // // // // // //         <View style={popStyles.overlay}>
// // // // // // // // // // // // // // // // // // // // // // // //           <View style={popStyles.card}>

// // // // // // // // // // // // // // // // // // // // // // // //             {/* ── Gradient Header ── */}
// // // // // // // // // // // // // // // // // // // // // // // //             <View style={popStyles.header}>
// // // // // // // // // // // // // // // // // // // // // // // //               {/* decorative circles */}
// // // // // // // // // // // // // // // // // // // // // // // //               <View style={popStyles.decCircle1} />
// // // // // // // // // // // // // // // // // // // // // // // //               <View style={popStyles.decCircle2} />

// // // // // // // // // // // // // // // // // // // // // // // //               <View style={popStyles.iconCircle}>
// // // // // // // // // // // // // // // // // // // // // // // //                 <Text style={{ fontSize: 26 }}>⚠️</Text>
// // // // // // // // // // // // // // // // // // // // // // // //               </View>
// // // // // // // // // // // // // // // // // // // // // // // //               <Text style={popStyles.headerTitle}>Oops! Missing Info</Text>
// // // // // // // // // // // // // // // // // // // // // // // //               <Text style={popStyles.headerSub}>
// // // // // // // // // // // // // // // // // // // // // // // //                 Complete the highlighted fields{"\n"}before continuing.
// // // // // // // // // // // // // // // // // // // // // // // //               </Text>
// // // // // // // // // // // // // // // // // // // // // // // //             </View>

// // // // // // // // // // // // // // // // // // // // // // // //             {/* ── Field List ── */}
// // // // // // // // // // // // // // // // // // // // // // // //             <View style={popStyles.body}>
// // // // // // // // // // // // // // // // // // // // // // // //               <View style={popStyles.listBox}>

// // // // // // // // // // // // // // // // // // // // // // // //                 <View style={popStyles.listHeader}>
// // // // // // // // // // // // // // // // // // // // // // // //                   <View style={popStyles.listHeaderLeft}>
// // // // // // // // // // // // // // // // // // // // // // // //                     <View style={popStyles.orangeDot} />
// // // // // // // // // // // // // // // // // // // // // // // //                     <Text style={popStyles.listHeaderText}>Fields Required</Text>
// // // // // // // // // // // // // // // // // // // // // // // //                   </View>
// // // // // // // // // // // // // // // // // // // // // // // //                   <View style={popStyles.countBadge}>
// // // // // // // // // // // // // // // // // // // // // // // //                     <Text style={popStyles.countText}>{missingFields.length}</Text>
// // // // // // // // // // // // // // // // // // // // // // // //                   </View>
// // // // // // // // // // // // // // // // // // // // // // // //                 </View>

// // // // // // // // // // // // // // // // // // // // // // // //                 <View style={popStyles.divider} />

// // // // // // // // // // // // // // // // // // // // // // // //                 {missingFields.map((f, i) => (
// // // // // // // // // // // // // // // // // // // // // // // //                   <View key={i} style={[popStyles.listRow, i === missingFields.length - 1 && { borderBottomWidth: 0 }]}>
// // // // // // // // // // // // // // // // // // // // // // // //                     <View style={popStyles.rowIndex}>
// // // // // // // // // // // // // // // // // // // // // // // //                       <Text style={popStyles.rowIndexText}>{i + 1}</Text>
// // // // // // // // // // // // // // // // // // // // // // // //                     </View>
// // // // // // // // // // // // // // // // // // // // // // // //                     <Text style={popStyles.listItem}>{f.label}</Text>
// // // // // // // // // // // // // // // // // // // // // // // //                     <Text style={popStyles.rowX}>✕</Text>
// // // // // // // // // // // // // // // // // // // // // // // //                   </View>
// // // // // // // // // // // // // // // // // // // // // // // //                 ))}

// // // // // // // // // // // // // // // // // // // // // // // //               </View>

// // // // // // // // // // // // // // // // // // // // // // // //               {/* ── Button ── */}
// // // // // // // // // // // // // // // // // // // // // // // //               <TouchableOpacity
// // // // // // // // // // // // // // // // // // // // // // // //                 style={popStyles.okBtn}
// // // // // // // // // // // // // // // // // // // // // // // //                 onPress={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // // // // // // // // //                 activeOpacity={0.85}
// // // // // // // // // // // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // // // // // // // // // // //                 <Text style={popStyles.okBtnText}>Got it, I'll fix it  ✓</Text>
// // // // // // // // // // // // // // // // // // // // // // // //               </TouchableOpacity>
// // // // // // // // // // // // // // // // // // // // // // // //             </View>

// // // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // // //       </Modal>

// // // // // // // // // // // // // // // // // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false}>
// // // // // // // // // // // // // // // // // // // // // // // //         <SectionHeader title="Basic Information - (Application Number : F2788)" />

// // // // // // // // // // // // // // // // // // // // // // // //         <View style={styles.row3}>
// // // // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // // // // // // // // // // // // // // // //             <Field label="First Name" required value={data.firstName} onChangeText={setEnglish("firstName")} keyboardType="ascii-capable" autoCapitalize="words" placeholder="English only" inputStyle={isFieldMissing("firstName") && fieldErrStyle} />
// // // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // // // // // // // // // // // // // // // //             <Field label="Middle Name" required value={data.middleName} onChangeText={setEnglish("middleName")} keyboardType="ascii-capable" autoCapitalize="words" placeholder="English only" inputStyle={isFieldMissing("middleName") && fieldErrStyle} />
// // // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // // // // // // // // // // // // // // // //             <Field label="Last Name / Surname" required value={data.lastName} onChangeText={setEnglish("lastName")} keyboardType="ascii-capable" autoCapitalize="words" placeholder="English only" inputStyle={isFieldMissing("lastName") && fieldErrStyle} />
// // // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // // // // // // //         <View style={styles.row3}>
// // // // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // // // // // // // // // // // // // // // //             <Field label="पहिले नाव" required value={data.firstNameMr} onChangeText={setMarathi("firstNameMr")} placeholder="मराठी मध्ये" inputStyle={isFieldMissing("firstNameMr") && fieldErrStyle} />
// // // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // // // // // // // // // // // // // // // //             <Field label="वडिलांचे नाव" required value={data.middleNameMr} onChangeText={setMarathi("middleNameMr")} placeholder="मराठी मध्ये" inputStyle={isFieldMissing("middleNameMr") && fieldErrStyle} />
// // // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // // // // // // // // // // // // // // // //             <Field label="शेवटचे नाव / आडनाव" required value={data.lastNameMr} onChangeText={setMarathi("lastNameMr")} placeholder="मराठी मध्ये" inputStyle={isFieldMissing("lastNameMr") && fieldErrStyle} />
// // // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // // // // // // //         <View style={styles.row2}>
// // // // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 8 }}>
// // // // // // // // // // // // // // // // // // // // // // // //             <Field label="जन्म नाव" required value={data.birthName} onChangeText={setMarathi("birthName")} placeholder="मराठी मध्ये" inputStyle={isFieldMissing("birthName") && fieldErrStyle} />
// // // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // // // // // // // // // // // // // // // // // // // //             <Field label="Birth Name" required value={data.birthNameEn} onChangeText={setEnglish("birthNameEn")} keyboardType="ascii-capable" autoCapitalize="words" placeholder="English only" inputStyle={isFieldMissing("birthNameEn") && fieldErrStyle} />
// // // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // // // // // // //         <Field label="Candidate Type" required value={data.candidateType} onChangeText={set("candidateType")} placeholder="e.g. वधू / वर" inputStyle={isFieldMissing("candidateType") && fieldErrStyle} />

// // // // // // // // // // // // // // // // // // // // // // // //         <View style={{ marginBottom: 12 }}>
// // // // // // // // // // // // // // // // // // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // // // // // // // // // // // // // // // // // //             Photo <Text style={{ color: "red" }}>*</Text>
// // // // // // // // // // // // // // // // // // // // // // // //           </Text>
// // // // // // // // // // // // // // // // // // // // // // // //           <TouchableOpacity
// // // // // // // // // // // // // // // // // // // // // // // //             style={[styles.photoBtn, data.photo && { padding: 0, overflow: "hidden" }, isFieldMissing("photo") && { borderWidth: 1.5, borderColor: "#E24B4A" }]}
// // // // // // // // // // // // // // // // // // // // // // // //             onPress={pickImage}
// // // // // // // // // // // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // // // // // // // // // // //             {data.photo ? (
// // // // // // // // // // // // // // // // // // // // // // // //               <Image source={{ uri: data.photo }} style={{ width: "100%", height: 120, resizeMode: "cover" }} />
// // // // // // // // // // // // // // // // // // // // // // // //             ) : (
// // // // // // // // // // // // // // // // // // // // // // // //               <Text style={styles.photoBtnText}>📷  Choose Photo</Text>
// // // // // // // // // // // // // // // // // // // // // // // //             )}
// // // // // // // // // // // // // // // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // // // // // // //         <View style={styles.marathiPadWrap}>
// // // // // // // // // // // // // // // // // // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // // // // // // // // // // // // // // // // // //             (मराठी) Marathi Type Box
// // // // // // // // // // // // // // // // // // // // // // // //           </Text>
// // // // // // // // // // // // // // // // // // // // // // // //           <TextInput
// // // // // // // // // // // // // // // // // // // // // // // //             style={[styles.marathiPad, { height: 80 }]}
// // // // // // // // // // // // // // // // // // // // // // // //             multiline
// // // // // // // // // // // // // // // // // // // // // // // //             placeholder="मराठी मध्ये टाईप करा..."
// // // // // // // // // // // // // // // // // // // // // // // //             placeholderTextColor="#bbb"
// // // // // // // // // // // // // // // // // // // // // // // //             value={data.marathiNote}
// // // // // // // // // // // // // // // // // // // // // // // //             onChangeText={setMarathi("marathiNote")}
// // // // // // // // // // // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // // // // // // //       </ScrollView>
// // // // // // // // // // // // // // // // // // // // // // // //     </>
// // // // // // // // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // // // // // // // // // export default Step1;

// // // // // // // // // // // // // // // // // // // // // // // // const fieldErrStyle = {
// // // // // // // // // // // // // // // // // // // // // // // //   borderWidth: 1.5,
// // // // // // // // // // // // // // // // // // // // // // // //   borderColor: "#E24B4A",
// // // // // // // // // // // // // // // // // // // // // // // //   backgroundColor: "#fff",
// // // // // // // // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // // // // // // // const popStyles = {
// // // // // // // // // // // // // // // // // // // // // // // //   overlay:        { flex: 1, backgroundColor: "rgba(0,0,0,0.55)", justifyContent: "center", alignItems: "center", padding: 24 },
// // // // // // // // // // // // // // // // // // // // // // // //   card:           { backgroundColor: "#fff", borderRadius: 24, width: "100%", maxWidth: 320, overflow: "hidden" },

// // // // // // // // // // // // // // // // // // // // // // // //   header:         { backgroundColor: "#f97316", paddingTop: 28, paddingBottom: 24, paddingHorizontal: 20, alignItems: "center", overflow: "hidden" },
// // // // // // // // // // // // // // // // // // // // // // // //   decCircle1:     { position: "absolute", top: -20, right: -20, width: 90, height: 90, borderRadius: 45, backgroundColor: "rgba(255,255,255,0.08)" },
// // // // // // // // // // // // // // // // // // // // // // // //   decCircle2:     { position: "absolute", bottom: -28, left: -18, width: 70, height: 70, borderRadius: 35, backgroundColor: "rgba(255,255,255,0.07)" },
// // // // // // // // // // // // // // // // // // // // // // // //   iconCircle:     { width: 64, height: 64, borderRadius: 32, backgroundColor: "rgba(255,255,255,0.2)", borderWidth: 2, borderColor: "rgba(255,255,255,0.4)", alignItems: "center", justifyContent: "center", marginBottom: 12 },
// // // // // // // // // // // // // // // // // // // // // // // //   headerTitle:    { fontSize: 18, fontWeight: "700", color: "#fff", marginBottom: 5 },
// // // // // // // // // // // // // // // // // // // // // // // //   headerSub:      { fontSize: 12, color: "rgba(255,255,255,0.88)", textAlign: "center", lineHeight: 18 },

// // // // // // // // // // // // // // // // // // // // // // // //   body:           { padding: 16 },
// // // // // // // // // // // // // // // // // // // // // // // //   listBox:        { backgroundColor: "#fff8f3", borderRadius: 14, borderWidth: 1.5, borderColor: "#fed7aa", overflow: "hidden", marginBottom: 14 },
// // // // // // // // // // // // // // // // // // // // // // // //   listHeader:     { backgroundColor: "#fff3ec", paddingHorizontal: 14, paddingVertical: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
// // // // // // // // // // // // // // // // // // // // // // // //   listHeaderLeft: { flexDirection: "row", alignItems: "center", gap: 8 },
// // // // // // // // // // // // // // // // // // // // // // // //   orangeDot:      { width: 8, height: 8, borderRadius: 4, backgroundColor: "#f97316" },
// // // // // // // // // // // // // // // // // // // // // // // //   listHeaderText: { fontSize: 12, fontWeight: "700", color: "#c2410c" },
// // // // // // // // // // // // // // // // // // // // // // // //   countBadge:     { backgroundColor: "#f97316", borderRadius: 12, paddingHorizontal: 10, paddingVertical: 2 },
// // // // // // // // // // // // // // // // // // // // // // // //   countText:      { fontSize: 11, color: "#fff", fontWeight: "700" },
// // // // // // // // // // // // // // // // // // // // // // // //   divider:        { height: 1, backgroundColor: "#fed7aa" },
// // // // // // // // // // // // // // // // // // // // // // // //   listRow:        { flexDirection: "row", alignItems: "center", paddingHorizontal: 14, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#fff3ec", gap: 10 },
// // // // // // // // // // // // // // // // // // // // // // // //   rowIndex:       { width: 22, height: 22, borderRadius: 11, backgroundColor: "#FCEBEB", borderWidth: 1.5, borderColor: "#fca5a5", alignItems: "center", justifyContent: "center" },
// // // // // // // // // // // // // // // // // // // // // // // //   rowIndexText:   { fontSize: 10, fontWeight: "700", color: "#E24B4A" },
// // // // // // // // // // // // // // // // // // // // // // // //   listItem:       { flex: 1, fontSize: 13, color: "#333" },
// // // // // // // // // // // // // // // // // // // // // // // //   rowX:           { fontSize: 13, color: "#fca5a5", fontWeight: "700" },
// // // // // // // // // // // // // // // // // // // // // // // //   okBtn:          { backgroundColor: "#f97316", borderRadius: 14, padding: 14, alignItems: "center" },
// // // // // // // // // // // // // // // // // // // // // // // //   okBtnText:      { color: "#fff", fontWeight: "700", fontSize: 14, letterSpacing: 0.3 },
// // // // // // // // // // // // // // // // // // // // // // // // };




// // // // // // // // // // // // // // // // // // // // // // // // seconf new
// // // // // // // // // // // // // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // // // // // // // // // // // // import {
// // // // // // // // // // // // // // // // // // // // // // //   View, Text, ScrollView, TouchableOpacity,
// // // // // // // // // // // // // // // // // // // // // // //   TextInput, Image, Modal,
// // // // // // // // // // // // // // // // // // // // // // // } from "react-native";
// // // // // // // // // // // // // // // // // // // // // // // import * as ImagePicker from "expo-image-picker";
// // // // // // // // // // // // // // // // // // // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // // // // // // // // // // // // // // // // // // const REQUIRED_FIELDS = [
// // // // // // // // // // // // // // // // // // // // // // //   { key: "firstName",    label: "First Name",           lang: "EN" },
// // // // // // // // // // // // // // // // // // // // // // //   { key: "middleName",   label: "Middle Name",          lang: "EN" },
// // // // // // // // // // // // // // // // // // // // // // //   { key: "lastName",     label: "Last Name / Surname",  lang: "EN" },
// // // // // // // // // // // // // // // // // // // // // // //   { key: "firstNameMr",  label: "पहिले नाव",            lang: "MR" },
// // // // // // // // // // // // // // // // // // // // // // //   { key: "middleNameMr", label: "वडिलांचे नाव",         lang: "MR" },
// // // // // // // // // // // // // // // // // // // // // // //   { key: "lastNameMr",   label: "शेवटचे नाव / आडनाव",  lang: "MR" },
// // // // // // // // // // // // // // // // // // // // // // //   { key: "birthName",    label: "जन्म नाव",             lang: "MR" },
// // // // // // // // // // // // // // // // // // // // // // //   { key: "birthNameEn",  label: "Birth Name",           lang: "EN" },
// // // // // // // // // // // // // // // // // // // // // // //   { key: "candidateType",label: "Candidate Type",       lang: "EN" },
// // // // // // // // // // // // // // // // // // // // // // //   { key: "photo",        label: "Photo",                lang: null  },
// // // // // // // // // // // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // // // // // // // // // // export default function Step1({ data, setData, onNext }) {
// // // // // // // // // // // // // // // // // // // // // // //   const [errorVisible, setErrorVisible] = useState(false);
// // // // // // // // // // // // // // // // // // // // // // //   const [missingFields, setMissingFields] = useState([]);

// // // // // // // // // // // // // // // // // // // // // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// // // // // // // // // // // // // // // // // // // // // // //   const setEnglish = (key) => (val) => {
// // // // // // // // // // // // // // // // // // // // // // //     const filtered = val.replace(/[^\x00-\x7F]/g, "");
// // // // // // // // // // // // // // // // // // // // // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // // // // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // // // // // //   const setMarathi = (key) => (val) => {
// // // // // // // // // // // // // // // // // // // // // // //     const filtered = val.replace(/[^\u0900-\u097F\s]/g, "");
// // // // // // // // // // // // // // // // // // // // // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // // // // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // // // // // //   const pickImage = async () => {
// // // // // // // // // // // // // // // // // // // // // // //     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // // // // // // // // // // // // // // // // // // // // //     if (permissionResult.granted === false) {
// // // // // // // // // // // // // // // // // // // // // // //       setMissingFields([{ label: "Permission Required: Allow photo access to upload an image.", lang: null }]);
// // // // // // // // // // // // // // // // // // // // // // //       setErrorVisible(true);
// // // // // // // // // // // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // // // //     const result = await ImagePicker.launchImageLibraryAsync({
// // // // // // // // // // // // // // // // // // // // // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // // // // // // // // // // // // // // // // // // // // //       allowsEditing: true,
// // // // // // // // // // // // // // // // // // // // // // //       aspect: [4, 4],
// // // // // // // // // // // // // // // // // // // // // // //       quality: 0.8,
// // // // // // // // // // // // // // // // // // // // // // //     });
// // // // // // // // // // // // // // // // // // // // // // //     if (!result.canceled) {
// // // // // // // // // // // // // // // // // // // // // // //       set("photo")(result.assets[0].uri);
// // // // // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // // // // // //   const validate = () => {
// // // // // // // // // // // // // // // // // // // // // // //     const missing = REQUIRED_FIELDS.filter(
// // // // // // // // // // // // // // // // // // // // // // //       (f) => !data[f.key] || data[f.key].toString().trim() === ""
// // // // // // // // // // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // // // // // // // // //     if (missing.length > 0) {
// // // // // // // // // // // // // // // // // // // // // // //       setMissingFields(missing);
// // // // // // // // // // // // // // // // // // // // // // //       setErrorVisible(true);
// // // // // // // // // // // // // // // // // // // // // // //       return false;
// // // // // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // // // //     return true;
// // // // // // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // // // // // //   const isFieldMissing = (key) => missingFields.some((f) => f.key === key);

// // // // // // // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // // // // // // //     <>
// // // // // // // // // // // // // // // // // // // // // // //       {/* ── NEW VALIDATION POPUP ── */}
// // // // // // // // // // // // // // // // // // // // // // //       <Modal
// // // // // // // // // // // // // // // // // // // // // // //         transparent
// // // // // // // // // // // // // // // // // // // // // // //         visible={errorVisible}
// // // // // // // // // // // // // // // // // // // // // // //         animationType="fade"
// // // // // // // // // // // // // // // // // // // // // // //         onRequestClose={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // // // // // // // //       >
// // // // // // // // // // // // // // // // // // // // // // //         <View style={popStyles.overlay}>
// // // // // // // // // // // // // // // // // // // // // // //           <View style={popStyles.card}>

// // // // // // // // // // // // // // // // // // // // // // //             {/* Red banner header */}
// // // // // // // // // // // // // // // // // // // // // // //             <View style={popStyles.banner}>
// // // // // // // // // // // // // // // // // // // // // // //               <View style={popStyles.bannerRow}>
// // // // // // // // // // // // // // // // // // // // // // //                 <View style={popStyles.bannerIcon}>
// // // // // // // // // // // // // // // // // // // // // // //                   {/* Warning triangle using nested views */}
// // // // // // // // // // // // // // // // // // // // // // //                   <View style={popStyles.warningTriangle}>
// // // // // // // // // // // // // // // // // // // // // // //                     <Text style={popStyles.warningExclaim}>!</Text>
// // // // // // // // // // // // // // // // // // // // // // //                   </View>
// // // // // // // // // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // // // // // // // // //                 <View style={{ flex: 1 }}>
// // // // // // // // // // // // // // // // // // // // // // //                   <Text style={popStyles.bannerTitle}>Required fields missing</Text>
// // // // // // // // // // // // // // // // // // // // // // //                   <Text style={popStyles.bannerSub}>Fill in all fields to continue</Text>
// // // // // // // // // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // // // // // // // // //                 {/* Close X button */}
// // // // // // // // // // // // // // // // // // // // // // //                 <TouchableOpacity
// // // // // // // // // // // // // // // // // // // // // // //                   style={popStyles.closeBtn}
// // // // // // // // // // // // // // // // // // // // // // //                   onPress={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // // // // // // // //                   hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
// // // // // // // // // // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // // // // // // // // // //                   <Text style={popStyles.closeBtnText}>✕</Text>
// // // // // // // // // // // // // // // // // // // // // // //                 </TouchableOpacity>
// // // // // // // // // // // // // // // // // // // // // // //               </View>
// // // // // // // // // // // // // // // // // // // // // // //               {/* Curved bottom of banner */}
// // // // // // // // // // // // // // // // // // // // // // //               <View style={popStyles.bannerCurve} />
// // // // // // // // // // // // // // // // // // // // // // //             </View>

// // // // // // // // // // // // // // // // // // // // // // //             {/* Count badge */}
// // // // // // // // // // // // // // // // // // // // // // //             <View style={popStyles.countRow}>
// // // // // // // // // // // // // // // // // // // // // // //               <Text style={popStyles.sectionLabel}>Incomplete fields</Text>
// // // // // // // // // // // // // // // // // // // // // // //               <View style={popStyles.countBadge}>
// // // // // // // // // // // // // // // // // // // // // // //                 <Text style={popStyles.countBadgeText}>{missingFields.length}</Text>
// // // // // // // // // // // // // // // // // // // // // // //               </View>
// // // // // // // // // // // // // // // // // // // // // // //             </View>

// // // // // // // // // // // // // // // // // // // // // // //             {/* Scrollable field list */}
// // // // // // // // // // // // // // // // // // // // // // //             <ScrollView
// // // // // // // // // // // // // // // // // // // // // // //               style={popStyles.listScroll}
// // // // // // // // // // // // // // // // // // // // // // //               contentContainerStyle={popStyles.listContent}
// // // // // // // // // // // // // // // // // // // // // // //               showsVerticalScrollIndicator={false}
// // // // // // // // // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // // // // // // // // //               {missingFields.map((f, i) => (
// // // // // // // // // // // // // // // // // // // // // // //                 <View key={i} style={popStyles.fieldRow}>
// // // // // // // // // // // // // // // // // // // // // // //                   {/* X dot */}
// // // // // // // // // // // // // // // // // // // // // // //                   <View style={popStyles.fieldDot}>
// // // // // // // // // // // // // // // // // // // // // // //                     <Text style={popStyles.fieldDotText}>✕</Text>
// // // // // // // // // // // // // // // // // // // // // // //                   </View>
// // // // // // // // // // // // // // // // // // // // // // //                   {/* Label */}
// // // // // // // // // // // // // // // // // // // // // // //                   <Text style={popStyles.fieldText} numberOfLines={1}>
// // // // // // // // // // // // // // // // // // // // // // //                     {f.label}
// // // // // // // // // // // // // // // // // // // // // // //                   </Text>
// // // // // // // // // // // // // // // // // // // // // // //                   {/* Language badge */}
// // // // // // // // // // // // // // // // // // // // // // //                   {f.lang ? (
// // // // // // // // // // // // // // // // // // // // // // //                     <View style={[
// // // // // // // // // // // // // // // // // // // // // // //                       popStyles.langBadge,
// // // // // // // // // // // // // // // // // // // // // // //                       f.lang === "MR" && popStyles.langBadgeMr,
// // // // // // // // // // // // // // // // // // // // // // //                     ]}>
// // // // // // // // // // // // // // // // // // // // // // //                       <Text style={[
// // // // // // // // // // // // // // // // // // // // // // //                         popStyles.langBadgeText,
// // // // // // // // // // // // // // // // // // // // // // //                         f.lang === "MR" && popStyles.langBadgeTextMr,
// // // // // // // // // // // // // // // // // // // // // // //                       ]}>
// // // // // // // // // // // // // // // // // // // // // // //                         {f.lang}
// // // // // // // // // // // // // // // // // // // // // // //                       </Text>
// // // // // // // // // // // // // // // // // // // // // // //                     </View>
// // // // // // // // // // // // // // // // // // // // // // //                   ) : (
// // // // // // // // // // // // // // // // // // // // // // //                     <View style={popStyles.reqBadge}>
// // // // // // // // // // // // // // // // // // // // // // //                       <Text style={popStyles.reqBadgeText}>Required</Text>
// // // // // // // // // // // // // // // // // // // // // // //                     </View>
// // // // // // // // // // // // // // // // // // // // // // //                   )}
// // // // // // // // // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // // // // // // // // //               ))}
// // // // // // // // // // // // // // // // // // // // // // //             </ScrollView>

// // // // // // // // // // // // // // // // // // // // // // //             {/* Divider */}
// // // // // // // // // // // // // // // // // // // // // // //             <View style={popStyles.divider} />

// // // // // // // // // // // // // // // // // // // // // // //             {/* Action buttons */}
// // // // // // // // // // // // // // // // // // // // // // //             <View style={popStyles.btnRow}>
// // // // // // // // // // // // // // // // // // // // // // //               <TouchableOpacity
// // // // // // // // // // // // // // // // // // // // // // //                 style={popStyles.dismissBtn}
// // // // // // // // // // // // // // // // // // // // // // //                 onPress={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // // // // // // // //                 activeOpacity={0.7}
// // // // // // // // // // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // // // // // // // // // //                 <Text style={popStyles.dismissText}>Dismiss</Text>
// // // // // // // // // // // // // // // // // // // // // // //               </TouchableOpacity>
// // // // // // // // // // // // // // // // // // // // // // //               <TouchableOpacity
// // // // // // // // // // // // // // // // // // // // // // //                 style={popStyles.fixBtn}
// // // // // // // // // // // // // // // // // // // // // // //                 onPress={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // // // // // // // //                 activeOpacity={0.85}
// // // // // // // // // // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // // // // // // // // // //                 <Text style={popStyles.fixText}>Fix fields →</Text>
// // // // // // // // // // // // // // // // // // // // // // //               </TouchableOpacity>
// // // // // // // // // // // // // // // // // // // // // // //             </View>

// // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // // //       </Modal>

// // // // // // // // // // // // // // // // // // // // // // //       {/* ── FORM ── */}
// // // // // // // // // // // // // // // // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false}>
// // // // // // // // // // // // // // // // // // // // // // //         <SectionHeader title="Basic Information - (Application Number : F2788)" />

// // // // // // // // // // // // // // // // // // // // // // //         {/* English Name Row */}
// // // // // // // // // // // // // // // // // // // // // // //         <View style={styles.row3}>
// // // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // // // // // // // // // // // // // // //             <Field
// // // // // // // // // // // // // // // // // // // // // // //               label="First Name" required
// // // // // // // // // // // // // // // // // // // // // // //               value={data.firstName}
// // // // // // // // // // // // // // // // // // // // // // //               onChangeText={setEnglish("firstName")}
// // // // // // // // // // // // // // // // // // // // // // //               keyboardType="ascii-capable"
// // // // // // // // // // // // // // // // // // // // // // //               autoCapitalize="words"
// // // // // // // // // // // // // // // // // // // // // // //               placeholder="English only"
// // // // // // // // // // // // // // // // // // // // // // //               inputStyle={isFieldMissing("firstName") && fieldErrStyle}
// // // // // // // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // // // // // // // // // // // // // // //             <Field
// // // // // // // // // // // // // // // // // // // // // // //               label="Middle Name" required
// // // // // // // // // // // // // // // // // // // // // // //               value={data.middleName}
// // // // // // // // // // // // // // // // // // // // // // //               onChangeText={setEnglish("middleName")}
// // // // // // // // // // // // // // // // // // // // // // //               keyboardType="ascii-capable"
// // // // // // // // // // // // // // // // // // // // // // //               autoCapitalize="words"
// // // // // // // // // // // // // // // // // // // // // // //               placeholder="English only"
// // // // // // // // // // // // // // // // // // // // // // //               inputStyle={isFieldMissing("middleName") && fieldErrStyle}
// // // // // // // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // // // // // // // // // // // // // // //             <Field
// // // // // // // // // // // // // // // // // // // // // // //               label="Last Name / Surname" required
// // // // // // // // // // // // // // // // // // // // // // //               value={data.lastName}
// // // // // // // // // // // // // // // // // // // // // // //               onChangeText={setEnglish("lastName")}
// // // // // // // // // // // // // // // // // // // // // // //               keyboardType="ascii-capable"
// // // // // // // // // // // // // // // // // // // // // // //               autoCapitalize="words"
// // // // // // // // // // // // // // // // // // // // // // //               placeholder="English only"
// // // // // // // // // // // // // // // // // // // // // // //               inputStyle={isFieldMissing("lastName") && fieldErrStyle}
// // // // // // // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // // // // // //         {/* Marathi Name Row */}
// // // // // // // // // // // // // // // // // // // // // // //         <View style={styles.row3}>
// // // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // // // // // // // // // // // // // // //             <Field
// // // // // // // // // // // // // // // // // // // // // // //               label="पहिले नाव" required
// // // // // // // // // // // // // // // // // // // // // // //               value={data.firstNameMr}
// // // // // // // // // // // // // // // // // // // // // // //               onChangeText={setMarathi("firstNameMr")}
// // // // // // // // // // // // // // // // // // // // // // //               placeholder="मराठी मध्ये"
// // // // // // // // // // // // // // // // // // // // // // //               inputStyle={isFieldMissing("firstNameMr") && fieldErrStyle}
// // // // // // // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // // // // // // // // // // // // // // //             <Field
// // // // // // // // // // // // // // // // // // // // // // //               label="वडिलांचे नाव" required
// // // // // // // // // // // // // // // // // // // // // // //               value={data.middleNameMr}
// // // // // // // // // // // // // // // // // // // // // // //               onChangeText={setMarathi("middleNameMr")}
// // // // // // // // // // // // // // // // // // // // // // //               placeholder="मराठी मध्ये"
// // // // // // // // // // // // // // // // // // // // // // //               inputStyle={isFieldMissing("middleNameMr") && fieldErrStyle}
// // // // // // // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // // // // // // // // // // // // // // //             <Field
// // // // // // // // // // // // // // // // // // // // // // //               label="शेवटचे नाव / आडनाव" required
// // // // // // // // // // // // // // // // // // // // // // //               value={data.lastNameMr}
// // // // // // // // // // // // // // // // // // // // // // //               onChangeText={setMarathi("lastNameMr")}
// // // // // // // // // // // // // // // // // // // // // // //               placeholder="मराठी मध्ये"
// // // // // // // // // // // // // // // // // // // // // // //               inputStyle={isFieldMissing("lastNameMr") && fieldErrStyle}
// // // // // // // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // // // // // //         {/* Birth Name Row */}
// // // // // // // // // // // // // // // // // // // // // // //         <View style={styles.row2}>
// // // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 8 }}>
// // // // // // // // // // // // // // // // // // // // // // //             <Field
// // // // // // // // // // // // // // // // // // // // // // //               label="जन्म नाव" required
// // // // // // // // // // // // // // // // // // // // // // //               value={data.birthName}
// // // // // // // // // // // // // // // // // // // // // // //               onChangeText={setMarathi("birthName")}
// // // // // // // // // // // // // // // // // // // // // // //               placeholder="मराठी मध्ये"
// // // // // // // // // // // // // // // // // // // // // // //               inputStyle={isFieldMissing("birthName") && fieldErrStyle}
// // // // // // // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // // // // // // // // // // // // // // // // // // //             <Field
// // // // // // // // // // // // // // // // // // // // // // //               label="Birth Name" required
// // // // // // // // // // // // // // // // // // // // // // //               value={data.birthNameEn}
// // // // // // // // // // // // // // // // // // // // // // //               onChangeText={setEnglish("birthNameEn")}
// // // // // // // // // // // // // // // // // // // // // // //               keyboardType="ascii-capable"
// // // // // // // // // // // // // // // // // // // // // // //               autoCapitalize="words"
// // // // // // // // // // // // // // // // // // // // // // //               placeholder="English only"
// // // // // // // // // // // // // // // // // // // // // // //               inputStyle={isFieldMissing("birthNameEn") && fieldErrStyle}
// // // // // // // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // // // // // //         <Field
// // // // // // // // // // // // // // // // // // // // // // //           label="Candidate Type" required
// // // // // // // // // // // // // // // // // // // // // // //           value={data.candidateType}
// // // // // // // // // // // // // // // // // // // // // // //           onChangeText={set("candidateType")}
// // // // // // // // // // // // // // // // // // // // // // //           placeholder="e.g. वधू / वर"
// // // // // // // // // // // // // // // // // // // // // // //           inputStyle={isFieldMissing("candidateType") && fieldErrStyle}
// // // // // // // // // // // // // // // // // // // // // // //         />

// // // // // // // // // // // // // // // // // // // // // // //         {/* Photo */}
// // // // // // // // // // // // // // // // // // // // // // //         <View style={{ marginBottom: 12 }}>
// // // // // // // // // // // // // // // // // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // // // // // // // // // // // // // // // // //             Photo <Text style={{ color: "red" }}>*</Text>
// // // // // // // // // // // // // // // // // // // // // // //           </Text>
// // // // // // // // // // // // // // // // // // // // // // //           <TouchableOpacity
// // // // // // // // // // // // // // // // // // // // // // //             style={[
// // // // // // // // // // // // // // // // // // // // // // //               styles.photoBtn,
// // // // // // // // // // // // // // // // // // // // // // //               data.photo && { padding: 0, overflow: "hidden" },
// // // // // // // // // // // // // // // // // // // // // // //               isFieldMissing("photo") && { borderWidth: 1.5, borderColor: "#E24B4A" },
// // // // // // // // // // // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // // // // // // // // // // //             onPress={pickImage}
// // // // // // // // // // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // // // // // // // // // //             {data.photo ? (
// // // // // // // // // // // // // // // // // // // // // // //               <Image
// // // // // // // // // // // // // // // // // // // // // // //                 source={{ uri: data.photo }}
// // // // // // // // // // // // // // // // // // // // // // //                 style={{ width: "100%", height: 120, resizeMode: "cover" }}
// // // // // // // // // // // // // // // // // // // // // // //               />
// // // // // // // // // // // // // // // // // // // // // // //             ) : (
// // // // // // // // // // // // // // // // // // // // // // //               <Text style={styles.photoBtnText}>📷  Choose Photo</Text>
// // // // // // // // // // // // // // // // // // // // // // //             )}
// // // // // // // // // // // // // // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // // // // // //         {/* Marathi Text Box */}
// // // // // // // // // // // // // // // // // // // // // // //         <View style={styles.marathiPadWrap}>
// // // // // // // // // // // // // // // // // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // // // // // // // // // // // // // // // // //             (मराठी) Marathi Type Box
// // // // // // // // // // // // // // // // // // // // // // //           </Text>
// // // // // // // // // // // // // // // // // // // // // // //           <TextInput
// // // // // // // // // // // // // // // // // // // // // // //             style={[styles.marathiPad, { height: 80 }]}
// // // // // // // // // // // // // // // // // // // // // // //             multiline
// // // // // // // // // // // // // // // // // // // // // // //             placeholder="मराठी मध्ये टाईप करा..."
// // // // // // // // // // // // // // // // // // // // // // //             placeholderTextColor="#bbb"
// // // // // // // // // // // // // // // // // // // // // // //             value={data.marathiNote}
// // // // // // // // // // // // // // // // // // // // // // //             onChangeText={setMarathi("marathiNote")}
// // // // // // // // // // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // // // // // //         {/* Next Button */}
// // // // // // // // // // // // // // // // // // // // // // //         <TouchableOpacity
// // // // // // // // // // // // // // // // // // // // // // //           style={nextBtnStyle}
// // // // // // // // // // // // // // // // // // // // // // //           onPress={() => { if (validate() && onNext) onNext(); }}
// // // // // // // // // // // // // // // // // // // // // // //           activeOpacity={0.85}
// // // // // // // // // // // // // // // // // // // // // // //         >
// // // // // // // // // // // // // // // // // // // // // // //           <Text style={{ color: "#fff", fontWeight: "700", fontSize: 15 }}>Next →</Text>
// // // // // // // // // // // // // // // // // // // // // // //         </TouchableOpacity>

// // // // // // // // // // // // // // // // // // // // // // //       </ScrollView>
// // // // // // // // // // // // // // // // // // // // // // //     </>
// // // // // // // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // // // // // // // ─── Styles ───────────────────────────────────────────────────────────────────

// // // // // // // // // // // // // // // // // // // // // // // const fieldErrStyle = {
// // // // // // // // // // // // // // // // // // // // // // //   borderWidth: 1.5,
// // // // // // // // // // // // // // // // // // // // // // //   borderColor: "#E24B4A",
// // // // // // // // // // // // // // // // // // // // // // //   backgroundColor: "#fff",
// // // // // // // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // // // // // // const nextBtnStyle = {
// // // // // // // // // // // // // // // // // // // // // // //   backgroundColor: "#f97316",
// // // // // // // // // // // // // // // // // // // // // // //   borderRadius: 14,
// // // // // // // // // // // // // // // // // // // // // // //   padding: 15,
// // // // // // // // // // // // // // // // // // // // // // //   alignItems: "center",
// // // // // // // // // // // // // // // // // // // // // // //   marginTop: 10,
// // // // // // // // // // // // // // // // // // // // // // //   marginBottom: 30,
// // // // // // // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // // // // // // const popStyles = {
// // // // // // // // // // // // // // // // // // // // // // //   // Backdrop
// // // // // // // // // // // // // // // // // // // // // // //   overlay: {
// // // // // // // // // // // // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // // // // // // // // // // // //     backgroundColor: "rgba(0,0,0,0.55)",
// // // // // // // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // // // // // //     padding: 24,
// // // // // // // // // // // // // // // // // // // // // // //   },

// // // // // // // // // // // // // // // // // // // // // // //   // Card container
// // // // // // // // // // // // // // // // // // // // // // //   card: {
// // // // // // // // // // // // // // // // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // // // // // // // // // // // // // // // //     borderRadius: 24,
// // // // // // // // // // // // // // // // // // // // // // //     width: "100%",
// // // // // // // // // // // // // // // // // // // // // // //     maxWidth: 340,
// // // // // // // // // // // // // // // // // // // // // // //     overflow: "hidden",
// // // // // // // // // // // // // // // // // // // // // // //     // subtle shadow
// // // // // // // // // // // // // // // // // // // // // // //     shadowColor: "#000",
// // // // // // // // // // // // // // // // // // // // // // //     shadowOffset: { width: 0, height: 8 },
// // // // // // // // // // // // // // // // // // // // // // //     shadowOpacity: 0.18,
// // // // // // // // // // // // // // // // // // // // // // //     shadowRadius: 24,
// // // // // // // // // // // // // // // // // // // // // // //     elevation: 12,
// // // // // // // // // // // // // // // // // // // // // // //   },

// // // // // // // // // // // // // // // // // // // // // // //   // ── Banner ──────────────────────────────
// // // // // // // // // // // // // // // // // // // // // // //   banner: {
// // // // // // // // // // // // // // // // // // // // // // //     backgroundColor: "#E24B4A",
// // // // // // // // // // // // // // // // // // // // // // //     paddingHorizontal: 20,
// // // // // // // // // // // // // // // // // // // // // // //     paddingTop: 22,
// // // // // // // // // // // // // // // // // // // // // // //     paddingBottom: 28,   // extra bottom so curve sits flush
// // // // // // // // // // // // // // // // // // // // // // //     position: "relative",
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   bannerRow: {
// // // // // // // // // // // // // // // // // // // // // // //     flexDirection: "row",
// // // // // // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // // // // // //     gap: 14,
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   bannerIcon: {
// // // // // // // // // // // // // // // // // // // // // // //     width: 46,
// // // // // // // // // // // // // // // // // // // // // // //     height: 46,
// // // // // // // // // // // // // // // // // // // // // // //     borderRadius: 23,
// // // // // // // // // // // // // // // // // // // // // // //     backgroundColor: "rgba(255,255,255,0.22)",
// // // // // // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // // // // // // //     flexShrink: 0,
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   // Simple triangle shape via borders
// // // // // // // // // // // // // // // // // // // // // // //   warningTriangle: {
// // // // // // // // // // // // // // // // // // // // // // //     width: 26,
// // // // // // // // // // // // // // // // // // // // // // //     height: 26,
// // // // // // // // // // // // // // // // // // // // // // //     borderRadius: 6,
// // // // // // // // // // // // // // // // // // // // // // //     backgroundColor: "rgba(255,255,255,0.3)",
// // // // // // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   warningExclaim: {
// // // // // // // // // // // // // // // // // // // // // // //     color: "#fff",
// // // // // // // // // // // // // // // // // // // // // // //     fontSize: 16,
// // // // // // // // // // // // // // // // // // // // // // //     fontWeight: "700",
// // // // // // // // // // // // // // // // // // // // // // //     lineHeight: 20,
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   bannerTitle: {
// // // // // // // // // // // // // // // // // // // // // // //     fontSize: 16,
// // // // // // // // // // // // // // // // // // // // // // //     fontWeight: "700",
// // // // // // // // // // // // // // // // // // // // // // //     color: "#fff",
// // // // // // // // // // // // // // // // // // // // // // //     lineHeight: 20,
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   bannerSub: {
// // // // // // // // // // // // // // // // // // // // // // //     fontSize: 12,
// // // // // // // // // // // // // // // // // // // // // // //     color: "rgba(255,255,255,0.78)",
// // // // // // // // // // // // // // // // // // // // // // //     marginTop: 3,
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   closeBtn: {
// // // // // // // // // // // // // // // // // // // // // // //     width: 30,
// // // // // // // // // // // // // // // // // // // // // // //     height: 30,
// // // // // // // // // // // // // // // // // // // // // // //     borderRadius: 15,
// // // // // // // // // // // // // // // // // // // // // // //     backgroundColor: "rgba(255,255,255,0.2)",
// // // // // // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // // // // // // //     alignSelf: "flex-start",
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   closeBtnText: {
// // // // // // // // // // // // // // // // // // // // // // //     color: "#fff",
// // // // // // // // // // // // // // // // // // // // // // //     fontSize: 13,
// // // // // // // // // // // // // // // // // // // // // // //     fontWeight: "700",
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   // White curved bottom edge of banner
// // // // // // // // // // // // // // // // // // // // // // //   bannerCurve: {
// // // // // // // // // // // // // // // // // // // // // // //     position: "absolute",
// // // // // // // // // // // // // // // // // // // // // // //     bottom: 0,
// // // // // // // // // // // // // // // // // // // // // // //     left: 0,
// // // // // // // // // // // // // // // // // // // // // // //     right: 0,
// // // // // // // // // // // // // // // // // // // // // // //     height: 18,
// // // // // // // // // // // // // // // // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // // // // // // // // // // // // // // // //     borderTopLeftRadius: 18,
// // // // // // // // // // // // // // // // // // // // // // //     borderTopRightRadius: 18,
// // // // // // // // // // // // // // // // // // // // // // //   },

// // // // // // // // // // // // // // // // // // // // // // //   // ── Section label + count ────────────────
// // // // // // // // // // // // // // // // // // // // // // //   countRow: {
// // // // // // // // // // // // // // // // // // // // // // //     flexDirection: "row",
// // // // // // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // // // // // //     justifyContent: "space-between",
// // // // // // // // // // // // // // // // // // // // // // //     paddingHorizontal: 20,
// // // // // // // // // // // // // // // // // // // // // // //     paddingTop: 6,
// // // // // // // // // // // // // // // // // // // // // // //     paddingBottom: 10,
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   sectionLabel: {
// // // // // // // // // // // // // // // // // // // // // // //     fontSize: 11,
// // // // // // // // // // // // // // // // // // // // // // //     fontWeight: "700",
// // // // // // // // // // // // // // // // // // // // // // //     color: "#999",
// // // // // // // // // // // // // // // // // // // // // // //     letterSpacing: 0.6,
// // // // // // // // // // // // // // // // // // // // // // //     textTransform: "uppercase",
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   countBadge: {
// // // // // // // // // // // // // // // // // // // // // // //     backgroundColor: "#FCEBEB",
// // // // // // // // // // // // // // // // // // // // // // //     borderRadius: 10,
// // // // // // // // // // // // // // // // // // // // // // //     paddingHorizontal: 9,
// // // // // // // // // // // // // // // // // // // // // // //     paddingVertical: 2,
// // // // // // // // // // // // // // // // // // // // // // //     borderWidth: 0.5,
// // // // // // // // // // // // // // // // // // // // // // //     borderColor: "#F7C1C1",
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   countBadgeText: {
// // // // // // // // // // // // // // // // // // // // // // //     fontSize: 12,
// // // // // // // // // // // // // // // // // // // // // // //     fontWeight: "700",
// // // // // // // // // // // // // // // // // // // // // // //     color: "#E24B4A",
// // // // // // // // // // // // // // // // // // // // // // //   },

// // // // // // // // // // // // // // // // // // // // // // //   // ── Field list ───────────────────────────
// // // // // // // // // // // // // // // // // // // // // // //   listScroll: {
// // // // // // // // // // // // // // // // // // // // // // //     maxHeight: 230,
// // // // // // // // // // // // // // // // // // // // // // //     paddingHorizontal: 20,
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   listContent: {
// // // // // // // // // // // // // // // // // // // // // // //     gap: 7,
// // // // // // // // // // // // // // // // // // // // // // //     paddingBottom: 4,
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   fieldRow: {
// // // // // // // // // // // // // // // // // // // // // // //     flexDirection: "row",
// // // // // // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // // // // // //     gap: 10,
// // // // // // // // // // // // // // // // // // // // // // //     paddingVertical: 10,
// // // // // // // // // // // // // // // // // // // // // // //     paddingHorizontal: 12,
// // // // // // // // // // // // // // // // // // // // // // //     backgroundColor: "#FCEBEB",
// // // // // // // // // // // // // // // // // // // // // // //     borderRadius: 11,
// // // // // // // // // // // // // // // // // // // // // // //     borderWidth: 0.5,
// // // // // // // // // // // // // // // // // // // // // // //     borderColor: "#F7C1C1",
// // // // // // // // // // // // // // // // // // // // // // //     marginBottom: 7,
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   fieldDot: {
// // // // // // // // // // // // // // // // // // // // // // //     width: 22,
// // // // // // // // // // // // // // // // // // // // // // //     height: 22,
// // // // // // // // // // // // // // // // // // // // // // //     borderRadius: 11,
// // // // // // // // // // // // // // // // // // // // // // //     backgroundColor: "#E24B4A",
// // // // // // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // // // // // // //     flexShrink: 0,
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   fieldDotText: {
// // // // // // // // // // // // // // // // // // // // // // //     color: "#fff",
// // // // // // // // // // // // // // // // // // // // // // //     fontSize: 10,
// // // // // // // // // // // // // // // // // // // // // // //     fontWeight: "800",
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   fieldText: {
// // // // // // // // // // // // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // // // // // // // // // // // //     fontSize: 13,
// // // // // // // // // // // // // // // // // // // // // // //     fontWeight: "600",
// // // // // // // // // // // // // // // // // // // // // // //     color: "#791F1F",
// // // // // // // // // // // // // // // // // // // // // // //   },

// // // // // // // // // // // // // // // // // // // // // // //   // EN badge (blue tint)
// // // // // // // // // // // // // // // // // // // // // // //   langBadge: {
// // // // // // // // // // // // // // // // // // // // // // //     backgroundColor: "#E6F1FB",
// // // // // // // // // // // // // // // // // // // // // // //     borderRadius: 6,
// // // // // // // // // // // // // // // // // // // // // // //     paddingHorizontal: 8,
// // // // // // // // // // // // // // // // // // // // // // //     paddingVertical: 2,
// // // // // // // // // // // // // // // // // // // // // // //     borderWidth: 0.5,
// // // // // // // // // // // // // // // // // // // // // // //     borderColor: "#B5D4F4",
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   langBadgeText: {
// // // // // // // // // // // // // // // // // // // // // // //     fontSize: 11,
// // // // // // // // // // // // // // // // // // // // // // //     fontWeight: "700",
// // // // // // // // // // // // // // // // // // // // // // //     color: "#185FA5",
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   // MR badge (amber tint)
// // // // // // // // // // // // // // // // // // // // // // //   langBadgeMr: {
// // // // // // // // // // // // // // // // // // // // // // //     backgroundColor: "#FAEEDA",
// // // // // // // // // // // // // // // // // // // // // // //     borderColor: "#FAC775",
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   langBadgeTextMr: {
// // // // // // // // // // // // // // // // // // // // // // //     color: "#854F0B",
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   // Required badge (red)
// // // // // // // // // // // // // // // // // // // // // // //   reqBadge: {
// // // // // // // // // // // // // // // // // // // // // // //     backgroundColor: "#F7C1C1",
// // // // // // // // // // // // // // // // // // // // // // //     borderRadius: 6,
// // // // // // // // // // // // // // // // // // // // // // //     paddingHorizontal: 8,
// // // // // // // // // // // // // // // // // // // // // // //     paddingVertical: 2,
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   reqBadgeText: {
// // // // // // // // // // // // // // // // // // // // // // //     fontSize: 11,
// // // // // // // // // // // // // // // // // // // // // // //     fontWeight: "600",
// // // // // // // // // // // // // // // // // // // // // // //     color: "#A32D2D",
// // // // // // // // // // // // // // // // // // // // // // //   },

// // // // // // // // // // // // // // // // // // // // // // //   // ── Footer ───────────────────────────────
// // // // // // // // // // // // // // // // // // // // // // //   divider: {
// // // // // // // // // // // // // // // // // // // // // // //     height: 0.5,
// // // // // // // // // // // // // // // // // // // // // // //     backgroundColor: "#eee",
// // // // // // // // // // // // // // // // // // // // // // //     marginHorizontal: 0,
// // // // // // // // // // // // // // // // // // // // // // //     marginTop: 12,
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   btnRow: {
// // // // // // // // // // // // // // // // // // // // // // //     flexDirection: "row",
// // // // // // // // // // // // // // // // // // // // // // //     gap: 10,
// // // // // // // // // // // // // // // // // // // // // // //     padding: 16,
// // // // // // // // // // // // // // // // // // // // // // //     paddingBottom: 20,
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   dismissBtn: {
// // // // // // // // // // // // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // // // // // // // // // // // //     paddingVertical: 12,
// // // // // // // // // // // // // // // // // // // // // // //     borderRadius: 12,
// // // // // // // // // // // // // // // // // // // // // // //     borderWidth: 0.5,
// // // // // // // // // // // // // // // // // // // // // // //     borderColor: "#ddd",
// // // // // // // // // // // // // // // // // // // // // // //     backgroundColor: "#f5f5f5",
// // // // // // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   dismissText: {
// // // // // // // // // // // // // // // // // // // // // // //     fontSize: 14,
// // // // // // // // // // // // // // // // // // // // // // //     fontWeight: "600",
// // // // // // // // // // // // // // // // // // // // // // //     color: "#777",
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   fixBtn: {
// // // // // // // // // // // // // // // // // // // // // // //     flex: 2,
// // // // // // // // // // // // // // // // // // // // // // //     paddingVertical: 12,
// // // // // // // // // // // // // // // // // // // // // // //     borderRadius: 12,
// // // // // // // // // // // // // // // // // // // // // // //     backgroundColor: "#f97316",
// // // // // // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // //   fixText: {
// // // // // // // // // // // // // // // // // // // // // // //     fontSize: 14,
// // // // // // // // // // // // // // // // // // // // // // //     fontWeight: "700",
// // // // // // // // // // // // // // // // // // // // // // //     color: "#fff",
// // // // // // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // // // // // };




// // // // // // // // // // // // // // // // // // // // // // // 3
// // // // // // // // // // // // // // // // // // // // // // import React, { useState, forwardRef, useImperativeHandle } from "react";
// // // // // // // // // // // // // // // // // // // // // // import {
// // // // // // // // // // // // // // // // // // // // // //   View, Text, ScrollView, TouchableOpacity,
// // // // // // // // // // // // // // // // // // // // // //   TextInput, Image, Modal,
// // // // // // // // // // // // // // // // // // // // // // } from "react-native";
// // // // // // // // // // // // // // // // // // // // // // import * as ImagePicker from "expo-image-picker";
// // // // // // // // // // // // // // // // // // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // // // // // // // // // // // // // // // // // const REQUIRED_FIELDS = [
// // // // // // // // // // // // // // // // // // // // // //   { key: "firstName",    label: "First Name",           lang: "EN" },
// // // // // // // // // // // // // // // // // // // // // //   { key: "middleName",   label: "Middle Name",          lang: "EN" },
// // // // // // // // // // // // // // // // // // // // // //   { key: "lastName",     label: "Last Name / Surname",  lang: "EN" },
// // // // // // // // // // // // // // // // // // // // // //   { key: "firstNameMr",  label: "पहिले नाव",            lang: "MR" },
// // // // // // // // // // // // // // // // // // // // // //   { key: "middleNameMr", label: "वडिलांचे नाव",         lang: "MR" },
// // // // // // // // // // // // // // // // // // // // // //   { key: "lastNameMr",   label: "शेवटचे नाव / आडनाव",  lang: "MR" },
// // // // // // // // // // // // // // // // // // // // // //   { key: "birthName",    label: "जन्म नाव",             lang: "MR" },
// // // // // // // // // // // // // // // // // // // // // //   { key: "birthNameEn",  label: "Birth Name",           lang: "EN" },
// // // // // // // // // // // // // // // // // // // // // //   { key: "candidateType",label: "Candidate Type",       lang: "EN" },
// // // // // // // // // // // // // // // // // // // // // //   { key: "photo",        label: "Photo",                lang: null  },
// // // // // // // // // // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // // // // // // // // // const Step1 = forwardRef(({ data, setData }, ref) => {
// // // // // // // // // // // // // // // // // // // // // //   const [errorVisible, setErrorVisible] = useState(false);
// // // // // // // // // // // // // // // // // // // // // //   const [missingFields, setMissingFields] = useState([]);

// // // // // // // // // // // // // // // // // // // // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// // // // // // // // // // // // // // // // // // // // // //   const setEnglish = (key) => (val) => {
// // // // // // // // // // // // // // // // // // // // // //     const filtered = val.replace(/[^\x00-\x7F]/g, "");
// // // // // // // // // // // // // // // // // // // // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // // // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // // // // //   const setMarathi = (key) => (val) => {
// // // // // // // // // // // // // // // // // // // // // //     const filtered = val.replace(/[^\u0900-\u097F\s]/g, "");
// // // // // // // // // // // // // // // // // // // // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // // // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // // // // //   /**
// // // // // // // // // // // // // // // // // // // // // //    * VALIDATION LOGIC
// // // // // // // // // // // // // // // // // // // // // //    * This shows the popup if fields are missing.
// // // // // // // // // // // // // // // // // // // // // //    * Return true/false so the parent knows if it can proceed.
// // // // // // // // // // // // // // // // // // // // // //    */
// // // // // // // // // // // // // // // // // // // // // //   const validate = () => {
// // // // // // // // // // // // // // // // // // // // // //     const missing = REQUIRED_FIELDS.filter(
// // // // // // // // // // // // // // // // // // // // // //       (f) => !data[f.key] || data[f.key].toString().trim() === ""
// // // // // // // // // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // // // // // // // //     if (missing.length > 0) {
// // // // // // // // // // // // // // // // // // // // // //       setMissingFields(missing);
// // // // // // // // // // // // // // // // // // // // // //       setErrorVisible(true); // Trigger the popup
// // // // // // // // // // // // // // // // // // // // // //       return false; 
// // // // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // // //     return true; 
// // // // // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // // // // //   useImperativeHandle(ref, () => ({ validate }));

// // // // // // // // // // // // // // // // // // // // // //   const pickImage = async () => {
// // // // // // // // // // // // // // // // // // // // // //     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // // // // // // // // // // // // // // // // // // // //     if (permissionResult.granted === false) {
// // // // // // // // // // // // // // // // // // // // // //       setMissingFields([{ label: "Permission Required: Allow photo access.", lang: null }]);
// // // // // // // // // // // // // // // // // // // // // //       setErrorVisible(true);
// // // // // // // // // // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // // // // //     const result = await ImagePicker.launchImageLibraryAsync({
// // // // // // // // // // // // // // // // // // // // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // // // // // // // // // // // // // // // // // // // //       allowsEditing: true,
// // // // // // // // // // // // // // // // // // // // // //       aspect: [4, 4],
// // // // // // // // // // // // // // // // // // // // // //       quality: 0.8,
// // // // // // // // // // // // // // // // // // // // // //     });
// // // // // // // // // // // // // // // // // // // // // //     if (!result.canceled) set("photo")(result.assets[0].uri);
// // // // // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // // // // //   const isFieldMissing = (key) => missingFields.some((f) => f.key === key);

// // // // // // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // // // // // //     <>
// // // // // // // // // // // // // // // // // // // // // //       {/* ── VALIDATION POPUP (REQUIRED FIELDS ALERT) ── */}
// // // // // // // // // // // // // // // // // // // // // //       <Modal transparent visible={errorVisible} animationType="fade" onRequestClose={() => setErrorVisible(false)}>
// // // // // // // // // // // // // // // // // // // // // //         <View style={popStyles.overlay}>
// // // // // // // // // // // // // // // // // // // // // //           <View style={popStyles.card}>
// // // // // // // // // // // // // // // // // // // // // //             <View style={popStyles.banner}>
// // // // // // // // // // // // // // // // // // // // // //               <View style={popStyles.bannerRow}>
// // // // // // // // // // // // // // // // // // // // // //                 <View style={popStyles.bannerIcon}>
// // // // // // // // // // // // // // // // // // // // // //                    <Text style={{color: '#fff', fontWeight: 'bold'}}>!</Text>
// // // // // // // // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // // // // // // // //                 <View style={{ flex: 1 }}>
// // // // // // // // // // // // // // // // // // // // // //                   <Text style={popStyles.bannerTitle}>Required fields missing</Text>
// // // // // // // // // // // // // // // // // // // // // //                   <Text style={popStyles.bannerSub}>Fill in all fields to continue</Text>
// // // // // // // // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // // // // // // // //                 <TouchableOpacity onPress={() => setErrorVisible(false)} style={popStyles.closeBtn}>
// // // // // // // // // // // // // // // // // // // // // //                   <Text style={popStyles.closeBtnText}>✕</Text>
// // // // // // // // // // // // // // // // // // // // // //                 </TouchableOpacity>
// // // // // // // // // // // // // // // // // // // // // //               </View>
// // // // // // // // // // // // // // // // // // // // // //               <View style={popStyles.bannerCurve} />
// // // // // // // // // // // // // // // // // // // // // //             </View>

// // // // // // // // // // // // // // // // // // // // // //             <View style={popStyles.countRow}>
// // // // // // // // // // // // // // // // // // // // // //               <Text style={popStyles.sectionLabel}>Incomplete fields</Text>
// // // // // // // // // // // // // // // // // // // // // //               <View style={popStyles.countBadge}>
// // // // // // // // // // // // // // // // // // // // // //                 <Text style={popStyles.countBadgeText}>{missingFields.length}</Text>
// // // // // // // // // // // // // // // // // // // // // //               </View>
// // // // // // // // // // // // // // // // // // // // // //             </View>

// // // // // // // // // // // // // // // // // // // // // //             <ScrollView style={popStyles.listScroll} contentContainerStyle={popStyles.listContent} showsVerticalScrollIndicator={false}>
// // // // // // // // // // // // // // // // // // // // // //               {missingFields.map((f, i) => (
// // // // // // // // // // // // // // // // // // // // // //                 <View key={i} style={popStyles.fieldRow}>
// // // // // // // // // // // // // // // // // // // // // //                   <View style={popStyles.fieldDot}><Text style={popStyles.fieldDotText}>✕</Text></View>
// // // // // // // // // // // // // // // // // // // // // //                   <Text style={popStyles.fieldText}>{f.label}</Text>
// // // // // // // // // // // // // // // // // // // // // //                   {f.lang && (
// // // // // // // // // // // // // // // // // // // // // //                     <View style={[popStyles.langBadge, f.lang === "MR" && popStyles.langBadgeMr]}>
// // // // // // // // // // // // // // // // // // // // // //                       <Text style={[popStyles.langBadgeText, f.lang === "MR" && popStyles.langBadgeTextMr]}>{f.lang}</Text>
// // // // // // // // // // // // // // // // // // // // // //                     </View>
// // // // // // // // // // // // // // // // // // // // // //                   )}
// // // // // // // // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // // // // // // // //               ))}
// // // // // // // // // // // // // // // // // // // // // //             </ScrollView>

// // // // // // // // // // // // // // // // // // // // // //             <View style={popStyles.btnRow}>
// // // // // // // // // // // // // // // // // // // // // //               <TouchableOpacity style={popStyles.fixBtn} onPress={() => setErrorVisible(false)}>
// // // // // // // // // // // // // // // // // // // // // //                 <Text style={popStyles.fixText}>Got it, I'll fix it</Text>
// // // // // // // // // // // // // // // // // // // // // //               </TouchableOpacity>
// // // // // // // // // // // // // // // // // // // // // //             </View>
// // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // //       </Modal>

// // // // // // // // // // // // // // // // // // // // // //       {/* ── MAIN FORM ── */}
// // // // // // // // // // // // // // // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false}>
// // // // // // // // // // // // // // // // // // // // // //         <SectionHeader title="Basic Information - (Application Number : F2788)" />

// // // // // // // // // // // // // // // // // // // // // //         <View style={styles.row3}>
// // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // // // // // // // // // // // // // //             <Field label="First Name" required value={data.firstName} onChangeText={setEnglish("firstName")} placeholder="English" inputStyle={isFieldMissing("firstName") && fieldErrStyle} />
// // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // // // // // // // // // // // // // //             <Field label="Middle Name" required value={data.middleName} onChangeText={setEnglish("middleName")} placeholder="English" inputStyle={isFieldMissing("middleName") && fieldErrStyle} />
// // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // // // // // // // // // // // // // //             <Field label="Last Name / Surname" required value={data.lastName} onChangeText={setEnglish("lastName")} placeholder="English" inputStyle={isFieldMissing("lastName") && fieldErrStyle} />
// // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // // // // //         <View style={styles.row3}>
// // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // // // // // // // // // // // // // //             <Field label="पहिले नाव" required value={data.firstNameMr} onChangeText={setMarathi("firstNameMr")} placeholder="मराठी" inputStyle={isFieldMissing("firstNameMr") && fieldErrStyle} />
// // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // // // // // // // // // // // // // //             <Field label="वडिलांचे नाव" required value={data.middleNameMr} onChangeText={setMarathi("middleNameMr")} placeholder="मराठी" inputStyle={isFieldMissing("middleNameMr") && fieldErrStyle} />
// // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // // // // // // // // // // // // // //             <Field label="शेवटचे नाव / आडनाव" required value={data.lastNameMr} onChangeText={setMarathi("lastNameMr")} placeholder="मराठी" inputStyle={isFieldMissing("lastNameMr") && fieldErrStyle} />
// // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // // // // //         <View style={styles.row2}>
// // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 8 }}>
// // // // // // // // // // // // // // // // // // // // // //             <Field label="जन्म नाव" required value={data.birthName} onChangeText={setMarathi("birthName")} placeholder="मराठी" inputStyle={isFieldMissing("birthName") && fieldErrStyle} />
// // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // // // // // // // // // // // // // // // // // //             <Field label="Birth Name" required value={data.birthNameEn} onChangeText={setEnglish("birthNameEn")} placeholder="English" inputStyle={isFieldMissing("birthNameEn") && fieldErrStyle} />
// // // // // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // // // // //         <Field label="Candidate Type" required value={data.candidateType} onChangeText={set("candidateType")} placeholder="e.g. वधू / वर" inputStyle={isFieldMissing("candidateType") && fieldErrStyle} />

// // // // // // // // // // // // // // // // // // // // // //         <View style={{ marginBottom: 20 }}>
// // // // // // // // // // // // // // // // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>Photo <Text style={{ color: "red" }}>*</Text></Text>
// // // // // // // // // // // // // // // // // // // // // //           <TouchableOpacity style={[styles.photoBtn, data.photo && { padding: 0, overflow: "hidden" }, isFieldMissing("photo") && fieldErrStyle]} onPress={pickImage}>
// // // // // // // // // // // // // // // // // // // // // //             {data.photo ? <Image source={{ uri: data.photo }} style={{ width: "100%", height: 120, resizeMode: "cover" }} /> : <Text style={styles.photoBtnText}>📷 Choose Photo</Text>}
// // // // // // // // // // // // // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // // // // //         <View style={[styles.marathiPadWrap, { marginBottom: 30 }]}>
// // // // // // // // // // // // // // // // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>(मराठी) Marathi Type Box</Text>
// // // // // // // // // // // // // // // // // // // // // //           <TextInput style={[styles.marathiPad, { height: 80 }]} multiline placeholder="मराठी मध्ये टाईप करा..." value={data.marathiNote} onChangeText={setMarathi("marathiNote")} />
// // // // // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // // // // //       </ScrollView>
// // // // // // // // // // // // // // // // // // // // // //     </>
// // // // // // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // // // // // // // export default Step1;

// // // // // // // // // // // // // // // // // // // // // // // ─── STYLES ───
// // // // // // // // // // // // // // // // // // // // // // const fieldErrStyle = { borderWidth: 1.5, borderColor: "#E24B4A", backgroundColor: "#FFF5F5" };

// // // // // // // // // // // // // // // // // // // // // // const popStyles = {
// // // // // // // // // // // // // // // // // // // // // //   overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "center", alignItems: "center", padding: 20 },
// // // // // // // // // // // // // // // // // // // // // //   card: { backgroundColor: "#fff", borderRadius: 24, width: "100%", maxWidth: 340, overflow: "hidden" },
// // // // // // // // // // // // // // // // // // // // // //   banner: { backgroundColor: "#E24B4A", padding: 20, paddingBottom: 30 },
// // // // // // // // // // // // // // // // // // // // // //   bannerRow: { flexDirection: "row", alignItems: "center", gap: 12 },
// // // // // // // // // // // // // // // // // // // // // //   bannerIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: "rgba(255,255,255,0.2)", alignItems: "center", justifyContent: "center" },
// // // // // // // // // // // // // // // // // // // // // //   bannerTitle: { fontSize: 16, fontWeight: "700", color: "#fff" },
// // // // // // // // // // // // // // // // // // // // // //   bannerSub: { fontSize: 12, color: "rgba(255,255,255,0.8)" },
// // // // // // // // // // // // // // // // // // // // // //   closeBtn: { padding: 5 },
// // // // // // // // // // // // // // // // // // // // // //   closeBtnText: { color: "#fff", fontWeight: "bold" },
// // // // // // // // // // // // // // // // // // // // // //   bannerCurve: { position: "absolute", bottom: 0, left: 0, right: 0, height: 15, backgroundColor: "#fff", borderTopLeftRadius: 15, borderTopRightRadius: 15 },
// // // // // // // // // // // // // // // // // // // // // //   countRow: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 10 },
// // // // // // // // // // // // // // // // // // // // // //   sectionLabel: { fontSize: 11, fontWeight: "bold", color: "#999", textTransform: "uppercase" },
// // // // // // // // // // // // // // // // // // // // // //   countBadge: { backgroundColor: "#FCEBEB", borderRadius: 10, paddingHorizontal: 8, paddingVertical: 2 },
// // // // // // // // // // // // // // // // // // // // // //   countBadgeText: { fontSize: 12, color: "#E24B4A", fontWeight: "bold" },
// // // // // // // // // // // // // // // // // // // // // //   listScroll: { maxHeight: 200, paddingHorizontal: 20 },
// // // // // // // // // // // // // // // // // // // // // //   listContent: { gap: 8 },
// // // // // // // // // // // // // // // // // // // // // //   fieldRow: { flexDirection: "row", alignItems: "center", gap: 10, padding: 10, backgroundColor: "#F9F9F9", borderRadius: 10 },
// // // // // // // // // // // // // // // // // // // // // //   fieldDot: { width: 18, height: 18, borderRadius: 9, backgroundColor: "#E24B4A", alignItems: "center", justifyContent: "center" },
// // // // // // // // // // // // // // // // // // // // // //   fieldDotText: { color: "#fff", fontSize: 10, fontWeight: "bold" },
// // // // // // // // // // // // // // // // // // // // // //   fieldText: { flex: 1, fontSize: 13, color: "#333", fontWeight: "500" },
// // // // // // // // // // // // // // // // // // // // // //   langBadge: { backgroundColor: "#E6F1FB", paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
// // // // // // // // // // // // // // // // // // // // // //   langBadgeMr: { backgroundColor: "#FAEEDA" },
// // // // // // // // // // // // // // // // // // // // // //   langBadgeText: { fontSize: 10, fontWeight: "bold", color: "#185FA5" },
// // // // // // // // // // // // // // // // // // // // // //   langBadgeTextMr: { color: "#854F0B" },
// // // // // // // // // // // // // // // // // // // // // //   btnRow: { padding: 20 },
// // // // // // // // // // // // // // // // // // // // // //   fixBtn: { backgroundColor: "#f97316", paddingVertical: 14, borderRadius: 12, alignItems: "center" },
// // // // // // // // // // // // // // // // // // // // // //   fixText: { color: "#fff", fontWeight: "bold", fontSize: 14 },
// // // // // // // // // // // // // // // // // // // // // // };
















// // // // // // // // // // // // // // // // // // // // Step1.jsx
// // // // // // // // // // // // // // // // // // // import React, { useState, forwardRef, useImperativeHandle } from "react";
// // // // // // // // // // // // // // // // // // // import {
// // // // // // // // // // // // // // // // // // //   View,
// // // // // // // // // // // // // // // // // // //   Text,
// // // // // // // // // // // // // // // // // // //   ScrollView,
// // // // // // // // // // // // // // // // // // //   TouchableOpacity,
// // // // // // // // // // // // // // // // // // //   TextInput,
// // // // // // // // // // // // // // // // // // //   Image,
// // // // // // // // // // // // // // // // // // //   Modal,
// // // // // // // // // // // // // // // // // // //   StyleSheet,
// // // // // // // // // // // // // // // // // // // } from "react-native";
// // // // // // // // // // // // // // // // // // // import * as ImagePicker from "expo-image-picker";
// // // // // // // // // // // // // // // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // // // // // // // // // // // // // // const REQUIRED_FIELDS = [
// // // // // // // // // // // // // // // // // // //   { key: "firstName",     label: "First Name",           lang: "EN" },
// // // // // // // // // // // // // // // // // // //   { key: "middleName",    label: "Middle Name",          lang: "EN" },
// // // // // // // // // // // // // // // // // // //   { key: "lastName",      label: "Last Name / Surname",  lang: "EN" },
// // // // // // // // // // // // // // // // // // //   { key: "firstNameMr",   label: "पहिले नाव",            lang: "MR" },
// // // // // // // // // // // // // // // // // // //   { key: "middleNameMr",  label: "वडिलांचे नाव",         lang: "MR" },
// // // // // // // // // // // // // // // // // // //   { key: "lastNameMr",    label: "शेवटचे नाव / आडनाव",  lang: "MR" },
// // // // // // // // // // // // // // // // // // //   { key: "birthName",     label: "जन्म नाव",             lang: "MR" },
// // // // // // // // // // // // // // // // // // //   { key: "birthNameEn",   label: "Birth Name",           lang: "EN" },
// // // // // // // // // // // // // // // // // // //   { key: "candidateType", label: "Candidate Type",       lang: "EN" },
// // // // // // // // // // // // // // // // // // //   { key: "photo",         label: "Photo",                lang: null  },
// // // // // // // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // // // // // // const Step1 = forwardRef(({ data, setData, onNext }, ref) => {
// // // // // // // // // // // // // // // // // // //   const [errorVisible, setErrorVisible] = useState(false);
// // // // // // // // // // // // // // // // // // //   const [missingFields, setMissingFields] = useState([]);

// // // // // // // // // // // // // // // // // // //   const set        = (key) => (val) => setData((p) => ({ ...p, [key]: val }));
// // // // // // // // // // // // // // // // // // //   const setEnglish = (key) => (val) =>
// // // // // // // // // // // // // // // // // // //     setData((p) => ({ ...p, [key]: val.replace(/[^\x00-\x7F]/g, "") }));
// // // // // // // // // // // // // // // // // // //   const setMarathi = (key) => (val) =>
// // // // // // // // // // // // // // // // // // //     setData((p) => ({ ...p, [key]: val.replace(/[^\u0900-\u097F\s]/g, "") }));

// // // // // // // // // // // // // // // // // // //   // ── validate: called by Next button & parent ref ──────────────────────────
// // // // // // // // // // // // // // // // // // //   const validate = () => {
// // // // // // // // // // // // // // // // // // //     const missing = REQUIRED_FIELDS.filter(
// // // // // // // // // // // // // // // // // // //       (f) => !data[f.key] || data[f.key].toString().trim() === ""
// // // // // // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // // // // //     if (missing.length > 0) {
// // // // // // // // // // // // // // // // // // //       setMissingFields(missing);
// // // // // // // // // // // // // // // // // // //       setErrorVisible(true);
// // // // // // // // // // // // // // // // // // //       return false;
// // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // //     return true;
// // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // //   // ── expose validate to parent via ref ─────────────────────────────────────
// // // // // // // // // // // // // // // // // // //   useImperativeHandle(ref, () => ({ validate }));

// // // // // // // // // // // // // // // // // // //   // ── Next button handler (self-contained) ──────────────────────────────────
// // // // // // // // // // // // // // // // // // //   const handleNext = () => {
// // // // // // // // // // // // // // // // // // //     const ok = validate();
// // // // // // // // // // // // // // // // // // //     if (ok && onNext) onNext(); // call parent's onNext only if valid
// // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // //   const pickImage = async () => {
// // // // // // // // // // // // // // // // // // //     const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // // // // // // // // // // // // // // // // //     if (!granted) {
// // // // // // // // // // // // // // // // // // //       setMissingFields([{ label: "Permission Required: Allow photo access.", lang: null }]);
// // // // // // // // // // // // // // // // // // //       setErrorVisible(true);
// // // // // // // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // // //     const result = await ImagePicker.launchImageLibraryAsync({
// // // // // // // // // // // // // // // // // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // // // // // // // // // // // // // // // // //       allowsEditing: true,
// // // // // // // // // // // // // // // // // // //       aspect: [4, 4],
// // // // // // // // // // // // // // // // // // //       quality: 0.8,
// // // // // // // // // // // // // // // // // // //     });
// // // // // // // // // // // // // // // // // // //     if (!result.canceled) set("photo")(result.assets[0].uri);
// // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // //   const isErr = (key) => missingFields.some((f) => f.key === key);

// // // // // // // // // // // // // // // // // // //   const missingPct =
// // // // // // // // // // // // // // // // // // //     REQUIRED_FIELDS.length > 0
// // // // // // // // // // // // // // // // // // //       ? `${Math.round((missingFields.length / REQUIRED_FIELDS.length) * 100)}%`
// // // // // // // // // // // // // // // // // // //       : "0%";

// // // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // // //     <>
// // // // // // // // // // // // // // // // // // //       {/* ═══════════════════════════════════════════
// // // // // // // // // // // // // // // // // // //           POPUP  —  shows only when Next pressed
// // // // // // // // // // // // // // // // // // //           and fields are empty
// // // // // // // // // // // // // // // // // // //       ═══════════════════════════════════════════ */}
// // // // // // // // // // // // // // // // // // //       <Modal
// // // // // // // // // // // // // // // // // // //         transparent
// // // // // // // // // // // // // // // // // // //         visible={errorVisible}
// // // // // // // // // // // // // // // // // // //         animationType="fade"
// // // // // // // // // // // // // // // // // // //         onRequestClose={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // // // //       >
// // // // // // // // // // // // // // // // // // //         <View style={pop.overlay}>
// // // // // // // // // // // // // // // // // // //           <View style={pop.card}>

// // // // // // // // // // // // // // // // // // //             {/* Purple banner */}
// // // // // // // // // // // // // // // // // // //             <View style={pop.banner}>

// // // // // // // // // // // // // // // // // // //               {/* Top row: icon + close */}
// // // // // // // // // // // // // // // // // // //               <View style={pop.bannerTopRow}>
// // // // // // // // // // // // // // // // // // //                 <View style={pop.ringOut}>
// // // // // // // // // // // // // // // // // // //                   <View style={pop.ringIn}>
// // // // // // // // // // // // // // // // // // //                     <Text style={pop.ringBang}>!</Text>
// // // // // // // // // // // // // // // // // // //                   </View>
// // // // // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // // // // //                 <TouchableOpacity
// // // // // // // // // // // // // // // // // // //                   onPress={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // // // //                   style={pop.xBtn}
// // // // // // // // // // // // // // // // // // //                   hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
// // // // // // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // // // // // //                   <Text style={pop.xBtnText}>✕</Text>
// // // // // // // // // // // // // // // // // // //                 </TouchableOpacity>
// // // // // // // // // // // // // // // // // // //               </View>

// // // // // // // // // // // // // // // // // // //               {/* Titles */}
// // // // // // // // // // // // // // // // // // //               <Text style={pop.bannerTitle}>Fields are missing</Text>
// // // // // // // // // // // // // // // // // // //               <Text style={pop.bannerSub}>Complete these before moving on</Text>

// // // // // // // // // // // // // // // // // // //               {/* White curved shelf with count */}
// // // // // // // // // // // // // // // // // // //               <View style={pop.shelf}>
// // // // // // // // // // // // // // // // // // //                 <Text style={pop.shelfLabel}>INCOMPLETE</Text>
// // // // // // // // // // // // // // // // // // //                 <View style={pop.countRow}>
// // // // // // // // // // // // // // // // // // //                   <Text style={pop.countBig}>{missingFields.length}</Text>
// // // // // // // // // // // // // // // // // // //                   <Text style={pop.countSlash}> / </Text>
// // // // // // // // // // // // // // // // // // //                   <Text style={pop.countTotal}>{REQUIRED_FIELDS.length}</Text>
// // // // // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // // // // //               </View>
// // // // // // // // // // // // // // // // // // //             </View>

// // // // // // // // // // // // // // // // // // //             {/* Red progress bar */}
// // // // // // // // // // // // // // // // // // //             <View style={pop.barWrap}>
// // // // // // // // // // // // // // // // // // //               <View style={pop.barTrack}>
// // // // // // // // // // // // // // // // // // //                 <View style={[pop.barFill, { width: missingPct }]} />
// // // // // // // // // // // // // // // // // // //               </View>
// // // // // // // // // // // // // // // // // // //             </View>

// // // // // // // // // // // // // // // // // // //             {/* Numbered missing field cards */}
// // // // // // // // // // // // // // // // // // //             <ScrollView
// // // // // // // // // // // // // // // // // // //               style={pop.listScroll}
// // // // // // // // // // // // // // // // // // //               contentContainerStyle={pop.listContent}
// // // // // // // // // // // // // // // // // // //               showsVerticalScrollIndicator={false}
// // // // // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // // // // //               {missingFields.map((f, i) => (
// // // // // // // // // // // // // // // // // // //                 <View key={i} style={pop.fieldCard}>
// // // // // // // // // // // // // // // // // // //                   <View style={f.lang === "MR" ? pop.accentMr : pop.accentEn} />
// // // // // // // // // // // // // // // // // // //                   <View style={pop.fieldBody}>
// // // // // // // // // // // // // // // // // // //                     <Text style={pop.fieldIdx}>
// // // // // // // // // // // // // // // // // // //                       {String(i + 1).padStart(2, "0")}
// // // // // // // // // // // // // // // // // // //                     </Text>
// // // // // // // // // // // // // // // // // // //                     <Text style={pop.fieldName}>{f.label}</Text>
// // // // // // // // // // // // // // // // // // //                     {f.lang && (
// // // // // // // // // // // // // // // // // // //                       <View style={[pop.langPill, f.lang === "MR" && pop.langPillMr]}>
// // // // // // // // // // // // // // // // // // //                         <Text style={[pop.langPillText, f.lang === "MR" && pop.langPillTextMr]}>
// // // // // // // // // // // // // // // // // // //                           {f.lang}
// // // // // // // // // // // // // // // // // // //                         </Text>
// // // // // // // // // // // // // // // // // // //                       </View>
// // // // // // // // // // // // // // // // // // //                     )}
// // // // // // // // // // // // // // // // // // //                   </View>
// // // // // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // // // // //               ))}
// // // // // // // // // // // // // // // // // // //             </ScrollView>

// // // // // // // // // // // // // // // // // // //             {/* Footer */}
// // // // // // // // // // // // // // // // // // //             <View style={pop.footer}>
// // // // // // // // // // // // // // // // // // //               <TouchableOpacity
// // // // // // // // // // // // // // // // // // //                 style={pop.fixBtn}
// // // // // // // // // // // // // // // // // // //                 activeOpacity={0.82}
// // // // // // // // // // // // // // // // // // //                 onPress={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // // // // // //                 <Text style={pop.fixBtnText}>Got it — I'll fix it</Text>
// // // // // // // // // // // // // // // // // // //               </TouchableOpacity>
// // // // // // // // // // // // // // // // // // //               <TouchableOpacity
// // // // // // // // // // // // // // // // // // //                 style={pop.dismissBtn}
// // // // // // // // // // // // // // // // // // //                 onPress={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // // // // // //                 <Text style={pop.dismissBtnText}>✕</Text>
// // // // // // // // // // // // // // // // // // //               </TouchableOpacity>
// // // // // // // // // // // // // // // // // // //             </View>

// // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // // //       </Modal>

// // // // // // // // // // // // // // // // // // //       {/* ═══════════════════════════════════════════
// // // // // // // // // // // // // // // // // // //           MAIN FORM
// // // // // // // // // // // // // // // // // // //       ═══════════════════════════════════════════ */}
// // // // // // // // // // // // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false}>
// // // // // // // // // // // // // // // // // // //         <SectionHeader title="Basic Information - (Application Number : F2788)" />

// // // // // // // // // // // // // // // // // // //         {/* English names */}
// // // // // // // // // // // // // // // // // // //         <View style={styles.row3}>
// // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // // // // // // // // // // //             <Field
// // // // // // // // // // // // // // // // // // //               label="First Name" required
// // // // // // // // // // // // // // // // // // //               value={data.firstName}
// // // // // // // // // // // // // // // // // // //               onChangeText={setEnglish("firstName")}
// // // // // // // // // // // // // // // // // // //               placeholder="English"
// // // // // // // // // // // // // // // // // // //               inputStyle={isErr("firstName") ? fieldErr : undefined}
// // // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // // // // // // // // // // //             <Field
// // // // // // // // // // // // // // // // // // //               label="Middle Name" required
// // // // // // // // // // // // // // // // // // //               value={data.middleName}
// // // // // // // // // // // // // // // // // // //               onChangeText={setEnglish("middleName")}
// // // // // // // // // // // // // // // // // // //               placeholder="English"
// // // // // // // // // // // // // // // // // // //               inputStyle={isErr("middleName") ? fieldErr : undefined}
// // // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // // // // // // // // // // //             <Field
// // // // // // // // // // // // // // // // // // //               label="Last Name / Surname" required
// // // // // // // // // // // // // // // // // // //               value={data.lastName}
// // // // // // // // // // // // // // // // // // //               onChangeText={setEnglish("lastName")}
// // // // // // // // // // // // // // // // // // //               placeholder="English"
// // // // // // // // // // // // // // // // // // //               inputStyle={isErr("lastName") ? fieldErr : undefined}
// // // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // //         {/* Marathi names */}
// // // // // // // // // // // // // // // // // // //         <View style={styles.row3}>
// // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // // // // // // // // // // //             <Field
// // // // // // // // // // // // // // // // // // //               label="पहिले नाव" required
// // // // // // // // // // // // // // // // // // //               value={data.firstNameMr}
// // // // // // // // // // // // // // // // // // //               onChangeText={setMarathi("firstNameMr")}
// // // // // // // // // // // // // // // // // // //               placeholder="मराठी"
// // // // // // // // // // // // // // // // // // //               inputStyle={isErr("firstNameMr") ? fieldErr : undefined}
// // // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // // // // // // // // // // //             <Field
// // // // // // // // // // // // // // // // // // //               label="वडिलांचे नाव" required
// // // // // // // // // // // // // // // // // // //               value={data.middleNameMr}
// // // // // // // // // // // // // // // // // // //               onChangeText={setMarathi("middleNameMr")}
// // // // // // // // // // // // // // // // // // //               placeholder="मराठी"
// // // // // // // // // // // // // // // // // // //               inputStyle={isErr("middleNameMr") ? fieldErr : undefined}
// // // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // // // // // // // // // // //             <Field
// // // // // // // // // // // // // // // // // // //               label="शेवटचे नाव / आडनाव" required
// // // // // // // // // // // // // // // // // // //               value={data.lastNameMr}
// // // // // // // // // // // // // // // // // // //               onChangeText={setMarathi("lastNameMr")}
// // // // // // // // // // // // // // // // // // //               placeholder="मराठी"
// // // // // // // // // // // // // // // // // // //               inputStyle={isErr("lastNameMr") ? fieldErr : undefined}
// // // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // //         {/* Birth names */}
// // // // // // // // // // // // // // // // // // //         <View style={styles.row2}>
// // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 8 }}>
// // // // // // // // // // // // // // // // // // //             <Field
// // // // // // // // // // // // // // // // // // //               label="जन्म नाव" required
// // // // // // // // // // // // // // // // // // //               value={data.birthName}
// // // // // // // // // // // // // // // // // // //               onChangeText={setMarathi("birthName")}
// // // // // // // // // // // // // // // // // // //               placeholder="मराठी"
// // // // // // // // // // // // // // // // // // //               inputStyle={isErr("birthName") ? fieldErr : undefined}
// // // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // // // // // // // // // // // // // // //             <Field
// // // // // // // // // // // // // // // // // // //               label="Birth Name" required
// // // // // // // // // // // // // // // // // // //               value={data.birthNameEn}
// // // // // // // // // // // // // // // // // // //               onChangeText={setEnglish("birthNameEn")}
// // // // // // // // // // // // // // // // // // //               placeholder="English"
// // // // // // // // // // // // // // // // // // //               inputStyle={isErr("birthNameEn") ? fieldErr : undefined}
// // // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // //         {/* Candidate type */}
// // // // // // // // // // // // // // // // // // //         <Field
// // // // // // // // // // // // // // // // // // //           label="Candidate Type" required
// // // // // // // // // // // // // // // // // // //           value={data.candidateType}
// // // // // // // // // // // // // // // // // // //           onChangeText={set("candidateType")}
// // // // // // // // // // // // // // // // // // //           placeholder="e.g. वधू / वर"
// // // // // // // // // // // // // // // // // // //           inputStyle={isErr("candidateType") ? fieldErr : undefined}
// // // // // // // // // // // // // // // // // // //         />

// // // // // // // // // // // // // // // // // // //         {/* Photo */}
// // // // // // // // // // // // // // // // // // //         <View style={{ marginBottom: 20 }}>
// // // // // // // // // // // // // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // // // // // // // // // // // // //             Photo <Text style={{ color: "red" }}>*</Text>
// // // // // // // // // // // // // // // // // // //           </Text>
// // // // // // // // // // // // // // // // // // //           <TouchableOpacity
// // // // // // // // // // // // // // // // // // //             style={[
// // // // // // // // // // // // // // // // // // //               styles.photoBtn,
// // // // // // // // // // // // // // // // // // //               data.photo && { padding: 0, overflow: "hidden" },
// // // // // // // // // // // // // // // // // // //               isErr("photo") && fieldErr,
// // // // // // // // // // // // // // // // // // //             ]}
// // // // // // // // // // // // // // // // // // //             onPress={pickImage}
// // // // // // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // // // // // //             {data.photo ? (
// // // // // // // // // // // // // // // // // // //               <Image
// // // // // // // // // // // // // // // // // // //                 source={{ uri: data.photo }}
// // // // // // // // // // // // // // // // // // //                 style={{ width: "100%", height: 120, resizeMode: "cover" }}
// // // // // // // // // // // // // // // // // // //               />
// // // // // // // // // // // // // // // // // // //             ) : (
// // // // // // // // // // // // // // // // // // //               <Text style={styles.photoBtnText}>📷 Choose Photo</Text>
// // // // // // // // // // // // // // // // // // //             )}
// // // // // // // // // // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // //         {/* Marathi scratch pad */}
// // // // // // // // // // // // // // // // // // //         <View style={[styles.marathiPadWrap, { marginBottom: 16 }]}>
// // // // // // // // // // // // // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // // // // // // // // // // // // //             (मराठी) Marathi Type Box
// // // // // // // // // // // // // // // // // // //           </Text>
// // // // // // // // // // // // // // // // // // //           <TextInput
// // // // // // // // // // // // // // // // // // //             style={[styles.marathiPad, { height: 80 }]}
// // // // // // // // // // // // // // // // // // //             multiline
// // // // // // // // // // // // // // // // // // //             placeholder="मराठी मध्ये टाईप करा..."
// // // // // // // // // // // // // // // // // // //             value={data.marathiNote}
// // // // // // // // // // // // // // // // // // //             onChangeText={setMarathi("marathiNote")}
// // // // // // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // // //         {/* ── NEXT BUTTON (built-in, triggers popup if fields empty) ── */}
// // // // // // // // // // // // // // // // // // //         <TouchableOpacity
// // // // // // // // // // // // // // // // // // //           style={btn.next}
// // // // // // // // // // // // // // // // // // //           activeOpacity={0.85}
// // // // // // // // // // // // // // // // // // //           onPress={handleNext}
// // // // // // // // // // // // // // // // // // //         >
// // // // // // // // // // // // // // // // // // //           <Text style={btn.nextText}>Next →</Text>
// // // // // // // // // // // // // // // // // // //         </TouchableOpacity>

// // // // // // // // // // // // // // // // // // //         <View style={{ height: 30 }} />
// // // // // // // // // // // // // // // // // // //       </ScrollView>
// // // // // // // // // // // // // // // // // // //     </>
// // // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // // // // export default Step1;

// // // // // // // // // // // // // // // // // // // // ─── field error style ────────────────────────────────────────────────────────
// // // // // // // // // // // // // // // // // // // const fieldErr = {
// // // // // // // // // // // // // // // // // // //   borderWidth: 1.5,
// // // // // // // // // // // // // // // // // // //   borderColor: "#E24B4A",
// // // // // // // // // // // // // // // // // // //   backgroundColor: "#FFF5F5",
// // // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // // // ─── next button style ────────────────────────────────────────────────────────
// // // // // // // // // // // // // // // // // // // const btn = StyleSheet.create({
// // // // // // // // // // // // // // // // // // //   next: {
// // // // // // // // // // // // // // // // // // //     backgroundColor: "#f97316",
// // // // // // // // // // // // // // // // // // //     borderRadius: 12,
// // // // // // // // // // // // // // // // // // //     paddingVertical: 15,
// // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // //     marginTop: 8,
// // // // // // // // // // // // // // // // // // //     marginBottom: 8,
// // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // //   nextText: {
// // // // // // // // // // // // // // // // // // //     color: "#fff",
// // // // // // // // // // // // // // // // // // //     fontSize: 16,
// // // // // // // // // // // // // // // // // // //     fontWeight: "700",
// // // // // // // // // // // // // // // // // // //     letterSpacing: 0.3,
// // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // // // // // ─── popup styles ─────────────────────────────────────────────────────────────
// // // // // // // // // // // // // // // // // // // const pop = StyleSheet.create({

// // // // // // // // // // // // // // // // // // //   overlay: {
// // // // // // // // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // // // // // // // //     backgroundColor: "rgba(0,0,0,0.55)",
// // // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // //     padding: 24,
// // // // // // // // // // // // // // // // // // //   },

// // // // // // // // // // // // // // // // // // //   card: {
// // // // // // // // // // // // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // // // // // // // // // // // //     borderRadius: 26,
// // // // // // // // // // // // // // // // // // //     width: "100%",
// // // // // // // // // // // // // // // // // // //     maxWidth: 340,
// // // // // // // // // // // // // // // // // // //     overflow: "hidden",
// // // // // // // // // // // // // // // // // // //   },

// // // // // // // // // // // // // // // // // // //   // ── purple top banner ────────────────────────────────────────────────────
// // // // // // // // // // // // // // // // // // //   banner: {
// // // // // // // // // // // // // // // // // // //     backgroundColor: "#7F77DD",
// // // // // // // // // // // // // // // // // // //     paddingHorizontal: 20,
// // // // // // // // // // // // // // // // // // //     paddingTop: 22,
// // // // // // // // // // // // // // // // // // //     paddingBottom: 0,
// // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // //   bannerTopRow: {
// // // // // // // // // // // // // // // // // // //     flexDirection: "row",
// // // // // // // // // // // // // // // // // // //     justifyContent: "space-between",
// // // // // // // // // // // // // // // // // // //     alignItems: "flex-start",
// // // // // // // // // // // // // // // // // // //     marginBottom: 16,
// // // // // // // // // // // // // // // // // // //   },

// // // // // // // // // // // // // // // // // // //   // double ring ! icon
// // // // // // // // // // // // // // // // // // //   ringOut: {
// // // // // // // // // // // // // // // // // // //     width: 46,
// // // // // // // // // // // // // // // // // // //     height: 46,
// // // // // // // // // // // // // // // // // // //     borderRadius: 23,
// // // // // // // // // // // // // // // // // // //     backgroundColor: "rgba(255,255,255,0.18)",
// // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // //   ringIn: {
// // // // // // // // // // // // // // // // // // //     width: 30,
// // // // // // // // // // // // // // // // // // //     height: 30,
// // // // // // // // // // // // // // // // // // //     borderRadius: 15,
// // // // // // // // // // // // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // //   ringBang: {
// // // // // // // // // // // // // // // // // // //     color: "#7F77DD",
// // // // // // // // // // // // // // // // // // //     fontSize: 17,
// // // // // // // // // // // // // // // // // // //     fontWeight: "800",
// // // // // // // // // // // // // // // // // // //     lineHeight: 19,
// // // // // // // // // // // // // // // // // // //   },

// // // // // // // // // // // // // // // // // // //   xBtn: {
// // // // // // // // // // // // // // // // // // //     width: 30,
// // // // // // // // // // // // // // // // // // //     height: 30,
// // // // // // // // // // // // // // // // // // //     borderRadius: 15,
// // // // // // // // // // // // // // // // // // //     backgroundColor: "rgba(255,255,255,0.15)",
// // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // //   xBtnText: { color: "#fff", fontSize: 13, fontWeight: "700" },

// // // // // // // // // // // // // // // // // // //   bannerTitle: { fontSize: 18, fontWeight: "700", color: "#fff", marginBottom: 4 },
// // // // // // // // // // // // // // // // // // //   bannerSub:   { fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 20 },

// // // // // // // // // // // // // // // // // // //   // white curved shelf
// // // // // // // // // // // // // // // // // // //   shelf: {
// // // // // // // // // // // // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // // // // // // // // // // // //     borderTopLeftRadius: 18,
// // // // // // // // // // // // // // // // // // //     borderTopRightRadius: 18,
// // // // // // // // // // // // // // // // // // //     paddingHorizontal: 18,
// // // // // // // // // // // // // // // // // // //     paddingTop: 16,
// // // // // // // // // // // // // // // // // // //     paddingBottom: 0,
// // // // // // // // // // // // // // // // // // //     flexDirection: "row",
// // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // //     justifyContent: "space-between",
// // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // //   shelfLabel: { fontSize: 10, fontWeight: "700", color: "#bbb", letterSpacing: 1 },
// // // // // // // // // // // // // // // // // // //   countRow:   { flexDirection: "row", alignItems: "baseline" },
// // // // // // // // // // // // // // // // // // //   countBig:   { fontSize: 28, fontWeight: "800", color: "#E24B4A" },
// // // // // // // // // // // // // // // // // // //   countSlash: { fontSize: 14, color: "#ccc" },
// // // // // // // // // // // // // // // // // // //   countTotal: { fontSize: 14, color: "#ccc" },

// // // // // // // // // // // // // // // // // // //   // progress bar
// // // // // // // // // // // // // // // // // // //   barWrap:  { backgroundColor: "#fff", paddingHorizontal: 18, paddingTop: 10, paddingBottom: 14 },
// // // // // // // // // // // // // // // // // // //   barTrack: { height: 4, backgroundColor: "#F0F0F0", borderRadius: 2 },
// // // // // // // // // // // // // // // // // // //   barFill:  { height: 4, backgroundColor: "#E24B4A", borderRadius: 2 },

// // // // // // // // // // // // // // // // // // //   // field list
// // // // // // // // // // // // // // // // // // //   listScroll:  { backgroundColor: "#fff", maxHeight: 230, paddingHorizontal: 14 },
// // // // // // // // // // // // // // // // // // //   listContent: { gap: 7, paddingBottom: 6 },

// // // // // // // // // // // // // // // // // // //   // each row card
// // // // // // // // // // // // // // // // // // //   fieldCard: {
// // // // // // // // // // // // // // // // // // //     flexDirection: "row",
// // // // // // // // // // // // // // // // // // //     alignItems: "stretch",
// // // // // // // // // // // // // // // // // // //     borderRadius: 11,
// // // // // // // // // // // // // // // // // // //     borderWidth: 0.5,
// // // // // // // // // // // // // // // // // // //     borderColor: "#EBEBEB",
// // // // // // // // // // // // // // // // // // //     overflow: "hidden",
// // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // //   accentEn: { width: 4, backgroundColor: "#E24B4A" },
// // // // // // // // // // // // // // // // // // //   accentMr: { width: 4, backgroundColor: "#BA7517" },

// // // // // // // // // // // // // // // // // // //   fieldBody: {
// // // // // // // // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // // // // // // // //     backgroundColor: "#F8F8FB",
// // // // // // // // // // // // // // // // // // //     paddingVertical: 10,
// // // // // // // // // // // // // // // // // // //     paddingHorizontal: 11,
// // // // // // // // // // // // // // // // // // //     flexDirection: "row",
// // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // //     gap: 9,
// // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // //   fieldIdx:  { fontSize: 11, fontWeight: "700", color: "#ccc", minWidth: 20 },
// // // // // // // // // // // // // // // // // // //   fieldName: { flex: 1, fontSize: 13, fontWeight: "600", color: "#1a1a1a" },

// // // // // // // // // // // // // // // // // // //   langPill:       { backgroundColor: "#E6F1FB", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20 },
// // // // // // // // // // // // // // // // // // //   langPillMr:     { backgroundColor: "#FAEEDA" },
// // // // // // // // // // // // // // // // // // //   langPillText:   { fontSize: 10, fontWeight: "700", color: "#0C447C" },
// // // // // // // // // // // // // // // // // // //   langPillTextMr: { color: "#633806" },

// // // // // // // // // // // // // // // // // // //   // footer
// // // // // // // // // // // // // // // // // // //   footer: {
// // // // // // // // // // // // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // // // // // // // // // // // //     padding: 14,
// // // // // // // // // // // // // // // // // // //     paddingBottom: 20,
// // // // // // // // // // // // // // // // // // //     flexDirection: "row",
// // // // // // // // // // // // // // // // // // //     gap: 8,
// // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // //   fixBtn: {
// // // // // // // // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // // // // // // // //     height: 44,
// // // // // // // // // // // // // // // // // // //     borderRadius: 13,
// // // // // // // // // // // // // // // // // // //     backgroundColor: "#7F77DD",
// // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // //   fixBtnText: { color: "#fff", fontSize: 14, fontWeight: "700" },
// // // // // // // // // // // // // // // // // // //   dismissBtn: {
// // // // // // // // // // // // // // // // // // //     width: 44,
// // // // // // // // // // // // // // // // // // //     height: 44,
// // // // // // // // // // // // // // // // // // //     borderRadius: 13,
// // // // // // // // // // // // // // // // // // //     borderWidth: 0.5,
// // // // // // // // // // // // // // // // // // //     borderColor: "#E0E0E0",
// // // // // // // // // // // // // // // // // // //     backgroundColor: "#F5F5F5",
// // // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // //   dismissBtnText: { fontSize: 14, color: "#999" },
// // // // // // // // // // // // // // // // // // // });














// // // // // // // // // // // // // // // // // // // Step1.jsx
// // // // // // // // // // // // // // // // // // import React, { useState, forwardRef, useImperativeHandle } from "react";
// // // // // // // // // // // // // // // // // // import {
// // // // // // // // // // // // // // // // // //   View,
// // // // // // // // // // // // // // // // // //   Text,
// // // // // // // // // // // // // // // // // //   ScrollView,
// // // // // // // // // // // // // // // // // //   TouchableOpacity,
// // // // // // // // // // // // // // // // // //   TextInput,
// // // // // // // // // // // // // // // // // //   Image,
// // // // // // // // // // // // // // // // // //   Modal,
// // // // // // // // // // // // // // // // // //   StyleSheet,
// // // // // // // // // // // // // // // // // // } from "react-native";
// // // // // // // // // // // // // // // // // // import * as ImagePicker from "expo-image-picker";
// // // // // // // // // // // // // // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // // // // // // // // // // // // // const REQUIRED_FIELDS = [
// // // // // // // // // // // // // // // // // //   { key: "firstName",     label: "First Name",           lang: "EN" },
// // // // // // // // // // // // // // // // // //   { key: "middleName",    label: "Middle Name",          lang: "EN" },
// // // // // // // // // // // // // // // // // //   { key: "lastName",      label: "Last Name / Surname",  lang: "EN" },
// // // // // // // // // // // // // // // // // //   { key: "firstNameMr",   label: "पहिले नाव",            lang: "MR" },
// // // // // // // // // // // // // // // // // //   { key: "middleNameMr",  label: "वडिलांचे नाव",         lang: "MR" },
// // // // // // // // // // // // // // // // // //   { key: "lastNameMr",    label: "शेवटचे नाव / आडनाव",  lang: "MR" },
// // // // // // // // // // // // // // // // // //   { key: "birthName",     label: "जन्म नाव",             lang: "MR" },
// // // // // // // // // // // // // // // // // //   { key: "birthNameEn",   label: "Birth Name",           lang: "EN" },
// // // // // // // // // // // // // // // // // //   { key: "candidateType", label: "Candidate Type",       lang: "EN" },
// // // // // // // // // // // // // // // // // //   { key: "photo",         label: "Photo",                lang: null  },
// // // // // // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // // // // // const Step1 = forwardRef(({ data, setData, onNext }, ref) => {
// // // // // // // // // // // // // // // // // //   const [errorVisible, setErrorVisible] = useState(false);
// // // // // // // // // // // // // // // // // //   const [missingFields, setMissingFields] = useState([]);

// // // // // // // // // // // // // // // // // //   const set        = (key) => (val) => setData((p) => ({ ...p, [key]: val }));
// // // // // // // // // // // // // // // // // //   const setEnglish = (key) => (val) =>
// // // // // // // // // // // // // // // // // //     setData((p) => ({ ...p, [key]: val.replace(/[^\x00-\x7F]/g, "") }));
// // // // // // // // // // // // // // // // // //   const setMarathi = (key) => (val) =>
// // // // // // // // // // // // // // // // // //     setData((p) => ({ ...p, [key]: val.replace(/[^\u0900-\u097F\s]/g, "") }));

// // // // // // // // // // // // // // // // // //   const validate = () => {
// // // // // // // // // // // // // // // // // //     const missing = REQUIRED_FIELDS.filter(
// // // // // // // // // // // // // // // // // //       (f) => !data[f.key] || data[f.key].toString().trim() === ""
// // // // // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // // // //     if (missing.length > 0) {
// // // // // // // // // // // // // // // // // //       setMissingFields(missing);
// // // // // // // // // // // // // // // // // //       setErrorVisible(true);
// // // // // // // // // // // // // // // // // //       return false;
// // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // //     return true;
// // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // //   useImperativeHandle(ref, () => ({ validate }));

// // // // // // // // // // // // // // // // // //   const handleNext = () => {
// // // // // // // // // // // // // // // // // //     const ok = validate();
// // // // // // // // // // // // // // // // // //     if (ok && onNext) onNext();
// // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // //   const pickImage = async () => {
// // // // // // // // // // // // // // // // // //     const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // // // // // // // // // // // // // // // //     if (!granted) {
// // // // // // // // // // // // // // // // // //       setMissingFields([{ label: "Permission Required: Allow photo access.", lang: null }]);
// // // // // // // // // // // // // // // // // //       setErrorVisible(true);
// // // // // // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // //     const result = await ImagePicker.launchImageLibraryAsync({
// // // // // // // // // // // // // // // // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // // // // // // // // // // // // // // // //       allowsEditing: true,
// // // // // // // // // // // // // // // // // //       aspect: [4, 4],
// // // // // // // // // // // // // // // // // //       quality: 0.8,
// // // // // // // // // // // // // // // // // //     });
// // // // // // // // // // // // // // // // // //     if (!result.canceled) set("photo")(result.assets[0].uri);
// // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // //   const isErr = (key) => missingFields.some((f) => f.key === key);

// // // // // // // // // // // // // // // // // //   const missingPct =
// // // // // // // // // // // // // // // // // //     REQUIRED_FIELDS.length > 0
// // // // // // // // // // // // // // // // // //       ? `${Math.round((missingFields.length / REQUIRED_FIELDS.length) * 100)}%`
// // // // // // // // // // // // // // // // // //       : "0%";

// // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // //     <>
// // // // // // // // // // // // // // // // // //       {/* ═══════════════════════════════════════════
// // // // // // // // // // // // // // // // // //           ORANGE POPUP
// // // // // // // // // // // // // // // // // //       ═══════════════════════════════════════════ */}
// // // // // // // // // // // // // // // // // //       <Modal
// // // // // // // // // // // // // // // // // //         transparent
// // // // // // // // // // // // // // // // // //         visible={errorVisible}
// // // // // // // // // // // // // // // // // //         animationType="fade"
// // // // // // // // // // // // // // // // // //         onRequestClose={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // // //       >
// // // // // // // // // // // // // // // // // //         <View style={pop.overlay}>
// // // // // // // // // // // // // // // // // //           <View style={pop.card}>

// // // // // // // // // // // // // // // // // //             {/* ── Orange top banner ── */}
// // // // // // // // // // // // // // // // // //             <View style={pop.banner}>

// // // // // // // // // // // // // // // // // //               {/* Top row: icon + close */}
// // // // // // // // // // // // // // // // // //               <View style={pop.bannerTopRow}>
// // // // // // // // // // // // // // // // // //                 <View style={pop.ringOut}>
// // // // // // // // // // // // // // // // // //                   <View style={pop.ringIn}>
// // // // // // // // // // // // // // // // // //                     <Text style={pop.ringBang}>!</Text>
// // // // // // // // // // // // // // // // // //                   </View>
// // // // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // // // //                 <TouchableOpacity
// // // // // // // // // // // // // // // // // //                   onPress={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // // //                   style={pop.xBtn}
// // // // // // // // // // // // // // // // // //                   hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
// // // // // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // // // // //                   <Text style={pop.xBtnText}>✕</Text>
// // // // // // // // // // // // // // // // // //                 </TouchableOpacity>
// // // // // // // // // // // // // // // // // //               </View>

// // // // // // // // // // // // // // // // // //               {/* Titles */}
// // // // // // // // // // // // // // // // // //               <Text style={pop.bannerTitle}>Fields are missing</Text>
// // // // // // // // // // // // // // // // // //               <Text style={pop.bannerSub}>Complete these before moving on</Text>

// // // // // // // // // // // // // // // // // //               {/* Yellow curved shelf with count */}
// // // // // // // // // // // // // // // // // //               <View style={pop.shelf}>
// // // // // // // // // // // // // // // // // //                 <Text style={pop.shelfLabel}>INCOMPLETE</Text>
// // // // // // // // // // // // // // // // // //                 <View style={pop.countRow}>
// // // // // // // // // // // // // // // // // //                   <Text style={pop.countBig}>{missingFields.length}</Text>
// // // // // // // // // // // // // // // // // //                   <Text style={pop.countSlash}> / </Text>
// // // // // // // // // // // // // // // // // //                   <Text style={pop.countTotal}>{REQUIRED_FIELDS.length}</Text>
// // // // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // // // //               </View>
// // // // // // // // // // // // // // // // // //             </View>

// // // // // // // // // // // // // // // // // //             {/* ── Dark orange progress bar ── */}
// // // // // // // // // // // // // // // // // //             <View style={pop.barWrap}>
// // // // // // // // // // // // // // // // // //               <View style={pop.barTrack}>
// // // // // // // // // // // // // // // // // //                 <View style={[pop.barFill, { width: missingPct }]} />
// // // // // // // // // // // // // // // // // //               </View>
// // // // // // // // // // // // // // // // // //             </View>

// // // // // // // // // // // // // // // // // //             {/* ── Numbered missing field cards ── */}
// // // // // // // // // // // // // // // // // //             <ScrollView
// // // // // // // // // // // // // // // // // //               style={pop.listScroll}
// // // // // // // // // // // // // // // // // //               contentContainerStyle={pop.listContent}
// // // // // // // // // // // // // // // // // //               showsVerticalScrollIndicator={false}
// // // // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // // // //               {missingFields.map((f, i) => (
// // // // // // // // // // // // // // // // // //                 <View key={i} style={pop.fieldCard}>
// // // // // // // // // // // // // // // // // //                   <View style={f.lang === "MR" ? pop.accentMr : pop.accentEn} />
// // // // // // // // // // // // // // // // // //                   <View style={pop.fieldBody}>
// // // // // // // // // // // // // // // // // //                     <Text style={pop.fieldIdx}>
// // // // // // // // // // // // // // // // // //                       {String(i + 1).padStart(2, "0")}
// // // // // // // // // // // // // // // // // //                     </Text>
// // // // // // // // // // // // // // // // // //                     <Text style={pop.fieldName}>{f.label}</Text>
// // // // // // // // // // // // // // // // // //                     {f.lang && (
// // // // // // // // // // // // // // // // // //                       <View style={[pop.langPill, f.lang === "MR" && pop.langPillMr]}>
// // // // // // // // // // // // // // // // // //                         <Text style={[pop.langPillText, f.lang === "MR" && pop.langPillTextMr]}>
// // // // // // // // // // // // // // // // // //                           {f.lang}
// // // // // // // // // // // // // // // // // //                         </Text>
// // // // // // // // // // // // // // // // // //                       </View>
// // // // // // // // // // // // // // // // // //                     )}
// // // // // // // // // // // // // // // // // //                   </View>
// // // // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // // // //               ))}
// // // // // // // // // // // // // // // // // //             </ScrollView>

// // // // // // // // // // // // // // // // // //             {/* ── Footer ── */}
// // // // // // // // // // // // // // // // // //             <View style={pop.footer}>
// // // // // // // // // // // // // // // // // //               <TouchableOpacity
// // // // // // // // // // // // // // // // // //                 style={pop.fixBtn}
// // // // // // // // // // // // // // // // // //                 activeOpacity={0.82}
// // // // // // // // // // // // // // // // // //                 onPress={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // // // // //                 <Text style={pop.fixBtnText}>Got it — I'll fix it</Text>
// // // // // // // // // // // // // // // // // //               </TouchableOpacity>
// // // // // // // // // // // // // // // // // //               <TouchableOpacity
// // // // // // // // // // // // // // // // // //                 style={pop.dismissBtn}
// // // // // // // // // // // // // // // // // //                 onPress={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // // // // //                 <Text style={pop.dismissBtnText}>✕</Text>
// // // // // // // // // // // // // // // // // //               </TouchableOpacity>
// // // // // // // // // // // // // // // // // //             </View>

// // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // // //       </Modal>

// // // // // // // // // // // // // // // // // //       {/* ═══════════════════════════════════════════
// // // // // // // // // // // // // // // // // //           MAIN FORM
// // // // // // // // // // // // // // // // // //       ═══════════════════════════════════════════ */}
// // // // // // // // // // // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false}>
// // // // // // // // // // // // // // // // // //         <SectionHeader title="Basic Information - (Application Number : F2788)" />

// // // // // // // // // // // // // // // // // //         {/* English names */}
// // // // // // // // // // // // // // // // // //         <View style={styles.row3}>
// // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // // // // // // // // // //             <Field label="First Name" required value={data.firstName} onChangeText={setEnglish("firstName")} placeholder="English" inputStyle={isErr("firstName") ? fieldErr : undefined} />
// // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // // // // // // // // // //             <Field label="Middle Name" required value={data.middleName} onChangeText={setEnglish("middleName")} placeholder="English" inputStyle={isErr("middleName") ? fieldErr : undefined} />
// // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // // // // // // // // // //             <Field label="Last Name / Surname" required value={data.lastName} onChangeText={setEnglish("lastName")} placeholder="English" inputStyle={isErr("lastName") ? fieldErr : undefined} />
// // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // //         {/* Marathi names */}
// // // // // // // // // // // // // // // // // //         <View style={styles.row3}>
// // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // // // // // // // // // //             <Field label="पहिले नाव" required value={data.firstNameMr} onChangeText={setMarathi("firstNameMr")} placeholder="मराठी" inputStyle={isErr("firstNameMr") ? fieldErr : undefined} />
// // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // // // // // // // // // //             <Field label="वडिलांचे नाव" required value={data.middleNameMr} onChangeText={setMarathi("middleNameMr")} placeholder="मराठी" inputStyle={isErr("middleNameMr") ? fieldErr : undefined} />
// // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // // // // // // // // // //             <Field label="शेवटचे नाव / आडनाव" required value={data.lastNameMr} onChangeText={setMarathi("lastNameMr")} placeholder="मराठी" inputStyle={isErr("lastNameMr") ? fieldErr : undefined} />
// // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // //         {/* Birth names */}
// // // // // // // // // // // // // // // // // //         <View style={styles.row2}>
// // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 8 }}>
// // // // // // // // // // // // // // // // // //             <Field label="जन्म नाव" required value={data.birthName} onChangeText={setMarathi("birthName")} placeholder="मराठी" inputStyle={isErr("birthName") ? fieldErr : undefined} />
// // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // // // // // // // // // // // // // //             <Field label="Birth Name" required value={data.birthNameEn} onChangeText={setEnglish("birthNameEn")} placeholder="English" inputStyle={isErr("birthNameEn") ? fieldErr : undefined} />
// // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // //         {/* Candidate type */}
// // // // // // // // // // // // // // // // // //         <Field label="Candidate Type" required value={data.candidateType} onChangeText={set("candidateType")} placeholder="e.g. वधू / वर" inputStyle={isErr("candidateType") ? fieldErr : undefined} />

// // // // // // // // // // // // // // // // // //         {/* Photo */}
// // // // // // // // // // // // // // // // // //         <View style={{ marginBottom: 20 }}>
// // // // // // // // // // // // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // // // // // // // // // // // //             Photo <Text style={{ color: "red" }}>*</Text>
// // // // // // // // // // // // // // // // // //           </Text>
// // // // // // // // // // // // // // // // // //           <TouchableOpacity
// // // // // // // // // // // // // // // // // //             style={[styles.photoBtn, data.photo && { padding: 0, overflow: "hidden" }, isErr("photo") && fieldErr]}
// // // // // // // // // // // // // // // // // //             onPress={pickImage}
// // // // // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // // // // //             {data.photo ? (
// // // // // // // // // // // // // // // // // //               <Image source={{ uri: data.photo }} style={{ width: "100%", height: 120, resizeMode: "cover" }} />
// // // // // // // // // // // // // // // // // //             ) : (
// // // // // // // // // // // // // // // // // //               <Text style={styles.photoBtnText}>📷 Choose Photo</Text>
// // // // // // // // // // // // // // // // // //             )}
// // // // // // // // // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // //         {/* Marathi scratch pad */}
// // // // // // // // // // // // // // // // // //         <View style={[styles.marathiPadWrap, { marginBottom: 16 }]}>
// // // // // // // // // // // // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // // // // // // // // // // // //             (मराठी) Marathi Type Box
// // // // // // // // // // // // // // // // // //           </Text>
// // // // // // // // // // // // // // // // // //           <TextInput
// // // // // // // // // // // // // // // // // //             style={[styles.marathiPad, { height: 80 }]}
// // // // // // // // // // // // // // // // // //             multiline
// // // // // // // // // // // // // // // // // //             placeholder="मराठी मध्ये टाईप करा..."
// // // // // // // // // // // // // // // // // //             value={data.marathiNote}
// // // // // // // // // // // // // // // // // //             onChangeText={setMarathi("marathiNote")}
// // // // // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // //         {/* Next button */}
// // // // // // // // // // // // // // // // // //         <TouchableOpacity style={btn.next} activeOpacity={0.85} onPress={handleNext}>
// // // // // // // // // // // // // // // // // //           <Text style={btn.nextText}>Next →</Text>
// // // // // // // // // // // // // // // // // //         </TouchableOpacity>

// // // // // // // // // // // // // // // // // //         <View style={{ height: 30 }} />
// // // // // // // // // // // // // // // // // //       </ScrollView>
// // // // // // // // // // // // // // // // // //     </>
// // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // // // export default Step1;

// // // // // // // // // // // // // // // // // // // ─── field error style ────────────────────────────────────────────────────────
// // // // // // // // // // // // // // // // // // const fieldErr = {
// // // // // // // // // // // // // // // // // //   borderWidth: 1.5,
// // // // // // // // // // // // // // // // // //   borderColor: "#E24B4A",
// // // // // // // // // // // // // // // // // //   backgroundColor: "#FFF5F5",
// // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // // ─── next button ──────────────────────────────────────────────────────────────
// // // // // // // // // // // // // // // // // // const btn = StyleSheet.create({
// // // // // // // // // // // // // // // // // //   next: {
// // // // // // // // // // // // // // // // // //     backgroundColor: "#f97316",
// // // // // // // // // // // // // // // // // //     borderRadius: 12,
// // // // // // // // // // // // // // // // // //     paddingVertical: 15,
// // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // //     marginTop: 8,
// // // // // // // // // // // // // // // // // //     marginBottom: 8,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   nextText: {
// // // // // // // // // // // // // // // // // //     color: "#fff",
// // // // // // // // // // // // // // // // // //     fontSize: 16,
// // // // // // // // // // // // // // // // // //     fontWeight: "700",
// // // // // // // // // // // // // // // // // //     letterSpacing: 0.3,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // // // // ─── popup styles — full orange theme ────────────────────────────────────────
// // // // // // // // // // // // // // // // // // const pop = StyleSheet.create({

// // // // // // // // // // // // // // // // // //   overlay: {
// // // // // // // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // // // // // // //     backgroundColor: "rgba(120, 40, 0, 0.5)",   // warm dark-orange tint
// // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // //     padding: 24,
// // // // // // // // // // // // // // // // // //   },

// // // // // // // // // // // // // // // // // //   card: {
// // // // // // // // // // // // // // // // // //     backgroundColor: "#FFF7ED",                  // warm cream-orange base
// // // // // // // // // // // // // // // // // //     borderRadius: 26,
// // // // // // // // // // // // // // // // // //     width: "100%",
// // // // // // // // // // // // // // // // // //     maxWidth: 340,
// // // // // // // // // // // // // // // // // //     overflow: "hidden",
// // // // // // // // // // // // // // // // // //     borderWidth: 1.5,
// // // // // // // // // // // // // // // // // //     borderColor: "#FB923C",                       // orange border
// // // // // // // // // // // // // // // // // //   },

// // // // // // // // // // // // // // // // // //   // ── banner: deep orange ──────────────────────────────────────────────────
// // // // // // // // // // // // // // // // // //   banner: {
// // // // // // // // // // // // // // // // // //     backgroundColor: "#EA580C",                  // deep orange
// // // // // // // // // // // // // // // // // //     paddingHorizontal: 20,
// // // // // // // // // // // // // // // // // //     paddingTop: 22,
// // // // // // // // // // // // // // // // // //     paddingBottom: 0,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   bannerTopRow: {
// // // // // // // // // // // // // // // // // //     flexDirection: "row",
// // // // // // // // // // // // // // // // // //     justifyContent: "space-between",
// // // // // // // // // // // // // // // // // //     alignItems: "flex-start",
// // // // // // // // // // // // // // // // // //     marginBottom: 16,
// // // // // // // // // // // // // // // // // //   },

// // // // // // // // // // // // // // // // // //   // double ring ! icon
// // // // // // // // // // // // // // // // // //   ringOut: {
// // // // // // // // // // // // // // // // // //     width: 46,
// // // // // // // // // // // // // // // // // //     height: 46,
// // // // // // // // // // // // // // // // // //     borderRadius: 23,
// // // // // // // // // // // // // // // // // //     backgroundColor: "rgba(255,255,255,0.18)",
// // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   ringIn: {
// // // // // // // // // // // // // // // // // //     width: 30,
// // // // // // // // // // // // // // // // // //     height: 30,
// // // // // // // // // // // // // // // // // //     borderRadius: 15,
// // // // // // // // // // // // // // // // // //     backgroundColor: "#FEF08A",                  // yellow !
// // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   ringBang: {
// // // // // // // // // // // // // // // // // //     color: "#EA580C",
// // // // // // // // // // // // // // // // // //     fontSize: 17,
// // // // // // // // // // // // // // // // // //     fontWeight: "800",
// // // // // // // // // // // // // // // // // //     lineHeight: 19,
// // // // // // // // // // // // // // // // // //   },

// // // // // // // // // // // // // // // // // //   xBtn: {
// // // // // // // // // // // // // // // // // //     width: 30,
// // // // // // // // // // // // // // // // // //     height: 30,
// // // // // // // // // // // // // // // // // //     borderRadius: 15,
// // // // // // // // // // // // // // // // // //     backgroundColor: "rgba(255,255,255,0.15)",
// // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   xBtnText: { color: "#fff", fontSize: 13, fontWeight: "700" },

// // // // // // // // // // // // // // // // // //   bannerTitle: { fontSize: 18, fontWeight: "700", color: "#fff", marginBottom: 4 },
// // // // // // // // // // // // // // // // // //   bannerSub:   { fontSize: 12, color: "rgba(255,255,255,0.65)", marginBottom: 20 },

// // // // // // // // // // // // // // // // // //   // ── shelf: yellow-orange curve ───────────────────────────────────────────
// // // // // // // // // // // // // // // // // //   shelf: {
// // // // // // // // // // // // // // // // // //     backgroundColor: "#FEF3C7",                  // warm yellow
// // // // // // // // // // // // // // // // // //     borderTopLeftRadius: 18,
// // // // // // // // // // // // // // // // // //     borderTopRightRadius: 18,
// // // // // // // // // // // // // // // // // //     paddingHorizontal: 18,
// // // // // // // // // // // // // // // // // //     paddingTop: 14,
// // // // // // // // // // // // // // // // // //     paddingBottom: 0,
// // // // // // // // // // // // // // // // // //     flexDirection: "row",
// // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // //     justifyContent: "space-between",
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   shelfLabel: { fontSize: 10, fontWeight: "700", color: "#D97706", letterSpacing: 1 },
// // // // // // // // // // // // // // // // // //   countRow:   { flexDirection: "row", alignItems: "baseline" },
// // // // // // // // // // // // // // // // // //   countBig:   { fontSize: 28, fontWeight: "800", color: "#C2410C" },
// // // // // // // // // // // // // // // // // //   countSlash: { fontSize: 14, color: "#FCA5A5" },
// // // // // // // // // // // // // // // // // //   countTotal: { fontSize: 14, color: "#FCA5A5", fontWeight: "600" },

// // // // // // // // // // // // // // // // // //   // ── progress bar ─────────────────────────────────────────────────────────
// // // // // // // // // // // // // // // // // //   barWrap:  { backgroundColor: "#FEF3C7", paddingHorizontal: 18, paddingTop: 10, paddingBottom: 14 },
// // // // // // // // // // // // // // // // // //   barTrack: { height: 5, backgroundColor: "#FDE68A", borderRadius: 3 },
// // // // // // // // // // // // // // // // // //   barFill:  { height: 5, backgroundColor: "#C2410C", borderRadius: 3 },

// // // // // // // // // // // // // // // // // //   // ── field list ───────────────────────────────────────────────────────────
// // // // // // // // // // // // // // // // // //   listScroll:  { backgroundColor: "#FFF7ED", maxHeight: 230, paddingHorizontal: 14 },
// // // // // // // // // // // // // // // // // //   listContent: { gap: 7, paddingBottom: 6, paddingTop: 4 },

// // // // // // // // // // // // // // // // // //   // each row card
// // // // // // // // // // // // // // // // // //   fieldCard: {
// // // // // // // // // // // // // // // // // //     flexDirection: "row",
// // // // // // // // // // // // // // // // // //     alignItems: "stretch",
// // // // // // // // // // // // // // // // // //     borderRadius: 11,
// // // // // // // // // // // // // // // // // //     borderWidth: 0.5,
// // // // // // // // // // // // // // // // // //     borderColor: "#FED7AA",                       // light orange border
// // // // // // // // // // // // // // // // // //     overflow: "hidden",
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   accentEn: { width: 4, backgroundColor: "#F97316" },   // orange EN stripe
// // // // // // // // // // // // // // // // // //   accentMr: { width: 4, backgroundColor: "#D97706" },   // amber MR stripe

// // // // // // // // // // // // // // // // // //   fieldBody: {
// // // // // // // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // // // // // // //     backgroundColor: "#FFF3E0",                  // very light orange body
// // // // // // // // // // // // // // // // // //     paddingVertical: 10,
// // // // // // // // // // // // // // // // // //     paddingHorizontal: 11,
// // // // // // // // // // // // // // // // // //     flexDirection: "row",
// // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // //     gap: 9,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   fieldIdx:  { fontSize: 11, fontWeight: "700", color: "#FDBA74", minWidth: 20 },
// // // // // // // // // // // // // // // // // //   fieldName: { flex: 1, fontSize: 13, fontWeight: "600", color: "#7C2D12" },

// // // // // // // // // // // // // // // // // //   // lang pills
// // // // // // // // // // // // // // // // // //   langPill:       { backgroundColor: "#FED7AA", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20 },
// // // // // // // // // // // // // // // // // //   langPillMr:     { backgroundColor: "#FDE68A" },
// // // // // // // // // // // // // // // // // //   langPillText:   { fontSize: 10, fontWeight: "700", color: "#9A3412" },
// // // // // // // // // // // // // // // // // //   langPillTextMr: { color: "#92400E" },

// // // // // // // // // // // // // // // // // //   // ── footer ───────────────────────────────────────────────────────────────
// // // // // // // // // // // // // // // // // //   footer: {
// // // // // // // // // // // // // // // // // //     backgroundColor: "#FFF7ED",
// // // // // // // // // // // // // // // // // //     padding: 14,
// // // // // // // // // // // // // // // // // //     paddingBottom: 20,
// // // // // // // // // // // // // // // // // //     flexDirection: "row",
// // // // // // // // // // // // // // // // // //     gap: 8,
// // // // // // // // // // // // // // // // // //     borderTopWidth: 1,
// // // // // // // // // // // // // // // // // //     borderTopColor: "#FED7AA",
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   fixBtn: {
// // // // // // // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // // // // // // //     height: 44,
// // // // // // // // // // // // // // // // // //     borderRadius: 13,
// // // // // // // // // // // // // // // // // //     backgroundColor: "#EA580C",                  // deep orange CTA
// // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   fixBtnText: { color: "#fff", fontSize: 14, fontWeight: "700" },

// // // // // // // // // // // // // // // // // //   dismissBtn: {
// // // // // // // // // // // // // // // // // //     width: 44,
// // // // // // // // // // // // // // // // // //     height: 44,
// // // // // // // // // // // // // // // // // //     borderRadius: 13,
// // // // // // // // // // // // // // // // // //     borderWidth: 0.5,
// // // // // // // // // // // // // // // // // //     borderColor: "#FCA5A5",
// // // // // // // // // // // // // // // // // //     backgroundColor: "#FEE2E2",
// // // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   dismissBtnText: { fontSize: 14, color: "#C2410C" },
// // // // // // // // // // // // // // // // // // });







// // // // // // // // // // // // // // // // // // Step1.jsx
// // // // // // // // // // // // // // // // // import React, { useState, forwardRef, useImperativeHandle } from "react";
// // // // // // // // // // // // // // // // // import {
// // // // // // // // // // // // // // // // //   View,
// // // // // // // // // // // // // // // // //   Text,
// // // // // // // // // // // // // // // // //   ScrollView,
// // // // // // // // // // // // // // // // //   TouchableOpacity,
// // // // // // // // // // // // // // // // //   TextInput,
// // // // // // // // // // // // // // // // //   Image,
// // // // // // // // // // // // // // // // //   Modal,
// // // // // // // // // // // // // // // // //   StyleSheet,
// // // // // // // // // // // // // // // // // } from "react-native";
// // // // // // // // // // // // // // // // // import * as ImagePicker from "expo-image-picker";
// // // // // // // // // // // // // // // // // import { Field, SectionHeader, sharedStyles as S } from "./SharedUI";

// // // // // // // // // // // // // // // // // const REQUIRED_FIELDS = [
// // // // // // // // // // // // // // // // //   { key: "firstName",     label: "First Name",           lang: "EN" },
// // // // // // // // // // // // // // // // //   { key: "middleName",    label: "Middle Name",          lang: "EN" },
// // // // // // // // // // // // // // // // //   { key: "lastName",      label: "Last Name / Surname",  lang: "EN" },
// // // // // // // // // // // // // // // // //   { key: "firstNameMr",   label: "पहिले नाव",            lang: "MR" },
// // // // // // // // // // // // // // // // //   { key: "middleNameMr",  label: "वडिलांचे नाव",         lang: "MR" },
// // // // // // // // // // // // // // // // //   { key: "lastNameMr",    label: "शेवटचे नाव / आडनाव",  lang: "MR" },
// // // // // // // // // // // // // // // // //   { key: "birthName",     label: "जन्म नाव",             lang: "MR" },
// // // // // // // // // // // // // // // // //   { key: "birthNameEn",   label: "Birth Name",           lang: "EN" },
// // // // // // // // // // // // // // // // //   { key: "candidateType", label: "Candidate Type",       lang: "EN" },
// // // // // // // // // // // // // // // // //   { key: "photo",         label: "Photo",                lang: null  },
// // // // // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // // // // const Step1 = forwardRef(({ data, setData, onNext }, ref) => {
// // // // // // // // // // // // // // // // //   const [errorVisible, setErrorVisible] = useState(false);
// // // // // // // // // // // // // // // // //   const [missingFields, setMissingFields] = useState([]);

// // // // // // // // // // // // // // // // //   const set        = (key) => (val) => setData((p) => ({ ...p, [key]: val }));
// // // // // // // // // // // // // // // // //   const setEnglish = (key) => (val) =>
// // // // // // // // // // // // // // // // //     setData((p) => ({ ...p, [key]: val.replace(/[^\x00-\x7F]/g, "") }));
// // // // // // // // // // // // // // // // //   const setMarathi = (key) => (val) =>
// // // // // // // // // // // // // // // // //     setData((p) => ({ ...p, [key]: val.replace(/[^\u0900-\u097F\s]/g, "") }));

// // // // // // // // // // // // // // // // //   const validate = () => {
// // // // // // // // // // // // // // // // //     const missing = REQUIRED_FIELDS.filter(
// // // // // // // // // // // // // // // // //       (f) => !data[f.key] || data[f.key].toString().trim() === ""
// // // // // // // // // // // // // // // // //     );
// // // // // // // // // // // // // // // // //     if (missing.length > 0) {
// // // // // // // // // // // // // // // // //       setMissingFields(missing);
// // // // // // // // // // // // // // // // //       setErrorVisible(true);
// // // // // // // // // // // // // // // // //       return false;
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //     return true;
// // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // //   useImperativeHandle(ref, () => ({ validate }));

// // // // // // // // // // // // // // // // //   const handleNext = () => {
// // // // // // // // // // // // // // // // //     const ok = validate();
// // // // // // // // // // // // // // // // //     if (ok && onNext) onNext();
// // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // //   const pickImage = async () => {
// // // // // // // // // // // // // // // // //     const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // // // // // // // // // // // // // // //     if (!granted) {
// // // // // // // // // // // // // // // // //       setMissingFields([{ label: "Permission Required: Allow photo access.", lang: null }]);
// // // // // // // // // // // // // // // // //       setErrorVisible(true);
// // // // // // // // // // // // // // // // //       return;
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //     const result = await ImagePicker.launchImageLibraryAsync({
// // // // // // // // // // // // // // // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // // // // // // // // // // // // // // //       allowsEditing: true,
// // // // // // // // // // // // // // // // //       aspect: [4, 4],
// // // // // // // // // // // // // // // // //       quality: 0.8,
// // // // // // // // // // // // // // // // //     });
// // // // // // // // // // // // // // // // //     if (!result.canceled) set("photo")(result.assets[0].uri);
// // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // //   const isErr  = (key) => missingFields.some((f) => f.key === key);
// // // // // // // // // // // // // // // // //   const errSty = (key) => (isErr(key) ? fieldErr : undefined);

// // // // // // // // // // // // // // // // //   const missingPct =
// // // // // // // // // // // // // // // // //     REQUIRED_FIELDS.length > 0
// // // // // // // // // // // // // // // // //       ? `${Math.round((missingFields.length / REQUIRED_FIELDS.length) * 100)}%`
// // // // // // // // // // // // // // // // //       : "0%";

// // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // //     <>
// // // // // // // // // // // // // // // // //       {/* ════════════════════════════════════════
// // // // // // // // // // // // // // // // //           ORANGE MISSING-FIELDS POPUP
// // // // // // // // // // // // // // // // //       ════════════════════════════════════════ */}
// // // // // // // // // // // // // // // // //       <Modal
// // // // // // // // // // // // // // // // //         transparent
// // // // // // // // // // // // // // // // //         visible={errorVisible}
// // // // // // // // // // // // // // // // //         animationType="fade"
// // // // // // // // // // // // // // // // //         onRequestClose={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // //       >
// // // // // // // // // // // // // // // // //         <View style={pop.overlay}>
// // // // // // // // // // // // // // // // //           <View style={pop.card}>

// // // // // // // // // // // // // // // // //             {/* ── Deep-orange banner ── */}
// // // // // // // // // // // // // // // // //             <View style={pop.banner}>
// // // // // // // // // // // // // // // // //               <View style={pop.bannerTopRow}>
// // // // // // // // // // // // // // // // //                 <View style={pop.ringOut}>
// // // // // // // // // // // // // // // // //                   <View style={pop.ringIn}>
// // // // // // // // // // // // // // // // //                     <Text style={pop.ringBang}>!</Text>
// // // // // // // // // // // // // // // // //                   </View>
// // // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // // //                 <TouchableOpacity
// // // // // // // // // // // // // // // // //                   onPress={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // //                   style={pop.xBtn}
// // // // // // // // // // // // // // // // //                   hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
// // // // // // // // // // // // // // // // //                 >
// // // // // // // // // // // // // // // // //                   <Text style={pop.xBtnText}>✕</Text>
// // // // // // // // // // // // // // // // //                 </TouchableOpacity>
// // // // // // // // // // // // // // // // //               </View>

// // // // // // // // // // // // // // // // //               <Text style={pop.bannerTitle}>Fields are missing</Text>
// // // // // // // // // // // // // // // // //               <Text style={pop.bannerSub}>Complete these before moving on</Text>

// // // // // // // // // // // // // // // // //               {/* yellow shelf with count */}
// // // // // // // // // // // // // // // // //               <View style={pop.shelf}>
// // // // // // // // // // // // // // // // //                 <Text style={pop.shelfLabel}>INCOMPLETE</Text>
// // // // // // // // // // // // // // // // //                 <View style={pop.countRow}>
// // // // // // // // // // // // // // // // //                   <Text style={pop.countBig}>{missingFields.length}</Text>
// // // // // // // // // // // // // // // // //                   <Text style={pop.countSlash}> / </Text>
// // // // // // // // // // // // // // // // //                   <Text style={pop.countTotal}>{REQUIRED_FIELDS.length}</Text>
// // // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // // //               </View>
// // // // // // // // // // // // // // // // //             </View>

// // // // // // // // // // // // // // // // //             {/* ── Progress bar ── */}
// // // // // // // // // // // // // // // // //             <View style={pop.barWrap}>
// // // // // // // // // // // // // // // // //               <View style={pop.barTrack}>
// // // // // // // // // // // // // // // // //                 <View style={[pop.barFill, { width: missingPct }]} />
// // // // // // // // // // // // // // // // //               </View>
// // // // // // // // // // // // // // // // //             </View>

// // // // // // // // // // // // // // // // //             {/* ── Field cards ── */}
// // // // // // // // // // // // // // // // //             <ScrollView
// // // // // // // // // // // // // // // // //               style={pop.listScroll}
// // // // // // // // // // // // // // // // //               contentContainerStyle={pop.listContent}
// // // // // // // // // // // // // // // // //               showsVerticalScrollIndicator={false}
// // // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // // //               {missingFields.map((f, i) => (
// // // // // // // // // // // // // // // // //                 <View key={i} style={pop.fieldCard}>
// // // // // // // // // // // // // // // // //                   <View style={f.lang === "MR" ? pop.accentMr : pop.accentEn} />
// // // // // // // // // // // // // // // // //                   <View style={pop.fieldBody}>
// // // // // // // // // // // // // // // // //                     <Text style={pop.fieldIdx}>{String(i + 1).padStart(2, "0")}</Text>
// // // // // // // // // // // // // // // // //                     <Text style={pop.fieldName}>{f.label}</Text>
// // // // // // // // // // // // // // // // //                     {f.lang && (
// // // // // // // // // // // // // // // // //                       <View style={[pop.langPill, f.lang === "MR" && pop.langPillMr]}>
// // // // // // // // // // // // // // // // //                         <Text style={[pop.langPillText, f.lang === "MR" && pop.langPillTextMr]}>
// // // // // // // // // // // // // // // // //                           {f.lang}
// // // // // // // // // // // // // // // // //                         </Text>
// // // // // // // // // // // // // // // // //                       </View>
// // // // // // // // // // // // // // // // //                     )}
// // // // // // // // // // // // // // // // //                   </View>
// // // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // // //               ))}
// // // // // // // // // // // // // // // // //             </ScrollView>

// // // // // // // // // // // // // // // // //             {/* ── Footer ── */}
// // // // // // // // // // // // // // // // //             <View style={pop.footer}>
// // // // // // // // // // // // // // // // //               <TouchableOpacity
// // // // // // // // // // // // // // // // //                 style={pop.fixBtn}
// // // // // // // // // // // // // // // // //                 activeOpacity={0.82}
// // // // // // // // // // // // // // // // //                 onPress={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // // // //                 <Text style={pop.fixBtnText}>Got it — I'll fix it</Text>
// // // // // // // // // // // // // // // // //               </TouchableOpacity>
// // // // // // // // // // // // // // // // //               <TouchableOpacity
// // // // // // // // // // // // // // // // //                 style={pop.dismissBtn}
// // // // // // // // // // // // // // // // //                 onPress={() => setErrorVisible(false)}
// // // // // // // // // // // // // // // // //               >
// // // // // // // // // // // // // // // // //                 <Text style={pop.dismissBtnText}>✕</Text>
// // // // // // // // // // // // // // // // //               </TouchableOpacity>
// // // // // // // // // // // // // // // // //             </View>

// // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // // //       </Modal>

// // // // // // // // // // // // // // // // //       {/* ════════════════════════════════════════
// // // // // // // // // // // // // // // // //           MAIN FORM
// // // // // // // // // // // // // // // // //       ════════════════════════════════════════ */}
// // // // // // // // // // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false}>
// // // // // // // // // // // // // // // // //         <SectionHeader title="Basic Information - (Application Number : F2788)" />

// // // // // // // // // // // // // // // // //         {/* English names */}
// // // // // // // // // // // // // // // // //         <View style={S.row3}>
// // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // // // // // // // // //             <Field label="First Name" required value={data.firstName}
// // // // // // // // // // // // // // // // //               onChangeText={setEnglish("firstName")} placeholder="English"
// // // // // // // // // // // // // // // // //               inputStyle={errSty("firstName")} />
// // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // // // // // // // // //             <Field label="Middle Name" required value={data.middleName}
// // // // // // // // // // // // // // // // //               onChangeText={setEnglish("middleName")} placeholder="English"
// // // // // // // // // // // // // // // // //               inputStyle={errSty("middleName")} />
// // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // // // // // // // // //             <Field label="Last Name / Surname" required value={data.lastName}
// // // // // // // // // // // // // // // // //               onChangeText={setEnglish("lastName")} placeholder="English"
// // // // // // // // // // // // // // // // //               inputStyle={errSty("lastName")} />
// // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // //         {/* Marathi names */}
// // // // // // // // // // // // // // // // //         <View style={S.row3}>
// // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // // // // // // // // //             <Field label="पहिले नाव" required value={data.firstNameMr}
// // // // // // // // // // // // // // // // //               onChangeText={setMarathi("firstNameMr")} placeholder="मराठी"
// // // // // // // // // // // // // // // // //               inputStyle={errSty("firstNameMr")} />
// // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // // // // // // // // //             <Field label="वडिलांचे नाव" required value={data.middleNameMr}
// // // // // // // // // // // // // // // // //               onChangeText={setMarathi("middleNameMr")} placeholder="मराठी"
// // // // // // // // // // // // // // // // //               inputStyle={errSty("middleNameMr")} />
// // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // // // // // // // // //             <Field label="शेवटचे नाव / आडनाव" required value={data.lastNameMr}
// // // // // // // // // // // // // // // // //               onChangeText={setMarathi("lastNameMr")} placeholder="मराठी"
// // // // // // // // // // // // // // // // //               inputStyle={errSty("lastNameMr")} />
// // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // //         {/* Birth names */}
// // // // // // // // // // // // // // // // //         <View style={S.row2}>
// // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginRight: 8 }}>
// // // // // // // // // // // // // // // // //             <Field label="जन्म नाव" required value={data.birthName}
// // // // // // // // // // // // // // // // //               onChangeText={setMarathi("birthName")} placeholder="मराठी"
// // // // // // // // // // // // // // // // //               inputStyle={errSty("birthName")} />
// // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // //           <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // // // // // // // // // // // // //             <Field label="Birth Name" required value={data.birthNameEn}
// // // // // // // // // // // // // // // // //               onChangeText={setEnglish("birthNameEn")} placeholder="English"
// // // // // // // // // // // // // // // // //               inputStyle={errSty("birthNameEn")} />
// // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // //         {/* Candidate type */}
// // // // // // // // // // // // // // // // //         <Field label="Candidate Type" required value={data.candidateType}
// // // // // // // // // // // // // // // // //           onChangeText={set("candidateType")} placeholder="e.g. वधू / वर"
// // // // // // // // // // // // // // // // //           inputStyle={errSty("candidateType")} />

// // // // // // // // // // // // // // // // //         {/* Photo */}
// // // // // // // // // // // // // // // // //         <View style={{ marginBottom: 20 }}>
// // // // // // // // // // // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // // // // // // // // // // //             Photo <Text style={{ color: "red" }}>*</Text>
// // // // // // // // // // // // // // // // //           </Text>
// // // // // // // // // // // // // // // // //           <TouchableOpacity
// // // // // // // // // // // // // // // // //             style={[S.photoBtn, data.photo && { padding: 0, overflow: "hidden" }, errSty("photo")]}
// // // // // // // // // // // // // // // // //             onPress={pickImage}
// // // // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // // // //             {data.photo ? (
// // // // // // // // // // // // // // // // //               <Image source={{ uri: data.photo }}
// // // // // // // // // // // // // // // // //                 style={{ width: "100%", height: 120, resizeMode: "cover" }} />
// // // // // // // // // // // // // // // // //             ) : (
// // // // // // // // // // // // // // // // //               <Text style={S.photoBtnText}>📷 Choose Photo</Text>
// // // // // // // // // // // // // // // // //             )}
// // // // // // // // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // //         {/* Marathi scratch pad */}
// // // // // // // // // // // // // // // // //         <View style={[S.marathiPadWrap, { marginBottom: 16 }]}>
// // // // // // // // // // // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // // // // // // // // // // //             (मराठी) Marathi Type Box
// // // // // // // // // // // // // // // // //           </Text>
// // // // // // // // // // // // // // // // //           <TextInput
// // // // // // // // // // // // // // // // //             style={[S.marathiPad, { height: 80 }]}
// // // // // // // // // // // // // // // // //             multiline
// // // // // // // // // // // // // // // // //             placeholder="मराठी मध्ये टाईप करा..."
// // // // // // // // // // // // // // // // //             value={data.marathiNote}
// // // // // // // // // // // // // // // // //             onChangeText={setMarathi("marathiNote")}
// // // // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // //         <View style={{ height: 30 }} />
// // // // // // // // // // // // // // // // //       </ScrollView>
// // // // // // // // // // // // // // // // //     </>
// // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // // export default Step1;

// // // // // // // // // // // // // // // // // // ─── field error highlight ────────────────────────────────────────────────────
// // // // // // // // // // // // // // // // // const fieldErr = {
// // // // // // // // // // // // // // // // //   borderWidth: 1.5,
// // // // // // // // // // // // // // // // //   borderColor: "#E24B4A",
// // // // // // // // // // // // // // // // //   backgroundColor: "#FFF5F5",
// // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // ─── orange popup styles ──────────────────────────────────────────────────────
// // // // // // // // // // // // // // // // // const pop = StyleSheet.create({

// // // // // // // // // // // // // // // // //   overlay: {
// // // // // // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // // // // // //     backgroundColor: "rgba(120,40,0,0.5)",
// // // // // // // // // // // // // // // // //     justifyContent: "center",
// // // // // // // // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // // // // // // // //     padding: 24,
// // // // // // // // // // // // // // // // //   },

// // // // // // // // // // // // // // // // //   card: {
// // // // // // // // // // // // // // // // //     backgroundColor: "#FFF7ED",
// // // // // // // // // // // // // // // // //     borderRadius: 26,
// // // // // // // // // // // // // // // // //     width: "100%",
// // // // // // // // // // // // // // // // //     maxWidth: 340,
// // // // // // // // // // // // // // // // //     overflow: "hidden",
// // // // // // // // // // // // // // // // //     borderWidth: 1.5,
// // // // // // // // // // // // // // // // //     borderColor: "#FB923C",
// // // // // // // // // // // // // // // // //   },

// // // // // // // // // // // // // // // // //   // banner
// // // // // // // // // // // // // // // // //   banner:       { backgroundColor: "#EA580C", paddingHorizontal: 20, paddingTop: 22, paddingBottom: 0 },
// // // // // // // // // // // // // // // // //   bannerTopRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 },

// // // // // // // // // // // // // // // // //   ringOut:  { width: 46, height: 46, borderRadius: 23, backgroundColor: "rgba(255,255,255,0.18)", alignItems: "center", justifyContent: "center" },
// // // // // // // // // // // // // // // // //   ringIn:   { width: 30, height: 30, borderRadius: 15, backgroundColor: "#FEF08A", alignItems: "center", justifyContent: "center" },
// // // // // // // // // // // // // // // // //   ringBang: { color: "#EA580C", fontSize: 17, fontWeight: "800", lineHeight: 19 },

// // // // // // // // // // // // // // // // //   xBtn:     { width: 30, height: 30, borderRadius: 15, backgroundColor: "rgba(255,255,255,0.15)", alignItems: "center", justifyContent: "center" },
// // // // // // // // // // // // // // // // //   xBtnText: { color: "#fff", fontSize: 13, fontWeight: "700" },

// // // // // // // // // // // // // // // // //   bannerTitle: { fontSize: 18, fontWeight: "700", color: "#fff", marginBottom: 4 },
// // // // // // // // // // // // // // // // //   bannerSub:   { fontSize: 12, color: "rgba(255,255,255,0.65)", marginBottom: 20 },

// // // // // // // // // // // // // // // // //   // count shelf
// // // // // // // // // // // // // // // // //   shelf:      { backgroundColor: "#FEF3C7", borderTopLeftRadius: 18, borderTopRightRadius: 18, paddingHorizontal: 18, paddingTop: 14, paddingBottom: 0, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
// // // // // // // // // // // // // // // // //   shelfLabel: { fontSize: 10, fontWeight: "700", color: "#D97706", letterSpacing: 1 },
// // // // // // // // // // // // // // // // //   countRow:   { flexDirection: "row", alignItems: "baseline" },
// // // // // // // // // // // // // // // // //   countBig:   { fontSize: 28, fontWeight: "800", color: "#C2410C" },
// // // // // // // // // // // // // // // // //   countSlash: { fontSize: 14, color: "#FCA5A5" },
// // // // // // // // // // // // // // // // //   countTotal: { fontSize: 14, color: "#FCA5A5", fontWeight: "600" },

// // // // // // // // // // // // // // // // //   // progress bar
// // // // // // // // // // // // // // // // //   barWrap:  { backgroundColor: "#FEF3C7", paddingHorizontal: 18, paddingTop: 10, paddingBottom: 14 },
// // // // // // // // // // // // // // // // //   barTrack: { height: 5, backgroundColor: "#FDE68A", borderRadius: 3 },
// // // // // // // // // // // // // // // // //   barFill:  { height: 5, backgroundColor: "#C2410C", borderRadius: 3 },

// // // // // // // // // // // // // // // // //   // field list
// // // // // // // // // // // // // // // // //   listScroll:  { backgroundColor: "#FFF7ED", maxHeight: 230, paddingHorizontal: 14 },
// // // // // // // // // // // // // // // // //   listContent: { gap: 7, paddingBottom: 6, paddingTop: 4 },

// // // // // // // // // // // // // // // // //   fieldCard: { flexDirection: "row", alignItems: "stretch", borderRadius: 11, borderWidth: 1, borderColor: "#F97316", overflow: "hidden" },
// // // // // // // // // // // // // // // // //   accentEn:  { width: 5, backgroundColor: "#EA580C" },
// // // // // // // // // // // // // // // // //   accentMr:  { width: 5, backgroundColor: "#B45309" },

// // // // // // // // // // // // // // // // //   fieldBody: { flex: 1, backgroundColor: "#FFEDD5", paddingVertical: 10, paddingHorizontal: 11, flexDirection: "row", alignItems: "center", gap: 9 },
// // // // // // // // // // // // // // // // //   fieldIdx:  { fontSize: 11, fontWeight: "800", color: "#FB923C", minWidth: 20 },
// // // // // // // // // // // // // // // // //   fieldName: { flex: 1, fontSize: 13, fontWeight: "600", color: "#7C2D12" },

// // // // // // // // // // // // // // // // //   langPill:       { backgroundColor: "#F97316", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20 },
// // // // // // // // // // // // // // // // //   langPillMr:     { backgroundColor: "#B45309" },
// // // // // // // // // // // // // // // // //   langPillText:   { fontSize: 10, fontWeight: "700", color: "#fff" },
// // // // // // // // // // // // // // // // //   langPillTextMr: { color: "#FEF3C7" },

// // // // // // // // // // // // // // // // //   // footer
// // // // // // // // // // // // // // // // //   footer:         { backgroundColor: "#FFF7ED", padding: 14, paddingBottom: 20, flexDirection: "row", gap: 8, borderTopWidth: 1.5, borderTopColor: "#F97316" },
// // // // // // // // // // // // // // // // //   fixBtn:         { flex: 1, height: 44, borderRadius: 13, backgroundColor: "#EA580C", alignItems: "center", justifyContent: "center" },
// // // // // // // // // // // // // // // // //   fixBtnText:     { color: "#fff", fontSize: 14, fontWeight: "700" },
// // // // // // // // // // // // // // // // //   dismissBtn:     { width: 44, height: 44, borderRadius: 13, borderWidth: 1, borderColor: "#F97316", backgroundColor: "#FFEDD5", alignItems: "center", justifyContent: "center" },
// // // // // // // // // // // // // // // // //   dismissBtnText: { fontSize: 14, color: "#EA580C", fontWeight: "700" },
// // // // // // // // // // // // // // // // // });









// // // // // // // // // // // ppp
// // // // // // // // // // // Step1.jsx
// // // // // // // // // // import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect } from "react";
// // // // // // // // // // import {
// // // // // // // // // //   View,
// // // // // // // // // //   Text,
// // // // // // // // // //   ScrollView,
// // // // // // // // // //   TouchableOpacity,
// // // // // // // // // //   TextInput,
// // // // // // // // // //   Image,
// // // // // // // // // //   Modal,
// // // // // // // // // //   StyleSheet,
// // // // // // // // // //   Animated,
// // // // // // // // // // } from "react-native";
// // // // // // // // // // import * as ImagePicker from "expo-image-picker";
// // // // // // // // // // import { Field, SectionHeader, sharedStyles as S } from "./SharedUI";

// // // // // // // // // // const REQUIRED_FIELDS = [
// // // // // // // // // //   { key: "firstName",     label: "First Name",           lang: "EN" },
// // // // // // // // // //   { key: "middleName",    label: "Middle Name",          lang: "EN" },
// // // // // // // // // //   { key: "lastName",      label: "Last Name / Surname",  lang: "EN" },
// // // // // // // // // //   { key: "firstNameMr",   label: "पहिले नाव",            lang: "MR" },
// // // // // // // // // //   { key: "middleNameMr",  label: "वडिलांचे नाव",         lang: "MR" },
// // // // // // // // // //   { key: "lastNameMr",    label: "शेवटचे नाव / आडनाव",  lang: "MR" },
// // // // // // // // // //   { key: "birthName",     label: "जन्म नाव",             lang: "MR" },
// // // // // // // // // //   { key: "birthNameEn",   label: "Birth Name",           lang: "EN" },
// // // // // // // // // //   { key: "candidateType", label: "Candidate Type",       lang: "EN" },
// // // // // // // // // //   { key: "photo",         label: "Photo",                lang: null  },
// // // // // // // // // // ];

// // // // // // // // // // const Step1 = forwardRef(({ data, setData, onNext }, ref) => {
// // // // // // // // // //   const [errorVisible, setErrorVisible] = useState(false);
// // // // // // // // // //   const [missingFields, setMissingFields] = useState([]);

// // // // // // // // // //   /* ── animation refs ─────────────────────────────────────────────────── */
// // // // // // // // // //   const stampScale   = useRef(new Animated.Value(2.5)).current;
// // // // // // // // // //   const stampOpacity = useRef(new Animated.Value(0)).current;
// // // // // // // // // //   const cardSlide    = useRef(new Animated.Value(60)).current;
// // // // // // // // // //   const cardFade     = useRef(new Animated.Value(0)).current; // FIXED: Was Animated.value
// // // // // // // // // //   const bgFade       = useRef(new Animated.Value(0)).current;

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (errorVisible) {
// // // // // // // // // //       // Reset values cleanly to avoid uninitialized cycle issues
// // // // // // // // // //       stampScale.setValue(2.5);
// // // // // // // // // //       stampOpacity.setValue(0);
// // // // // // // // // //       cardSlide.setValue(60);
// // // // // // // // // //       cardFade.setValue(0);
// // // // // // // // // //       bgFade.setValue(0);

// // // // // // // // // //       Animated.sequence([
// // // // // // // // // //         /* phase 1 – backdrop + card slide up */
// // // // // // // // // //         Animated.parallel([
// // // // // // // // // //           Animated.timing(bgFade, { toValue: 1, duration: 200, useNativeDriver: true }),
// // // // // // // // // //           Animated.spring(cardSlide, { toValue: 0, damping: 16, stiffness: 100, useNativeDriver: true }),
// // // // // // // // // //           Animated.timing(cardFade, { toValue: 1, duration: 250, useNativeDriver: true }),
// // // // // // // // // //         ]),
// // // // // // // // // //         /* phase 2 – stamp slams in */
// // // // // // // // // //         Animated.parallel([
// // // // // // // // // //           Animated.spring(stampScale, { toValue: 1, damping: 5, stiffness: 260, useNativeDriver: true }),
// // // // // // // // // //           Animated.timing(stampOpacity, { toValue: 0.9, duration: 150, useNativeDriver: true }),
// // // // // // // // // //         ]),
// // // // // // // // // //         /* phase 3 – stamp fades to watermark */
// // // // // // // // // //         Animated.timing(stampOpacity, {
// // // // // // // // // //           toValue: 0.13, duration: 900, delay: 400, useNativeDriver: true,
// // // // // // // // // //         }),
// // // // // // // // // //       ]).start();
// // // // // // // // // //     }
// // // // // // // // // //   }, [errorVisible]);

// // // // // // // // // //   /* ── setters ────────────────────────────────────────────────────────── */
// // // // // // // // // //   const set        = (k) => (v) => setData((p) => ({ ...p, [k]: v }));
// // // // // // // // // //   const setEnglish = (k) => (v) =>
// // // // // // // // // //     setData((p) => ({ ...p, [k]: v.replace(/[^\x00-\x7F]/g, "") }));
// // // // // // // // // //   const setMarathi = (k) => (v) =>
// // // // // // // // // //     setData((p) => ({ ...p, [k]: v.replace(/[^\u0900-\u097F\s]/g, "") }));

// // // // // // // // // //   /* ── validation ─────────────────────────────────────────────────────── */
// // // // // // // // // //   const validate = () => {
// // // // // // // // // //     const missing = REQUIRED_FIELDS.filter(
// // // // // // // // // //       (f) => !data[f.key] || data[f.key].toString().trim() === ""
// // // // // // // // // //     );
// // // // // // // // // //     if (missing.length > 0) {
// // // // // // // // // //       setMissingFields(missing);
// // // // // // // // // //       setErrorVisible(true);
// // // // // // // // // //       return false;
// // // // // // // // // //     }
// // // // // // // // // //     return true;
// // // // // // // // // //   };

// // // // // // // // // //   useImperativeHandle(ref, () => ({ validate }));
// // // // // // // // // //   const handleNext = () => {
// // // // // // // // // //     if (validate() && onNext) onNext();
// // // // // // // // // //   };

// // // // // // // // // //   /* ── image picker ───────────────────────────────────────────────────── */
// // // // // // // // // //   const pickImage = async () => {
// // // // // // // // // //     const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // // // // // // // //     if (!granted) {
// // // // // // // // // //       setMissingFields([
// // // // // // // // // //         { label: "Permission Required: Allow photo access.", lang: null },
// // // // // // // // // //       ]);
// // // // // // // // // //       setErrorVisible(true);
// // // // // // // // // //       return;
// // // // // // // // // //     }
// // // // // // // // // //     const r = await ImagePicker.launchImageLibraryAsync({
// // // // // // // // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // // // // // // // //       allowsEditing: true,
// // // // // // // // // //       aspect: [4, 4],
// // // // // // // // // //       quality: 0.8,
// // // // // // // // // //     });
// // // // // // // // // //     if (!r.canceled) set("photo")(r.assets[0].uri);
// // // // // // // // // //   };

// // // // // // // // // //   /* ── helpers ────────────────────────────────────────────────────────── */
// // // // // // // // // //   const isErr  = (k) => missingFields.some((f) => f.key === k);
// // // // // // // // // //   const errSty = (k) => (isErr(k) ? fieldErr : undefined);
// // // // // // // // // //   const filledCount = REQUIRED_FIELDS.length - missingFields.length;

// // // // // // // // // //   /* ═════════════════════════════════════════════════════════════════════ */
// // // // // // // // // //   return (
// // // // // // // // // //     <>
// // // // // // // // // //       {/* ═══════════════════════════════════════════════════════════════
// // // // // // // // // //           INSPECTION-REPORT  MISSING-FIELDS POPUP
// // // // // // // // // //       ═══════════════════════════════════════════════════════════════ */}
// // // // // // // // // //       <Modal
// // // // // // // // // //         transparent
// // // // // // // // // //         visible={errorVisible}
// // // // // // // // // //         animationType="none"
// // // // // // // // // //         onRequestClose={() => setErrorVisible(false)}
// // // // // // // // // //       >
// // // // // // // // // //         <Animated.View style={[m.overlay, { opacity: bgFade }]}>
// // // // // // // // // //           <Animated.View
// // // // // // // // // //             style={[
// // // // // // // // // //               m.cardShell,
// // // // // // // // // //               { transform: [{ translateY: cardSlide }], opacity: cardFade },
// // // // // // // // // //             ]}
// // // // // // // // // //           >
// // // // // // // // // //             {/* ── stacked-paper shadow layers ── */}
// // // // // // // // // //             <View style={m.under3} />
// // // // // // // // // //             <View style={m.under2} />
// // // // // // // // // //             <View style={m.under1} />

// // // // // // // // // //             {/* ── main paper ── */}
// // // // // // // // // //             <View style={m.paper}>

// // // // // // // // // //               {/* animated stamp watermark */}
// // // // // // // // // //               <Animated.View
// // // // // // // // // //                 style={[
// // // // // // // // // //                   m.stampAnchor,
// // // // // // // // // //                   {
// // // // // // // // // //                     transform: [{ scale: stampScale }],
// // // // // // // // // //                     opacity: stampOpacity,
// // // // // // // // // //                   },
// // // // // // // // // //                 ]}
// // // // // // // // // //               >
// // // // // // // // // //                 <View style={m.stampRing}>
// // // // // // // // // //                   <View style={m.stampInner}>
// // // // // // // // // //                     <Text style={m.stampTxt}>INCOMPLETE</Text>
// // // // // // // // // //                   </View>
// // // // // // // // // //                 </View>
// // // // // // // // // //               </Animated.View>

// // // // // // // // // //               {/* ── header ── */}
// // // // // // // // // //               <View style={m.header}>
// // // // // // // // // //                 <View style={m.iconBg}>
// // // // // // // // // //                   <Text style={m.iconEmoji}>📋</Text>
// // // // // // // // // //                 </View>
// // // // // // // // // //                 <View style={{ flex: 1 }}>
// // // // // // // // // //                   <Text style={m.hTitle}>Inspection Report</Text>
// // // // // // // // // //                   <Text style={m.hSub}>
// // // // // // // // // //                     {missingFields.length} field
// // // // // // // // // //                     {missingFields.length > 1 ? "s" : ""} need your attention
// // // // // // // // // //                   </Text>
// // // // // // // // // //                 </View>
// // // // // // // // // //                 <TouchableOpacity
// // // // // // // // // //                   onPress={() => setErrorVisible(false)}
// // // // // // // // // //                   hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
// // // // // // // // // //                   style={m.xBtn}
// // // // // // // // // //                 >
// // // // // // // // // //                   <Text style={m.xTxt}>✕</Text>
// // // // // // // // // //                 </TouchableOpacity>
// // // // // // // // // //               </View>

// // // // // // // // // //               {/* ── progress ruler ── */}
// // // // // // // // // //               <View style={m.progBox}>
// // // // // // // // // //                 <Text style={m.progLabel}>PROGRESS</Text>
// // // // // // // // // //                 <View style={m.blocks}>
// // // // // // // // // //                   {REQUIRED_FIELDS.map((_, i) => (
// // // // // // // // // //                     <View
// // // // // // // // // //                       key={i}
// // // // // // // // // //                       style={[m.block, i < filledCount ? m.blockOn : m.blockOff]}
// // // // // // // // // //                     />
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </View>
// // // // // // // // // //                 <View style={m.progNums}>
// // // // // // // // // //                   <Text style={m.numFill}>{filledCount}</Text>
// // // // // // // // // //                   <Text style={m.numOf}> of </Text>
// // // // // // // // // //                   <Text style={m.numTotal}>{REQUIRED_FIELDS.length}</Text>
// // // // // // // // // //                   <Text style={m.numOf}> complete</Text>
// // // // // // // // // //                 </View>
// // // // // // // // // //               </View>

// // // // // // // // // //               {/* ── dashed perforation ── */}
// // // // // // // // // //               <View style={m.dash} />

// // // // // // // // // //               {/* ── field checklist ── */}
// // // // // // // // // //               <ScrollView
// // // // // // // // // //                 style={m.scroll}
// // // // // // // // // //                 contentContainerStyle={m.scrollPad}
// // // // // // // // // //                 showsVerticalScrollIndicator={false}
// // // // // // // // // //               >
// // // // // // // // // //                 {missingFields.map((f, i) => (
// // // // // // // // // //                   <View
// // // // // // // // // //                     key={i}
// // // // // // // // // //                     style={[
// // // // // // // // // //                       m.row,
// // // // // // // // // //                       f.lang === "MR"
// // // // // // // // // //                         ? m.rowMr
// // // // // // // // // //                         : f.lang === null
// // // // // // // // // //                         ? m.rowNone
// // // // // // // // // //                         : m.rowEn,
// // // // // // // // // //                     ]}
// // // // // // // // // //                   >
// // // // // // // // // //                     {/* red-x checkbox */}
// // // // // // // // // //                     <View style={m.chk}>
// // // // // // // // // //                       <Text style={m.chkX}>✕</Text>
// // // // // // // // // //                     </View>

// // // // // // // // // //                     <View style={{ flex: 1 }}>
// // // // // // // // // //                       <View style={m.rowTop}>
// // // // // // // // // //                         <Text style={m.rowLabel} numberOfLines={1}>
// // // // // // // // // //                           {f.label}
// // // // // // // // // //                         </Text>
// // // // // // // // // //                         {f.lang && (
// // // // // // // // // //                           <View
// // // // // // // // // //                             style={[
// // // // // // // // // //                               m.pill,
// // // // // // // // // //                               f.lang === "MR" && m.pillMr,
// // // // // // // // // //                             ]}
// // // // // // // // // //                           >
// // // // // // // // // //                             <Text
// // // // // // // // // //                               style={[
// // // // // // // // // //                                 m.pillTxt,
// // // // // // // // // //                                 f.lang === "MR" && m.pillTxtMr,
// // // // // // // // // //                               ]}
// // // // // // // // // //                             >
// // // // // // // // // //                               {f.lang}
// // // // // // // // // //                             </Text>
// // // // // // // // // //                           </View>
// // // // // // // // // //                         )}
// // // // // // // // // //                       </View>
// // // // // // // // // //                       <Text style={m.rowHint}>
// // // // // // // // // //                         {f.lang === "MR"
// // // // // // // // // //                           ? "मराठी फील्ड भरा"
// // // // // // // // // //                           : f.lang === "EN"
// // // // // // // // // //                           ? "English field required"
// // // // // // // // // //                           : "Action required"}
// // // // // // // // // //                       </Text>
// // // // // // // // // //                     </View>

// // // // // // // // // //                     <Text style={m.rowIdx}>
// // // // // // // // // //                       {String(i + 1).padStart(2, "0")}
// // // // // // // // // //                     </Text>
// // // // // // // // // //                   </View>
// // // // // // // // // //                 ))}
// // // // // // // // // //               </ScrollView>

// // // // // // // // // //               {/* ── dashed perforation ── */}
// // // // // // // // // //               <View style={m.dash} />

// // // // // // // // // //               {/* ── tear-off stub ── */}
// // // // // // // // // //               <View style={m.stub}>
// // // // // // // // // //                 <Text style={m.stubHint}>
// // // // // // // // // //                   ← Complete the fields above to continue
// // // // // // // // // //                 </Text>
// // // // // // // // // //                 <TouchableOpacity
// // // // // // // // // //                   style={m.stubBtn}
// // // // // // // // // //                   activeOpacity={0.85}
// // // // // // // // // //                   onPress={() => setErrorVisible(false)}
// // // // // // // // // //                 >
// // // // // // // // // //                   <Text style={m.stubBtnTxt}>✎  Fix These Fields</Text>
// // // // // // // // // //                 </TouchableOpacity>
// // // // // // // // // //               </View>
// // // // // // // // // //             </View>
// // // // // // // // // //           </Animated.View>
// // // // // // // // // //         </Animated.View>
// // // // // // // // // //       </Modal>

// // // // // // // // // //       {/* ═══════════════════════════════════════════════════════════════
// // // // // // // // // //           MAIN FORM
// // // // // // // // // //       ═══════════════════════════════════════════════════════════════ */}
// // // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false}>
// // // // // // // // // //         <SectionHeader title="Basic Information - (Application Number : F2788)" />

// // // // // // // // // //         {/* English names */}
// // // // // // // // // //         <View style={S.row3}>
// // // // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // //             <Field
// // // // // // // // // //               label="First Name"
// // // // // // // // // //               required
// // // // // // // // // //               value={data.firstName}
// // // // // // // // // //               onChangeText={setEnglish("firstName")}
// // // // // // // // // //               placeholder="English"
// // // // // // // // // //               inputStyle={errSty("firstName")}
// // // // // // // // // //             />
// // // // // // // // // //           </View>
// // // // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // //             <Field
// // // // // // // // // //               label="Middle Name"
// // // // // // // // // //               required
// // // // // // // // // //               value={data.middleName}
// // // // // // // // // //               onChangeText={setEnglish("middleName")}
// // // // // // // // // //               placeholder="English"
// // // // // // // // // //               inputStyle={errSty("middleName")}
// // // // // // // // // //             />
// // // // // // // // // //           </View>
// // // // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // //             <Field
// // // // // // // // // //               label="Last Name / Surname"
// // // // // // // // // //               required
// // // // // // // // // //               value={data.lastName}
// // // // // // // // // //               onChangeText={setEnglish("lastName")}
// // // // // // // // // //               placeholder="English"
// // // // // // // // // //               inputStyle={errSty("lastName")}
// // // // // // // // // //             />
// // // // // // // // // //           </View>
// // // // // // // // // //         </View>

// // // // // // // // // //         {/* Marathi names */}
// // // // // // // // // //         <View style={S.row3}>
// // // // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // // //             <Field
// // // // // // // // // //               label="पहिले नाव"
// // // // // // // // // //               required
// // // // // // // // // //               value={data.firstNameMr}
// // // // // // // // // //               onChangeText={setMarathi("firstNameMr")}
// // // // // // // // // //               placeholder="मराठी"
// // // // // // // // // //               inputStyle={errSty("firstNameMr")}
// // // // // // // // // //             />
// // // // // // // // // //           </View>
// // // // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // // //             <Field
// // // // // // // // // //               label="वडिलांचे नाव"
// // // // // // // // // //               required
// // // // // // // // // //               value={data.middleNameMr}
// // // // // // // // // //               onChangeText={setMarathi("middleNameMr")}
// // // // // // // // // //               placeholder="मराठी"
// // // // // // // // // //               inputStyle={errSty("middleNameMr")}
// // // // // // // // // //             />
// // // // // // // // // //           </View>
// // // // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // // //             <Field
// // // // // // // // // //               label="शेवटचे नाव / आडनाव"
// // // // // // // // // //               required
// // // // // // // // // //               value={data.lastNameMr}
// // // // // // // // // //               onChangeText={setMarathi("lastNameMr")}
// // // // // // // // // //               placeholder="मराठी"
// // // // // // // // // //               inputStyle={errSty("lastNameMr")}
// // // // // // // // // //             />
// // // // // // // // // //           </View>
// // // // // // // // // //         </View>

// // // // // // // // // //         {/* Birth names */}
// // // // // // // // // //         <View style={S.row2}>
// // // // // // // // // //           <View style={{ flex: 1, marginRight: 8 }}>
// // // // // // // // // //             <Field
// // // // // // // // // //               label="जन्म नाव"
// // // // // // // // // //               required
// // // // // // // // // //               value={data.birthName}
// // // // // // // // // //               onChangeText={setMarathi("birthName")}
// // // // // // // // // //               placeholder="मराठी"
// // // // // // // // // //               inputStyle={errSty("birthName")}
// // // // // // // // // //             />
// // // // // // // // // //           </View>
// // // // // // // // // //           <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // // // // // //             <Field
// // // // // // // // // //               label="Birth Name"
// // // // // // // // // //               required
// // // // // // // // // //               value={data.birthNameEn}
// // // // // // // // // //               onChangeText={setEnglish("birthNameEn")}
// // // // // // // // // //               placeholder="English"
// // // // // // // // // //               inputStyle={errSty("birthNameEn")}
// // // // // // // // // //             />
// // // // // // // // // //           </View>
// // // // // // // // // //         </View>

// // // // // // // // // //         {/* Candidate type */}
// // // // // // // // // //         <Field
// // // // // // // // // //           label="Candidate Type"
// // // // // // // // // //           required
// // // // // // // // // //           value={data.candidateType}
// // // // // // // // // //           onChangeText={set("candidateType")}
// // // // // // // // // //           placeholder="e.g. वधू / वर"
// // // // // // // // // //           inputStyle={errSty("candidateType")}
// // // // // // // // // //         />

// // // // // // // // // //         {/* Photo */}
// // // // // // // // // //         <View style={{ marginBottom: 20 }}>
// // // // // // // // // //           <Text
// // // // // // // // // //             style={{
// // // // // // // // // //               fontSize: 13,
// // // // // // // // // //               fontWeight: "600",
// // // // // // // // // //               color: "#333",
// // // // // // // // // //               marginBottom: 5,
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             Photo <Text style={{ color: "red" }}>*</Text>
// // // // // // // // // //           </Text>
// // // // // // // // // //           <TouchableOpacity
// // // // // // // // // //             style={[
// // // // // // // // // //               S.photoBtn,
// // // // // // // // // //               data.photo && { padding: 0, overflow: "hidden" },
// // // // // // // // // //               errSty("photo"),
// // // // // // // // // //             ]}
// // // // // // // // // //             onPress={pickImage}
// // // // // // // // // //           >
// // // // // // // // // //             {data.photo ? (
// // // // // // // // // //               <Image
// // // // // // // // // //                 source={{ uri: data.photo }}
// // // // // // // // // //                 style={{ width: "100%", height: 120, resizeMode: "cover" }}
// // // // // // // // // //               />
// // // // // // // // // //             ) : (
// // // // // // // // // //               <Text style={S.photoBtnText}>📷 Choose Photo</Text>
// // // // // // // // // //             )}
// // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // //         </View>

// // // // // // // // // //         {/* Marathi scratch pad */}
// // // // // // // // // //         <View style={[S.marathiPadWrap, { marginBottom: 16 }]}>
// // // // // // // // // //           <Text
// // // // // // // // // //             style={{
// // // // // // // // // //               fontSize: 13,
// // // // // // // // // //               fontWeight: "600",
// // // // // // // // // //               color: "#333",
// // // // // // // // // //               marginBottom: 5,
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             (मराठी) Marathi Type Box
// // // // // // // // // //           </Text>
// // // // // // // // // //           <TextInput
// // // // // // // // // //             style={[S.marathiPad, { height: 80 }]}
// // // // // // // // // //             multiline
// // // // // // // // // //             placeholder="मराठी मध्ये टाईप करा..."
// // // // // // // // // //             value={data.marathiNote}
// // // // // // // // // //             onChangeText={setMarathi("marathiNote")}
// // // // // // // // // //           />
// // // // // // // // // //         </View>

// // // // // // // // // //         <View style={{ height: 30 }} />
// // // // // // // // // //       </ScrollView>
// // // // // // // // // //     </>
// // // // // // // // // //   );
// // // // // // // // // // });

// // // // // // // // // // export default Step1;

// // // // // // // // // // /* ─── field error highlight ──────────────────────────────────────────────── */
// // // // // // // // // // const fieldErr = {
// // // // // // // // // //   borderWidth: 1.5,
// // // // // // // // // //   borderColor: "#E24B4A",
// // // // // // // // // //   backgroundColor: "#FFF5F5",
// // // // // // // // // // };

// // // // // // // // // // /* ─── inspection-report popup styles ──────────────────────────────────────── */
// // // // // // // // // // const m = StyleSheet.create({

// // // // // // // // // //   /* backdrop */
// // // // // // // // // //   overlay: {
// // // // // // // // // //     flex: 1,
// // // // // // // // // //     backgroundColor: "rgba(0,0,0,0.5)",
// // // // // // // // // //     justifyContent: "center",
// // // // // // // // // //     alignItems: "center",
// // // // // // // // // //     padding: 20,
// // // // // // // // // //   },

// // // // // // // // // //   /* card wrapper – holds paper + shadow layers */
// // // // // // // // // //   cardShell: {
// // // // // // // // // //     width: "100%",
// // // // // // // // // //     maxWidth: 380,
// // // // // // // // // //     position: "relative",
// // // // // // // // // //   },

// // // // // // // // // //   /* stacked-paper shadow layers (offset down-right, progressively lighter) */
// // // // // // // // // //   under3: {
// // // // // // // // // //     position: "absolute",
// // // // // // // // // //     top: 6, left: 6, right: -4, bottom: -4,
// // // // // // // // // //     backgroundColor: "#b8b8be",
// // // // // // // // // //     borderRadius: 10,
// // // // // // // // // //   },
// // // // // // // // // //   under2: {
// // // // // // // // // //     position: "absolute",
// // // // // // // // // //     top: 4, left: 4, right: -2, bottom: -2,
// // // // // // // // // //     backgroundColor: "#d1d1d6",
// // // // // // // // // //     borderRadius: 9,
// // // // // // // // // //   },
// // // // // // // // // //   under1: {
// // // // // // // // // //     position: "absolute",
// // // // // // // // // //     top: 2, left: 2, right: -1, bottom: -1,
// // // // // // // // // //     backgroundColor: "#e3e3e8",
// // // // // // // // // //     borderRadius: 8,
// // // // // // // // // //   },

// // // // // // // // // //   /* main paper */
// // // // // // // // // //   paper: {
// // // // // // // // // //     backgroundColor: "#ffffff",
// // // // // // // // // //     borderRadius: 8,
// // // // // // // // // //     overflow: "hidden",
// // // // // // // // // //     position: "relative",
// // // // // // // // // //     shadowColor: "#000",
// // // // // // // // // //     shadowOffset: { width: 0, height: 4 },
// // // // // // // // // //     shadowOpacity: 0.08,
// // // // // // // // // //     shadowRadius: 16,
// // // // // // // // // //     elevation: 8,
// // // // // // // // // //   },

// // // // // // // // // //   /* ── stamp watermark ─────────────────────────────────────────────── */
// // // // // // // // // //   stampAnchor: {
// // // // // // // // // //     position: "absolute",
// // // // // // // // // //     top: 16, right: 14, zIndex: 5,
// // // // // // // // // //     pointerEvents: "none",
// // // // // // // // // //   },
// // // // // // // // // //   stampRing: {
// // // // // // // // // //     width: 112, height: 112, borderRadius: 56,
// // // // // // // // // //     borderWidth: 4, borderColor: "#dc2626",
// // // // // // // // // //     alignItems: "center", justifyContent: "center",
// // // // // // // // // //     backgroundColor: "rgba(220,38,38,0.06)",
// // // // // // // // // //   },
// // // // // // // // // //   stampInner: {
// // // // // // // // // //     width: 96, height: 96, borderRadius: 48,
// // // // // // // // // //     borderWidth: 1.5, borderColor: "rgba(220,38,38,0.35)",
// // // // // // // // // //     alignItems: "center", justifyContent: "center",
// // // // // // // // // //   },
// // // // // // // // // //   stampTxt: {
// // // // // // // // // //     fontSize: 12, fontWeight: "900", color: "#dc2626", letterSpacing: 2.5,
// // // // // // // // // //   },

// // // // // // // // // //   /* ── header ──────────────────────────────────────────────────────── */
// // // // // // // // // //   header: {
// // // // // // // // // //     flexDirection: "row", alignItems: "center",
// // // // // // // // // //     paddingHorizontal: 20, paddingTop: 24, paddingBottom: 8, gap: 12,
// // // // // // // // // //   },
// // // // // // // // // //   iconBg: {
// // // // // // // // // //     width: 44, height: 44, borderRadius: 12,
// // // // // // // // // //     backgroundColor: "#fff7ed", alignItems: "center", justifyContent: "center",
// // // // // // // // // //     borderWidth: 1, borderColor: "#fed7aa",
// // // // // // // // // //   },
// // // // // // // // // //   iconEmoji: { fontSize: 22 },
// // // // // // // // // //   hTitle: { fontSize: 17, fontWeight: "700", color: "#111827" },
// // // // // // // // // //   hSub: { fontSize: 12, color: "#9ca3af", marginTop: 2 },

// // // // // // // // // //   xBtn: {
// // // // // // // // // //     width: 30, height: 30, borderRadius: 8,
// // // // // // // // // //     backgroundColor: "#f9fafb", alignItems: "center", justifyContent: "center",
// // // // // // // // // //     borderWidth: 1, borderColor: "#e5e7eb",
// // // // // // // // // //   },
// // // // // // // // // //   xTxt: { color: "#9ca3af", fontSize: 13, fontWeight: "600" },

// // // // // // // // // //   /* ── progress ruler ──────────────────────────────────────────────── */
// // // // // // // // // //   progBox: {
// // // // // // // // // //     backgroundColor: "#fafafa", marginHorizontal: 16, borderRadius: 10,
// // // // // // // // // //     padding: 14, borderWidth: 1, borderColor: "#f3f4f6",
// // // // // // // // // //   },
// // // // // // // // // //   progLabel: { fontSize: 9, fontWeight: "800", color: "#9ca3af", letterSpacing: 2, marginBottom: 10 },
// // // // // // // // // //   blocks: { flexDirection: "row", gap: 3, marginBottom: 8 },
// // // // // // // // // //   block: { flex: 1, height: 6, borderRadius: 3 },
// // // // // // // // // //   blockOn: {
// // // // // // // // // //     backgroundColor: "#f97316",
// // // // // // // // // //     shadowColor: "#f97316", shadowRadius: 4,
// // // // // // // // // //     shadowOpacity: 0.35, shadowOffset: { width: 0, height: 0 },
// // // // // // // // // //   },
// // // // // // // // // //   blockOff: { backgroundColor: "#e5e7eb" },

// // // // // // // // // //   progNums: { flexDirection: "row", alignItems: "baseline" },
// // // // // // // // // //   numFill: { fontSize: 22, fontWeight: "800", color: "#f97316" },
// // // // // // // // // //   numOf: { fontSize: 13, color: "#9ca3af" },
// // // // // // // // // //   numTotal: { fontSize: 22, fontWeight: "800", color: "#d1d5db" },

// // // // // // // // // //   /* ── dashed perforation line ─────────────────────────────────────── */
// // // // // // // // // //   dash: {
// // // // // // // // // //     marginHorizontal: 20,
// // // // // // // // // //     borderBottomWidth: 1.5,
// // // // // // // // // //     borderBottomColor: "#d1d5db",
// // // // // // // // // //     borderStyle: "dashed",
// // // // // // // // // //   },

// // // // // // // // // //   /* ── field checklist ─────────────────────────────────────────────── */
// // // // // // // // // //   scroll: { maxHeight: 240 },
// // // // // // // // // //   scrollPad: { paddingVertical: 6, paddingHorizontal: 16, gap: 2 },

// // // // // // // // // //   row: {
// // // // // // // // // //     flexDirection: "row", alignItems: "center",
// // // // // // // // // //     paddingVertical: 10, paddingLeft: 14, gap: 10,
// // // // // // // // // //     borderLeftWidth: 3, borderLeftColor: "#dc2626",
// // // // // // // // // //   },
// // // // // // // // // //   rowEn:   { borderLeftColor: "#dc2626" },
// // // // // // // // // //   rowMr:   { borderLeftColor: "#d97706" },
// // // // // // // // // //   rowNone: { borderLeftColor: "#eab308" },

// // // // // // // // // //   chk: {
// // // // // // // // // //     width: 22, height: 22, borderRadius: 5,
// // // // // // // // // //     borderWidth: 1.5, borderColor: "#fca5a5", backgroundColor: "#fef2f2",
// // // // // // // // // //     alignItems: "center", justifyContent: "center",
// // // // // // // // // //   },
// // // // // // // // // //   chkX: { color: "#dc2626", fontSize: 11, fontWeight: "800" },

// // // // // // // // // //   rowTop: { flexDirection: "row", alignItems: "center", gap: 8 },
// // // // // // // // // //   rowLabel: { flex: 1, fontSize: 14, fontWeight: "600", color: "#374151" },
// // // // // // // // // //   rowHint: { fontSize: 11, color: "#d1d5db", marginTop: 2 },

// // // // // // // // // //   pill: { backgroundColor: "#fee2e2", paddingHorizontal: 7, paddingVertical: 2, borderRadius: 4 },
// // // // // // // // // //   pillMr: { backgroundColor: "#fef3c7" },
// // // // // // // // // //   pillTxt: { fontSize: 9, fontWeight: "700", color: "#dc2626" },
// // // // // // // // // //   pillTxtMr: { color: "#d97706" },

// // // // // // // // // //   rowIdx: {
// // // // // // // // // //     fontSize: 11, fontWeight: "700", color: "#d1d5db",
// // // // // // // // // //     fontFamily: "monospace", minWidth: 24, textAlign: "right",
// // // // // // // // // //   },

// // // // // // // // // //   /* ── tear-off stub ───────────────────────────────────────────────── */
// // // // // // // // // //   stub: {
// // // // // // // // // //     backgroundColor: "#fffbf5", paddingHorizontal: 20,
// // // // // // // // // //     paddingTop: 14, paddingBottom: 20,
// // // // // // // // // //     borderTopWidth: 1.5, borderTopColor: "#d1d5db", borderStyle: "dashed",
// // // // // // // // // //   },
// // // // // // // // // //   stubHint: { fontSize: 11, color: "#c4c4c4", marginBottom: 10, textAlign: "center" },
// // // // // // // // // //   stubBtn: {
// // // // // // // // // //     height: 46, borderRadius: 12, backgroundColor: "#f97316",
// // // // // // // // // //     alignItems: "center", justifyContent: "center",
// // // // // // // // // //     shadowColor: "#f97316", shadowRadius: 12,
// // // // // // // // // //     shadowOpacity: 0.25, shadowOffset: { width: 0, height: 4 }, elevation: 6,
// // // // // // // // // //   },
// // // // // // // // // //   stubBtnTxt: { color: "#fff", fontSize: 14, fontWeight: "700", letterSpacing: 0.5 },
// // // // // // // // // // });




// // // // // // // // // // // z.ai

// // // // // // // // // import React, { useState } from "react";
// // // // // // // // // import {
// // // // // // // // //   View, Text, ScrollView, TouchableOpacity,
// // // // // // // // //   TextInput, Image, Modal,
// // // // // // // // // } from "react-native";
// // // // // // // // // import * as ImagePicker from "expo-image-picker";
// // // // // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // // // // const REQUIRED_FIELDS = [
// // // // // // // // //   { key: "firstName",    label: "First Name",           lang: "EN" },
// // // // // // // // //   { key: "middleName",   label: "Middle Name",          lang: "EN" },
// // // // // // // // //   { key: "lastName",     label: "Last Name / Surname",  lang: "EN" },
// // // // // // // // //   { key: "firstNameMr",  label: "पहिले नाव",            lang: "MR" },
// // // // // // // // //   { key: "middleNameMr", label: "वडिलांचे नाव",         lang: "MR" },
// // // // // // // // //   { key: "lastNameMr",   label: "शेवटचे नाव / आडनाव",  lang: "MR" },
// // // // // // // // //   { key: "birthName",    label: "जन्म नाव",             lang: "MR" },
// // // // // // // // //   { key: "birthNameEn",  label: "Birth Name",           lang: "EN" },
// // // // // // // // //   { key: "candidateType",label: "Candidate Type",       lang: "EN" },
// // // // // // // // //   { key: "photo",        label: "Photo",                lang: null  },
// // // // // // // // // ];

// // // // // // // // // // Options for Candidate Type Dropdown
// // // // // // // // // const candidateTypeOptions = [
// // // // // // // // //   { label: "वधू (Bride)", value: "वधू" },
// // // // // // // // //   { label: "वर (Groom)", value: "वर" },
// // // // // // // // // ];

// // // // // // // // // export default function Step1({ data, setData, onNext }) {
// // // // // // // // //   const [errorVisible, setErrorVisible] = useState(false);
// // // // // // // // //   const [missingFields, setMissingFields] = useState([]);
// // // // // // // // //   const [showCandidatePicker, setShowCandidatePicker] = useState(false);

// // // // // // // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// // // // // // // // //   const setEnglish = (key) => (val) => {
// // // // // // // // //     const filtered = val.replace(/[^\x00-\x7F]/g, "");
// // // // // // // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // // // // // // //   };

// // // // // // // // //   const setMarathi = (key) => (val) => {
// // // // // // // // //     const filtered = val.replace(/[^\u0900-\u097F\s]/g, "");
// // // // // // // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // // // // // // //   };

// // // // // // // // //   const pickImage = async () => {
// // // // // // // // //     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // // // // // // //     if (permissionResult.granted === false) {
// // // // // // // // //       setMissingFields([{ label: "Permission Required: Allow photo access to upload an image.", lang: null }]);
// // // // // // // // //       setErrorVisible(true);
// // // // // // // // //       return;
// // // // // // // // //     }
// // // // // // // // //     const result = await ImagePicker.launchImageLibraryAsync({
// // // // // // // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // // // // // // //       allowsEditing: true,
// // // // // // // // //       aspect: [4, 4],
// // // // // // // // //       quality: 0.8,
// // // // // // // // //     });
// // // // // // // // //     if (!result.canceled) {
// // // // // // // // //       set("photo")(result.assets[0].uri);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // Single handler: validates → shows popup on error, or navigates on success
// // // // // // // // //   const handleNext = () => {
// // // // // // // // //     const missing = REQUIRED_FIELDS.filter(
// // // // // // // // //       (f) => !data[f.key] || data[f.key] === "" // Simplified check for dropdown compatibility
// // // // // // // // //     );
// // // // // // // // //     if (missing.length > 0) {
// // // // // // // // //       setMissingFields(missing);
// // // // // // // // //       setErrorVisible(true);
// // // // // // // // //     } else {
// // // // // // // // //       onNext && onNext();
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const isFieldMissing = (key) => missingFields.some((f) => f.key === key);

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       {/* ── VALIDATION POPUP ── */}
// // // // // // // // //       <Modal
// // // // // // // // //         transparent
// // // // // // // // //         visible={errorVisible}
// // // // // // // // //         animationType="fade"
// // // // // // // // //         onRequestClose={() => setErrorVisible(false)}
// // // // // // // // //       >
// // // // // // // // //         <View style={popStyles.overlay}>
// // // // // // // // //           <View style={popStyles.card}>

// // // // // // // // //             {/* Red banner header */}
// // // // // // // // //             <View style={popStyles.banner}>
// // // // // // // // //               <View style={popStyles.bannerRow}>
// // // // // // // // //                 <View style={popStyles.bannerIcon}>
// // // // // // // // //                   <View style={popStyles.warningTriangle}>
// // // // // // // // //                     <Text style={popStyles.warningExclaim}>!</Text>
// // // // // // // // //                   </View>
// // // // // // // // //                 </View>
// // // // // // // // //                 <View style={{ flex: 1 }}>
// // // // // // // // //                   <Text style={popStyles.bannerTitle}>Required fields missing</Text>
// // // // // // // // //                   <Text style={popStyles.bannerSub}>Fill in all fields to continue</Text>
// // // // // // // // //                 </View>
// // // // // // // // //                 <TouchableOpacity
// // // // // // // // //                   style={popStyles.closeBtn}
// // // // // // // // //                   onPress={() => setErrorVisible(false)}
// // // // // // // // //                   hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
// // // // // // // // //                 >
// // // // // // // // //                   <Text style={popStyles.closeBtnText}>✕</Text>
// // // // // // // // //                 </TouchableOpacity>
// // // // // // // // //               </View>
// // // // // // // // //               <View style={popStyles.bannerCurve} />
// // // // // // // // //             </View>

// // // // // // // // //             {/* Count badge */}
// // // // // // // // //             <View style={popStyles.countRow}>
// // // // // // // // //               <Text style={popStyles.sectionLabel}>Incomplete fields</Text>
// // // // // // // // //               <View style={popStyles.countBadge}>
// // // // // // // // //                 <Text style={popStyles.countBadgeText}>{missingFields.length}</Text>
// // // // // // // // //               </View>
// // // // // // // // //             </View>

// // // // // // // // //             {/* Scrollable field list */}
// // // // // // // // //             <ScrollView
// // // // // // // // //               style={popStyles.listScroll}
// // // // // // // // //               contentContainerStyle={popStyles.listContent}
// // // // // // // // //               showsVerticalScrollIndicator={false}
// // // // // // // // //             >
// // // // // // // // //               {missingFields.map((f, i) => (
// // // // // // // // //                 <View key={i} style={popStyles.fieldRow}>
// // // // // // // // //                   <View style={popStyles.fieldDot}>
// // // // // // // // //                     <Text style={popStyles.fieldDotText}>✕</Text>
// // // // // // // // //                   </View>
// // // // // // // // //                   <Text style={popStyles.fieldText} numberOfLines={1}>
// // // // // // // // //                     {f.label}
// // // // // // // // //                   </Text>
// // // // // // // // //                   {f.lang ? (
// // // // // // // // //                     <View style={[
// // // // // // // // //                       popStyles.langBadge,
// // // // // // // // //                       f.lang === "MR" && popStyles.langBadgeMr,
// // // // // // // // //                     ]}>
// // // // // // // // //                       <Text style={[
// // // // // // // // //                         popStyles.langBadgeText,
// // // // // // // // //                         f.lang === "MR" && popStyles.langBadgeTextMr,
// // // // // // // // //                       ]}>
// // // // // // // // //                         {f.lang}
// // // // // // // // //                       </Text>
// // // // // // // // //                     </View>
// // // // // // // // //                   ) : (
// // // // // // // // //                     <View style={popStyles.reqBadge}>
// // // // // // // // //                       <Text style={popStyles.reqBadgeText}>Required</Text>
// // // // // // // // //                     </View>
// // // // // // // // //                   )}
// // // // // // // // //                 </View>
// // // // // // // // //               ))}
// // // // // // // // //             </ScrollView>

// // // // // // // // //             {/* Divider */}
// // // // // // // // //             <View style={popStyles.divider} />

// // // // // // // // //             {/* Action buttons */}
// // // // // // // // //             <View style={popStyles.btnRow}>
// // // // // // // // //               <TouchableOpacity
// // // // // // // // //                 style={popStyles.dismissBtn}
// // // // // // // // //                 onPress={() => setErrorVisible(false)}
// // // // // // // // //                 activeOpacity={0.7}
// // // // // // // // //               >
// // // // // // // // //                 <Text style={popStyles.dismissText}>Dismiss</Text>
// // // // // // // // //               </TouchableOpacity>
// // // // // // // // //               <TouchableOpacity
// // // // // // // // //                 style={popStyles.fixBtn}
// // // // // // // // //                 onPress={() => setErrorVisible(false)}
// // // // // // // // //                 activeOpacity={0.85}
// // // // // // // // //               >
// // // // // // // // //                 <Text style={popStyles.fixText}>Fix fields →</Text>
// // // // // // // // //               </TouchableOpacity>
// // // // // // // // //             </View>

// // // // // // // // //           </View>
// // // // // // // // //         </View>
// // // // // // // // //       </Modal>

// // // // // // // // //       {/* ── CANDIDATE TYPE DROPDOWN MODAL ── */}
// // // // // // // // //       <Modal
// // // // // // // // //         transparent
// // // // // // // // //         visible={showCandidatePicker}
// // // // // // // // //         animationType="fade"
// // // // // // // // //         onRequestClose={() => setShowCandidatePicker(false)}
// // // // // // // // //       >
// // // // // // // // //         <TouchableOpacity 
// // // // // // // // //           style={dropdownStyles.overlay} 
// // // // // // // // //           activeOpacity={1} 
// // // // // // // // //           onPressOut={() => setShowCandidatePicker(false)}
// // // // // // // // //         >
// // // // // // // // //           <View style={dropdownStyles.container}>
// // // // // // // // //             <View style={dropdownStyles.header}>
// // // // // // // // //               <Text style={dropdownStyles.headerTitle}>Select Candidate Type</Text>
// // // // // // // // //             </View>
// // // // // // // // //             {candidateTypeOptions.map((option) => (
// // // // // // // // //               <TouchableOpacity
// // // // // // // // //                 key={option.value}
// // // // // // // // //                 style={[
// // // // // // // // //                   dropdownStyles.option,
// // // // // // // // //                   data.candidateType === option.value && dropdownStyles.optionSelected
// // // // // // // // //                 ]}
// // // // // // // // //                 onPress={() => {
// // // // // // // // //                   set("candidateType")(option.value);
// // // // // // // // //                   setShowCandidatePicker(false);
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 <Text style={[
// // // // // // // // //                   dropdownStyles.optionText,
// // // // // // // // //                   data.candidateType === option.value && dropdownStyles.optionTextSelected
// // // // // // // // //                 ]}>
// // // // // // // // //                   {option.label}
// // // // // // // // //                 </Text>
// // // // // // // // //                 {data.candidateType === option.value && (
// // // // // // // // //                   <Text style={dropdownStyles.checkMark}>✓</Text>
// // // // // // // // //                 )}
// // // // // // // // //               </TouchableOpacity>
// // // // // // // // //             ))}
// // // // // // // // //           </View>
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //       </Modal>

// // // // // // // // //       {/* ── FORM ── */}
// // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false}>
// // // // // // // // //         <SectionHeader title="Basic Information - (Application Number : F2788)" />

// // // // // // // // //         {/* English Name Row */}
// // // // // // // // //         <View style={styles.row3}>
// // // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // //             <Field
// // // // // // // // //               label="First Name" required
// // // // // // // // //               value={data.firstName}
// // // // // // // // //               onChangeText={setEnglish("firstName")}
// // // // // // // // //               keyboardType="ascii-capable"
// // // // // // // // //               autoCapitalize="words"
// // // // // // // // //               placeholder="English only"
// // // // // // // // //               inputStyle={isFieldMissing("firstName") && fieldErrStyle}
// // // // // // // // //             />
// // // // // // // // //           </View>
// // // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // //             <Field
// // // // // // // // //               label="Middle Name" required
// // // // // // // // //               value={data.middleName}
// // // // // // // // //               onChangeText={setEnglish("middleName")}
// // // // // // // // //               keyboardType="ascii-capable"
// // // // // // // // //               autoCapitalize="words"
// // // // // // // // //               placeholder="English only"
// // // // // // // // //               inputStyle={isFieldMissing("middleName") && fieldErrStyle}
// // // // // // // // //             />
// // // // // // // // //           </View>
// // // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // //             <Field
// // // // // // // // //               label="Last Name / Surname" required
// // // // // // // // //               value={data.lastName}
// // // // // // // // //               onChangeText={setEnglish("lastName")}
// // // // // // // // //               keyboardType="ascii-capable"
// // // // // // // // //               autoCapitalize="words"
// // // // // // // // //               placeholder="English only"
// // // // // // // // //               inputStyle={isFieldMissing("lastName") && fieldErrStyle}
// // // // // // // // //             />
// // // // // // // // //           </View>
// // // // // // // // //         </View>

// // // // // // // // //         {/* Marathi Name Row */}
// // // // // // // // //         <View style={styles.row3}>
// // // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // // //             <Field
// // // // // // // // //               label="पहिले नाव" required
// // // // // // // // //               value={data.firstNameMr}
// // // // // // // // //               onChangeText={setMarathi("firstNameMr")}
// // // // // // // // //               placeholder="मराठी मध्ये"
// // // // // // // // //               inputStyle={isFieldMissing("firstNameMr") && fieldErrStyle}
// // // // // // // // //             />
// // // // // // // // //           </View>
// // // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // // //             <Field
// // // // // // // // //               label="वडिलांचे नाव" required
// // // // // // // // //               value={data.middleNameMr}
// // // // // // // // //               onChangeText={setMarathi("middleNameMr")}
// // // // // // // // //               placeholder="मराठी मध्ये"
// // // // // // // // //               inputStyle={isFieldMissing("middleNameMr") && fieldErrStyle}
// // // // // // // // //             />
// // // // // // // // //           </View>
// // // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // // //             <Field
// // // // // // // // //               label="शेवटचे नाव / आडनाव" required
// // // // // // // // //               value={data.lastNameMr}
// // // // // // // // //               onChangeText={setMarathi("lastNameMr")}
// // // // // // // // //               placeholder="मराठी मध्ये"
// // // // // // // // //               inputStyle={isFieldMissing("lastNameMr") && fieldErrStyle}
// // // // // // // // //             />
// // // // // // // // //           </View>
// // // // // // // // //         </View>

// // // // // // // // //         {/* Birth Name Row */}
// // // // // // // // //         <View style={styles.row2}>
// // // // // // // // //           <View style={{ flex: 1, marginRight: 8 }}>
// // // // // // // // //             <Field
// // // // // // // // //               label="जन्म नाव" required
// // // // // // // // //               value={data.birthName}
// // // // // // // // //               onChangeText={setMarathi("birthName")}
// // // // // // // // //               placeholder="मराठी मध्ये"
// // // // // // // // //               inputStyle={isFieldMissing("birthName") && fieldErrStyle}
// // // // // // // // //             />
// // // // // // // // //           </View>
// // // // // // // // //           <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // // // // //             <Field
// // // // // // // // //               label="Birth Name" required
// // // // // // // // //               value={data.birthNameEn}
// // // // // // // // //               onChangeText={setEnglish("birthNameEn")}
// // // // // // // // //               keyboardType="ascii-capable"
// // // // // // // // //               autoCapitalize="words"
// // // // // // // // //               placeholder="English only"
// // // // // // // // //               inputStyle={isFieldMissing("birthNameEn") && fieldErrStyle}
// // // // // // // // //             />
// // // // // // // // //           </View>
// // // // // // // // //         </View>

// // // // // // // // //         {/* ── Candidate Type Dropdown ── */}
// // // // // // // // //         <View style={{ marginBottom: 12 }}>
// // // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // // //             Candidate Type <Text style={{ color: "red" }}>*</Text>
// // // // // // // // //           </Text>
// // // // // // // // //           <TouchableOpacity
// // // // // // // // //             style={[
// // // // // // // // //               dropdownStyles.pickerBtn,
// // // // // // // // //               isFieldMissing("candidateType") && { borderColor: "#E24B4A", borderWidth: 1.5 }
// // // // // // // // //             ]}
// // // // // // // // //             onPress={() => setShowCandidatePicker(true)}
// // // // // // // // //             activeOpacity={0.7}
// // // // // // // // //           >
// // // // // // // // //             <Text style={[dropdownStyles.pickerBtnText, !data.candidateType && { color: "#bbb" }]}>
// // // // // // // // //               {data.candidateType || "Select Type"}
// // // // // // // // //             </Text>
// // // // // // // // //             <Text style={dropdownStyles.pickerArrow}>▼</Text>
// // // // // // // // //           </TouchableOpacity>
// // // // // // // // //         </View>

// // // // // // // // //         {/* Photo */}
// // // // // // // // //         <View style={{ marginBottom: 12 }}>
// // // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // // //             Photo <Text style={{ color: "red" }}>*</Text>
// // // // // // // // //           </Text>
// // // // // // // // //           <TouchableOpacity
// // // // // // // // //             style={[
// // // // // // // // //               styles.photoBtn,
// // // // // // // // //               data.photo && { padding: 0, overflow: "hidden" },
// // // // // // // // //               isFieldMissing("photo") && { borderWidth: 1.5, borderColor: "#E24B4A" },
// // // // // // // // //             ]}
// // // // // // // // //             onPress={pickImage}
// // // // // // // // //           >
// // // // // // // // //             {data.photo ? (
// // // // // // // // //               <Image
// // // // // // // // //                 source={{ uri: data.photo }}
// // // // // // // // //                 style={{ width: "100%", height: 120, resizeMode: "cover" }}
// // // // // // // // //               />
// // // // // // // // //             ) : (
// // // // // // // // //               <Text style={styles.photoBtnText}>📷  Choose Photo</Text>
// // // // // // // // //             )}
// // // // // // // // //           </TouchableOpacity>
// // // // // // // // //         </View>

// // // // // // // // //         {/* Marathi Text Box */}
// // // // // // // // //         <View style={styles.marathiPadWrap}>
// // // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // // //             (मराठी) Marathi Type Box
// // // // // // // // //           </Text>
// // // // // // // // //           <TextInput
// // // // // // // // //             style={[styles.marathiPad, { height: 80 }]}
// // // // // // // // //             multiline
// // // // // // // // //             placeholder="मराठी मध्ये टाईप करा..."
// // // // // // // // //             placeholderTextColor="#bbb"
// // // // // // // // //             value={data.marathiNote}
// // // // // // // // //             onChangeText={setMarathi("marathiNote")}
// // // // // // // // //           />
// // // // // // // // //         </View>

// // // // // // // // //         {/* ── Single Next Button ── */}
// // // // // // // // //         <TouchableOpacity
// // // // // // // // //           style={nextBtnStyle}
// // // // // // // // //           onPress={handleNext}
// // // // // // // // //           activeOpacity={0.85}
// // // // // // // // //         >
// // // // // // // // //           <Text style={{ color: "#fff", fontWeight: "700", fontSize: 15 }}>Next →</Text>
// // // // // // // // //         </TouchableOpacity>

// // // // // // // // //       </ScrollView>
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // // ─── Styles ───────────────────────────────────────────────────────────────────

// // // // // // // // // const fieldErrStyle = {
// // // // // // // // //   borderWidth: 1.5,
// // // // // // // // //   borderColor: "#E24B4A",
// // // // // // // // //   backgroundColor: "#fff",
// // // // // // // // // };

// // // // // // // // // const nextBtnStyle = {
// // // // // // // // //   backgroundColor: "#f97316",
// // // // // // // // //   borderRadius: 14,
// // // // // // // // //   padding: 15,
// // // // // // // // //   alignItems: "center",
// // // // // // // // //   marginTop: 10,
// // // // // // // // //   marginBottom: 30,
// // // // // // // // // };

// // // // // // // // // const dropdownStyles = {
// // // // // // // // //   overlay: {
// // // // // // // // //     flex: 1,
// // // // // // // // //     backgroundColor: "rgba(0,0,0,0.4)",
// // // // // // // // //     justifyContent: "center",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     padding: 30,
// // // // // // // // //   },
// // // // // // // // //   container: {
// // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // //     borderRadius: 16,
// // // // // // // // //     width: "100%",
// // // // // // // // //     maxWidth: 300,
// // // // // // // // //     overflow: "hidden",
// // // // // // // // //     elevation: 8,
// // // // // // // // //   },
// // // // // // // // //   header: {
// // // // // // // // //     paddingVertical: 14,
// // // // // // // // //     paddingHorizontal: 16,
// // // // // // // // //     borderBottomWidth: 1,
// // // // // // // // //     borderBottomColor: "#eee",
// // // // // // // // //     backgroundColor: "#fafafa",
// // // // // // // // //   },
// // // // // // // // //   headerTitle: {
// // // // // // // // //     fontSize: 14,
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     color: "#333",
// // // // // // // // //   },
// // // // // // // // //   option: {
// // // // // // // // //     flexDirection: "row",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     justifyContent: "space-between",
// // // // // // // // //     paddingVertical: 14,
// // // // // // // // //     paddingHorizontal: 16,
// // // // // // // // //     borderBottomWidth: 0.5,
// // // // // // // // //     borderBottomColor: "#f0f0f0",
// // // // // // // // //   },
// // // // // // // // //   optionSelected: {
// // // // // // // // //     backgroundColor: "#FFF3E8", // Light orange tint
// // // // // // // // //   },
// // // // // // // // //   optionText: {
// // // // // // // // //     fontSize: 15,
// // // // // // // // //     color: "#333",
// // // // // // // // //   },
// // // // // // // // //   optionTextSelected: {
// // // // // // // // //     fontWeight: "600",
// // // // // // // // //     color: "#f97316",
// // // // // // // // //   },
// // // // // // // // //   checkMark: {
// // // // // // // // //     fontSize: 16,
// // // // // // // // //     color: "#f97316",
// // // // // // // // //     fontWeight: "800",
// // // // // // // // //   },
// // // // // // // // //   pickerBtn: {
// // // // // // // // //     flexDirection: "row",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     justifyContent: "space-between",
// // // // // // // // //     backgroundColor: "#f8f9fa",
// // // // // // // // //     borderRadius: 10,
// // // // // // // // //     borderWidth: 1,
// // // // // // // // //     borderColor: "#e0e0e0",
// // // // // // // // //     paddingHorizontal: 14,
// // // // // // // // //     height: 50,
// // // // // // // // //   },
// // // // // // // // //   pickerBtnText: {
// // // // // // // // //     fontSize: 14,
// // // // // // // // //     color: "#333",
// // // // // // // // //   },
// // // // // // // // //   pickerArrow: {
// // // // // // // // //     fontSize: 12,
// // // // // // // // //     color: "#888",
// // // // // // // // //     marginLeft: 8,
// // // // // // // // //   },
// // // // // // // // // };

// // // // // // // // // const popStyles = {
// // // // // // // // //   overlay: {
// // // // // // // // //     flex: 1,
// // // // // // // // //     backgroundColor: "rgba(0,0,0,0.55)",
// // // // // // // // //     justifyContent: "center",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     padding: 24,
// // // // // // // // //   },
// // // // // // // // //   card: {
// // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // //     borderRadius: 24,
// // // // // // // // //     width: "100%",
// // // // // // // // //     maxWidth: 340,
// // // // // // // // //     overflow: "hidden",
// // // // // // // // //     shadowColor: "#000",
// // // // // // // // //     shadowOffset: { width: 0, height: 8 },
// // // // // // // // //     shadowOpacity: 0.18,
// // // // // // // // //     shadowRadius: 24,
// // // // // // // // //     elevation: 12,
// // // // // // // // //   },
// // // // // // // // //   banner: {
// // // // // // // // //     backgroundColor: "#E24B4A",
// // // // // // // // //     paddingHorizontal: 20,
// // // // // // // // //     paddingTop: 22,
// // // // // // // // //     paddingBottom: 28,
// // // // // // // // //     position: "relative",
// // // // // // // // //   },
// // // // // // // // //   bannerRow: {
// // // // // // // // //     flexDirection: "row",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     gap: 14,
// // // // // // // // //   },
// // // // // // // // //   bannerIcon: {
// // // // // // // // //     width: 46,
// // // // // // // // //     height: 46,
// // // // // // // // //     borderRadius: 23,
// // // // // // // // //     backgroundColor: "rgba(255,255,255,0.22)",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     justifyContent: "center",
// // // // // // // // //     flexShrink: 0,
// // // // // // // // //   },
// // // // // // // // //   warningTriangle: {
// // // // // // // // //     width: 26,
// // // // // // // // //     height: 26,
// // // // // // // // //     borderRadius: 6,
// // // // // // // // //     backgroundColor: "rgba(255,255,255,0.3)",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     justifyContent: "center",
// // // // // // // // //   },
// // // // // // // // //   warningExclaim: {
// // // // // // // // //     color: "#fff",
// // // // // // // // //     fontSize: 16,
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     lineHeight: 20,
// // // // // // // // //   },
// // // // // // // // //   bannerTitle: {
// // // // // // // // //     fontSize: 16,
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     color: "#fff",
// // // // // // // // //     lineHeight: 20,
// // // // // // // // //   },
// // // // // // // // //   bannerSub: {
// // // // // // // // //     fontSize: 12,
// // // // // // // // //     color: "rgba(255,255,255,0.78)",
// // // // // // // // //     marginTop: 3,
// // // // // // // // //   },
// // // // // // // // //   closeBtn: {
// // // // // // // // //     width: 30,
// // // // // // // // //     height: 30,
// // // // // // // // //     borderRadius: 15,
// // // // // // // // //     backgroundColor: "rgba(255,255,255,0.2)",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     justifyContent: "center",
// // // // // // // // //     alignSelf: "flex-start",
// // // // // // // // //   },
// // // // // // // // //   closeBtnText: {
// // // // // // // // //     color: "#fff",
// // // // // // // // //     fontSize: 13,
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //   },
// // // // // // // // //   bannerCurve: {
// // // // // // // // //     position: "absolute",
// // // // // // // // //     bottom: 0,
// // // // // // // // //     left: 0,
// // // // // // // // //     right: 0,
// // // // // // // // //     height: 18,
// // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // //     borderTopLeftRadius: 18,
// // // // // // // // //     borderTopRightRadius: 18,
// // // // // // // // //   },
// // // // // // // // //   countRow: {
// // // // // // // // //     flexDirection: "row",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     justifyContent: "space-between",
// // // // // // // // //     paddingHorizontal: 20,
// // // // // // // // //     paddingTop: 6,
// // // // // // // // //     paddingBottom: 10,
// // // // // // // // //   },
// // // // // // // // //   sectionLabel: {
// // // // // // // // //     fontSize: 11,
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     color: "#999",
// // // // // // // // //     letterSpacing: 0.6,
// // // // // // // // //     textTransform: "uppercase",
// // // // // // // // //   },
// // // // // // // // //   countBadge: {
// // // // // // // // //     backgroundColor: "#FCEBEB",
// // // // // // // // //     borderRadius: 10,
// // // // // // // // //     paddingHorizontal: 9,
// // // // // // // // //     paddingVertical: 2,
// // // // // // // // //     borderWidth: 0.5,
// // // // // // // // //     borderColor: "#F7C1C1",
// // // // // // // // //   },
// // // // // // // // //   countBadgeText: {
// // // // // // // // //     fontSize: 12,
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     color: "#E24B4A",
// // // // // // // // //   },
// // // // // // // // //   listScroll: {
// // // // // // // // //     maxHeight: 230,
// // // // // // // // //     paddingHorizontal: 20,
// // // // // // // // //   },
// // // // // // // // //   listContent: {
// // // // // // // // //     gap: 7,
// // // // // // // // //     paddingBottom: 4,
// // // // // // // // //   },
// // // // // // // // //   fieldRow: {
// // // // // // // // //     flexDirection: "row",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     gap: 10,
// // // // // // // // //     paddingVertical: 10,
// // // // // // // // //     paddingHorizontal: 12,
// // // // // // // // //     backgroundColor: "#FCEBEB",
// // // // // // // // //     borderRadius: 11,
// // // // // // // // //     borderWidth: 0.5,
// // // // // // // // //     borderColor: "#F7C1C1",
// // // // // // // // //     marginBottom: 7,
// // // // // // // // //   },
// // // // // // // // //   fieldDot: {
// // // // // // // // //     width: 22,
// // // // // // // // //     height: 22,
// // // // // // // // //     borderRadius: 11,
// // // // // // // // //     backgroundColor: "#E24B4A",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     justifyContent: "center",
// // // // // // // // //     flexShrink: 0,
// // // // // // // // //   },
// // // // // // // // //   fieldDotText: {
// // // // // // // // //     color: "#fff",
// // // // // // // // //     fontSize: 10,
// // // // // // // // //     fontWeight: "800",
// // // // // // // // //   },
// // // // // // // // //   fieldText: {
// // // // // // // // //     flex: 1,
// // // // // // // // //     fontSize: 13,
// // // // // // // // //     fontWeight: "600",
// // // // // // // // //     color: "#791F1F",
// // // // // // // // //   },
// // // // // // // // //   langBadge: {
// // // // // // // // //     backgroundColor: "#E6F1FB",
// // // // // // // // //     borderRadius: 6,
// // // // // // // // //     paddingHorizontal: 8,
// // // // // // // // //     paddingVertical: 2,
// // // // // // // // //     borderWidth: 0.5,
// // // // // // // // //     borderColor: "#B5D4F4",
// // // // // // // // //   },
// // // // // // // // //   langBadgeText: {
// // // // // // // // //     fontSize: 11,
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     color: "#185FA5",
// // // // // // // // //   },
// // // // // // // // //   langBadgeMr: {
// // // // // // // // //     backgroundColor: "#FAEEDA",
// // // // // // // // //     borderColor: "#FAC775",
// // // // // // // // //   },
// // // // // // // // //   langBadgeTextMr: {
// // // // // // // // //     color: "#854F0B",
// // // // // // // // //   },
// // // // // // // // //   reqBadge: {
// // // // // // // // //     backgroundColor: "#F7C1C1",
// // // // // // // // //     borderRadius: 6,
// // // // // // // // //     paddingHorizontal: 8,
// // // // // // // // //     paddingVertical: 2,
// // // // // // // // //   },
// // // // // // // // //   reqBadgeText: {
// // // // // // // // //     fontSize: 11,
// // // // // // // // //     fontWeight: "600",
// // // // // // // // //     color: "#A32D2D",
// // // // // // // // //   },
// // // // // // // // //   divider: {
// // // // // // // // //     height: 0.5,
// // // // // // // // //     backgroundColor: "#eee",
// // // // // // // // //     marginTop: 12,
// // // // // // // // //   },
// // // // // // // // //   btnRow: {
// // // // // // // // //     flexDirection: "row",
// // // // // // // // //     gap: 10,
// // // // // // // // //     padding: 16,
// // // // // // // // //     paddingBottom: 20,
// // // // // // // // //   },
// // // // // // // // //   dismissBtn: {
// // // // // // // // //     flex: 1,
// // // // // // // // //     paddingVertical: 12,
// // // // // // // // //     borderRadius: 12,
// // // // // // // // //     borderWidth: 0.5,
// // // // // // // // //     borderColor: "#ddd",
// // // // // // // // //     backgroundColor: "#f5f5f5",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     justifyContent: "center",
// // // // // // // // //   },
// // // // // // // // //   dismissText: {
// // // // // // // // //     fontSize: 14,
// // // // // // // // //     fontWeight: "600",
// // // // // // // // //     color: "#777",
// // // // // // // // //   },
// // // // // // // // //   fixBtn: {
// // // // // // // // //     flex: 2,
// // // // // // // // //     paddingVertical: 12,
// // // // // // // // //     borderRadius: 12,
// // // // // // // // //     backgroundColor: "#f97316",
// // // // // // // // //     alignItems: "center",
// // // // // // // // //     justifyContent: "center",
// // // // // // // // //   },
// // // // // // // // //   fixText: {
// // // // // // // // //     fontSize: 14,
// // // // // // // // //     fontWeight: "700",
// // // // // // // // //     color: "#fff",
// // // // // // // // //   },
// // // // // // // // // };












// // // // // // // // import React, { useState } from "react";
// // // // // // // // import {
// // // // // // // //   View, Text, ScrollView, TouchableOpacity,
// // // // // // // //   TextInput, Image, Modal,
// // // // // // // // } from "react-native";
// // // // // // // // import * as ImagePicker from "expo-image-picker";
// // // // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // // // const REQUIRED_FIELDS = [
// // // // // // // //   { key: "firstName",    label: "First Name",           lang: "EN" },
// // // // // // // //   { key: "middleName",   label: "Middle Name",          lang: "EN" },
// // // // // // // //   { key: "lastName",     label: "Last Name / Surname",  lang: "EN" },
// // // // // // // //   { key: "firstNameMr",  label: "पहिले नाव",            lang: "MR" },
// // // // // // // //   { key: "middleNameMr", label: "वडिलांचे नाव",         lang: "MR" },
// // // // // // // //   { key: "lastNameMr",   label: "शेवटचे नाव / आडनाव",  lang: "MR" },
// // // // // // // //   { key: "birthName",    label: "जन्म नाव",             lang: "MR" },
// // // // // // // //   { key: "birthNameEn",  label: "Birth Name",           lang: "EN" },
// // // // // // // //   { key: "candidateType",label: "Candidate Type",       lang: "EN" },
// // // // // // // //   { key: "photo",        label: "Photo",                lang: null  },
// // // // // // // // ];

// // // // // // // // const candidateTypeOptions = [
// // // // // // // //   { label: "वधू (Bride)", value: "वधू" },
// // // // // // // //   { label: "वर (Groom)", value: "वर" },
// // // // // // // // ];

// // // // // // // // export default function Step1({ data, setData, onNext }) {
// // // // // // // //   const [errorVisible, setErrorVisible] = useState(false);
// // // // // // // //   const [missingFields, setMissingFields] = useState([]);
// // // // // // // //   const [showCandidatePicker, setShowCandidatePicker] = useState(false);
// // // // // // // //   const [highlightErrors, setHighlightErrors] = useState(false);

// // // // // // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// // // // // // // //   const setEnglish = (key) => (val) => {
// // // // // // // //     const filtered = val.replace(/[^\x00-\x7F]/g, "");
// // // // // // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // // // // // //   };

// // // // // // // //   const setMarathi = (key) => (val) => {
// // // // // // // //     const filtered = val.replace(/[^\u0900-\u097F\s]/g, "");
// // // // // // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // // // // // //   };

// // // // // // // //   const pickImage = async () => {
// // // // // // // //     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // // // // // //     if (permissionResult.granted === false) {
// // // // // // // //       setMissingFields([{ label: "Permission Required: Allow photo access to upload an image.", lang: null }]);
// // // // // // // //       setErrorVisible(true);
// // // // // // // //       return;
// // // // // // // //     }
// // // // // // // //     const result = await ImagePicker.launchImageLibraryAsync({
// // // // // // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // // // // // //       allowsEditing: true,
// // // // // // // //       aspect: [4, 4],
// // // // // // // //       quality: 0.8,
// // // // // // // //     });
// // // // // // // //     if (!result.canceled) {
// // // // // // // //       set("photo")(result.assets[0].uri);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Handles validation and navigation logic
// // // // // // // //   const handleNext = () => {
// // // // // // // //     const missing = REQUIRED_FIELDS.filter(
// // // // // // // //       (f) => !data[f.key] || data[f.key] === ""
// // // // // // // //     );

// // // // // // // //     if (missing.length > 0) {
// // // // // // // //       setMissingFields(missing);
// // // // // // // //       setErrorVisible(true);
// // // // // // // //       setHighlightErrors(true); // Enable error highlighting
// // // // // // // //     } else {
// // // // // // // //       setHighlightErrors(false); // Reset highlighting on success
// // // // // // // //       onNext && onNext();
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Helper to determine if field should show error style
// // // // // // // //   const isFieldMissing = (key) => highlightErrors && missingFields.some((f) => f.key === key);

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       {/* ── VALIDATION POPUP ── */}
// // // // // // // //       <Modal
// // // // // // // //         transparent
// // // // // // // //         visible={errorVisible}
// // // // // // // //         animationType="fade"
// // // // // // // //         onRequestClose={() => setErrorVisible(false)}
// // // // // // // //       >
// // // // // // // //         <View style={popStyles.overlay}>
// // // // // // // //           <View style={popStyles.card}>

// // // // // // // //             {/* Red banner header */}
// // // // // // // //             <View style={popStyles.banner}>
// // // // // // // //               <View style={popStyles.bannerRow}>
// // // // // // // //                 <View style={popStyles.bannerIcon}>
// // // // // // // //                   <View style={popStyles.warningTriangle}>
// // // // // // // //                     <Text style={popStyles.warningExclaim}>!</Text>
// // // // // // // //                   </View>
// // // // // // // //                 </View>
// // // // // // // //                 <View style={{ flex: 1 }}>
// // // // // // // //                   <Text style={popStyles.bannerTitle}>Required fields missing</Text>
// // // // // // // //                   <Text style={popStyles.bannerSub}>Fill in all fields to continue</Text>
// // // // // // // //                 </View>
// // // // // // // //                 <TouchableOpacity
// // // // // // // //                   style={popStyles.closeBtn}
// // // // // // // //                   onPress={() => setErrorVisible(false)}
// // // // // // // //                   hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
// // // // // // // //                 >
// // // // // // // //                   <Text style={popStyles.closeBtnText}>✕</Text>
// // // // // // // //                 </TouchableOpacity>
// // // // // // // //               </View>
// // // // // // // //               <View style={popStyles.bannerCurve} />
// // // // // // // //             </View>

// // // // // // // //             {/* Count badge */}
// // // // // // // //             <View style={popStyles.countRow}>
// // // // // // // //               <Text style={popStyles.sectionLabel}>Incomplete fields</Text>
// // // // // // // //               <View style={popStyles.countBadge}>
// // // // // // // //                 <Text style={popStyles.countBadgeText}>{missingFields.length}</Text>
// // // // // // // //               </View>
// // // // // // // //             </View>

// // // // // // // //             {/* Scrollable field list */}
// // // // // // // //             <ScrollView
// // // // // // // //               style={popStyles.listScroll}
// // // // // // // //               contentContainerStyle={popStyles.listContent}
// // // // // // // //               showsVerticalScrollIndicator={false}
// // // // // // // //             >
// // // // // // // //               {missingFields.map((f, i) => (
// // // // // // // //                 <View key={i} style={popStyles.fieldRow}>
// // // // // // // //                   <View style={popStyles.fieldDot}>
// // // // // // // //                     <Text style={popStyles.fieldDotText}>✕</Text>
// // // // // // // //                   </View>
// // // // // // // //                   <Text style={popStyles.fieldText} numberOfLines={1}>
// // // // // // // //                     {f.label}
// // // // // // // //                   </Text>
// // // // // // // //                   {f.lang ? (
// // // // // // // //                     <View style={[
// // // // // // // //                       popStyles.langBadge,
// // // // // // // //                       f.lang === "MR" && popStyles.langBadgeMr,
// // // // // // // //                     ]}>
// // // // // // // //                       <Text style={[
// // // // // // // //                         popStyles.langBadgeText,
// // // // // // // //                         f.lang === "MR" && popStyles.langBadgeTextMr,
// // // // // // // //                       ]}>
// // // // // // // //                         {f.lang}
// // // // // // // //                       </Text>
// // // // // // // //                     </View>
// // // // // // // //                   ) : (
// // // // // // // //                     <View style={popStyles.reqBadge}>
// // // // // // // //                       <Text style={popStyles.reqBadgeText}>Required</Text>
// // // // // // // //                     </View>
// // // // // // // //                   )}
// // // // // // // //                 </View>
// // // // // // // //               ))}
// // // // // // // //             </ScrollView>

// // // // // // // //             {/* Divider */}
// // // // // // // //             <View style={popStyles.divider} />

// // // // // // // //             {/* Action buttons */}
// // // // // // // //             <View style={popStyles.btnRow}>
// // // // // // // //               <TouchableOpacity
// // // // // // // //                 style={popStyles.dismissBtn}
// // // // // // // //                 onPress={() => setErrorVisible(false)}
// // // // // // // //                 activeOpacity={0.7}
// // // // // // // //               >
// // // // // // // //                 <Text style={popStyles.dismissText}>Dismiss</Text>
// // // // // // // //               </TouchableOpacity>
// // // // // // // //               <TouchableOpacity
// // // // // // // //                 style={popStyles.fixBtn}
// // // // // // // //                 onPress={handleNext} // Re-validates and navigates if valid
// // // // // // // //                 activeOpacity={0.85}
// // // // // // // //               >
// // // // // // // //                 <Text style={popStyles.fixText}>Fix fields →</Text>
// // // // // // // //               </TouchableOpacity>
// // // // // // // //             </View>

// // // // // // // //           </View>
// // // // // // // //         </View>
// // // // // // // //       </Modal>

// // // // // // // //       {/* ── CANDIDATE TYPE DROPDOWN MODAL ── */}
// // // // // // // //       <Modal
// // // // // // // //         transparent
// // // // // // // //         visible={showCandidatePicker}
// // // // // // // //         animationType="fade"
// // // // // // // //         onRequestClose={() => setShowCandidatePicker(false)}
// // // // // // // //       >
// // // // // // // //         <TouchableOpacity 
// // // // // // // //           style={dropdownStyles.overlay} 
// // // // // // // //           activeOpacity={1} 
// // // // // // // //           onPressOut={() => setShowCandidatePicker(false)}
// // // // // // // //         >
// // // // // // // //           <View style={dropdownStyles.container}>
// // // // // // // //             <View style={dropdownStyles.header}>
// // // // // // // //               <Text style={dropdownStyles.headerTitle}>Select Candidate Type</Text>
// // // // // // // //             </View>
// // // // // // // //             {candidateTypeOptions.map((option) => (
// // // // // // // //               <TouchableOpacity
// // // // // // // //                 key={option.value}
// // // // // // // //                 style={[
// // // // // // // //                   dropdownStyles.option,
// // // // // // // //                   data.candidateType === option.value && dropdownStyles.optionSelected
// // // // // // // //                 ]}
// // // // // // // //                 onPress={() => {
// // // // // // // //                   set("candidateType")(option.value);
// // // // // // // //                   setShowCandidatePicker(false);
// // // // // // // //                 }}
// // // // // // // //               >
// // // // // // // //                 <Text style={[
// // // // // // // //                   dropdownStyles.optionText,
// // // // // // // //                   data.candidateType === option.value && dropdownStyles.optionTextSelected
// // // // // // // //                 ]}>
// // // // // // // //                   {option.label}
// // // // // // // //                 </Text>
// // // // // // // //                 {data.candidateType === option.value && (
// // // // // // // //                   <Text style={dropdownStyles.checkMark}>✓</Text>
// // // // // // // //                 )}
// // // // // // // //               </TouchableOpacity>
// // // // // // // //             ))}
// // // // // // // //           </View>
// // // // // // // //         </TouchableOpacity>
// // // // // // // //       </Modal>

// // // // // // // //       {/* ── FORM ── */}
// // // // // // // //       <ScrollView showsVerticalScrollIndicator={false}>
// // // // // // // //         <SectionHeader title="Basic Information - (Application Number : F2788)" />

// // // // // // // //         {/* English Name Row */}
// // // // // // // //         <View style={styles.row3}>
// // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // //             <Field
// // // // // // // //               label="First Name" required
// // // // // // // //               value={data.firstName}
// // // // // // // //               onChangeText={setEnglish("firstName")}
// // // // // // // //               keyboardType="ascii-capable"
// // // // // // // //               autoCapitalize="words"
// // // // // // // //               placeholder="English only"
// // // // // // // //               inputStyle={isFieldMissing("firstName") && fieldErrStyle}
// // // // // // // //             />
// // // // // // // //           </View>
// // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // //             <Field
// // // // // // // //               label="Middle Name" required
// // // // // // // //               value={data.middleName}
// // // // // // // //               onChangeText={setEnglish("middleName")}
// // // // // // // //               keyboardType="ascii-capable"
// // // // // // // //               autoCapitalize="words"
// // // // // // // //               placeholder="English only"
// // // // // // // //               inputStyle={isFieldMissing("middleName") && fieldErrStyle}
// // // // // // // //             />
// // // // // // // //           </View>
// // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // //             <Field
// // // // // // // //               label="Last Name / Surname" required
// // // // // // // //               value={data.lastName}
// // // // // // // //               onChangeText={setEnglish("lastName")}
// // // // // // // //               keyboardType="ascii-capable"
// // // // // // // //               autoCapitalize="words"
// // // // // // // //               placeholder="English only"
// // // // // // // //               inputStyle={isFieldMissing("lastName") && fieldErrStyle}
// // // // // // // //             />
// // // // // // // //           </View>
// // // // // // // //         </View>

// // // // // // // //         {/* Marathi Name Row */}
// // // // // // // //         <View style={styles.row3}>
// // // // // // // //           <View style={{ flex: 1, marginRight: 6 }}>
// // // // // // // //             <Field
// // // // // // // //               label="पहिले नाव" required
// // // // // // // //               value={data.firstNameMr}
// // // // // // // //               onChangeText={setMarathi("firstNameMr")}
// // // // // // // //               placeholder="मराठी मध्ये"
// // // // // // // //               inputStyle={isFieldMissing("firstNameMr") && fieldErrStyle}
// // // // // // // //             />
// // // // // // // //           </View>
// // // // // // // //           <View style={{ flex: 1, marginHorizontal: 3 }}>
// // // // // // // //             <Field
// // // // // // // //               label="वडिलांचे नाव" required
// // // // // // // //               value={data.middleNameMr}
// // // // // // // //               onChangeText={setMarathi("middleNameMr")}
// // // // // // // //               placeholder="मराठी मध्ये"
// // // // // // // //               inputStyle={isFieldMissing("middleNameMr") && fieldErrStyle}
// // // // // // // //             />
// // // // // // // //           </View>
// // // // // // // //           <View style={{ flex: 1, marginLeft: 6 }}>
// // // // // // // //             <Field
// // // // // // // //               label="शेवटचे नाव / आडनाव" required
// // // // // // // //               value={data.lastNameMr}
// // // // // // // //               onChangeText={setMarathi("lastNameMr")}
// // // // // // // //               placeholder="मराठी मध्ये"
// // // // // // // //               inputStyle={isFieldMissing("lastNameMr") && fieldErrStyle}
// // // // // // // //             />
// // // // // // // //           </View>
// // // // // // // //         </View>

// // // // // // // //         {/* Birth Name Row */}
// // // // // // // //         <View style={styles.row2}>
// // // // // // // //           <View style={{ flex: 1, marginRight: 8 }}>
// // // // // // // //             <Field
// // // // // // // //               label="जन्म नाव" required
// // // // // // // //               value={data.birthName}
// // // // // // // //               onChangeText={setMarathi("birthName")}
// // // // // // // //               placeholder="मराठी मध्ये"
// // // // // // // //               inputStyle={isFieldMissing("birthName") && fieldErrStyle}
// // // // // // // //             />
// // // // // // // //           </View>
// // // // // // // //           <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // // // //             <Field
// // // // // // // //               label="Birth Name" required
// // // // // // // //               value={data.birthNameEn}
// // // // // // // //               onChangeText={setEnglish("birthNameEn")}
// // // // // // // //               keyboardType="ascii-capable"
// // // // // // // //               autoCapitalize="words"
// // // // // // // //               placeholder="English only"
// // // // // // // //               inputStyle={isFieldMissing("birthNameEn") && fieldErrStyle}
// // // // // // // //             />
// // // // // // // //           </View>
// // // // // // // //         </View>

// // // // // // // //         {/* Candidate Type Dropdown */}
// // // // // // // //         <View style={{ marginBottom: 12 }}>
// // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // //             Candidate Type <Text style={{ color: "red" }}>*</Text>
// // // // // // // //           </Text>
// // // // // // // //           <TouchableOpacity
// // // // // // // //             style={[
// // // // // // // //               dropdownStyles.pickerBtn,
// // // // // // // //               isFieldMissing("candidateType") && { borderColor: "#E24B4A", borderWidth: 1.5 }
// // // // // // // //             ]}
// // // // // // // //             onPress={() => setShowCandidatePicker(true)}
// // // // // // // //             activeOpacity={0.7}
// // // // // // // //           >
// // // // // // // //             <Text style={[dropdownStyles.pickerBtnText, !data.candidateType && { color: "#bbb" }]}>
// // // // // // // //               {data.candidateType || "Select Type"}
// // // // // // // //             </Text>
// // // // // // // //             <Text style={dropdownStyles.pickerArrow}>▼</Text>
// // // // // // // //           </TouchableOpacity>
// // // // // // // //         </View>

// // // // // // // //         {/* Photo */}
// // // // // // // //         <View style={{ marginBottom: 12 }}>
// // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // //             Photo <Text style={{ color: "red" }}>*</Text>
// // // // // // // //           </Text>
// // // // // // // //           <TouchableOpacity
// // // // // // // //             style={[
// // // // // // // //               styles.photoBtn,
// // // // // // // //               data.photo && { padding: 0, overflow: "hidden" },
// // // // // // // //               isFieldMissing("photo") && { borderWidth: 1.5, borderColor: "#E24B4A" },
// // // // // // // //             ]}
// // // // // // // //             onPress={pickImage}
// // // // // // // //           >
// // // // // // // //             {data.photo ? (
// // // // // // // //               <Image
// // // // // // // //                 source={{ uri: data.photo }}
// // // // // // // //                 style={{ width: "100%", height: 120, resizeMode: "cover" }}
// // // // // // // //               />
// // // // // // // //             ) : (
// // // // // // // //               <Text style={styles.photoBtnText}>📷  Choose Photo</Text>
// // // // // // // //             )}
// // // // // // // //           </TouchableOpacity>
// // // // // // // //         </View>

// // // // // // // //         {/* Marathi Text Box */}
// // // // // // // //         <View style={styles.marathiPadWrap}>
// // // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // // // // //             (मराठी) Marathi Type Box
// // // // // // // //           </Text>
// // // // // // // //           <TextInput
// // // // // // // //             style={[styles.marathiPad, { height: 80 }]}
// // // // // // // //             multiline
// // // // // // // //             placeholder="मराठी मध्ये टाईप करा..."
// // // // // // // //             placeholderTextColor="#bbb"
// // // // // // // //             value={data.marathiNote}
// // // // // // // //             onChangeText={setMarathi("marathiNote")}
// // // // // // // //           />
// // // // // // // //         </View>

// // // // // // // //         {/* ── Next Button Removed ── */}

// // // // // // // //       </ScrollView>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // // ─── Styles ───────────────────────────────────────────────────────────────────

// // // // // // // // const fieldErrStyle = {
// // // // // // // //   borderWidth: 1.5,
// // // // // // // //   borderColor: "#E24B4A",
// // // // // // // //   backgroundColor: "#fff",
// // // // // // // // };

// // // // // // // // const dropdownStyles = {
// // // // // // // //   overlay: {
// // // // // // // //     flex: 1,
// // // // // // // //     backgroundColor: "rgba(0,0,0,0.4)",
// // // // // // // //     justifyContent: "center",
// // // // // // // //     alignItems: "center",
// // // // // // // //     padding: 30,
// // // // // // // //   },
// // // // // // // //   container: {
// // // // // // // //     backgroundColor: "#fff",
// // // // // // // //     borderRadius: 16,
// // // // // // // //     width: "100%",
// // // // // // // //     maxWidth: 300,
// // // // // // // //     overflow: "hidden",
// // // // // // // //     elevation: 8,
// // // // // // // //   },
// // // // // // // //   header: {
// // // // // // // //     paddingVertical: 14,
// // // // // // // //     paddingHorizontal: 16,
// // // // // // // //     borderBottomWidth: 1,
// // // // // // // //     borderBottomColor: "#eee",
// // // // // // // //     backgroundColor: "#fafafa",
// // // // // // // //   },
// // // // // // // //   headerTitle: {
// // // // // // // //     fontSize: 14,
// // // // // // // //     fontWeight: "700",
// // // // // // // //     color: "#333",
// // // // // // // //   },
// // // // // // // //   option: {
// // // // // // // //     flexDirection: "row",
// // // // // // // //     alignItems: "center",
// // // // // // // //     justifyContent: "space-between",
// // // // // // // //     paddingVertical: 14,
// // // // // // // //     paddingHorizontal: 16,
// // // // // // // //     borderBottomWidth: 0.5,
// // // // // // // //     borderBottomColor: "#f0f0f0",
// // // // // // // //   },
// // // // // // // //   optionSelected: {
// // // // // // // //     backgroundColor: "#FFF3E8",
// // // // // // // //   },
// // // // // // // //   optionText: {
// // // // // // // //     fontSize: 15,
// // // // // // // //     color: "#333",
// // // // // // // //   },
// // // // // // // //   optionTextSelected: {
// // // // // // // //     fontWeight: "600",
// // // // // // // //     color: "#f97316",
// // // // // // // //   },
// // // // // // // //   checkMark: {
// // // // // // // //     fontSize: 16,
// // // // // // // //     color: "#f97316",
// // // // // // // //     fontWeight: "800",
// // // // // // // //   },
// // // // // // // //   pickerBtn: {
// // // // // // // //     flexDirection: "row",
// // // // // // // //     alignItems: "center",
// // // // // // // //     justifyContent: "space-between",
// // // // // // // //     backgroundColor: "#f8f9fa",
// // // // // // // //     borderRadius: 10,
// // // // // // // //     borderWidth: 1,
// // // // // // // //     borderColor: "#e0e0e0",
// // // // // // // //     paddingHorizontal: 14,
// // // // // // // //     height: 50,
// // // // // // // //   },
// // // // // // // //   pickerBtnText: {
// // // // // // // //     fontSize: 14,
// // // // // // // //     color: "#333",
// // // // // // // //   },
// // // // // // // //   pickerArrow: {
// // // // // // // //     fontSize: 12,
// // // // // // // //     color: "#888",
// // // // // // // //     marginLeft: 8,
// // // // // // // //   },
// // // // // // // // };

// // // // // // // // const popStyles = {
// // // // // // // //   overlay: {
// // // // // // // //     flex: 1,
// // // // // // // //     backgroundColor: "rgba(0,0,0,0.55)",
// // // // // // // //     justifyContent: "center",
// // // // // // // //     alignItems: "center",
// // // // // // // //     padding: 24,
// // // // // // // //   },
// // // // // // // //   card: {
// // // // // // // //     backgroundColor: "#fff",
// // // // // // // //     borderRadius: 24,
// // // // // // // //     width: "100%",
// // // // // // // //     maxWidth: 340,
// // // // // // // //     overflow: "hidden",
// // // // // // // //     shadowColor: "#000",
// // // // // // // //     shadowOffset: { width: 0, height: 8 },
// // // // // // // //     shadowOpacity: 0.18,
// // // // // // // //     shadowRadius: 24,
// // // // // // // //     elevation: 12,
// // // // // // // //   },
// // // // // // // //   banner: {
// // // // // // // //     backgroundColor: "#E24B4A",
// // // // // // // //     paddingHorizontal: 20,
// // // // // // // //     paddingTop: 22,
// // // // // // // //     paddingBottom: 28,
// // // // // // // //     position: "relative",
// // // // // // // //   },
// // // // // // // //   bannerRow: {
// // // // // // // //     flexDirection: "row",
// // // // // // // //     alignItems: "center",
// // // // // // // //     gap: 14,
// // // // // // // //   },
// // // // // // // //   bannerIcon: {
// // // // // // // //     width: 46,
// // // // // // // //     height: 46,
// // // // // // // //     borderRadius: 23,
// // // // // // // //     backgroundColor: "rgba(255,255,255,0.22)",
// // // // // // // //     alignItems: "center",
// // // // // // // //     justifyContent: "center",
// // // // // // // //     flexShrink: 0,
// // // // // // // //   },
// // // // // // // //   warningTriangle: {
// // // // // // // //     width: 26,
// // // // // // // //     height: 26,
// // // // // // // //     borderRadius: 6,
// // // // // // // //     backgroundColor: "rgba(255,255,255,0.3)",
// // // // // // // //     alignItems: "center",
// // // // // // // //     justifyContent: "center",
// // // // // // // //   },
// // // // // // // //   warningExclaim: {
// // // // // // // //     color: "#fff",
// // // // // // // //     fontSize: 16,
// // // // // // // //     fontWeight: "700",
// // // // // // // //     lineHeight: 20,
// // // // // // // //   },
// // // // // // // //   bannerTitle: {
// // // // // // // //     fontSize: 16,
// // // // // // // //     fontWeight: "700",
// // // // // // // //     color: "#fff",
// // // // // // // //     lineHeight: 20,
// // // // // // // //   },
// // // // // // // //   bannerSub: {
// // // // // // // //     fontSize: 12,
// // // // // // // //     color: "rgba(255,255,255,0.78)",
// // // // // // // //     marginTop: 3,
// // // // // // // //   },
// // // // // // // //   closeBtn: {
// // // // // // // //     width: 30,
// // // // // // // //     height: 30,
// // // // // // // //     borderRadius: 15,
// // // // // // // //     backgroundColor: "rgba(255,255,255,0.2)",
// // // // // // // //     alignItems: "center",
// // // // // // // //     justifyContent: "center",
// // // // // // // //     alignSelf: "flex-start",
// // // // // // // //   },
// // // // // // // //   closeBtnText: {
// // // // // // // //     color: "#fff",
// // // // // // // //     fontSize: 13,
// // // // // // // //     fontWeight: "700",
// // // // // // // //   },
// // // // // // // //   bannerCurve: {
// // // // // // // //     position: "absolute",
// // // // // // // //     bottom: 0,
// // // // // // // //     left: 0,
// // // // // // // //     right: 0,
// // // // // // // //     height: 18,
// // // // // // // //     backgroundColor: "#fff",
// // // // // // // //     borderTopLeftRadius: 18,
// // // // // // // //     borderTopRightRadius: 18,
// // // // // // // //   },
// // // // // // // //   countRow: {
// // // // // // // //     flexDirection: "row",
// // // // // // // //     alignItems: "center",
// // // // // // // //     justifyContent: "space-between",
// // // // // // // //     paddingHorizontal: 20,
// // // // // // // //     paddingTop: 6,
// // // // // // // //     paddingBottom: 10,
// // // // // // // //   },
// // // // // // // //   sectionLabel: {
// // // // // // // //     fontSize: 11,
// // // // // // // //     fontWeight: "700",
// // // // // // // //     color: "#999",
// // // // // // // //     letterSpacing: 0.6,
// // // // // // // //     textTransform: "uppercase",
// // // // // // // //   },
// // // // // // // //   countBadge: {
// // // // // // // //     backgroundColor: "#FCEBEB",
// // // // // // // //     borderRadius: 10,
// // // // // // // //     paddingHorizontal: 9,
// // // // // // // //     paddingVertical: 2,
// // // // // // // //     borderWidth: 0.5,
// // // // // // // //     borderColor: "#F7C1C1",
// // // // // // // //   },
// // // // // // // //   countBadgeText: {
// // // // // // // //     fontSize: 12,
// // // // // // // //     fontWeight: "700",
// // // // // // // //     color: "#E24B4A",
// // // // // // // //   },
// // // // // // // //   listScroll: {
// // // // // // // //     maxHeight: 230,
// // // // // // // //     paddingHorizontal: 20,
// // // // // // // //   },
// // // // // // // //   listContent: {
// // // // // // // //     gap: 7,
// // // // // // // //     paddingBottom: 4,
// // // // // // // //   },
// // // // // // // //   fieldRow: {
// // // // // // // //     flexDirection: "row",
// // // // // // // //     alignItems: "center",
// // // // // // // //     gap: 10,
// // // // // // // //     paddingVertical: 10,
// // // // // // // //     paddingHorizontal: 12,
// // // // // // // //     backgroundColor: "#FCEBEB",
// // // // // // // //     borderRadius: 11,
// // // // // // // //     borderWidth: 0.5,
// // // // // // // //     borderColor: "#F7C1C1",
// // // // // // // //     marginBottom: 7,
// // // // // // // //   },
// // // // // // // //   fieldDot: {
// // // // // // // //     width: 22,
// // // // // // // //     height: 22,
// // // // // // // //     borderRadius: 11,
// // // // // // // //     backgroundColor: "#E24B4A",
// // // // // // // //     alignItems: "center",
// // // // // // // //     justifyContent: "center",
// // // // // // // //     flexShrink: 0,
// // // // // // // //   },
// // // // // // // //   fieldDotText: {
// // // // // // // //     color: "#fff",
// // // // // // // //     fontSize: 10,
// // // // // // // //     fontWeight: "800",
// // // // // // // //   },
// // // // // // // //   fieldText: {
// // // // // // // //     flex: 1,
// // // // // // // //     fontSize: 13,
// // // // // // // //     fontWeight: "600",
// // // // // // // //     color: "#791F1F",
// // // // // // // //   },
// // // // // // // //   langBadge: {
// // // // // // // //     backgroundColor: "#E6F1FB",
// // // // // // // //     borderRadius: 6,
// // // // // // // //     paddingHorizontal: 8,
// // // // // // // //     paddingVertical: 2,
// // // // // // // //     borderWidth: 0.5,
// // // // // // // //     borderColor: "#B5D4F4",
// // // // // // // //   },
// // // // // // // //   langBadgeText: {
// // // // // // // //     fontSize: 11,
// // // // // // // //     fontWeight: "700",
// // // // // // // //     color: "#185FA5",
// // // // // // // //   },
// // // // // // // //   langBadgeMr: {
// // // // // // // //     backgroundColor: "#FAEEDA",
// // // // // // // //     borderColor: "#FAC775",
// // // // // // // //   },
// // // // // // // //   langBadgeTextMr: {
// // // // // // // //     color: "#854F0B",
// // // // // // // //   },
// // // // // // // //   reqBadge: {
// // // // // // // //     backgroundColor: "#F7C1C1",
// // // // // // // //     borderRadius: 6,
// // // // // // // //     paddingHorizontal: 8,
// // // // // // // //     paddingVertical: 2,
// // // // // // // //   },
// // // // // // // //   reqBadgeText: {
// // // // // // // //     fontSize: 11,
// // // // // // // //     fontWeight: "600",
// // // // // // // //     color: "#A32D2D",
// // // // // // // //   },
// // // // // // // //   divider: {
// // // // // // // //     height: 0.5,
// // // // // // // //     backgroundColor: "#eee",
// // // // // // // //     marginTop: 12,
// // // // // // // //   },
// // // // // // // //   btnRow: {
// // // // // // // //     flexDirection: "row",
// // // // // // // //     gap: 10,
// // // // // // // //     padding: 16,
// // // // // // // //     paddingBottom: 20,
// // // // // // // //   },
// // // // // // // //   dismissBtn: {
// // // // // // // //     flex: 1,
// // // // // // // //     paddingVertical: 12,
// // // // // // // //     borderRadius: 12,
// // // // // // // //     borderWidth: 0.5,
// // // // // // // //     borderColor: "#ddd",
// // // // // // // //     backgroundColor: "#f5f5f5",
// // // // // // // //     alignItems: "center",
// // // // // // // //     justifyContent: "center",
// // // // // // // //   },
// // // // // // // //   dismissText: {
// // // // // // // //     fontSize: 14,
// // // // // // // //     fontWeight: "600",
// // // // // // // //     color: "#777",
// // // // // // // //   },
// // // // // // // //   fixBtn: {
// // // // // // // //     flex: 2,
// // // // // // // //     paddingVertical: 12,
// // // // // // // //     borderRadius: 12,
// // // // // // // //     backgroundColor: "#f97316",
// // // // // // // //     alignItems: "center",
// // // // // // // //     justifyContent: "center",
// // // // // // // //   },
// // // // // // // //   fixText: {
// // // // // // // //     fontSize: 14,
// // // // // // // //     fontWeight: "700",
// // // // // // // //     color: "#fff",
// // // // // // // //   },
// // // // // // // // };















// // // // // // // import React, { useState } from "react";
// // // // // // // import {
// // // // // // //   View, Text, ScrollView, TouchableOpacity,
// // // // // // //   TextInput, Image, Modal,
// // // // // // // } from "react-native";
// // // // // // // import * as ImagePicker from "expo-image-picker";
// // // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // // const REQUIRED_FIELDS = [
// // // // // // //   { key: "firstName",    label: "First Name",           lang: "EN" },
// // // // // // //   { key: "middleName",   label: "Middle Name",          lang: "EN" },
// // // // // // //   { key: "lastName",     label: "Last Name / Surname",  lang: "EN" },
// // // // // // //   { key: "firstNameMr",  label: "पहिले नाव",            lang: "MR" },
// // // // // // //   { key: "middleNameMr", label: "वडिलांचे नाव",         lang: "MR" },
// // // // // // //   { key: "lastNameMr",   label: "शेवटचे नाव / आडनाव",   lang: "MR" },
// // // // // // //   { key: "birthName",    label: "जन्म नाव",             lang: "MR" },
// // // // // // //   { key: "birthNameEn",  label: "Birth Name",           lang: "EN" },
// // // // // // //   { key: "candidateType",label: "Candidate Type",       lang: "EN" },
// // // // // // //   { key: "photo",        label: "Photo",                lang: null  },
// // // // // // // ];

// // // // // // // const candidateTypeOptions = [
// // // // // // //   { label: "वधू (Bride)", value: "वधू" },
// // // // // // //   { label: "वर (Groom)", value: "वर" },
// // // // // // // ];

// // // // // // // export default function Step1({ data, setData, onNext }) {
// // // // // // //   const [errorVisible, setErrorVisible] = useState(false);
// // // // // // //   const [missingFields, setMissingFields] = useState([]);
// // // // // // //   const [showCandidatePicker, setShowCandidatePicker] = useState(false);
// // // // // // //   const [highlightErrors, setHighlightErrors] = useState(false);

// // // // // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// // // // // // //   const setEnglish = (key) => (val) => {
// // // // // // //     const filtered = val.replace(/[^\x00-\x7F]/g, "");
// // // // // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // // // // //   };

// // // // // // //   const setMarathi = (key) => (val) => {
// // // // // // //     const filtered = val.replace(/[^\u0900-\u097F\s]/g, "");
// // // // // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // // // // //   };

// // // // // // //   const pickImage = async () => {
// // // // // // //     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // // // // //     if (permissionResult.granted === false) {
// // // // // // //       setMissingFields([{ label: "Permission Required: Allow photo access.", lang: null }]);
// // // // // // //       setErrorVisible(true);
// // // // // // //       return;
// // // // // // //     }
// // // // // // //     const result = await ImagePicker.launchImageLibraryAsync({
// // // // // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // // // // //       allowsEditing: true,
// // // // // // //       aspect: [3.5, 4.5], // Updated to passport ratio
// // // // // // //       quality: 0.8,
// // // // // // //     });
// // // // // // //     if (!result.canceled) {
// // // // // // //       set("photo")(result.assets[0].uri);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleNext = () => {
// // // // // // //     const missing = REQUIRED_FIELDS.filter((f) => !data[f.key] || data[f.key] === "");
// // // // // // //     if (missing.length > 0) {
// // // // // // //       setMissingFields(missing);
// // // // // // //       setErrorVisible(true);
// // // // // // //       setHighlightErrors(true);
// // // // // // //     } else {
// // // // // // //       setHighlightErrors(false);
// // // // // // //       onNext && onNext();
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const isFieldMissing = (key) => highlightErrors && missingFields.some((f) => f.key === key);

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       {/* ── VALIDATION POPUP ── */}
// // // // // // //       <Modal transparent visible={errorVisible} animationType="fade">
// // // // // // //         <View style={popStyles.overlay}>
// // // // // // //           <View style={popStyles.card}>
// // // // // // //             <View style={popStyles.banner}>
// // // // // // //               <View style={popStyles.bannerRow}>
// // // // // // //                 <View style={popStyles.bannerIcon}>
// // // // // // //                   <View style={popStyles.warningTriangle}><Text style={popStyles.warningExclaim}>!</Text></View>
// // // // // // //                 </View>
// // // // // // //                 <View style={{ flex: 1 }}>
// // // // // // //                   <Text style={popStyles.bannerTitle}>Required fields missing</Text>
// // // // // // //                   <Text style={popStyles.bannerSub}>Fill in all fields to continue</Text>
// // // // // // //                 </View>
// // // // // // //                 <TouchableOpacity style={popStyles.closeBtn} onPress={() => setErrorVisible(false)}>
// // // // // // //                   <Text style={popStyles.closeBtnText}>✕</Text>
// // // // // // //                 </TouchableOpacity>
// // // // // // //               </View>
// // // // // // //               <View style={popStyles.bannerCurve} />
// // // // // // //             </View>

// // // // // // //             <View style={popStyles.countRow}>
// // // // // // //               <Text style={popStyles.sectionLabel}>Incomplete fields</Text>
// // // // // // //               <View style={popStyles.countBadge}><Text style={popStyles.countBadgeText}>{missingFields.length}</Text></View>
// // // // // // //             </View>

// // // // // // //             <ScrollView style={popStyles.listScroll} contentContainerStyle={popStyles.listContent} showsVerticalScrollIndicator={false}>
// // // // // // //               {missingFields.map((f, i) => (
// // // // // // //                 <View key={i} style={popStyles.fieldRow}>
// // // // // // //                   <View style={popStyles.fieldDot}><Text style={popStyles.fieldDotText}>✕</Text></View>
// // // // // // //                   <Text style={popStyles.fieldText} numberOfLines={1}>{f.label}</Text>
// // // // // // //                   <View style={[popStyles.langBadge, f.lang === "MR" && popStyles.langBadgeMr]}>
// // // // // // //                     <Text style={[popStyles.langBadgeText, f.lang === "MR" && popStyles.langBadgeTextMr]}>{f.lang || "Req"}</Text>
// // // // // // //                   </View>
// // // // // // //                 </View>
// // // // // // //               ))}
// // // // // // //             </ScrollView>

// // // // // // //             <View style={popStyles.btnRow}>
// // // // // // //               <TouchableOpacity style={popStyles.dismissBtn} onPress={() => setErrorVisible(false)}>
// // // // // // //                 <Text style={popStyles.dismissText}>Dismiss</Text>
// // // // // // //               </TouchableOpacity>
// // // // // // //               <TouchableOpacity style={popStyles.fixBtn} onPress={() => setErrorVisible(false)}>
// // // // // // //                 <Text style={popStyles.fixText}>Fix fields →</Text>
// // // // // // //               </TouchableOpacity>
// // // // // // //             </View>
// // // // // // //           </View>
// // // // // // //         </View>
// // // // // // //       </Modal>

// // // // // // //       {/* ── CANDIDATE DROPDOWN MODAL ── */}
// // // // // // //       <Modal transparent visible={showCandidatePicker} animationType="fade">
// // // // // // //         <TouchableOpacity style={dropdownStyles.overlay} activeOpacity={1} onPressOut={() => setShowCandidatePicker(false)}>
// // // // // // //           <View style={dropdownStyles.container}>
// // // // // // //             <View style={dropdownStyles.header}><Text style={dropdownStyles.headerTitle}>Select Candidate Type</Text></View>
// // // // // // //             {candidateTypeOptions.map((option) => (
// // // // // // //               <TouchableOpacity
// // // // // // //                 key={option.value}
// // // // // // //                 style={[dropdownStyles.option, data.candidateType === option.value && dropdownStyles.optionSelected]}
// // // // // // //                 onPress={() => { set("candidateType")(option.value); setShowCandidatePicker(false); }}
// // // // // // //               >
// // // // // // //                 <Text style={[dropdownStyles.optionText, data.candidateType === option.value && dropdownStyles.optionTextSelected]}>{option.label}</Text>
// // // // // // //                 {data.candidateType === option.value && <Text style={dropdownStyles.checkMark}>✓</Text>}
// // // // // // //               </TouchableOpacity>
// // // // // // //             ))}
// // // // // // //           </View>
// // // // // // //         </TouchableOpacity>
// // // // // // //       </Modal>

// // // // // // //       {/* ── FORM ── */}
// // // // // // //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
// // // // // // //         <SectionHeader title="Basic Information" />

// // // // // // //         {/* English Name Row */}
// // // // // // //         <View style={styles.row3}>
// // // // // // //           <View style={{ flex: 1, marginRight: 4 }}>
// // // // // // //             <Field label="First Name" required value={data.firstName} onChangeText={setEnglish("firstName")} placeholder="English"
// // // // // // //               inputStyle={isFieldMissing("firstName") && fieldErrStyle} />
// // // // // // //           </View>
// // // // // // //           <View style={{ flex: 1, marginHorizontal: 2 }}>
// // // // // // //             <Field label="Middle Name" required value={data.middleName} onChangeText={setEnglish("middleName")} placeholder="English"
// // // // // // //               inputStyle={isFieldMissing("middleName") && fieldErrStyle} />
// // // // // // //           </View>
// // // // // // //           <View style={{ flex: 1, marginLeft: 4 }}>
// // // // // // //             <Field label="Last Name" required value={data.lastName} onChangeText={setEnglish("lastName")} placeholder="English"
// // // // // // //               inputStyle={isFieldMissing("lastName") && fieldErrStyle} />
// // // // // // //           </View>
// // // // // // //         </View>

// // // // // // //         {/* Marathi Name Row */}
// // // // // // //         <View style={styles.row3}>
// // // // // // //           <View style={{ flex: 1, marginRight: 4 }}>
// // // // // // //             <Field label="पहिले नाव" required value={data.firstNameMr} onChangeText={setMarathi("firstNameMr")} placeholder="मराठी"
// // // // // // //               inputStyle={isFieldMissing("firstNameMr") && fieldErrStyle} />
// // // // // // //           </View>
// // // // // // //           <View style={{ flex: 1, marginHorizontal: 2 }}>
// // // // // // //             <Field label="वडिलांचे नाव" required value={data.middleNameMr} onChangeText={setMarathi("middleNameMr")} placeholder="मराठी"
// // // // // // //               inputStyle={isFieldMissing("middleNameMr") && fieldErrStyle} />
// // // // // // //           </View>
// // // // // // //           <View style={{ flex: 1, marginLeft: 4 }}>
// // // // // // //             <Field label="आडनाव" required value={data.lastNameMr} onChangeText={setMarathi("lastNameMr")} placeholder="मराठी"
// // // // // // //               inputStyle={isFieldMissing("lastNameMr") && fieldErrStyle} />
// // // // // // //           </View>
// // // // // // //         </View>

// // // // // // //         {/* Birth Name Row */}
// // // // // // //         <View style={styles.row2}>
// // // // // // //           <View style={{ flex: 1, marginRight: 8 }}>
// // // // // // //             <Field label="जन्म नाव (मराठी)" required value={data.birthName} onChangeText={setMarathi("birthName")} placeholder="मराठी"
// // // // // // //               inputStyle={isFieldMissing("birthName") && fieldErrStyle} />
// // // // // // //           </View>
// // // // // // //           <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // // //             <Field label="Birth Name (Eng)" required value={data.birthNameEn} onChangeText={setEnglish("birthNameEn")} placeholder="English"
// // // // // // //               inputStyle={isFieldMissing("birthNameEn") && fieldErrStyle} />
// // // // // // //           </View>
// // // // // // //         </View>

// // // // // // //         {/* Candidate Type & Photo Side-by-Side Alignment */}
// // // // // // //         <View style={styles.row2}>
// // // // // // //           <View style={{ flex: 1, marginRight: 8 }}>
// // // // // // //             <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>Candidate Type <Text style={{ color: "red" }}>*</Text></Text>
// // // // // // //             <TouchableOpacity
// // // // // // //               style={[dropdownStyles.pickerBtn, isFieldMissing("candidateType") && { borderColor: "#E24B4A", borderWidth: 1.5 }]}
// // // // // // //               onPress={() => setShowCandidatePicker(true)}
// // // // // // //             >
// // // // // // //               <Text style={[dropdownStyles.pickerBtnText, !data.candidateType && { color: "#bbb" }]}>{data.candidateType || "Select"}</Text>
// // // // // // //               <Text style={dropdownStyles.pickerArrow}>▼</Text>
// // // // // // //             </TouchableOpacity>
// // // // // // //           </View>

// // // // // // //           <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // // //             <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>Photo <Text style={{ color: "red" }}>*</Text></Text>
// // // // // // //             <TouchableOpacity
// // // // // // //               style={[styles.photoBtn, { height: 50 }, data.photo && { padding: 0, overflow: "hidden" }, isFieldMissing("photo") && { borderWidth: 1.5, borderColor: "#E24B4A" }]}
// // // // // // //               onPress={pickImage}
// // // // // // //             >
// // // // // // //               {data.photo ? <Image source={{ uri: data.photo }} style={{ width: "100%", height: "100%" }} /> : <Text style={styles.photoBtnText}>📷 Upload</Text>}
// // // // // // //             </TouchableOpacity>
// // // // // // //           </View>
// // // // // // //         </View>

// // // // // // //         {/* Marathi Pad Wrap */}
// // // // // // //         <View style={[styles.marathiPadWrap, { marginTop: 15 }]}>
// // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>इतर टीप (मराठी)</Text>
// // // // // // //           <TextInput
// // // // // // //             style={[styles.marathiPad, { height: 80 }]}
// // // // // // //             multiline
// // // // // // //             placeholder="मराठी मध्ये काही लिहायचे असल्यास..."
// // // // // // //             placeholderTextColor="#bbb"
// // // // // // //             value={data.marathiNote}
// // // // // // //             onChangeText={setMarathi("marathiNote")}
// // // // // // //           />
// // // // // // //         </View>
// // // // // // //       </ScrollView>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }

// // // // // // // // ─── Styles Preservation ──────────────────────────────────────────────────────

// // // // // // // const fieldErrStyle = { borderWidth: 1.5, borderColor: "#E24B4A", backgroundColor: "#fff" };

// // // // // // // const dropdownStyles = {
// // // // // // //   overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "center", alignItems: "center", padding: 30 },
// // // // // // //   container: { backgroundColor: "#fff", borderRadius: 16, width: "100%", maxWidth: 300, overflow: "hidden", elevation: 8 },
// // // // // // //   header: { paddingVertical: 14, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: "#eee", backgroundColor: "#fafafa" },
// // // // // // //   headerTitle: { fontSize: 14, fontWeight: "700", color: "#333" },
// // // // // // //   option: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 14, paddingHorizontal: 16, borderBottomWidth: 0.5, borderBottomColor: "#f0f0f0" },
// // // // // // //   optionSelected: { backgroundColor: "#FFF3E8" },
// // // // // // //   optionText: { fontSize: 15, color: "#333" },
// // // // // // //   optionTextSelected: { fontWeight: "600", color: "#f97316" },
// // // // // // //   checkMark: { fontSize: 16, color: "#f97316", fontWeight: "800" },
// // // // // // //   pickerBtn: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#f8f9fa", borderRadius: 10, borderWidth: 1, borderColor: "#e0e0e0", paddingHorizontal: 14, height: 50 },
// // // // // // //   pickerBtnText: { fontSize: 14, color: "#333" },
// // // // // // //   pickerArrow: { fontSize: 12, color: "#888" },
// // // // // // // };

// // // // // // // const popStyles = {
// // // // // // //   overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.55)", justifyContent: "center", alignItems: "center", padding: 24 },
// // // // // // //   card: { backgroundColor: "#fff", borderRadius: 24, width: "100%", maxWidth: 340, overflow: "hidden", elevation: 12 },
// // // // // // //   banner: { backgroundColor: "#E24B4A", paddingHorizontal: 20, paddingTop: 22, paddingBottom: 28, position: "relative" },
// // // // // // //   bannerRow: { flexDirection: "row", alignItems: "center", gap: 14 },
// // // // // // //   bannerIcon: { width: 46, height: 46, borderRadius: 23, backgroundColor: "rgba(255,255,255,0.22)", alignItems: "center", justifyContent: "center" },
// // // // // // //   warningTriangle: { width: 26, height: 26, borderRadius: 6, backgroundColor: "rgba(255,255,255,0.3)", alignItems: "center", justifyContent: "center" },
// // // // // // //   warningExclaim: { color: "#fff", fontSize: 16, fontWeight: "700" },
// // // // // // //   bannerTitle: { fontSize: 16, fontWeight: "700", color: "#fff" },
// // // // // // //   bannerSub: { fontSize: 12, color: "rgba(255,255,255,0.78)", marginTop: 3 },
// // // // // // //   closeBtn: { width: 30, height: 30, borderRadius: 15, backgroundColor: "rgba(255,255,255,0.2)", alignItems: "center", justifyContent: "center" },
// // // // // // //   closeBtnText: { color: "#fff", fontSize: 13, fontWeight: "700" },
// // // // // // //   bannerCurve: { position: "absolute", bottom: 0, left: 0, right: 0, height: 18, backgroundColor: "#fff", borderTopLeftRadius: 18, borderTopRightRadius: 18 },
// // // // // // //   countRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingTop: 6, paddingBottom: 10 },
// // // // // // //   sectionLabel: { fontSize: 11, fontWeight: "700", color: "#999", letterSpacing: 0.6, textTransform: "uppercase" },
// // // // // // //   countBadge: { backgroundColor: "#FCEBEB", borderRadius: 10, paddingHorizontal: 9, paddingVertical: 2, borderWidth: 0.5, borderColor: "#F7C1C1" },
// // // // // // //   countBadgeText: { fontSize: 12, fontWeight: "700", color: "#E24B4A" },
// // // // // // //   listScroll: { maxHeight: 200, paddingHorizontal: 20 },
// // // // // // //   listContent: { gap: 7, paddingBottom: 10 },
// // // // // // //   fieldRow: { flexDirection: "row", alignItems: "center", gap: 10, padding: 10, backgroundColor: "#FCEBEB", borderRadius: 11, borderWidth: 0.5, borderColor: "#F7C1C1" },
// // // // // // //   fieldDot: { width: 20, height: 20, borderRadius: 10, backgroundColor: "#E24B4A", alignItems: "center", justifyContent: "center" },
// // // // // // //   fieldDotText: { color: "#fff", fontSize: 10, fontWeight: "800" },
// // // // // // //   fieldText: { flex: 1, fontSize: 13, fontWeight: "600", color: "#791F1F" },
// // // // // // //   langBadge: { backgroundColor: "#E6F1FB", borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
// // // // // // //   langBadgeText: { fontSize: 10, fontWeight: "700", color: "#185FA5" },
// // // // // // //   langBadgeMr: { backgroundColor: "#FAEEDA" },
// // // // // // //   langBadgeTextMr: { color: "#854F0B" },
// // // // // // //   btnRow: { flexDirection: "row", gap: 10, padding: 20 },
// // // // // // //   dismissBtn: { flex: 1, height: 45, borderRadius: 12, backgroundColor: "#f5f5f5", alignItems: "center", justifyContent: "center" },
// // // // // // //   dismissText: { fontSize: 14, fontWeight: "600", color: "#777" },
// // // // // // //   fixBtn: { flex: 2, height: 45, borderRadius: 12, backgroundColor: "#f97316", alignItems: "center", justifyContent: "center" },
// // // // // // //   fixText: { fontSize: 14, fontWeight: "700", color: "#fff" },
// // // // // // // };











// // // // // // // // apoi
// // // // // // // import React, { useState, useRef } from "react";
// // // // // // // import {
// // // // // // //   View, Text, ScrollView, TouchableOpacity,
// // // // // // //   TextInput, Image, Modal, ActivityIndicator,
// // // // // // // } from "react-native";
// // // // // // // import * as ImagePicker from "expo-image-picker";
// // // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // // const REQUIRED_FIELDS = [
// // // // // // //   { key: "firstName",     label: "First Name",           lang: "EN" },
// // // // // // //   { key: "middleName",    label: "Middle Name",          lang: "EN" },
// // // // // // //   { key: "lastName",      label: "Last Name / Surname",  lang: "EN" },
// // // // // // //   { key: "firstNameMr",   label: "पहिले नाव",             lang: "MR" },
// // // // // // //   { key: "middleNameMr",  label: "वडिलांचे नाव",          lang: "MR" },
// // // // // // //   { key: "lastNameMr",    label: "शेवटचे नाव / आडनाव",    lang: "MR" },
// // // // // // //   { key: "birthName",     label: "जन्म नाव",              lang: "MR" },
// // // // // // //   { key: "birthNameEn",   label: "Birth Name",           lang: "EN" },
// // // // // // //   { key: "candidateType", label: "Candidate Type",       lang: "EN" },
// // // // // // //   { key: "photo",         label: "Photo",                lang: null  },
// // // // // // // ];

// // // // // // // const candidateTypeOptions = [
// // // // // // //   { label: "वधू (Bride)", value: "वधू" },
// // // // // // //   { label: "वर (Groom)", value: "वर" },
// // // // // // // ];

// // // // // // // // Helper to decode HTML entities returned by Google
// // // // // // // const decodeHTMLEntities = (text) => {
// // // // // // //   const entities = {
// // // // // // //     "&amp;": "&",
// // // // // // //     "&lt;": "<",
// // // // // // //     "&gt;": ">",
// // // // // // //     "&quot;": '"',
// // // // // // //     "&#39;": "'",
// // // // // // //   };
// // // // // // //   return text.replace(/&[^;]+;/g, (entity) => entities[entity] || entity);
// // // // // // // };

// // // // // // // // Optimized Google Cloud Translation Service
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
// // // // // // //     if (!response.ok) {
// // // // // // //       console.error("Translation API error:", data.error?.message);
// // // // // // //       return text;
// // // // // // //     }

// // // // // // //     const translatedText = data.data?.translations?.[0]?.translatedText || text;
// // // // // // //     return decodeHTMLEntities(translatedText);
// // // // // // //   } catch (error) {
// // // // // // //     console.error("Translation error:", error);
// // // // // // //     return text;
// // // // // // //   }
// // // // // // // };

// // // // // // // export default function Step1({ data, setData, onNext }) {
// // // // // // //   const [errorVisible, setErrorVisible] = useState(false);
// // // // // // //   const [missingFields, setMissingFields] = useState([]);
// // // // // // //   const [showCandidatePicker, setShowCandidatePicker] = useState(false);
// // // // // // //   const [highlightErrors, setHighlightErrors] = useState(false);
// // // // // // //   const [translatingFields, setTranslatingFields] = useState({});

// // // // // // //   // Ref to track the typing timeout for debouncing
// // // // // // //   const typingTimeoutRef = useRef(null);

// // // // // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// // // // // // //   const setEnglish = (key) => (val) => {
// // // // // // //     const filtered = val.replace(/[^\x00-\x7F]/g, "");
// // // // // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // // // // //   };

// // // // // // //   // Proper Marathi setter with Debounced Auto-Translation
// // // // // // //   const setMarathi = (key) => (val) => {
// // // // // // //     // 1. Immediately update UI with whatever user is typing
// // // // // // //     setData((p) => ({ ...p, [key]: val }));

// // // // // // //     // 2. Clear any existing timer
// // // // // // //     if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

// // // // // // //     // 3. Check for English characters to trigger translation
// // // // // // //     const englishChars = val.match(/[a-zA-Z]/g);

// // // // // // //     if (englishChars && englishChars.length > 0) {
// // // // // // //       const englishText = val.replace(/[^\x00-\x7F\s]/g, "").trim();

// // // // // // //       if (englishText.length > 1) {
// // // // // // //         // Set loading state for this specific field
// // // // // // //         setTranslatingFields((prev) => ({ ...prev, [key]: true }));

// // // // // // //         // Start debounce timer (800ms)
// // // // // // //         typingTimeoutRef.current = setTimeout(async () => {
// // // // // // //           try {
// // // // // // //             const translated = await translateText(englishText, "mr");
// // // // // // //             setData((p) => ({ ...p, [key]: translated }));
// // // // // // //           } catch (error) {
// // // // // // //             console.error("Auto-translate failed:", error);
// // // // // // //           } finally {
// // // // // // //             setTranslatingFields((prev) => ({ ...prev, [key]: false }));
// // // // // // //           }
// // // // // // //         }, 800);
// // // // // // //       }
// // // // // // //     } else {
// // // // // // //       // Pure Marathi input, filter out non-Marathi characters (standard behavior)
// // // // // // //       const filtered = val.replace(/[^\u0900-\u097F\s]/g, "");
// // // // // // //       setData((p) => ({ ...p, [key]: filtered }));
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const pickImage = async () => {
// // // // // // //     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // // // // //     if (permissionResult.granted === false) {
// // // // // // //       setMissingFields([{ label: "Permission Required: Allow photo access.", lang: null }]);
// // // // // // //       setErrorVisible(true);
// // // // // // //       return;
// // // // // // //     }
// // // // // // //     const result = await ImagePicker.launchImageLibraryAsync({
// // // // // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // // // // //       allowsEditing: true,
// // // // // // //       aspect: [3.5, 4.5],
// // // // // // //       quality: 0.8,
// // // // // // //     });
// // // // // // //     if (!result.canceled) {
// // // // // // //       set("photo")(result.assets[0].uri);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleNext = () => {
// // // // // // //     const missing = REQUIRED_FIELDS.filter((f) => !data[f.key] || data[f.key] === "");
// // // // // // //     if (missing.length > 0) {
// // // // // // //       setMissingFields(missing);
// // // // // // //       setErrorVisible(true);
// // // // // // //       setHighlightErrors(true);
// // // // // // //     } else {
// // // // // // //       setHighlightErrors(false);
// // // // // // //       onNext && onNext();
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const isFieldMissing = (key) => highlightErrors && missingFields.some((f) => f.key === key);
// // // // // // //   const isFieldTranslating = (key) => translatingFields[key] || false;

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       {/* ── VALIDATION POPUP ── */}
// // // // // // //       <Modal transparent visible={errorVisible} animationType="fade">
// // // // // // //         <View style={popStyles.overlay}>
// // // // // // //           <View style={popStyles.card}>
// // // // // // //             <View style={popStyles.banner}>
// // // // // // //               <View style={popStyles.bannerRow}>
// // // // // // //                 <View style={popStyles.bannerIcon}>
// // // // // // //                   <View style={popStyles.warningTriangle}><Text style={popStyles.warningExclaim}>!</Text></View>
// // // // // // //                 </View>
// // // // // // //                 <View style={{ flex: 1 }}>
// // // // // // //                   <Text style={popStyles.bannerTitle}>Required fields missing</Text>
// // // // // // //                   <Text style={popStyles.bannerSub}>Fill in all fields to continue</Text>
// // // // // // //                 </View>
// // // // // // //                 <TouchableOpacity style={popStyles.closeBtn} onPress={() => setErrorVisible(false)}>
// // // // // // //                   <Text style={popStyles.closeBtnText}>✕</Text>
// // // // // // //                 </TouchableOpacity>
// // // // // // //               </View>
// // // // // // //               <View style={popStyles.bannerCurve} />
// // // // // // //             </View>

// // // // // // //             <View style={popStyles.countRow}>
// // // // // // //               <Text style={popStyles.sectionLabel}>Incomplete fields</Text>
// // // // // // //               <View style={popStyles.countBadge}><Text style={popStyles.countBadgeText}>{missingFields.length}</Text></View>
// // // // // // //             </View>

// // // // // // //             <ScrollView style={popStyles.listScroll} contentContainerStyle={popStyles.listContent} showsVerticalScrollIndicator={false}>
// // // // // // //               {missingFields.map((f, i) => (
// // // // // // //                 <View key={i} style={popStyles.fieldRow}>
// // // // // // //                   <View style={popStyles.fieldDot}><Text style={popStyles.fieldDotText}>✕</Text></View>
// // // // // // //                   <Text style={popStyles.fieldText} numberOfLines={1}>{f.label}</Text>
// // // // // // //                   <View style={[popStyles.langBadge, f.lang === "MR" && popStyles.langBadgeMr]}>
// // // // // // //                     <Text style={[popStyles.langBadgeText, f.lang === "MR" && popStyles.langBadgeTextMr]}>{f.lang || "Req"}</Text>
// // // // // // //                   </View>
// // // // // // //                 </View>
// // // // // // //               ))}
// // // // // // //             </ScrollView>

// // // // // // //             <View style={popStyles.btnRow}>
// // // // // // //               <TouchableOpacity style={popStyles.dismissBtn} onPress={() => setErrorVisible(false)}>
// // // // // // //                 <Text style={popStyles.dismissText}>Dismiss</Text>
// // // // // // //               </TouchableOpacity>
// // // // // // //               <TouchableOpacity style={popStyles.fixBtn} onPress={() => setErrorVisible(false)}>
// // // // // // //                 <Text style={popStyles.fixText}>Fix fields →</Text>
// // // // // // //               </TouchableOpacity>
// // // // // // //             </View>
// // // // // // //           </View>
// // // // // // //         </View>
// // // // // // //       </Modal>

// // // // // // //       {/* ── CANDIDATE DROPDOWN MODAL ── */}
// // // // // // //       <Modal transparent visible={showCandidatePicker} animationType="fade">
// // // // // // //         <TouchableOpacity style={dropdownStyles.overlay} activeOpacity={1} onPressOut={() => setShowCandidatePicker(false)}>
// // // // // // //           <View style={dropdownStyles.container}>
// // // // // // //             <View style={dropdownStyles.header}><Text style={dropdownStyles.headerTitle}>Select Candidate Type</Text></View>
// // // // // // //             {candidateTypeOptions.map((option) => (
// // // // // // //               <TouchableOpacity
// // // // // // //                 key={option.value}
// // // // // // //                 style={[dropdownStyles.option, data.candidateType === option.value && dropdownStyles.optionSelected]}
// // // // // // //                 onPress={() => { set("candidateType")(option.value); setShowCandidatePicker(false); }}
// // // // // // //               >
// // // // // // //                 <Text style={[dropdownStyles.optionText, data.candidateType === option.value && dropdownStyles.optionTextSelected]}>{option.label}</Text>
// // // // // // //                 {data.candidateType === option.value && <Text style={dropdownStyles.checkMark}>✓</Text>}
// // // // // // //               </TouchableOpacity>
// // // // // // //             ))}
// // // // // // //           </View>
// // // // // // //         </TouchableOpacity>
// // // // // // //       </Modal>

// // // // // // //       {/* ── FORM ── */}
// // // // // // //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
// // // // // // //         <SectionHeader title="Basic Information" />

// // // // // // //         {/* English Name Row */}
// // // // // // //         <View style={styles.row3}>
// // // // // // //           <View style={{ flex: 1, marginRight: 4 }}>
// // // // // // //             <Field label="First Name" required value={data.firstName} onChangeText={setEnglish("firstName")} placeholder="English"
// // // // // // //               inputStyle={isFieldMissing("firstName") && fieldErrStyle} />
// // // // // // //           </View>
// // // // // // //           <View style={{ flex: 1, marginHorizontal: 2 }}>
// // // // // // //             <Field label="Middle Name" required value={data.middleName} onChangeText={setEnglish("middleName")} placeholder="English"
// // // // // // //               inputStyle={isFieldMissing("middleName") && fieldErrStyle} />
// // // // // // //           </View>
// // // // // // //           <View style={{ flex: 1, marginLeft: 4 }}>
// // // // // // //             <Field label="Last Name" required value={data.lastName} onChangeText={setEnglish("lastName")} placeholder="English"
// // // // // // //               inputStyle={isFieldMissing("lastName") && fieldErrStyle} />
// // // // // // //           </View>
// // // // // // //         </View>

// // // // // // //         {/* Marathi Name Row */}
// // // // // // //         <View style={styles.row3}>
// // // // // // //           {["firstNameMr", "middleNameMr", "lastNameMr"].map((key, index) => (
// // // // // // //             <View key={key} style={{ flex: 1, marginHorizontal: index === 1 ? 2 : 0, marginRight: index === 0 ? 4 : 0, marginLeft: index === 2 ? 4 : 0, position: "relative" }}>
// // // // // // //               <Field 
// // // // // // //                 label={key === "firstNameMr" ? "पहिले नाव" : key === "middleNameMr" ? "वडिलांचे नाव" : "आडनाव"} 
// // // // // // //                 required 
// // // // // // //                 value={data[key]} 
// // // // // // //                 onChangeText={setMarathi(key)} 
// // // // // // //                 placeholder="मराठी"
// // // // // // //                 inputStyle={[
// // // // // // //                   isFieldMissing(key) && fieldErrStyle,
// // // // // // //                   isFieldTranslating(key) && { opacity: 0.6 }
// // // // // // //                 ]}
// // // // // // //               />
// // // // // // //               {isFieldTranslating(key) && (
// // // // // // //                 <View style={translatingIndicator}>
// // // // // // //                   <ActivityIndicator size="small" color="#f97316" />
// // // // // // //                 </View>
// // // // // // //               )}
// // // // // // //             </View>
// // // // // // //           ))}
// // // // // // //         </View>

// // // // // // //         {/* Birth Name Row */}
// // // // // // //         <View style={styles.row2}>
// // // // // // //           <View style={{ flex: 1, marginRight: 8, position: "relative" }}>
// // // // // // //             <Field 
// // // // // // //               label="जन्म नाव (मराठी)" 
// // // // // // //               required 
// // // // // // //               value={data.birthName} 
// // // // // // //               onChangeText={setMarathi("birthName")} 
// // // // // // //               placeholder="मराठी"
// // // // // // //               inputStyle={[
// // // // // // //                 isFieldMissing("birthName") && fieldErrStyle,
// // // // // // //                 isFieldTranslating("birthName") && { opacity: 0.6 }
// // // // // // //               ]}
// // // // // // //             />
// // // // // // //             {isFieldTranslating("birthName") && (
// // // // // // //               <View style={translatingIndicator}>
// // // // // // //                 <ActivityIndicator size="small" color="#f97316" />
// // // // // // //               </View>
// // // // // // //             )}
// // // // // // //           </View>
// // // // // // //           <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // // //             <Field label="Birth Name (Eng)" required value={data.birthNameEn} onChangeText={setEnglish("birthNameEn")} placeholder="English"
// // // // // // //               inputStyle={isFieldMissing("birthNameEn") && fieldErrStyle} />
// // // // // // //           </View>
// // // // // // //         </View>

// // // // // // //         {/* Candidate Type & Photo */}
// // // // // // //         <View style={styles.row2}>
// // // // // // //           <View style={{ flex: 1, marginRight: 8 }}>
// // // // // // //             <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>Candidate Type <Text style={{ color: "red" }}>*</Text></Text>
// // // // // // //             <TouchableOpacity
// // // // // // //               style={[dropdownStyles.pickerBtn, isFieldMissing("candidateType") && { borderColor: "#E24B4A", borderWidth: 1.5 }]}
// // // // // // //               onPress={() => setShowCandidatePicker(true)}
// // // // // // //             >
// // // // // // //               <Text style={[dropdownStyles.pickerBtnText, !data.candidateType && { color: "#bbb" }]}>{data.candidateType || "Select"}</Text>
// // // // // // //               <Text style={dropdownStyles.pickerArrow}>▼</Text>
// // // // // // //             </TouchableOpacity>
// // // // // // //           </View>

// // // // // // //           <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // // //             <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>Photo <Text style={{ color: "red" }}>*</Text></Text>
// // // // // // //             <TouchableOpacity
// // // // // // //               style={[styles.photoBtn, { height: 50 }, data.photo && { padding: 0, overflow: "hidden" }, isFieldMissing("photo") && { borderWidth: 1.5, borderColor: "#E24B4A" }]}
// // // // // // //               onPress={pickImage}
// // // // // // //             >
// // // // // // //               {data.photo ? <Image source={{ uri: data.photo }} style={{ width: "100%", height: "100%" }} /> : <Text style={styles.photoBtnText}>📷 Upload</Text>}
// // // // // // //             </TouchableOpacity>
// // // // // // //           </View>
// // // // // // //         </View>

// // // // // // //         {/* Optional Marathi Note */}
// // // // // // //         <View style={[styles.marathiPadWrap, { marginTop: 15, position: "relative" }]}>
// // // // // // //           <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>इतर टीप (मराठी)</Text>
// // // // // // //           <TextInput
// // // // // // //             style={[styles.marathiPad, { height: 80 }, isFieldTranslating("marathiNote") && { opacity: 0.6 }]}
// // // // // // //             multiline
// // // // // // //             placeholder="English type करा (auto-translate)..."
// // // // // // //             placeholderTextColor="#bbb"
// // // // // // //             value={data.marathiNote}
// // // // // // //             onChangeText={setMarathi("marathiNote")}
// // // // // // //           />
// // // // // // //           {isFieldTranslating("marathiNote") && (
// // // // // // //             <View style={translatingIndicatorLarge}>
// // // // // // //               <ActivityIndicator size="small" color="#f97316" />
// // // // // // //             </View>
// // // // // // //           )}
// // // // // // //         </View>

// // // // // // //         {/* Next Button */}
// // // // // // //         <TouchableOpacity style={[styles.nextBtn, { marginTop: 20 }]} onPress={handleNext}>
// // // // // // //           <Text style={styles.nextBtnText}>Continue</Text>
// // // // // // //         </TouchableOpacity>
// // // // // // //       </ScrollView>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }

// // // // // // // // ─── Styles ──────────────────────────────────────────────────────────────────

// // // // // // // const fieldErrStyle = { borderWidth: 1.5, borderColor: "#E24B4A", backgroundColor: "#fff" };

// // // // // // // const translatingIndicator = { position: "absolute", right: 10, top: "55%" };
// // // // // // // const translatingIndicatorLarge = { position: "absolute", right: 10, top: 35 };

// // // // // // // const dropdownStyles = {
// // // // // // //   overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "center", alignItems: "center", padding: 30 },
// // // // // // //   container: { backgroundColor: "#fff", borderRadius: 16, width: "100%", maxWidth: 300, overflow: "hidden", elevation: 8 },
// // // // // // //   header: { paddingVertical: 14, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: "#eee", backgroundColor: "#fafafa" },
// // // // // // //   headerTitle: { fontSize: 14, fontWeight: "700", color: "#333" },
// // // // // // //   option: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 14, paddingHorizontal: 16, borderBottomWidth: 0.5, borderBottomColor: "#f0f0f0" },
// // // // // // //   optionSelected: { backgroundColor: "#FFF3E8" },
// // // // // // //   optionText: { fontSize: 15, color: "#333" },
// // // // // // //   optionTextSelected: { fontWeight: "600", color: "#f97316" },
// // // // // // //   checkMark: { fontSize: 16, color: "#f97316", fontWeight: "800" },
// // // // // // //   pickerBtn: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#f8f9fa", borderRadius: 10, borderWidth: 1, borderColor: "#e0e0e0", paddingHorizontal: 14, height: 50 },
// // // // // // //   pickerBtnText: { fontSize: 14, color: "#333" },
// // // // // // //   pickerArrow: { fontSize: 12, color: "#888" },
// // // // // // // };

// // // // // // // const popStyles = {
// // // // // // //   overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.55)", justifyContent: "center", alignItems: "center", padding: 24 },
// // // // // // //   card: { backgroundColor: "#fff", borderRadius: 24, width: "100%", maxWidth: 340, overflow: "hidden", elevation: 12 },
// // // // // // //   banner: { backgroundColor: "#E24B4A", paddingHorizontal: 20, paddingTop: 22, paddingBottom: 28, position: "relative" },
// // // // // // //   bannerRow: { flexDirection: "row", alignItems: "center", gap: 14 },
// // // // // // //   bannerIcon: { width: 46, height: 46, borderRadius: 23, backgroundColor: "rgba(255,255,255,0.22)", alignItems: "center", justifyContent: "center" },
// // // // // // //   warningTriangle: { width: 26, height: 26, borderRadius: 6, backgroundColor: "rgba(255,255,255,0.3)", alignItems: "center", justifyContent: "center" },
// // // // // // //   warningExclaim: { color: "#fff", fontSize: 16, fontWeight: "700" },
// // // // // // //   bannerTitle: { fontSize: 16, fontWeight: "700", color: "#fff" },
// // // // // // //   bannerSub: { fontSize: 12, color: "rgba(255,255,255,0.78)", marginTop: 3 },
// // // // // // //   closeBtn: { width: 30, height: 30, borderRadius: 15, backgroundColor: "rgba(255,255,255,0.2)", alignItems: "center", justifyContent: "center" },
// // // // // // //   closeBtnText: { color: "#fff", fontSize: 13, fontWeight: "700" },
// // // // // // //   bannerCurve: { position: "absolute", bottom: 0, left: 0, right: 0, height: 18, backgroundColor: "#fff", borderTopLeftRadius: 18, borderTopRightRadius: 18 },
// // // // // // //   countRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingTop: 6, paddingBottom: 10 },
// // // // // // //   sectionLabel: { fontSize: 11, fontWeight: "700", color: "#999", letterSpacing: 0.6, textTransform: "uppercase" },
// // // // // // //   countBadge: { backgroundColor: "#FCEBEB", borderRadius: 10, paddingHorizontal: 9, paddingVertical: 2, borderWidth: 0.5, borderColor: "#F7C1C1" },
// // // // // // //   countBadgeText: { fontSize: 12, fontWeight: "700", color: "#E24B4A" },
// // // // // // //   listScroll: { maxHeight: 200, paddingHorizontal: 20 },
// // // // // // //   listContent: { gap: 7, paddingBottom: 10 },
// // // // // // //   fieldRow: { flexDirection: "row", alignItems: "center", gap: 10, padding: 10, backgroundColor: "#FCEBEB", borderRadius: 11, borderWidth: 0.5, borderColor: "#F7C1C1" },
// // // // // // //   fieldDot: { width: 20, height: 20, borderRadius: 10, backgroundColor: "#E24B4A", alignItems: "center", justifyContent: "center" },
// // // // // // //   fieldDotText: { color: "#fff", fontSize: 10, fontWeight: "800" },
// // // // // // //   fieldText: { flex: 1, fontSize: 13, fontWeight: "600", color: "#791F1F" },
// // // // // // //   langBadge: { backgroundColor: "#E6F1FB", borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
// // // // // // //   langBadgeText: { fontSize: 10, fontWeight: "700", color: "#185FA5" },
// // // // // // //   langBadgeMr: { backgroundColor: "#FAEEDA" },
// // // // // // //   langBadgeTextMr: { color: "#854F0B" },
// // // // // // //   btnRow: { flexDirection: "row", gap: 10, padding: 20 },
// // // // // // //   dismissBtn: { flex: 1, height: 45, borderRadius: 12, backgroundColor: "#f5f5f5", alignItems: "center", justifyContent: "center" },
// // // // // // //   dismissText: { fontSize: 14, fontWeight: "600", color: "#777" },
// // // // // // //   fixBtn: { flex: 2, height: 45, borderRadius: 12, backgroundColor: "#f97316", alignItems: "center", justifyContent: "center" },
// // // // // // //   fixText: { fontSize: 14, fontWeight: "700", color: "#fff" },
// // // // // // // };








// // // // // // // new kerb
// // // // // // // apoi - FIXED VERSION WITH WORKING KEYBOARD SCROLL
// // // // // // import React, { useState, useRef } from "react";
// // // // // // import {
// // // // // //   View, Text, ScrollView, TouchableOpacity,
// // // // // //   TextInput, Image, Modal, ActivityIndicator, Keyboard,
// // // // // //   KeyboardAvoidingView, Platform, FlatList,
// // // // // // } from "react-native";
// // // // // // import * as ImagePicker from "expo-image-picker";
// // // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // // const REQUIRED_FIELDS = [
// // // // // //   { key: "firstName",     label: "First Name",           lang: "EN" },
// // // // // //   { key: "middleName",    label: "Middle Name",          lang: "EN" },
// // // // // //   { key: "lastName",      label: "Last Name / Surname",  lang: "EN" },
// // // // // //   { key: "firstNameMr",   label: "पहिले नाव",             lang: "MR" },
// // // // // //   { key: "middleNameMr",  label: "वडिलांचे नाव",          lang: "MR" },
// // // // // //   { key: "lastNameMr",    label: "शेवटचे नाव / आडनाव",    lang: "MR" },
// // // // // //   { key: "birthName",     label: "जन्म नाव",              lang: "MR" },
// // // // // //   { key: "birthNameEn",   label: "Birth Name",           lang: "EN" },
// // // // // //   { key: "candidateType", label: "Candidate Type",       lang: "EN" },
// // // // // //   { key: "photo",         label: "Photo",                lang: null  },
// // // // // // ];

// // // // // // const candidateTypeOptions = [
// // // // // //   { label: "वधू (Bride)", value: "वधू" },
// // // // // //   { label: "वर (Groom)", value: "वर" },
// // // // // // ];

// // // // // // // Helper to decode HTML entities returned by Google
// // // // // // const decodeHTMLEntities = (text) => {
// // // // // //   const entities = {
// // // // // //     "&amp;": "&",
// // // // // //     "&lt;": "<",
// // // // // //     "&gt;": ">",
// // // // // //     "&quot;": '"',
// // // // // //     "&#39;": "'",
// // // // // //   };
// // // // // //   return text.replace(/&[^;]+;/g, (entity) => entities[entity] || entity);
// // // // // // };

// // // // // // // Optimized Google Cloud Translation Service
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
// // // // // //     if (!response.ok) {
// // // // // //       console.error("Translation API error:", data.error?.message);
// // // // // //       return text;
// // // // // //     }

// // // // // //     const translatedText = data.data?.translations?.[0]?.translatedText || text;
// // // // // //     return decodeHTMLEntities(translatedText);
// // // // // //   } catch (error) {
// // // // // //     console.error("Translation error:", error);
// // // // // //     return text;
// // // // // //   }
// // // // // // };

// // // // // // export default function Step1({ data, setData, onNext }) {
// // // // // //   const [errorVisible, setErrorVisible] = useState(false);
// // // // // //   const [missingFields, setMissingFields] = useState([]);
// // // // // //   const [showCandidatePicker, setShowCandidatePicker] = useState(false);
// // // // // //   const [highlightErrors, setHighlightErrors] = useState(false);
// // // // // //   const [translatingFields, setTranslatingFields] = useState({});

// // // // // //   // Refs for keyboard and scroll handling
// // // // // //   const typingTimeoutRef = useRef(null);
// // // // // //   const scrollViewRef = useRef(null);

// // // // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// // // // // //   const setEnglish = (key) => (val) => {
// // // // // //     const filtered = val.replace(/[^\x00-\x7F]/g, "");
// // // // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // // // //   };

// // // // // //   // Proper Marathi setter with Debounced Auto-Translation
// // // // // //   const setMarathi = (key) => (val) => {
// // // // // //     // 1. Immediately update UI with whatever user is typing
// // // // // //     setData((p) => ({ ...p, [key]: val }));

// // // // // //     // 2. Clear any existing timer
// // // // // //     if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

// // // // // //     // 3. Check for English characters to trigger translation
// // // // // //     const englishChars = val.match(/[a-zA-Z]/g);

// // // // // //     if (englishChars && englishChars.length > 0) {
// // // // // //       const englishText = val.replace(/[^\x00-\x7F\s]/g, "").trim();

// // // // // //       if (englishText.length > 1) {
// // // // // //         // Set loading state for this specific field
// // // // // //         setTranslatingFields((prev) => ({ ...prev, [key]: true }));

// // // // // //         // Start debounce timer (800ms)
// // // // // //         typingTimeoutRef.current = setTimeout(async () => {
// // // // // //           try {
// // // // // //             const translated = await translateText(englishText, "mr");
// // // // // //             setData((p) => ({ ...p, [key]: translated }));
// // // // // //           } catch (error) {
// // // // // //             console.error("Auto-translate failed:", error);
// // // // // //           } finally {
// // // // // //             setTranslatingFields((prev) => ({ ...prev, [key]: false }));
// // // // // //           }
// // // // // //         }, 800);
// // // // // //       }
// // // // // //     } else {
// // // // // //       // Pure Marathi input, filter out non-Marathi characters (standard behavior)
// // // // // //       const filtered = val.replace(/[^\u0900-\u097F\s]/g, "");
// // // // // //       setData((p) => ({ ...p, [key]: filtered }));
// // // // // //     }
// // // // // //   };

// // // // // //   const pickImage = async () => {
// // // // // //     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // // // //     if (permissionResult.granted === false) {
// // // // // //       setMissingFields([{ label: "Permission Required: Allow photo access.", lang: null }]);
// // // // // //       setErrorVisible(true);
// // // // // //       return;
// // // // // //     }
// // // // // //     const result = await ImagePicker.launchImageLibraryAsync({
// // // // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // // // //       allowsEditing: true,
// // // // // //       aspect: [3.5, 4.5],
// // // // // //       quality: 0.8,
// // // // // //     });
// // // // // //     if (!result.canceled) {
// // // // // //       set("photo")(result.assets[0].uri);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleNext = () => {
// // // // // //     const missing = REQUIRED_FIELDS.filter((f) => !data[f.key] || data[f.key] === "");
// // // // // //     if (missing.length > 0) {
// // // // // //       setMissingFields(missing);
// // // // // //       setErrorVisible(true);
// // // // // //       setHighlightErrors(true);
// // // // // //     } else {
// // // // // //       setHighlightErrors(false);
// // // // // //       onNext && onNext();
// // // // // //     }
// // // // // //   };

// // // // // //   // Better scroll handler - scroll to index with offset
// // // // // //   const handleMarathiNoteFocus = () => {
// // // // // //     setTimeout(() => {
// // // // // //       scrollViewRef.current?.scrollToEnd({ animated: true });
// // // // // //     }, 300);
// // // // // //   };

// // // // // //   const isFieldMissing = (key) => highlightErrors && missingFields.some((f) => f.key === key);
// // // // // //   const isFieldTranslating = (key) => translatingFields[key] || false;

// // // // // //   return (
// // // // // //     <>
// // // // // //       {/* ── VALIDATION POPUP ── */}
// // // // // //       <Modal transparent visible={errorVisible} animationType="fade">
// // // // // //         <View style={popStyles.overlay}>
// // // // // //           <View style={popStyles.card}>
// // // // // //             <View style={popStyles.banner}>
// // // // // //               <View style={popStyles.bannerRow}>
// // // // // //                 <View style={popStyles.bannerIcon}>
// // // // // //                   <View style={popStyles.warningTriangle}><Text style={popStyles.warningExclaim}>!</Text></View>
// // // // // //                 </View>
// // // // // //                 <View style={{ flex: 1 }}>
// // // // // //                   <Text style={popStyles.bannerTitle}>Required fields missing</Text>
// // // // // //                   <Text style={popStyles.bannerSub}>Fill in all fields to continue</Text>
// // // // // //                 </View>
// // // // // //                 <TouchableOpacity style={popStyles.closeBtn} onPress={() => setErrorVisible(false)}>
// // // // // //                   <Text style={popStyles.closeBtnText}>✕</Text>
// // // // // //                 </TouchableOpacity>
// // // // // //               </View>
// // // // // //               <View style={popStyles.bannerCurve} />
// // // // // //             </View>

// // // // // //             <View style={popStyles.countRow}>
// // // // // //               <Text style={popStyles.sectionLabel}>Incomplete fields</Text>
// // // // // //               <View style={popStyles.countBadge}><Text style={popStyles.countBadgeText}>{missingFields.length}</Text></View>
// // // // // //             </View>

// // // // // //             <ScrollView style={popStyles.listScroll} contentContainerStyle={popStyles.listContent} showsVerticalScrollIndicator={false}>
// // // // // //               {missingFields.map((f, i) => (
// // // // // //                 <View key={i} style={popStyles.fieldRow}>
// // // // // //                   <View style={popStyles.fieldDot}><Text style={popStyles.fieldDotText}>✕</Text></View>
// // // // // //                   <Text style={popStyles.fieldText} numberOfLines={1}>{f.label}</Text>
// // // // // //                   <View style={[popStyles.langBadge, f.lang === "MR" && popStyles.langBadgeMr]}>
// // // // // //                     <Text style={[popStyles.langBadgeText, f.lang === "MR" && popStyles.langBadgeTextMr]}>{f.lang || "Req"}</Text>
// // // // // //                   </View>
// // // // // //                 </View>
// // // // // //               ))}
// // // // // //             </ScrollView>

// // // // // //             <View style={popStyles.btnRow}>
// // // // // //               <TouchableOpacity style={popStyles.dismissBtn} onPress={() => setErrorVisible(false)}>
// // // // // //                 <Text style={popStyles.dismissText}>Dismiss</Text>
// // // // // //               </TouchableOpacity>
// // // // // //               <TouchableOpacity style={popStyles.fixBtn} onPress={() => setErrorVisible(false)}>
// // // // // //                 <Text style={popStyles.fixText}>Fix fields →</Text>
// // // // // //               </TouchableOpacity>
// // // // // //             </View>
// // // // // //           </View>
// // // // // //         </View>
// // // // // //       </Modal>

// // // // // //       {/* ── CANDIDATE DROPDOWN MODAL ── */}
// // // // // //       <Modal transparent visible={showCandidatePicker} animationType="fade">
// // // // // //         <TouchableOpacity style={dropdownStyles.overlay} activeOpacity={1} onPressOut={() => setShowCandidatePicker(false)}>
// // // // // //           <View style={dropdownStyles.container}>
// // // // // //             <View style={dropdownStyles.header}><Text style={dropdownStyles.headerTitle}>Select Candidate Type</Text></View>
// // // // // //             {candidateTypeOptions.map((option) => (
// // // // // //               <TouchableOpacity
// // // // // //                 key={option.value}
// // // // // //                 style={[dropdownStyles.option, data.candidateType === option.value && dropdownStyles.optionSelected]}
// // // // // //                 onPress={() => { set("candidateType")(option.value); setShowCandidatePicker(false); }}
// // // // // //               >
// // // // // //                 <Text style={[dropdownStyles.optionText, data.candidateType === option.value && dropdownStyles.optionTextSelected]}>{option.label}</Text>
// // // // // //                 {data.candidateType === option.value && <Text style={dropdownStyles.checkMark}>✓</Text>}
// // // // // //               </TouchableOpacity>
// // // // // //             ))}
// // // // // //           </View>
// // // // // //         </TouchableOpacity>
// // // // // //       </Modal>

// // // // // //       {/* ── FORM WITH KEYBOARD SUPPORT ── */}
// // // // // //       <KeyboardAvoidingView 
// // // // // //         behavior={Platform.OS === "ios" ? "padding" : "height"}
// // // // // //         style={{ flex: 1 }}
// // // // // //         keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
// // // // // //       >
// // // // // //         <ScrollView 
// // // // // //           ref={scrollViewRef}
// // // // // //           showsVerticalScrollIndicator={false} 
// // // // // //           contentContainerStyle={{ paddingBottom: 40 }}
// // // // // //           keyboardShouldPersistTaps="handled"
// // // // // //           scrollEventThrottle={16}
// // // // // //         >
// // // // // //           <SectionHeader title="Basic Information" />

// // // // // //           {/* English Name Row */}
// // // // // //           <View style={styles.row3}>
// // // // // //             <View style={{ flex: 1, marginRight: 4 }}>
// // // // // //               <Field label="First Name" required value={data.firstName} onChangeText={setEnglish("firstName")} placeholder="English"
// // // // // //                 inputStyle={isFieldMissing("firstName") && fieldErrStyle} />
// // // // // //             </View>
// // // // // //             <View style={{ flex: 1, marginHorizontal: 2 }}>
// // // // // //               <Field label="Middle Name" required value={data.middleName} onChangeText={setEnglish("middleName")} placeholder="English"
// // // // // //                 inputStyle={isFieldMissing("middleName") && fieldErrStyle} />
// // // // // //             </View>
// // // // // //             <View style={{ flex: 1, marginLeft: 4 }}>
// // // // // //               <Field label="Last Name" required value={data.lastName} onChangeText={setEnglish("lastName")} placeholder="English"
// // // // // //                 inputStyle={isFieldMissing("lastName") && fieldErrStyle} />
// // // // // //             </View>
// // // // // //           </View>

// // // // // //           {/* Marathi Name Row */}
// // // // // //           <View style={styles.row3}>
// // // // // //             {["firstNameMr", "middleNameMr", "lastNameMr"].map((key, index) => (
// // // // // //               <View key={key} style={{ flex: 1, marginHorizontal: index === 1 ? 2 : 0, marginRight: index === 0 ? 4 : 0, marginLeft: index === 2 ? 4 : 0, position: "relative" }}>
// // // // // //                 <Field 
// // // // // //                   label={key === "firstNameMr" ? "पहिले नाव" : key === "middleNameMr" ? "वडिलांचे नाव" : "आडनाव"} 
// // // // // //                   required 
// // // // // //                   value={data[key]} 
// // // // // //                   onChangeText={setMarathi(key)} 
// // // // // //                   placeholder="मराठी"
// // // // // //                   inputStyle={[
// // // // // //                     isFieldMissing(key) && fieldErrStyle,
// // // // // //                     isFieldTranslating(key) && { opacity: 0.6 }
// // // // // //                   ]}
// // // // // //                 />
// // // // // //                 {isFieldTranslating(key) && (
// // // // // //                   <View style={translatingIndicator}>
// // // // // //                     <ActivityIndicator size="small" color="#f97316" />
// // // // // //                   </View>
// // // // // //                 )}
// // // // // //               </View>
// // // // // //             ))}
// // // // // //           </View>

// // // // // //           {/* Birth Name Row */}
// // // // // //           <View style={styles.row2}>
// // // // // //             <View style={{ flex: 1, marginRight: 8, position: "relative" }}>
// // // // // //               <Field 
// // // // // //                 label="जन्म नाव (मराठी)" 
// // // // // //                 required 
// // // // // //                 value={data.birthName} 
// // // // // //                 onChangeText={setMarathi("birthName")} 
// // // // // //                 placeholder="मराठी"
// // // // // //                 inputStyle={[
// // // // // //                   isFieldMissing("birthName") && fieldErrStyle,
// // // // // //                   isFieldTranslating("birthName") && { opacity: 0.6 }
// // // // // //                 ]}
// // // // // //               />
// // // // // //               {isFieldTranslating("birthName") && (
// // // // // //                 <View style={translatingIndicator}>
// // // // // //                   <ActivityIndicator size="small" color="#f97316" />
// // // // // //                 </View>
// // // // // //               )}
// // // // // //             </View>
// // // // // //             <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // //               <Field label="Birth Name (Eng)" required value={data.birthNameEn} onChangeText={setEnglish("birthNameEn")} placeholder="English"
// // // // // //                 inputStyle={isFieldMissing("birthNameEn") && fieldErrStyle} />
// // // // // //             </View>
// // // // // //           </View>

// // // // // //           {/* Candidate Type & Photo */}
// // // // // //           <View style={styles.row2}>
// // // // // //             <View style={{ flex: 1, marginRight: 8 }}>
// // // // // //               <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>Candidate Type <Text style={{ color: "red" }}>*</Text></Text>
// // // // // //               <TouchableOpacity
// // // // // //                 style={[dropdownStyles.pickerBtn, isFieldMissing("candidateType") && { borderColor: "#E24B4A", borderWidth: 1.5 }]}
// // // // // //                 onPress={() => setShowCandidatePicker(true)}
// // // // // //               >
// // // // // //                 <Text style={[dropdownStyles.pickerBtnText, !data.candidateType && { color: "#bbb" }]}>{data.candidateType || "Select"}</Text>
// // // // // //                 <Text style={dropdownStyles.pickerArrow}>▼</Text>
// // // // // //               </TouchableOpacity>
// // // // // //             </View>

// // // // // //             <View style={{ flex: 1, marginLeft: 8 }}>
// // // // // //               <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>Photo <Text style={{ color: "red" }}>*</Text></Text>
// // // // // //               <TouchableOpacity
// // // // // //                 style={[styles.photoBtn, { height: 50 }, data.photo && { padding: 0, overflow: "hidden" }, isFieldMissing("photo") && { borderWidth: 1.5, borderColor: "#E24B4A" }]}
// // // // // //                 onPress={pickImage}
// // // // // //               >
// // // // // //                 {data.photo ? <Image source={{ uri: data.photo }} style={{ width: "100%", height: "100%" }} /> : <Text style={styles.photoBtnText}>📷 Upload</Text>}
// // // // // //               </TouchableOpacity>
// // // // // //             </View>
// // // // // //           </View>

// // // // // //           {/* Optional Marathi Note - WITH EXTRA TOP SPACING FOR KEYBOARD */}
// // // // // //           <View style={[styles.marathiPadWrap, { marginTop: 15, position: "relative", minHeight: 180 }]}>
// // // // // //             <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>इतर टीप (मराठी)</Text>
// // // // // //             <TextInput
// // // // // //               style={[styles.marathiPad, { height: 80 }, isFieldTranslating("marathiNote") && { opacity: 0.6 }]}
// // // // // //               multiline
// // // // // //               placeholder="English type करा (auto-translate)..."
// // // // // //               placeholderTextColor="#bbb"
// // // // // //               value={data.marathiNote}
// // // // // //               onChangeText={setMarathi("marathiNote")}
// // // // // //               onFocus={handleMarathiNoteFocus}
// // // // // //             />
// // // // // //             {isFieldTranslating("marathiNote") && (
// // // // // //               <View style={translatingIndicatorLarge}>
// // // // // //                 <ActivityIndicator size="small" color="#f97316" />
// // // // // //               </View>
// // // // // //             )}
// // // // // //           </View>

// // // // // //           {/* Next Button */}
// // // // // //           <TouchableOpacity style={[styles.nextBtn, { marginTop: 20 }]} onPress={handleNext}>
// // // // // //             <Text style={styles.nextBtnText}>Continue</Text>
// // // // // //           </TouchableOpacity>
// // // // // //         </ScrollView>
// // // // // //       </KeyboardAvoidingView>
// // // // // //     </>
// // // // // //   );
// // // // // // }

// // // // // // // ─── Styles ──────────────────────────────────────────────────────────────────

// // // // // // const fieldErrStyle = { borderWidth: 1.5, borderColor: "#E24B4A", backgroundColor: "#fff" };

// // // // // // const translatingIndicator = { position: "absolute", right: 10, top: "55%" };
// // // // // // const translatingIndicatorLarge = { position: "absolute", right: 10, top: 35 };

// // // // // // const dropdownStyles = {
// // // // // //   overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "center", alignItems: "center", padding: 30 },
// // // // // //   container: { backgroundColor: "#fff", borderRadius: 16, width: "100%", maxWidth: 300, overflow: "hidden", elevation: 8 },
// // // // // //   header: { paddingVertical: 14, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: "#eee", backgroundColor: "#fafafa" },
// // // // // //   headerTitle: { fontSize: 14, fontWeight: "700", color: "#333" },
// // // // // //   option: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 14, paddingHorizontal: 16, borderBottomWidth: 0.5, borderBottomColor: "#f0f0f0" },
// // // // // //   optionSelected: { backgroundColor: "#FFF3E8" },
// // // // // //   optionText: { fontSize: 15, color: "#333" },
// // // // // //   optionTextSelected: { fontWeight: "600", color: "#f97316" },
// // // // // //   checkMark: { fontSize: 16, color: "#f97316", fontWeight: "800" },
// // // // // //   pickerBtn: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#f8f9fa", borderRadius: 10, borderWidth: 1, borderColor: "#e0e0e0", paddingHorizontal: 14, height: 50 },
// // // // // //   pickerBtnText: { fontSize: 14, color: "#333" },
// // // // // //   pickerArrow: { fontSize: 12, color: "#888" },
// // // // // // };

// // // // // // const popStyles = {
// // // // // //   overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.55)", justifyContent: "center", alignItems: "center", padding: 24 },
// // // // // //   card: { backgroundColor: "#fff", borderRadius: 24, width: "100%", maxWidth: 340, overflow: "hidden", elevation: 12 },
// // // // // //   banner: { backgroundColor: "#E24B4A", paddingHorizontal: 20, paddingTop: 22, paddingBottom: 28, position: "relative" },
// // // // // //   bannerRow: { flexDirection: "row", alignItems: "center", gap: 14 },
// // // // // //   bannerIcon: { width: 46, height: 46, borderRadius: 23, backgroundColor: "rgba(255,255,255,0.22)", alignItems: "center", justifyContent: "center" },
// // // // // //   warningTriangle: { width: 26, height: 26, borderRadius: 6, backgroundColor: "rgba(255,255,255,0.3)", alignItems: "center", justifyContent: "center" },
// // // // // //   warningExclaim: { color: "#fff", fontSize: 16, fontWeight: "700" },
// // // // // //   bannerTitle: { fontSize: 16, fontWeight: "700", color: "#fff" },
// // // // // //   bannerSub: { fontSize: 12, color: "rgba(255,255,255,0.78)", marginTop: 3 },
// // // // // //   closeBtn: { width: 30, height: 30, borderRadius: 15, backgroundColor: "rgba(255,255,255,0.2)", alignItems: "center", justifyContent: "center" },
// // // // // //   closeBtnText: { color: "#fff", fontSize: 13, fontWeight: "700" },
// // // // // //   bannerCurve: { position: "absolute", bottom: 0, left: 0, right: 0, height: 18, backgroundColor: "#fff", borderTopLeftRadius: 18, borderTopRightRadius: 18 },
// // // // // //   countRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingTop: 6, paddingBottom: 10 },
// // // // // //   sectionLabel: { fontSize: 11, fontWeight: "700", color: "#999", letterSpacing: 0.6, textTransform: "uppercase" },
// // // // // //   countBadge: { backgroundColor: "#FCEBEB", borderRadius: 10, paddingHorizontal: 9, paddingVertical: 2, borderWidth: 0.5, borderColor: "#F7C1C1" },
// // // // // //   countBadgeText: { fontSize: 12, fontWeight: "700", color: "#E24B4A" },
// // // // // //   listScroll: { maxHeight: 200, paddingHorizontal: 20 },
// // // // // //   listContent: { gap: 7, paddingBottom: 10 },
// // // // // //   fieldRow: { flexDirection: "row", alignItems: "center", gap: 10, padding: 10, backgroundColor: "#FCEBEB", borderRadius: 11, borderWidth: 0.5, borderColor: "#F7C1C1" },
// // // // // //   fieldDot: { width: 20, height: 20, borderRadius: 10, backgroundColor: "#E24B4A", alignItems: "center", justifyContent: "center" },
// // // // // //   fieldDotText: { color: "#fff", fontSize: 10, fontWeight: "800" },
// // // // // //   fieldText: { flex: 1, fontSize: 13, fontWeight: "600", color: "#791F1F" },
// // // // // //   langBadge: { backgroundColor: "#E6F1FB", borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
// // // // // //   langBadgeText: { fontSize: 10, fontWeight: "700", color: "#185FA5" },
// // // // // //   langBadgeMr: { backgroundColor: "#FAEEDA" },
// // // // // //   langBadgeTextMr: { color: "#854F0B" },
// // // // // //   btnRow: { flexDirection: "row", gap: 10, padding: 20 },
// // // // // //   dismissBtn: { flex: 1, height: 45, borderRadius: 12, backgroundColor: "#f5f5f5", alignItems: "center", justifyContent: "center" },
// // // // // //   dismissText: { fontSize: 14, fontWeight: "600", color: "#777" },
// // // // // //   fixBtn: { flex: 2, height: 45, borderRadius: 12, backgroundColor: "#f97316", alignItems: "center", justifyContent: "center" },
// // // // // //   fixText: { fontSize: 14, fontWeight: "700", color: "#fff" },
// // // // // // };







// // // // // // mmmm
// // // // // // Step1.jsx - FIXED VERSION WITH WORKING KEYBOARD SCROLL + FULL PHOTO DISPLAY
// // // // // import React, { useState, useRef } from "react";
// // // // // import {
// // // // //   View, Text, ScrollView, TouchableOpacity,
// // // // //   TextInput, Image, Modal, ActivityIndicator, Keyboard,
// // // // //   KeyboardAvoidingView, Platform, FlatList,
// // // // // } from "react-native";
// // // // // import * as ImagePicker from "expo-image-picker";
// // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // const REQUIRED_FIELDS = [
// // // // //   { key: "firstName",     label: "First Name",           lang: "EN" },
// // // // //   { key: "middleName",    label: "Middle Name",          lang: "EN" },
// // // // //   { key: "lastName",      label: "Last Name / Surname",  lang: "EN" },
// // // // //   { key: "firstNameMr",   label: "पहिले नाव",             lang: "MR" },
// // // // //   { key: "middleNameMr",  label: "वडिलांचे नाव",          lang: "MR" },
// // // // //   { key: "lastNameMr",    label: "शेवटचे नाव / आडनाव",    lang: "MR" },
// // // // //   { key: "birthName",     label: "जन्म नाव",              lang: "MR" },
// // // // //   { key: "birthNameEn",   label: "Birth Name",           lang: "EN" },
// // // // //   { key: "candidateType", label: "Candidate Type",       lang: "EN" },
// // // // //   { key: "photo",         label: "Photo",                lang: null  },
// // // // // ];

// // // // // const candidateTypeOptions = [
// // // // //   { label: "वधू (Bride)", value: "वधू" },
// // // // //   { label: "वर (Groom)", value: "वर" },
// // // // // ];

// // // // // // Helper to decode HTML entities returned by Google
// // // // // const decodeHTMLEntities = (text) => {
// // // // //   const entities = {
// // // // //     "&amp;": "&",
// // // // //     "&lt;": "<",
// // // // //     "&gt;": ">",
// // // // //     "&quot;": '"',
// // // // //     "&#39;": "'",
// // // // //   };
// // // // //   return text.replace(/&[^;]+;/g, (entity) => entities[entity] || entity);
// // // // // };

// // // // // // Optimized Google Cloud Translation Service
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
// // // // //     if (!response.ok) {
// // // // //       console.error("Translation API error:", data.error?.message);
// // // // //       return text;
// // // // //     }

// // // // //     const translatedText = data.data?.translations?.[0]?.translatedText || text;
// // // // //     return decodeHTMLEntities(translatedText);
// // // // //   } catch (error) {
// // // // //     console.error("Translation error:", error);
// // // // //     return text;
// // // // //   }
// // // // // };

// // // // // export default function Step1({ data, setData, onNext }) {
// // // // //   const [errorVisible, setErrorVisible] = useState(false);
// // // // //   const [missingFields, setMissingFields] = useState([]);
// // // // //   const [showCandidatePicker, setShowCandidatePicker] = useState(false);
// // // // //   const [highlightErrors, setHighlightErrors] = useState(false);
// // // // //   const [translatingFields, setTranslatingFields] = useState({});

// // // // //   // Refs for keyboard and scroll handling
// // // // //   const typingTimeoutRef = useRef(null);
// // // // //   const scrollViewRef = useRef(null);

// // // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// // // // //   const setEnglish = (key) => (val) => {
// // // // //     const filtered = val.replace(/[^\x00-\x7F]/g, "");
// // // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // // //   };

// // // // //   // Proper Marathi setter with Debounced Auto-Translation
// // // // //   const setMarathi = (key) => (val) => {
// // // // //     // 1. Immediately update UI with whatever user is typing
// // // // //     setData((p) => ({ ...p, [key]: val }));

// // // // //     // 2. Clear any existing timer
// // // // //     if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

// // // // //     // 3. Check for English characters to trigger translation
// // // // //     const englishChars = val.match(/[a-zA-Z]/g);

// // // // //     if (englishChars && englishChars.length > 0) {
// // // // //       const englishText = val.replace(/[^\x00-\x7F\s]/g, "").trim();

// // // // //       if (englishText.length > 1) {
// // // // //         // Set loading state for this specific field
// // // // //         setTranslatingFields((prev) => ({ ...prev, [key]: true }));

// // // // //         // Start debounce timer (800ms)
// // // // //         typingTimeoutRef.current = setTimeout(async () => {
// // // // //           try {
// // // // //             const translated = await translateText(englishText, "mr");
// // // // //             setData((p) => ({ ...p, [key]: translated }));
// // // // //           } catch (error) {
// // // // //             console.error("Auto-translate failed:", error);
// // // // //           } finally {
// // // // //             setTranslatingFields((prev) => ({ ...prev, [key]: false }));
// // // // //           }
// // // // //         }, 800);
// // // // //       }
// // // // //     } else {
// // // // //       // Pure Marathi input, filter out non-Marathi characters
// // // // //       const filtered = val.replace(/[^\u0900-\u097F\s]/g, "");
// // // // //       setData((p) => ({ ...p, [key]: filtered }));
// // // // //     }
// // // // //   };

// // // // //   const pickImage = async () => {
// // // // //     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // // //     if (permissionResult.granted === false) {
// // // // //       setMissingFields([{ label: "Permission Required: Allow photo access.", lang: null }]);
// // // // //       setErrorVisible(true);
// // // // //       return;
// // // // //     }
// // // // //     const result = await ImagePicker.launchImageLibraryAsync({
// // // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // // //       allowsEditing: true,
// // // // //       aspect: [3.5, 4.5],
// // // // //       quality: 0.8,
// // // // //     });
// // // // //     if (!result.canceled) {
// // // // //       set("photo")(result.assets[0].uri);
// // // // //     }
// // // // //   };

// // // // //   const handleNext = () => {
// // // // //     const missing = REQUIRED_FIELDS.filter((f) => !data[f.key] || data[f.key] === "");
// // // // //     if (missing.length > 0) {
// // // // //       setMissingFields(missing);
// // // // //       setErrorVisible(true);
// // // // //       setHighlightErrors(true);
// // // // //     } else {
// // // // //       setHighlightErrors(false);
// // // // //       onNext && onNext();
// // // // //     }
// // // // //   };

// // // // //   // Better scroll handler - scroll to end with offset
// // // // //   const handleMarathiNoteFocus = () => {
// // // // //     setTimeout(() => {
// // // // //       scrollViewRef.current?.scrollToEnd({ animated: true });
// // // // //     }, 300);
// // // // //   };

// // // // //   const isFieldMissing = (key) => highlightErrors && missingFields.some((f) => f.key === key);
// // // // //   const isFieldTranslating = (key) => translatingFields[key] || false;

// // // // //   return (
// // // // //     <>
// // // // //       {/* ── VALIDATION POPUP ── */}
// // // // //       <Modal transparent visible={errorVisible} animationType="fade">
// // // // //         <View style={popStyles.overlay}>
// // // // //           <View style={popStyles.card}>
// // // // //             <View style={popStyles.banner}>
// // // // //               <View style={popStyles.bannerRow}>
// // // // //                 <View style={popStyles.bannerIcon}>
// // // // //                   <View style={popStyles.warningTriangle}>
// // // // //                     <Text style={popStyles.warningExclaim}>!</Text>
// // // // //                   </View>
// // // // //                 </View>
// // // // //                 <View style={{ flex: 1 }}>
// // // // //                   <Text style={popStyles.bannerTitle}>Required fields missing</Text>
// // // // //                   <Text style={popStyles.bannerSub}>Fill in all fields to continue</Text>
// // // // //                 </View>
// // // // //                 <TouchableOpacity style={popStyles.closeBtn} onPress={() => setErrorVisible(false)}>
// // // // //                   <Text style={popStyles.closeBtnText}>✕</Text>
// // // // //                 </TouchableOpacity>
// // // // //               </View>
// // // // //               <View style={popStyles.bannerCurve} />
// // // // //             </View>

// // // // //             <View style={popStyles.countRow}>
// // // // //               <Text style={popStyles.sectionLabel}>Incomplete fields</Text>
// // // // //               <View style={popStyles.countBadge}>
// // // // //                 <Text style={popStyles.countBadgeText}>{missingFields.length}</Text>
// // // // //               </View>
// // // // //             </View>

// // // // //             <ScrollView
// // // // //               style={popStyles.listScroll}
// // // // //               contentContainerStyle={popStyles.listContent}
// // // // //               showsVerticalScrollIndicator={false}
// // // // //             >
// // // // //               {missingFields.map((f, i) => (
// // // // //                 <View key={i} style={popStyles.fieldRow}>
// // // // //                   <View style={popStyles.fieldDot}>
// // // // //                     <Text style={popStyles.fieldDotText}>✕</Text>
// // // // //                   </View>
// // // // //                   <Text style={popStyles.fieldText} numberOfLines={1}>{f.label}</Text>
// // // // //                   <View style={[popStyles.langBadge, f.lang === "MR" && popStyles.langBadgeMr]}>
// // // // //                     <Text style={[popStyles.langBadgeText, f.lang === "MR" && popStyles.langBadgeTextMr]}>
// // // // //                       {f.lang || "Req"}
// // // // //                     </Text>
// // // // //                   </View>
// // // // //                 </View>
// // // // //               ))}
// // // // //             </ScrollView>

// // // // //             <View style={popStyles.btnRow}>
// // // // //               <TouchableOpacity style={popStyles.dismissBtn} onPress={() => setErrorVisible(false)}>
// // // // //                 <Text style={popStyles.dismissText}>Dismiss</Text>
// // // // //               </TouchableOpacity>
// // // // //               <TouchableOpacity style={popStyles.fixBtn} onPress={() => setErrorVisible(false)}>
// // // // //                 <Text style={popStyles.fixText}>Fix fields →</Text>
// // // // //               </TouchableOpacity>
// // // // //             </View>
// // // // //           </View>
// // // // //         </View>
// // // // //       </Modal>

// // // // //       {/* ── CANDIDATE DROPDOWN MODAL ── */}
// // // // //       <Modal transparent visible={showCandidatePicker} animationType="fade">
// // // // //         <TouchableOpacity
// // // // //           style={dropdownStyles.overlay}
// // // // //           activeOpacity={1}
// // // // //           onPressOut={() => setShowCandidatePicker(false)}
// // // // //         >
// // // // //           <View style={dropdownStyles.container}>
// // // // //             <View style={dropdownStyles.header}>
// // // // //               <Text style={dropdownStyles.headerTitle}>Select Candidate Type</Text>
// // // // //             </View>
// // // // //             {candidateTypeOptions.map((option) => (
// // // // //               <TouchableOpacity
// // // // //                 key={option.value}
// // // // //                 style={[
// // // // //                   dropdownStyles.option,
// // // // //                   data.candidateType === option.value && dropdownStyles.optionSelected,
// // // // //                 ]}
// // // // //                 onPress={() => {
// // // // //                   set("candidateType")(option.value);
// // // // //                   setShowCandidatePicker(false);
// // // // //                 }}
// // // // //               >
// // // // //                 <Text
// // // // //                   style={[
// // // // //                     dropdownStyles.optionText,
// // // // //                     data.candidateType === option.value && dropdownStyles.optionTextSelected,
// // // // //                   ]}
// // // // //                 >
// // // // //                   {option.label}
// // // // //                 </Text>
// // // // //                 {data.candidateType === option.value && (
// // // // //                   <Text style={dropdownStyles.checkMark}>✓</Text>
// // // // //                 )}
// // // // //               </TouchableOpacity>
// // // // //             ))}
// // // // //           </View>
// // // // //         </TouchableOpacity>
// // // // //       </Modal>

// // // // //       {/* ── FORM WITH KEYBOARD SUPPORT ── */}
// // // // //       <KeyboardAvoidingView
// // // // //         behavior={Platform.OS === "ios" ? "padding" : "height"}
// // // // //         style={{ flex: 1 }}
// // // // //         keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
// // // // //       >
// // // // //         <ScrollView
// // // // //           ref={scrollViewRef}
// // // // //           showsVerticalScrollIndicator={false}
// // // // //           contentContainerStyle={{ paddingBottom: 40 }}
// // // // //           keyboardShouldPersistTaps="handled"
// // // // //           scrollEventThrottle={16}
// // // // //         >
// // // // //           <SectionHeader title="Basic Information" />

// // // // //           {/* English Name Row */}
// // // // //           <View style={styles.row3}>
// // // // //             <View style={{ flex: 1, marginRight: 4 }}>
// // // // //               <Field
// // // // //                 label="First Name"
// // // // //                 required
// // // // //                 value={data.firstName}
// // // // //                 onChangeText={setEnglish("firstName")}
// // // // //                 placeholder="English"
// // // // //                 inputStyle={isFieldMissing("firstName") && fieldErrStyle}
// // // // //               />
// // // // //             </View>
// // // // //             <View style={{ flex: 1, marginHorizontal: 2 }}>
// // // // //               <Field
// // // // //                 label="Middle Name"
// // // // //                 required
// // // // //                 value={data.middleName}
// // // // //                 onChangeText={setEnglish("middleName")}
// // // // //                 placeholder="English"
// // // // //                 inputStyle={isFieldMissing("middleName") && fieldErrStyle}
// // // // //               />
// // // // //             </View>
// // // // //             <View style={{ flex: 1, marginLeft: 4 }}>
// // // // //               <Field
// // // // //                 label="Last Name"
// // // // //                 required
// // // // //                 value={data.lastName}
// // // // //                 onChangeText={setEnglish("lastName")}
// // // // //                 placeholder="English"
// // // // //                 inputStyle={isFieldMissing("lastName") && fieldErrStyle}
// // // // //               />
// // // // //             </View>
// // // // //           </View>

// // // // //           {/* Marathi Name Row */}
// // // // //           <View style={styles.row3}>
// // // // //             {["firstNameMr", "middleNameMr", "lastNameMr"].map((key, index) => (
// // // // //               <View
// // // // //                 key={key}
// // // // //                 style={{
// // // // //                   flex: 1,
// // // // //                   marginHorizontal: index === 1 ? 2 : 0,
// // // // //                   marginRight: index === 0 ? 4 : 0,
// // // // //                   marginLeft: index === 2 ? 4 : 0,
// // // // //                   position: "relative",
// // // // //                 }}
// // // // //               >
// // // // //                 <Field
// // // // //                   label={
// // // // //                     key === "firstNameMr"
// // // // //                       ? "पहिले नाव"
// // // // //                       : key === "middleNameMr"
// // // // //                       ? "वडिलांचे नाव"
// // // // //                       : "आडनाव"
// // // // //                   }
// // // // //                   required
// // // // //                   value={data[key]}
// // // // //                   onChangeText={setMarathi(key)}
// // // // //                   placeholder="मराठी"
// // // // //                   inputStyle={[
// // // // //                     isFieldMissing(key) && fieldErrStyle,
// // // // //                     isFieldTranslating(key) && { opacity: 0.6 },
// // // // //                   ]}
// // // // //                 />
// // // // //                 {isFieldTranslating(key) && (
// // // // //                   <View style={translatingIndicator}>
// // // // //                     <ActivityIndicator size="small" color="#f97316" />
// // // // //                   </View>
// // // // //                 )}
// // // // //               </View>
// // // // //             ))}
// // // // //           </View>

// // // // //           {/* Birth Name Row */}
// // // // //           <View style={styles.row2}>
// // // // //             <View style={{ flex: 1, marginRight: 8, position: "relative" }}>
// // // // //               <Field
// // // // //                 label="जन्म नाव (मराठी)"
// // // // //                 required
// // // // //                 value={data.birthName}
// // // // //                 onChangeText={setMarathi("birthName")}
// // // // //                 placeholder="मराठी"
// // // // //                 inputStyle={[
// // // // //                   isFieldMissing("birthName") && fieldErrStyle,
// // // // //                   isFieldTranslating("birthName") && { opacity: 0.6 },
// // // // //                 ]}
// // // // //               />
// // // // //               {isFieldTranslating("birthName") && (
// // // // //                 <View style={translatingIndicator}>
// // // // //                   <ActivityIndicator size="small" color="#f97316" />
// // // // //                 </View>
// // // // //               )}
// // // // //             </View>
// // // // //             <View style={{ flex: 1, marginLeft: 8 }}>
// // // // //               <Field
// // // // //                 label="Birth Name (Eng)"
// // // // //                 required
// // // // //                 value={data.birthNameEn}
// // // // //                 onChangeText={setEnglish("birthNameEn")}
// // // // //                 placeholder="English"
// // // // //                 inputStyle={isFieldMissing("birthNameEn") && fieldErrStyle}
// // // // //               />
// // // // //             </View>
// // // // //           </View>

// // // // //           {/* Candidate Type & Photo */}
// // // // //           <View style={styles.row2}>
// // // // //             {/* Candidate Type */}
// // // // //             <View style={{ flex: 1, marginRight: 8 }}>
// // // // //               <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // //                 Candidate Type <Text style={{ color: "red" }}>*</Text>
// // // // //               </Text>
// // // // //               <TouchableOpacity
// // // // //                 style={[
// // // // //                   dropdownStyles.pickerBtn,
// // // // //                   isFieldMissing("candidateType") && { borderColor: "#E24B4A", borderWidth: 1.5 },
// // // // //                 ]}
// // // // //                 onPress={() => setShowCandidatePicker(true)}
// // // // //               >
// // // // //                 <Text style={[dropdownStyles.pickerBtnText, !data.candidateType && { color: "#bbb" }]}>
// // // // //                   {data.candidateType || "Select"}
// // // // //                 </Text>
// // // // //                 <Text style={dropdownStyles.pickerArrow}>▼</Text>
// // // // //               </TouchableOpacity>
// // // // //             </View>

// // // // //             {/* ── PHOTO (user-friendly full portrait display) ── */}
// // // // //             <View style={{ flex: 1, marginLeft: 8 }}>
// // // // //               <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // //                 Photo <Text style={{ color: "red" }}>*</Text>
// // // // //               </Text>

// // // // //               {data.photo ? (
// // // // //                 /* ── PHOTO PREVIEW CARD ── */
// // // // //                 <View style={photoStyles.previewCard}>
// // // // //                   {/* Full portrait image */}
// // // // //                   <Image
// // // // //                     source={{ uri: data.photo }}
// // // // //                     style={photoStyles.previewImage}
// // // // //                     resizeMode="cover"
// // // // //                   />
// // // // //                   {/* Overlay gradient at bottom */}
// // // // //                   <View style={photoStyles.previewOverlay}>
// // // // //                     <View style={photoStyles.previewOverlayRow}>
// // // // //                       <View style={photoStyles.previewCheckBadge}>
// // // // //                         <Text style={photoStyles.previewCheckText}>✓</Text>
// // // // //                       </View>
// // // // //                       <Text style={photoStyles.previewLabel}>Photo Added</Text>
// // // // //                     </View>
// // // // //                   </View>
// // // // //                   {/* Change button floating top-right */}
// // // // //                   <TouchableOpacity style={photoStyles.changeBtn} onPress={pickImage}>
// // // // //                     <Text style={photoStyles.changeBtnText}>✎</Text>
// // // // //                   </TouchableOpacity>
// // // // //                 </View>
// // // // //               ) : (
// // // // //                 /* ── UPLOAD PLACEHOLDER ── */
// // // // //                 <TouchableOpacity
// // // // //                   style={[
// // // // //                     photoStyles.uploadBox,
// // // // //                     isFieldMissing("photo") && photoStyles.uploadBoxError,
// // // // //                   ]}
// // // // //                   onPress={pickImage}
// // // // //                   activeOpacity={0.75}
// // // // //                 >
// // // // //                   {/* Dashed border visual */}
// // // // //                   <View style={photoStyles.uploadInner}>
// // // // //                     <View style={photoStyles.uploadIconCircle}>
// // // // //                       <Text style={photoStyles.uploadIcon}>📷</Text>
// // // // //                     </View>
// // // // //                     <Text style={photoStyles.uploadTitle}>Upload Photo</Text>
// // // // //                     <Text style={photoStyles.uploadSub}>Tap to choose</Text>
// // // // //                     <View style={photoStyles.uploadBadge}>
// // // // //                       <Text style={photoStyles.uploadBadgeText}>3.5 × 4.5</Text>
// // // // //                     </View>
// // // // //                   </View>
// // // // //                 </TouchableOpacity>
// // // // //               )}
// // // // //             </View>
// // // // //           </View>

// // // // //           {/* Optional Marathi Note */}
// // // // //           <View style={[styles.marathiPadWrap, { marginTop: 15, position: "relative", minHeight: 180 }]}>
// // // // //             <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // //               इतर टीप (मराठी)
// // // // //             </Text>
// // // // //             <TextInput
// // // // //               style={[
// // // // //                 styles.marathiPad,
// // // // //                 { height: 80 },
// // // // //                 isFieldTranslating("marathiNote") && { opacity: 0.6 },
// // // // //               ]}
// // // // //               multiline
// // // // //               placeholder="English type करा (auto-translate)..."
// // // // //               placeholderTextColor="#bbb"
// // // // //               value={data.marathiNote}
// // // // //               onChangeText={setMarathi("marathiNote")}
// // // // //               onFocus={handleMarathiNoteFocus}
// // // // //             />
// // // // //             {isFieldTranslating("marathiNote") && (
// // // // //               <View style={translatingIndicatorLarge}>
// // // // //                 <ActivityIndicator size="small" color="#f97316" />
// // // // //               </View>
// // // // //             )}
// // // // //           </View>

// // // // //           {/* Next Button */}
// // // // //           <TouchableOpacity style={[styles.nextBtn, { marginTop: 20 }]} onPress={handleNext}>
// // // // //             <Text style={styles.nextBtnText}>Continue</Text>
// // // // //           </TouchableOpacity>
// // // // //         </ScrollView>
// // // // //       </KeyboardAvoidingView>
// // // // //     </>
// // // // //   );
// // // // // }

// // // // // // ─── Styles ──────────────────────────────────────────────────────────────────

// // // // // const fieldErrStyle = { borderWidth: 1.5, borderColor: "#E24B4A", backgroundColor: "#fff" };

// // // // // const photoStyles = {
// // // // //   /* ── Upload placeholder ── */
// // // // //   uploadBox: {
// // // // //     borderRadius: 14,
// // // // //     borderWidth: 2,
// // // // //     borderColor: "#e0e0e0",
// // // // //     borderStyle: "dashed",
// // // // //     backgroundColor: "#fafafa",
// // // // //     overflow: "hidden",
// // // // //     aspectRatio: 3.5 / 4.5,
// // // // //   },
// // // // //   uploadBoxError: {
// // // // //     borderColor: "#E24B4A",
// // // // //     backgroundColor: "#fff8f8",
// // // // //   },
// // // // //   uploadInner: {
// // // // //     flex: 1,
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //     padding: 12,
// // // // //     gap: 6,
// // // // //   },
// // // // //   uploadIconCircle: {
// // // // //     width: 48,
// // // // //     height: 48,
// // // // //     borderRadius: 24,
// // // // //     backgroundColor: "#fff3e8",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //     marginBottom: 4,
// // // // //     borderWidth: 1.5,
// // // // //     borderColor: "#fdd8b8",
// // // // //   },
// // // // //   uploadIcon: { fontSize: 22 },
// // // // //   uploadTitle: { fontSize: 13, fontWeight: "700", color: "#333" },
// // // // //   uploadSub: { fontSize: 11, color: "#aaa", marginTop: -2 },
// // // // //   uploadBadge: {
// // // // //     marginTop: 6,
// // // // //     backgroundColor: "#f97316",
// // // // //     borderRadius: 8,
// // // // //     paddingHorizontal: 10,
// // // // //     paddingVertical: 3,
// // // // //   },
// // // // //   uploadBadgeText: { fontSize: 10, fontWeight: "700", color: "#fff", letterSpacing: 0.5 },

// // // // //   /* ── Preview card ── */
// // // // //   previewCard: {
// // // // //     borderRadius: 14,
// // // // //     overflow: "hidden",
// // // // //     aspectRatio: 3.5 / 4.5,
// // // // //     position: "relative",
// // // // //     elevation: 4,
// // // // //     shadowColor: "#000",
// // // // //     shadowOffset: { width: 0, height: 2 },
// // // // //     shadowOpacity: 0.15,
// // // // //     shadowRadius: 6,
// // // // //   },
// // // // //   previewImage: {
// // // // //     width: "100%",
// // // // //     height: "100%",
// // // // //   },
// // // // //   /* Dark gradient bar at bottom */
// // // // //   previewOverlay: {
// // // // //     position: "absolute",
// // // // //     bottom: 0,
// // // // //     left: 0,
// // // // //     right: 0,
// // // // //     paddingVertical: 8,
// // // // //     paddingHorizontal: 10,
// // // // //     backgroundColor: "rgba(0,0,0,0.45)",
// // // // //   },
// // // // //   previewOverlayRow: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     gap: 6,
// // // // //   },
// // // // //   previewCheckBadge: {
// // // // //     width: 18,
// // // // //     height: 18,
// // // // //     borderRadius: 9,
// // // // //     backgroundColor: "#22c55e",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   previewCheckText: { color: "#fff", fontSize: 10, fontWeight: "800" },
// // // // //   previewLabel: { fontSize: 11, fontWeight: "600", color: "#fff" },

// // // // //   /* Floating edit button top-right */
// // // // //   changeBtn: {
// // // // //     position: "absolute",
// // // // //     top: 8,
// // // // //     right: 8,
// // // // //     width: 30,
// // // // //     height: 30,
// // // // //     borderRadius: 15,
// // // // //     backgroundColor: "rgba(255,255,255,0.9)",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //     elevation: 3,
// // // // //     shadowColor: "#000",
// // // // //     shadowOffset: { width: 0, height: 1 },
// // // // //     shadowOpacity: 0.2,
// // // // //     shadowRadius: 3,
// // // // //   },
// // // // //   changeBtnText: { fontSize: 14, color: "#f97316" },
// // // // // };

// // // // // const translatingIndicator = { position: "absolute", right: 10, top: "55%" };
// // // // // const translatingIndicatorLarge = { position: "absolute", right: 10, top: 35 };

// // // // // const dropdownStyles = {
// // // // //   overlay: {
// // // // //     flex: 1,
// // // // //     backgroundColor: "rgba(0,0,0,0.4)",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     padding: 30,
// // // // //   },
// // // // //   container: {
// // // // //     backgroundColor: "#fff",
// // // // //     borderRadius: 16,
// // // // //     width: "100%",
// // // // //     maxWidth: 300,
// // // // //     overflow: "hidden",
// // // // //     elevation: 8,
// // // // //   },
// // // // //   header: {
// // // // //     paddingVertical: 14,
// // // // //     paddingHorizontal: 16,
// // // // //     borderBottomWidth: 1,
// // // // //     borderBottomColor: "#eee",
// // // // //     backgroundColor: "#fafafa",
// // // // //   },
// // // // //   headerTitle: { fontSize: 14, fontWeight: "700", color: "#333" },
// // // // //   option: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "space-between",
// // // // //     paddingVertical: 14,
// // // // //     paddingHorizontal: 16,
// // // // //     borderBottomWidth: 0.5,
// // // // //     borderBottomColor: "#f0f0f0",
// // // // //   },
// // // // //   optionSelected: { backgroundColor: "#FFF3E8" },
// // // // //   optionText: { fontSize: 15, color: "#333" },
// // // // //   optionTextSelected: { fontWeight: "600", color: "#f97316" },
// // // // //   checkMark: { fontSize: 16, color: "#f97316", fontWeight: "800" },
// // // // //   pickerBtn: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "space-between",
// // // // //     backgroundColor: "#f8f9fa",
// // // // //     borderRadius: 10,
// // // // //     borderWidth: 1,
// // // // //     borderColor: "#e0e0e0",
// // // // //     paddingHorizontal: 14,
// // // // //     height: 50,
// // // // //   },
// // // // //   pickerBtnText: { fontSize: 14, color: "#333" },
// // // // //   pickerArrow: { fontSize: 12, color: "#888" },
// // // // // };

// // // // // const popStyles = {
// // // // //   overlay: {
// // // // //     flex: 1,
// // // // //     backgroundColor: "rgba(0,0,0,0.55)",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     padding: 24,
// // // // //   },
// // // // //   card: {
// // // // //     backgroundColor: "#fff",
// // // // //     borderRadius: 24,
// // // // //     width: "100%",
// // // // //     maxWidth: 340,
// // // // //     overflow: "hidden",
// // // // //     elevation: 12,
// // // // //   },
// // // // //   banner: {
// // // // //     backgroundColor: "#E24B4A",
// // // // //     paddingHorizontal: 20,
// // // // //     paddingTop: 22,
// // // // //     paddingBottom: 28,
// // // // //     position: "relative",
// // // // //   },
// // // // //   bannerRow: { flexDirection: "row", alignItems: "center", gap: 14 },
// // // // //   bannerIcon: {
// // // // //     width: 46,
// // // // //     height: 46,
// // // // //     borderRadius: 23,
// // // // //     backgroundColor: "rgba(255,255,255,0.22)",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   warningTriangle: {
// // // // //     width: 26,
// // // // //     height: 26,
// // // // //     borderRadius: 6,
// // // // //     backgroundColor: "rgba(255,255,255,0.3)",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   warningExclaim: { color: "#fff", fontSize: 16, fontWeight: "700" },
// // // // //   bannerTitle: { fontSize: 16, fontWeight: "700", color: "#fff" },
// // // // //   bannerSub: { fontSize: 12, color: "rgba(255,255,255,0.78)", marginTop: 3 },
// // // // //   closeBtn: {
// // // // //     width: 30,
// // // // //     height: 30,
// // // // //     borderRadius: 15,
// // // // //     backgroundColor: "rgba(255,255,255,0.2)",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   closeBtnText: { color: "#fff", fontSize: 13, fontWeight: "700" },
// // // // //   bannerCurve: {
// // // // //     position: "absolute",
// // // // //     bottom: 0,
// // // // //     left: 0,
// // // // //     right: 0,
// // // // //     height: 18,
// // // // //     backgroundColor: "#fff",
// // // // //     borderTopLeftRadius: 18,
// // // // //     borderTopRightRadius: 18,
// // // // //   },
// // // // //   countRow: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "space-between",
// // // // //     paddingHorizontal: 20,
// // // // //     paddingTop: 6,
// // // // //     paddingBottom: 10,
// // // // //   },
// // // // //   sectionLabel: {
// // // // //     fontSize: 11,
// // // // //     fontWeight: "700",
// // // // //     color: "#999",
// // // // //     letterSpacing: 0.6,
// // // // //     textTransform: "uppercase",
// // // // //   },
// // // // //   countBadge: {
// // // // //     backgroundColor: "#FCEBEB",
// // // // //     borderRadius: 10,
// // // // //     paddingHorizontal: 9,
// // // // //     paddingVertical: 2,
// // // // //     borderWidth: 0.5,
// // // // //     borderColor: "#F7C1C1",
// // // // //   },
// // // // //   countBadgeText: { fontSize: 12, fontWeight: "700", color: "#E24B4A" },
// // // // //   listScroll: { maxHeight: 200, paddingHorizontal: 20 },
// // // // //   listContent: { gap: 7, paddingBottom: 10 },
// // // // //   fieldRow: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     gap: 10,
// // // // //     padding: 10,
// // // // //     backgroundColor: "#FCEBEB",
// // // // //     borderRadius: 11,
// // // // //     borderWidth: 0.5,
// // // // //     borderColor: "#F7C1C1",
// // // // //   },
// // // // //   fieldDot: {
// // // // //     width: 20,
// // // // //     height: 20,
// // // // //     borderRadius: 10,
// // // // //     backgroundColor: "#E24B4A",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   fieldDotText: { color: "#fff", fontSize: 10, fontWeight: "800" },
// // // // //   fieldText: { flex: 1, fontSize: 13, fontWeight: "600", color: "#791F1F" },
// // // // //   langBadge: { backgroundColor: "#E6F1FB", borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
// // // // //   langBadgeText: { fontSize: 10, fontWeight: "700", color: "#185FA5" },
// // // // //   langBadgeMr: { backgroundColor: "#FAEEDA" },
// // // // //   langBadgeTextMr: { color: "#854F0B" },
// // // // //   btnRow: { flexDirection: "row", gap: 10, padding: 20 },
// // // // //   dismissBtn: {
// // // // //     flex: 1,
// // // // //     height: 45,
// // // // //     borderRadius: 12,
// // // // //     backgroundColor: "#f5f5f5",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   dismissText: { fontSize: 14, fontWeight: "600", color: "#777" },
// // // // //   fixBtn: {
// // // // //     flex: 2,
// // // // //     height: 45,
// // // // //     borderRadius: 12,
// // // // //     backgroundColor: "#f97316",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   fixText: { fontSize: 14, fontWeight: "700", color: "#fff" },
// // // // // };







// // // // // // Step1.jsx - FIXED VERSION WITH WORKING KEYBOARD SCROLL + FULL PHOTO DISPLAY
// // // // // import React, { useState, useRef } from "react";
// // // // // import {
// // // // //   View, Text, ScrollView, TouchableOpacity,
// // // // //   TextInput, Image, Modal, ActivityIndicator, Keyboard,
// // // // //   KeyboardAvoidingView, Platform, FlatList,
// // // // // } from "react-native";
// // // // // import * as ImagePicker from "expo-image-picker";
// // // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // // const REQUIRED_FIELDS = [
// // // // //   { key: "firstName",     label: "First Name",           lang: "EN" },
// // // // //   { key: "middleName",    label: "Middle Name",          lang: "EN" },
// // // // //   { key: "lastName",      label: "Last Name / Surname",  lang: "EN" },
// // // // //   { key: "firstNameMr",   label: "पहिले नाव",             lang: "MR" },
// // // // //   { key: "middleNameMr",  label: "वडिलांचे नाव",          lang: "MR" },
// // // // //   { key: "lastNameMr",    label: "शेवटचे नाव / आडनाव",    lang: "MR" },
// // // // //   { key: "birthName",     label: "जन्म नाव",              lang: "MR" },
// // // // //   { key: "birthNameEn",   label: "Birth Name",           lang: "EN" },
// // // // //   { key: "candidateType", label: "Candidate Type",       lang: "EN" },
// // // // //   { key: "photo",         label: "Photo",                lang: null  },
// // // // // ];

// // // // // const candidateTypeOptions = [
// // // // //   { label: "वधू (Bride)", value: "वधू" },
// // // // //   { label: "वर (Groom)", value: "वर" },
// // // // // ];

// // // // // // Helper to decode HTML entities returned by Google
// // // // // const decodeHTMLEntities = (text) => {
// // // // //   const entities = {
// // // // //     "&amp;": "&",
// // // // //     "&lt;": "<",
// // // // //     "&gt;": ">",
// // // // //     "&quot;": '"',
// // // // //     "&#39;": "'",
// // // // //   };
// // // // //   return text.replace(/&[^;]+;/g, (entity) => entities[entity] || entity);
// // // // // };

// // // // // // Optimized Google Cloud Translation Service
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
// // // // //     if (!response.ok) {
// // // // //       console.error("Translation API error:", data.error?.message);
// // // // //       return text;
// // // // //     }

// // // // //     const translatedText = data.data?.translations?.[0]?.translatedText || text;
// // // // //     return decodeHTMLEntities(translatedText);
// // // // //   } catch (error) {
// // // // //     console.error("Translation error:", error);
// // // // //     return text;
// // // // //   }
// // // // // };

// // // // // export default function Step1({ data, setData, onNext }) {
// // // // //   const [errorVisible, setErrorVisible] = useState(false);
// // // // //   const [missingFields, setMissingFields] = useState([]);
// // // // //   const [showCandidatePicker, setShowCandidatePicker] = useState(false);
// // // // //   const [highlightErrors, setHighlightErrors] = useState(false);
// // // // //   const [translatingFields, setTranslatingFields] = useState({});

// // // // //   // Refs for keyboard and scroll handling
// // // // //   const typingTimeoutRef = useRef(null);
// // // // //   const scrollViewRef = useRef(null);

// // // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// // // // //   const setEnglish = (key) => (val) => {
// // // // //     const filtered = val.replace(/[^\x00-\x7F]/g, "");
// // // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // // //   };

// // // // //   // Proper Marathi setter with Debounced Auto-Translation
// // // // //   const setMarathi = (key) => (val) => {
// // // // //     // 1. Immediately update UI with whatever user is typing
// // // // //     setData((p) => ({ ...p, [key]: val }));

// // // // //     // 2. Clear any existing timer
// // // // //     if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

// // // // //     // 3. Check for English characters to trigger translation
// // // // //     const englishChars = val.match(/[a-zA-Z]/g);

// // // // //     if (englishChars && englishChars.length > 0) {
// // // // //       const englishText = val.replace(/[^\x00-\x7F\s]/g, "").trim();

// // // // //       if (englishText.length > 1) {
// // // // //         // Set loading state for this specific field
// // // // //         setTranslatingFields((prev) => ({ ...prev, [key]: true }));

// // // // //         // Start debounce timer (800ms)
// // // // //         typingTimeoutRef.current = setTimeout(async () => {
// // // // //           try {
// // // // //             const translated = await translateText(englishText, "mr");
// // // // //             setData((p) => ({ ...p, [key]: translated }));
// // // // //           } catch (error) {
// // // // //             console.error("Auto-translate failed:", error);
// // // // //           } finally {
// // // // //             setTranslatingFields((prev) => ({ ...prev, [key]: false }));
// // // // //           }
// // // // //         }, 800);
// // // // //       }
// // // // //     } else {
// // // // //       // Pure Marathi input, filter out non-Marathi characters
// // // // //       const filtered = val.replace(/[^\u0900-\u097F\s]/g, "");
// // // // //       setData((p) => ({ ...p, [key]: filtered }));
// // // // //     }
// // // // //   };

// // // // //   const pickImage = async () => {
// // // // //     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // // //     if (permissionResult.granted === false) {
// // // // //       setMissingFields([{ label: "Permission Required: Allow photo access.", lang: null }]);
// // // // //       setErrorVisible(true);
// // // // //       return;
// // // // //     }
// // // // //     const result = await ImagePicker.launchImageLibraryAsync({
// // // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // // //       allowsEditing: true,
// // // // //       aspect: [3.5, 4.5],
// // // // //       quality: 0.8,
// // // // //     });
// // // // //     if (!result.canceled) {
// // // // //       set("photo")(result.assets[0].uri);
// // // // //     }
// // // // //   };

// // // // //   const handleNext = () => {
// // // // //     const missing = REQUIRED_FIELDS.filter((f) => !data[f.key] || data[f.key] === "");
// // // // //     if (missing.length > 0) {
// // // // //       setMissingFields(missing);
// // // // //       setErrorVisible(true);
// // // // //       setHighlightErrors(true);
// // // // //     } else {
// // // // //       setHighlightErrors(false);
// // // // //       onNext && onNext();
// // // // //     }
// // // // //   };

// // // // //   // Better scroll handler - scroll to end with offset
// // // // //   const handleMarathiNoteFocus = () => {
// // // // //     setTimeout(() => {
// // // // //       scrollViewRef.current?.scrollToEnd({ animated: true });
// // // // //     }, 300);
// // // // //   };

// // // // //   const isFieldMissing = (key) => highlightErrors && missingFields.some((f) => f.key === key);
// // // // //   const isFieldTranslating = (key) => translatingFields[key] || false;

// // // // //   return (
// // // // //     <>
// // // // //       {/* ── VALIDATION POPUP ── */}
// // // // //       <Modal transparent visible={errorVisible} animationType="fade">
// // // // //         <View style={popStyles.overlay}>
// // // // //           <View style={popStyles.card}>
// // // // //             <View style={popStyles.banner}>
// // // // //               <View style={popStyles.bannerRow}>
// // // // //                 <View style={popStyles.bannerIcon}>
// // // // //                   <View style={popStyles.warningTriangle}>
// // // // //                     <Text style={popStyles.warningExclaim}>!</Text>
// // // // //                   </View>
// // // // //                 </View>
// // // // //                 <View style={{ flex: 1 }}>
// // // // //                   <Text style={popStyles.bannerTitle}>Required fields missing</Text>
// // // // //                   <Text style={popStyles.bannerSub}>Fill in all fields to continue</Text>
// // // // //                 </View>
// // // // //                 <TouchableOpacity style={popStyles.closeBtn} onPress={() => setErrorVisible(false)}>
// // // // //                   <Text style={popStyles.closeBtnText}>✕</Text>
// // // // //                 </TouchableOpacity>
// // // // //               </View>
// // // // //               <View style={popStyles.bannerCurve} />
// // // // //             </View>

// // // // //             <View style={popStyles.countRow}>
// // // // //               <Text style={popStyles.sectionLabel}>Incomplete fields</Text>
// // // // //               <View style={popStyles.countBadge}>
// // // // //                 <Text style={popStyles.countBadgeText}>{missingFields.length}</Text>
// // // // //               </View>
// // // // //             </View>

// // // // //             <ScrollView
// // // // //               style={popStyles.listScroll}
// // // // //               contentContainerStyle={popStyles.listContent}
// // // // //               showsVerticalScrollIndicator={false}
// // // // //             >
// // // // //               {missingFields.map((f, i) => (
// // // // //                 <View key={i} style={popStyles.fieldRow}>
// // // // //                   <View style={popStyles.fieldDot}>
// // // // //                     <Text style={popStyles.fieldDotText}>✕</Text>
// // // // //                   </View>
// // // // //                   <Text style={popStyles.fieldText} numberOfLines={1}>{f.label}</Text>
// // // // //                   <View style={[popStyles.langBadge, f.lang === "MR" && popStyles.langBadgeMr]}>
// // // // //                     <Text style={[popStyles.langBadgeText, f.lang === "MR" && popStyles.langBadgeTextMr]}>
// // // // //                       {f.lang || "Req"}
// // // // //                     </Text>
// // // // //                   </View>
// // // // //                 </View>
// // // // //               ))}
// // // // //             </ScrollView>

// // // // //             <View style={popStyles.btnRow}>
// // // // //               <TouchableOpacity style={popStyles.dismissBtn} onPress={() => setErrorVisible(false)}>
// // // // //                 <Text style={popStyles.dismissText}>Dismiss</Text>
// // // // //               </TouchableOpacity>
// // // // //               <TouchableOpacity style={popStyles.fixBtn} onPress={() => setErrorVisible(false)}>
// // // // //                 <Text style={popStyles.fixText}>Fix fields →</Text>
// // // // //               </TouchableOpacity>
// // // // //             </View>
// // // // //           </View>
// // // // //         </View>
// // // // //       </Modal>

// // // // //       {/* ── CANDIDATE DROPDOWN MODAL ── */}
// // // // //       <Modal transparent visible={showCandidatePicker} animationType="fade">
// // // // //         <TouchableOpacity
// // // // //           style={dropdownStyles.overlay}
// // // // //           activeOpacity={1}
// // // // //           onPressOut={() => setShowCandidatePicker(false)}
// // // // //         >
// // // // //           <View style={dropdownStyles.container}>
// // // // //             <View style={dropdownStyles.header}>
// // // // //               <Text style={dropdownStyles.headerTitle}>Select Candidate Type</Text>
// // // // //             </View>
// // // // //             {candidateTypeOptions.map((option) => (
// // // // //               <TouchableOpacity
// // // // //                 key={option.value}
// // // // //                 style={[
// // // // //                   dropdownStyles.option,
// // // // //                   data.candidateType === option.value && dropdownStyles.optionSelected,
// // // // //                 ]}
// // // // //                 onPress={() => {
// // // // //                   set("candidateType")(option.value);
// // // // //                   setShowCandidatePicker(false);
// // // // //                 }}
// // // // //               >
// // // // //                 <Text
// // // // //                   style={[
// // // // //                     dropdownStyles.optionText,
// // // // //                     data.candidateType === option.value && dropdownStyles.optionTextSelected,
// // // // //                   ]}
// // // // //                 >
// // // // //                   {option.label}
// // // // //                 </Text>
// // // // //                 {data.candidateType === option.value && (
// // // // //                   <Text style={dropdownStyles.checkMark}>✓</Text>
// // // // //                 )}
// // // // //               </TouchableOpacity>
// // // // //             ))}
// // // // //           </View>
// // // // //         </TouchableOpacity>
// // // // //       </Modal>

// // // // //       {/* ── FORM WITH KEYBOARD SUPPORT ── */}
// // // // //       <KeyboardAvoidingView
// // // // //         behavior={Platform.OS === "ios" ? "padding" : "height"}
// // // // //         style={{ flex: 1 }}
// // // // //         keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
// // // // //       >
// // // // //         <ScrollView
// // // // //           ref={scrollViewRef}
// // // // //           showsVerticalScrollIndicator={false}
// // // // //           contentContainerStyle={{ paddingBottom: 40 }}
// // // // //           keyboardShouldPersistTaps="handled"
// // // // //           scrollEventThrottle={16}
// // // // //         >
// // // // //           <SectionHeader title="Basic Information" />

// // // // //           {/* English Name Row */}
// // // // //           <View style={styles.row3}>
// // // // //             <View style={{ flex: 1, marginRight: 4 }}>
// // // // //               <Field
// // // // //                 label="First Name"
// // // // //                 required
// // // // //                 value={data.firstName}
// // // // //                 onChangeText={setEnglish("firstName")}
// // // // //                 placeholder="English"
// // // // //                 inputStyle={isFieldMissing("firstName") && fieldErrStyle}
// // // // //               />
// // // // //             </View>
// // // // //             <View style={{ flex: 1, marginHorizontal: 2 }}>
// // // // //               <Field
// // // // //                 label="Middle Name"
// // // // //                 required
// // // // //                 value={data.middleName}
// // // // //                 onChangeText={setEnglish("middleName")}
// // // // //                 placeholder="English"
// // // // //                 inputStyle={isFieldMissing("middleName") && fieldErrStyle}
// // // // //               />
// // // // //             </View>
// // // // //             <View style={{ flex: 1, marginLeft: 4 }}>
// // // // //               <Field
// // // // //                 label="Last Name"
// // // // //                 required
// // // // //                 value={data.lastName}
// // // // //                 onChangeText={setEnglish("lastName")}
// // // // //                 placeholder="English"
// // // // //                 inputStyle={isFieldMissing("lastName") && fieldErrStyle}
// // // // //               />
// // // // //             </View>
// // // // //           </View>

// // // // //           {/* Marathi Name Row */}
// // // // //           <View style={styles.row3}>
// // // // //             {["firstNameMr", "middleNameMr", "lastNameMr"].map((key, index) => (
// // // // //               <View
// // // // //                 key={key}
// // // // //                 style={{
// // // // //                   flex: 1,
// // // // //                   marginHorizontal: index === 1 ? 2 : 0,
// // // // //                   marginRight: index === 0 ? 4 : 0,
// // // // //                   marginLeft: index === 2 ? 4 : 0,
// // // // //                   position: "relative",
// // // // //                 }}
// // // // //               >
// // // // //                 <Field
// // // // //                   label={
// // // // //                     key === "firstNameMr"
// // // // //                       ? "पहिले नाव"
// // // // //                       : key === "middleNameMr"
// // // // //                       ? "वडिलांचे नाव"
// // // // //                       : "आडनाव"
// // // // //                   }
// // // // //                   required
// // // // //                   value={data[key]}
// // // // //                   onChangeText={setMarathi(key)}
// // // // //                   placeholder="मराठी"
// // // // //                   inputStyle={[
// // // // //                     isFieldMissing(key) && fieldErrStyle,
// // // // //                     isFieldTranslating(key) && { opacity: 0.6 },
// // // // //                   ]}
// // // // //                 />
// // // // //                 {isFieldTranslating(key) && (
// // // // //                   <View style={translatingIndicator}>
// // // // //                     <ActivityIndicator size="small" color="#f97316" />
// // // // //                   </View>
// // // // //                 )}
// // // // //               </View>
// // // // //             ))}
// // // // //           </View>

// // // // //           {/* Birth Name Row */}
// // // // //           <View style={styles.row2}>
// // // // //             <View style={{ flex: 1, marginRight: 8, position: "relative" }}>
// // // // //               <Field
// // // // //                 label="जन्म नाव (मराठी)"
// // // // //                 required
// // // // //                 value={data.birthName}
// // // // //                 onChangeText={setMarathi("birthName")}
// // // // //                 placeholder="मराठी"
// // // // //                 inputStyle={[
// // // // //                   isFieldMissing("birthName") && fieldErrStyle,
// // // // //                   isFieldTranslating("birthName") && { opacity: 0.6 },
// // // // //                 ]}
// // // // //               />
// // // // //               {isFieldTranslating("birthName") && (
// // // // //                 <View style={translatingIndicator}>
// // // // //                   <ActivityIndicator size="small" color="#f97316" />
// // // // //                 </View>
// // // // //               )}
// // // // //             </View>
// // // // //             <View style={{ flex: 1, marginLeft: 8 }}>
// // // // //               <Field
// // // // //                 label="Birth Name (Eng)"
// // // // //                 required
// // // // //                 value={data.birthNameEn}
// // // // //                 onChangeText={setEnglish("birthNameEn")}
// // // // //                 placeholder="English"
// // // // //                 inputStyle={isFieldMissing("birthNameEn") && fieldErrStyle}
// // // // //               />
// // // // //             </View>
// // // // //           </View>

// // // // //           {/* Candidate Type & Photo */}
// // // // //           <View style={styles.row2}>
// // // // //             {/* Candidate Type */}
// // // // //             <View style={{ flex: 1, marginRight: 8 }}>
// // // // //               <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // //                 Candidate Type <Text style={{ color: "red" }}>*</Text>
// // // // //               </Text>
// // // // //               <TouchableOpacity
// // // // //                 style={[
// // // // //                   dropdownStyles.pickerBtn,
// // // // //                   isFieldMissing("candidateType") && { borderColor: "#E24B4A", borderWidth: 1.5 },
// // // // //                 ]}
// // // // //                 onPress={() => setShowCandidatePicker(true)}
// // // // //               >
// // // // //                 <Text style={[dropdownStyles.pickerBtnText, !data.candidateType && { color: "#bbb" }]}>
// // // // //                   {data.candidateType || "Select"}
// // // // //                 </Text>
// // // // //                 <Text style={dropdownStyles.pickerArrow}>▼</Text>
// // // // //               </TouchableOpacity>
// // // // //             </View>

// // // // //             {/* ── PHOTO (user-friendly full portrait display) ── */}
// // // // //             <View style={{ flex: 1, marginLeft: 8 }}>
// // // // //               <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // //                 Photo <Text style={{ color: "red" }}>*</Text>
// // // // //               </Text>

// // // // //               {data.photo ? (
// // // // //                 /* ── PHOTO PREVIEW CARD ── */
// // // // //                 <View style={photoStyles.previewCard}>
// // // // //                   {/* Full portrait image */}
// // // // //                   <Image
// // // // //                     source={{ uri: data.photo }}
// // // // //                     style={photoStyles.previewImage}
// // // // //                     resizeMode="cover"
// // // // //                   />
// // // // //                   {/* Overlay gradient at bottom */}
// // // // //                   <View style={photoStyles.previewOverlay}>
// // // // //                     <View style={photoStyles.previewOverlayRow}>
// // // // //                       <View style={photoStyles.previewCheckBadge}>
// // // // //                         <Text style={photoStyles.previewCheckText}>✓</Text>
// // // // //                       </View>
// // // // //                       <Text style={photoStyles.previewLabel}>Photo Added</Text>
// // // // //                     </View>
// // // // //                   </View>
// // // // //                   {/* Change button floating top-right */}
// // // // //                   <TouchableOpacity style={photoStyles.changeBtn} onPress={pickImage}>
// // // // //                     <Text style={photoStyles.changeBtnText}>✎</Text>
// // // // //                   </TouchableOpacity>
// // // // //                 </View>
// // // // //               ) : (
// // // // //                 /* ── UPLOAD PLACEHOLDER ── */
// // // // //                 <TouchableOpacity
// // // // //                   style={[
// // // // //                     photoStyles.uploadBox,
// // // // //                     isFieldMissing("photo") && photoStyles.uploadBoxError,
// // // // //                   ]}
// // // // //                   onPress={pickImage}
// // // // //                   activeOpacity={0.75}
// // // // //                 >
// // // // //                   {/* Dashed border visual */}
// // // // //                   <View style={photoStyles.uploadInner}>
// // // // //                     <View style={photoStyles.uploadIconCircle}>
// // // // //                       <Text style={photoStyles.uploadIcon}>📷</Text>
// // // // //                     </View>
// // // // //                     <Text style={photoStyles.uploadTitle}>Upload Photo</Text>
// // // // //                     <Text style={photoStyles.uploadSub}>Tap to choose</Text>
// // // // //                     <View style={photoStyles.uploadBadge}>
// // // // //                       <Text style={photoStyles.uploadBadgeText}>3.5 × 4.5</Text>
// // // // //                     </View>
// // // // //                   </View>
// // // // //                 </TouchableOpacity>
// // // // //               )}
// // // // //             </View>
// // // // //           </View>

// // // // //           {/* Optional Marathi Note */}
// // // // //           <View style={[styles.marathiPadWrap, { marginTop: 15, position: "relative", minHeight: 180 }]}>
// // // // //             <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // // //               इतर टीप (मराठी)
// // // // //             </Text>
// // // // //             <TextInput
// // // // //               style={[
// // // // //                 styles.marathiPad,
// // // // //                 { height: 80 },
// // // // //                 isFieldTranslating("marathiNote") && { opacity: 0.6 },
// // // // //               ]}
// // // // //               multiline
// // // // //               placeholder="English type करा (auto-translate)..."
// // // // //               placeholderTextColor="#bbb"
// // // // //               value={data.marathiNote}
// // // // //               onChangeText={setMarathi("marathiNote")}
// // // // //               onFocus={handleMarathiNoteFocus}
// // // // //             />
// // // // //             {isFieldTranslating("marathiNote") && (
// // // // //               <View style={translatingIndicatorLarge}>
// // // // //                 <ActivityIndicator size="small" color="#f97316" />
// // // // //               </View>
// // // // //             )}
// // // // //           </View>


// // // // //         </ScrollView>
// // // // //       </KeyboardAvoidingView>
// // // // //     </>
// // // // //   );
// // // // // }

// // // // // // ─── Styles ──────────────────────────────────────────────────────────────────

// // // // // const fieldErrStyle = { borderWidth: 1.5, borderColor: "#E24B4A", backgroundColor: "#fff" };

// // // // // const photoStyles = {
// // // // //   /* ── Upload placeholder ── */
// // // // //   uploadBox: {
// // // // //     borderRadius: 14,
// // // // //     borderWidth: 2,
// // // // //     borderColor: "#e0e0e0",
// // // // //     borderStyle: "dashed",
// // // // //     backgroundColor: "#fafafa",
// // // // //     overflow: "hidden",
// // // // //     aspectRatio: 3.5 / 4.5,
// // // // //   },
// // // // //   uploadBoxError: {
// // // // //     borderColor: "#E24B4A",
// // // // //     backgroundColor: "#fff8f8",
// // // // //   },
// // // // //   uploadInner: {
// // // // //     flex: 1,
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //     padding: 12,
// // // // //     gap: 6,
// // // // //   },
// // // // //   uploadIconCircle: {
// // // // //     width: 48,
// // // // //     height: 48,
// // // // //     borderRadius: 24,
// // // // //     backgroundColor: "#fff3e8",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //     marginBottom: 4,
// // // // //     borderWidth: 1.5,
// // // // //     borderColor: "#fdd8b8",
// // // // //   },
// // // // //   uploadIcon: { fontSize: 22 },
// // // // //   uploadTitle: { fontSize: 13, fontWeight: "700", color: "#333" },
// // // // //   uploadSub: { fontSize: 11, color: "#aaa", marginTop: -2 },
// // // // //   uploadBadge: {
// // // // //     marginTop: 6,
// // // // //     backgroundColor: "#f97316",
// // // // //     borderRadius: 8,
// // // // //     paddingHorizontal: 10,
// // // // //     paddingVertical: 3,
// // // // //   },
// // // // //   uploadBadgeText: { fontSize: 10, fontWeight: "700", color: "#fff", letterSpacing: 0.5 },

// // // // //   /* ── Preview card ── */
// // // // //   previewCard: {
// // // // //     borderRadius: 14,
// // // // //     overflow: "hidden",
// // // // //     aspectRatio: 3.5 / 4.5,
// // // // //     position: "relative",
// // // // //     elevation: 4,
// // // // //     shadowColor: "#000",
// // // // //     shadowOffset: { width: 0, height: 2 },
// // // // //     shadowOpacity: 0.15,
// // // // //     shadowRadius: 6,
// // // // //   },
// // // // //   previewImage: {
// // // // //     width: "100%",
// // // // //     height: "100%",
// // // // //   },
// // // // //   /* Dark gradient bar at bottom */
// // // // //   previewOverlay: {
// // // // //     position: "absolute",
// // // // //     bottom: 0,
// // // // //     left: 0,
// // // // //     right: 0,
// // // // //     paddingVertical: 8,
// // // // //     paddingHorizontal: 10,
// // // // //     backgroundColor: "rgba(0,0,0,0.45)",
// // // // //   },
// // // // //   previewOverlayRow: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     gap: 6,
// // // // //   },
// // // // //   previewCheckBadge: {
// // // // //     width: 18,
// // // // //     height: 18,
// // // // //     borderRadius: 9,
// // // // //     backgroundColor: "#22c55e",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   previewCheckText: { color: "#fff", fontSize: 10, fontWeight: "800" },
// // // // //   previewLabel: { fontSize: 11, fontWeight: "600", color: "#fff" },

// // // // //   /* Floating edit button top-right */
// // // // //   changeBtn: {
// // // // //     position: "absolute",
// // // // //     top: 8,
// // // // //     right: 8,
// // // // //     width: 30,
// // // // //     height: 30,
// // // // //     borderRadius: 15,
// // // // //     backgroundColor: "rgba(255,255,255,0.9)",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //     elevation: 3,
// // // // //     shadowColor: "#000",
// // // // //     shadowOffset: { width: 0, height: 1 },
// // // // //     shadowOpacity: 0.2,
// // // // //     shadowRadius: 3,
// // // // //   },
// // // // //   changeBtnText: { fontSize: 14, color: "#f97316" },
// // // // // };

// // // // // const translatingIndicator = { position: "absolute", right: 10, top: "55%" };
// // // // // const translatingIndicatorLarge = { position: "absolute", right: 10, top: 35 };

// // // // // const dropdownStyles = {
// // // // //   overlay: {
// // // // //     flex: 1,
// // // // //     backgroundColor: "rgba(0,0,0,0.4)",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     padding: 30,
// // // // //   },
// // // // //   container: {
// // // // //     backgroundColor: "#fff",
// // // // //     borderRadius: 16,
// // // // //     width: "100%",
// // // // //     maxWidth: 300,
// // // // //     overflow: "hidden",
// // // // //     elevation: 8,
// // // // //   },
// // // // //   header: {
// // // // //     paddingVertical: 14,
// // // // //     paddingHorizontal: 16,
// // // // //     borderBottomWidth: 1,
// // // // //     borderBottomColor: "#eee",
// // // // //     backgroundColor: "#fafafa",
// // // // //   },
// // // // //   headerTitle: { fontSize: 14, fontWeight: "700", color: "#333" },
// // // // //   option: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "space-between",
// // // // //     paddingVertical: 14,
// // // // //     paddingHorizontal: 16,
// // // // //     borderBottomWidth: 0.5,
// // // // //     borderBottomColor: "#f0f0f0",
// // // // //   },
// // // // //   optionSelected: { backgroundColor: "#FFF3E8" },
// // // // //   optionText: { fontSize: 15, color: "#333" },
// // // // //   optionTextSelected: { fontWeight: "600", color: "#f97316" },
// // // // //   checkMark: { fontSize: 16, color: "#f97316", fontWeight: "800" },
// // // // //   pickerBtn: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "space-between",
// // // // //     backgroundColor: "#f8f9fa",
// // // // //     borderRadius: 10,
// // // // //     borderWidth: 1,
// // // // //     borderColor: "#e0e0e0",
// // // // //     paddingHorizontal: 14,
// // // // //     height: 50,
// // // // //   },
// // // // //   pickerBtnText: { fontSize: 14, color: "#333" },
// // // // //   pickerArrow: { fontSize: 12, color: "#888" },
// // // // // };

// // // // // const popStyles = {
// // // // //   overlay: {
// // // // //     flex: 1,
// // // // //     backgroundColor: "rgba(0,0,0,0.55)",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     padding: 24,
// // // // //   },
// // // // //   card: {
// // // // //     backgroundColor: "#fff",
// // // // //     borderRadius: 24,
// // // // //     width: "100%",
// // // // //     maxWidth: 340,
// // // // //     overflow: "hidden",
// // // // //     elevation: 12,
// // // // //   },
// // // // //   banner: {
// // // // //     backgroundColor: "#E24B4A",
// // // // //     paddingHorizontal: 20,
// // // // //     paddingTop: 22,
// // // // //     paddingBottom: 28,
// // // // //     position: "relative",
// // // // //   },
// // // // //   bannerRow: { flexDirection: "row", alignItems: "center", gap: 14 },
// // // // //   bannerIcon: {
// // // // //     width: 46,
// // // // //     height: 46,
// // // // //     borderRadius: 23,
// // // // //     backgroundColor: "rgba(255,255,255,0.22)",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   warningTriangle: {
// // // // //     width: 26,
// // // // //     height: 26,
// // // // //     borderRadius: 6,
// // // // //     backgroundColor: "rgba(255,255,255,0.3)",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   warningExclaim: { color: "#fff", fontSize: 16, fontWeight: "700" },
// // // // //   bannerTitle: { fontSize: 16, fontWeight: "700", color: "#fff" },
// // // // //   bannerSub: { fontSize: 12, color: "rgba(255,255,255,0.78)", marginTop: 3 },
// // // // //   closeBtn: {
// // // // //     width: 30,
// // // // //     height: 30,
// // // // //     borderRadius: 15,
// // // // //     backgroundColor: "rgba(255,255,255,0.2)",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   closeBtnText: { color: "#fff", fontSize: 13, fontWeight: "700" },
// // // // //   bannerCurve: {
// // // // //     position: "absolute",
// // // // //     bottom: 0,
// // // // //     left: 0,
// // // // //     right: 0,
// // // // //     height: 18,
// // // // //     backgroundColor: "#fff",
// // // // //     borderTopLeftRadius: 18,
// // // // //     borderTopRightRadius: 18,
// // // // //   },
// // // // //   countRow: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "space-between",
// // // // //     paddingHorizontal: 20,
// // // // //     paddingTop: 6,
// // // // //     paddingBottom: 10,
// // // // //   },
// // // // //   sectionLabel: {
// // // // //     fontSize: 11,
// // // // //     fontWeight: "700",
// // // // //     color: "#999",
// // // // //     letterSpacing: 0.6,
// // // // //     textTransform: "uppercase",
// // // // //   },
// // // // //   countBadge: {
// // // // //     backgroundColor: "#FCEBEB",
// // // // //     borderRadius: 10,
// // // // //     paddingHorizontal: 9,
// // // // //     paddingVertical: 2,
// // // // //     borderWidth: 0.5,
// // // // //     borderColor: "#F7C1C1",
// // // // //   },
// // // // //   countBadgeText: { fontSize: 12, fontWeight: "700", color: "#E24B4A" },
// // // // //   listScroll: { maxHeight: 200, paddingHorizontal: 20 },
// // // // //   listContent: { gap: 7, paddingBottom: 10 },
// // // // //   fieldRow: {
// // // // //     flexDirection: "row",
// // // // //     alignItems: "center",
// // // // //     gap: 10,
// // // // //     padding: 10,
// // // // //     backgroundColor: "#FCEBEB",
// // // // //     borderRadius: 11,
// // // // //     borderWidth: 0.5,
// // // // //     borderColor: "#F7C1C1",
// // // // //   },
// // // // //   fieldDot: {
// // // // //     width: 20,
// // // // //     height: 20,
// // // // //     borderRadius: 10,
// // // // //     backgroundColor: "#E24B4A",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   fieldDotText: { color: "#fff", fontSize: 10, fontWeight: "800" },
// // // // //   fieldText: { flex: 1, fontSize: 13, fontWeight: "600", color: "#791F1F" },
// // // // //   langBadge: { backgroundColor: "#E6F1FB", borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
// // // // //   langBadgeText: { fontSize: 10, fontWeight: "700", color: "#185FA5" },
// // // // //   langBadgeMr: { backgroundColor: "#FAEEDA" },
// // // // //   langBadgeTextMr: { color: "#854F0B" },
// // // // //   btnRow: { flexDirection: "row", gap: 10, padding: 20 },
// // // // //   dismissBtn: {
// // // // //     flex: 1,
// // // // //     height: 45,
// // // // //     borderRadius: 12,
// // // // //     backgroundColor: "#f5f5f5",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   dismissText: { fontSize: 14, fontWeight: "600", color: "#777" },
// // // // //   fixBtn: {
// // // // //     flex: 2,
// // // // //     height: 45,
// // // // //     borderRadius: 12,
// // // // //     backgroundColor: "#f97316",
// // // // //     alignItems: "center",
// // // // //     justifyContent: "center",
// // // // //   },
// // // // //   fixText: { fontSize: 14, fontWeight: "700", color: "#fff" },
// // // // // };













// // // // // new
// // // // // Step1.jsx - FIXED VERSION WITH INCREASED BOTTOM SCROLL PADDING
// // // // import React, { useState, useRef } from "react";
// // // // import {
// // // //   View, Text, ScrollView, TouchableOpacity,
// // // //   TextInput, Image, Modal, ActivityIndicator, Keyboard,
// // // //   KeyboardAvoidingView, Platform, FlatList,
// // // // } from "react-native";
// // // // import * as ImagePicker from "expo-image-picker";
// // // // import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

// // // // const REQUIRED_FIELDS = [
// // // //   { key: "firstName",     label: "First Name",           lang: "EN" },
// // // //   { key: "middleName",    label: "Middle Name",          lang: "EN" },
// // // //   { key: "lastName",      label: "Last Name / Surname",  lang: "EN" },
// // // //   { key: "firstNameMr",   label: "पहिले नाव",             lang: "MR" },
// // // //   { key: "middleNameMr",  label: "वडिलांचे नाव",          lang: "MR" },
// // // //   { key: "lastNameMr",    label: "शेवटचे नाव / आडनाव",    lang: "MR" },
// // // //   { key: "birthName",     label: "जन्म नाव",              lang: "MR" },
// // // //   { key: "birthNameEn",   label: "Birth Name",           lang: "EN" },
// // // //   { key: "candidateType", label: "Candidate Type",       lang: "EN" },
// // // //   { key: "photo",         label: "Photo",                lang: null  },
// // // // ];

// // // // const candidateTypeOptions = [
// // // //   { label: "वधू (Bride)", value: "वधू" },
// // // //   { label: "वर (Groom)", value: "वर" },
// // // // ];

// // // // // Helper to decode HTML entities returned by Google
// // // // const decodeHTMLEntities = (text) => {
// // // //   const entities = {
// // // //     "&amp;": "&",
// // // //     "&lt;": "<",
// // // //     "&gt;": ">",
// // // //     "&quot;": '"',
// // // //     "&#39;": "'",
// // // //   };
// // // //   return text.replace(/&[^;]+;/g, (entity) => entities[entity] || entity);
// // // // };

// // // // // Optimized Google Cloud Translation Service
// // // // const translateText = async (text, targetLanguage = "mr") => {
// // // //   if (!text || text.trim().length === 0) return "";

// // // //   const API_KEY = "AIzaSyDaU2e1o8NbVbgh9I2p14EDekdP3ZvYyW4";

// // // //   try {
// // // //     const response = await fetch(
// // // //       `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
// // // //       {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({
// // // //           q: text,
// // // //           target: targetLanguage,
// // // //           source: "en",
// // // //           format: "text",
// // // //         }),
// // // //       }
// // // //     );

// // // //     const data = await response.json();
// // // //     if (!response.ok) {
// // // //       console.error("Translation API error:", data.error?.message);
// // // //       return text;
// // // //     }

// // // //     const translatedText = data.data?.translations?.[0]?.translatedText || text;
// // // //     return decodeHTMLEntities(translatedText);
// // // //   } catch (error) {
// // // //     console.error("Translation error:", error);
// // // //     return text;
// // // //   }
// // // // };

// // // // export default function Step1({ data, setData, onNext }) {
// // // //   const [errorVisible, setErrorVisible] = useState(false);
// // // //   const [missingFields, setMissingFields] = useState([]);
// // // //   const [showCandidatePicker, setShowCandidatePicker] = useState(false);
// // // //   const [highlightErrors, setHighlightErrors] = useState(false);
// // // //   const [translatingFields, setTranslatingFields] = useState({});

// // // //   // Refs for keyboard and scroll handling
// // // //   const typingTimeoutRef = useRef(null);
// // // //   const scrollViewRef = useRef(null);

// // // //   const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

// // // //   const setEnglish = (key) => (val) => {
// // // //     const filtered = val.replace(/[^\x00-\x7F]/g, "");
// // // //     setData((p) => ({ ...p, [key]: filtered }));
// // // //   };

// // // //   // Proper Marathi setter with Debounced Auto-Translation
// // // //   const setMarathi = (key) => (val) => {
// // // //     // 1. Immediately update UI with whatever user is typing
// // // //     setData((p) => ({ ...p, [key]: val }));

// // // //     // 2. Clear any existing timer
// // // //     if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

// // // //     // 3. Check for English characters to trigger translation
// // // //     const englishChars = val.match(/[a-zA-Z]/g);

// // // //     if (englishChars && englishChars.length > 0) {
// // // //       const englishText = val.replace(/[^\x00-\x7F\s]/g, "").trim();

// // // //       if (englishText.length > 1) {
// // // //         // Set loading state for this specific field
// // // //         setTranslatingFields((prev) => ({ ...prev, [key]: true }));

// // // //         // Start debounce timer (800ms)
// // // //         typingTimeoutRef.current = setTimeout(async () => {
// // // //           try {
// // // //             const translated = await translateText(englishText, "mr");
// // // //             setData((p) => ({ ...p, [key]: translated }));
// // // //           } catch (error) {
// // // //             console.error("Auto-translate failed:", error);
// // // //           } finally {
// // // //             setTranslatingFields((prev) => ({ ...prev, [key]: false }));
// // // //           }
// // // //         }, 800);
// // // //       }
// // // //     } else {
// // // //       // Pure Marathi input, filter out non-Marathi characters
// // // //       const filtered = val.replace(/[^\u0900-\u097F\s]/g, "");
// // // //       setData((p) => ({ ...p, [key]: filtered }));
// // // //     }
// // // //   };

// // // //   const pickImage = async () => {
// // // //     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
// // // //     if (permissionResult.granted === false) {
// // // //       setMissingFields([{ label: "Permission Required: Allow photo access.", lang: null }]);
// // // //       setErrorVisible(true);
// // // //       return;
// // // //     }
// // // //     const result = await ImagePicker.launchImageLibraryAsync({
// // // //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
// // // //       allowsEditing: true,
// // // //       aspect: [3.5, 4.5],
// // // //       quality: 0.8,
// // // //     });
// // // //     if (!result.canceled) {
// // // //       set("photo")(result.assets[0].uri);
// // // //     }
// // // //   };

// // // //   const handleNext = () => {
// // // //     const missing = REQUIRED_FIELDS.filter((f) => !data[f.key] || data[f.key] === "");
// // // //     if (missing.length > 0) {
// // // //       setMissingFields(missing);
// // // //       setErrorVisible(true);
// // // //       setHighlightErrors(true);
// // // //     } else {
// // // //       setHighlightErrors(false);
// // // //       onNext && onNext();
// // // //     }
// // // //   };

// // // //   // Better scroll handler - scroll to end with offset
// // // //   const handleMarathiNoteFocus = () => {
// // // //     setTimeout(() => {
// // // //       scrollViewRef.current?.scrollToEnd({ animated: true });
// // // //     }, 300);
// // // //   };

// // // //   const isFieldMissing = (key) => highlightErrors && missingFields.some((f) => f.key === key);
// // // //   const isFieldTranslating = (key) => translatingFields[key] || false;

// // // //   return (
// // // //     <>
// // // //       {/* ── VALIDATION POPUP ── */}
// // // //       <Modal transparent visible={errorVisible} animationType="fade">
// // // //         <View style={popStyles.overlay}>
// // // //           <View style={popStyles.card}>
// // // //             <View style={popStyles.banner}>
// // // //               <View style={popStyles.bannerRow}>
// // // //                 <View style={popStyles.bannerIcon}>
// // // //                   <View style={popStyles.warningTriangle}>
// // // //                     <Text style={popStyles.warningExclaim}>!</Text>
// // // //                   </View>
// // // //                 </View>
// // // //                 <View style={{ flex: 1 }}>
// // // //                   <Text style={popStyles.bannerTitle}>Required fields missing</Text>
// // // //                   <Text style={popStyles.bannerSub}>Fill in all fields to continue</Text>
// // // //                 </View>
// // // //                 <TouchableOpacity style={popStyles.closeBtn} onPress={() => setErrorVisible(false)}>
// // // //                   <Text style={popStyles.closeBtnText}>✕</Text>
// // // //                 </TouchableOpacity>
// // // //               </View>
// // // //               <View style={popStyles.bannerCurve} />
// // // //             </View>

// // // //             <View style={popStyles.countRow}>
// // // //               <Text style={popStyles.sectionLabel}>Incomplete fields</Text>
// // // //               <View style={popStyles.countBadge}>
// // // //                 <Text style={popStyles.countBadgeText}>{missingFields.length}</Text>
// // // //               </View>
// // // //             </View>

// // // //             <ScrollView
// // // //               style={popStyles.listScroll}
// // // //               contentContainerStyle={popStyles.listContent}
// // // //               showsVerticalScrollIndicator={false}
// // // //             >
// // // //               {missingFields.map((f, i) => (
// // // //                 <View key={i} style={popStyles.fieldRow}>
// // // //                   <View style={popStyles.fieldDot}>
// // // //                     <Text style={popStyles.fieldDotText}>✕</Text>
// // // //                   </View>
// // // //                   <Text style={popStyles.fieldText} numberOfLines={1}>{f.label}</Text>
// // // //                   <View style={[popStyles.langBadge, f.lang === "MR" && popStyles.langBadgeMr]}>
// // // //                     <Text style={[popStyles.langBadgeText, f.lang === "MR" && popStyles.langBadgeTextMr]}>
// // // //                       {f.lang || "Req"}
// // // //                     </Text>
// // // //                   </View>
// // // //                 </View>
// // // //               ))}
// // // //             </ScrollView>

// // // //             <View style={popStyles.btnRow}>
// // // //               <TouchableOpacity style={popStyles.dismissBtn} onPress={() => setErrorVisible(false)}>
// // // //                 <Text style={popStyles.dismissText}>Dismiss</Text>
// // // //               </TouchableOpacity>
// // // //               <TouchableOpacity style={popStyles.fixBtn} onPress={() => setErrorVisible(false)}>
// // // //                 <Text style={popStyles.fixText}>Fix fields →</Text>
// // // //               </TouchableOpacity>
// // // //             </View>
// // // //           </View>
// // // //         </View>
// // // //       </Modal>

// // // //       {/* ── CANDIDATE DROPDOWN MODAL ── */}
// // // //       <Modal transparent visible={showCandidatePicker} animationType="fade">
// // // //         <TouchableOpacity
// // // //           style={dropdownStyles.overlay}
// // // //           activeOpacity={1}
// // // //           onPressOut={() => setShowCandidatePicker(false)}
// // // //         >
// // // //           <View style={dropdownStyles.container}>
// // // //             <View style={dropdownStyles.header}>
// // // //               <Text style={dropdownStyles.headerTitle}>Select Candidate Type</Text>
// // // //             </View>
// // // //             {candidateTypeOptions.map((option) => (
// // // //               <TouchableOpacity
// // // //                 key={option.value}
// // // //                 style={[
// // // //                   dropdownStyles.option,
// // // //                   data.candidateType === option.value && dropdownStyles.optionSelected,
// // // //                 ]}
// // // //                 onPress={() => {
// // // //                   set("candidateType")(option.value);
// // // //                   setShowCandidatePicker(false);
// // // //                 }}
// // // //               >
// // // //                 <Text
// // // //                   style={[
// // // //                     dropdownStyles.optionText,
// // // //                     data.candidateType === option.value && dropdownStyles.optionTextSelected,
// // // //                   ]}
// // // //                 >
// // // //                   {option.label}
// // // //                 </Text>
// // // //                 {data.candidateType === option.value && (
// // // //                   <Text style={dropdownStyles.checkMark}>✓</Text>
// // // //                 )}
// // // //               </TouchableOpacity>
// // // //             ))}
// // // //           </View>
// // // //         </TouchableOpacity>
// // // //       </Modal>

// // // //       {/* ── FORM WITH KEYBOARD SUPPORT ── */}
// // // //       <KeyboardAvoidingView
// // // //         behavior={Platform.OS === "ios" ? "padding" : "height"}
// // // //         style={{ flex: 1 }}
// // // //         keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
// // // //       >
// // // //         <ScrollView
// // // //           ref={scrollViewRef}
// // // //           showsVerticalScrollIndicator={false}
// // // //           // INCREASED PADDING BOTTOM FROM 40 TO 100
// // // //           contentContainerStyle={{ paddingBottom: 100 }}
// // // //           keyboardShouldPersistTaps="handled"
// // // //           scrollEventThrottle={16}
// // // //         >
// // // //           <SectionHeader title="Basic Information" />

// // // //           {/* English Name Row */}
// // // //           <View style={styles.row3}>
// // // //             <View style={{ flex: 1, marginRight: 4 }}>
// // // //               <Field
// // // //                 label="First Name"
// // // //                 required
// // // //                 value={data.firstName}
// // // //                 onChangeText={setEnglish("firstName")}
// // // //                 placeholder="English"
// // // //                 inputStyle={isFieldMissing("firstName") && fieldErrStyle}
// // // //               />
// // // //             </View>
// // // //             <View style={{ flex: 1, marginHorizontal: 2 }}>
// // // //               <Field
// // // //                 label="Middle Name"
// // // //                 required
// // // //                 value={data.middleName}
// // // //                 onChangeText={setEnglish("middleName")}
// // // //                 placeholder="English"
// // // //                 inputStyle={isFieldMissing("middleName") && fieldErrStyle}
// // // //               />
// // // //             </View>
// // // //             <View style={{ flex: 1, marginLeft: 4 }}>
// // // //               <Field
// // // //                 label="Last Name"
// // // //                 required
// // // //                 value={data.lastName}
// // // //                 onChangeText={setEnglish("lastName")}
// // // //                 placeholder="English"
// // // //                 inputStyle={isFieldMissing("lastName") && fieldErrStyle}
// // // //               />
// // // //             </View>
// // // //           </View>

// // // //           {/* Marathi Name Row */}
// // // //           <View style={styles.row3}>
// // // //             {["firstNameMr", "middleNameMr", "lastNameMr"].map((key, index) => (
// // // //               <View
// // // //                 key={key}
// // // //                 style={{
// // // //                   flex: 1,
// // // //                   marginHorizontal: index === 1 ? 2 : 0,
// // // //                   marginRight: index === 0 ? 4 : 0,
// // // //                   marginLeft: index === 2 ? 4 : 0,
// // // //                   position: "relative",
// // // //                 }}
// // // //               >
// // // //                 <Field
// // // //                   label={
// // // //                     key === "firstNameMr"
// // // //                       ? "पहिले नाव"
// // // //                       : key === "middleNameMr"
// // // //                       ? "वडिलांचे नाव"
// // // //                       : "आडनाव"
// // // //                   }
// // // //                   required
// // // //                   value={data[key]}
// // // //                   onChangeText={setMarathi(key)}
// // // //                   placeholder="मराठी"
// // // //                   inputStyle={[
// // // //                     isFieldMissing(key) && fieldErrStyle,
// // // //                     isFieldTranslating(key) && { opacity: 0.6 },
// // // //                   ]}
// // // //                 />
// // // //                 {isFieldTranslating(key) && (
// // // //                   <View style={translatingIndicator}>
// // // //                     <ActivityIndicator size="small" color="#f97316" />
// // // //                   </View>
// // // //                 )}
// // // //               </View>
// // // //             ))}
// // // //           </View>

// // // //           {/* Birth Name Row */}
// // // //           <View style={styles.row2}>
// // // //             <View style={{ flex: 1, marginRight: 8, position: "relative" }}>
// // // //               <Field
// // // //                 label="जन्म नाव (मराठी)"
// // // //                 required
// // // //                 value={data.birthName}
// // // //                 onChangeText={setMarathi("birthName")}
// // // //                 placeholder="मराठी"
// // // //                 inputStyle={[
// // // //                   isFieldMissing("birthName") && fieldErrStyle,
// // // //                   isFieldTranslating("birthName") && { opacity: 0.6 },
// // // //                 ]}
// // // //               />
// // // //               {isFieldTranslating("birthName") && (
// // // //                 <View style={translatingIndicator}>
// // // //                   <ActivityIndicator size="small" color="#f97316" />
// // // //                 </View>
// // // //               )}
// // // //             </View>
// // // //             <View style={{ flex: 1, marginLeft: 8 }}>
// // // //               <Field
// // // //                 label="Birth Name (Eng)"
// // // //                 required
// // // //                 value={data.birthNameEn}
// // // //                 onChangeText={setEnglish("birthNameEn")}
// // // //                 placeholder="English"
// // // //                 inputStyle={isFieldMissing("birthNameEn") && fieldErrStyle}
// // // //               />
// // // //             </View>
// // // //           </View>

// // // //           {/* Candidate Type & Photo */}
// // // //           <View style={styles.row2}>
// // // //             {/* Candidate Type */}
// // // //             <View style={{ flex: 1, marginRight: 8 }}>
// // // //               <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // //                 Candidate Type <Text style={{ color: "red" }}>*</Text>
// // // //               </Text>
// // // //               <TouchableOpacity
// // // //                 style={[
// // // //                   dropdownStyles.pickerBtn,
// // // //                   isFieldMissing("candidateType") && { borderColor: "#E24B4A", borderWidth: 1.5 },
// // // //                 ]}
// // // //                 onPress={() => setShowCandidatePicker(true)}
// // // //               >
// // // //                 <Text style={[dropdownStyles.pickerBtnText, !data.candidateType && { color: "#bbb" }]}>
// // // //                   {data.candidateType || "Select"}
// // // //                 </Text>
// // // //                 <Text style={dropdownStyles.pickerArrow}>▼</Text>
// // // //               </TouchableOpacity>
// // // //             </View>

// // // //             {/* ── PHOTO (user-friendly full portrait display) ── */}
// // // //             <View style={{ flex: 1, marginLeft: 8 }}>
// // // //               <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // //                 Photo <Text style={{ color: "red" }}>*</Text>
// // // //               </Text>

// // // //               {data.photo ? (
// // // //                 /* ── PHOTO PREVIEW CARD ── */
// // // //                 <View style={photoStyles.previewCard}>
// // // //                   {/* Full portrait image */}
// // // //                   <Image
// // // //                     source={{ uri: data.photo }}
// // // //                     style={photoStyles.previewImage}
// // // //                     resizeMode="cover"
// // // //                   />
// // // //                   {/* Overlay gradient at bottom */}
// // // //                   <View style={photoStyles.previewOverlay}>
// // // //                     <View style={photoStyles.previewOverlayRow}>
// // // //                       <View style={photoStyles.previewCheckBadge}>
// // // //                         <Text style={photoStyles.previewCheckText}>✓</Text>
// // // //                       </View>
// // // //                       <Text style={photoStyles.previewLabel}>Photo Added</Text>
// // // //                     </View>
// // // //                   </View>
// // // //                   {/* Change button floating top-right */}
// // // //                   <TouchableOpacity style={photoStyles.changeBtn} onPress={pickImage}>
// // // //                     <Text style={photoStyles.changeBtnText}>✎</Text>
// // // //                   </TouchableOpacity>
// // // //                 </View>
// // // //               ) : (
// // // //                 /* ── UPLOAD PLACEHOLDER ── */
// // // //                 <TouchableOpacity
// // // //                   style={[
// // // //                     photoStyles.uploadBox,
// // // //                     isFieldMissing("photo") && photoStyles.uploadBoxError,
// // // //                   ]}
// // // //                   onPress={pickImage}
// // // //                   activeOpacity={0.75}
// // // //                 >
// // // //                   {/* Dashed border visual */}
// // // //                   <View style={photoStyles.uploadInner}>
// // // //                     <View style={photoStyles.uploadIconCircle}>
// // // //                       <Text style={photoStyles.uploadIcon}>📷</Text>
// // // //                     </View>
// // // //                     <Text style={photoStyles.uploadTitle}>Upload Photo</Text>
// // // //                     <Text style={photoStyles.uploadSub}>Tap to choose</Text>
// // // //                     <View style={photoStyles.uploadBadge}>
// // // //                       <Text style={photoStyles.uploadBadgeText}>3.5 × 4.5</Text>
// // // //                     </View>
// // // //                   </View>
// // // //                 </TouchableOpacity>
// // // //               )}
// // // //             </View>
// // // //           </View>

// // // //           {/* Optional Marathi Note */}
// // // //           <View style={[styles.marathiPadWrap, { marginTop: 15, position: "relative", minHeight: 180 }]}>
// // // //             <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
// // // //               इतर टीप (मराठी)
// // // //             </Text>
// // // //             <TextInput
// // // //               style={[
// // // //                 styles.marathiPad,
// // // //                 { height: 80 },
// // // //                 isFieldTranslating("marathiNote") && { opacity: 0.6 },
// // // //               ]}
// // // //               multiline
// // // //               placeholder="English type करा (auto-translate)..."
// // // //               placeholderTextColor="#bbb"
// // // //               value={data.marathiNote}
// // // //               onChangeText={setMarathi("marathiNote")}
// // // //               onFocus={handleMarathiNoteFocus}
// // // //             />
// // // //             {isFieldTranslating("marathiNote") && (
// // // //               <View style={translatingIndicatorLarge}>
// // // //                 <ActivityIndicator size="small" color="#f97316" />
// // // //               </View>
// // // //             )}
// // // //           </View>


// // // //         </ScrollView>
// // // //       </KeyboardAvoidingView>
// // // //     </>
// // // //   );
// // // // }

// // // // // ─── Styles ──────────────────────────────────────────────────────────────────

// // // // const fieldErrStyle = { borderWidth: 1.5, borderColor: "#E24B4A", backgroundColor: "#fff" };

// // // // const photoStyles = {
// // // //   /* ── Upload placeholder ── */
// // // //   uploadBox: {
// // // //     borderRadius: 14,
// // // //     borderWidth: 2,
// // // //     borderColor: "#e0e0e0",
// // // //     borderStyle: "dashed",
// // // //     backgroundColor: "#fafafa",
// // // //     overflow: "hidden",
// // // //     aspectRatio: 3.5 / 4.5,
// // // //   },
// // // //   uploadBoxError: {
// // // //     borderColor: "#E24B4A",
// // // //     backgroundColor: "#fff8f8",
// // // //   },
// // // //   uploadInner: {
// // // //     flex: 1,
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //     padding: 12,
// // // //     gap: 6,
// // // //   },
// // // //   uploadIconCircle: {
// // // //     width: 48,
// // // //     height: 48,
// // // //     borderRadius: 24,
// // // //     backgroundColor: "#fff3e8",
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //     marginBottom: 4,
// // // //     borderWidth: 1.5,
// // // //     borderColor: "#fdd8b8",
// // // //   },
// // // //   uploadIcon: { fontSize: 22 },
// // // //   uploadTitle: { fontSize: 13, fontWeight: "700", color: "#333" },
// // // //   uploadSub: { fontSize: 11, color: "#aaa", marginTop: -2 },
// // // //   uploadBadge: {
// // // //     marginTop: 6,
// // // //     backgroundColor: "#f97316",
// // // //     borderRadius: 8,
// // // //     paddingHorizontal: 10,
// // // //     paddingVertical: 3,
// // // //   },
// // // //   uploadBadgeText: { fontSize: 10, fontWeight: "700", color: "#fff", letterSpacing: 0.5 },

// // // //   /* ── Preview card ── */
// // // //   previewCard: {
// // // //     borderRadius: 14,
// // // //     overflow: "hidden",
// // // //     aspectRatio: 3.5 / 4.5,
// // // //     position: "relative",
// // // //     elevation: 4,
// // // //     shadowColor: "#000",
// // // //     shadowOffset: { width: 0, height: 2 },
// // // //     shadowOpacity: 0.15,
// // // //     shadowRadius: 6,
// // // //   },
// // // //   previewImage: {
// // // //     width: "100%",
// // // //     height: "100%",
// // // //   },
// // // //   /* Dark gradient bar at bottom */
// // // //   previewOverlay: {
// // // //     position: "absolute",
// // // //     bottom: 0,
// // // //     left: 0,
// // // //     right: 0,
// // // //     paddingVertical: 8,
// // // //     paddingHorizontal: 10,
// // // //     backgroundColor: "rgba(0,0,0,0.45)",
// // // //   },
// // // //   previewOverlayRow: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     gap: 6,
// // // //   },
// // // //   previewCheckBadge: {
// // // //     width: 18,
// // // //     height: 18,
// // // //     borderRadius: 9,
// // // //     backgroundColor: "#22c55e",
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //   },
// // // //   previewCheckText: { color: "#fff", fontSize: 10, fontWeight: "800" },
// // // //   previewLabel: { fontSize: 11, fontWeight: "600", color: "#fff" },

// // // //   /* Floating edit button top-right */
// // // //   changeBtn: {
// // // //     position: "absolute",
// // // //     top: 8,
// // // //     right: 8,
// // // //     width: 30,
// // // //     height: 30,
// // // //     borderRadius: 15,
// // // //     backgroundColor: "rgba(255,255,255,0.9)",
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //     elevation: 3,
// // // //     shadowColor: "#000",
// // // //     shadowOffset: { width: 0, height: 1 },
// // // //     shadowOpacity: 0.2,
// // // //     shadowRadius: 3,
// // // //   },
// // // //   changeBtnText: { fontSize: 14, color: "#f97316" },
// // // // };

// // // // const translatingIndicator = { position: "absolute", right: 10, top: "55%" };
// // // // const translatingIndicatorLarge = { position: "absolute", right: 10, top: 35 };

// // // // const dropdownStyles = {
// // // //   overlay: {
// // // //     flex: 1,
// // // //     backgroundColor: "rgba(0,0,0,0.4)",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     padding: 30,
// // // //   },
// // // //   container: {
// // // //     backgroundColor: "#fff",
// // // //     borderRadius: 16,
// // // //     width: "100%",
// // // //     maxWidth: 300,
// // // //     overflow: "hidden",
// // // //     elevation: 8,
// // // //   },
// // // //   header: {
// // // //     paddingVertical: 14,
// // // //     paddingHorizontal: 16,
// // // //     borderBottomWidth: 1,
// // // //     borderBottomColor: "#eee",
// // // //     backgroundColor: "#fafafa",
// // // //   },
// // // //   headerTitle: { fontSize: 14, fontWeight: "700", color: "#333" },
// // // //   option: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //     paddingVertical: 14,
// // // //     paddingHorizontal: 16,
// // // //     borderBottomWidth: 0.5,
// // // //     borderBottomColor: "#f0f0f0",
// // // //   },
// // // //   optionSelected: { backgroundColor: "#FFF3E8" },
// // // //   optionText: { fontSize: 15, color: "#333" },
// // // //   optionTextSelected: { fontWeight: "600", color: "#f97316" },
// // // //   checkMark: { fontSize: 16, color: "#f97316", fontWeight: "800" },
// // // //   pickerBtn: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //     backgroundColor: "#f8f9fa",
// // // //     borderRadius: 10,
// // // //     borderWidth: 1,
// // // //     borderColor: "#e0e0e0",
// // // //     paddingHorizontal: 14,
// // // //     height: 50,
// // // //   },
// // // //   pickerBtnText: { fontSize: 14, color: "#333" },
// // // //   pickerArrow: { fontSize: 12, color: "#888" },
// // // // };

// // // // const popStyles = {
// // // //   overlay: {
// // // //     flex: 1,
// // // //     backgroundColor: "rgba(0,0,0,0.55)",
// // // //     justifyContent: "center",
// // // //     alignItems: "center",
// // // //     padding: 24,
// // // //   },
// // // //   card: {
// // // //     backgroundColor: "#fff",
// // // //     borderRadius: 24,
// // // //     width: "100%",
// // // //     maxWidth: 340,
// // // //     overflow: "hidden",
// // // //     elevation: 12,
// // // //   },
// // // //   banner: {
// // // //     backgroundColor: "#E24B4A",
// // // //     paddingHorizontal: 20,
// // // //     paddingTop: 22,
// // // //     paddingBottom: 28,
// // // //     position: "relative",
// // // //   },
// // // //   bannerRow: { flexDirection: "row", alignItems: "center", gap: 14 },
// // // //   bannerIcon: {
// // // //     width: 46,
// // // //     height: 46,
// // // //     borderRadius: 23,
// // // //     backgroundColor: "rgba(255,255,255,0.22)",
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //   },
// // // //   warningTriangle: {
// // // //     width: 26,
// // // //     height: 26,
// // // //     borderRadius: 6,
// // // //     backgroundColor: "rgba(255,255,255,0.3)",
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //   },
// // // //   warningExclaim: { color: "#fff", fontSize: 16, fontWeight: "700" },
// // // //   bannerTitle: { fontSize: 16, fontWeight: "700", color: "#fff" },
// // // //   bannerSub: { fontSize: 12, color: "rgba(255,255,255,0.78)", marginTop: 3 },
// // // //   closeBtn: {
// // // //     width: 30,
// // // //     height: 30,
// // // //     borderRadius: 15,
// // // //     backgroundColor: "rgba(255,255,255,0.2)",
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //   },
// // // //   closeBtnText: { color: "#fff", fontSize: 13, fontWeight: "700" },
// // // //   bannerCurve: {
// // // //     position: "absolute",
// // // //     bottom: 0,
// // // //     left: 0,
// // // //     right: 0,
// // // //     height: 18,
// // // //     backgroundColor: "#fff",
// // // //     borderTopLeftRadius: 18,
// // // //     borderTopRightRadius: 18,
// // // //   },
// // // //   countRow: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     justifyContent: "space-between",
// // // //     paddingHorizontal: 20,
// // // //     paddingTop: 6,
// // // //     paddingBottom: 10,
// // // //   },
// // // //   sectionLabel: {
// // // //     fontSize: 11,
// // // //     fontWeight: "700",
// // // //     color: "#999",
// // // //     letterSpacing: 0.6,
// // // //     textTransform: "uppercase",
// // // //   },
// // // //   countBadge: {
// // // //     backgroundColor: "#FCEBEB",
// // // //     borderRadius: 10,
// // // //     paddingHorizontal: 9,
// // // //     paddingVertical: 2,
// // // //     borderWidth: 0.5,
// // // //     borderColor: "#F7C1C1",
// // // //   },
// // // //   countBadgeText: { fontSize: 12, fontWeight: "700", color: "#E24B4A" },
// // // //   listScroll: { maxHeight: 200, paddingHorizontal: 20 },
// // // //   listContent: { gap: 7, paddingBottom: 10 },
// // // //   fieldRow: {
// // // //     flexDirection: "row",
// // // //     alignItems: "center",
// // // //     gap: 10,
// // // //     padding: 10,
// // // //     backgroundColor: "#FCEBEB",
// // // //     borderRadius: 11,
// // // //     borderWidth: 0.5,
// // // //     borderColor: "#F7C1C1",
// // // //   },
// // // //   fieldDot: {
// // // //     width: 20,
// // // //     height: 20,
// // // //     borderRadius: 10,
// // // //     backgroundColor: "#E24B4A",
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //   },
// // // //   fieldDotText: { color: "#fff", fontSize: 10, fontWeight: "800" },
// // // //   fieldText: { flex: 1, fontSize: 13, fontWeight: "600", color: "#791F1F" },
// // // //   langBadge: { backgroundColor: "#E6F1FB", borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
// // // //   langBadgeText: { fontSize: 10, fontWeight: "700", color: "#185FA5" },
// // // //   langBadgeMr: { backgroundColor: "#FAEEDA" },
// // // //   langBadgeTextMr: { color: "#854F0B" },
// // // //   btnRow: { flexDirection: "row", gap: 10, padding: 20 },
// // // //   dismissBtn: {
// // // //     flex: 1,
// // // //     height: 45,
// // // //     borderRadius: 12,
// // // //     backgroundColor: "#f5f5f5",
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //   },
// // // //   dismissText: { fontSize: 14, fontWeight: "600", color: "#777" },
// // // //   fixBtn: {
// // // //     flex: 2,
// // // //     height: 45,
// // // //     borderRadius: 12,
// // // //     backgroundColor: "#f97316",
// // // //     alignItems: "center",
// // // //     justifyContent: "center",
// // // //   },
// // // //   fixText: { fontSize: 14, fontWeight: "700", color: "#fff" },
// // // // };
















// Step1.jsx - FIXED: SCROLL WORKS ON EVERY TAP
import React, { useState, useRef } from "react";
import {
  View, Text, ScrollView, TouchableOpacity,
  TextInput, Image, Modal, ActivityIndicator, Keyboard,
  KeyboardAvoidingView, Platform, FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Field, SectionHeader, sharedStyles as styles } from "./SharedUI";

const REQUIRED_FIELDS = [
  { key: "firstName", label: "First Name", lang: "EN" },
  { key: "middleName", label: "Middle Name", lang: "EN" },
  { key: "lastName", label: "Last Name / Surname", lang: "EN" },
  { key: "firstNameMr", label: "पहिले नाव", lang: "MR" },
  { key: "middleNameMr", label: "वडिलांचे नाव", lang: "MR" },
  { key: "lastNameMr", label: "शेवटचे नाव / आडनाव", lang: "MR" },
  { key: "birthName", label: "जन्म नाव", lang: "MR" },
  { key: "birthNameEn", label: "Birth Name", lang: "EN" },
  { key: "candidateType", label: "Candidate Type", lang: "EN" },
  { key: "photo", label: "Photo", lang: null },
];

const candidateTypeOptions = [
  { label: "वधू (Bride)", value: "वधू" },
  { label: "वर (Groom)", value: "वर" },
];

// Helper to decode HTML entities returned by Google
const decodeHTMLEntities = (text) => {
  const entities = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
  };
  return text.replace(/&[^;]+;/g, (entity) => entities[entity] || entity);
};

// Optimized Google Cloud Translation Service
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
    if (!response.ok) {
      console.error("Translation API error:", data.error?.message);
      return text;
    }

    const translatedText = data.data?.translations?.[0]?.translatedText || text;
    return decodeHTMLEntities(translatedText);
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
};

export default function Step1({ data, setData, onNext }) {
  const [errorVisible, setErrorVisible] = useState(false);
  const [missingFields, setMissingFields] = useState([]);
  const [showCandidatePicker, setShowCandidatePicker] = useState(false);
  const [highlightErrors, setHighlightErrors] = useState(false);
  const [translatingFields, setTranslatingFields] = useState({});

  // Refs for keyboard and scroll handling
  const typingTimeoutRef = useRef(null);
  const scrollViewRef = useRef(null);

  const set = (key) => (val) => setData((p) => ({ ...p, [key]: val }));

  const setEnglish = (key) => (val) => {
    const filtered = val.replace(/[^\x00-\x7F]/g, "");
    setData((p) => ({ ...p, [key]: filtered }));
  };

  // Proper Marathi setter with Debounced Auto-Translation
  const setMarathi = (key) => (val) => {
    // 1. Immediately update UI with whatever user is typing
    setData((p) => ({ ...p, [key]: val }));

    // 2. Clear any existing timer
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    // 3. Check for English characters to trigger translation
    const englishChars = val.match(/[a-zA-Z]/g);

    if (englishChars && englishChars.length > 0) {
      const englishText = val.replace(/[^\x00-\x7F\s]/g, "").trim();

      if (englishText.length > 1) {
        // Set loading state for this specific field
        setTranslatingFields((prev) => ({ ...prev, [key]: true }));

        // Start debounce timer (800ms)
        typingTimeoutRef.current = setTimeout(async () => {
          try {
            const translated = await translateText(englishText, "mr");
            setData((p) => ({ ...p, [key]: translated }));
          } catch (error) {
            console.error("Auto-translate failed:", error);
          } finally {
            setTranslatingFields((prev) => ({ ...prev, [key]: false }));
          }
        }, 800);
      }
    } else {
      // Pure Marathi input, filter out non-Marathi characters
      const filtered = val.replace(/[^\u0900-\u097F\s]/g, "");
      setData((p) => ({ ...p, [key]: filtered }));
    }
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      setMissingFields([{ label: "Permission Required: Allow photo access.", lang: null }]);
      setErrorVisible(true);
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3.5, 4.5],
      quality: 0.8,
    });
    if (!result.canceled) {
      set("photo")(result.assets[0].uri);
    }
  };

  const handleNext = () => {
    const missing = REQUIRED_FIELDS.filter((f) => !data[f.key] || data[f.key] === "");
    if (missing.length > 0) {
      setMissingFields(missing);
      setErrorVisible(true);
      setHighlightErrors(true);
    } else {
      setHighlightErrors(false);
      onNext && onNext();
    }
  };

  // ─── FIXED SCROLL HANDLER ───
  // Always scrolls to the very end of the content (using a large number)
  // This works repeatedly because we have a large padding at the bottom
  const handleMarathiNoteFocus = () => {
    // Immediate scroll attempt
    scrollViewRef.current?.scrollToEnd({ animated: true });

    // Delayed scroll attempt (catches if keyboard animation blocked the first one)
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);

    // Extra delayed attempt (for slower devices)
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 300);
  };

  const isFieldMissing = (key) => highlightErrors && missingFields.some((f) => f.key === key);
  const isFieldTranslating = (key) => translatingFields[key] || false;

  return (
    <>
      {/* ── VALIDATION POPUP ── */}
      <Modal transparent visible={errorVisible} animationType="fade">
        <View style={popStyles.overlay}>
          <View style={popStyles.card}>
            <View style={popStyles.banner}>
              <View style={popStyles.bannerRow}>
                <View style={popStyles.bannerIcon}>
                  <View style={popStyles.warningTriangle}>
                    <Text style={popStyles.warningExclaim}>!</Text>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={popStyles.bannerTitle}>Required fields missing</Text>
                  <Text style={popStyles.bannerSub}>Fill in all fields to continue</Text>
                </View>
                <TouchableOpacity style={popStyles.closeBtn} onPress={() => setErrorVisible(false)}>
                  <Text style={popStyles.closeBtnText}>✕</Text>
                </TouchableOpacity>
              </View>
              <View style={popStyles.bannerCurve} />
            </View>

            <View style={popStyles.countRow}>
              <Text style={popStyles.sectionLabel}>Incomplete fields</Text>
              <View style={popStyles.countBadge}>
                <Text style={popStyles.countBadgeText}>{missingFields.length}</Text>
              </View>
            </View>

            <ScrollView
              style={popStyles.listScroll}
              contentContainerStyle={popStyles.listContent}
              showsVerticalScrollIndicator={false}
            >
              {missingFields.map((f, i) => (
                <View key={i} style={popStyles.fieldRow}>
                  <View style={popStyles.fieldDot}>
                    <Text style={popStyles.fieldDotText}>✕</Text>
                  </View>
                  <Text style={popStyles.fieldText} numberOfLines={1}>{f.label}</Text>
                  <View style={[popStyles.langBadge, f.lang === "MR" && popStyles.langBadgeMr]}>
                    <Text style={[popStyles.langBadgeText, f.lang === "MR" && popStyles.langBadgeTextMr]}>
                      {f.lang || "Req"}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>

            <View style={popStyles.btnRow}>
              <TouchableOpacity style={popStyles.dismissBtn} onPress={() => setErrorVisible(false)}>
                <Text style={popStyles.dismissText}>Dismiss</Text>
              </TouchableOpacity>
              <TouchableOpacity style={popStyles.fixBtn} onPress={() => setErrorVisible(false)}>
                <Text style={popStyles.fixText}>Fix fields →</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* ── CANDIDATE DROPDOWN MODAL ── */}
      <Modal transparent visible={showCandidatePicker} animationType="fade">
        <TouchableOpacity
          style={dropdownStyles.overlay}
          activeOpacity={1}
          onPressOut={() => setShowCandidatePicker(false)}
        >
          <View style={dropdownStyles.container}>
            <View style={dropdownStyles.header}>
              <Text style={dropdownStyles.headerTitle}>Select Candidate Type</Text>
            </View>
            {candidateTypeOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  dropdownStyles.option,
                  data.candidateType === option.value && dropdownStyles.optionSelected,
                ]}
                onPress={() => {
                  set("candidateType")(option.value);
                  setShowCandidatePicker(false);
                }}
              >
                <Text
                  style={[
                    dropdownStyles.optionText,
                    data.candidateType === option.value && dropdownStyles.optionTextSelected,
                  ]}
                >
                  {option.label}
                </Text>
                {data.candidateType === option.value && (
                  <Text style={dropdownStyles.checkMark}>✓</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      {/* ── FORM WITH KEYBOARD SUPPORT ── */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          // HUGE PADDING BOTTOM (300) CREATES SPACE TO SCROLL INTO
          contentContainerStyle={{ paddingBottom: 300 }}
          keyboardShouldPersistTaps="handled"
          scrollEventThrottle={16}
        >
          <SectionHeader title="Basic Information" />

          {/* English Name Row */}
          <View style={styles.row3}>
            <View style={{ flex: 1, marginRight: 4 }}>
              <Field
                label="First Name"
                required
                value={data.firstName}
                onChangeText={setEnglish("firstName")}
                placeholder="English"
                inputStyle={isFieldMissing("firstName") && fieldErrStyle}
              />
            </View>
            <View style={{ flex: 1, marginHorizontal: 2 }}>
              <Field
                label="Middle Name"
                required
                value={data.middleName}
                onChangeText={setEnglish("middleName")}
                placeholder="English"
                inputStyle={isFieldMissing("middleName") && fieldErrStyle}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 4 }}>
              <Field
                label="Last Name"
                required
                value={data.lastName}
                onChangeText={setEnglish("lastName")}
                placeholder="English"
                inputStyle={isFieldMissing("lastName") && fieldErrStyle}
              />
            </View>
          </View>

          {/* Marathi Name Row */}
          <View style={styles.row3}>
            {["firstNameMr", "middleNameMr", "lastNameMr"].map((key, index) => (
              <View
                key={key}
                style={{
                  flex: 1,
                  marginHorizontal: index === 1 ? 2 : 0,
                  marginRight: index === 0 ? 4 : 0,
                  marginLeft: index === 2 ? 4 : 0,
                  position: "relative",
                }}
              >
                <Field
                  label={
                    key === "firstNameMr"
                      ? "पहिले नाव"
                      : key === "middleNameMr"
                        ? "वडिलांचे नाव"
                        : "आडनाव"
                  }
                  required
                  value={data[key]}
                  onChangeText={setMarathi(key)}
                  placeholder="मराठी"
                  inputStyle={[
                    isFieldMissing(key) && fieldErrStyle,
                    isFieldTranslating(key) && { opacity: 0.6 },
                  ]}
                />
                {isFieldTranslating(key) && (
                  <View style={translatingIndicator}>
                    <ActivityIndicator size="small" color="#f97316" />
                  </View>
                )}
              </View>
            ))}
          </View>

          {/* Birth Name Row */}
          <View style={styles.row2}>
            <View style={{ flex: 1, marginRight: 8, position: "relative" }}>
              <Field
                label="जन्म नाव (मराठी)"
                required
                value={data.birthName}
                onChangeText={setMarathi("birthName")}
                placeholder="मराठी"
                inputStyle={[
                  isFieldMissing("birthName") && fieldErrStyle,
                  isFieldTranslating("birthName") && { opacity: 0.6 },
                ]}
              />
              {isFieldTranslating("birthName") && (
                <View style={translatingIndicator}>
                  <ActivityIndicator size="small" color="#f97316" />
                </View>
              )}
            </View>
            <View style={{ flex: 1, marginLeft: 8 }}>
              <Field
                label="Birth Name (Eng)"
                required
                value={data.birthNameEn}
                onChangeText={setEnglish("birthNameEn")}
                placeholder="English"
                inputStyle={isFieldMissing("birthNameEn") && fieldErrStyle}
              />
            </View>
          </View>

          {/* Candidate Type & Photo */}
          <View style={styles.row2}>
            {/* Candidate Type */}
            <View style={{ flex: 1, marginRight: 8 }}>
              <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
                Candidate Type <Text style={{ color: "red" }}>*</Text>
              </Text>
              <TouchableOpacity
                style={[
                  dropdownStyles.pickerBtn,
                  isFieldMissing("candidateType") && { borderColor: "#E24B4A", borderWidth: 1.5 },
                ]}
                onPress={() => setShowCandidatePicker(true)}
              >
                <Text style={[dropdownStyles.pickerBtnText, !data.candidateType && { color: "#bbb" }]}>
                  {data.candidateType || "Select"}
                </Text>
                <Text style={dropdownStyles.pickerArrow}>▼</Text>
              </TouchableOpacity>
            </View>

            {/* ── PHOTO (user-friendly full portrait display) ── */}
            <View style={{ flex: 1, marginLeft: 8 }}>
              <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
                Photo <Text style={{ color: "red" }}>*</Text>
              </Text>

              {data.photo ? (
                /* ── PHOTO PREVIEW CARD ── */
                <View style={photoStyles.previewCard}>
                  {/* Full portrait image */}
                  <Image
                    source={{ uri: data.photo }}
                    style={photoStyles.previewImage}
                    resizeMode="cover"
                  />
                  {/* Overlay gradient at bottom */}
                  <View style={photoStyles.previewOverlay}>
                    <View style={photoStyles.previewOverlayRow}>
                      <View style={photoStyles.previewCheckBadge}>
                        <Text style={photoStyles.previewCheckText}>✓</Text>
                      </View>
                      <Text style={photoStyles.previewLabel}>Photo Added</Text>
                    </View>
                  </View>
                  {/* Change button floating top-right */}
                  <TouchableOpacity style={photoStyles.changeBtn} onPress={pickImage}>
                    <Text style={photoStyles.changeBtnText}>✎</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                /* ── UPLOAD PLACEHOLDER ── */
                <TouchableOpacity
                  style={[
                    photoStyles.uploadBox,
                    isFieldMissing("photo") && photoStyles.uploadBoxError,
                  ]}
                  onPress={pickImage}
                  activeOpacity={0.75}
                >
                  {/* Dashed border visual */}
                  <View style={photoStyles.uploadInner}>
                    <View style={photoStyles.uploadIconCircle}>
                      <Text style={photoStyles.uploadIcon}>📷</Text>
                    </View>
                    <Text style={photoStyles.uploadTitle}>Upload Photo</Text>
                    <Text style={photoStyles.uploadSub}>Tap to choose</Text>
                    <View style={photoStyles.uploadBadge}>
                      <Text style={photoStyles.uploadBadgeText}>3.5 × 4.5</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Optional Marathi Note */}
          <View style={[styles.marathiPadWrap, { marginTop: 15, position: "relative", minHeight: 180 }]}>
            <Text style={{ fontSize: 13, fontWeight: "600", color: "#333", marginBottom: 5 }}>
              इतर टीप (मराठी)
            </Text>
            <TextInput
              style={[
                styles.marathiPad,
                { height: 80 },
                isFieldTranslating("marathiNote") && { opacity: 0.6 },
              ]}
              multiline
              placeholder="English type करा (auto-translate)..."
              placeholderTextColor="#bbb"
              value={data.marathiNote}
              onChangeText={setMarathi("marathiNote")}
              onFocus={handleMarathiNoteFocus}
            />
            {isFieldTranslating("marathiNote") && (
              <View style={translatingIndicatorLarge}>
                <ActivityIndicator size="small" color="#f97316" />
              </View>
            )}
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const fieldErrStyle = { borderWidth: 1.5, borderColor: "#E24B4A", backgroundColor: "#fff" };

const photoStyles = {
  /* ── Upload placeholder ── */
  uploadBox: {
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#e0e0e0",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    overflow: "hidden",
    aspectRatio: 3.5 / 4.5,
  },
  uploadBoxError: {
    borderColor: "#E24B4A",
    backgroundColor: "#fff8f8",
  },
  uploadInner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    gap: 6,
  },
  uploadIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fff3e8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
    borderWidth: 1.5,
    borderColor: "#fdd8b8",
  },
  uploadIcon: { fontSize: 22 },
  uploadTitle: { fontSize: 13, fontWeight: "700", color: "#333" },
  uploadSub: { fontSize: 11, color: "#aaa", marginTop: -2 },
  uploadBadge: {
    marginTop: 6,
    backgroundColor: "#f97316",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  uploadBadgeText: { fontSize: 10, fontWeight: "700", color: "#fff", letterSpacing: 0.5 },

  /* ── Preview card ── */
  previewCard: {
    borderRadius: 14,
    overflow: "hidden",
    aspectRatio: 3.5 / 4.5,
    position: "relative",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  previewImage: {
    width: "100%",
    height: "100%",
  },
  /* Dark gradient bar at bottom */
  previewOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  previewOverlayRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  previewCheckBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#22c55e",
    alignItems: "center",
    justifyContent: "center",
  },
  previewCheckText: { color: "#fff", fontSize: 10, fontWeight: "800" },
  previewLabel: { fontSize: 11, fontWeight: "600", color: "#fff" },

  /* Floating edit button top-right */
  changeBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.9)",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  changeBtnText: { fontSize: 14, color: "#f97316" },
};

const translatingIndicator = { position: "absolute", right: 10, top: "55%" };
const translatingIndicatorLarge = { position: "absolute", right: 10, top: 35 };

const dropdownStyles = {
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    width: "100%",
    maxWidth: 300,
    overflow: "hidden",
    elevation: 8,
  },
  header: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fafafa",
  },
  headerTitle: { fontSize: 14, fontWeight: "700", color: "#333" },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#f0f0f0",
  },
  optionSelected: { backgroundColor: "#FFF3E8" },
  optionText: { fontSize: 15, color: "#333" },
  optionTextSelected: { fontWeight: "600", color: "#f97316" },
  checkMark: { fontSize: 16, color: "#f97316", fontWeight: "800" },
  pickerBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    paddingHorizontal: 14,
    height: 50,
  },
  pickerBtnText: { fontSize: 14, color: "#333" },
  pickerArrow: { fontSize: 12, color: "#888" },
};

const popStyles = {
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    width: "100%",
    maxWidth: 340,
    overflow: "hidden",
    elevation: 12,
  },
  banner: {
    backgroundColor: "#E24B4A",
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 28,
    position: "relative",
  },
  bannerRow: { flexDirection: "row", alignItems: "center", gap: 14 },
  bannerIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "rgba(255,255,255,0.22)",
    alignItems: "center",
    justifyContent: "center",
  },
  warningTriangle: {
    width: 26,
    height: 26,
    borderRadius: 6,
    backgroundColor: "rgba(255,255,255,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  warningExclaim: { color: "#fff", fontSize: 16, fontWeight: "700" },
  bannerTitle: { fontSize: 16, fontWeight: "700", color: "#fff" },
  bannerSub: { fontSize: 12, color: "rgba(255,255,255,0.78)", marginTop: 3 },
  closeBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  closeBtnText: { color: "#fff", fontSize: 13, fontWeight: "700" },
  bannerCurve: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 18,
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  countRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 6,
    paddingBottom: 10,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#999",
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  countBadge: {
    backgroundColor: "#FCEBEB",
    borderRadius: 10,
    paddingHorizontal: 9,
    paddingVertical: 2,
    borderWidth: 0.5,
    borderColor: "#F7C1C1",
  },
  countBadgeText: { fontSize: 12, fontWeight: "700", color: "#E24B4A" },
  listScroll: { maxHeight: 200, paddingHorizontal: 20 },
  listContent: { gap: 7, paddingBottom: 10 },
  fieldRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    backgroundColor: "#FCEBEB",
    borderRadius: 11,
    borderWidth: 0.5,
    borderColor: "#F7C1C1",
  },
  fieldDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#E24B4A",
    alignItems: "center",
    justifyContent: "center",
  },
  fieldDotText: { color: "#fff", fontSize: 10, fontWeight: "800" },
  fieldText: { flex: 1, fontSize: 13, fontWeight: "600", color: "#791F1F" },
  langBadge: { backgroundColor: "#E6F1FB", borderRadius: 6, paddingHorizontal: 8, paddingVertical: 2 },
  langBadgeText: { fontSize: 10, fontWeight: "700", color: "#185FA5" },
  langBadgeMr: { backgroundColor: "#FAEEDA" },
  langBadgeTextMr: { color: "#854F0B" },
  btnRow: { flexDirection: "row", gap: 10, padding: 20 },
  dismissBtn: {
    flex: 1,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  dismissText: { fontSize: 14, fontWeight: "600", color: "#777" },
  fixBtn: {
    flex: 2,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#007bff",
    alignItems: "center",
    justifyContent: "center",
  },
  fixText: { fontSize: 14, fontWeight: "700", color: "#fff" },
};























// 

