// // import axios from "axios";

// // const apiClient = axios.create({
// //   baseURL: "https://uatapi.samatabhratrumandal.com",
// //   timeout: 15000,
// //   headers: {
// //     "Content-Type": "application/json",
// //     Accept: "application/json",
// //   },
// // });

// // export default apiClient;



// import axios from "axios";
// import { Platform } from "react-native";

// // In-memory authentication state (avoids Metro bundler crashes from uninstalled storage packages)
// let inMemoryToken = "";
// let inMemoryCookies = "";
// let inMemoryUserId = null;
// const DEVICE_ID = `rn-${Platform.OS}-${Math.random().toString(36).substring(2, 10)}`;

// // Helpers to get & set auth state
// export const setAuthToken = (token) => {
//   inMemoryToken = token || "";
//   if (inMemoryToken) {
//     apiClient.defaults.headers.common["Authorization"] = `Bearer ${inMemoryToken}`;
//   } else {
//     delete apiClient.defaults.headers.common["Authorization"];
//   }
// };

// export const getAuthToken = () => inMemoryToken;

// export const setAuthCookies = (cookies) => {
//   inMemoryCookies = cookies || "";
//   if (inMemoryCookies) {
//     apiClient.defaults.headers.common["Cookie"] = inMemoryCookies;
//   }
// };

// export const getAuthCookies = () => inMemoryCookies;

// export const setAuthUserId = (id) => {
//   inMemoryUserId = id;
// };

// export const getDeviceId = () => DEVICE_ID;

// export const clearAuth = () => {
//   inMemoryToken = "";
//   inMemoryCookies = "";
//   inMemoryUserId = null;
//   delete apiClient.defaults.headers.common["Authorization"];
//   delete apiClient.defaults.headers.common["Cookie"];
// };

// // Create primary Axios instance
// const apiClient = axios.create({
//   baseURL: "https://uatapi.samatabhratrumandal.com",
//   timeout: 20000,
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// });

// // -------------------------------------------------------------
// // REQUEST INTERCEPTOR: Inject Bearer Token, Cookie & Device Headers
// // -------------------------------------------------------------
// apiClient.interceptors.request.use(
//   async (config) => {
//     // 1. Bearer Token
//     if (inMemoryToken && !config.headers["Authorization"]) {
//       config.headers["Authorization"] = `Bearer ${inMemoryToken}`;
//     }

//     // 2. Session Cookies
//     if (inMemoryCookies && !config.headers["Cookie"]) {
//       config.headers["Cookie"] = inMemoryCookies;
//     }

//     // 3. Device Identification Headers expected by the backend
//     config.headers["X-Device-Id"] = DEVICE_ID;
//     config.headers["X-Request-Id"] = Math.random().toString(36).substring(2) + Date.now().toString(36);
//     config.headers["X-Request-Timestamp"] = new Date().toISOString();
//     config.headers["X-Client-Version"] = "1.0.0";

//     if (inMemoryUserId) {
//       config.headers["X-User-Id"] = String(inMemoryUserId);
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // -------------------------------------------------------------
// // RESPONSE INTERCEPTOR: Save Cookies & Auto-Refresh on 401
// // -------------------------------------------------------------
// let isRefreshing = false;
// let failedQueue = [];

// const processQueue = (error, token = null) => {
//   failedQueue.forEach((prom) => {
//     if (error) {
//       prom.reject(error);
//     } else {
//       prom.resolve(token);
//     }
//   });
//   failedQueue = [];
// };

// apiClient.interceptors.response.use(
//   (response) => {
//     // Capture set-cookie header if server sends session cookies
//     const setCookie = response.headers["set-cookie"];
//     if (setCookie) {
//       const cookieStr = Array.isArray(setCookie) ? setCookie.join("; ") : setCookie;
//       setAuthCookies(cookieStr);
//     }
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     // Handle 401 Unauthorized with token refresh
//     if (
//       error.response &&
//       error.response.status === 401 &&
//       !originalRequest._retry &&
//       !originalRequest.url?.includes("/account/refresh") &&
//       !originalRequest.url?.includes("/account/login")
//     ) {
//       if (isRefreshing) {
//         return new Promise((resolve, reject) => {
//           failedQueue.push({ resolve, reject });
//         })
//           .then((token) => {
//             originalRequest.headers["Authorization"] = `Bearer ${token}`;
//             return apiClient(originalRequest);
//           })
//           .catch((err) => Promise.reject(err));
//       }

//       originalRequest._retry = true;
//       isRefreshing = true;

//       try {
//         console.log("🔄 401 detected: Attempting /api/account/refresh...");
//         const refreshResponse = await apiClient.post(
//           "/api/account/refresh",
//           {},
//           {
//             withCredentials: true,
//             headers: {
//               "X-Device-Id": DEVICE_ID,
//               "X-Request-Timestamp": new Date().toISOString(),
//             },
//           }
//         );

//         const refreshedData = refreshResponse.data?.Data || refreshResponse.data;
//         const newAccessToken = refreshedData?.AccessToken || refreshedData?.Token;

//         if (newAccessToken) {
//           console.log("✅ Token successfully refreshed!");
//           setAuthToken(newAccessToken);
//           processQueue(null, newAccessToken);
//           originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
//           return apiClient(originalRequest);
//         } else {
//           processQueue(new Error("No AccessToken in refresh response"), null);
//         }
//       } catch (refreshErr) {
//         console.warn("⚠️ Refresh attempt failed:", refreshErr.message);
//         processQueue(refreshErr, null);
//       } finally {
//         isRefreshing = false;
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default apiClient;





// mmmmm
import axios from "axios";
import { Platform } from "react-native";

// In-memory authentication state (zero crash risk, no missing storage package errors)
let inMemoryToken = "";
let inMemoryCookies = "";
let inMemoryUserId = null;
const DEVICE_ID = `rn-${Platform.OS}-${Math.random().toString(36).substring(2, 10)}`;

export const setAuthToken = (token) => {
  inMemoryToken = token || "";
  if (inMemoryToken) {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${inMemoryToken}`;
  } else {
    delete apiClient.defaults.headers.common["Authorization"];
  }
};

export const getAuthToken = () => inMemoryToken;

export const setAuthCookies = (cookies) => {
  inMemoryCookies = cookies || "";
  if (inMemoryCookies) {
    apiClient.defaults.headers.common["Cookie"] = inMemoryCookies;
  }
};

export const getAuthCookies = () => inMemoryCookies;

export const setAuthUserId = (id) => {
  inMemoryUserId = id;
};

export const getAuthUserId = () => inMemoryUserId;

export const getDeviceId = () => DEVICE_ID;

export const clearAuth = () => {
  inMemoryToken = "";
  inMemoryCookies = "";
  inMemoryUserId = null;
  delete apiClient.defaults.headers.common["Authorization"];
  delete apiClient.defaults.headers.common["Cookie"];
};

// Create Axios Instance
const apiClient = axios.create({
  baseURL: "https://uatapi.samatabhratrumandal.com",
  timeout: 25000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// -------------------------------------------------------------
// REQUEST INTERCEPTOR: Inject Bearer, Cookie, and Device Headers
// -------------------------------------------------------------
apiClient.interceptors.request.use(
  async (config) => {
    if (inMemoryToken && !config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${inMemoryToken}`;
    }

    if (inMemoryCookies && !config.headers["Cookie"]) {
      config.headers["Cookie"] = inMemoryCookies;
    }

    config.headers["X-Device-Id"] = DEVICE_ID;
    config.headers["X-Request-Id"] =
      Math.random().toString(36).substring(2) + Date.now().toString(36);
    config.headers["X-Request-Timestamp"] = new Date().toISOString();
    config.headers["X-Client-Version"] = "1.0.0";

    if (inMemoryUserId) {
      config.headers["X-User-Id"] = String(inMemoryUserId);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// -------------------------------------------------------------
// RESPONSE INTERCEPTOR: Capture Cookies & Auto-Refresh on 401
// -------------------------------------------------------------
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

apiClient.interceptors.response.use(
  (response) => {
    const setCookie = response.headers["set-cookie"];
    if (setCookie) {
      const cookieStr = Array.isArray(setCookie) ? setCookie.join("; ") : setCookie;
      setAuthCookies(cookieStr);
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/account/refresh") &&
      !originalRequest.url?.includes("/account/login")
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return apiClient(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        console.log("🔄 401 detected: Attempting /api/account/refresh...");
        const refreshResponse = await apiClient.post(
          "/api/account/refresh",
          {},
          {
            withCredentials: true,
            headers: {
              "X-Device-Id": DEVICE_ID,
              "X-Request-Timestamp": new Date().toISOString(),
            },
          }
        );

        const refreshedData = refreshResponse.data?.Data || refreshResponse.data;
        const newAccessToken = refreshedData?.AccessToken || refreshedData?.Token;

        if (newAccessToken) {
          console.log("✅ Token successfully refreshed!");
          setAuthToken(newAccessToken);
          processQueue(null, newAccessToken);
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return apiClient(originalRequest);
        } else {
          processQueue(new Error("No AccessToken in refresh response"), null);
        }
      } catch (refreshErr) {
        console.warn("⚠️ Refresh attempt failed:", refreshErr.message);
        processQueue(refreshErr, null);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;