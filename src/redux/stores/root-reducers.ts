import { combineReducers } from 'redux';
import { authSettingsSlice } from '../slices/auth.slice';

// If multiple components need access to some data, in that case we store such data in redux.

const rootReducer = combineReducers({
   authSettingsSlice
});

export default rootReducer;
