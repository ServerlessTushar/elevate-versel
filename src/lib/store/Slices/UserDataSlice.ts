import { createSlice } from "@reduxjs/toolkit";
import apis from "../rtk";

const initialState: UserSlice = {
  userData: null,
  accessToken: null,
  isTokenExpired: false,
};

export const userSlice = createSlice({
  name: "UserDataSlice",
  initialState,
  reducers: {
    setUserData(state, action) {
      if (action?.payload?.id) {
        const user = action.payload;
      }
      state.userData = action.payload;
    },
    setToken(state, action) {
      state.accessToken = action.payload;
    },
    removeUserData(state, action) {
      state.userData = null;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      apis.endpoints.getUserData.matchFulfilled,
      (state, action) => {
        state.userData = action.payload;
      }
    );
    builder.addMatcher(
      apis.endpoints.getAuthToken.matchFulfilled,
      (state, action) => {
        state.accessToken = action.payload.access;
      }
    );
    builder.addMatcher(
      apis.endpoints.getAuthToken.matchRejected,
      (state, action) => {
        state.isTokenExpired = true;
      }
    );
  },
});

export default userSlice.reducer;
export const UserDataActions = userSlice.actions;
