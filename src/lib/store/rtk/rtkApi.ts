import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

console.log("API Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL, BASE_URL);

const apis = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }: { getState: () => any }) => {
      const token = getState().UserDataSlice.accessToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: [
    "Prescription",
    "Address",
    "Orders",
    "Cart",
    "Coupons",
    "User",
    "Auth",
  ],

  endpoints(build) {
    return {
      getPrescriptions: build.query<Prescription[], void>({
        query: () => ({ url: "api/v1/users/prescriptions/", method: "get" }),
        providesTags: ["Prescription"],
      }),
      getUserData: build.query<UserData, void>({
        query: () => ({ url: "api/v1/users/profile/", method: "get" }),
        providesTags: ["User"],
      }),
      downloadPrescription: build.query<BlobPart, number>({
        query: (prescriptionId) => ({
          url: `api/v1/users/prescriptions/${prescriptionId}/pdf/`,
          method: "get",
          responseHandler: (response) => response.blob(),
        }),
      }),
      getAuthToken: build.query<{ access: string }, string>({
        query: (userId) => ({
          url: `get_auth_token/${userId}`,
          method: "PATCH",
        }),
        providesTags: ["Auth"],
      }),
    };
  },
});

export default apis;
