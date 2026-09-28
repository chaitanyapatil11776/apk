/**
 * Candidate Type Normalization and Formatting Helper
 * Resolves any backend/database candidate type variant into a canonical internal value:
 * 1. वधू / Bride → Bride
 * 2. वर / Groom → Groom
 * 3. विधवा / Widow → Widow
 * 4. विधुर / Widower → Widower
 * 5. घटस्फोटीत वधू / Divorced Bride → DivorcedBride
 * 6. घटस्फोटीत वर / Divorced Groom → DivorcedGroom
 */

export const normalizeCandidateType = (value) => {
  if (!value) return "";
  const raw = String(value).trim();
  const lower = raw.toLowerCase();
  // Strip all whitespace characters
  const noSpace = lower.replace(/\s+/g, "");

  // 1. Widower (Check BEFORE Widow because "widower" contains the substring "widow")
  if (
    lower.includes("widower") ||
    lower.includes("विधुर") ||
    lower.includes("vidhur") ||
    lower.includes("vidhura")
  ) {
    return "Widower";
  }

  // 2. Widow
  if (
    lower.includes("widow") ||
    lower.includes("विधवा") ||
    lower.includes("vidhwa") ||
    lower.includes("vidhava") ||
    lower.includes("vidhav")
  ) {
    return "Widow";
  }

  // 3. Divorced Bride (Check BEFORE plain Bride)
  const isDivorced =
    lower.includes("divorce") ||
    lower.includes("घटस्फोटीत") ||
    lower.includes("घटस्पोटीत") ||
    lower.includes("ghatasphot") ||
    lower.includes("ghataspot");

  const isBride =
    lower.includes("bride") ||
    lower.includes("वधू") ||
    lower.includes("वधु") ||
    lower.includes("vadhu");

  const isGroom =
    lower.includes("groom") ||
    lower.includes("वर") ||
    lower.includes("var");

  if (
    (isDivorced && isBride) ||
    noSpace.includes("divorcedbride") ||
    noSpace.includes("ghatasphotitvadhu") ||
    noSpace.includes("ghataspotitvadhu") ||
    noSpace.includes("घटस्फोटीतवधू") ||
    noSpace.includes("घटस्फोटीतवधु") ||
    noSpace.includes("घटस्पोटीतवधू") ||
    noSpace.includes("घटस्पोटीतवधु")
  ) {
    return "DivorcedBride";
  }

  // 4. Divorced Groom (Check BEFORE plain Groom)
  if (
    (isDivorced && isGroom) ||
    noSpace.includes("divorcedgroom") ||
    noSpace.includes("ghatasphotitvar") ||
    noSpace.includes("ghataspotitvar") ||
    noSpace.includes("घटस्फोटीतवर") ||
    noSpace.includes("घटस्पोटीतवर")
  ) {
    return "DivorcedGroom";
  }

  // 5. Bride
  if (isBride) {
    return "Bride";
  }

  // 6. Groom
  if (isGroom) {
    return "Groom";
  }

  return raw;
};

/**
 * Returns the exact bilingual display label for a candidate type:
 * - Bride → "वधू | Bride"
 * - Groom → "वर | Groom"
 * - Widow → "विधवा | Widow"
 * - Widower → "विधुर | Widower"
 * - DivorcedBride → "घटस्फोटीत वधू | Divorced Bride"
 * - DivorcedGroom → "घटस्फोटीत वर | Divorced Groom"
 */
export const getCandidateTypeLabel = (candidateType) => {
  const normalized = normalizeCandidateType(candidateType);
  switch (normalized) {
    case "Bride":
      return "वधू | Bride";
    case "Groom":
      return "वर | Groom";
    case "Widow":
      return "विधवा | Widow";
    case "Widower":
      return "विधुर | Widower";
    case "DivorcedBride":
      return "घटस्फोटीत वधू | Divorced Bride";
    case "DivorcedGroom":
      return "घटस्फोटीत वर | Divorced Groom";
    default:
      return "Candidate Type Not Selected";
  }
};

/**
 * Extracts candidate type value from any candidate or profile object.
 */
export const extractCandidateTypeValue = (obj) => {
  if (!obj || typeof obj !== "object") return "";

  const keys = [
    "CandidateType",
    "candidateType",
    "CandidateTypeName",
    "candidateTypeName",
    "Candidate_Type",
    "CandidateTypeCode",
  ];

  for (const key of keys) {
    const val = obj[key];
    if (val !== undefined && val !== null && String(val).trim()) {
      return String(val).trim();
    }
  }

  const nested = obj.Data ?? obj.data ?? obj.Result ?? obj.result;
  if (nested && nested !== obj) {
    return extractCandidateTypeValue(nested);
  }

  return "";
};

export default {
  normalizeCandidateType,
  getCandidateTypeLabel,
  extractCandidateTypeValue,
};
