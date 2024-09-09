import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * @param {String} authType - constant value from OTP_VERIFICATION_TYPE, e.g. CRYPTO_ADDRESS
 * @param {Object} splConfig - isPublic, authSettingType
 */
export const fetchAuthSettings = createAsyncThunk('auth-settings-slice/fetchAuthSettings', async () => {
  try {
    return { response: {} };
  } catch (err) {
    console.error(err);
  }
});
