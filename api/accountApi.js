// import apiClient from "./apiClient";

// export const DEFAULT_MANDALS = [
//   { value: 1, label: "समता भ्रातृमंडळ पिंपरी चिंचवड" },
//   { value: 2, label: "लेवा पाटीदार भ्रातृ मंडळ वाकड" },
//   { value: 3, label: "जळगाव जिल्हा लेवा समाज मंडळ निगडी" },
//   { value: 4, label: "श्री संत आदिशक्ती मुक्ताई देवस्थान दिघी" },
//   { value: 5, label: "लेवा पाटीदार मित्र मंडळ सांगवी" },
//   { value: 6, label: "लेवा उत्कर्ष मंडळ लोणावळा" },
//   { value: 7, label: "एकता भ्रातृ मंडळ तळेगाव-दाभाडे" },
//   { value: 8, label: "पिंपरी चिंचवड लेवा पाटीदार संघ (भ्रातृ मंडळ)" },
//   { value: 9, label: "बहिणाबाई महिला मंडळ निगडी-प्राधिकरण" },
//   { value: 10, label: "लेवा संगिनी मंच" },
//   { value: 11, label: "लेवा शक्ती सखी मंच" },
//   { value: 12, label: "LCCIA PCMC" },
// ];

// const accountApi = {
//   // ==========================================
//   // 1. REGISTER USER
//   // ==========================================
//   registerUser: async (data) => {
//     try {
//       console.log("================================");
//       console.log("REGISTER USER API");
//       console.log("REQUEST DATA:", JSON.stringify(data, null, 2));

//       const response = await apiClient.post("/api/account/RegisterUser", data);

//       console.log("REGISTER STATUS:", response.status);
//       console.log("REGISTER RESPONSE:", response.data);
//       console.log("================================");

//       return response.data;
//     } catch (error) {
//       console.log("REGISTER API ERROR");
//       console.log("STATUS:", error.response?.status);
//       console.log("DATA:", error.response?.data);
//       console.log("MESSAGE:", error.message);
//       throw error;
//     }
//   },

//   // ==========================================
//   // 2. LOGIN USER
//   // ==========================================
//   loginUser: async (userLoginId, password) => {
//     try {
//       const data = {
//         UserLoginId: (userLoginId || "").trim(),
//         UserPassword: (password || "").trim(),
//         DeviceId: "MOBILE_APP",
//         DeviceInfo: "React Native App",
//         DeviceFingerprint: "mobile_client",
//       };

//       console.log("================================");
//       console.log("LOGIN USER API");
//       console.log("REQUEST DATA:", JSON.stringify({ ...data, UserPassword: "***" }, null, 2));

//       const response = await apiClient.post("/api/account/login", data);

//       console.log("LOGIN STATUS:", response.status);
//       console.log("LOGIN RESPONSE:", response.data);
//       console.log("================================");

//       return response.data;
//     } catch (error) {
//       console.log("LOGIN API ERROR");
//       console.log("STATUS:", error.response?.status);
//       console.log("DATA:", error.response?.data);
//       console.log("MESSAGE:", error.message);
//       throw error;
//     }
//   },

//   // ==========================================
//   // 3. CHECK EMAIL
//   // ==========================================
//   checkEmailExists: async (email, mobile) => {
//     try {
//       const data = {
//         emailID: (email || "").trim(),
//         primaryMobileNumber: (mobile || "").trim(),
//       };

//       console.log("================================");
//       console.log("CHECK EMAIL API");
//       console.log("REQUEST DATA:", JSON.stringify(data, null, 2));

//       const response = await apiClient.post("/api/account/IsEmailIDExists", data);

//       console.log("EMAIL CHECK STATUS:", response.status);
//       console.log("EMAIL CHECK RESPONSE:", response.data);
//       console.log("================================");

//       return response.data;
//     } catch (error) {
//       console.log("EMAIL CHECK API ERROR");
//       console.log("STATUS:", error.response?.status);
//       console.log("DATA:", error.response?.data);
//       console.log("MESSAGE:", error.message);
//       throw error;
//     }
//   },

//   // ==========================================
//   // 4. CHECK MOBILE
//   // ==========================================
//   checkMobileExists: async (email, mobile) => {
//     try {
//       const data = {
//         emailID: (email || "").trim(),
//         primaryMobileNumber: (mobile || "").trim(),
//       };

//       console.log("================================");
//       console.log("CHECK MOBILE API");
//       console.log("REQUEST DATA:", JSON.stringify(data, null, 2));

//       const response = await apiClient.post(
//         "/api/account/IsPrimaryMobileNumberExists",
//         data
//       );

//       console.log("MOBILE CHECK STATUS:", response.status);
//       console.log("MOBILE CHECK RESPONSE:", response.data);
//       console.log("================================");

//       return response.data;
//     } catch (error) {
//       console.log("MOBILE CHECK API ERROR");
//       console.log("STATUS:", error.response?.status);
//       console.log("DATA:", error.response?.data);
//       console.log("MESSAGE:", error.message);
//       throw error;
//     }
//   },

//   // ==========================================
//   // 5. SEND MOBILE OTP
//   // ==========================================
//   sendMobileOtp: async (mobile, firstName, nickname) => {
//     try {
//       const data = {
//         MobileNo: (mobile || "").trim(),
//         FirstName: (firstName || "Candidate").trim(),
//         Nickname: (nickname || "").trim(),
//       };

//       console.log("================================");
//       console.log("SEND MOBILE OTP");
//       console.log("REQUEST DATA:", JSON.stringify(data, null, 2));

//       const response = await apiClient.post(
//         "/api/account/send-mobile-otp",
//         data
//       );

//       console.log("SEND MOBILE OTP STATUS:", response.status);
//       console.log("SEND MOBILE OTP RESPONSE:", response.data);
//       console.log("================================");

//       return response.data;
//     } catch (error) {
//       console.log("SEND MOBILE OTP ERROR");
//       console.log("STATUS:", error.response?.status);
//       console.log("DATA:", error.response?.data);
//       console.log("MESSAGE:", error.message);
//       throw error;
//     }
//   },

//   // ==========================================
//   // 6. VERIFY MOBILE OTP
//   // Note: Swagger schema specifies MobileNo, Otp, UserID
//   // ==========================================
//   verifyMobileOtp: async (mobile, otp, userId = 0) => {
//     try {
//       const data = {
//         MobileNo: (mobile || "").trim(),
//         Otp: (otp || "").trim(),
//         UserID: userId ? Number(userId) : 0,
//       };

//       console.log("================================");
//       console.log("VERIFY MOBILE OTP");
//       console.log("REQUEST DATA:", JSON.stringify(data, null, 2));

//       const response = await apiClient.post(
//         "/api/account/verify-mobile-otp",
//         data
//       );

//       console.log("VERIFY MOBILE OTP STATUS:", response.status);
//       console.log("VERIFY MOBILE OTP RESPONSE:", response.data);
//       console.log("================================");

//       return response.data;
//     } catch (error) {
//       console.log("VERIFY MOBILE OTP ERROR");
//       console.log("STATUS:", error.response?.status);
//       console.log("DATA:", error.response?.data);
//       console.log("MESSAGE:", error.message);
//       throw error;
//     }
//   },

//   // ==========================================
//   // 7. SEND EMAIL OTP
//   // ==========================================
//   sendEmailOtp: async (email, firstName, nickname) => {
//     try {
//       const data = {
//         Email: (email || "").trim(),
//         FirstName: (firstName || "Candidate").trim(),
//         Firstname: (firstName || "Candidate").trim(),
//         Nickname: (nickname || "").trim(),
//       };

//       console.log("================================");
//       console.log("SEND EMAIL OTP");
//       console.log("REQUEST DATA:", JSON.stringify(data, null, 2));

//       const response = await apiClient.post(
//         "/api/account/send-email-otp",
//         data
//       );

//       console.log("SEND EMAIL OTP STATUS:", response.status);
//       console.log("SEND EMAIL OTP RESPONSE:", response.data);
//       console.log("================================");

//       return response.data;
//     } catch (error) {
//       console.log("SEND EMAIL OTP ERROR");
//       console.log("STATUS:", error.response?.status);
//       console.log("DATA:", error.response?.data);
//       console.log("MESSAGE:", error.message);
//       throw error;
//     }
//   },

//   // ==========================================
//   // 8. VERIFY EMAIL OTP
//   // ==========================================
//   verifyEmailOtp: async (email, otp) => {
//     try {
//       const data = {
//         Email: (email || "").trim(),
//         OTP: (otp || "").trim(),
//         Otp: (otp || "").trim(),
//       };

//       console.log("================================");
//       console.log("VERIFY EMAIL OTP");
//       console.log("REQUEST DATA:", JSON.stringify(data, null, 2));

//       const response = await apiClient.post(
//         "/api/account/verify-email-otp",
//         data
//       );

//       console.log("VERIFY EMAIL OTP STATUS:", response.status);
//       console.log("VERIFY EMAIL OTP RESPONSE:", response.data);
//       console.log("================================");

//       return response.data;
//     } catch (error) {
//       console.log("VERIFY EMAIL OTP ERROR");
//       console.log("STATUS:", error.response?.status);
//       console.log("DATA:", error.response?.data);
//       console.log("MESSAGE:", error.message);
//       throw error;
//     }
//   },

//   // ==========================================
//   // 9. GET MANDALS LIST
//   // ==========================================
//   getMandalList: async () => {
//     try {
//       console.log("================================");
//       console.log("GET MANDALS LIST");
//       const response = await apiClient.get(
//         "/api/registration/GetCandidateRegistrationMasterDefault?TableName=Mandal"
//       );

//       if (response.data && response.data.Success && Array.isArray(response.data.Data)) {
//         return response.data.Data.map((item, idx) => ({
//           value: idx + 1,
//           label: item.DataTextField || item.DataValueField || `Mandal ${idx + 1}`,
//           name: item.DataValueField || item.DataTextField || `Mandal ${idx + 1}`,
//         }));
//       }

//       return DEFAULT_MANDALS;
//     } catch (error) {
//       console.log("GET MANDALS API ERROR, FALLING BACK TO DEFAULT LIST:", error.message);
//       return DEFAULT_MANDALS;
//     }
//   },
// };

// export default accountApi;















import apiClient from "./apiClient";

export const DEFAULT_MANDALS = [
  { value: 1, label: "समता भ्रातृमंडळ पिंपरी चिंचवड" },
  { value: 2, label: "लेवा पाटीदार भ्रातृ मंडळ वाकड" },
  { value: 3, label: "जळगाव जिल्हा लेवा समाज मंडळ निगडी" },
  { value: 4, label: "श्री संत आदिशक्ती मुक्ताई देवस्थान दिघी" },
  { value: 5, label: "लेवा पाटीदार मित्र मंडळ सांगवी" },
  { value: 6, label: "लेवा उत्कर्ष मंडळ लोणावळा" },
  { value: 7, label: "एकता भ्रातृ मंडळ तळेगाव-दाभाडे" },
  {
    value: 8,
    label: "पिंपरी चिंचवड लेवा पाटीदार संघ (भ्रातृ मंडळ)",
  },
  {
    value: 9,
    label: "बहिणाबाई महिला मंडळ निगडी-प्राधिकरण",
  },
  { value: 10, label: "लेवा संगिनी मंच" },
  { value: 11, label: "लेवा शक्ती सखी मंच" },
  { value: 12, label: "LCCIA PCMC" },
];

const accountApi = {
  // =====================================================
  // GET MANDAL LIST
  // =====================================================

  getMandalList: async () => {
    try {
      const response = await apiClient.get(
        "/api/registration/GetCandidateRegistrationMasterDefault?TableName=Mandal"
      );

      console.log("MANDAL RESPONSE:", response.data);

      if (
        response.data?.Success === true &&
        Array.isArray(response.data?.Data)
      ) {
        return response.data.Data.map((item, index) => ({
          value: index + 1,
          label:
            item.DataTextField ||
            item.DataValueField ||
            `Mandal ${index + 1}`,
        }));
      }

      return DEFAULT_MANDALS;
    } catch (error) {
      console.log(
        "MANDAL ERROR:",
        error.response?.data || error.message
      );

      return DEFAULT_MANDALS;
    }
  },

  // =====================================================
  // CHECK MOBILE EXISTS
  // =====================================================

  checkMobileExists: async (email, mobile) => {
    try {
      const payload = {
        emailID: (email || "").trim().toLowerCase(),
        primaryMobileNumber: (mobile || "").trim(),
      };

      console.log("CHECK MOBILE PAYLOAD:", payload);

      const response = await apiClient.post(
        "/api/account/IsPrimaryMobileNumberExists",
        payload
      );

      console.log(
        "CHECK MOBILE RESPONSE:",
        response.data
      );

      return response.data;
    } catch (error) {
      console.log(
        "CHECK MOBILE ERROR:",
        error.response?.data || error.message
      );

      throw error;
    }
  },

  // =====================================================
  // CHECK EMAIL EXISTS
  // =====================================================

  checkEmailExists: async (email, mobile) => {
    try {
      const payload = {
        emailID: (email || "").trim().toLowerCase(),
        primaryMobileNumber: (mobile || "").trim(),
      };

      console.log("CHECK EMAIL PAYLOAD:", payload);

      const response = await apiClient.post(
        "/api/account/IsEmailIDExists",
        payload
      );

      console.log(
        "CHECK EMAIL RESPONSE:",
        response.data
      );

      return response.data;
    } catch (error) {
      console.log(
        "CHECK EMAIL ERROR:",
        error.response?.data || error.message
      );

      throw error;
    }
  },

  // =====================================================
  // SEND MOBILE OTP
  // =====================================================

  sendMobileOtp: async (
    mobile,
    firstName,
    lastName
  ) => {
    try {
      const payload = {
        FirstName: (firstName || "").trim(),
        LastName: (lastName || "").trim(),
        MobileNo: (mobile || "").trim(),
      };

      console.log(
        "SEND MOBILE OTP PAYLOAD:",
        payload
      );

      const response = await apiClient.post(
        "/api/account/send-mobile-otp",
        payload
      );

      console.log(
        "SEND MOBILE OTP RESPONSE:",
        response.data
      );

      return response.data;
    } catch (error) {
      console.log(
        "SEND MOBILE OTP ERROR:",
        error.response?.data || error.message
      );

      throw error;
    }
  },

  // =====================================================
  // VERIFY MOBILE OTP
  // =====================================================

  verifyMobileOtp: async (
    mobile,
    otp,
    candidateId = 0
  ) => {
    try {
      const payload = {
        MobileNo: (mobile || "").trim(),
        Otp: (otp || "").trim(),
        CandidateId: Number(candidateId) || 0,
      };

      console.log(
        "VERIFY MOBILE OTP PAYLOAD:",
        payload
      );

      const response = await apiClient.post(
        "/api/account/verify-mobile-otp",
        payload
      );

      console.log(
        "VERIFY MOBILE OTP RESPONSE:",
        response.data
      );

      return response.data;
    } catch (error) {
      console.log(
        "VERIFY MOBILE OTP ERROR:",
        error.response?.data || error.message
      );

      throw error;
    }
  },

  // =====================================================
  // VALIDATE EMAIL
  // =====================================================

  validateEmail: async (email) => {
    try {
      const cleanEmail =
        (email || "").trim().toLowerCase();

      const payload = {
        Email: cleanEmail,
      };

      console.log("================================");
      console.log("VALIDATE EMAIL API");
      console.log("EMAIL:", cleanEmail);
      console.log(
        "VALIDATE EMAIL PAYLOAD:",
        payload
      );

      const response = await apiClient.post(
        "/api/account/validate-email",
        payload
      );

      console.log(
        "VALIDATE EMAIL STATUS:",
        response.status
      );

      console.log(
        "VALIDATE EMAIL RESPONSE:",
        response.data
      );

      console.log("================================");

      return response.data;
    } catch (error) {
      console.log(
        "VALIDATE EMAIL ERROR:",
        error.response?.data || error.message
      );

      throw error;
    }
  },

  // =====================================================
  // REGISTER USER
  // =====================================================

  registerUser: async (payload) => {
    try {
      console.log("================================");
      console.log("REGISTER USER PAYLOAD:");
      console.log(
        JSON.stringify(payload, null, 2)
      );

      const response = await apiClient.post(
        "/api/account/RegisterUser",
        payload
      );

      console.log(
        "REGISTER STATUS:",
        response.status
      );

      console.log(
        "REGISTER RESPONSE:",
        response.data
      );

      console.log("================================");

      return response.data;
    } catch (error) {
      console.log(
        "REGISTER USER ERROR:",
        error.response?.data || error.message
      );

      throw error;
    }
  },
};

export default accountApi;