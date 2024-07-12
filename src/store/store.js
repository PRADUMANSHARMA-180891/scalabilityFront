import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../pages/auth/AuthSlice";
import CompanySlice from "../pages/company/CompanySlice";


const store = configureStore({
    reducer: {
      auth: AuthSlice,
      company: CompanySlice
    }
  });
  
  export default store;