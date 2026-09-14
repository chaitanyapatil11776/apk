// // import apiClient from "./apiClient";

// // export const DEFAULT_MANDALS = [
// //   { value: 1, label: "समता भ्रातृमंडळ पिंपरी चिंचवड" },
// //   { value: 2, label: "लेवा पाटीदार भ्रातृ मंडळ वाकड" },
// //   { value: 3, label: "जळगाव जिल्हा लेवा समाज मंडळ निगडी" },
// //   { value: 4, label: "श्री संत आदिशक्ती मुक्ताई देवस्थान दिघी" },
// //   { value: 5, label: "लेवा पाटीदार मित्र मंडळ सांगवी" },
// //   { value: 6, label: "लेवा उत्कर्ष मंडळ लोणावळा" },
// //   { value: 7, label: "एकता भ्रातृ मंडळ तळेगाव-दाभाडे" },
// //   { value: 8, label: "पिंपरी चिंचवड लेवा पाटीदार संघ (भ्रातृ मंडळ)" },
// //   { value: 9, label: "बहिणाबाई महिला मंडळ निगडी-प्राधिकरण" },
// //   { value: 10, label: "लेवा संगिनी मंच" },
// //   { value: 11, label: "लेवा शक्ती सखी मंच" },
// //   { value: 12, label: "LCCIA PCMC" },
// // ];

// // const accountApi = {
// //   // ==========================================
// //   // 1. REGISTER USER
// //   // ==========================================
// //   registerUser: async (data) => {
// //     try {
// //       console.log("================================");
// //       console.log("REGISTER USER API");
// //       console.log("REQUEST DATA:", JSON.stringify(data, null, 2));

// //       const response = await apiClient.post("/api/account/RegisterUser", data);

// //       console.log("REGISTER STATUS:", response.status);
// //       console.log("REGISTER RESPONSE:", response.data);
// //       console.log("================================");

// //       return response.data;
// //     } catch (error) {
// //       console.log("REGISTER API ERROR");
// //       console.log("STATUS:", error.response?.status);
// //       console.log("DATA:", error.response?.data);
// //       console.log("MESSAGE:", error.message);
// //       throw error;
// //     }
// //   },

// //   // ==========================================
// //   // 2. LOGIN USER
// //   // ==========================================
// //   loginUser: async (userLoginId, password) => {
// //     try {
// //       const data = {
// //         UserLoginId: (userLoginId || "").trim(),
// //         UserPassword: (password || "").trim(),
// //         DeviceId: "MOBILE_APP",
// //         DeviceInfo: "React Native App",
// //         DeviceFingerprint: "mobile_client",
// //       };

// //       console.log("================================");
// //       console.log("LOGIN USER API");
// //       console.log("REQUEST DATA:", JSON.stringify({ ...data, UserPassword: "***" }, null, 2));

// //       const response = await apiClient.post("/api/account/login", data);

// //       console.log("LOGIN STATUS:", response.status);
// //       console.log("LOGIN RESPONSE:", response.data);
// //       console.log("================================");

// //       return response.data;
// //     } catch (error) {
// //       console.log("LOGIN API ERROR");
// //       console.log("STATUS:", error.response?.status);
// //       console.log("DATA:", error.response?.data);
// //       console.log("MESSAGE:", error.message);
// //       throw error;
// //     }
// //   },

// //   // ==========================================
// //   // 3. CHECK EMAIL
// //   // ==========================================
// //   checkEmailExists: async (email, mobile) => {
// //     try {
// //       const data = {
// //         emailID: (email || "").trim(),
// //         primaryMobileNumber: (mobile || "").trim(),
// //       };

// //       console.log("================================");
// //       console.log("CHECK EMAIL API");
// //       console.log("REQUEST DATA:", JSON.stringify(data, null, 2));

// //       const response = await apiClient.post("/api/account/IsEmailIDExists", data);

// //       console.log("EMAIL CHECK STATUS:", response.status);
// //       console.log("EMAIL CHECK RESPONSE:", response.data);
// //       console.log("================================");

// //       return response.data;
// //     } catch (error) {
// //       console.log("EMAIL CHECK API ERROR");
// //       console.log("STATUS:", error.response?.status);
// //       console.log("DATA:", error.response?.data);
// //       console.log("MESSAGE:", error.message);
// //       throw error;
// //     }
// //   },

// //   // ==========================================
// //   // 4. CHECK MOBILE
// //   // ==========================================
// //   checkMobileExists: async (email, mobile) => {
// //     try {
// //       const data = {
// //         emailID: (email || "").trim(),
// //         primaryMobileNumber: (mobile || "").trim(),
// //       };

// //       console.log("================================");
// //       console.log("CHECK MOBILE API");
// //       console.log("REQUEST DATA:", JSON.stringify(data, null, 2));

// //       const response = await apiClient.post(
// //         "/api/account/IsPrimaryMobileNumberExists",
// //         data
// //       );

// //       console.log("MOBILE CHECK STATUS:", response.status);
// //       console.log("MOBILE CHECK RESPONSE:", response.data);
// //       console.log("================================");

// //       return response.data;
// //     } catch (error) {
// //       console.log("MOBILE CHECK API ERROR");
// //       console.log("STATUS:", error.response?.status);
// //       console.log("DATA:", error.response?.data);
// //       console.log("MESSAGE:", error.message);
// //       throw error;
// //     }
// //   },

// //   // ==========================================
// //   // 5. SEND MOBILE OTP
// //   // ==========================================
// //   sendMobileOtp: async (mobile, firstName, nickname) => {
// //     try {
// //       const data = {
// //         MobileNo: (mobile || "").trim(),
// //         FirstName: (firstName || "Candidate").trim(),
// //         Nickname: (nickname || "").trim(),
// //       };

// //       console.log("================================");
// //       console.log("SEND MOBILE OTP");
// //       console.log("REQUEST DATA:", JSON.stringify(data, null, 2));

// //       const response = await apiClient.post(
// //         "/api/account/send-mobile-otp",
// //         data
// //       );

// //       console.log("SEND MOBILE OTP STATUS:", response.status);
// //       console.log("SEND MOBILE OTP RESPONSE:", response.data);
// //       console.log("================================");

// //       return response.data;
// //     } catch (error) {
// //       console.log("SEND MOBILE OTP ERROR");
// //       console.log("STATUS:", error.response?.status);
// //       console.log("DATA:", error.response?.data);
// //       console.log("MESSAGE:", error.message);
// //       throw error;
// //     }
// //   },

// //   // ==========================================
// //   // 6. VERIFY MOBILE OTP
// //   // Note: Swagger schema specifies MobileNo, Otp, UserID
// //   // ==========================================
// //   verifyMobileOtp: async (mobile, otp, userId = 0) => {
// //     try {
// //       const data = {
// //         MobileNo: (mobile || "").trim(),
// //         Otp: (otp || "").trim(),
// //         UserID: userId ? Number(userId) : 0,
// //       };

// //       console.log("================================");
// //       console.log("VERIFY MOBILE OTP");
// //       console.log("REQUEST DATA:", JSON.stringify(data, null, 2));

// //       const response = await apiClient.post(
// //         "/api/account/verify-mobile-otp",
// //         data
// //       );

// //       console.log("VERIFY MOBILE OTP STATUS:", response.status);
// //       console.log("VERIFY MOBILE OTP RESPONSE:", response.data);
// //       console.log("================================");

// //       return response.data;
// //     } catch (error) {
// //       console.log("VERIFY MOBILE OTP ERROR");
// //       console.log("STATUS:", error.response?.status);
// //       console.log("DATA:", error.response?.data);
// //       console.log("MESSAGE:", error.message);
// //       throw error;
// //     }
// //   },

// //   // ==========================================
// //   // 7. SEND EMAIL OTP
// //   // ==========================================
// //   sendEmailOtp: async (email, firstName, nickname) => {
// //     try {
// //       const data = {
// //         Email: (email || "").trim(),
// //         FirstName: (firstName || "Candidate").trim(),
// //         Firstname: (firstName || "Candidate").trim(),
// //         Nickname: (nickname || "").trim(),
// //       };

// //       console.log("================================");
// //       console.log("SEND EMAIL OTP");
// //       console.log("REQUEST DATA:", JSON.stringify(data, null, 2));

// //       const response = await apiClient.post(
// //         "/api/account/send-email-otp",
// //         data
// //       );

// //       console.log("SEND EMAIL OTP STATUS:", response.status);
// //       console.log("SEND EMAIL OTP RESPONSE:", response.data);
// //       console.log("================================");

// //       return response.data;
// //     } catch (error) {
// //       console.log("SEND EMAIL OTP ERROR");
// //       console.log("STATUS:", error.response?.status);
// //       console.log("DATA:", error.response?.data);
// //       console.log("MESSAGE:", error.message);
// //       throw error;
// //     }
// //   },

// //   // ==========================================
// //   // 8. VERIFY EMAIL OTP
// //   // ==========================================
// //   verifyEmailOtp: async (email, otp) => {
// //     try {
// //       const data = {
// //         Email: (email || "").trim(),
// //         OTP: (otp || "").trim(),
// //         Otp: (otp || "").trim(),
// //       };

// //       console.log("================================");
// //       console.log("VERIFY EMAIL OTP");
// //       console.log("REQUEST DATA:", JSON.stringify(data, null, 2));

// //       const response = await apiClient.post(
// //         "/api/account/verify-email-otp",
// //         data
// //       );

// //       console.log("VERIFY EMAIL OTP STATUS:", response.status);
// //       console.log("VERIFY EMAIL OTP RESPONSE:", response.data);
// //       console.log("================================");

// //       return response.data;
// //     } catch (error) {
// //       console.log("VERIFY EMAIL OTP ERROR");
// //       console.log("STATUS:", error.response?.status);
// //       console.log("DATA:", error.response?.data);
// //       console.log("MESSAGE:", error.message);
// //       throw error;
// //     }
// //   },

// //   // ==========================================
// //   // 9. GET MANDALS LIST
// //   // ==========================================
// //   getMandalList: async () => {
// //     try {
// //       console.log("================================");
// //       console.log("GET MANDALS LIST");
// //       const response = await apiClient.get(
// //         "/api/registration/GetCandidateRegistrationMasterDefault?TableName=Mandal"
// //       );

// //       if (response.data && response.data.Success && Array.isArray(response.data.Data)) {
// //         return response.data.Data.map((item, idx) => ({
// //           value: idx + 1,
// //           label: item.DataTextField || item.DataValueField || `Mandal ${idx + 1}`,
// //           name: item.DataValueField || item.DataTextField || `Mandal ${idx + 1}`,
// //         }));
// //       }

// //       return DEFAULT_MANDALS;
// //     } catch (error) {
// //       console.log("GET MANDALS API ERROR, FALLING BACK TO DEFAULT LIST:", error.message);
// //       return DEFAULT_MANDALS;
// //     }
// //   },
// // };

// // export default accountApi;















// // import apiClient from "./apiClient";

// // export const DEFAULT_MANDALS = [
// //   { value: 1, label: "समता भ्रातृमंडळ पिंपरी चिंचवड" },
// //   { value: 2, label: "लेवा पाटीदार भ्रातृ मंडळ वाकड" },
// //   { value: 3, label: "जळगाव जिल्हा लेवा समाज मंडळ निगडी" },
// //   { value: 4, label: "श्री संत आदिशक्ती मुक्ताई देवस्थान दिघी" },
// //   { value: 5, label: "लेवा पाटीदार मित्र मंडळ सांगवी" },
// //   { value: 6, label: "लेवा उत्कर्ष मंडळ लोणावळा" },
// //   { value: 7, label: "एकता भ्रातृ मंडळ तळेगाव-दाभाडे" },
// //   {
// //     value: 8,
// //     label: "पिंपरी चिंचवड लेवा पाटीदार संघ (भ्रातृ मंडळ)",
// //   },
// //   {
// //     value: 9,
// //     label: "बहिणाबाई महिला मंडळ निगडी-प्राधिकरण",
// //   },
// //   { value: 10, label: "लेवा संगिनी मंच" },
// //   { value: 11, label: "लेवा शक्ती सखी मंच" },
// //   { value: 12, label: "LCCIA PCMC" },
// // ];

// // const accountApi = {
// //   // =====================================================
// //   // GET MANDAL LIST
// //   // =====================================================

// //   getMandalList: async () => {
// //     try {
// //       const response = await apiClient.get(
// //         "/api/registration/GetCandidateRegistrationMasterDefault?TableName=Mandal"
// //       );

// //       console.log("MANDAL RESPONSE:", response.data);

// //       if (
// //         response.data?.Success === true &&
// //         Array.isArray(response.data?.Data)
// //       ) {
// //         return response.data.Data.map((item, index) => ({
// //           value: index + 1,
// //           label:
// //             item.DataTextField ||
// //             item.DataValueField ||
// //             `Mandal ${index + 1}`,
// //         }));
// //       }

// //       return DEFAULT_MANDALS;
// //     } catch (error) {
// //       console.log(
// //         "MANDAL ERROR:",
// //         error.response?.data || error.message
// //       );

// //       return DEFAULT_MANDALS;
// //     }
// //   },

// //   // =====================================================
// //   // CHECK MOBILE EXISTS
// //   // =====================================================

// //   checkMobileExists: async (email, mobile) => {
// //     try {
// //       const payload = {
// //         emailID: (email || "").trim().toLowerCase(),
// //         primaryMobileNumber: (mobile || "").trim(),
// //       };

// //       console.log("CHECK MOBILE PAYLOAD:", payload);

// //       const response = await apiClient.post(
// //         "/api/account/IsPrimaryMobileNumberExists",
// //         payload
// //       );

// //       console.log(
// //         "CHECK MOBILE RESPONSE:",
// //         response.data
// //       );

// //       return response.data;
// //     } catch (error) {
// //       console.log(
// //         "CHECK MOBILE ERROR:",
// //         error.response?.data || error.message
// //       );

// //       throw error;
// //     }
// //   },

// //   // =====================================================
// //   // CHECK EMAIL EXISTS
// //   // =====================================================

// //   checkEmailExists: async (email, mobile) => {
// //     try {
// //       const payload = {
// //         emailID: (email || "").trim().toLowerCase(),
// //         primaryMobileNumber: (mobile || "").trim(),
// //       };

// //       console.log("CHECK EMAIL PAYLOAD:", payload);

// //       const response = await apiClient.post(
// //         "/api/account/IsEmailIDExists",
// //         payload
// //       );

// //       console.log(
// //         "CHECK EMAIL RESPONSE:",
// //         response.data
// //       );

// //       return response.data;
// //     } catch (error) {
// //       console.log(
// //         "CHECK EMAIL ERROR:",
// //         error.response?.data || error.message
// //       );

// //       throw error;
// //     }
// //   },

// //   // =====================================================
// //   // SEND MOBILE OTP
// //   // =====================================================

// //   sendMobileOtp: async (
// //     mobile,
// //     firstName,
// //     lastName
// //   ) => {
// //     try {
// //       const payload = {
// //         FirstName: (firstName || "").trim(),
// //         LastName: (lastName || "").trim(),
// //         MobileNo: (mobile || "").trim(),
// //       };

// //       console.log(
// //         "SEND MOBILE OTP PAYLOAD:",
// //         payload
// //       );

// //       const response = await apiClient.post(
// //         "/api/account/send-mobile-otp",
// //         payload
// //       );

// //       console.log(
// //         "SEND MOBILE OTP RESPONSE:",
// //         response.data
// //       );

// //       return response.data;
// //     } catch (error) {
// //       console.log(
// //         "SEND MOBILE OTP ERROR:",
// //         error.response?.data || error.message
// //       );

// //       throw error;
// //     }
// //   },

// //   // =====================================================
// //   // VERIFY MOBILE OTP
// //   // =====================================================

// //   verifyMobileOtp: async (
// //     mobile,
// //     otp,
// //     candidateId = 0
// //   ) => {
// //     try {
// //       const payload = {
// //         MobileNo: (mobile || "").trim(),
// //         Otp: (otp || "").trim(),
// //         CandidateId: Number(candidateId) || 0,
// //       };

// //       console.log(
// //         "VERIFY MOBILE OTP PAYLOAD:",
// //         payload
// //       );

// //       const response = await apiClient.post(
// //         "/api/account/verify-mobile-otp",
// //         payload
// //       );

// //       console.log(
// //         "VERIFY MOBILE OTP RESPONSE:",
// //         response.data
// //       );

// //       return response.data;
// //     } catch (error) {
// //       console.log(
// //         "VERIFY MOBILE OTP ERROR:",
// //         error.response?.data || error.message
// //       );

// //       throw error;
// //     }
// //   },

// //   // =====================================================
// //   // VALIDATE EMAIL
// //   // =====================================================

// //   validateEmail: async (email) => {
// //     try {
// //       const cleanEmail =
// //         (email || "").trim().toLowerCase();

// //       const payload = {
// //         Email: cleanEmail,
// //       };

// //       console.log("================================");
// //       console.log("VALIDATE EMAIL API");
// //       console.log("EMAIL:", cleanEmail);
// //       console.log(
// //         "VALIDATE EMAIL PAYLOAD:",
// //         payload
// //       );

// //       const response = await apiClient.post(
// //         "/api/account/validate-email",
// //         payload
// //       );

// //       console.log(
// //         "VALIDATE EMAIL STATUS:",
// //         response.status
// //       );

// //       console.log(
// //         "VALIDATE EMAIL RESPONSE:",
// //         response.data
// //       );

// //       console.log("================================");

// //       return response.data;
// //     } catch (error) {
// //       console.log(
// //         "VALIDATE EMAIL ERROR:",
// //         error.response?.data || error.message
// //       );

// //       throw error;
// //     }
// //   },

// //   // =====================================================
// //   // REGISTER USER
// //   // =====================================================

// //   registerUser: async (payload) => {
// //     try {
// //       console.log("================================");
// //       console.log("REGISTER USER PAYLOAD:");
// //       console.log(
// //         JSON.stringify(payload, null, 2)
// //       );

// //       const response = await apiClient.post(
// //         "/api/account/RegisterUser",
// //         payload
// //       );

// //       console.log(
// //         "REGISTER STATUS:",
// //         response.status
// //       );

// //       console.log(
// //         "REGISTER RESPONSE:",
// //         response.data
// //       );

// //       console.log("================================");

// //       return response.data;
// //     } catch (error) {
// //       console.log(
// //         "REGISTER USER ERROR:",
// //         error.response?.data || error.message
// //       );

// //       throw error;
// //     }
// //   },
// // };

// // export default accountApi;













// //new 
// import apiClient, {
//   setAuthToken,
//   setAuthCookies,
//   setAuthUserId,
//   clearAuth,
//   getDeviceId,
// } from "./apiClient";
// import { Platform } from "react-native";

// export const DEFAULT_MANDALS = [
//   { value: 1, label: "मध्यवर्ती उपनगर मंडळ" },
//   { value: 2, label: "ठाणे जिल्हा मंडळ" },
//   { value: 3, label: "कल्याण मंडळ" },
//   { value: 4, label: "नवी मुंबई मंडळ" },
//   { value: 5, label: "पुणे मंडळ" },
//   { value: 6, label: "नाशिक मंडळ" },
//   { value: 7, label: "जळगाव मंडळ" },
//   { value: 8, label: "धुळे मंडळ" },
//   { value: 9, label: "नंदुरबार मंडळ" },
//   { value: 10, label: "औरंगाबाद मंडळ" },
//   { value: 11, label: "नागपूर मंडळ" },
//   { value: 12, label: "LCCIA PCMC" },
// ];

// const accountApi = {
//   // =========================================================================
//   // 1. COMPLETE 3-STEP LOGIN PIPELINE
//   // =========================================================================
//   loginUser: async (userLoginId, password) => {
//     try {
//       const cleanId = (userLoginId || "").trim();
//       const cleanPass = (password || "").trim();
//       const deviceId = getDeviceId();

//       console.log("-----------------------------------------");
//       console.log("STEP 1: Calling /api/account/login...");
//       const loginPayload = {
//         UserLoginId: cleanId,
//         UserPassword: cleanPass,
//         Password: cleanPass,
//         DeviceId: deviceId,
//         DeviceInfo: `React Native (${Platform.OS})`,
//         DeviceFingerprint: `rn-device-${Platform.OS}-${deviceId}`,
//       };

//       const res = await apiClient.post("/api/account/login", loginPayload);

//       // Extract set-cookie if present
//       const setCookie = res.headers?.["set-cookie"];
//       if (setCookie) {
//         setAuthCookies(Array.isArray(setCookie) ? setCookie.join("; ") : setCookie);
//       }

//       if (!res.data || res.data.Success === false) {
//         throw new Error(
//           res.data?.Message || res.data?.ErrorMessage || "Invalid username or password"
//         );
//       }

//       const userData = res.data?.Data || res.data;
//       if (userData?.UserId) {
//         setAuthUserId(userData.UserId);
//       }

//       // Check for token in response
//       let token = res.data?.Token || userData?.AccessToken || userData?.Token;
//       if (token) {
//         setAuthToken(token);
//       }

//       // -------------------------------------------------------------
//       // STEP 2: Call /api/account/update-login (activates DB session)
//       // -------------------------------------------------------------
//       if (userData?.UserId && userData?.LoggedInSessionId) {
//         try {
//           console.log("STEP 2: Calling /api/account/update-login...");
//           const updateRes = await apiClient.post("/api/account/update-login", {
//             UserId: Number(userData.UserId),
//             LoggedInSessionId: Number(userData.LoggedInSessionId),
//             DeviceId: deviceId,
//           });

//           const updateToken =
//             updateRes.data?.Token ||
//             updateRes.data?.Data?.AccessToken ||
//             updateRes.data?.Data?.Token;

//           if (updateToken) {
//             token = updateToken;
//             setAuthToken(updateToken);
//           }
//         } catch (updateErr) {
//           console.log("Notice on update-login:", updateErr.message);
//         }
//       }

//       // -------------------------------------------------------------
//       // STEP 3: Call /api/account/refresh to retrieve Bearer AccessToken
//       // -------------------------------------------------------------
//       if (!token) {
//         try {
//           console.log("STEP 3: Calling /api/account/refresh to fetch AccessToken...");
//           const refreshRes = await apiClient.post(
//             "/api/account/refresh",
//             {},
//             {
//               withCredentials: true,
//               headers: {
//                 "X-Device-Id": deviceId,
//                 "X-Request-Timestamp": new Date().toISOString(),
//               },
//             }
//           );

//           const refData = refreshRes.data?.Data || refreshRes.data;
//           const refToken = refData?.AccessToken || refData?.Token;
//           if (refToken) {
//             token = refToken;
//             setAuthToken(refToken);
//             console.log("✅ Bearer token acquired via /account/refresh");
//           }
//         } catch (refErr) {
//           console.log("Notice on refresh endpoint:", refErr.message);
//         }
//       }

//       console.log("-----------------------------------------");
//       console.log("LOGIN PIPELINE COMPLETE FOR USER:", userData?.UserName);
//       console.log("CANDIDATE ID:", userData?.CandidateId);
//       console.log("USER ID:", userData?.UserId);
//       console.log("AUTH TOKEN AVAILABLE:", !!token);
//       console.log("-----------------------------------------");

//       return {
//         Success: true,
//         Data: {
//           ...userData,
//           AccessToken: token || "",
//         },
//         Token: token || "",
//       };
//     } catch (error) {
//       console.error("Login failed:", error?.message);
//       throw error;
//     }
//   },

//   // =========================================================================
//   // 2. LOGOUT
//   // =========================================================================
//   logoutUser: async (userId, loggedInSessionId) => {
//     try {
//       if (userId && loggedInSessionId) {
//         await apiClient.post("/api/account/logout", {
//           UserId: Number(userId),
//           LoggedInSessionId: Number(loggedInSessionId),
//         });
//       }
//     } catch (e) {
//       console.log("Logout notice:", e.message);
//     } finally {
//       clearAuth();
//     }
//   },
// };

// export default accountApi;




// mmmmm
import apiClient, {
  setAuthToken,
  setAuthCookies,
  setAuthUserId,
  clearAuth,
  getDeviceId,
} from "./apiClient";
import { Platform } from "react-native";

export const DEFAULT_MANDALS = [
  { value: 1, label: "मध्यवर्ती उपनगर मंडळ" },
  { value: 2, label: "ठाणे जिल्हा मंडळ" },
  { value: 3, label: "कल्याण मंडळ" },
  { value: 4, label: "नवी मुंबई मंडळ" },
  { value: 5, label: "पुणे मंडळ" },
  { value: 6, label: "नाशिक मंडळ" },
  { value: 7, label: "जळगाव मंडळ" },
  { value: 8, label: "धुळे मंडळ" },
  { value: 9, label: "नंदुरबार मंडळ" },
  { value: 10, label: "औरंगाबाद मंडळ" },
  { value: 11, label: "नागपूर मंडळ" },
  { value: 12, label: "LCCIA PCMC" },
];

const accountApi = {
  // =========================================================================
  // 1. MANDALS
  // =========================================================================
  getMandalList: async () => {
    try {
      const res = await apiClient.get(
        "/api/registration/GetCandidateRegistrationMasterDefault?TableName=MandalMaster"
      );
      const data = res.data?.Data || res.data;
      if (Array.isArray(data) && data.length > 0) {
        return data.map((item) => ({
          value: Number(item.Id ?? item.MandalId ?? item.value),
          label: String(item.Name ?? item.MandalName ?? item.label ?? ""),
        }));
      }
      return DEFAULT_MANDALS;
    } catch (e) {
      console.log("Fallback to DEFAULT_MANDALS:", e.message);
      return DEFAULT_MANDALS;
    }
  },

  // =========================================================================
  // 2. CHECK MOBILE EXISTS
  // =========================================================================
  checkMobileExists: async (email, mobile) => {
    try {
      const payload = {
        emailID: email ? String(email).trim().toLowerCase() : null,
        primaryMobileNumber: String(mobile || "").trim(),
      };
      const res = await apiClient.post("/api/account/IsPrimaryMobileNumberExists", payload);
      return res.data;
    } catch (err) {
      console.error("checkMobileExists error:", err.message);
      throw err;
    }
  },

  // =========================================================================
  // 3. CHECK EMAIL EXISTS
  // =========================================================================
  checkEmailExists: async (email, mobile) => {
    try {
      const payload = {
        emailID: String(email || "").trim().toLowerCase(),
        primaryMobileNumber: mobile ? String(mobile).trim() : null,
      };
      const res = await apiClient.post("/api/account/IsEmailIDExists", payload);
      return res.data;
    } catch (err) {
      console.error("checkEmailExists error:", err.message);
      throw err;
    }
  },

  // =========================================================================
  // 4. VALIDATE EMAIL DELIVERABILITY
  // =========================================================================
  validateEmail: async (email) => {
    try {
      const payload = {
        Email: String(email || "").trim().toLowerCase(),
        Nickname: null,
      };
      const res = await apiClient.post("/api/account/validate-email", payload);
      return res.data;
    } catch (err) {
      console.error("validateEmail error:", err.message);
      throw err;
    }
  },

  // =========================================================================
  // 5. SEND MOBILE OTP
  // =========================================================================
  sendMobileOtp: async (mobile, firstName = "", nickname = "") => {
    try {
      const payload = {
        MobileNo: String(mobile || "").trim(),
        FirstName: firstName ? String(firstName).trim() : null,
        Nickname: nickname ? String(nickname).trim() : null,
      };
      const res = await apiClient.post("/api/account/send-mobile-otp", payload);
      return res.data;
    } catch (err) {
      console.error("sendMobileOtp error:", err.message);
      throw err;
    }
  },

  // =========================================================================
  // 6. VERIFY MOBILE OTP
  // =========================================================================
  verifyMobileOtp: async (mobile, otp, userId = 0) => {
    try {
      const payload = {
        MobileNo: String(mobile || "").trim(),
        Otp: String(otp || "").trim(),
        UserID: userId ? Number(userId) : null,
      };
      const res = await apiClient.post("/api/account/verify-mobile-otp", payload);
      return res.data;
    } catch (err) {
      console.error("verifyMobileOtp error:", err.message);
      throw err;
    }
  },

  // =========================================================================
  // 7. REGISTER USER
  // =========================================================================
  registerUser: async (payload) => {
    try {
      const registerPayload = {
        MandalId: Number(payload.MandalId || 1),
        FirstName: String(payload.FirstName || "").trim().toUpperCase(),
        MiddleName: payload.MiddleName ? String(payload.MiddleName).trim().toUpperCase() : null,
        LastName: String(payload.LastName || "").trim().toUpperCase(),
        GenderCode: String(payload.GenderCode || "M"),
        Mobile: String(payload.Mobile || "").trim(),
        Email: String(payload.Email || "").trim().toLowerCase(),
        Password: String(payload.Password || ""),
      };
      const res = await apiClient.post("/api/account/RegisterUser", registerPayload);
      return res.data;
    } catch (err) {
      console.error("registerUser error:", err.message);
      throw err;
    }
  },

  // =========================================================================
  // 8. LOGIN USER (Full 3-Step Pipeline)
  // =========================================================================
  loginUser: async (userLoginId, password) => {
    try {
      const cleanId = (userLoginId || "").trim();
      const cleanPass = (password || "").trim();
      const deviceId = getDeviceId();

      console.log("-----------------------------------------");
      console.log("STEP 1: Calling /api/account/login...");
      const loginPayload = {
        UserLoginId: cleanId,
        UserPassword: cleanPass,
        Password: cleanPass,
        DeviceId: deviceId,
        DeviceInfo: `React Native (${Platform.OS})`,
        DeviceFingerprint: `rn-device-${Platform.OS}-${deviceId}`,
      };

      const res = await apiClient.post("/api/account/login", loginPayload);

      const setCookie = res.headers?.["set-cookie"];
      if (setCookie) {
        setAuthCookies(Array.isArray(setCookie) ? setCookie.join("; ") : setCookie);
      }

      if (!res.data || res.data.Success === false) {
        throw new Error(
          res.data?.Message || res.data?.ErrorMessage || "Invalid username or password"
        );
      }

      const userData = res.data?.Data || res.data;
      if (userData?.UserId) {
        setAuthUserId(userData.UserId);
      }

      let token = res.data?.Token || userData?.AccessToken || userData?.Token;
      if (token) {
        setAuthToken(token);
      }

      // STEP 2: Update login session
      if (userData?.UserId && userData?.LoggedInSessionId) {
        try {
          console.log("STEP 2: Calling /api/account/update-login...");
          const updateRes = await apiClient.post("/api/account/update-login", {
            UserId: Number(userData.UserId),
            LoggedInSessionId: Number(userData.LoggedInSessionId),
            DeviceId: deviceId,
          });

          const updateToken =
            updateRes.data?.Token ||
            updateRes.data?.Data?.AccessToken ||
            updateRes.data?.Data?.Token;

          if (updateToken) {
            token = updateToken;
            setAuthToken(updateToken);
          }
        } catch (updateErr) {
          console.log("Notice on update-login:", updateErr.message);
        }
      }

      // STEP 3: Refresh access token if not present
      if (!token) {
        try {
          console.log("STEP 3: Calling /api/account/refresh...");
          const refreshRes = await apiClient.post(
            "/api/account/refresh",
            {},
            {
              withCredentials: true,
              headers: {
                "X-Device-Id": deviceId,
                "X-Request-Timestamp": new Date().toISOString(),
              },
            }
          );

          const refData = refreshRes.data?.Data || refreshRes.data;
          const refToken = refData?.AccessToken || refData?.Token;
          if (refToken) {
            token = refToken;
            setAuthToken(refToken);
            console.log("✅ Bearer token acquired via /account/refresh");
          }
        } catch (refErr) {
          console.log("Notice on refresh endpoint:", refErr.message);
        }
      }

      console.log("-----------------------------------------");
      console.log("LOGIN PIPELINE COMPLETE FOR USER:", userData?.UserName);
      console.log("CANDIDATE ID:", userData?.CandidateId);
      console.log("USER ID:", userData?.UserId);
      console.log("-----------------------------------------");

      return {
        Success: true,
        Data: {
          ...userData,
          AccessToken: token || "",
        },
        Token: token || "",
      };
    } catch (error) {
      console.error("Login failed:", error?.message);
      throw error;
    }
  },

  // =========================================================================
  // 9. LOGOUT
  // =========================================================================
  logoutUser: async (userId, loggedInSessionId) => {
    try {
      if (userId && loggedInSessionId) {
        await apiClient.post("/api/account/logout", {
          UserId: Number(userId),
          LoggedInSessionId: Number(loggedInSessionId),
        });
      }
    } catch (e) {
      console.log("Logout notice:", e.message);
    } finally {
      clearAuth();
    }
  },
};

// Protect against Babel/Metro default import quirks:
accountApi.default = accountApi;

export default accountApi;