import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../pages/auth/AuthSlice";


const store = configureStore({
    reducer: {
      auth: AuthSlice 
    }
  });
  
  export default store;