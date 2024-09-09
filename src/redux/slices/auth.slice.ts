import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthSettings } from './auth.api';

const initialState = {
  enableNewOTP: false,
  status: false,
  response: null,
  // raw data from JSON
  rawData: {
    cryptoAddress: null,
    withdrawalCryptoAddress: null,
  },
  processedData: {
    cryptoAddress: null,
    withdrawalCryptoAddress: null,
  },
};

export const authSettingsSlice = createSlice({
  name: 'auth-settings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuthSettings.fulfilled, (state, action) => {
      const { response } = action?.payload || {};
      state.response = response as any;
      state.status = true;
    });
    builder.addCase(fetchAuthSettings.pending, (state) => {
      state.status = false;
    });
  },
});

export default authSettingsSlice.reducer;
