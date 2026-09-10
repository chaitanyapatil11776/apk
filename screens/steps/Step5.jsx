// // components/Step5.jsx
// import React from "react";
// import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

// export default function Step5({ data1, data2, data3, data4 }) {
//   // Helper to render a row with multiple key-value pairs
//   const InfoRow = ({ items }) => (
//     <View style={styles.row}>
//       {items.map((item, idx) => (
//         <View key={idx} style={styles.cell}>
//           <Text style={styles.label}>{item.label} : <Text style={styles.value}>{item.value || "-"}</Text></Text>
//         </View>
//       ))}
//     </View>
//   );

//   return (
//     <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
      
//       {/* Top Section: Photo + Personal Details Box */}
//       <View style={styles.topContainer}>
//         {data1.photo ? (
//           <Image source={{ uri: data1.photo }} style={styles.photo} />
//         ) : (
//           <View style={[styles.photo, styles.placeholderPhoto]}>
//             <Text style={{color: "#999", fontSize: 10}}>No Photo</Text>
//           </View>
//         )}
        
//         <View style={styles.detailsBox}>
//           <View style={styles.headerBar}>
//             <Text style={styles.headerText}>Personal Details</Text>
//           </View>
          
//           <View style={styles.candidateTypeBox}>
//             <Text style={styles.candidateTypeLabel}>Candidate Type</Text>
//             <Text style={styles.candidateTypeValue}>{data1.candidateType || "वधू / वर"}</Text>
//           </View>

//           <InfoRow items={[
//             { label: "पहिले नाव", value: data1.firstNameMr },
//             { label: "वडिलांचे नाव", value: data1.middleNameMr },
//             { label: "शेवटचे नाव / आडनाव", value: data1.lastNameMr }
//           ]} />
//           <InfoRow items={[
//             { label: "First Name", value: data1.firstName },
//             { label: "Middle Name", value: data1.middleName },
//             { label: "Last Name", value: data1.lastName }
//           ]} />
//           <InfoRow items={[
//             { label: "Birth Name", value: data1.birthNameEn },
//             { label: "जन्म नाव", value: data1.birthName },
//             { label: "जन्मस्थळ", value: data2.birthPlace }
//           ]} />
//           <InfoRow items={[
//             { label: "जन्म तारीख", value: data2.dob },
//             { label: "जन्म वेळ", value: `${data2.birthHour || "00"}:${data2.birthMin || "00"}` },
//             { label: "गाव", value: data2.village }
//           ]} />
//           <InfoRow items={[
//             { label: "उंची", value: `${data2.heightFt || "0"}'${data2.heightIn || "0"}"` },
//             { label: "वर्ण", value: data2.complexion },
//             { label: "रक्तगट", value: data2.bloodGroup }
//           ]} />
//           <InfoRow items={[
//             { label: "मामकुळ", value: data2.mamkul },
//             { label: "गोत्र", value: data2.gotra }
//           ]} />
//         </View>
//       </View>

//       {/* Section 2: Personal Information */}
//       <View style={styles.card}>
//         <View style={styles.headerBar}><Text style={styles.headerText}>Personal Information</Text></View>
//         <InfoRow items={[
//           { label: "भाऊ (संख्या)", value: `विवाहित ${data2.brotherMarried || "0"} अविवाहित ${data2.brotherUnmarried || "0"}` },
//           { label: "बहिण (संख्या)", value: `विवाहित ${data2.sisterMarried || "0"} अविवाहित ${data2.sisterUnmarried || "0"}` }
//         ]} />
//         <InfoRow items={[
//           { label: "मूळगाव", value: data2.village },
//           { label: "तालुका", value: data2.taluka },
//           { label: "जिल्हा", value: data2.district }
//         ]} />
//         <InfoRow items={[
//           { label: "वैयक्तिक मोबाइल नंबर", value: data2.mobile }
//         ]} />
//       </View>

//       {/* Section 3: Educational Details */}
//       <View style={styles.card}>
//         <View style={styles.headerBar}><Text style={styles.headerText}>Educational Details</Text></View>
//         <InfoRow items={[
//           { label: "Education Level", value: data3.educationLevel },
//           { label: "शिक्षण", value: data3.education },
//           { label: "(छंद/गुण/स्वभाव/वांछनीय)", value: data4.expectations }
//         ]} />
//         <InfoRow items={[
//           { label: "नोकरी/ व्यवसाय", value: data3.jobType },
//           { label: "हुद्दा", value: data3.designation },
//           { label: "कंपनी", value: data3.company }
//         ]} />
//         <InfoRow items={[
//           { label: "नोकरीचे ठिकाण", value: data3.jobLocation },
//           { label: "मोबाईल", value: data3.jobMobile },
//           { label: "मासिक उत्पन्न (₹)", value: data3.salary }
//         ]} />
//       </View>

//       {/* Section 4: Guardian Information */}
//       <View style={styles.card}>
//         <View style={styles.headerBar}><Text style={styles.headerText}>Guardian Information</Text></View>
//         <InfoRow items={[
//           { label: "वडिलांचे/ पालकांचे नाव", value: `${data4.fatherTitle || ""} ${data4.fatherName || ""}` },
//           { label: "पत्ता", value: data4.fatherAddress }
//         ]} />
//         <InfoRow items={[
//           { label: "मोबाईल", value: data4.fatherMobile },
//           { label: "दूरध्वनी (with STD)", value: data4.fatherPhone }
//         ]} />
//         <InfoRow items={[
//           { label: "Email", value: data4.fatherEmail }
//         ]} />
        
//         <View style={styles.divider} />

//         <InfoRow items={[
//           { label: "संपर्कासाठी नाव 1", value: `${data4.contact1Title || ""} ${data4.contact1Name || ""}` },
//           { label: "पत्ता", value: data4.contact1Address }
//         ]} />
//         <InfoRow items={[
//           { label: "मोबाईल", value: data4.contact1Mobile },
//           { label: "दूरध्वनी (with STD)", value: data4.contact1Phone }
//         ]} />

//         <View style={styles.divider} />

//         <InfoRow items={[
//           { label: "संपर्कासाठी नाव 2", value: `${data4.contact2Title || ""} ${data4.contact2Name || ""}` },
//           { label: "पत्ता", value: data4.contact2Address }
//         ]} />
//         <InfoRow items={[
//           { label: "मोबाईल", value: data4.contact2Mobile },
//           { label: "दूरध्वनी (with STD)", value: data4.contact2Phone }
//         ]} />
//       </View>

//       {/* Footer Text */}
//       <View style={styles.footerMsgBox}>
//         <Text style={styles.footerTextEn}>Your profile is submitted for Verification. Please check the Dashboard for status.</Text>
//         <Text style={styles.footerTextMr}>
//           ४८ तासांच्या आत आपल्या प्रोफाईलची पडताळणी केली जाईल. आणि त्यानंतर तुम्हाला तुमच्या डॅशबोर्डवर तुमच्या प्रोफाईलचा स्टेटस दिसेल.
//         </Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   topContainer: { flexDirection: "row", marginBottom: 12, gap: 10 },
//   photo: { width: 90, height: 110, resizeMode: "cover", borderWidth: 1, borderColor: "#ccc", backgroundColor: "#f9f9f9" },
//   placeholderPhoto: { alignItems: "center", justifyContent: "center" },
//   detailsBox: { flex: 1, borderWidth: 1, borderColor: "#e27b36", backgroundColor: "#fff" },
//   card: { borderWidth: 1, borderColor: "#e27b36", backgroundColor: "#fff", marginBottom: 12 },
//   headerBar: { backgroundColor: "#e27b36", paddingVertical: 6, paddingHorizontal: 10 },
//   headerText: { color: "#fff", fontWeight: "bold", fontSize: 12 },
//   candidateTypeBox: { alignItems: "center", paddingVertical: 8, borderBottomWidth: 1, borderColor: "#eee" },
//   candidateTypeLabel: { fontSize: 10, color: "#555", fontWeight: "600" },
//   candidateTypeValue: { fontSize: 18, color: "#d32f2f", fontWeight: "bold", marginTop: 2 },
//   row: { flexDirection: "row", borderBottomWidth: 1, borderColor: "#eee", paddingVertical: 6, paddingHorizontal: 6 },
//   cell: { flex: 1, paddingHorizontal: 2 },
//   label: { fontSize: 10, color: "#555", fontWeight: "500" },
//   value: { fontSize: 10, color: "#000", fontWeight: "bold" },
//   divider: { height: 1, backgroundColor: "#ccc", marginVertical: 4 },
//   footerMsgBox: { alignItems: "center", marginTop: 10, paddingHorizontal: 10 },
//   footerTextEn: { fontSize: 11, fontWeight: "bold", textAlign: "center", marginBottom: 4 },
//   footerTextMr: { fontSize: 10, color: "#444", textAlign: "center", lineHeight: 14 }
// });











// components/Step5.jsx
import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function Step5({ data1, data2, data3, data4 }) {
  // Helper to render a row with multiple key-value pairs
  const InfoRow = ({ items }) => (
    <View style={styles.row}>
      {items.map((item, idx) => (
        <View key={idx} style={styles.cell}>
          <Text style={styles.label}>{item.label} : <Text style={styles.value}>{item.value || "-"}</Text></Text>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
      
      {/* Top Section: Photo + Personal Details Box */}
      <View style={styles.topContainer}>
        {data1.photo ? (
          <Image source={{ uri: data1.photo }} style={styles.photo} />
        ) : (
          <View style={[styles.photo, styles.placeholderPhoto]}>
            <Text style={{color: "#999", fontSize: 10, textAlign: 'center'}}>No Photo{"\n"}(Passport Ratio)</Text>
          </View>
        )}
        
        <View style={styles.detailsBox}>
          <View style={styles.headerBar}>
            <Text style={styles.headerText}>Personal Details</Text>
          </View>
          
          <View style={styles.candidateTypeBox}>
            <Text style={styles.candidateTypeLabel}>Candidate Type</Text>
            <Text style={styles.candidateTypeValue}>{data1.candidateType || "वधू / वर"}</Text>
          </View>

          <InfoRow items={[
            { label: "पहिले नाव", value: data1.firstNameMr },
            { label: "वडिलांचे नाव", value: data1.middleNameMr },
            { label: "शेवटचे नाव / आडनाव", value: data1.lastNameMr }
          ]} />
          <InfoRow items={[
            { label: "First Name", value: data1.firstName },
            { label: "Middle Name", value: data1.middleName },
            { label: "Last Name", value: data1.lastName }
          ]} />
        </View>
      </View>

      {/* Rest of Personal Details (Moved out of top box for better flow) */}
      <View style={styles.card}>
          <InfoRow items={[
            { label: "Birth Name", value: data1.birthNameEn },
            { label: "जन्म नाव", value: data1.birthName },
            { label: "जन्मस्थळ", value: data2.birthPlace }
          ]} />
          <InfoRow items={[
            { label: "जन्म तारीख", value: data2.dob },
            { label: "जन्म वेळ", value: `${data2.birthHour || "00"}:${data2.birthMin || "00"}` },
            { label: "गाव", value: data2.village }
          ]} />
          <InfoRow items={[
            { label: "उंची", value: `${data2.heightFt || "0"}'${data2.heightIn || "0"}"` },
            { label: "वर्ण", value: data2.complexion },
            { label: "रक्तगट", value: data2.bloodGroup }
          ]} />
          <InfoRow items={[
            { label: "मामकुळ", value: data2.mamkul },
            { label: "गोत्र", value: data2.gotra }
          ]} />
      </View>

      {/* Section 2: Personal Information */}
      <View style={styles.card}>
        <View style={styles.headerBar}><Text style={styles.headerText}>Personal Information</Text></View>
        <InfoRow items={[
          { label: "भाऊ (संख्या)", value: `विवाहित ${data2.brotherMarried || "0"} अविवाहित ${data2.brotherUnmarried || "0"}` },
          { label: "बहिण (संख्या)", value: `विवाहित ${data2.sisterMarried || "0"} अविवाहित ${data2.sisterUnmarried || "0"}` }
        ]} />
        <InfoRow items={[
          { label: "मूळगाव", value: data2.village },
          { label: "तालुका", value: data2.taluka },
          { label: "जिल्हा", value: data2.district }
        ]} />
        <InfoRow items={[
          { label: "वैयक्तिक मोबाइल नंबर", value: data2.mobile }
        ]} />
      </View>

      {/* Section 3: Educational Details */}
      <View style={styles.card}>
        <View style={styles.headerBar}><Text style={styles.headerText}>Educational Details</Text></View>
        <InfoRow items={[
          { label: "Education Level", value: data3.educationLevel },
          { label: "शिक्षण", value: data3.education }
        ]} />
        <InfoRow items={[
          { label: "अपेक्षा", value: data4.expectations }
        ]} />
        <InfoRow items={[
          { label: "नोकरी/ व्यवसाय", value: data3.jobType },
          { label: "हुद्दा", value: data3.designation },
          { label: "कंपनी", value: data3.company }
        ]} />
        <InfoRow items={[
          { label: "नोकरीचे ठिकाण", value: data3.jobLocation },
          { label: "मोबाईल", value: data3.jobMobile },
          { label: "मासिक उत्पन्न (₹)", value: data3.salary }
        ]} />
      </View>

      {/* Section 4: Guardian Information */}
      <View style={styles.card}>
        <View style={styles.headerBar}><Text style={styles.headerText}>Guardian Information</Text></View>
        <InfoRow items={[
          { label: "वडिलांचे/ पालकांचे नाव", value: `${data4.fatherTitle || ""} ${data4.fatherName || ""}` },
          { label: "पत्ता", value: data4.fatherAddress }
        ]} />
        <InfoRow items={[
          { label: "मोबाईल", value: data4.fatherMobile },
          { label: "दूरध्वनी", value: data4.fatherPhone }
        ]} />
        <InfoRow items={[
          { label: "Email", value: data4.fatherEmail }
        ]} />
        
        <View style={styles.divider} />

        <InfoRow items={[
          { label: "संपर्कासाठी नाव 1", value: `${data4.contact1Title || ""} ${data4.contact1Name || ""}` },
          { label: "पत्ता", value: data4.contact1Address }
        ]} />
        <InfoRow items={[
          { label: "मोबाईल", value: data4.contact1Mobile },
          { label: "दूरध्वनी", value: data4.contact1Phone }
        ]} />

        <View style={styles.divider} />

        <InfoRow items={[
          { label: "संपर्कासाठी नाव 2", value: `${data4.contact2Title || ""} ${data4.contact2Name || ""}` },
          { label: "पत्ता", value: data4.contact2Address }
        ]} />
        <InfoRow items={[
          { label: "मोबाईल", value: data4.contact2Mobile },
          { label: "दूरध्वनी", value: data4.contact2Phone }
        ]} />
      </View>

      {/* Footer Text */}
      <View style={styles.footerMsgBox}>
        <Text style={styles.footerTextEn}>Your profile is submitted for Verification. Please check the Dashboard for status.</Text>
        <Text style={styles.footerTextMr}>
          ४८ तासांच्या आत आपल्या प्रोफाईलची पडताळणी केली जाईल. आणि त्यानंतर तुम्हाला तुमच्या डॅशबोर्डवर तुमच्या प्रोफाईलचा स्टेटस दिसेल.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topContainer: { flexDirection: "row", marginBottom: 12, gap: 10 },
  // Passport ratio is 3.5 : 4.5. Calculated height based on width 105.
  photo: { 
    width: 105, 
    height: 135, 
    resizeMode: "cover", 
    borderWidth: 1, 
    borderColor: "#ccc", 
    backgroundColor: "#f9f9f9",
    borderRadius: 4
  },
  placeholderPhoto: { alignItems: "center", justifyContent: "center" },
  detailsBox: { 
    flex: 1, 
    borderWidth: 1, 
    borderColor: "#e27b36", 
    backgroundColor: "#fff",
    height: 135 // Matching photo height
  },
  card: { borderWidth: 1, borderColor: "#e27b36", backgroundColor: "#fff", marginBottom: 12 },
  headerBar: { backgroundColor: "#e27b36", paddingVertical: 6, paddingHorizontal: 10 },
  headerText: { color: "#fff", fontWeight: "bold", fontSize: 12 },
  candidateTypeBox: { alignItems: "center", paddingVertical: 4, borderBottomWidth: 1, borderColor: "#eee" },
  candidateTypeLabel: { fontSize: 9, color: "#555", fontWeight: "600" },
  candidateTypeValue: { fontSize: 16, color: "#d32f2f", fontWeight: "bold" },
  row: { flexDirection: "row", borderBottomWidth: 1, borderColor: "#eee", paddingVertical: 4, paddingHorizontal: 6 },
  cell: { flex: 1, paddingHorizontal: 2 },
  label: { fontSize: 9, color: "#555", fontWeight: "500" },
  value: { fontSize: 9, color: "#000", fontWeight: "bold" },
  divider: { height: 1, backgroundColor: "#ccc", marginVertical: 4 },
  footerMsgBox: { alignItems: "center", marginTop: 10, paddingHorizontal: 10 },
  footerTextEn: { fontSize: 11, fontWeight: "bold", textAlign: "center", marginBottom: 4 },
  footerTextMr: { fontSize: 10, color: "#444", textAlign: "center", lineHeight: 14 }
});