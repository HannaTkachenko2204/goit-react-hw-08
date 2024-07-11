import { combineReducers } from "redux";
import contactsReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import authSliceReducer from "./auth/slice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, authSliceReducer);

const rootReducer = combineReducers({
  auth: persistedReducer,
  contacts: contactsReducer,
  filters: filtersReducer,
});

export default rootReducer;
