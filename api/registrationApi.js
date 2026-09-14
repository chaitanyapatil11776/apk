import apiClient, { getDeviceId } from "./apiClient";

// Helper to sanitize ClientStamp so that timestamps or invalid tokens are never passed
const sanitizeClientStamp = (stamp) => {
  if (!stamp) return null;
  if (typeof stamp === "string") {
    const trimmed = stamp.trim();
    if (!trimmed) return null;
    // An ISO string like "2026-09-14T05:33:07.727Z" is NOT an optimistic concurrency rowversion token
    if ((trimmed.includes("T") && trimmed.includes("Z")) || trimmed.includes("-") || trimmed.includes(":")) {
      return null;
    }
    return trimmed;
  }
  return stamp;
};

const registrationApi = {
  // =========================================================================
  // 1. SAVE REGISTRATION TYPE (Bride / Groom)
  // =========================================================================
  saveRegistrationType: async (userId, candidateType) => {
    try {
      const payload = {
        UserId: Number(userId),
        CandidateType: String(candidateType || "Bride").trim(),
      };
      console.log("REGISTRATION API -> saveRegistrationType:", payload);
      const res = await apiClient.post("/api/registration/SaveRegistrationType", payload);
      console.log("REGISTRATION API -> saveRegistrationType response:", res.data);
      return res.data;
    } catch (error) {
      console.error("saveRegistrationType error:", error.response?.data || error.message);
      throw error;
    }
  },

  // =========================================================================
  // 2. GET CANDIDATE ID FOR USER
  // =========================================================================
  getCandidateId: async (userId) => {
    try {
      console.log(`REGISTRATION API -> getCandidateId for UserId: ${userId}`);
      const res = await apiClient.get(`/api/registration/GetCandidateID?UserID=${userId}`);
      console.log("REGISTRATION API -> getCandidateId response:", res.data);
      const data = res.data?.Data ?? res.data;
      return typeof data === "number" ? data : Number(data?.CandidateId || 0);
    } catch (error) {
      console.warn("getCandidateId notice:", error.message);
      return 0;
    }
  },

  // =========================================================================
  // 3. GET & SAVE STEP 1: BASIC DETAILS
  // =========================================================================
  getBasicDetails: async (candidateId) => {
    try {
      console.log(`REGISTRATION API -> getBasicDetails for CandidateId: ${candidateId}`);
      const res = await apiClient.get(`/api/registration/GetBasicDetails?CandidateId=${candidateId}`);
      console.log("REGISTRATION API -> getBasicDetails response:", JSON.stringify(res.data));
      return res.data?.Data ?? res.data;
    } catch (error) {
      console.error("getBasicDetails error:", error.response?.data || error.message);
      throw error;
    }
  },

  saveBasicDetails: async (payload) => {
    try {
      const body = {
        ActorUserId: Number(payload.ActorUserId || payload.UserId || 0),
        ActorType: payload.ActorType || "candidate",
        ClientStamp: sanitizeClientStamp(payload.ClientStamp || payload.clientStamp),
        CandidateId: Number(payload.CandidateId || 0),
        UserId: Number(payload.UserId || 0),
        UserLoginId: String(payload.UserLoginId || ""),
        CandidateType: String(payload.CandidateType || "Bride"),
        PhotofilePath: payload.PhotofilePath || null,
        PhotoBase64: payload.PhotoBase64 || null,
        FirstName: String(payload.FirstName || "").trim().toUpperCase(),
        MiddleName: payload.MiddleName ? String(payload.MiddleName).trim().toUpperCase() : "",
        LastName: String(payload.LastName || "").trim().toUpperCase(),
        BirthName: payload.BirthName ? String(payload.BirthName).trim() : null,
        MFirstName: String(payload.MFirstName || "").trim(),
        MMiddleName: payload.MMiddleName ? String(payload.MMiddleName).trim() : null,
        MLastName: String(payload.MLastName || "").trim(),
        MBirthName: payload.MBirthName ? String(payload.MBirthName).trim() : null,
      };

      console.log("REGISTRATION API -> saveBasicDetails payload:", {
        ...body,
        PhotoBase64: body.PhotoBase64 ? `[Base64 length: ${body.PhotoBase64.length}]` : null,
      });

      const res = await apiClient.post("/api/registration/SaveBasicDetails", body);
      console.log("REGISTRATION API -> saveBasicDetails response:", res.data);
      return res.data;
    } catch (error) {
      console.error("saveBasicDetails error:", error.response?.data || error.message);
      throw error;
    }
  },

  // =========================================================================
  // 4. GET & SAVE STEP 2: QUALIFICATION & EMPLOYMENT
  // =========================================================================
  getQualificationEmploymentDetails: async (candidateId) => {
    try {
      console.log(`REGISTRATION API -> getQualificationEmploymentDetails for CandidateId: ${candidateId}`);
      const res = await apiClient.get(
        `/api/registration/GetQualificationEmploymentDetails?CandidateId=${candidateId}`
      );
      console.log("REGISTRATION API -> getQualificationEmploymentDetails response:", JSON.stringify(res.data));
      return res.data?.Data ?? res.data;
    } catch (error) {
      console.error("getQualificationEmploymentDetails error:", error.response?.data || error.message);
      throw error;
    }
  },

  saveQualificationEmploymentDetails: async (payload) => {
    try {
      const body = {
        ActorUserId: Number(payload.ActorUserId || payload.UserId || 0),
        ActorType: payload.ActorType || "candidate",
        ClientStamp: sanitizeClientStamp(payload.ClientStamp || payload.clientStamp),
        CandidateId: Number(payload.CandidateId || 0),
        UserId: Number(payload.UserId || 0),
        UserLoginId: String(payload.UserLoginId || ""),
        EducationLevel: String(payload.EducationLevel || "").trim(),
        Education: String(payload.Education || "").trim(),
        JobBuzEdu: payload.JobBuzEdu ? String(payload.JobBuzEdu).trim() : "",
        Position: payload.Position ? String(payload.Position).trim() : "",
        Company: payload.Company ? String(payload.Company).trim() : "",
        PlaceOfEmployment: payload.PlaceOfEmployment ? String(payload.PlaceOfEmployment).trim() : "",
        CompanyPhone: payload.CompanyPhone ? String(payload.CompanyPhone).trim() : "",
        MonthlyIncome: payload.MonthlyIncome ? String(payload.MonthlyIncome).trim() : "",
      };

      console.log("REGISTRATION API -> saveQualificationEmploymentDetails payload:", body);
      const res = await apiClient.post("/api/registration/SaveQualificationEmploymentDetails", body);
      console.log("REGISTRATION API -> saveQualificationEmploymentDetails response:", res.data);
      return res.data;
    } catch (error) {
      console.error("saveQualificationEmploymentDetails error:", error.response?.data || error.message);
      throw error;
    }
  },

  // =========================================================================
  // 5. GET & SAVE STEP 3: PERSONAL DETAILS
  // =========================================================================
  getPersonalDetails: async (candidateId) => {
    try {
      console.log(`REGISTRATION API -> getPersonalDetails for CandidateId: ${candidateId}`);
      const res = await apiClient.get(`/api/registration/GetPersonalDetails?CandidateId=${candidateId}`);
      console.log("REGISTRATION API -> getPersonalDetails response:", JSON.stringify(res.data));
      return res.data?.Data ?? res.data;
    } catch (error) {
      console.error("getPersonalDetails error:", error.response?.data || error.message);
      throw error;
    }
  },

  savePersonalDetails: async (payload) => {
    try {
      const body = {
        ActorUserId: Number(payload.ActorUserId || payload.UserId || 0),
        ActorType: payload.ActorType || "candidate",
        ClientStamp: sanitizeClientStamp(payload.ClientStamp || payload.clientStamp),
        CandidateId: Number(payload.CandidateId || 0),
        UserId: Number(payload.UserId || 0),
        UserLoginId: String(payload.UserLoginId || ""),
        BirthDate: payload.BirthDate ? String(payload.BirthDate).trim() : "",
        BirthHrs: payload.BirthHrs ? String(payload.BirthHrs).trim() : "",
        BirthMin: payload.BirthMin ? String(payload.BirthMin).trim() : "",
        BirthTime: payload.BirthTime ? String(payload.BirthTime).trim() : "",
        BirthPlace: payload.BirthPlace ? String(payload.BirthPlace).trim() : "",
        Foot: payload.Foot ? String(payload.Foot).trim() : "",
        Inch: payload.Inch ? String(payload.Inch).trim() : "",
        Complexion: payload.Complexion ? String(payload.Complexion).trim() : "",
        BloodGroup: payload.BloodGroup ? String(payload.BloodGroup).trim() : "",
        Gotra: payload.Gotra ? String(payload.Gotra).trim() : "",
        Mamkul: payload.Mamkul ? String(payload.Mamkul).trim() : "",
        Hometown: payload.Hometown ? String(payload.Hometown).trim() : "",
        Taluka: payload.Taluka ? String(payload.Taluka).trim() : "",
        District: payload.District ? String(payload.District).trim() : "",
        BroMarried: payload.BroMarried != null ? String(payload.BroMarried).trim() : "0",
        BroUnmarried: payload.BroUnmarried != null ? String(payload.BroUnmarried).trim() : "0",
        SisMarried: payload.SisMarried != null ? String(payload.SisMarried).trim() : "0",
        SisUnmarried: payload.SisUnmarried != null ? String(payload.SisUnmarried).trim() : "0",
        MarriageDate: payload.MarriageDate || null,
        SeparationDate: payload.SeparationDate || null,
        PersonalMobile: payload.PersonalMobile ? String(payload.PersonalMobile).trim() : "",
      };

      console.log("REGISTRATION API -> savePersonalDetails payload:", body);
      const res = await apiClient.post("/api/registration/SavePersonalDetails", body);
      console.log("REGISTRATION API -> savePersonalDetails response:", res.data);
      return res.data;
    } catch (error) {
      console.error("savePersonalDetails error:", error.response?.data || error.message);
      throw error;
    }
  },

  // =========================================================================
  // 6. GET & SAVE STEP 4: EXPECTATIONS & PARENT DETAILS
  // =========================================================================
  getExpectationParentDetails: async (candidateId) => {
    try {
      console.log(`REGISTRATION API -> getExpectationParentDetails for CandidateId: ${candidateId}`);
      const res = await apiClient.get(
        `/api/registration/GetExpectationParentDetails?CandidateId=${candidateId}`
      );
      console.log("REGISTRATION API -> getExpectationParentDetails response:", JSON.stringify(res.data));
      return res.data?.Data ?? res.data;
    } catch (error) {
      console.error("getExpectationParentDetails error:", error.response?.data || error.message);
      throw error;
    }
  },

  saveExpectationParentDetails: async (payload) => {
    try {
      const body = {
        ActorUserId: Number(payload.ActorUserId || payload.UserId || 0),
        ActorType: payload.ActorType || "candidate",
        ClientStamp: sanitizeClientStamp(payload.ClientStamp || payload.clientStamp),
        CandidateId: Number(payload.CandidateId || 0),
        UserId: Number(payload.UserId || 0),
        UserLoginId: String(payload.UserLoginId || ""),
        Expectations: String(payload.Expectations || "").trim(),
        FatherGurdianTitle: payload.FatherGurdianTitle ? String(payload.FatherGurdianTitle).trim() : "श्री",
        NameOfFatherGuardian: String(payload.NameOfFatherGuardian || "").trim(),
        ParentalAddress: String(payload.ParentalAddress || "").trim(),
        ParentalContactNo1: String(payload.ParentalContactNo1 || "").trim(),
        ParentalContactNo2: payload.ParentalContactNo2 ? String(payload.ParentalContactNo2).trim() : "",
        ParentalEmail: payload.ParentalEmail ? String(payload.ParentalEmail).trim() : "",
        AltFatherGurdianTitle: payload.AltFatherGurdianTitle ? String(payload.AltFatherGurdianTitle).trim() : "श्री",
        AltNameOfFatherGuardian: payload.AltNameOfFatherGuardian ? String(payload.AltNameOfFatherGuardian).trim() : "",
        AltParentalAddress: payload.AltParentalAddress ? String(payload.AltParentalAddress).trim() : "",
        AltParentalContactNo1: payload.AltParentalContactNo1 ? String(payload.AltParentalContactNo1).trim() : "",
        AltParentalContactNo2: payload.AltParentalContactNo2 ? String(payload.AltParentalContactNo2).trim() : "",
        AltParentalEmail: payload.AltParentalEmail ? String(payload.AltParentalEmail).trim() : "",
        AltFatherGurdianTitle2: payload.AltFatherGurdianTitle2 ? String(payload.AltFatherGurdianTitle2).trim() : "श्री",
        AltNameOfFatherGuardian2: payload.AltNameOfFatherGuardian2 ? String(payload.AltNameOfFatherGuardian2).trim() : "",
        AltParentalAddress2: payload.AltParentalAddress2 ? String(payload.AltParentalAddress2).trim() : "",
        AltParental2ContactNo1: payload.AltParental2ContactNo1 ? String(payload.AltParental2ContactNo1).trim() : "",
        AltParental2ContactNo2: payload.AltParental2ContactNo2 ? String(payload.AltParental2ContactNo2).trim() : "",
        AltParentalEmail2: payload.AltParentalEmail2 ? String(payload.AltParentalEmail2).trim() : "",
      };

      console.log("REGISTRATION API -> saveExpectationParentDetails payload:", body);
      const res = await apiClient.post("/api/registration/SaveExpectationParentDetails", body);
      console.log("REGISTRATION API -> saveExpectationParentDetails response:", res.data);
      return res.data;
    } catch (error) {
      console.error("saveExpectationParentDetails error:", error.response?.data || error.message);
      throw error;
    }
  },

  // =========================================================================
  // 7. GET PROFILE & STEP 5: SUBMIT FOR VERIFICATION
  // =========================================================================
  getCandidateProfile: async (userId) => {
    try {
      console.log(`REGISTRATION API -> getCandidateProfile for UserId: ${userId}`);
      const res = await apiClient.get(`/api/registration/GetCandidateProfile?UserID=${userId}`);
      console.log("REGISTRATION API -> getCandidateProfile response:", JSON.stringify(res.data));
      return res.data?.Data ?? res.data;
    } catch (error) {
      console.error("getCandidateProfile error:", error.response?.data || error.message);
      throw error;
    }
  },

  getCandidateProfileByApplicationNo: async (applicationNo) => {
    try {
      console.log(`REGISTRATION API -> getCandidateProfileByApplicationNo: ${applicationNo}`);
      const res = await apiClient.get(
        `/api/registration/GetCandidateProfileByApplicationNo?ApplicationFormNo=${applicationNo}`
      );
      console.log("REGISTRATION API -> getCandidateProfileByApplicationNo response:", JSON.stringify(res.data));
      return res.data?.Data ?? res.data;
    } catch (error) {
      console.error("getCandidateProfileByApplicationNo error:", error.response?.data || error.message);
      throw error;
    }
  },

  getDetailsForDashboard: async (userId) => {
    try {
      console.log(`REGISTRATION API -> getDetailsForDashboard for UserId: ${userId}`);
      const res = await apiClient.get(`/api/registration/GetDetailsForDashboard?UserID=${userId}`);
      console.log("REGISTRATION API -> getDetailsForDashboard response:", JSON.stringify(res.data));
      return res.data?.Data ?? res.data;
    } catch (error) {
      console.error("getDetailsForDashboard error:", error.response?.data || error.message);
      throw error;
    }
  },

  submitForVerification: async (payload) => {
    try {
      const body = {
        ActorUserId: Number(payload.ActorUserId || payload.UserId || 0),
        ActorType: payload.ActorType || "candidate",
        ClientStamp: sanitizeClientStamp(payload.ClientStamp || payload.clientStamp),
        UserId: Number(payload.UserId || 0),
        CandidateId: Number(payload.CandidateId || 0),
      };

      console.log("REGISTRATION API -> submitForVerification payload:", body);
      const res = await apiClient.post("/api/registration/SubmitForVerification", body);
      console.log("REGISTRATION API -> submitForVerification response:", res.data);
      return res.data;
    } catch (error) {
      console.error("submitForVerification error:", error.response?.data || error.message);
      throw error;
    }
  },

  // =========================================================================
  // 8. MASTER DATA LOOKUPS (Autocomplete / Distinct Options)
  // =========================================================================
  getDistinctCandidateTypes: async () => {
    try {
      const res = await apiClient.get("/api/candidatesearch/GetDistinctCandidateTypes");
      return res.data?.Data ?? res.data ?? ["वधू (Bride)", "वर (Groom)"];
    } catch (e) {
      return ["वधू (Bride)", "वर (Groom)"];
    }
  },

  getDistinctEducationLevels: async () => {
    try {
      const res = await apiClient.get("/api/candidatesearch/GetDistinctEducationLevels");
      return res.data?.Data ?? res.data ?? [];
    } catch (e) {
      return [];
    }
  },

  getDistinctEducations: async () => {
    try {
      const res = await apiClient.get("/api/candidatesearch/GetDistinctEducations");
      return res.data?.Data ?? res.data ?? [];
    } catch (e) {
      return [];
    }
  },

  getDistinctComplexions: async () => {
    try {
      const res = await apiClient.get("/api/candidatesearch/GetDistinctComplexions");
      return res.data?.Data ?? res.data ?? ["गोरा", "गव्हाळ", "सावळा"];
    } catch (e) {
      return ["गोरा", "गव्हाळ", "सावळा"];
    }
  },

  getDistinctBloodGroups: async () => {
    try {
      const res = await apiClient.get("/api/candidatesearch/GetDistinctBloodGroups");
      return res.data?.Data ?? res.data ?? ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    } catch (e) {
      return ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
    }
  },

  getDistinctDistricts: async () => {
    try {
      const res = await apiClient.get("/api/candidatesearch/GetDistinctDistricts");
      return res.data?.Data ?? res.data ?? [];
    } catch (e) {
      return [];
    }
  },

  getDistinctTalukas: async () => {
    try {
      const res = await apiClient.get("/api/candidatesearch/GetDistinctTalukas");
      return res.data?.Data ?? res.data ?? [];
    } catch (e) {
      return [];
    }
  },

  getDistinctHometowns: async () => {
    try {
      const res = await apiClient.get("/api/candidatesearch/GetDistinctHometowns");
      return res.data?.Data ?? res.data ?? [];
    } catch (e) {
      return [];
    }
  },
};

// Protect against Babel/Metro default import quirks
registrationApi.default = registrationApi;

export default registrationApi;
