// import React, { useMemo, useState } from "react";
// import {
//   SafeAreaView,
//   ScrollView,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Linking,
//   StatusBar,
// } from "react-native";

// const BOOK_COST = 600;
// const COURIER_COST = 150;

// export default function App() {
//   const [form, setForm] = useState({
//     name: "",
//     address: "",
//     city: "",
//     district: "",
//     state: "",
//     pincode: "",
//     email: "",
//     phone: "",
//   });

//   const [quantity, setQuantity] = useState(1);

//   const total = useMemo(() => {
//     return (BOOK_COST + COURIER_COST) * quantity;
//   }, [quantity]);

//   const updateField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value,
//     });
//   };

//   const validateForm = () => {
//     const requiredFields = [
//       ["name", "Full Name"],
//       ["address", "Delivery Address"],
//       ["city", "City"],
//       ["district", "District"],
//       ["state", "State"],
//       ["pincode", "Pincode"],
//       ["email", "Email ID"],
//       ["phone", "Phone"],
//     ];

//     for (const [key, label] of requiredFields) {
//       if (!form[key].trim()) {
//         Alert.alert("Required Field", `Please enter ${label}.`);
//         return false;
//       }
//     }

//     if (!/^\d{6}$/.test(form.pincode)) {
//       Alert.alert("Invalid Pincode", "Please enter a valid 6-digit pincode.");
//       return false;
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       Alert.alert("Invalid Email", "Please enter a valid email address.");
//       return false;
//     }

//     if (!/^\d{10}$/.test(form.phone)) {
//       Alert.alert("Invalid Phone", "Please enter a valid 10-digit mobile number.");
//       return false;
//     }

//     return true;
//   };

//   const handlePayment = () => {
//     if (!validateForm()) return;

//     Alert.alert(
//       "Proceed to Payment",
//       `Order amount: ₹${total}\n\nContinue to Razorpay payment?`,
//       [
//         {
//           text: "Cancel",
//           style: "cancel",
//         },
//         {
//           text: "Continue",
//           onPress: () => {
//             // Connect your backend Razorpay order API here.
//             Alert.alert(
//               "Payment Integration",
//               "Connect this button to your backend Razorpay order API."
//             );
//           },
//         },
//       ]
//     );
//   };

//   const openPhone = () => {
//     Linking.openURL("tel:02071173733");
//   };

//   const openEmail = () => {
//     Linking.openURL(
//       "mailto:samatabhratrumandal@gmail.com?subject=वधु-वर सूची २०२६"
//     );
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor="#173C42"
//       />

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled"
//       >
//         {/* HEADER */}
//         <View style={styles.header}>
//           <View style={styles.logoBox}>
//             <Text style={styles.logoText}>समता</Text>
//           </View>

//           <View>
//             <Text style={styles.brand}>
//               Samata Bhratru Mandal
//             </Text>

//             <Text style={styles.brandMarathi}>
//               समता भ्रातृ मंडळ
//             </Text>
//           </View>
//         </View>

//         {/* TITLE */}
//         <View style={styles.titleSection}>
//           <Text style={styles.mainTitle}>
//             समता भ्रातृ मंडळ
//           </Text>

//           <Text style={styles.subTitle}>
//             (वधु-वर सूची २०२६)
//           </Text>

//           <View style={styles.yellowLine} />
//         </View>

//         {/* BOOK SECTION */}
//         <View style={styles.contentCard}>
//           <Text style={styles.orangeTitle}>
//             वधु-वर सूची २०२६
//           </Text>

//           <Text style={styles.boldText}>
//             वधु-वर सूची २०२६ पुस्तक आत्ता आपण आपल्या
//             घरपोच मागवा.
//           </Text>

//           <Text style={styles.sectionTitle}>
//             उपक्रमाबद्दल माहिती
//           </Text>

//           <Text style={styles.paragraph}>
//             समता भ्रातृ मंडळ (पिंपरी चिंचवड, पुणे)
//             दरवर्षी प्रमाणे ह्या वर्षीही वधु-वर पुस्तक
//             प्रिंट करणार आहे. ह्या पुस्तकात जवळ जवळ
//             १५०० पेक्षा जास्त नावे दरवर्षी असतात.
//           </Text>

//           <Text style={styles.paragraph}>
//             अश्या ह्या बिनचूक सूची चे वितरण दरवर्षी
//             मेळावाच्या १० दिवस अगोदर मंडळाच्या
//             अधिकृत नोंदणी व सूची विक्री केंद्र
//             ह्यांच्याकडे करण्यात येते.
//           </Text>

//           <Text style={styles.paragraph}>
//             म्हणून मंडळ हे दर वर्षी वधु-वर सूची पुस्तक
//             आपल्या घरी Courier ने मागविण्यासाठीची
//             सुविधा नागरिकांस देण्याची उपाययोजना करत
//             असते.
//           </Text>

//           <Text style={styles.paragraph}>
//             ह्या वर्षीही मंडळाची उत्तम अशी रंगीत प्रिंट
//             असलेली व बिनचूक सूची आपण ऍडव्हान्स
//             बुकिंग करून व ऑनलाईन पैसे भरून आपल्या
//             घरपोच मागवू शकता.
//           </Text>

//           <Text style={styles.paragraph}>
//             त्यासाठी पुढील दिलेला फॉर्म व्यवस्थित रित्या
//             भरून ऑनलाइन payment करावे.
//           </Text>
//         </View>

//         {/* FEE CARD */}
//         <View style={styles.feeCard}>
//           <Text style={styles.feeTitle}>
//             Fee Breakup
//           </Text>

//           <View style={styles.feeRow}>
//             <Text style={styles.feeLabel}>
//               Suchi Cost
//             </Text>

//             <Text style={styles.feeValue}>
//               ₹600
//             </Text>
//           </View>

//           <View style={styles.feeRow}>
//             <Text style={styles.feeLabel}>
//               Courier (DTDC)
//             </Text>

//             <Text style={styles.feeValue}>
//               ₹150
//             </Text>
//           </View>

//           <Text style={styles.feeNote}>
//             Fees include transaction charges + 18% GST
//           </Text>

//           {/* QUANTITY */}
//           <View style={styles.quantityContainer}>
//             <Text style={styles.quantityTitle}>
//               Quantity
//             </Text>

//             <View style={styles.quantityBox}>
//               <TouchableOpacity
//                 style={styles.quantityButton}
//                 onPress={() =>
//                   setQuantity(Math.max(1, quantity - 1))
//                 }
//               >
//                 <Text style={styles.quantityButtonText}>
//                   −
//                 </Text>
//               </TouchableOpacity>

//               <Text style={styles.quantityNumber}>
//                 {quantity}
//               </Text>

//               <TouchableOpacity
//                 style={styles.quantityButton}
//                 onPress={() =>
//                   setQuantity(quantity + 1)
//                 }
//               >
//                 <Text style={styles.quantityButtonText}>
//                   +
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           <View style={styles.totalRow}>
//             <Text style={styles.totalLabel}>
//               Total Amount
//             </Text>

//             <Text style={styles.totalValue}>
//               ₹{total}
//             </Text>
//           </View>
//         </View>

//         {/* ORDER FORM */}
//         <View style={styles.formCard}>
//           <Text style={styles.formTitle}>
//             Delivery Details
//           </Text>

//           <Text style={styles.formSubtitle}>
//             Please enter your details
//           </Text>

//           <Input
//             label="Enter Full Name"
//             required
//             value={form.name}
//             onChangeText={(v) => updateField("name", v)}
//           />

//           <Input
//             label="Enter Delivery Address"
//             required
//             multiline
//             value={form.address}
//             onChangeText={(v) => updateField("address", v)}
//           />

//           <Input
//             label="City"
//             required
//             value={form.city}
//             onChangeText={(v) => updateField("city", v)}
//           />

//           <Input
//             label="District"
//             required
//             value={form.district}
//             onChangeText={(v) => updateField("district", v)}
//           />

//           <Input
//             label="State"
//             required
//             value={form.state}
//             onChangeText={(v) => updateField("state", v)}
//           />

//           <Input
//             label="Pincode"
//             required
//             keyboardType="numeric"
//             maxLength={6}
//             value={form.pincode}
//             onChangeText={(v) => updateField("pincode", v)}
//           />

//           <Input
//             label="Email ID"
//             required
//             keyboardType="email-address"
//             autoCapitalize="none"
//             value={form.email}
//             onChangeText={(v) => updateField("email", v)}
//           />

//           {/* PHONE */}
//           <Text style={styles.inputLabel}>
//             Phone <Text style={styles.required}>*</Text>
//           </Text>

//           <View style={styles.phoneContainer}>
//             <View style={styles.countryCode}>
//               <Text style={styles.countryText}>
//                 IN +91
//               </Text>
//             </View>

//             <TextInput
//               style={styles.phoneInput}
//               placeholder="Mobile Number"
//               keyboardType="phone-pad"
//               maxLength={10}
//               value={form.phone}
//               onChangeText={(v) => updateField("phone", v)}
//             />
//           </View>

//           {/* PAYMENT BUTTON */}
//           <TouchableOpacity
//             style={styles.paymentButton}
//             onPress={handlePayment}
//             activeOpacity={0.8}
//           >
//             <Text style={styles.paymentButtonText}>
//               Pay ₹{total}
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* WARNING */}
//         <View style={styles.warningCard}>
//           <Text style={styles.warningTitle}>
//             ⚠ चेतावणी
//           </Text>

//           <Text style={styles.warningText}>
//             कृपया नोंद करावी कि समता भ्रातृ मंडळ
//             (पिंपरी चिंचवड, पुणे) ह्यांची सूची
//             कुठल्याही दुसऱ्या वेबसाईटवर उपलब्ध नाही.
//           </Text>

//           <Text style={styles.warningText}>
//             मंडळ किंवा कोणताही मंडळाचा कार्यकर्ता
//             ह्यास सूचीचे पैसे त्यांच्या स्वतःच्या
//             account वर अथवा GPay, PhonePe किंवा
//             इतर कुठल्याही माध्यमातून स्वीकारण्याची
//             अनुमती मंडळाने दिलेली नाही.
//           </Text>

//           <Text style={styles.warningText}>
//             असे काही आपणास निदर्शनास आल्यास
//             त्वरित खालील नंबरवर संपर्क करावा.
//           </Text>

//           <TouchableOpacity onPress={openPhone}>
//             <Text style={styles.contactNumber}>
//               02071173733
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* DTDC NOTE */}
//         <View style={styles.noteCard}>
//           <Text style={styles.noteTitle}>
//             Important Note
//           </Text>

//           <Text style={styles.noteText}>
//             In case courier company service coverage
//             is not covered in your area by DTDC then
//             suchi will be returned to us.
//           </Text>

//           <Text style={styles.noteText}>
//             Before placing the order please check
//             DTDC service coverage.
//           </Text>

//           <Text style={styles.noteText}>
//             Order placed once cannot be refunded in
//             any case. Please cooperate with us.
//           </Text>
//         </View>

//         {/* CONTACT */}
//         <View style={styles.contactCard}>
//           <Text style={styles.contactTitle}>
//             Contact Us
//           </Text>

//           <TouchableOpacity onPress={openPhone}>
//             <Text style={styles.contactLink}>
//               📞 02071173733
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={openEmail}>
//             <Text style={styles.contactLink}>
//               ✉ samatabhratrumandal@gmail.com
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* FOOTER */}
//         <View style={styles.footer}>
//           <Text style={styles.footerText}>
//             © 2026 Samata Bhratru Mandal
//           </Text>

//           <Text style={styles.footerText}>
//             Pimpri Chinchwad, Pune
//           </Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }


// /* INPUT COMPONENT */

// function Input({
//   label,
//   required,
//   value,
//   onChangeText,
//   multiline = false,
//   keyboardType = "default",
//   maxLength,
//   autoCapitalize = "sentences",
// }) {
//   return (
//     <View style={styles.inputGroup}>
//       <Text style={styles.inputLabel}>
//         {label}{" "}
//         {required && (
//           <Text style={styles.required}>*</Text>
//         )}
//       </Text>

//       <TextInput
//         style={[
//           styles.input,
//           multiline && styles.textArea,
//         ]}
//         value={value}
//         onChangeText={onChangeText}
//         multiline={multiline}
//         keyboardType={keyboardType}
//         maxLength={maxLength}
//         autoCapitalize={autoCapitalize}
//         placeholder={`Enter ${label}`}
//         placeholderTextColor="#999"
//       />
//     </View>
//   );
// }


// /* STYLES */

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#f6f7f9",
//   },

//   header: {
//     backgroundColor: "#173C42",
//     paddingHorizontal: 20,
//     paddingVertical: 18,
//     flexDirection: "row",
//     alignItems: "center",
//   },

//   logoBox: {
//     width: 58,
//     height: 58,
//     borderRadius: 10,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 14,
//   },

//   logoText: {
//     color: "#1d7a5b",
//     fontSize: 13,
//     fontWeight: "800",
//   },

//   brand: {
//     color: "#fff",
//     fontSize: 20,
//     fontWeight: "700",
//   },

//   brandMarathi: {
//     color: "#e6e6e6",
//     fontSize: 14,
//     marginTop: 3,
//   },

//   titleSection: {
//     backgroundColor: "#fff",
//     paddingHorizontal: 20,
//     paddingTop: 25,
//     paddingBottom: 18,
//   },

//   mainTitle: {
//     color: "#102e67",
//     fontSize: 27,
//     fontWeight: "800",
//   },

//   subTitle: {
//     color: "#102e67",
//     fontSize: 20,
//     fontWeight: "700",
//     marginTop: 3,
//   },

//   yellowLine: {
//     width: 38,
//     height: 5,
//     backgroundColor: "#f5d334",
//     marginTop: 18,
//     borderRadius: 3,
//   },

//   contentCard: {
//     backgroundColor: "#fff",
//     marginHorizontal: 14,
//     marginTop: 12,
//     padding: 18,
//     borderRadius: 12,
//   },

//   orangeTitle: {
//     color: "#ff8b00",
//     fontSize: 23,
//     fontWeight: "800",
//     marginBottom: 12,
//   },

//   boldText: {
//     color: "#102e67",
//     fontSize: 16,
//     fontWeight: "700",
//     lineHeight: 25,
//     marginBottom: 18,
//   },

//   sectionTitle: {
//     color: "#ff8b00",
//     fontSize: 21,
//     fontWeight: "800",
//     marginBottom: 10,
//   },

//   paragraph: {
//     color: "#17366e",
//     fontSize: 15,
//     lineHeight: 24,
//     marginBottom: 14,
//   },

//   feeCard: {
//     backgroundColor: "#fff",
//     margin: 14,
//     padding: 18,
//     borderRadius: 12,
//     elevation: 2,
//   },

//   feeTitle: {
//     fontSize: 22,
//     fontWeight: "800",
//     color: "#102e67",
//     marginBottom: 15,
//   },

//   feeRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#eee",
//   },

//   feeLabel: {
//     fontSize: 16,
//     color: "#555",
//   },

//   feeValue: {
//     fontSize: 17,
//     fontWeight: "700",
//     color: "#102e67",
//   },

//   feeNote: {
//     color: "#777",
//     fontSize: 13,
//     marginTop: 12,
//   },

//   quantityContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },

//   quantityTitle: {
//     fontSize: 16,
//     fontWeight: "700",
//     color: "#333",
//   },

//   quantityBox: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 7,
//     overflow: "hidden",
//   },

//   quantityButton: {
//     width: 42,
//     height: 40,
//     backgroundColor: "#fff6ce",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   quantityButtonText: {
//     fontSize: 23,
//     fontWeight: "700",
//     color: "#111",
//   },

//   quantityNumber: {
//     width: 42,
//     textAlign: "center",
//     fontSize: 17,
//     fontWeight: "700",
//   },

//   totalRow: {
//     marginTop: 18,
//     paddingTop: 16,
//     borderTopWidth: 2,
//     borderTopColor: "#eee",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },

//   totalLabel: {
//     fontSize: 18,
//     fontWeight: "800",
//     color: "#102e67",
//   },

//   totalValue: {
//     fontSize: 24,
//     fontWeight: "900",
//     color: "#e64b2e",
//   },

//   formCard: {
//     backgroundColor: "#fff",
//     marginHorizontal: 14,
//     padding: 18,
//     borderRadius: 12,
//   },

//   formTitle: {
//     fontSize: 23,
//     fontWeight: "800",
//     color: "#102e67",
//   },

//   formSubtitle: {
//     color: "#777",
//     marginTop: 4,
//     marginBottom: 18,
//   },

//   inputGroup: {
//     marginBottom: 16,
//   },

//   inputLabel: {
//     color: "#42506a",
//     fontSize: 15,
//     marginBottom: 7,
//   },

//   required: {
//     color: "#e53935",
//   },

//   input: {
//     minHeight: 48,
//     borderWidth: 1,
//     borderColor: "#d9d9d9",
//     borderRadius: 5,
//     paddingHorizontal: 13,
//     color: "#222",
//     fontSize: 15,
//     backgroundColor: "#fff",
//   },

//   textArea: {
//     minHeight: 85,
//     textAlignVertical: "top",
//     paddingTop: 12,
//   },

//   phoneContainer: {
//     flexDirection: "row",
//     marginBottom: 22,
//   },

//   countryCode: {
//     width: 105,
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#d9d9d9",
//     justifyContent: "center",
//     paddingHorizontal: 10,
//     backgroundColor: "#fafafa",
//   },

//   countryText: {
//     color: "#333",
//     fontSize: 14,
//   },

//   phoneInput: {
//     flex: 1,
//     height: 50,
//     borderTopWidth: 1,
//     borderBottomWidth: 1,
//     borderRightWidth: 1,
//     borderColor: "#d9d9d9",
//     paddingHorizontal: 12,
//     fontSize: 15,
//   },

//   paymentButton: {
//     backgroundColor: "#f7d22d",
//     minHeight: 55,
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 5,
//   },

//   paymentButtonText: {
//     color: "#111",
//     fontSize: 18,
//     fontWeight: "900",
//   },

//   warningCard: {
//     backgroundColor: "#fff1f1",
//     margin: 14,
//     padding: 18,
//     borderRadius: 12,
//     borderLeftWidth: 5,
//     borderLeftColor: "#e53935",
//   },

//   warningTitle: {
//     color: "#e53935",
//     fontSize: 21,
//     fontWeight: "900",
//     marginBottom: 12,
//   },

//   warningText: {
//     color: "#555",
//     fontSize: 14,
//     lineHeight: 22,
//     marginBottom: 10,
//   },

//   contactNumber: {
//     color: "#d32f2f",
//     fontSize: 20,
//     fontWeight: "900",
//     marginTop: 5,
//   },

//   noteCard: {
//     margin: 14,
//     padding: 18,
//     backgroundColor: "#fff9e8",
//     borderRadius: 12,
//   },

//   noteTitle: {
//     color: "#d88900",
//     fontSize: 19,
//     fontWeight: "800",
//     marginBottom: 10,
//   },

//   noteText: {
//     color: "#555",
//     lineHeight: 22,
//     fontSize: 14,
//     marginBottom: 8,
//   },

//   contactCard: {
//     backgroundColor: "#173C42",
//     padding: 22,
//     marginTop: 5,
//   },

//   contactTitle: {
//     color: "#fff",
//     fontSize: 22,
//     fontWeight: "800",
//     marginBottom: 15,
//   },

//   contactLink: {
//     color: "#fff",
//     fontSize: 16,
//     marginBottom: 12,
//   },

//   footer: {
//     backgroundColor: "#102c31",
//     paddingVertical: 18,
//     alignItems: "center",
//   },

//   footerText: {
//     color: "#bbb",
//     fontSize: 13,
//     marginVertical: 2,
//   },
// });




import React, { useMemo, useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const BOOK_COST = 600;
const COURIER_COST = 150;
const MAX_QTY = 50;
const PHONE = "02071173733";
const EMAIL = "samatabhratrumandal@gmail.com";

const FIELDS = [
  { key: "name", label: "Full Name", msg: "Please enter your full name.", test: (v) => v.length > 1 },
  { key: "address", label: "Delivery Address", msg: "Please enter your delivery address.", test: (v) => v.length > 5 },
  { key: "city", label: "City", msg: "Please enter your city.", test: (v) => v.length > 0 },
  { key: "district", label: "District", msg: "Please enter your district.", test: (v) => v.length > 0 },
  { key: "state", label: "State", msg: "Please enter your state.", test: (v) => v.length > 0 },
  { key: "pincode", label: "Pincode", msg: "Enter a valid 6-digit pincode.", test: (v) => /^\d{6}$/.test(v) },
  { key: "email", label: "Email ID", msg: "Enter a valid email address.", test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
  { key: "phone", label: "Phone", msg: "Enter a valid 10-digit mobile number.", test: (v) => /^\d{10}$/.test(v) },
];

export default function App() {
  const [form, setForm] = useState({
    name: "", address: "", city: "", district: "",
    state: "", pincode: "", email: "", phone: "",
  });
  const [errors, setErrors] = useState({});
  const [quantity, setQuantity] = useState(1);

  const scrollRef = useRef(null);
  const formY = useRef(0);
  const fieldY = useRef({});
  const inputRefs = useRef({});

  const total = useMemo(() => (BOOK_COST + COURIER_COST) * quantity, [quantity]);

  const setValue = (key, value) => {
    const clean = key === "pincode" || key === "phone" ? value.replace(/\D/g, "") : value;
    setForm((f) => ({ ...f, [key]: clean }));
    if (errors[key]) validateOne(key, clean);
  };

  const validateOne = (key, value = form[key]) => {
    const rule = FIELDS.find((f) => f.key === key);
    const ok = rule.test(value.trim());
    setErrors((e) => ({ ...e, [key]: ok ? "" : rule.msg }));
    return ok;
  };

  const focusNext = (key) => {
    const i = FIELDS.findIndex((f) => f.key === key);
    const next = FIELDS[i + 1];
    if (next) inputRefs.current[next.key]?.focus();
  };

  const handlePayment = () => {
    let firstBad = null;
    FIELDS.forEach((f) => {
      if (!validateOne(f.key) && !firstBad) firstBad = f.key;
    });

    if (firstBad) {
      const y = formY.current + (fieldY.current[firstBad] || 0) - 80;
      scrollRef.current?.scrollTo({ y: Math.max(0, y), animated: true });
      inputRefs.current[firstBad]?.focus();
      return;
    }

    Alert.alert(
      "Proceed to Payment",
      `Order amount: ₹${total}\n\nContinue to Razorpay payment?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Continue",
          onPress: () => {
            // TODO: call your backend to create a Razorpay order,
            // then open Razorpay Checkout with the returned order id.
            Alert.alert("Payment Integration", "Connect this to your backend Razorpay order API.");
          },
        },
      ]
    );
  };

  const openPhone = () => Linking.openURL(`tel:${PHONE}`);
  const openEmail = () =>
    Linking.openURL(`mailto:${EMAIL}?subject=${encodeURIComponent("वधु-वर सूची २०२६")}`);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#173C42" />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          ref={scrollRef}
          style={styles.flex}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode={Platform.OS === "ios" ? "interactive" : "on-drag"}
        >
          <View style={styles.page}>
            {/* HEADER */}
            <View style={styles.header}>
              <View style={styles.logoBox}>
                <Text style={styles.logoText}>समता</Text>
              </View>
              <View style={styles.flex}>
                <Text style={styles.brand}>Samata Bhratru Mandal</Text>
                <Text style={styles.brandMarathi}>समता भ्रातृ मंडळ</Text>
              </View>
            </View>

            {/* TITLE */}
            <View style={styles.titleSection}>
              <Text style={styles.mainTitle}>समता भ्रातृ मंडळ</Text>
              <Text style={styles.subTitle}>(वधु-वर सूची २०२६)</Text>
              <View style={styles.yellowLine} />
            </View>

            {/* INFO */}
            <View style={styles.card}>
              <Text style={styles.orangeTitle}>वधु-वर सूची २०२६</Text>
              <Text style={styles.boldText}>
                वधु-वर सूची २०२६ पुस्तक आत्ता आपण आपल्या घरपोच मागवा.
              </Text>

              <Text style={styles.sectionTitle}>उपक्रमाबद्दल माहिती</Text>
              <Text style={styles.paragraph}>
                समता भ्रातृ मंडळ (पिंपरी चिंचवड, पुणे) दरवर्षी प्रमाणे ह्या वर्षीही वधु-वर पुस्तक
                प्रिंट करणार आहे. ह्या पुस्तकात जवळ जवळ १५०० पेक्षा जास्त नावे दरवर्षी असतात.
              </Text>
              <Text style={styles.paragraph}>
                अश्या ह्या बिनचूक सूची चे वितरण दरवर्षी मेळावाच्या १० दिवस अगोदर मंडळाच्या
                अधिकृत नोंदणी व सूची विक्री केंद्र ह्यांच्याकडे करण्यात येते.
              </Text>
              <Text style={styles.paragraph}>
                म्हणून मंडळ हे दर वर्षी वधु-वर सूची पुस्तक आपल्या घरी Courier ने मागविण्यासाठीची
                सुविधा नागरिकांस देण्याची उपाययोजना करत असते.
              </Text>
              <Text style={styles.paragraph}>
                ह्या वर्षीही मंडळाची उत्तम अशी रंगीत प्रिंट असलेली व बिनचूक सूची आपण ऍडव्हान्स
                बुकिंग करून व ऑनलाईन पैसे भरून आपल्या घरपोच मागवू शकता.
              </Text>
              <Text style={[styles.paragraph, styles.lastParagraph]}>
                त्यासाठी पुढील दिलेला फॉर्म व्यवस्थित रित्या भरून ऑनलाइन payment करावे.
              </Text>
            </View>

            {/* FEE */}
            <View style={styles.card}>
              <Text style={styles.feeTitle}>Fee Breakup</Text>

              <View style={styles.feeRow}>
                <Text style={styles.feeLabel}>Suchi Cost</Text>
                <Text style={styles.feeValue}>₹{BOOK_COST}</Text>
              </View>
              <View style={styles.feeRow}>
                <Text style={styles.feeLabel}>Courier (DTDC)</Text>
                <Text style={styles.feeValue}>₹{COURIER_COST}</Text>
              </View>
              <Text style={styles.feeNote}>Fees include transaction charges + 18% GST</Text>

              <View style={styles.quantityContainer}>
                <Text style={styles.quantityTitle}>Quantity</Text>
                <View style={styles.quantityBox}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    accessibilityLabel="Decrease quantity"
                    onPress={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    <Text style={styles.quantityButtonText}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityNumber}>{quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    accessibilityLabel="Increase quantity"
                    onPress={() => setQuantity((q) => Math.min(MAX_QTY, q + 1))}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total Amount</Text>
                <Text style={styles.totalValue}>₹{total}</Text>
              </View>
            </View>

            {/* FORM */}
            <View
              style={styles.card}
              onLayout={(e) => (formY.current = e.nativeEvent.layout.y)}
            >
              <Text style={styles.formTitle}>Delivery Details</Text>
              <Text style={styles.formSubtitle}>Please enter your details</Text>

              {FIELDS.map((f, i) => {
                const isLast = i === FIELDS.length - 1;
                const common = {
                  label: f.label,
                  value: form[f.key],
                  error: errors[f.key],
                  onLayout: (e) => (fieldY.current[f.key] = e.nativeEvent.layout.y),
                  inputRef: (r) => (inputRefs.current[f.key] = r),
                  onChangeText: (v) => setValue(f.key, v),
                  onBlur: () => validateOne(f.key),
                  onSubmitEditing: () => (isLast ? handlePayment() : focusNext(f.key)),
                  returnKeyType: isLast ? "done" : "next",
                };

                switch (f.key) {
                  case "address":
                    return <Field key={f.key} {...common} multiline autoComplete="street-address" />;
                  case "pincode":
                    return <Field key={f.key} {...common} keyboardType="number-pad" maxLength={6} autoComplete="postal-code" />;
                  case "email":
                    return <Field key={f.key} {...common} keyboardType="email-address" autoCapitalize="none" autoComplete="email" />;
                  case "phone":
                    return <Field key={f.key} {...common} keyboardType="number-pad" maxLength={10} prefix="IN +91" autoComplete="tel" placeholder="Mobile Number" />;
                  case "name":
                    return <Field key={f.key} {...common} autoCapitalize="words" autoComplete="name" />;
                  default:
                    return <Field key={f.key} {...common} autoCapitalize="words" />;
                }
              })}

              <TouchableOpacity style={styles.paymentButton} onPress={handlePayment} activeOpacity={0.8}>
                <Text style={styles.paymentButtonText}>Pay ₹{total}</Text>
              </TouchableOpacity>
            </View>

            {/* WARNING */}
            <View style={styles.warningCard}>
              <Text style={styles.warningTitle}>⚠ चेतावणी</Text>
              <Text style={styles.warningText}>
                कृपया नोंद करावी कि समता भ्रातृ मंडळ (पिंपरी चिंचवड, पुणे) ह्यांची सूची
                कुठल्याही दुसऱ्या वेबसाईटवर उपलब्ध नाही.
              </Text>
              <Text style={styles.warningText}>
                मंडळ किंवा कोणताही मंडळाचा कार्यकर्ता ह्यास सूचीचे पैसे त्यांच्या स्वतःच्या
                account वर अथवा GPay, PhonePe किंवा इतर कुठल्याही माध्यमातून स्वीकारण्याची
                अनुमती मंडळाने दिलेली नाही.
              </Text>
              <Text style={styles.warningText}>
                असे काही आपणास निदर्शनास आल्यास त्वरित खालील नंबरवर संपर्क करावा.
              </Text>
              <TouchableOpacity onPress={openPhone} style={styles.tapTarget}>
                <Text style={styles.contactNumber}>{PHONE}</Text>
              </TouchableOpacity>
            </View>

            {/* NOTE */}
            <View style={styles.noteCard}>
              <Text style={styles.noteTitle}>Important Note</Text>
              <Text style={styles.noteText}>
                In case courier company service coverage is not covered in your area by DTDC then
                suchi will be returned to us.
              </Text>
              <Text style={styles.noteText}>
                Before placing the order please check DTDC service coverage.
              </Text>
              <Text style={styles.noteText}>
                Order placed once cannot be refunded in any case. Please cooperate with us.
              </Text>
            </View>

            {/* CONTACT */}
            <View style={styles.contactCard}>
              <Text style={styles.contactTitle}>Contact Us</Text>
              <TouchableOpacity onPress={openPhone} style={styles.tapTarget}>
                <Text style={styles.contactLink}>📞 {PHONE}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={openEmail} style={styles.tapTarget}>
                <Text style={styles.contactLink}>✉ {EMAIL}</Text>
              </TouchableOpacity>
            </View>

            {/* FOOTER */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>© 2026 Samata Bhratru Mandal</Text>
              <Text style={styles.footerText}>Pimpri Chinchwad, Pune</Text>
            </View>
          </View>
        </ScrollView>

        {/* STICKY PAY BAR */}
        <View style={styles.payBar}>
          <View style={styles.payBarInner}>
            <View>
              <Text style={styles.payBarLabel}>Total</Text>
              <Text style={styles.payBarTotal}>₹{total}</Text>
            </View>
            <TouchableOpacity style={styles.payBarButton} onPress={handlePayment} activeOpacity={0.8}>
              <Text style={styles.paymentButtonText}>Pay now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/* FIELD COMPONENT */

function Field({
  label,
  value,
  error,
  onChangeText,
  onBlur,
  onSubmitEditing,
  onLayout,
  inputRef,
  returnKeyType,
  multiline = false,
  keyboardType = "default",
  maxLength,
  autoCapitalize = "sentences",
  autoComplete,
  prefix,
  placeholder,
}) {
  return (
    <View style={styles.inputGroup} onLayout={onLayout}>
      <Text style={styles.inputLabel}>
        {label} <Text style={styles.required}>*</Text>
      </Text>

      <View style={styles.inputRow}>
        {prefix ? (
          <View style={styles.prefix}>
            <Text style={styles.prefixText}>{prefix}</Text>
          </View>
        ) : null}

        <TextInput
          ref={inputRef}
          style={[
            styles.input,
            prefix && styles.inputWithPrefix,
            multiline && styles.textArea,
            !!error && styles.inputError,
          ]}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={multiline ? "default" : returnKeyType}
          blurOnSubmit={!multiline}
          multiline={multiline}
          keyboardType={keyboardType}
          maxLength={maxLength}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          placeholder={placeholder || `Enter ${label}`}
          placeholderTextColor="#999"
        />
      </View>

      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

/* STYLES */

const shadow = Platform.select({
  ios: { shadowColor: "#000", shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 2 } },
  android: { elevation: 2 },
});

const styles = StyleSheet.create({
  flex: { flex: 1 },
  safeArea: {
    flex: 1,
    backgroundColor: "#173C42",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
  },
  scrollContent: { backgroundColor: "#f4f6f8", flexGrow: 1 },
  page: { width: "100%", maxWidth: 640, alignSelf: "center", backgroundColor: "#f4f6f8" },
  tapTarget: { minHeight: 44, justifyContent: "center" },

  header: {
    backgroundColor: "#173C42",
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  logoBox: {
    width: 52, height: 52, borderRadius: 10, backgroundColor: "#fff",
    justifyContent: "center", alignItems: "center", marginRight: 12,
  },
  logoText: { color: "#1d7a5b", fontSize: 13, fontWeight: "800" },
  brand: { color: "#fff", fontSize: 18, fontWeight: "700" },
  brandMarathi: { color: "#e6e6e6", fontSize: 14, marginTop: 2 },

  titleSection: { backgroundColor: "#fff", paddingHorizontal: 16, paddingTop: 22, paddingBottom: 18 },
  mainTitle: { color: "#102e67", fontSize: 26, lineHeight: 36, fontWeight: "800" },
  subTitle: { color: "#102e67", fontSize: 19, lineHeight: 28, fontWeight: "700", marginTop: 2 },
  yellowLine: { width: 40, height: 5, backgroundColor: "#f5d334", marginTop: 14, borderRadius: 3 },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 12,
    marginTop: 12,
    padding: 16,
    borderRadius: 14,
    ...shadow,
  },
  orangeTitle: { color: "#e07a00", fontSize: 22, lineHeight: 32, fontWeight: "800", marginBottom: 10 },
  boldText: { color: "#102e67", fontSize: 16, fontWeight: "700", lineHeight: 26, marginBottom: 16 },
  sectionTitle: { color: "#e07a00", fontSize: 20, lineHeight: 30, fontWeight: "800", marginBottom: 8 },
  paragraph: { color: "#1f2b45", fontSize: 15, lineHeight: 25, marginBottom: 12 },
  lastParagraph: { marginBottom: 0 },

  feeTitle: { fontSize: 21, fontWeight: "800", color: "#102e67", marginBottom: 10 },
  feeRow: {
    flexDirection: "row", justifyContent: "space-between", paddingVertical: 11,
    borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#ccd2dc",
  },
  feeLabel: { fontSize: 16, color: "#555" },
  feeValue: { fontSize: 17, fontWeight: "700", color: "#102e67" },
  feeNote: { color: "#6b7385", fontSize: 13, marginTop: 10 },

  quantityContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 18 },
  quantityTitle: { fontSize: 16, fontWeight: "700", color: "#333" },
  quantityBox: {
    flexDirection: "row", alignItems: "center", borderWidth: 1,
    borderColor: "#ddd", borderRadius: 10, overflow: "hidden",
  },
  quantityButton: { width: 48, height: 48, backgroundColor: "#fff6ce", justifyContent: "center", alignItems: "center" },
  quantityButtonText: { fontSize: 24, fontWeight: "700", color: "#111" },
  quantityNumber: { width: 48, textAlign: "center", fontSize: 18, fontWeight: "700", color: "#111" },

  totalRow: {
    marginTop: 16, paddingTop: 14, borderTopWidth: 2, borderTopColor: "#eee",
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
  },
  totalLabel: { fontSize: 18, fontWeight: "800", color: "#102e67" },
  totalValue: { fontSize: 26, fontWeight: "900", color: "#e64b2e" },

  formTitle: { fontSize: 22, fontWeight: "800", color: "#102e67" },
  formSubtitle: { color: "#6b7385", marginTop: 2, marginBottom: 14 },

  inputGroup: { marginBottom: 14 },
  inputLabel: { color: "#42506a", fontSize: 14, marginBottom: 6 },
  required: { color: "#e53935" },
  inputRow: { flexDirection: "row" },
  input: {
    flex: 1, minHeight: 50, borderWidth: 1.5, borderColor: "#d9d9d9", borderRadius: 10,
    paddingHorizontal: 14, color: "#222", fontSize: 16, backgroundColor: "#fff",
  },
  inputWithPrefix: { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
  inputError: { borderColor: "#e53935" },
  textArea: { minHeight: 92, textAlignVertical: "top", paddingTop: 12 },
  prefix: {
    minHeight: 50, paddingHorizontal: 12, justifyContent: "center", backgroundColor: "#f4f6f8",
    borderWidth: 1.5, borderRightWidth: 0, borderColor: "#d9d9d9",
    borderTopLeftRadius: 10, borderBottomLeftRadius: 10,
  },
  prefixText: { color: "#333", fontSize: 14 },
  errorText: { color: "#e53935", fontSize: 13, marginTop: 4 },

  paymentButton: {
    backgroundColor: "#f7d22d", minHeight: 56, borderRadius: 12,
    justifyContent: "center", alignItems: "center", marginTop: 8,
  },
  paymentButtonText: { color: "#111", fontSize: 18, fontWeight: "800" },

  warningCard: {
    backgroundColor: "#fff1f1", marginHorizontal: 12, marginTop: 12, padding: 16,
    borderRadius: 14, borderLeftWidth: 5, borderLeftColor: "#e53935",
  },
  warningTitle: { color: "#e53935", fontSize: 20, fontWeight: "800", marginBottom: 10 },
  warningText: { color: "#444", fontSize: 14, lineHeight: 23, marginBottom: 10 },
  contactNumber: { color: "#d32f2f", fontSize: 22, fontWeight: "800" },

  noteCard: { marginHorizontal: 12, marginTop: 12, padding: 16, backgroundColor: "#fff9e8", borderRadius: 14 },
  noteTitle: { color: "#b87500", fontSize: 18, fontWeight: "800", marginBottom: 8 },
  noteText: { color: "#555", lineHeight: 22, fontSize: 14, marginBottom: 8 },

  contactCard: { backgroundColor: "#173C42", padding: 20, marginTop: 12 },
  contactTitle: { color: "#fff", fontSize: 21, fontWeight: "800", marginBottom: 8 },
  contactLink: { color: "#fff", fontSize: 16 },

  footer: { backgroundColor: "#102c31", paddingVertical: 16, alignItems: "center" },
  footerText: { color: "#bbb", fontSize: 13, marginVertical: 2 },

  payBar: {
    backgroundColor: "#fff",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#ccd2dc",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  payBarInner: {
    width: "100%", maxWidth: 640, alignSelf: "center",
    flexDirection: "row", alignItems: "center",
  },
  payBarLabel: { color: "#6b7385", fontSize: 12 },
  payBarTotal: { color: "#e64b2e", fontSize: 22, fontWeight: "800" },
  payBarButton: {
    flex: 1, marginLeft: 14, minHeight: 50, borderRadius: 12,
    backgroundColor: "#f7d22d", justifyContent: "center", alignItems: "center",
  },
});